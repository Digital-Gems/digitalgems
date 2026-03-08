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
      className="relative z-[1] bg-dg-bg2 grid grid-cols-4 gap-6"
      style={{
        borderTop: "1px solid hsl(170 100% 45% / 0.12)",
        borderBottom: "1px solid hsl(170 100% 45% / 0.12)",
        padding: "32px 60px",
      }}
    >
      {stats.map((s) => (
        <div key={s.num} className="text-center p-2">
          <div className="font-head text-[1.8rem] font-extrabold text-dg-teal tracking-[-0.03em] leading-none mb-1.5">
            {s.num}
          </div>
          <div className="text-[0.85rem] text-dg-grey">{s.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
