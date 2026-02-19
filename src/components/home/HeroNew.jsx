import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function HeroNew() {
  return (
    <section id="hero" aria-label="Hero section" className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-8 pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(245,74,72,0.2) 0%, rgba(250,152,47,0.1) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1140px] mx-auto text-center">
        {/* Pulsing Badge */}
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
            Calculating Live Revenue Leaks for 847+ Roofing Companies
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white mb-6"
        >
          <span className="shift-gradient-text">Three Revenue Leaks</span>
          <br />
          Are Costing You{" "}
          <br className="hidden sm:block" />
          $35K-$100K+ Every Month
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Missed calls. Junk leads. Invisible buyers. Your competitors are capturing these opportunities while you sleep. See exactly how much they're costing{" "}
          <span className="font-semibold" style={{ color: "#F54A48" }}>YOUR</span> business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <GradientButton size="lg" href="https://calc.shiftnow.io">
            Calculate My Revenue Leak
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>

        {/* Micro-commitment */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-xs tracking-wider"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          60 seconds. No credit card. Just your real number.
        </motion.p>
      </div>
    </section>
  );
}