import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import { ArcadeProvider } from "@/context/ArcadeContext";
import ArcadeTransition from "@/components/ArcadeTransition";
import ArcadePortalButton from "@/components/ArcadePortalButton";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coderush-3.xyz"),
  title: {
    default: "CodeRush 3.0 | The Ultimate Competitive Programming Championship",
    template: "%s | CodeRush 3.0",
  },
  description:
    "CodeRush 3.0 is the flagship competitive programming championship organized by CPBYTE — where the brightest coders converge to compete in an Olympics-inspired arena.",
  keywords: [
    "CodeRush",
    "CodeRush 3.0",
    "CodeRush competition",
    "CodeRush website",
    "CPBYTE",
    "CPBYTE coding competition",
    "Competitive Programming",
    "Hackathon",
    "Coding Championship",
    "Programming Contest",
    "KIET Group of Institutions",
    "KIET Ghaziabad",
    "Algorithms",
    "Relay Race Coding",
    "3v3 Elimination",
  ],
  authors: [{ name: "CPBYTE", url: "https://coderush-3.xyz" }],
  creator: "CPBYTE",
  publisher: "CPBYTE",
  applicationName: "CodeRush 3.0",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coderush-3.xyz",
    siteName: "CodeRush 3.0",
    title: "CodeRush 3.0 | The Ultimate Competitive Programming Championship",
    description:
      "CodeRush 3.0 is the flagship competitive programming championship organized by CPBYTE in an Olympics-inspired arena.",
    images: [
      {
        url: "/bitlogo.png",
        width: 1200,
        height: 630,
        alt: "CodeRush 3.0 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeRush 3.0 | The Ultimate Competitive Programming Championship",
    description:
      "Join the ultimate test of competitive programming. ₹50K+ prize pool, relay races, and 3v3 elimination rounds.",
    images: ["/bitlogo.png"],
    creator: "@cpbyte",
  },
  icons: {
    icon: [
      { url: "/bitlogo.png", type: "image/png" },
    ],
    shortcut: "/bitlogo.png",
    apple: "/bitlogo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07111F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "CodeRush 3.0",
  "startDate": "2026-08-21T10:00:00+05:30",
  "endDate": "2026-08-22T17:00:00+05:30",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "KIET Group of Institutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Delhi-NCR, Ghaziabad",
      "addressLocality": "Ghaziabad",
      "postalCode": "201206",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN",
    },
  },
  "image": ["https://coderush-3.xyz/bitlogo.png"],
  "description":
    "CodeRush 3.0 is the flagship competitive programming championship organized by CPBYTE.",
  "offers": {
    "@type": "Offer",
    "url": "https://unstop.com",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-01-01T00:00:00+05:30",
  },
  "organizer": {
    "@type": "Organization",
    "name": "CPBYTE",
    "url": "https://coderush-3.xyz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <ArcadeProvider>
          <ArcadeTransition />
          <SmoothScroll>
            <Cursor />
            {children}
          </SmoothScroll>
        </ArcadeProvider>
      </body>
    </html>
  );
}

