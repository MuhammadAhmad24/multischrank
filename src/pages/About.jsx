import React from "react";
import AboutHero from "../components/AboutHero";
import OurStorySection from "../components/OurStorySection";
import ProcessSection from "../components/ProcessSection";
import OurValuesSection from "../components/OurValuesSection";
import GallerySection from "../components/GallerySection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutCTASection from "../components/AboutCTASection";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <ProcessSection />
      <OurValuesSection />
      <GallerySection />
      <WhyChooseUs />
      <AboutCTASection />

    </>
  );
}