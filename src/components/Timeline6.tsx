"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface EventItem {
  lane: string;
  time: string;
  title: string;
}

const events: EventItem[] = [
  { lane: "01", time: "10:00 AM", title: "Registration" },
  { lane: "02", time: "12:00 PM", title: "Inaugural Ceremony" },
  { lane: "03", time: "2:00 PM", title: "Relay Race" },
  { lane: "04", time: "6:00 PM", title: "Elimination (3v3)" },
  { lane: "05", time: "12:00 AM", title: "Jamming Session" },
  { lane: "06", time: "9:00 AM", title: "Javelin" },
  { lane: "07", time: "4:00 PM", title: "Closing Ceremony" },
];

export default function Timeline6() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkpoints = document.querySelectorAll<HTMLElement>(".checkpoint");

    const handlers: { element: HTMLElement; enter: () => void; leave: () => void }[] = [];

    checkpoints.forEach((cp) => {
      const enter = () => {
        cp.classList.add("checkpoint-fire");
      };

      const leave = () => {
        cp.classList.remove("checkpoint-fire");
      };

      cp.addEventListener("mouseenter", enter);
      cp.addEventListener("mouseleave", leave);

      handlers.push({ element: cp, enter, leave });
    });

    return () => {
      handlers.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".track-lane", {
        x: -100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".checkpoint").forEach((point) => {
        gsap.to(point, {
          boxShadow:
            "0 0 20px rgba(212,175,55,.6),0 0 50px rgba(212,175,55,.4)",
          repeat: -1,
          yoyo: true,
          duration: 1.8,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111F] py-20 md:py-32 pixel-grid-dark"
    >
      {/* Scanlines */}
      <div className="scanlines-overlay absolute inset-0 opacity-30 pointer-events-none" />

      <div className="absolute -top-40 left-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <Image
        src="/laurel-gold.png"
        alt=""
        width={800}
        height={800}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[300px] md:w-[800px] h-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="mb-14 md:mb-24 text-center">
          <p className="mb-4 font-press-start text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37]">
            ▶ CODERUSH EVENTS SCHEDULE
          </p>

          <h2 className="font-press-start text-3xl sm:text-5xl md:text-7xl uppercase text-white tracking-tight drop-shadow-[4px_4px_0px_#DF0024]">
            RACE TRACK
          </h2>
        </div>

        {/* 8-Bit Pixel Athletic Track Frame */}
        <div className="relative mx-auto max-w-6xl overflow-hidden border-4 border-black bg-[#8B3527] shadow-[8px_8px_0px_#000] pixel-dither">
          {/* Header Bar */}
          <div className="bg-black/60 border-b-2 border-white/30 px-6 py-2 flex items-center justify-between font-press-start text-[9px] text-[#F4C300]">
            <span>STAGES: 07</span>
            <span className="animate-pixel-blink">PROGRESSION MAP</span>
            <span>MODE: RELAY</span>
          </div>

          <div className="relative z-10">
            {events.map((event) => (
              <div
                key={event.lane}
                className="track-lane relative border-b-2 border-white/20 px-4 py-6 md:min-h-[150px] md:px-12 md:py-0 md:flex md:items-center hover:bg-black/20 transition-colors duration-200"
              >
                <div className="absolute right-3 top-2 font-press-start text-4xl md:text-9xl leading-none text-white/5 select-none pointer-events-none">
                  {event.lane}
                </div>

                <div className="md:hidden relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="checkpoint h-5 w-5 border-2 border-black bg-[#F4C300] shadow-[2px_2px_0px_#000] shrink-0" />
                    <span className="font-press-start text-[10px] tracking-wider text-[#F5D57A] uppercase">
                      {event.time}
                    </span>
                  </div>

                  <h3 className="font-press-start text-lg uppercase text-white tracking-wide">
                    {event.title}
                  </h3>
                </div>

                <div className="hidden md:flex relative z-10 w-full items-center gap-6">
                  <span className="min-w-[100px] font-press-start text-base tracking-widest text-white/80">
                    LANE_{event.lane}
                  </span>

                  <div className="h-[3px] flex-1 border-b-2 border-dashed border-white/50" />

                  {/* 8-bit Checkpoint Torch Box */}
                  <div className="checkpoint h-6 w-6 border-2 border-black bg-[#F4C300] shadow-[2px_2px_0px_#000] shrink-0 animate-pixel-pulse" />

                  <div className="min-w-[320px]">
                    <h3 className="font-press-start text-xl lg:text-2xl uppercase text-white tracking-wide drop-shadow-[2px_2px_0px_#000]">
                      {event.title}
                    </h3>

                    <p className="mt-2 font-silkscreen text-xs tracking-widest text-[#F5D57A] font-bold">
                      ⏰ TIME: {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Victory Finish Line */}
          <div className="relative flex min-h-[180px] md:h-44 items-center justify-center overflow-hidden border-t-4 border-black bg-black/80 px-4 py-10">
            <div className="text-center">
              <div className="mb-3 text-4xl md:text-5xl animate-pixel-float">🏆</div>

              <h3 className="font-press-start text-2xl md:text-4xl uppercase text-white tracking-wider drop-shadow-[3px_3px_0px_#D4AF37]">
                FINISH LINE
              </h3>

              <p className="mt-3 font-silkscreen text-xs md:text-sm tracking-widest text-[#F5D57A] uppercase font-bold">
                ★ CLOSING CEREMONY & FELICITATION ★
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
