import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { num: "~3 min", label: "Per comparison, down from 45-60 min" },
  { num: "20+ hrs", label: "Saved per month" },
  { num: "PDF to Excel", label: "One upload, one finished sheet" },
  { num: "Minutes", label: "Not hours, per client" },
];

const steps = ["Upload PDFs", "AI extraction", "Rules and checks", "Styled Excel"];

const features = [
  {
    title: "Insurance-aware extraction",
    text: "Built-in rules for SASRIA, motor vehicles, excess values, surge cover cross-referencing, roadside assistance and car hire premium normalisation.",
  },
  {
    title: "Spreadsheets that work",
    text: "Live SUMIF formulas and correct numeric types, so totals update and nothing is stored as text. Clean, professional styling.",
  },
];

const rollout = [
  { title: "User guide", text: "A plain-language Word guide so new staff are productive on day one." },
  { title: "Support", text: "From 4-hour response (business hours)" },
  { title: "Monthly analytics", text: "A branded report showing usage and a leaderboard of comparisons by broker." },
];

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderTop: "3px solid hsl(170 100% 45% / 0.6)",
};

const headingStyle = { borderLeft: "3px solid hsl(var(--teal) / 0.4)" };
const headingClass = "font-head text-dg-teal font-bold text-[1.35rem] mb-4 pl-5";
const bodyClass = "text-dg-grey leading-[1.8] text-[0.95rem] flex flex-col gap-4";

const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Case Study: AI Policy Comparison Tool | Digital Gems"
        description="How Digital Gems built an AI policy comparison tool that turns insurance quote PDFs into a finished Excel comparison in minutes."
        path="/case-study"
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
          Case Study
        </div>
        <h1
          className="relative z-[1] font-head font-extrabold text-dg-white tracking-[-0.03em] mb-4 max-w-[820px]"
          style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)" }}
        >
          From stacks of policy PDFs to a clean side-by-side comparison in minutes
        </h1>
        <p className="relative z-[1] text-dg-grey text-[0.9rem] md:text-[1.05rem] max-w-[600px] font-light leading-[1.7]">
          How Digital Gems built an AI policy comparison tool for an insurance broker in Westville, so the team spends its time advising clients instead of retyping quotes.
        </p>
        <div className="relative z-[1] flex flex-wrap justify-center gap-x-10 gap-y-3 mt-6 md:mt-8 text-[0.72rem] md:text-[0.8rem] text-dg-grey">
          <div>
            Client
            <b className="block text-dg-teal text-[0.85rem] md:text-[0.95rem] font-semibold">Insurance broker, Westville</b>
          </div>
          <div>
            Industry
            <b className="block text-dg-teal text-[0.85rem] md:text-[0.95rem] font-semibold">Short-term insurance</b>
          </div>
          <div>
            Built by
            <b className="block text-dg-teal text-[0.85rem] md:text-[0.95rem] font-semibold">Digital Gems</b>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dg-bg2 px-5 md:px-10 lg:px-[60px] py-8 md:py-12">
        <div className="max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.num}
              className="rounded-xl p-4 md:p-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid hsl(170 100% 45% / 0.12)" }}
            >
              <div className="font-head font-extrabold text-dg-teal text-[1.1rem] md:text-[1.4rem]">{s.num}</div>
              <div className="text-dg-grey text-[0.72rem] md:text-[0.85rem] mt-1 leading-[1.5]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="px-5 md:px-10 lg:px-[60px] py-10 md:py-[60px] pb-14 md:pb-20" style={{ background: "hsl(var(--bg))" }}>
        <div className="max-w-[860px] mx-auto flex flex-col gap-12">
          <article>
            <h2 className={headingClass} style={headingStyle}>The challenge</h2>
            <div className={bodyClass}>
              <p>The brokers receive quotes from several insurers, each in its own PDF layout. Putting them side by side meant manually copying premiums, excesses, extras and endorsements into a spreadsheet, line by line.</p>
              <p>It was slow, easy to get wrong, and a poor use of experienced people. One missed excess value or a misread SASRIA line could change the advice a client received.</p>
            </div>
          </article>

          <article>
            <h2 className={headingClass} style={headingStyle}>The solution</h2>
            <div className={bodyClass}>
              <p>A simple web tool. A broker uploads the quote PDFs, and a few minutes later gets a formatted Excel comparison, ready to send to the client.</p>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1">
                {steps.map((s, i) => (
                  <span key={s} className="flex items-center gap-2 md:gap-3">
                    <span
                      className="text-dg-white text-[0.78rem] md:text-[0.85rem] font-semibold rounded-full px-4 py-2"
                      style={{ background: "hsl(170 100% 45% / 0.08)", border: "1px solid hsl(170 100% 45% / 0.3)" }}
                    >
                      {s}
                    </span>
                    {i < steps.length - 1 && <span className="text-dg-teal font-bold">&rarr;</span>}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article>
            <h2 className={headingClass} style={headingStyle}>What makes it work</h2>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {features.map((f) => (
                <div key={f.title} className="rounded-xl p-5" style={cardStyle}>
                  <h3 className="font-head font-bold text-dg-white text-[1rem] mb-2">{f.title}</h3>
                  <p className="text-dg-grey text-[0.88rem] leading-[1.7]">{f.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h2 className={headingClass} style={headingStyle}>Under the hood</h2>
            <div className={bodyClass}>
              <p>A modern web application platform front end for the brokers, a workflow automation platform orchestrating the workflow, AI language model technology via API for reading policies, and ExcelJS for building the final workbook. Fewer moving parts, easier to maintain, easier to extend.</p>
            </div>
          </article>

          <article>
            <h2 className={headingClass} style={headingStyle}>Rollout and support</h2>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              {rollout.map((r) => (
                <div key={r.title} className="rounded-xl p-5" style={cardStyle}>
                  <h3 className="font-head font-bold text-dg-white text-[1rem] mb-2">{r.title}</h3>
                  <p className="text-dg-grey text-[0.88rem] leading-[1.7]">{r.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h2 className={headingClass} style={headingStyle}>The result</h2>
            <div className={bodyClass}>
              <p>The team now turns a pile of PDFs into a consistent, client-ready comparison in minutes. Less admin, fewer errors, and more time for the conversations that win and keep clients.</p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudy;
