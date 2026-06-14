"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import HowWeWork from "@/components/HowWeWork";
import Geography from "@/components/Geography";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";

export default function Home() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const openPrivacy = () => setPrivacyOpen(true);
  const closePrivacy = () => setPrivacyOpen(false);

  return (
    <>
      {/* Dynamic Navigation Header */}
      <Header />

      {/* Main content blocks */}
      <main className="flex-1">
        
        {/* Section 1: Hero Block */}
        <Hero />

        {/* Section 2: Services / Construction Types Grid */}
        <Services />

        {/* Section 3: Value Proposition / Advantages */}
        <WhyUs />

        {/* Section 4: Projects Portfolio Blueprints & Future Pics */}
        <Portfolio />

        {/* Section 5: Timeline Stepper / Process */}
        <HowWeWork />

        {/* Section 6: Serviced geography and map */}
        <Geography />

        {/* Section 7: FAQs Accordions */}
        <FAQ />

        {/* Section 8: Lead generation Form & Contacts details */}
        <OrderForm onShowPrivacy={openPrivacy} />

      </main>

      {/* Footer Block */}
      <Footer onShowPrivacy={openPrivacy} />

      {/* Privacy Policy Overlay Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={closePrivacy} />
    </>
  );
}
