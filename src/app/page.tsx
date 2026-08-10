import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Specs from "@/components/sections/Specs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specs />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
