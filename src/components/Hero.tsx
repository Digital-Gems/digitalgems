const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ padding: "140px 60px 80px" }}>
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
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-[1] max-w-[780px]">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-dg-teal mb-7"
          style={{
            background: "rgba(0,229,200,0.1)",
            border: "1px solid rgba(0,229,200,0.25)",
            animation: "fadeUp 0.6s ease both",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-dg-teal"
            style={{ animation: "pulse-dot 2s infinite" }}
          />
          AI Integration Specialists
        </div>

        <h1
          className="font-head font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 text-dg-white"
          style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            animation: "fadeUp 0.6s 0.1s ease both",
          }}
        >
          Stop wasting hours<br />on work <em className="not-italic text-dg-teal">AI can do</em>
        </h1>

        <p
          className="text-[1.15rem] text-dg-grey max-w-[560px] leading-[1.75] mb-10 font-light"
          style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
        >
          Digital Gems integrates intelligent AI agents into your business — automating the repetitive, surfacing the insights, and giving your team back the time to do what matters: building relationships and growing your business.
        </p>

        <div className="flex items-center gap-4" style={{ animation: "fadeUp 0.6s 0.3s ease both" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-head font-bold text-[0.95rem] rounded-lg no-underline transition-all hover:-translate-y-0.5"
            style={{
              background: "hsl(170 100% 45%)",
              color: "hsl(213 56% 6%)",
              padding: "15px 32px",
              boxShadow: "0 0 30px rgba(0,229,200,0.2)",
            }}
          >
            Book a Free Discovery Call
            <ArrowIcon />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 font-medium text-[0.95rem] rounded-lg no-underline text-dg-white transition-all"
            style={{
              padding: "15px 28px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
            }}
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
