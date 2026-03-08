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
    <section ref={ref} id="services" style={{ padding: "100px 60px" }}>
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">What We Build</div>
      <h2 className="font-head font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-dg-white" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
        AI solutions tailored to<br />how your business works
      </h2>
      <p className="text-dg-grey text-[1.05rem] max-w-[560px] leading-[1.75] font-light">
        We don't sell software licences — we build custom AI integrations designed around your specific operations, team size, and goals.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-[60px]">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-[14px] p-8 cursor-default transition-all duration-300 hover:-translate-y-1"
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
            <span className="text-[2rem] mb-5 block" style={{ filter: "drop-shadow(0 0 12px rgba(0,229,200,0.4))" }}>
              {s.icon}
            </span>
            <h3 className="font-head text-[0.95rem] font-bold mb-2.5 tracking-[-0.01em] text-dg-white">{s.title}</h3>
            <p className="text-[0.875rem] text-dg-grey leading-[1.7]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
