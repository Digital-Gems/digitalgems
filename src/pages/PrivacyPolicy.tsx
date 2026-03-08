import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "collect",
    title: "1. What Information Do We Collect?",
    content: (
      <>
        <p>We collect names, phone numbers, email addresses, job titles, and contact preferences that users voluntarily provide. We do not process sensitive information.</p>
        <p>We may also collect information from public databases, marketing partners, and social media platforms.</p>
      </>
    ),
  },
  {
    id: "process",
    title: "2. How Do We Process Your Information?",
    content: (
      <p>We process information to facilitate account creation, deliver services, respond to inquiries, request feedback, send marketing communications, post testimonials, protect our services, evaluate and improve our services, and comply with legal obligations.</p>
    ),
  },
  {
    id: "share",
    title: "3. When and With Whom Do We Share Your Personal Information?",
    content: (
      <p>We may share information during business transfers such as mergers or acquisitions.</p>
    ),
  },
  {
    id: "ai-products",
    title: "4. Do We Offer Artificial Intelligence-Based Products?",
    content: (
      <>
        <p>Yes. We offer AI-powered products and features through third-party AI Service Providers including Anthropic, Google Cloud AI, Groq, Hugging Face, NVIDIA AI, and OpenAI.</p>
        <p>Our AI Products include: AI applications, AI automation, AI bots, AI document generation, AI insights, AI predictive analytics, AI research, AI search, image analysis, image generation, machine learning models, text analysis, video analysis, video generation, AI deployment, and AI development.</p>
        <p>All personal information processed using our AI Products is handled in line with this Privacy Notice. To opt out, log in to your account settings or contact us.</p>
      </>
    ),
  },
  {
    id: "social-logins",
    title: "5. How Do We Handle Your Social Logins?",
    content: (
      <p>If you register using a social media account (Facebook, X, etc.), we receive profile information such as your name, email, and profile picture. We use this only as described in this notice and are not responsible for the social media provider's own use of your data.</p>
    ),
  },
  {
    id: "retention",
    title: "6. How Long Do We Keep Your Information?",
    content: (
      <p>We retain personal information for as long as your account is active or as required by law. When no longer needed, we delete or anonymise it.</p>
    ),
  },
  {
    id: "security",
    title: "7. How Do We Keep Your Information Safe?",
    content: (
      <p>We have implemented appropriate technical and organisational security measures. However, no internet transmission is 100% secure. Use our Services within a secure environment.</p>
    ),
  },
  {
    id: "minors",
    title: "8. Do We Collect Information From Minors?",
    content: (
      <p>
        No. We do not knowingly collect data from children under 18. If we discover such data has been collected, we will delete it. Contact us at{" "}
        <a href="mailto:support.digitalgems@agentmail.to" className="text-dg-teal hover:underline">support.digitalgems@agentmail.to</a> if you become aware of this.
      </p>
    ),
  },
  {
    id: "rights",
    title: "9. What Are Your Privacy Rights?",
    content: (
      <p>
        You may review, change, or terminate your account at any time. To withdraw consent or close your account, log in to account settings or contact us. Email:{" "}
        <a href="mailto:support.digitalgems@agentmail.to" className="text-dg-teal hover:underline">support.digitalgems@agentmail.to</a>
      </p>
    ),
  },
  {
    id: "dnt",
    title: "10. Controls for Do-Not-Track Features",
    content: (
      <p>We do not currently respond to DNT browser signals as no uniform standard has been finalised. We will update this notice if that changes.</p>
    ),
  },
  {
    id: "regions",
    title: "11. Do Other Regions Have Specific Privacy Rights?",
    content: (
      <p>
        <strong className="text-dg-white">Republic of South Africa:</strong> You have the right to request access to or correction of your personal information under POPIA. Complaints can be directed to The Information Regulator (South Africa) at{" "}
        <a href="mailto:enquiries@inforegulator.org.za" className="text-dg-teal hover:underline">enquiries@inforegulator.org.za</a>,{" "}
        <a href="mailto:PAIAComplaints@inforegulator.org.za" className="text-dg-teal hover:underline">PAIAComplaints@inforegulator.org.za</a>, or{" "}
        <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-dg-teal hover:underline">POPIAComplaints@inforegulator.org.za</a>.
      </p>
    ),
  },
  {
    id: "ai-mistakes",
    title: "12. AI Can Make Mistakes",
    content: (
      <p>Digital Gems uses artificial intelligence tools to assist in delivering its services. While we strive for accuracy, AI-generated outputs may contain errors, omissions, or inaccuracies. You are responsible for reviewing and verifying any AI-generated recommendations, reports, or responses before acting on them. Digital Gems accepts no liability for decisions made based solely on AI-generated content.</p>
    ),
  },
  {
    id: "updates",
    title: "13. Do We Make Updates to This Notice?",
    content: (
      <p>Yes. We will update this notice as necessary. The updated date will appear at the top. We encourage you to review it frequently.</p>
    ),
  },
  {
    id: "contact",
    title: "14. How Can You Contact Us About This Notice?",
    content: (
      <p>
        Email: <a href="mailto:support.digitalgems@agentmail.to" className="text-dg-teal hover:underline">support.digitalgems@agentmail.to</a>
        <br />
        Post: Digital Gems, Westville, KwaZulu-Natal, 3629, South Africa.
      </p>
    ),
  },
  {
    id: "data-request",
    title: "15. How Can You Review, Update, or Delete the Data We Collect From You?",
    content: (
      <p>
        Submit a data subject access request at:{" "}
        <a href="https://app.termly.io/dsar/c74ede3d-9554-4536-8bfc-8e8e94cfdb6c" target="_blank" rel="noopener noreferrer" className="text-dg-teal hover:underline break-all">
          https://app.termly.io/dsar/c74ede3d-9554-4536-8bfc-8e8e94cfdb6c
        </a>
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ padding: "160px 60px 60px", background: "hsl(var(--bg))" }}
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
        <h1
          className="relative z-[1] font-head font-extrabold text-dg-white tracking-[-0.03em] mb-4"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="relative z-[1] text-dg-teal text-[1rem] font-medium tracking-wide">
          Last updated March 08, 2026
        </p>
      </section>

      {/* Table of contents */}
      <section className="bg-dg-bg2" style={{ padding: "48px 60px" }}>
        <nav className="max-w-[860px] mx-auto">
          <h2 className="font-head text-dg-teal text-[1.1rem] font-bold mb-5 uppercase tracking-[0.06em]">
            Table of Contents
          </h2>
          <ol className="grid gap-2 list-none" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-dg-grey text-[0.9rem] hover:text-dg-teal transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {i + 1}. {s.title.replace(/^\d+\.\s*/, "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 60px 80px", background: "hsl(var(--bg))" }}>
        <div className="max-w-[860px] mx-auto flex flex-col gap-12">
          {sections.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-28">
              <h2
                className="font-head text-dg-teal font-bold text-[1.35rem] mb-4 pl-5"
                style={{ borderLeft: "3px solid hsl(var(--teal) / 0.4)" }}
              >
                {s.title}
              </h2>
              <div className="text-dg-grey leading-[1.8] text-[0.95rem] flex flex-col gap-4">
                {s.content}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
