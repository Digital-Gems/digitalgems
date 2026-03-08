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
    <section ref={ref} className="bg-dg-bg2 px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">Client Results</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        What our clients say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-[60px]">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-[14px] p-5 md:p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid hsl(170 100% 45% / 0.12)",
            }}
          >
            <div className="text-dg-gold text-[0.78rem] md:text-[0.9rem] mb-3 tracking-[2px]">★★★★★</div>
            <blockquote className="text-[0.78rem] md:text-[0.9rem] leading-[1.7] italic mb-4 border-none p-0" style={{ color: "rgba(240,244,255,0.8)" }}>
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-head text-[0.72rem] md:text-[0.85rem] font-bold shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(170 100% 45%), hsl(170 100% 33%))",
                  color: "hsl(213 56% 6%)",
                }}
              >
                {t.initials}
              </div>
              <div>
                <strong className="block text-[0.75rem] md:text-[0.85rem] font-semibold text-dg-white">{t.name}</strong>
                <span className="text-[0.68rem] md:text-[0.78rem] text-dg-grey">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
