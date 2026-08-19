"use client";

import { useEffect, useState } from "react";
import { useArcade } from "@/context/ArcadeContext";

interface MenuItem {
  label: string;
  href: string;
  external: boolean;
  color: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    label: "HOME",
    href: "#home",
    external: false,
    color: "#ef4444",
    path: "M20 80 C150 0,250 110,450 60 S780 30,980 70",
  },
  {
    label: "TIMELINE",
    href: "#timeline",
    external: false,
    color: "#3b82f6",
    path: "M20 90 Q200 0 500 70 T980 40",
  },
  {
    label: "ELIGIBILITY",
    href: "#eligibility",
    external: false,
    color: "#eab308",
    path: "M20 50 C250 120,300 0,500 60 S700 120,980 30",
  },
  {
    label: "ABOUT",
    href: "#about",
    external: false,
    color: "#22c55e",
    path: "M20 80 C150 30,350 100,550 40 S850 10,980 80",
  },
  {
    label: "SPONSORS",
    href: "#sponsors",
    external: false,
    color: "#ef4444",
    path: "M20 70 C180 20,400 110,600 40 S850 120,980 60",
  },
  {
    label: "FAQS",
    href: "#faqs",
    external: false,
    color: "#eab308",
    path: "M20 40 C200 90,300 20,500 70 S700 100,980 40",
  },
  {
    label: "REGISTER",
    href: "https://unstop.com/competitions/code-rush-30-krishna-institute-of-engineering-and-technology-kiet-ghaziabad-1731472",
    external: true,
    color: "#3b82f6",
    path: "M20 90 C200 20,350 100,600 50 S900 10,980 70",
  },
];

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export default function FullscreenMenu({
  isOpen,
  onClose,
  activeSection,
}: FullscreenMenuProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isArcadeMode } = useArcade();

  // ESC key listener to exit menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const activeIndex = menuItems.findIndex(
    (item) => item.href.replace("#", "") === activeSection
  );

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 transition-all duration-500 ${
          isArcadeMode
            ? "bg-black/40 backdrop-blur-[2px]"
            : "bg-black/10 backdrop-blur-[2px]"
        } ${isOpen ? "pointer-events-auto opacity-100" : "opacity-0"}`}
      />

      {/* Menu Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-full md:w-1/2 transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)] overflow-hidden ${
          isArcadeMode
            ? "bg-[#07111F] border-l-4 border-[#D4AF37] shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
            : "bg-[#f7f7f4] border-l border-black/10 shadow-[-20px_0_60px_rgba(0,0,0,0.08)]"
        } ${
          isOpen
            ? "pointer-events-auto [clip-path:inset(0_0_0_0)]"
            : "[clip-path:inset(0_0_0_100%)]"
        }`}
      >
        {isArcadeMode ? (
          <>
            <div className="scanlines-overlay absolute inset-0 opacity-30 pointer-events-none" />
            <div className="pixel-grid-dark absolute inset-0 opacity-20 pointer-events-none" />

            <div className="absolute top-4 left-4 font-press-start text-[10px] text-[#D4AF37] z-10 flex items-center gap-2">
              <span>┌ STAGE SELECT</span>
              <span className="animate-pixel-blink">● LIVE</span>
            </div>

            <button
              onClick={onClose}
              className="absolute bottom-4 right-4 font-press-start text-[10px] text-[#D4AF37] hover:text-white transition-colors z-10 cursor-pointer pointer-events-auto"
            >
              <span>[ESC TO EXIT] ┘</span>
            </button>
          </>
        ) : null}

        {/* Menu Items Container */}
        <div className="relative z-10 flex h-full max-w-[420px] flex-col justify-center px-6 sm:px-8 md:max-w-none md:px-16 lg:px-20">
          {menuItems.map((item, index) => {
            const isHovered = hovered === index;
            const isActiveSection = hovered === null && activeIndex === index;
            const isSelected = isHovered || isActiveSection;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (item.external) {
                    onClose();
                    return;
                  }

                  e.preventDefault();
                  setHovered(index);

                  setTimeout(() => {
                    // @ts-ignore
                    if (window.lenis) {
                      // @ts-ignore
                      window.lenis.scrollTo(item.href);
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }

                    onClose();
                    setHovered(null);
                  }, 450);
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative flex items-center text-left transition-all duration-500 ${
                  index === 0
                    ? "mb-6 md:mb-10"
                    : index === menuItems.length - 1
                    ? "mt-6 md:mt-10"
                    : "mb-2 md:mb-3"
                } ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 70}ms` : "0ms",
                }}
              >
                {isArcadeMode ? (
                  <div className="flex items-center gap-3 md:gap-4">
                    <span
                      className={`font-press-start text-xl md:text-2xl transition-all duration-200 ${
                        isSelected
                          ? "opacity-100 text-[#DF0024] animate-pixel-blink"
                          : "opacity-0 text-zinc-600"
                      }`}
                    >
                      ▶
                    </span>

                    <span
                      className={`relative z-10 font-press-start text-xl sm:text-2xl md:text-4xl lg:text-5xl uppercase leading-none transition-all duration-200 tracking-wide ${
                        isSelected
                          ? "text-white translate-x-2"
                          : "text-zinc-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 md:gap-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 34 34"
                      className={`hidden md:block shrink-0 transition-all duration-300 ${
                        hovered === index ? "text-black" : "text-gray-400"
                      }`}
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="17" cy="17" r="3" fill="currentColor" />
                    </svg>

                    <span
                      className={`relative z-10 font-anton text-[1.9rem] sm:text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] leading-none transition-all duration-300 ${
                        hovered === index ? "text-black" : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </span>

                    <svg
                      className="pointer-events-none absolute left-0 md:left-8 top-1/2 z-20 h-16 md:h-20 w-full -translate-y-1/2"
                      viewBox="0 0 1000 120"
                    >
                      <path
                        d={item.path}
                        fill="none"
                        stroke={item.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          strokeDasharray: 1400,
                          strokeDashoffset: hovered === index ? 0 : 1400,
                          opacity: hovered === index ? 1 : 0,
                          transition:
                            "stroke-dashoffset .8s cubic-bezier(.77,0,.18,1), opacity .25s",
                        }}
                      />
                    </svg>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
