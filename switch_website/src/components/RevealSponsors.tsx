"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useArcade } from "@/context/ArcadeContext";

export default function RevealSponsors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isArcadeMode } = useArcade();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-in for content
      gsap.fromTo(
        ".reveal-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
        }
      );

      // Subtle line drawing animation
      gsap.fromTo(
        ".reveal-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isArcadeMode]);

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className={
        isArcadeMode
          ? "relative overflow-hidden bg-[#F8F6F1] py-24 md:py-32 pixel-grid-light border-t-2 border-b-2 border-black"
          : "relative overflow-hidden bg-[#F8F6F1] py-24 md:py-32"
      }
    >
      {isArcadeMode ? (
        <div className="scanlines-overlay absolute inset-0 opacity-15 pointer-events-none" />
      ) : (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-10 top-20 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-40" />
          <div className="absolute right-10 bottom-20 w-72 h-72 rounded-full bg-yellow-100 blur-3xl opacity-40" />
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center">
        {/* Original Sponsors Header */}
        <div className="text-center mb-16 md:mb-20 px-6">
          <p
            className={
              isArcadeMode
                ? "font-press-start text-[10px] sm:text-xs font-bold tracking-widest text-[#8C6A1A]"
                : "text-sm font-bold tracking-[0.5em] text-[#8C6A1A]"
            }
          >
            {isArcadeMode ? "▶ OUR PARTNERS & SPONSORS" : "OUR PARTNERS"}
          </p>

          <h2
            className={
              isArcadeMode
                ? "mt-3 font-press-start text-3xl sm:text-5xl md:text-7xl uppercase text-[#111827] tracking-tight drop-shadow-[4px_4px_0px_#0085C7]"
                : "mt-4 text-5xl md:text-7xl font-black uppercase text-[#111827]"
            }
          >
            Sponsors
          </h2>

          <div className="mt-6 md:mt-8 flex justify-center gap-3">
            <span
              className={
                isArcadeMode
                  ? "w-4 h-4 border border-black bg-[#0085C7] shadow-[1px_1px_0px_#000]"
                  : "w-4 h-4 rounded-full bg-[#0085C7]"
              }
            />
            <span
              className={
                isArcadeMode
                  ? "w-4 h-4 border border-black bg-[#F4C300] shadow-[1px_1px_0px_#000]"
                  : "w-4 h-4 rounded-full bg-[#F4C300]"
              }
            />
            <span
              className={
                isArcadeMode
                  ? "w-4 h-4 border border-black bg-black shadow-[1px_1px_0px_#000]"
                  : "w-4 h-4 rounded-full bg-black"
              }
            />
            <span
              className={
                isArcadeMode
                  ? "w-4 h-4 border border-black bg-[#009F3D] shadow-[1px_1px_0px_#000]"
                  : "w-4 h-4 rounded-full bg-[#009F3D]"
              }
            />
            <span
              className={
                isArcadeMode
                  ? "w-4 h-4 border border-black bg-[#DF0024] shadow-[1px_1px_0px_#000]"
                  : "w-4 h-4 rounded-full bg-[#DF0024]"
              }
            />
          </div>
        </div>

        {/* Decorative line */}
        <div
          className="reveal-line w-16 md:w-24 h-px origin-center"
          style={{ backgroundColor: isArcadeMode ? "#111827" : "#D4AF37" }}
        />

        {/* Revealing Soon — distinct lighter style */}
        <h3
          className={`reveal-content mt-10 md:mt-14 text-center ${
            isArcadeMode
              ? "font-silkscreen text-xl sm:text-2xl md:text-4xl uppercase text-zinc-600 tracking-widest"
              : "text-3xl sm:text-4xl md:text-5xl font-light italic text-zinc-400 tracking-wide"
          }`}
        >
          {isArcadeMode ? "[ REVEALING SOON ]" : "Revealing Soon"}
        </h3>

        <p
          className={`reveal-content mt-4 md:mt-5 text-center max-w-md ${
            isArcadeMode
              ? "font-silkscreen text-[10px] sm:text-xs text-zinc-400 tracking-wide"
              : "text-sm sm:text-base text-zinc-400 tracking-wide"
          }`}
        >
          {isArcadeMode
            ? "STAND BY FOR SPONSOR DATA..."
            : "Our sponsors will be announced shortly. Stay tuned!"}
        </p>

        {/* Decorative line */}
        <div
          className="reveal-line mt-10 md:mt-14 w-16 md:w-24 h-px origin-center"
          style={{ backgroundColor: isArcadeMode ? "#111827" : "#D4AF37" }}
        />

        {/* Animated dots */}
       

        {/* CTA Button */}
        <div className="reveal-content mt-14 md:mt-16 flex justify-center">
          {isArcadeMode ? (
            <a
              href="mailto:coderushcpbyte@gmail.com"
              target="_blank"
              className="arcade-btn bg-[#F4C300] hover:bg-[#D4AF37] text-black px-10 py-5 md:px-14 md:py-6 font-press-start text-xs md:text-base uppercase tracking-wider flex items-center gap-3 shadow-[5px_5px_0px_#000]"
            >
              <span>BE A SPONSOR</span>
              <span className="animate-pixel-blink text-lg">▶</span>
            </a>
          ) : (
            <a
              href="mailto:coderushcpbyte@gmail.com"
              target="_blank"
              className="group relative flex items-center gap-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-12 py-5 md:px-16 md:py-6 font-anton text-lg md:text-2xl uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:scale-105"
            >
              Be a Sponsor
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 text-2xl md:text-3xl">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

