import Hero from "@/component/Hero";
import About from "@/component/About";
import Features from "@/component/Features";
import Pricing from "@/component/Pricing"; 

import Destinations from "@/component/Destinations";
import Services from "@/component/Services";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Destinations />
      <Services />
    </main>
  );
}