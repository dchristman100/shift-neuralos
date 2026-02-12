import React from "react";
import AttractHero from "../components/attract/AttractHero";
import EmptyPipelineProblems from "../components/attract/EmptyPipelineProblems";
import AttractSolution from "../components/attract/AttractSolution";
import SocialProof from "../components/landing/SocialProof";
import FAQSection from "../components/home/FAQSection";
import CTA from "../components/landing/CTA";

export default function AttractHome() {
  return (
    <main>
      <AttractHero />
      <EmptyPipelineProblems />
      <AttractSolution />
      <SocialProof />
      <FAQSection />
      <CTA />
    </main>
  );
}