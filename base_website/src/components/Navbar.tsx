"use client";

import { useCallback, useEffect, useState } from "react";
import FullscreenMenu from "./Menu";
import { SiUnstop } from "react-icons/si";

const olympicColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024", "#000000"];

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "about", label: "About" },
  { id: "eligibility", label: "Eligibility" },
  { id: "timeline", label: "Timeline" },
  { id: "sponsors", label: "Sponsors" },
  { id: "venue", label: "Venue" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i].id);
          return;
        }
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full">
        <div className="bg-zinc-50/95 backdrop-blur-md border-b-2 border-black">
          <div className="mx-auto flex items-center justify-between gap-2 sm:gap-6 px-3 sm:px-6 md:px-10 h-16 sm:h-18 min-w-0">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-1.5 sm:gap-3 shrink-0 mr-1.5 sm:mr-4 min-w-0"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="relative flex items-center gap-1.5 sm:gap-2">
                <h1 className="font-press-start text-xs sm:text-base md:text-lg lg:text-xl leading-none tracking-tight text-zinc-900">
                  <span>CODE</span>
                  <span className="text-[#0085C7]">_</span>
                  <span>RUSH</span>
                  <span className="text-[#D4AF37] ml-1 sm:ml-2 text-[9px] sm:text-xs md:text-sm border border-black bg-[#D4AF37]/20 px-1 sm:px-1.5 py-0.5 shadow-[1.5px_1.5px_0px_#000] sm:shadow-[2px_2px_0px_#000]">
                    3.0
                  </span>
                </h1>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${section.id}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative px-3 py-1.5"
                >
                  <span
                    className={`font-silkscreen text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 flex items-center gap-1 ${
                      activeSection === section.id
                        ? "text-black"
                        : "text-zinc-500 group-hover:text-black"
                    }`}
                  >
                    <span
                      className={`text-[9px] transition-opacity duration-200 ${
                        activeSection === section.id ? "opacity-100 text-[#DF0024]" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      ▶
                    </span>
                    {section.label}
                  </span>

                  <div
                    className={`absolute bottom-0 left-2 right-2 h-[3px] border-b border-black transition-all duration-300 ${
                      activeSection === section.id
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                    style={{ backgroundColor: olympicColors[i % olympicColors.length] }}
                  />
                </a>
              ))}
            </div>

            {/* Right side CTA + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-5 shrink-0">
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="arcade-btn bg-[#F4C300] hover:bg-[#D4AF37] text-black flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] px-2.5 py-1.5 sm:px-4 sm:py-2"
              >
                <SiUnstop className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span className="relative z-10 font-press-start text-[8px] sm:text-[9px]">
                  REGISTER
                </span>
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative cursor-pointer h-8 w-8 sm:h-9 sm:w-9 border-2 border-black bg-white shadow-[2px_2px_0px_#000] flex items-center justify-center hover:bg-zinc-100 active:translate-x-[1px] active:translate-y-[1px] shrink-0"
                aria-label="Toggle Menu"
              >
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                    menuOpen ? "rotate-90" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                >
                  {menuOpen ? (
                    <path d="M4 4L16 16M4 16L16 4" stroke="black" />
                  ) : (
                    <path d="M3 6H17M3 14H17" stroke="black" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
