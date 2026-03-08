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
    <section ref={ref} id="problem" className="bg-dg-bg2" style={{ padding: "100px 60px" }}>
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">
        The Problem We Solve
      </div>
      <h2 className="font-head font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-dg-white" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}>
        Your team is buried in tasks<br />that shouldn't need humans
      </h2>

      <div className="grid grid-cols-2 gap-20 items-center mt-[60px]">
        <ul className="list-none flex flex-col gap-5">
          {problems.map((p) => (
            <li
              key={p.title}
              className="flex items-start gap-4 rounded-[10px]"
              style={{
                padding: "20px 24px",
                background: "rgba(255,80,80,0.06)",
                border: "1px solid rgba(255,80,80,0.12)",
              }}
            >
              <span className="text-[1.4rem] shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <strong className="block font-semibold text-[0.95rem] mb-1 text-dg-white">{p.title}</strong>
                <span className="text-[0.85rem] text-dg-grey">{p.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="rounded-2xl p-10"
          style={{
            background: "linear-gradient(135deg, rgba(0,229,200,0.08), rgba(0,229,200,0.02))",
            border: "1px solid rgba(0,229,200,0.2)",
          }}
        >
          <h3 className="font-head text-[1.6rem] font-bold mb-4 tracking-[-0.02em] text-dg-white">
            AI agents that work<br />while your team sleeps
          </h3>
          <p className="text-dg-grey text-[0.95rem] leading-[1.75] mb-7">
            We design, build, and integrate custom AI agents that slot directly into your existing tools and workflows. No ripping out your stack. No 6-month IT projects. Just smart automation that works from day one.
          </p>
          <ul className="list-none flex flex-col gap-3">
            {solutionPoints.map((pt) => (
              <li key={pt} className="flex items-center gap-2.5 text-[0.9rem] text-dg-white">
                <span className="text-dg-teal font-bold text-[0.85rem] shrink-0">✓</span>
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
