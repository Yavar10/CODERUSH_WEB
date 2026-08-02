"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useArcade } from "@/context/ArcadeContext";
import ArcadePortalButton from "./ArcadePortalButton";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { isArcadeMode } = useArcade();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".code", { yPercent: 110 });
      gsap.set(".rush", { yPercent: 110 });
      gsap.set(".laurel-left, .laurel-right", {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "bottom center",
      });

      const tl = gsap.timeline();

      tl.to(".overlay", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power4.inOut",
      })
        .from(
          ".olympic",
          {
            y: "100%",
            stagger: 0.05,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".logo",
          {
            y: -30,
            opacity: 0,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".year",
          {
            opacity: 0,
            scale: 1.05,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          ".laurel-left, .laurel-right",
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          ".code",
          {
            yPercent: 0,
            duration: 0.75,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          ".rush",
          {
            yPercent: 0,
            duration: 0.75,
            ease: "power4.out",
          },
          "-=0.55"
        )
        .from(
          ".subtitle",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".scroll",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".color-segment",
          {
            scaleY: 0,
            transformOrigin: "bottom",
            stagger: 0.05,
            duration: 0.4,
            ease: "power4.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [isArcadeMode]);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-screen overflow-hidden bg-zinc-50 ${
        isArcadeMode ? "pixel-grid-light" : ""
      }`}
    >
      <div className="overlay absolute inset-0 z-[100] origin-top bg-black" />

      {isArcadeMode ? (
        <div className="scanlines-overlay absolute inset-0 opacity-20 pointer-events-none" />
      ) : null}

      <div
        className={`pinstripes absolute inset-0 ${
          isArcadeMode
            ? "bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_58px,rgba(0,0,0,0.06)_59px,transparent_60px)]"
            : "bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_58px,rgba(0,0,0,0.08)_59px,transparent_60px)]"
        }`}
      />

      <div
        className={`absolute inset-0 flex pointer-events-none ${
          isArcadeMode ? "opacity-[0.05]" : "opacity-[0.04]"
        }`}
      >
        <div className="olympic w-1/4 bg-blue-500" />
        <div className="olympic w-1/4 bg-yellow-400" />
        <div className="olympic w-1/4 bg-green-500" />
        <div className="olympic w-1/4 bg-red-500" />
      </div>

      <div className="year absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className={
            isArcadeMode
              ? "font-press-start text-[22vw] leading-none text-black/[0.04] tracking-widest select-none"
              : "font-anton text-[28vw] leading-none text-black/[0.03]"
          }
        >
          2026
        </h1>
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center z-10">
        {isArcadeMode ? (
          //<div className="relative p-2 border-2 border-black/20 bg-white/60 backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] mb-6">
            <Image
              src="/bitlogo.png"
              alt="Code Rush 3.0 Logo"
              width={112}
              height={112}
              priority
              className="logo w-20 md:w-28 h-auto"
              style={{ height: "auto" }}
            />
          //</div>
        ) : (
          <Image
            src="/logo.png"
            alt="Code Rush 3.0 Logo"
            width={112}
            height={112}
            priority
            className="logo mb-8 w-20 md:w-28 h-auto"
            style={{ height: "auto" }}
          />
        )}

        <div className="relative flex items-center justify-center">
          {/* LEFT LAUREL */}
          <div className="laurel-left absolute left-[-4rem] sm:left-[-6rem] md:left-[-10rem] lg:left-[-14rem] top-0 pointer-events-none select-none">
            <Image
              src="/laurel-gold.png"
              alt="Gold Laurel Left"
              width={400}
              height={400}
              priority
              className="w-[140px] sm:w-[200px] md:w-[280px] lg:w-[400px] h-auto"
              style={{
                height: "auto",
                filter: isArcadeMode
                  ? "drop-shadow(3px 3px 0px rgba(0,0,0,0.8))"
                  : "drop-shadow(0 0 12px rgba(255,215,0,0.25))",
              }}
            />
          </div>

          {/* CODE RUSH HEADING */}
          <div>
            <div className="overflow-hidden py-1">
              <h1
                className={
                  isArcadeMode
                    ? "code font-press-start text-[4.5rem] leading-[0.9] tracking-tight text-zinc-900 sm:text-[7.5rem] md:text-[11rem] drop-shadow-[5px_5px_0px_#D4AF37]"
                    : "code font-anton text-[6rem] leading-[0.85] tracking-tight text-zinc-900 sm:text-[10rem] md:text-[14rem]"
                }
              >
                CODE
              </h1>
            </div>

            <div className="overflow-hidden py-1">
              <h1
                className={
                  isArcadeMode
                    ? "rush font-press-start text-[4.5rem] leading-[0.85] tracking-tight text-zinc-900 sm:text-[7.5rem] md:text-[11rem] drop-shadow-[5px_5px_0px_#0085C7]"
                    : "rush font-anton text-[6rem] leading-[0.85] tracking-tight text-zinc-900 sm:text-[10rem] md:text-[14rem]"
                }
              >
                RUSH
              </h1>
            </div>
          </div>

          {/* RIGHT LAUREL */}
          <div className="laurel-right absolute right-[-4rem] sm:right-[-6rem] md:right-[-10rem] lg:right-[-14rem] top-0 pointer-events-none select-none">
            <Image
              src="/laurel-gold.png"
              alt="Gold Laurel Right"
              width={400}
              height={400}
              priority
              className="w-[140px] sm:w-[200px] md:w-[280px] lg:w-[400px] h-auto -scale-x-100"
              style={{
                height: "auto",
                filter: isArcadeMode
                  ? "drop-shadow(-3px 3px 0px rgba(0,0,0,0.8))"
                  : "drop-shadow(0 0 12px rgba(255,215,0,0.25))",
              }}
            />
          </div>
        </div>

        {isArcadeMode ? (
          <div className="subtitle mt-6 max-w-md border-2 border-black bg-black text-white px-4 py-2 shadow-[3px_3px_0px_#D4AF37]">
            <p className="font-silkscreen text-[10px] uppercase tracking-[0.25em] text-[#F4C300] sm:text-xs">
              THE ULTIMATE TEST OF COMPETITIVE PROGRAMMING
            </p>
          </div>
        ) : (
          <p className="subtitle mt-6 max-w-md text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
            THE ULTIMATE TEST OF COMPETITIVE PROGRAMMING
          </p>
        )}

        {isArcadeMode ? (
          <div className="scroll absolute bottom-6 left-3 sm:bottom-8 sm:left-10 flex items-center gap-1.5 sm:gap-3 bg-white border-2 border-black px-2 py-1 sm:px-3 sm:py-1.5 shadow-[2px_2px_0px_#000] sm:shadow-[3px_3px_0px_#000]">
            <span className="font-press-start text-[8px] sm:text-[10px] text-[#DF0024] animate-pixel-blink">
              ▼
            </span>
            <p className="font-silkscreen text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-zinc-800 font-bold">
              SCROLL TO COMPETE
            </p>
          </div>
        ) : (
          <div className="scroll absolute bottom-6 left-3 sm:bottom-8 sm:left-10 flex items-center gap-2 sm:gap-3">
            <div className="h-px w-6 sm:w-10 bg-zinc-500" />
            <p className="text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-zinc-500">
              SCROLL TO COMPETE
            </p>
          </div>
        )}
      </div>

      {isArcadeMode ? (
        <div className="fixed bottom-0 left-0 flex h-3.5 w-full overflow-hidden border-t-2 border-black z-40">
          <div className="color-segment w-1/4 bg-[#0085C7] border-r border-black" />
          <div className="color-segment w-1/4 bg-[#F4C300] border-r border-black" />
          <div className="color-segment w-1/4 bg-[#009F3D] border-r border-black" />
          <div className="color-segment w-1/4 bg-[#DF0024]" />
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 flex h-3 w-full overflow-hidden">
          <div className="color-segment w-1/4 bg-blue-500" />
          <div className="color-segment w-1/4 bg-yellow-400" />
          <div className="color-segment w-1/4 bg-green-500" />
          <div className="color-segment w-1/4 bg-red-500" />
        </div>
      )}

      {/* Non-sticky Arcade Portal Console Widget on Hero page */}
      <ArcadePortalButton />
    </section>
  );
};

export default Hero;
