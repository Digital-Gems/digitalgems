import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, surname, phone, email, company, notes } = await req.json();

    if (!firstName || !surname || !phone || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const AGENTMAIL_API_KEY = Deno.env.get('AGENTMAIL_API_KEY');

    // Escaped values for safe HTML interpolation
    const safe = {
      firstName: escapeHtml(firstName),
      surname: escapeHtml(surname),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      company: escapeHtml(company || 'Not provided'),
      notes: escapeHtml(notes || 'None'),
    };

    const htmlBody = `
      <h2 style="color:#00e5c8;">New Discovery Call Booking</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;color:#333;">First Name</td><td style="padding:8px;">${safe.firstName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Surname</td><td style="padding:8px;">${safe.surname}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Phone</td><td style="padding:8px;">${safe.phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Email</td><td style="padding:8px;">${safe.email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Company</td><td style="padding:8px;">${safe.company}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Notes</td><td style="padding:8px;">${safe.notes}</td></tr>
      </table>
    `;

    const textBody = `New Discovery Call Booking\n\nFirst Name: ${firstName}\nSurname: ${surname}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nNotes: ${notes || 'None'}`;

    // Sanitize subject - strip newlines/control chars to prevent header injection
    const subjectName = `${firstName} ${surname}`.replace(/[\r\n]+/g, ' ').slice(0, 200);

    if (AGENTMAIL_API_KEY) {
      const inboxId = encodeURIComponent('digitalgems@agentmail.to');

      const res = await fetch(`https://api.agentmail.to/v0/inboxes/${inboxId}/messages/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AGENTMAIL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: ['digitalgems@agentmail.to'],
          subject: `New Discovery Call Booking: ${subjectName}`,
          html: htmlBody,
          text: textBody,
        }),
      });

      if (!res.ok) {
        const data = await res.text();
        console.error('Agentmail error:', res.status, data);
        return new Response(
          JSON.stringify({ error: 'Unable to send booking at this time. Please try again later.' }),
          { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } else {
      // Fallback: log the booking (no email provider configured)
      console.log('=== NEW BOOKING (no email provider) ===');
      console.log(textBody);
      console.log('========================================');

      return new Response(JSON.stringify({ success: true, note: 'Booking logged (no email provider configured)' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error processing booking:', error);
    return new Response(
      JSON.stringify({ error: 'An internal error occurred. Please try again later.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
