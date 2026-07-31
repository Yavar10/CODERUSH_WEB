"use client";

import { useCallback, useEffect, useState } from "react";
import FullscreenMenu from "./Menu";
import { SiUnstop } from "react-icons/si";
import { useArcade } from "@/context/ArcadeContext";

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
  const { isArcadeMode, toggleArcadeMode } = useArcade();

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
        <div
          className={
            isArcadeMode
              ? "bg-zinc-50/95 backdrop-blur-md border-b-2 border-black"
              : "bg-zinc-50/90 backdrop-blur-sm border-b border-black/5"
          }
        >
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
              {isArcadeMode ? (
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
              ) : (
                <div className="relative">
                  <h1 className="font-anton text-3xl leading-none tracking-tight">
                    <span className="text-zinc-900">CODE</span>
                    <span className="text-zinc-900"> RUSH</span>
                    <span className="text-[#D4AF37] ml-1.5">3.0</span>
                  </h1>
                </div>
              )}
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
                  {isArcadeMode ? (
                    <span
                      className={`font-silkscreen text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 flex items-center gap-1 ${
                        activeSection === section.id
                          ? "text-black"
                          : "text-zinc-500 group-hover:text-black"
                      }`}
                    >
                      <span
                        className={`text-[9px] transition-opacity duration-200 ${
                          activeSection === section.id
                            ? "opacity-100 text-[#DF0024]"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        ▶
                      </span>
                      {section.label}
                    </span>
                  ) : (
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                        activeSection === section.id
                          ? "text-zinc-900"
                          : "text-zinc-400 group-hover:text-zinc-700"
                      }`}
                    >
                      {section.label}
                    </span>
                  )}

                  <div
                    className={`absolute bottom-0 left-2 right-2 transition-all duration-300 ${
                      isArcadeMode
                        ? "h-[3px] border-b border-black"
                        : "h-[2px] rounded-full duration-500"
                    } ${
                      activeSection === section.id
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                    style={{ backgroundColor: olympicColors[i % olympicColors.length] }}
                  />
                </a>
              ))}
            </div>

            {/* Right side CTA + Portal Toggle + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-5 shrink-0">
              <button
                onClick={toggleArcadeMode}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold transition-all cursor-pointer ${
                  isArcadeMode
                    ? "rounded-full bg-white border border-[#D4AF37] text-zinc-900 shadow-sm hover:bg-zinc-50 font-semibold uppercase tracking-wider"
                    : "border-2 border-black bg-[#F4C300] hover:bg-[#D4AF37] text-black font-press-start shadow-[2px_2px_0px_#000]"
                }`}
                title={isArcadeMode ? "Return to Classic Olympic World" : "Warp to 8-Bit Arcade World"}
              >
                <span>{isArcadeMode ? "🏛️ CLASSIC WORLD" : "🕹️ 8-BIT WORLD"}</span>
              </button>

              {isArcadeMode ? (
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
              ) : (
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 cursor-pointer group relative overflow-hidden border border-black/80 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-2 md:px-5 md:py-2.5"
                >
                  <SiUnstop className="h-4 w-4" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    Register
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)] group-hover:translate-x-0" />
                </a>
              )}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={
                  isArcadeMode
                    ? "relative cursor-pointer h-8 w-8 sm:h-9 sm:w-9 border-2 border-black bg-white shadow-[2px_2px_0px_#000] flex items-center justify-center hover:bg-zinc-100 active:translate-x-[1px] active:translate-y-[1px] shrink-0"
                    : "relative cursor-pointer h-8 w-8"
                }
                aria-label="Toggle Menu"
              >
                {isArcadeMode ? (
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
                ) : (
                  <>
                    <span
                      className={`absolute left-0 h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)] ${
                        menuOpen
                          ? "top-1/2 w-full -translate-y-1/2 rotate-45"
                          : "top-[25%] w-full"
                      }`}
                    />
                    <span
                      className={`absolute left-0 h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)] ${
                        menuOpen
                          ? "top-1/2 w-full -translate-y-1/2 -rotate-45"
                          : "top-[65%] w-full"
                      }`}
                    />
                  </>
                )}
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
