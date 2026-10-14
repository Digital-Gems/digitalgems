import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAIL = "info@digitalgems.co.za";

const principles = [
  {
    title: "Practical first",
    text: "I start with the task that's eating your hours, not with the technology. If it won't save you real time, I won't build it.",
  },
  {
    title: "Simple by design",
    text: "Fewer moving parts means tools that are easier to use, easier to maintain and easier to change as your business grows.",
  },
  {
    title: "Local and personal",
    text: "Digital Gems is based in Westville, Durban. When you work with me, you deal with the person actually building your tools.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="About | Digital Gems"
        description="Digital Gems was built by someone with over 20 years in IT who got tired of repetitive work. Meet the person behind the AI tools and automations."
        path="/about"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-5 md:px-10 lg:px-[60px] pt-[120px] md:pt-[160px] pb-10 md:pb-[60px]"
        style={{ background: "hsl(var(--bg))" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,200,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative z-[1] text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">
          About
        </div>
        <h1
          className="relative z-[1] font-head font-extrabold text-dg-white tracking-[-0.03em] mb-4 max-w-[760px]"
          style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)" }}
        >
          Built by someone who got tired of repetitive work
        </h1>
        <p className="relative z-[1] text-dg-grey text-[0.9rem] md:text-[1.05rem] max-w-[560px] font-light">
          Digital Gems started with a simple idea: stop doing by hand what a machine can do better.
        </p>
      </section>

      {/* Story */}
      <section className="px-5 md:px-10 lg:px-[60px] py-10 md:py-[60px]" style={{ background: "hsl(var(--bg))" }}>
        <div className="max-w-[760px] mx-auto text-dg-grey leading-[1.8] text-[0.95rem] md:text-[1.05rem] flex flex-col gap-5">
          <p>
            Digital Gems started with a problem I knew well. I was spending hours every week on repetitive work, the kind of admin that has to get done but never moves anything forward. I wanted my time back, so I set out to get rid of it.
          </p>
          <p>
            I've spent over two decades in IT, and it's still my passion. I've watched plenty of tools come and go, but AI is the first one that properly solved the pain points I was dealing with. It changed how I think about what's possible, especially for small teams that don't have time or budget to waste.
          </p>
          <p>
            So I turned that into a business. Today I build AI tools and automations for businesses that want the same thing I did: less admin, faster replies and more time for the work that actually matters.
          </p>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-dg-bg2 px-5 md:px-10 lg:px-[60px] py-10 md:py-[60px]">
        <div className="max-w-[960px] mx-auto">
          <h2 className="font-head text-dg-teal text-[1.1rem] font-bold mb-6 uppercase tracking-[0.06em] text-center">
            How I work
          </h2>
          <div className="grid gap-4 md:gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-5 md:p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid hsl(170 100% 45% / 0.6)",
                }}
              >
                <h3 className="font-head font-bold text-dg-white text-[1.05rem] mb-2">{p.title}</h3>
                <p className="text-dg-grey text-[0.88rem] leading-[1.7]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="text-center px-5 md:px-10 lg:px-[60px] py-12 md:py-[100px]" style={{ background: "hsl(var(--bg))" }}>
        <h2
          className="font-head font-extrabold text-dg-white max-w-[640px] mx-auto mb-4"
          style={{ fontSize: "clamp(1.15rem, 2.6vw, 2.2rem)" }}
        >
          Got a task that eats your week?
        </h2>
        <p className="text-dg-grey text-[0.85rem] md:text-[1.02rem] max-w-[480px] mx-auto mb-7 font-light">
          Email me and let's see if we can automate it. No obligation, no jargon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry from digitalgems.co.za")}`}
            className="inline-flex items-center justify-center text-[0.72rem] md:text-[0.88rem] rounded-lg no-underline transition-all"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              lineHeight: "1.5",
              background: "hsl(170 100% 45%)",
              color: "hsl(213 56% 6%)",
              padding: "11px 22px",
              boxShadow: "0 0 30px rgba(0,229,200,0.2)",
            }}
          >
            Email Me
          </a>
          <a
            href="/case-study"
            className="text-[0.8rem] md:text-[0.9rem] text-dg-teal no-underline hover:underline"
          >
            See a real example
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
