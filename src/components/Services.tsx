import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: "🤖", title: "Intelligent Customer Service Agents", desc: "24/7 AI agents that handle common customer queries, support tickets, FAQs, and escalations — so your team only touches the conversations that need a human touch." },
  { icon: "⚙️", title: "Workflow & Process Automation", desc: "Automate data entry, document processing, invoice handling, onboarding workflows, and any repetitive task eating into your team's day." },
  { icon: "📊", title: "AI-Powered Reporting & Insights", desc: "Turn your raw data into clear, actionable dashboards and automated reports. Get weekly AI-generated summaries of your key business metrics without lifting a finger." },
  { icon: "📧", title: "Sales & Email Automation", desc: "AI that drafts personalised outreach, follows up with leads automatically, scores your pipeline, and keeps your CRM updated — so your sales team can focus on closing." },
  { icon: "🧠", title: "Custom Internal Knowledge Agents", desc: "Give your team an AI assistant trained on your internal docs, policies, and processes. Instant answers to internal questions — no more searching through folders." },
  { icon: "🔗", title: "System Integration & API Connections", desc: "Connect your CRM, accounting software, email platform, and other tools so data flows automatically between them. Eliminate manual syncing forever." },
];

const Services = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="services" className="px-5 md:px-10 lg:px-[60px] py-16 md:py-[100px]">
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">What We Build</div>
      <h2 className="font-head font-extrabold mb-4 text-dg-white" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)" }}>
        AI solutions tailored to<br className="hidden md:block" />how your business works
      </h2>
      <p className="text-dg-grey text-[0.95rem] md:text-[1.05rem] max-w-[560px] leading-[1.75] font-light">
        We don't sell software licences — we build custom AI integrations designed around your specific operations, team size, and goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-[60px]">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-[14px] p-6 md:p-8 cursor-default transition-all duration-300 hover:-translate-y-1"
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
            <span className="text-[1.8rem] md:text-[2rem] mb-4 md:mb-5 block" style={{ filter: "drop-shadow(0 0 12px rgba(0,229,200,0.4))" }}>
              {s.icon}
            </span>
            <h3 className="font-head text-[0.95rem] font-bold mb-2.5 tracking-[-0.01em] text-dg-white">{s.title}</h3>
            <p className="text-[0.85rem] md:text-[0.875rem] text-dg-grey leading-[1.7]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
