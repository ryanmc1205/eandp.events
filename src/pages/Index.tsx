import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import AdditionalCtaSection from "../components/AdditionalCtaSection";
import GallerySection from "../components/GallerySection";
import MeetPeterSection from "../components/MeetPeterSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Helmet>
        <title>
          Indian Wedding &amp; Corporate Event Planner in Atlanta | E&amp;P Events
        </title>

        <meta
          name="description"
          content="Indian, South Asian, fusion wedding + corporate event planning that lets you be fully present. Based in Atlanta. Trusted worldwide."
        />

        <link
          rel="canonical"
          href="https://eandp.events"
        />

        <meta
          property="og:url"
          content="https://eandp.events"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Indian Wedding & Corporate Event Planner in Atlanta | E&P Events"
        />

        <meta
          property="og:description"
          content="Indian, South Asian, fusion wedding + corporate event planning that lets you be fully present. Based in Atlanta. Trusted worldwide."
        />

        <meta
          property="og:image"
          content="https://eandp.events/lovable-uploads/SSTK_asset_small_new.webp"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Indian Wedding & Corporate Event Planner in Atlanta | E&P Events"
        />

        <meta
          name="twitter:description"
          content="Indian, South Asian, fusion wedding + corporate event planning that lets you be fully present. Based in Atlanta. Trusted worldwide."
        />

        <meta
          name="twitter:image"
          content="https://eandp.events/lovable-uploads/SSTK_asset_small_new.webp"
        />
      </Helmet>

      <div className="lion-watermark" />

      <div className="min-h-screen flex flex-col">
        <SchemaMarkup />

        <Navbar />

        <main className="flex-1 relative z-10">
          <HeroSection />

          <FeaturedSection />

          <WhatWeDoSection />

          <AdditionalCtaSection />

          <GallerySection />

          <MeetPeterSection />

          <TestimonialSection />

          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;