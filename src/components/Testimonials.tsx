import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: '"Digital Gems automated our entire client intake process. What used to take our team 3 hours a day is now handled automatically. We\'ve redirected that time entirely to client relationship work."',
    initials: "SM",
    name: "Sarah M.",
    role: "Managing Director, Legal Firm",
  },
  {
    quote: '"Our AI customer service agent now handles 70% of inbound queries without any human involvement. Response times went from hours to seconds and our satisfaction scores actually went up."',
    initials: "JT",
    name: "James T.",
    role: "Operations Manager, E-Commerce",
  },
  {
    quote: '"I was sceptical about AI, but the Digital Gems team made the whole process simple. Within 3 weeks we had a working system and I genuinely can\'t imagine going back to the old way."',
    initials: "PN",
    name: "Priya N.",
    role: "Founder, Consulting Agency",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-dg-bg2" style={{ padding: "100px 60px" }}>
      <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3.5">Client Results</div>
      <h2 className="font-head font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-dg-white" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}>
        What our clients say
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-[60px]">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-[14px] p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid hsl(170 100% 45% / 0.12)",
            }}
          >
            <div className="text-dg-gold text-[0.9rem] mb-4 tracking-[2px]">★★★★★</div>
            <blockquote className="text-[0.9rem] leading-[1.75] italic mb-5 border-none p-0" style={{ color: "rgba(240,244,255,0.8)" }}>
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-head text-[0.85rem] font-bold shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(170 100% 45%), hsl(170 100% 33%))",
                  color: "hsl(213 56% 6%)",
                }}
              >
                {t.initials}
              </div>
              <div>
                <strong className="block text-[0.85rem] font-semibold text-dg-white">{t.name}</strong>
                <span className="text-[0.78rem] text-dg-grey">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
