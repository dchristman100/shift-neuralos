import React from "react";
import HeroNew from "../components/home/HeroNew";
import ProblemCards from "../components/home/ProblemCards";
import ComparisonTable from "../components/home/ComparisonTable";
import Mechanism from "../components/home/Mechanism";
import ProofSection from "../components/home/ProofSection";
import ConversionPath from "../components/home/ConversionPath";
import FAQSection from "../components/home/FAQSection";
import CTA from "../components/landing/CTA";

export default function Home() {
  return (
    <main>
      <HeroNew />
      <ProblemCards />
      <ComparisonTable />
      <Mechanism />
      <ProofSection />
      <ConversionPath />
      <FAQSection />
      <CTA />
    </main>
  );
}