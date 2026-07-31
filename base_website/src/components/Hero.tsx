"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-zinc-50 pixel-grid-light"
    >
      <div className="overlay absolute inset-0 z-[100] origin-top bg-black" />

      {/* Retro Scanlines */}
      <div className="scanlines-overlay absolute inset-0 opacity-20 pointer-events-none" />

      <div className="pinstripes absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_58px,rgba(0,0,0,0.06)_59px,transparent_60px)]" />

      <div className="absolute inset-0 flex opacity-[0.05] pointer-events-none">
        <div className="olympic w-1/4 bg-blue-500" />
        <div className="olympic w-1/4 bg-yellow-400" />
        <div className="olympic w-1/4 bg-green-500" />
        <div className="olympic w-1/4 bg-red-500" />
      </div>

      {/* Pixelated 2026 Background */}
      <div className="year absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="font-press-start text-[22vw] leading-none text-black/[0.04] tracking-widest select-none">
          2026
        </h1>
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center z-10">
        <div className="relative p-2 border-2 border-black/20 bg-white/60 backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] mb-6">
          <Image
            src="/cr3.png"
            alt="Code Rush 3.0 Logo"
            width={112}
            height={112}
            priority
            className="logo w-20 md:w-28 h-auto"
          />
        </div>

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
                filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.8))",
              }}
            />
          </div>

          {/* CODE RUSH HEADING */}
          <div>
            <div className="overflow-hidden py-1">
              <h1 className="code font-press-start text-[4.5rem] leading-[0.9] tracking-tight text-zinc-900 sm:text-[7.5rem] md:text-[11rem] drop-shadow-[5px_5px_0px_#D4AF37]">
                CODE
              </h1>
            </div>

            <div className="overflow-hidden py-1">
              <h1 className="rush font-press-start text-[4.5rem] leading-[0.85] tracking-tight text-zinc-900 sm:text-[7.5rem] md:text-[11rem] drop-shadow-[5px_5px_0px_#0085C7]">
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
                filter: "drop-shadow(-3px 3px 0px rgba(0,0,0,0.8))",
              }}
            />
          </div>
        </div>

        <div className="subtitle mt-6 max-w-md border-2 border-black bg-black text-white px-4 py-2 shadow-[3px_3px_0px_#D4AF37]">
          <p className="font-silkscreen text-[10px] uppercase tracking-[0.25em] text-[#F4C300] sm:text-xs">
            THE ULTIMATE TEST OF COMPETITIVE PROGRAMMING
          </p>
        </div>

        <div className="scroll absolute bottom-8 left-4 flex items-center gap-3 sm:left-10 bg-white border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_#000]">
          <span className="font-press-start text-[10px] text-[#DF0024] animate-pixel-blink">▼</span>
          <p className="font-silkscreen text-[10px] uppercase tracking-widest text-zinc-800 font-bold">
            SCROLL TO COMPETE
          </p>
        </div>
      </div>

      {/* 8-Bit Gauge Bottom Bar */}
      <div className="fixed bottom-0 left-0 flex h-3.5 w-full overflow-hidden border-t-2 border-black z-40">
        <div className="color-segment w-1/4 bg-[#0085C7] border-r border-black" />
        <div className="color-segment w-1/4 bg-[#F4C300] border-r border-black" />
        <div className="color-segment w-1/4 bg-[#009F3D] border-r border-black" />
        <div className="color-segment w-1/4 bg-[#DF0024]" />
      </div>
    </section>
  );
};

export default Hero;
