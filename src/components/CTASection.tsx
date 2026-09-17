import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CTASection = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    navigate(trimmed ? `/book-a-call?email=${encodeURIComponent(trimmed)}` : "/book-a-call");
  };
  return (
    <section ref={ref} id="contact" className="text-center relative overflow-hidden px-4 md:px-10 lg:px-[60px] py-12 md:py-[120px]">
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,200,0.1) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">Get Started</div>
       <h2
         className="font-syne font-head font-extrabold max-w-[700px] mx-auto mb-4 md:mb-5 text-dg-white"
        style={{ fontSize: "clamp(1.15rem, 3vw, 2.8rem)" }}
      >
        Ready to give your team<br />their time back?
      </h2>
      <p className="text-dg-grey text-[0.82rem] md:text-[1.05rem] max-w-[480px] mx-auto mb-6 md:mb-10 font-light">
        Book a free 30-minute discovery call. We'll map out exactly where AI can save you the most time — no obligation, no jargon.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 md:gap-3 justify-center flex-wrap relative z-[1]">
        <label htmlFor="cta-email" className="sr-only">Your work email address</label>
        <input
          id="cta-email"
          name="email"
          type="email"
          placeholder="Your work email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg text-[0.78rem] md:text-[0.95rem] outline-none transition-all w-full sm:w-[280px] text-dg-white placeholder:text-dg-grey"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "11px 16px",
            fontFamily: "var(--font-body)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(170 100% 45%)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 text-[0.72rem] md:text-[0.88rem] tracking-normal rounded-lg no-underline transition-all"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            lineHeight: "1.5",
            background: "hsl(170 100% 45%)",
            color: "hsl(213 56% 6%)",
            padding: "11px 22px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 30px rgba(0,229,200,0.2)",
          }}
        >
          Book Free Discovery Call
          <ArrowIcon />
        </button>
      </form>
      <p className="mt-3 md:mt-4 text-[0.65rem] md:text-[0.78rem] text-dg-grey relative z-[1]">
        No commitment required · Response within 24 hours · Free audit included
      </p>
    </section>
  );
};

export default CTASection;
