import LOGO_SRC from "@/assets/logo";

const Footer = () => {
  return (
    <footer
      className="bg-dg-bg"
      style={{
        borderTop: "1px solid hsl(170 100% 45% / 0.12)",
        padding: "60px 60px 32px",
      }}
    >
      <div className="grid gap-[60px] mb-12" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
        <div>
          <a href="/">
            <img src={LOGO_SRC} alt="Digital Gems" className="h-[90px]" style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }} />
          </a>
          <p className="text-[0.875rem] text-dg-grey mt-3 max-w-[240px] leading-[1.7]">
            We help businesses integrate AI to save time, reduce costs, and let their teams focus on what matters most.
          </p>
        </div>

        <div>
          <h5 className="font-head text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-4">Solutions</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["Customer Service AI", "Workflow Automation", "AI Reporting", "Sales Automation", "Knowledge Agents"].map((l) => (
              <li key={l}><a href="#" className="text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-head text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-4">Company</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["About Us", "Case Studies", "Blog", "Careers"].map((l) => (
              <li key={l}><a href="#" className="text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-head text-[0.8rem] font-bold tracking-[0.1em] uppercase text-dg-grey mb-4">Contact</h5>
          <ul className="list-none flex flex-col gap-2.5">
            {["Book a Call", "hello@digitalgemsai.com", "LinkedIn"].map((l) => (
              <li key={l}><a href="#" className="text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>{l}</a></li>
            ))}
            <li><a href="/privacy-policy" className="text-[0.875rem] no-underline transition-colors hover:text-dg-teal" style={{ color: "rgba(240,244,255,0.6)" }}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div
        className="flex justify-between items-center pt-7"
        style={{ borderTop: "1px solid hsl(170 100% 45% / 0.12)" }}
      >
        <p className="text-[0.8rem] text-dg-grey">© 2026 Digital Gems. All rights reserved.</p>
        <p className="text-[0.8rem] text-dg-grey">Built for businesses that run on relationships.</p>
      </div>
    </footer>
  );
};

export default Footer;
