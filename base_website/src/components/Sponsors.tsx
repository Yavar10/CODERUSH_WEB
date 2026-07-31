"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const sponsors = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];

const ringColors = [
  "#0085C7", // Blue
  "#F4C300", // Yellow
  "#000000", // Black
  "#009F3D", // Green
  "#DF0024", // Red
];

function SponsorRing({ src, index }: { src: string; index: number }) {
  return (
    <div
      className="sponsor-ring flex-shrink-0 flex items-center justify-center h-32 w-32 md:h-40 md:w-40 border-4 border-black bg-white shadow-[4px_4px_0px_#000] mx-6 relative"
      style={{
        outline: `3px solid ${ringColors[index % ringColors.length]}`,
      }}
    >
      <div className="absolute top-1 left-1 font-silkscreen text-[8px] text-zinc-400">
        [ID:{index + 1}]
      </div>
      <Image
        src={src}
        alt="Sponsor Logo"
        width={100}
        height={100}
        className="w-[65%] h-[65%] object-contain"
      />
    </div>
  );
}

export default function Sponsors() {
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".sponsor-ring", {
        y: 8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.1,
      });

      if (row1.current) {
        gsap.to(row1.current, {
          x: "-50%",
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }

      if (row2.current) {
        gsap.fromTo(
          row2.current,
          { x: "-50%" },
          {
            x: "0%",
            duration: 30,
            ease: "none",
            repeat: -1,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[#F8F6F1] py-24 md:py-32 pixel-grid-light border-t-2 border-b-2 border-black"
    >
      {/* Scanlines */}
      <div className="scanlines-overlay absolute inset-0 opacity-15 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16 px-6">
          <p className="font-press-start text-[10px] sm:text-xs font-bold tracking-widest text-[#8C6A1A]">
            ▶ OUR PARTNERS & SPONSORS
          </p>

          <h2 className="mt-3 font-press-start text-3xl sm:text-5xl md:text-7xl uppercase text-[#111827] tracking-tight drop-shadow-[4px_4px_0px_#0085C7]">
            HALL OF FAME
          </h2>

          <div className="mt-6 flex justify-center gap-3">
            <span className="w-4 h-4 border border-black bg-[#0085C7] shadow-[1px_1px_0px_#000]" />
            <span className="w-4 h-4 border border-black bg-[#F4C300] shadow-[1px_1px_0px_#000]" />
            <span className="w-4 h-4 border border-black bg-black shadow-[1px_1px_0px_#000]" />
            <span className="w-4 h-4 border border-black bg-[#009F3D] shadow-[1px_1px_0px_#000]" />
            <span className="w-4 h-4 border border-black bg-[#DF0024] shadow-[1px_1px_0px_#000]" />
          </div>
        </div>

        <div className="mb-10">
          <div ref={row1} className="flex w-max">
            {duplicatedSponsors.map((logo, index) => (
              <SponsorRing
                key={`top-${index}`}
                src={logo}
                index={index}
              />
            ))}
          </div>
        </div>

        <div>
          <div ref={row2} className="flex w-max">
            {duplicatedSponsors.map((logo, index) => (
              <SponsorRing
                key={`bottom-${index}`}
                src={logo}
                index={index + 2}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center px-6">
          <a
            href="mailto:cpbyte@kiet.edu"
            className="arcade-btn bg-[#F4C300] hover:bg-[#D4AF37] text-black px-10 py-5 md:px-14 md:py-6 font-press-start text-xs md:text-base uppercase tracking-wider flex items-center gap-3 shadow-[5px_5px_0px_#000]"
          >
            <span>BE A SPONSOR</span>
            <span className="animate-pixel-blink text-lg">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
}
