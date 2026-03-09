import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: "😩", title: "Manual, repetitive admin consuming hours daily", desc: "Data entry, scheduling, reporting, copy-paste workflows — done by expensive, talented people who were hired to think, not type." },
  { icon: "📬", title: "Slow, inconsistent customer response times", desc: "Queries sit in inboxes. Clients feel ignored. Your team scrambles to keep up — and relationship quality suffers." },
  { icon: "🔍", title: "Business data you have but can't act on", desc: "You're sitting on valuable insights trapped in spreadsheets, CRMs, and inboxes that no one has time to properly analyse." },
  { icon: "📈", title: "Growth limited by operational bottlenecks", desc: "You can't scale without hiring more people — until you automate the work that doesn't need them." },
];

const solutionPoints = [
  "Works inside your existing tools (CRM, email, Slack, etc.)",
  "Built specifically around your workflows — not generic templates",
  "Up and running in as little as 2 weeks",
  "Ongoing support, monitoring & iteration included",
  "Your team stays in control — AI handles the grunt work",
];

const ProblemSolution = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="problem" className="bg-dg-bg2 px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">
        The Problem We Solve
      </div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        Your team is buried in tasks{' '}<br className="hidden md:block" />that shouldn't need humans
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center mt-8 md:mt-[60px]">
        <ul className="list-none flex flex-col gap-3 md:gap-5">
          {problems.map((p) => (
            <li
              key={p.title}
              className="flex items-start gap-2.5 md:gap-4 rounded-[10px] p-3.5 md:p-5"
              style={{
                background: "rgba(255,80,80,0.06)",
                border: "1px solid rgba(255,80,80,0.12)",
              }}
            >
              <span className="text-[1rem] md:text-[1.4rem] shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <strong className="block font-semibold text-[0.78rem] md:text-[0.95rem] mb-0.5 md:mb-1 text-dg-white">{p.title}</strong>
                <span className="text-[0.72rem] md:text-[0.85rem] text-dg-grey">{p.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="rounded-2xl p-5 md:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(0,229,200,0.08), rgba(0,229,200,0.02))",
            border: "1px solid rgba(0,229,200,0.2)",
          }}
        >
          <h3 className="font-syne font-head text-[0.95rem] md:text-[1.25rem] font-bold mb-3 md:mb-4 text-dg-white">
            AI agents that work<br />while your team sleeps
          </h3>
          <p className="text-dg-grey text-[0.78rem] md:text-[0.95rem] leading-[1.7] mb-5 md:mb-7">
            We design, build, and integrate custom AI agents that slot directly into your existing tools and workflows. No ripping out your stack. No 6-month IT projects. Just smart automation that works from day one.
          </p>
          <ul className="list-none flex flex-col gap-2.5 md:gap-3">
            {solutionPoints.map((pt) => (
              <li key={pt} className="flex items-center gap-2 md:gap-2.5 text-[0.75rem] md:text-[0.9rem] text-dg-white">
                <span className="text-dg-teal font-bold text-[0.78rem] shrink-0">✓</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
