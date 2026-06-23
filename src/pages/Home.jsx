import React from "react";
import Header from "@/components/flatto/Header";
import HeroSection from "@/components/flatto/HeroSection";
import VisitorSection from "@/components/flatto/VisitorSection";
import CircleSection from "@/components/flatto/CircleSection";
import FAQSection from "@/components/flatto/FAQSection";
import ContactSection from "@/components/flatto/ContactSection";
import Footer from "@/components/flatto/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisitorSection />
        <CircleSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}