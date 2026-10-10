import { useEffect } from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAIL = "info@digitalgems.co.za";

const sections = [
  {
    id: "collect",
    title: "1. What Information Do We Collect?",
    content: (
      <>
        <p>This website does not have forms, accounts or logins, so we do not collect personal information through it directly. We collect information in two ways:</p>
        <p><strong className="text-dg-white">Information you send us.</strong> If you email us, message us on social media or contact us in another way, we receive what you choose to share, such as your name, email address, phone number, company name and the content of your message. We do not process sensitive information.</p>
        <p><strong className="text-dg-white">Technical information.</strong> When you visit this website, our web server automatically logs standard technical details such as your IP address, browser type, the pages you request and the date and time of your visit.</p>
        <p>We may also collect business contact details from publicly available sources, such as company websites and professional networks like LinkedIn, so that we can get in touch with businesses that may benefit from our services.</p>
      </>
    ),
  },
  {
    id: "process",
    title: "2. How Do We Process Your Information?",
    content: (
      <p>We process information to respond to your messages and enquiries, communicate about our services, keep this website secure and running properly, evaluate and improve our services, and comply with legal obligations. Where the law allows, we may send you information about our services. You can opt out at any time by contacting us.</p>
    ),
  },
  {
    id: "share",
    title: "3. When and With Whom Do We Share Your Personal Information?",
    content: (
      <>
        <p>We do not sell your personal information. We may share it with service providers who help us run our business, such as our web hosting provider (Hostinger) and our email provider (Google Workspace). These providers may only use your information to provide their services to us.</p>
        <p>Some of these providers store or process information outside South Africa. Where this happens, we take reasonable steps to make sure your information is protected to a similar standard, as POPIA requires.</p>
        <p>We may also share information if required by law, or during business transfers such as mergers or acquisitions.</p>
      </>
    ),
  },
  {
    id: "ai-products",
    title: "4. Do We Offer Artificial Intelligence-Based Products?",
    content: (
      <>
        <p>Yes. We build AI-powered tools and automations for business clients using third-party AI providers such as Anthropic, Google Cloud AI, Groq, Hugging Face, NVIDIA AI and OpenAI.</p>
        <p>This website does not send visitor information to any AI service. Information processed inside client projects is handled under our agreements with those clients.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "5. Do We Use Cookies and Tracking?",
    content: (
      <>
        <p>No. We do not use cookies, analytics tools or advertising trackers on this website.</p>
        <p>This website loads fonts from Google Fonts, which means your browser connects to Google's servers and Google receives your IP address. Our footer also links to social media platforms such as LinkedIn, Facebook, Instagram, TikTok and X. Those platforms have their own privacy practices, and we are not responsible for them.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. How Long Do We Keep Your Information?",
    content: (
      <p>We keep messages and enquiries for as long as needed to respond to you and for our business and legal record keeping, and for up to 24 months after our last contact unless the law requires us to keep them longer. If you become a client, we keep your information for as long as the law requires. Server logs are kept for a limited period. When information is no longer needed, we delete or anonymise it.</p>
    ),
  },
  {
    id: "security",
    title: "7. How Do We Keep Your Information Safe?",
    content: (
      <p>We have implemented appropriate technical and organisational security measures, including encrypted (HTTPS) connections to this website. However, no internet transmission is 100% secure. Please be careful about what you share with us by email.</p>
    ),
  },
  {
    id: "minors",
    title: "8. Do We Collect Information From Minors?",
    content: (
      <p>
        No. We do not knowingly collect data from children under 18. If we discover such data has been collected, we will delete it. Contact us at{" "}
        <a href={`mailto:${EMAIL}`} className="text-dg-teal hover:underline">{EMAIL}</a> if you become aware of this.
      </p>
    ),
  },
  {
    id: "rights",
    title: "9. What Are Your Privacy Rights?",
    content: (
      <>
        <p>Under POPIA you may ask us to confirm whether we hold personal information about you, to give you access to it, to correct it, or to delete it. You may also object to us processing your information and withdraw any consent you gave, including consent to receive marketing from us.</p>
        <p>
          To make a request, email us at{" "}
          <a href={`mailto:${EMAIL}`} className="text-dg-teal hover:underline">{EMAIL}</a>. We may need to confirm your identity before we act on a request.
        </p>
      </>
    ),
  },
  {
    id: "dnt",
    title: "10. Controls for Do-Not-Track Features",
    content: (
      <p>We do not track you across other websites. We do not currently respond to DNT browser signals as no uniform standard has been finalised. We will update this notice if that changes.</p>
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
      <>
        <p>Digital Gems is the responsible party for personal information collected through this website.</p>
        <p>
          Email: <a href={`mailto:${EMAIL}`} className="text-dg-teal hover:underline">{EMAIL}</a>
          <br />
          Post: Digital Gems, Westville, KwaZulu-Natal, 3629, South Africa.
        </p>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Privacy Policy | Digital Gems"
        description="How Digital Gems collects, uses, shares and protects your personal information, including our use of AI tools and your privacy rights."
        path="/privacy-policy"
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
        <h1
          className="relative z-[1] font-head font-extrabold text-dg-white tracking-[-0.03em] mb-4"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="relative z-[1] text-dg-teal text-[0.9rem] md:text-[1rem] font-medium tracking-wide">
          Last updated October 10, 2026
        </p>
      </section>

      {/* Table of contents */}
      <section className="bg-dg-bg2 px-5 md:px-10 lg:px-[60px] py-8 md:py-12">
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
      <section className="px-5 md:px-10 lg:px-[60px] py-10 md:py-[60px] pb-14 md:pb-20" style={{ background: "hsl(var(--bg))" }}>
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
