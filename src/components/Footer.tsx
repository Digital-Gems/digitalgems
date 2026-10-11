import LOGO_SRC from "@/assets/logo";

const Footer = () => {
  return (
    <footer
      className="bg-dg-bg px-4 md:px-10 lg:px-[60px] pt-8 md:pt-[60px] pb-5 md:pb-8"
      style={{
        borderTop: "1px solid hsl(170 100% 45% / 0.12)",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 md:gap-[60px] mb-6 md:mb-12">
        <div className="col-span-2 sm:col-span-1">
          <a href="/">
            <img src={LOGO_SRC} alt="Digital Gems" className="h-[55px] md:h-[90px]" style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }} />
          </a>
          <p className="text-[0.75rem] md:text-[0.875rem] text-dg-grey mt-2.5 max-w-[240px] leading-[1.65]">
            I help businesses integrate AI to save time, reduce costs, and let their teams focus on what matters most.
          </p>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-3 md:mb-4">Solutions</h5>
          <ul className="list-none flex flex-col gap-2">
            {["Customer Service AI", "Workflow Automation", "AI Reporting", "Sales Automation", "Knowledge Agents"].map((l) => (
              <li key={l} className="text-[0.75rem] md:text-[0.875rem]" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-3 md:mb-4">Company</h5>
          <ul className="list-none flex flex-col gap-2">
            {[
              { name: "About", url: "/about" },
              { name: "Case Studies", url: "/case-study.html", external: true },
            ].map((l) => (
              <li key={l.name}><a href={l.url} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[0.75rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-3 md:mb-4">Contact</h5>
          <ul className="list-none flex flex-col gap-2">
            <li><a href="mailto:info@digitalgems.co.za" className="text-[0.75rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal break-words" style={{ color: "rgba(240,244,255,0.6)" }}>info@digitalgems.co.za</a></li>
            <li><a href="/privacy-policy" className="text-[0.75rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-3 md:mb-4">Social</h5>
          <ul className="list-none flex flex-col gap-2">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/digital-gems-2724a9388/" },
              { name: "Facebook", url: "https://www.facebook.com/people/Digital-Gems/61581871916275/" },
              { name: "Instagram", url: "https://www.instagram.com/digitalgemsza/" },
              { name: "TikTok", url: "https://www.tiktok.com/@digitalgems57" },
              { name: "X", url: "https://x.com/DigitalGemsza" },
            ].map((l) => (
              <li key={l.name}><a href={l.url} target="_blank" rel="noopener noreferrer" className="text-[0.75rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l.name}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-5 md:pt-7"
        style={{ borderTop: "1px solid hsl(170 100% 45% / 0.12)" }}
      >
        <p className="text-[0.65rem] md:text-[0.8rem] text-dg-grey">© 2026 Digital Gems. All rights reserved.</p>
        <p className="text-[0.65rem] md:text-[0.8rem] text-dg-grey">Built for businesses that run on relationships.</p>
      </div>
    </footer>
  );
};

export default Footer;
