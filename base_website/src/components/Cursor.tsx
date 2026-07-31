"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (isTouchDevice) return;

    const colors = [
      "#DF0024", // red
      "#0085C7", // blue
      "#009F3D", // green
      "#F4C300", // yellow
      "#000000", // black
      "#FFFFFF", // white
    ];

    let colorIndex = 0;

    const move = (e: MouseEvent) => {
      if (!initializedRef.current) {
        initializedRef.current = true;
        if (dotRef.current) gsap.to(dotRef.current, { opacity: 1, duration: 0.2 });
        if (ringRef.current) gsap.to(ringRef.current, { opacity: 1, duration: 0.2 });
      }

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.08,
          ease: "none",
        });
      }

      if (ringRef.current) {
        gsap.to(ringRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    const colorInterval = setInterval(() => {
      const color = colors[colorIndex];

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          backgroundColor: color,
          duration: 2,
        });
      }

      if (ringRef.current) {
        gsap.to(ringRef.current, {
          borderColor: color,
          duration: 2,
        });
      }

      colorIndex = (colorIndex + 1) % colors.length;
    }, 2500);

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <>
      {/* Outer 8-bit Pixel Crosshairs Frame */}
      <div
        ref={ringRef}
        style={{ borderColor: "#DF0024", opacity: 0 }}
        className="fixed top-0 left-0 w-9 h-9 border-2 border-dashed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[2px_2px_0px_#000]"
        aria-hidden="true"
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-current" />
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-current" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-current" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-current" />
      </div>

      {/* Inner 8-bit Pixel Dot */}
      <div
        ref={dotRef}
        style={{ backgroundColor: "#DF0024", opacity: 0 }}
        className="fixed top-0 left-0 w-3 h-3 border border-black pointer-events-none z-[100000] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[1px_1px_0px_#000]"
        aria-hidden="true"
      />
    </>
  );
}

