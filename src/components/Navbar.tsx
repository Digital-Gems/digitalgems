import { useState } from "react";
import LOGO_SRC from "@/assets/logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-10 lg:px-[60px] py-4 md:py-5"
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
          className="h-[60px] md:h-[75px] lg:h-[90px]"
          style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }}
        />
      </a>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-9 list-none">
        <li>
          <a href="#services" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">Solutions</a>
        </li>
        <li>
          <a href="#how" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">How It Works</a>
        </li>
        <li>
          <a href="#industries" className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white">Industries</a>
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

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-dg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-dg-white transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-dg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-4 px-5 py-6 lg:hidden"
          style={{
            background: "rgba(5,13,26,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid hsl(170 100% 45% / 0.12)",
          }}
        >
          {["Solutions|#services", "How It Works|#how", "Industries|#industries", "Results|#results"].map((item) => {
            const [label, href] = item.split("|");
            return (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-dg-grey no-underline text-[0.9rem] font-medium tracking-[0.04em] uppercase transition-colors hover:text-dg-white"
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-dg-teal text-[0.85rem] font-bold no-underline rounded-md tracking-normal text-center"
            style={{ color: "hsl(213 56% 6%)", padding: "10px 22px" }}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
