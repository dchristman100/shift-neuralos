import React from "react";
import Hero from "../components/landing/Hero";
import ValueProps from "../components/landing/ValueProps";
import Features from "../components/landing/Features";
import SocialProof from "../components/landing/SocialProof";
import CTA from "../components/landing/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <Features />
      <SocialProof />
      <CTA />
    </main>
  );
}