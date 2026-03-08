import { useScrollReveal } from "@/hooks/useScrollReveal";

const ROIStrip = () => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      id="results"
      className="px-4 md:px-10 lg:px-[60px] py-10 md:py-[70px]"
      style={{
        background: "linear-gradient(135deg, #00e5c8 0%, #00b09c 100%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 md:gap-[60px] max-w-[1100px] mx-auto">
        <div>
           <h2
             className="font-syne font-head font-extrabold"
            style={{ fontSize: "clamp(1.15rem, 2.5vw, 2.2rem)", color: "hsl(213 56% 6%)" }}
          >
            The numbers speak<br />for themselves
          </h2>
          <p className="mt-2 md:mt-3 text-[0.78rem] md:text-base max-w-[500px]" style={{ color: "rgba(5,13,26,0.7)" }}>
            Our clients consistently report significant time savings and cost reductions within the first 90 days of going live.
          </p>
        </div>
        <div className="flex gap-6 md:gap-12 shrink-0">
          {[
            { num: "68%", label: "Less time on admin tasks" },
            { num: "4.8★", label: "Average client satisfaction" },
            { num: "90 days", label: "Average to full ROI" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="font-head text-[1.2rem] md:text-[2rem] font-extrabold tracking-[-0.03em] leading-none" style={{ color: "hsl(213 56% 6%)" }}>
                {s.num}
              </div>
              <div className="text-[0.62rem] md:text-[0.8rem] mt-1" style={{ color: "rgba(5,13,26,0.65)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ROIStrip;
