import About from "@/components/About";
import Eligibility from "@/components/Eligibility";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSponsors from "@/components/RevealSponsors";
import Timeline6 from "@/components/Timeline6";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Eligibility />
      <Timeline6 />
      {/*  <Sponsors /> */}
      <RevealSponsors />
      <Faqs />
      <Footer />
    </main>
  );
}
