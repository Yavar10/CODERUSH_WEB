"use client";

import dynamic from "next/dynamic";

const Brochure = dynamic(() => import("./Brochure"), { ssr: false });

export default function BrochureWrapper() {
  return <Brochure />;
}
