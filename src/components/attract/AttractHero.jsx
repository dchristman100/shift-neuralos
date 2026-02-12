import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import { ArrowRight, Play } from "lucide-react";

export default function AttractHero() {
  return (
    <section id="hero" aria-label="Hero section" className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-8 pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(250,152,47,0.2) 0%, rgba(245,74,72,0.1) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1140px] mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-8"
          style={{
            background: "rgba(250,152,47,0.08)",
            borderColor: "rgba(250,152,47,0.3)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA982F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FA982F]"></span>
          </span>
          <span className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "#FA982F" }}>
            AI Lead Generation for Roofing Contractors
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white mb-6 max-w-5xl mx-auto"
        >
          Your{" "}
          <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
            Pipeline Is Empty
          </span>{" "}
          Because Your Marketing Isn't Working
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          You're spending on ads, SEO, and agencies—but the phone isn't ringing. ShiFt Attract uses AI to generate qualified leads across every channel, 24 hours a day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <GradientButton size="lg" className="!bg-gradient-to-r from-[#FA982F] to-[#F54A48]">
            Audit My Pipeline
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-mono font-semibold uppercase tracking-wide border transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.15)",
              color: "white",
            }}>
            <Play className="w-5 h-5" />
            See AI Lead Gen Demo
          </button>
        </motion.div>

        {/* Micro-commitment */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xs tracking-wider"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Free pipeline audit. See exactly where leads should be coming from.
        </motion.p>
      </div>
    </section>
  );
}