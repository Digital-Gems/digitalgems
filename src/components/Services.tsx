import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: "📅", title: "Online booking", desc: "Clients pick a service, a specialist and a time, and confirm in minutes. Built for salons, clinics, dental practices and restaurants." },
  { icon: "📄", title: "Document processing", desc: "Turn stacks of PDFs, like insurance quotes, into a finished, formatted Excel comparison." },
  { icon: "📣", title: "Social media content", desc: "Type a topic and get a ready-to-post, AI-written social post, with an optional image." },
  { icon: "🔧", title: "Custom builds and integrations", desc: "Your repetitive task, automated and connected to the tools you already use." },
];

const Services = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="services" className="px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">What I Build</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        Solutions built for how{' '}<br className="hidden md:block" />your business works
      </h2>
      <p className="text-dg-grey text-[0.82rem] md:text-[1.05rem] max-w-[560px] leading-[1.7] font-light">
        Things I've built and can set up for your business.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-[60px]">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-[14px] p-5 md:p-8 cursor-default transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid hsl(170 100% 45% / 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,229,200,0.4)";
              e.currentTarget.style.background = "rgba(0,229,200,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "hsl(170 100% 45% / 0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <span className="text-[1.4rem] md:text-[2rem] mb-3 md:mb-5 block" style={{ filter: "drop-shadow(0 0 12px rgba(0,229,200,0.4))" }}>
              {s.icon}
            </span>
            <div className="text-[0.82rem] md:text-[1.05rem] mb-2 text-dg-white" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, lineHeight: "1.5" }}>{s.title}</div>
            <p className="text-[0.75rem] md:text-[0.875rem] text-dg-grey leading-[1.65]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
