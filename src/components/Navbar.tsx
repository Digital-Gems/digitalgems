import LOGO_SRC from "@/assets/logo";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[60px] py-5"
      style={{
        background: "rgba(5,13,26,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid hsl(170 100% 45% / 0.12)",
      }}
    >
      <a href="/">
        <img
          src={LOGO_SRC}
          alt="Digital Gems"
          className="h-[90px]"
          style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }}
        />
      </a>
      <ul className="flex items-center gap-9 list-none">
        <li>
          <a href="#services" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">
            Solutions
          </a>
        </li>
        <li>
          <a href="#how" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">
            How It Works
          </a>
        </li>
        <li>
          <a href="#industries" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">
            Industries
          </a>
        </li>
        <li>
          <a href="#results" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">
            Results
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="bg-dg-teal text-[0.85rem] font-bold no-underline rounded-md tracking-normal transition-all hover:bg-dg-teal-dim hover:-translate-y-px"
            style={{ color: "hsl(213 56% 6%)", padding: "10px 22px" }}
          >
            Book a Free Call
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
