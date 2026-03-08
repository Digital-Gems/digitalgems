import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Discovery & Audit", desc: "We map your current workflows, identify your biggest time drains, and pinpoint exactly where AI will have the highest impact. You'll get a clear action plan even if you don't proceed.", duration: "Week 1" },
  { num: "02", title: "Build & Integrate", desc: "Our team builds your custom AI agents and connects them to your existing tools. We test rigorously, iterate based on your feedback, and make sure everything runs flawlessly.", duration: "Weeks 2–3" },
  { num: "03", title: "Launch & Optimise", desc: "We go live, train your team, and continue monitoring performance. Monthly check-ins ensure your AI keeps improving as your business evolves.", duration: "Week 4 onwards" },
];

const HowItWorks = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="how" className="bg-dg-bg2 px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">The Process</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        From first call to live AI agent<br className="hidden md:block" />in three simple steps
      </h2>
      <p className="text-dg-grey text-[0.82rem] md:text-[1.05rem] max-w-[560px] leading-[1.7] font-light">
        We keep it simple, fast, and collaborative — you'll know exactly what's happening at every stage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 relative mt-8 md:mt-[70px] gap-6 md:gap-0">
        {/* Connecting line - desktop only */}
        <div
          className="absolute h-px hidden md:block"
          style={{
            top: 30,
            left: "calc(16.66% + 20px)",
            right: "calc(16.66% + 20px)",
            background: "linear-gradient(90deg, hsl(170 100% 45%), rgba(0,229,200,0.2), hsl(170 100% 45%))",
          }}
        />
        {steps.map((s) => (
          <div key={s.num} className="relative px-0 md:px-8">
            <div
              className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center font-head text-[0.88rem] md:text-[1.1rem] font-extrabold text-dg-teal mb-4 md:mb-7"
              style={{
                background: "hsl(213 56% 6%)",
                border: "2px solid hsl(170 100% 45%)",
                boxShadow: "0 0 24px rgba(0,229,200,0.2)",
              }}
            >
              {s.num}
            </div>
            <h3 className="font-syne font-head text-[0.88rem] md:text-[1rem] font-bold mb-2 text-dg-white">{s.title}</h3>
            <p className="text-[0.75rem] md:text-[0.875rem] text-dg-grey leading-[1.7]">{s.desc}</p>
            <span className="inline-block mt-3 text-[0.68rem] md:text-[0.75rem] text-dg-teal font-semibold tracking-[0.05em] uppercase">
              {s.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
