const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden px-4 md:px-10 lg:px-[60px] pt-[110px] md:pt-[180px] pb-16 md:pb-28">
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
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.62rem] md:text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-dg-teal mb-4 md:mb-7"
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
          className="font-syne font-head font-extrabold mb-4 md:mb-6 text-dg-white"
          style={{
            fontSize: "clamp(1.25rem, 4.5vw, 3.2rem)",
            animation: "fadeUp 0.6s 0.1s ease both",
          }}
        >
          Stop wasting hours<br />on work <em className="not-italic text-dg-teal">AI can do</em>
        </h1>

        <p
          className="text-[0.82rem] md:text-[1.15rem] text-dg-grey max-w-[560px] leading-[1.7] mb-6 md:mb-10 font-light"
          style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
        >
          I build AI automation into your business, taking care of the repetitive work, surfacing the insights and giving your team back the time to do what matters: building relationships and growing your business.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4" style={{ animation: "fadeUp 0.6s 0.3s ease both" }}>
          <a
            href={`mailto:info@digitalgems.co.za?subject=${encodeURIComponent("Enquiry from digitalgems.co.za")}`}
            className="inline-flex items-center justify-center gap-2 text-[0.72rem] md:text-[0.88rem] tracking-normal rounded-lg no-underline transition-all"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              lineHeight: "1.5",
              background: "hsl(170 100% 45%)",
              color: "hsl(213 56% 6%)",
              padding: "11px 22px",
              boxShadow: "0 0 30px rgba(0,229,200,0.2)",
            }}
          >
            Email Me
          </a>
          <a
            href="#examples"
            className="inline-flex items-center gap-2 font-medium text-[0.72rem] md:text-[0.88rem] tracking-normal rounded-lg no-underline text-dg-white transition-all"
            style={{
              padding: "11px 20px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "transparent",
            }}
          >
            See Example Builds
          </a>
        </div>

        <p
          className="mt-5 md:mt-7 text-[0.68rem] md:text-[0.82rem] text-dg-grey"
          style={{ animation: "fadeUp 0.6s 0.4s ease both" }}
        >
          Based in Durban. Serving businesses across South Africa.
        </p>
      </div>
    </section>
  );
};

export default Hero;
