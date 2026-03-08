import { useScrollReveal } from "@/hooks/useScrollReveal";

const ROIStrip = () => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      id="results"
      style={{
        background: "linear-gradient(135deg, #00e5c8 0%, #00b09c 100%)",
        padding: "70px 60px",
      }}
    >
      <div className="grid items-center gap-[60px] max-w-[1100px] mx-auto" style={{ gridTemplateColumns: "1fr auto" }}>
        <div>
          <h2
            className="font-head font-extrabold tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "hsl(213 56% 6%)" }}
          >
            The numbers speak<br />for themselves
          </h2>
          <p className="mt-3 text-base max-w-[500px]" style={{ color: "rgba(5,13,26,0.7)" }}>
            Our clients consistently report significant time savings and cost reductions within the first 90 days of going live.
          </p>
        </div>
        <div className="flex gap-12 shrink-0">
          {[
            { num: "68%", label: "Less time on admin tasks" },
            { num: "4.8★", label: "Average client satisfaction" },
            { num: "90 days", label: "Average to full ROI" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="font-head text-[2.8rem] font-extrabold tracking-[-0.03em] leading-none" style={{ color: "hsl(213 56% 6%)" }}>
                {s.num}
              </div>
              <div className="text-[0.8rem] mt-1" style={{ color: "rgba(5,13,26,0.65)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ROIStrip;
