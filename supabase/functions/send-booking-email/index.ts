import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    // Build email body
    const htmlBody = `
      <h2 style="color:#00e5c8;">New Discovery Call Booking</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;color:#333;">First Name</td><td style="padding:8px;">${firstName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Surname</td><td style="padding:8px;">${surname}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Phone</td><td style="padding:8px;">${phone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Email</td><td style="padding:8px;">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Company</td><td style="padding:8px;">${company || 'Not provided'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#333;">Notes</td><td style="padding:8px;">${notes || 'None'}</td></tr>
      </table>
    `;

    const textBody = `New Discovery Call Booking\n\nFirst Name: ${firstName}\nSurname: ${surname}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nNotes: ${notes || 'None'}`;

    if (RESEND_API_KEY) {
      // Use Resend if API key is available
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Digital Gems Bookings <onboarding@resend.dev>',
          to: ['digitalgems@agentmail.to'],
          subject: `New Discovery Call: ${firstName} ${surname}`,
          html: htmlBody,
          text: textBody,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error('Resend error:', data);
        throw new Error(`Email send failed: ${JSON.stringify(data)}`);
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
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
