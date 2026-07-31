import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Eligibility from "@/components/Eligibility";
import Timeline6 from "@/components/Timeline6";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Eligibility />
      <Timeline6 />
      <Sponsors />
      <Footer />
    </main>
  );
}
