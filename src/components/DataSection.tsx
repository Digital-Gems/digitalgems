import { useScrollReveal } from "@/hooks/useScrollReveal";

const points = [
  {
    icon: "🛡️",
    title: "POPIA aware",
    desc: "I build with the Protection of Personal Information Act in mind, and I'll tell you up front what data a tool touches and where it goes.",
  },
  {
    icon: "🎯",
    title: "Only what's needed",
    desc: "Each tool only works with the information it needs to do its job, nothing more.",
  },
  {
    icon: "🔍",
    title: "Clear about third parties",
    desc: "Some tools use AI providers such as Anthropic or Google. I'll tell you which ones are involved in your project.",
  },
  {
    icon: "📝",
    title: "Agreed in writing",
    desc: "How your data is handled is agreed before the project starts, so there are no surprises later.",
  },
];

const DataSection = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="data" className="bg-dg-bg2 px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">Your Data</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        Your information,{" "}<br className="hidden md:block" />handled properly
      </h2>
      <p className="text-dg-grey text-[0.82rem] md:text-[1.05rem] max-w-[560px] leading-[1.7] font-light">
        Client documents and customer details are sensitive. Here's how I treat them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-8 md:mt-[60px]">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-xl p-5 md:p-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid hsl(170 100% 45% / 0.12)",
            }}
          >
            <span className="text-[1.4rem] md:text-[1.8rem] block mb-3">{p.icon}</span>
            <h3 className="font-syne font-head font-bold text-dg-white text-[0.9rem] md:text-[1rem] mb-2">{p.title}</h3>
            <p className="text-[0.78rem] md:text-[0.875rem] text-dg-grey leading-[1.65]">{p.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 md:mt-8 text-[0.75rem] md:text-[0.85rem] text-dg-grey">
        Want the detail?{" "}
        <a href="/privacy-policy" className="text-dg-teal no-underline hover:underline">Read the privacy policy</a>
      </p>
    </section>
  );
};

export default DataSection;
