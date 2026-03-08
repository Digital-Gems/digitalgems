import LOGO_SRC from "@/assets/logo";

const Footer = () => {
  return (
    <footer
      className="bg-dg-bg px-5 md:px-10 lg:px-[60px] pt-10 md:pt-[60px] pb-6 md:pb-8"
      style={{
        borderTop: "1px solid hsl(170 100% 45% / 0.12)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-[60px] mb-8 md:mb-12">
        <div>
          <a href="/">
            <img src={LOGO_SRC} alt="Digital Gems" className="h-[70px] md:h-[90px]" style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }} />
          </a>
          <p className="text-[0.85rem] md:text-[0.875rem] text-dg-grey mt-3 max-w-[240px] leading-[1.7]">
            We help businesses integrate AI to save time, reduce costs, and let their teams focus on what matters most.
          </p>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-4">Solutions</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["Customer Service AI", "Workflow Automation", "AI Reporting", "Sales Automation", "Knowledge Agents"].map((l) => (
              <li key={l}><a href="#" className="text-[0.85rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-4">Company</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["About Us", "Case Studies", "Blog", "Careers"].map((l) => (
              <li key={l}><a href="#" className="text-[0.85rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-syne font-head text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-4">Contact</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["Book a Call", "hello@digitalgemsai.com", "LinkedIn"].map((l) => (
              <li key={l}><a href="#" className="text-[0.85rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</a></li>
            ))}
            <li><a href="/privacy-policy" className="text-[0.85rem] md:text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6 md:pt-7"
        style={{ borderTop: "1px solid hsl(170 100% 45% / 0.12)" }}
      >
        <p className="text-[0.75rem] md:text-[0.8rem] text-dg-grey">© 2026 Digital Gems. All rights reserved.</p>
        <p className="text-[0.75rem] md:text-[0.8rem] text-dg-grey">Built for businesses that run on relationships.</p>
      </div>
    </footer>
  );
};

export default Footer;
