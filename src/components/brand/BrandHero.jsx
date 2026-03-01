import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import { ArrowRight, Play } from "lucide-react";

export default function BrandHero() {
  return (
    <section id="hero" aria-label="Hero section" className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-8 pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(245,74,72,0.2) 0%, rgba(250,152,47,0.1) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1140px] mx-auto">
        <div className="max-w-3xl">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-8"
              style={{
                background: "rgba(245,74,72,0.08)",
                borderColor: "rgba(245,74,72,0.3)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F54A48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F54A48]"></span>
              </span>
              <span className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "#F54A48" }}>
                AI Revenue Operating System
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-white mb-6">
              <span className="shift-gradient-text">Revenue Leaks</span>
              <br />
              Don't Fix Themselves
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}>
              Roofing contractors lose $35K-$100K+ monthly to broken lead systems. ShiFt NeuralOS plugs the leaks with AI that generates, qualifies, and converts leads 24/7—without adding headcount.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <GradientButton size="lg" onClick={() => document.getElementById('problem-selector')?.scrollIntoView({ behavior: 'smooth' })}>
                Find Your Gap
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
            </div>

            {/* Trust bar */}
            <p className="font-mono text-xs tracking-wider"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              Trusted by 847+ roofing companies across 42 states
            </p>
          </motion.div>


        </div>
      </div>
    </section>
  );
}