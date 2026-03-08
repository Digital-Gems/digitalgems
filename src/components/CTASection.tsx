import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CTASection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="contact" className="text-center relative overflow-hidden px-5 md:px-10 lg:px-[60px] py-16 md:py-[120px]">
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
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">Get Started</div>
       <h2
         className="font-syne font-head font-extrabold max-w-[700px] mx-auto mb-5 text-dg-white"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)" }}
      >
        Ready to give your team<br />their time back?
      </h2>
      <p className="text-dg-grey text-[0.95rem] md:text-[1.05rem] max-w-[480px] mx-auto mb-8 md:mb-10 font-light">
        Book a free 30-minute discovery call. We'll map out exactly where AI can save you the most time — no obligation, no jargon.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap relative z-[1]">
        <input
          type="email"
          placeholder="Your work email address"
          className="rounded-lg text-[0.9rem] md:text-[0.95rem] outline-none transition-all w-full sm:w-[280px] text-dg-white placeholder:text-dg-grey"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "13px 20px",
            fontFamily: "var(--font-body)",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "hsl(170 100% 45%)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
        />
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 text-[0.85rem] md:text-[0.88rem] tracking-normal rounded-lg no-underline transition-all"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            lineHeight: "1.5",
            background: "hsl(170 100% 45%)",
            color: "hsl(213 56% 6%)",
            padding: "13px 28px",
            boxShadow: "0 0 30px rgba(0,229,200,0.2)",
          }}
        >
          Book Free Discovery Call
          <ArrowIcon />
        </a>
      </div>
      <p className="mt-4 text-[0.75rem] md:text-[0.78rem] text-dg-grey relative z-[1]">
        No commitment required · Response within 24 hours · Free audit included
      </p>
    </section>
  );
};

export default CTASection;
