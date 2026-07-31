import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeRush 3.0 | CPBYTE",
    short_name: "CodeRush 3.0",
    description:
      "The flagship competitive programming championship organized by CPBYTE — where the brightest coders converge to compete in an Olympics-inspired arena.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    icons: [
      {
        src: "/cr3.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/cr3.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
