import React from "react";
import AttractHero from "../components/attract/AttractHero";
import EmptyPipelineProblems from "../components/attract/EmptyPipelineProblems";
import AttractSolution from "../components/attract/AttractSolution";
import AttractROICalculator from "../components/attract/AttractROICalculator";
import SocialProof from "../components/landing/SocialProof";
import FAQSection from "../components/home/FAQSection";
import CTA from "../components/landing/CTA";

export default function AttractHome() {
  return (
    <main>
      <AttractHero />
      <EmptyPipelineProblems />
      <AttractSolution />
      <AttractROICalculator />
      <SocialProof />
      <FAQSection />
      <CTA />
    </main>
  );
}