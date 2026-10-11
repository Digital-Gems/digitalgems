import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { num: "~3 min", label: "Per comparison, down from 45-60 min" },
  { num: "20+ hrs", label: "Saved per month at one insurance broker" },
  { num: "PDF to Excel", label: "One upload, one finished sheet" },
  { num: "Minutes", label: "Not hours, per client" },
];

const StatsBar = () => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="relative z-[1] bg-dg-bg2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4 md:px-10 lg:px-[60px] py-5 md:py-8"
      style={{
        borderTop: "1px solid hsl(170 100% 45% / 0.12)",
        borderBottom: "1px solid hsl(170 100% 45% / 0.12)",
      }}
    >
      {stats.map((s) => (
        <div key={s.num} className="text-center p-1.5 md:p-2">
          <div className="font-head text-[1.2rem] md:text-[1.8rem] font-extrabold text-dg-teal tracking-[-0.03em] leading-none mb-1">
            {s.num}
          </div>
          <div className="text-[0.68rem] md:text-[0.85rem] text-dg-grey">{s.label}</div>
        </div>
      ))}
      <div className="col-span-2 md:col-span-4 text-center text-[0.65rem] md:text-[0.78rem] text-dg-grey">
        Results from the AI policy comparison tool I built for a Westville insurance broker.{" "}
        <a href="/case-study.html" target="_blank" rel="noopener noreferrer" className="text-dg-teal no-underline hover:underline">
          Read the case study
        </a>
      </div>
    </div>
  );
};

export default StatsBar;
