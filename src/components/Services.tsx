import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: "🤖", title: "AI Customer Service Assistants", desc: "24/7 AI assistants that handle common customer queries, support tickets, FAQs, and escalations, so your team only touches the conversations that need a human touch." },
  { icon: "⚙️", title: "Workflow & Process Automation", desc: "Automate data entry, document processing, invoice handling, onboarding workflows, and any repetitive task eating into your team's day." },
  { icon: "📊", title: "AI-Powered Reporting & Insights", desc: "Turn your raw data into clear, actionable dashboards and automated reports. Get weekly AI-generated summaries of your key business metrics without the manual work." },
  { icon: "📧", title: "Sales & Email Automation", desc: "AI that drafts personalised outreach, follows up with leads automatically, scores your pipeline, and keeps your CRM updated, so your sales team can focus on closing." },
  { icon: "🧠", title: "Custom Internal Knowledge Assistants", desc: "Give your team an AI assistant trained on your internal docs, policies, and processes. Quick answers to internal questions, no more searching through folders." },
  { icon: "🔗", title: "System Integration & API Connections", desc: "Connect your CRM, accounting software, email platform, and other tools so data flows automatically between them. Cut out manual syncing between your tools." },
];

const Services = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="services" className="px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">What I Build</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        AI solutions tailored to{' '}<br className="hidden md:block" />how your business works
      </h2>
      <p className="text-dg-grey text-[0.82rem] md:text-[1.05rem] max-w-[560px] leading-[1.7] font-light">
        I don't sell software licences. I build custom AI integrations designed around your specific operations, team size, and goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-[60px]">
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
