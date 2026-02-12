import React from "react";
import BrandHero from "../components/brand/BrandHero";
import ProblemSelector from "../components/brand/ProblemSelector";
import TwoProducts from "../components/brand/TwoProducts";
import SocialProof from "../components/landing/SocialProof";
import CTA from "../components/landing/CTA";

export default function BrandHome() {
  return (
    <main>
      <BrandHero />
      <ProblemSelector />
      <TwoProducts />
      <SocialProof />
      <CTA />
    </main>
  );
}