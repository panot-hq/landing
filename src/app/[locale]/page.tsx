"use client";

import Screen from "../components/PageTransition";
import Header from "../components/Header";
import {
  HeroSection,
  DemoSection,
  CTASection,
  Footer,
} from "../components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-neutral-900 overflow-x-hidden">
      <Header />
      <Screen>
        <HeroSection />
        <DemoSection />
        <CTASection />
        <Footer />
      </Screen>
    </main>
  );
}

