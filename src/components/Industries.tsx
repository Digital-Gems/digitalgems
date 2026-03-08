import { useScrollReveal } from "@/hooks/useScrollReveal";

const industries = [
  { emoji: "🏢", title: "Professional Services", desc: "Law firms, accountants, consultants — automate client intake, billing, and reporting." },
  { emoji: "🏡", title: "Real Estate", desc: "Automate lead follow-up, listing updates, and client communications at scale." },
  { emoji: "🏥", title: "Healthcare & Wellness", desc: "Patient scheduling, reminder systems, and admin workflows — handled automatically." },
  { emoji: "🛍️", title: "Retail & E-Commerce", desc: "Customer support agents, order tracking, and personalised recommendations that never sleep." },
  { emoji: "💰", title: "Financial Services", desc: "Compliance documentation, client reporting, and data reconciliation — automated and accurate." },
  { emoji: "🎓", title: "Education & Training", desc: "Enrolment, student queries, scheduling, and course administration handled by AI." },
  { emoji: "🚚", title: "Logistics & Operations", desc: "Dispatch notifications, tracking updates, and supplier communications on autopilot." },
  { emoji: "🔧", title: "Any Service Business", desc: "If your team handles repetitive tasks manually, we can likely automate a significant portion." },
];

const Industries = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="industries" className="px-5 md:px-10 lg:px-[60px] py-16 md:py-[100px]">
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">Who We Work With</div>
      <h2 className="font-head font-extrabold mb-4 text-dg-white" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}>
        Built for businesses that<br className="hidden md:block" />run on relationships
      </h2>
      <p className="text-dg-grey text-[0.95rem] md:text-[1.05rem] max-w-[560px] leading-[1.75] font-light">
        We specialise in service-driven businesses where your team's time is your most valuable asset.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-[60px]">
        {industries.map((ind) => (
          <div
            key={ind.title}
            className="rounded-xl text-center cursor-default transition-all p-5 md:p-7"
            style={{
              border: "1px solid hsl(170 100% 45% / 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,229,200,0.35)";
              e.currentTarget.style.background = "rgba(0,229,200,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "hsl(170 100% 45% / 0.12)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <span className="text-[1.4rem] md:text-[1.6rem] block mb-2 md:mb-3">{ind.emoji}</span>
            <div className="text-[0.88rem] md:text-[0.95rem] mb-1.5 tracking-normal text-dg-white" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, lineHeight: "1.5" }}>{ind.title}</div>
            <p className="text-[0.68rem] md:text-[0.72rem] text-dg-grey leading-[1.5]">{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
