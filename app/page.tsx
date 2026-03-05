import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Methodology from "@/components/Methodology";
import About from "@/components/About";
import Infrastructure from "@/components/Security";
import Labs from "@/components/Labs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Solutions />
      <Methodology />
      <About />
      <Infrastructure />
      <Labs />
      <FAQ />
      <Footer />
    </main>
  );
}
