import { useScrollReveal } from "@/hooks/useScrollReveal";

const industries = [
  { emoji: "🛡️", title: "Insurance and financial services", desc: "Turn policy PDFs into client-ready comparisons." },
  { emoji: "🩺", title: "Medical and dental practices", desc: "Let patients book online instead of by phone." },
  { emoji: "💇", title: "Salons and beauty", desc: "Online booking by service, specialist and time." },
  { emoji: "🍽️", title: "Restaurants and hospitality", desc: "A simple table-booking page for your guests." },
];

const Industries = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="industries" className="px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">Who I Work With</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        Built for businesses that{' '}<br className="hidden md:block" />run on appointments and paperwork
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4 mt-8 md:mt-[60px]">
        {industries.map((ind) => (
          <div
            key={ind.title}
            className="rounded-xl text-center cursor-default transition-all p-3.5 md:p-7"
            style={{
              border: "1px solid hsl(170 100% 45% / 0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,229,200,0.35)";
              e.currentTarget.style.background = "rgba(0,229,200,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "hsl(170 100% 45% / 0.12)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <span className="text-[1.1rem] md:text-[1.6rem] block mb-1.5 md:mb-3">{ind.emoji}</span>
            <div className="text-[0.82rem] md:text-[1rem] mb-1.5 tracking-normal text-dg-white" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, lineHeight: "1.4" }}>{ind.title}</div>
            <p className="text-[0.75rem] md:text-[0.85rem] text-dg-grey leading-[1.55]">{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
