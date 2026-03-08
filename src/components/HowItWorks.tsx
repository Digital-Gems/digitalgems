import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Discovery & Audit", desc: "We map your current workflows, identify your biggest time drains, and pinpoint exactly where AI will have the highest impact. You'll get a clear action plan even if you don't proceed.", duration: "Week 1" },
  { num: "02", title: "Build & Integrate", desc: "Our team builds your custom AI agents and connects them to your existing tools. We test rigorously, iterate based on your feedback, and make sure everything runs flawlessly.", duration: "Weeks 2–3" },
  { num: "03", title: "Launch & Optimise", desc: "We go live, train your team, and continue monitoring performance. Monthly check-ins ensure your AI keeps improving as your business evolves.", duration: "Week 4 onwards" },
];

const HowItWorks = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="how" className="bg-dg-bg2" style={{ padding: "100px 60px" }}>
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">The Process</div>
      <h2 className="font-head font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-dg-white" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
        From first call to live AI agent<br />in three simple steps
      </h2>
      <p className="text-dg-grey text-[1.05rem] max-w-[560px] leading-[1.75] font-light">
        We keep it simple, fast, and collaborative — you'll know exactly what's happening at every stage.
      </p>

      <div className="grid grid-cols-3 relative mt-[70px]">
        {/* Connecting line */}
        <div
          className="absolute h-px"
          style={{
            top: 36,
            left: "calc(16.66% + 20px)",
            right: "calc(16.66% + 20px)",
            background: "linear-gradient(90deg, hsl(170 100% 45%), rgba(0,229,200,0.2), hsl(170 100% 45%))",
          }}
        />
        {steps.map((s) => (
          <div key={s.num} className="relative px-8">
            <div
              className="w-[72px] h-[72px] rounded-full flex items-center justify-center font-head text-[1.4rem] font-extrabold text-dg-teal mb-7"
              style={{
                background: "hsl(213 56% 6%)",
                border: "2px solid hsl(170 100% 45%)",
                boxShadow: "0 0 24px rgba(0,229,200,0.2)",
              }}
            >
              {s.num}
            </div>
            <h3 className="font-head text-[1.2rem] font-bold mb-2.5 tracking-[-0.01em] text-dg-white">{s.title}</h3>
            <p className="text-[0.875rem] text-dg-grey leading-[1.75]">{s.desc}</p>
            <span className="inline-block mt-3.5 text-[0.75rem] text-dg-teal font-semibold tracking-[0.05em] uppercase">
              {s.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
