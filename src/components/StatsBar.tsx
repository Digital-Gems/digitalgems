import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { num: "15+", label: "Hours saved per employee, per week" },
  { num: "40%", label: "Average reduction in operational costs" },
  { num: "3×", label: "Faster response time for customer queries" },
  { num: "14 days", label: "Average time to first live AI agent" },
];

const StatsBar = () => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="relative z-[1] bg-dg-bg2 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-5 md:px-10 lg:px-[60px] py-6 md:py-8"
      style={{
        borderTop: "1px solid hsl(170 100% 45% / 0.12)",
        borderBottom: "1px solid hsl(170 100% 45% / 0.12)",
      }}
    >
      {stats.map((s) => (
        <div key={s.num} className="text-center p-2">
          <div className="font-head text-[1.5rem] md:text-[1.8rem] font-extrabold text-dg-teal tracking-[-0.03em] leading-none mb-1.5">
            {s.num}
          </div>
          <div className="text-[0.78rem] md:text-[0.85rem] text-dg-grey">{s.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
