import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  surname: z.string().trim().min(1, "Surname is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  company: z.string().max(200).optional(),
  notes: z.string().max(2000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  padding: "14px 20px",
  color: "#f0f4ff",
  fontFamily: "'Epilogue', sans-serif",
  width: "100%",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const BookACall = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [form, setForm] = useState<FormData>({
    firstName: "",
    surname: "",
    phone: "",
    email: "",
    company: "",
    notes: "",
  });

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#00e5c8";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const Label = ({ text, optional }: { text: string; optional?: boolean }) => (
    <label
      className="block mb-1.5"
      style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#f0f4ff" }}
    >
      {text}
      {optional && <span style={{ color: "#7a8ba8", fontWeight: 400 }}> (Optional)</span>}
    </label>
  );

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-[0.75rem] mt-1" style={{ color: "hsl(0 84% 60%)" }}>{msg}</p> : null;

  return (
    <>
      <Navbar />

      <section className="relative min-h-[100vh] flex flex-col items-center overflow-hidden px-4 md:px-10 lg:px-[60px] pt-[130px] md:pt-[180px] pb-16 md:pb-28">
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,200,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
        {/* Glowing orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,200,0.12) 0%, transparent 70%)",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Hero text */}
        <div className="relative z-[1] text-center mb-8 md:mb-12 max-w-[600px]">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.62rem] md:text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-dg-teal mb-4 md:mb-6"
            style={{
              background: "rgba(0,229,200,0.1)",
              border: "1px solid rgba(0,229,200,0.25)",
              animation: "fadeUp 0.6s ease both",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-dg-teal" style={{ animation: "pulse-dot 2s infinite" }} />
            Free 30-Minute Session
          </div>

          <h1
            className="font-syne font-head font-extrabold mb-4 text-dg-white"
            style={{ fontSize: "clamp(1.25rem, 4vw, 2.8rem)", animation: "fadeUp 0.6s 0.1s ease both" }}
          >
            Book Your Free Discovery Call
          </h1>

          <p
            className="text-[0.82rem] md:text-[1.05rem] text-dg-grey font-light leading-[1.7]"
            style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
          >
            Tell us a little about yourself and we'll be in touch within 24 hours to schedule your free session.
          </p>
        </div>

        {/* Form card */}
        <div
          className="relative z-[1] w-full max-w-[560px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(0,229,200,0.15)",
            borderRadius: 16,
            padding: "48px",
            animation: "fadeUp 0.6s 0.3s ease both",
          }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <Label text="First Name" />
                <input
                  type="text"
                  placeholder="Your first name"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
                <FieldError msg={errors.firstName} />
              </div>

              <div className="mb-4">
                <Label text="Surname" />
                <input
                  type="text"
                  placeholder="Your surname"
                  value={form.surname}
                  onChange={(e) => update("surname", e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
                <FieldError msg={errors.surname} />
              </div>

              <div className="mb-4">
                <Label text="Phone Number" />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
                <FieldError msg={errors.phone} />
              </div>

              <div className="mb-4">
                <Label text="Email Address" />
                <input
                  type="email"
                  placeholder="Your work email address"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
                <FieldError msg={errors.email} />
              </div>

              <div className="mb-4">
                <Label text="Company" optional />
                <input
                  type="text"
                  placeholder="Your company name (optional)"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={inputStyle}
                />
              </div>

              <div className="mb-6">
                <Label text="Notes" optional />
                <textarea
                  rows={5}
                  placeholder="Anything you'd like us to know before the call? e.g. your industry, main challenges, tools you currently use"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="w-full font-syne font-bold text-[0.9rem] md:text-[1rem] transition-all hover:-translate-y-0.5"
                style={{
                  background: "hsl(170 100% 45%)",
                  color: "#050d1a",
                  padding: 16,
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  boxShadow: "0 0 30px rgba(0,229,200,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#00b09c";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,229,200,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(170 100% 45%)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(0,229,200,0.2)";
                }}
              >
                Book My Free Call →
              </button>

              <p className="text-center mt-4 text-[0.72rem] text-dg-grey">
                No commitment required · Free audit included · Response within 24 hours
              </p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div
                className="mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-full"
                style={{ background: "rgba(0,229,200,0.15)", border: "2px solid hsl(170 100% 45%)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(170 100% 45%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-syne font-head font-extrabold text-dg-white mb-3" style={{ fontSize: "clamp(1.1rem, 3vw, 1.8rem)" }}>
                You're booked in!
              </h2>
              <p className="text-dg-grey text-[0.85rem] md:text-[1rem] mb-2 font-light leading-[1.7] max-w-[420px] mx-auto">
                Thank you! We've received your details and will be in touch within 24 hours to confirm your free discovery call.
              </p>
              <p className="text-dg-grey text-[0.72rem] mb-6">In the meantime, feel free to explore our services.</p>
              <Link
                to="/"
                className="inline-flex items-center justify-center text-[0.85rem] font-bold rounded-lg no-underline transition-all hover:-translate-y-0.5"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  color: "hsl(170 100% 45%)",
                  border: "1px solid hsl(170 100% 45%)",
                  padding: "12px 28px",
                  background: "transparent",
                }}
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BookACall;
