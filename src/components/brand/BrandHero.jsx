import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import { ArrowRight, Play } from "lucide-react";

export default function BrandHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-8 pt-32 pb-20 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
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
              <GradientButton size="lg">
                Find Your Gap
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-mono font-semibold uppercase tracking-wide border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "white",
                }}>
                <Play className="w-5 h-5" />
                Watch Platform Demo
              </button>
            </div>

            {/* Trust bar */}
            <p className="font-mono text-xs tracking-wider"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              Trusted by 847+ roofing companies across 42 states
            </p>
          </motion.div>

          {/* Right: Revenue Stack Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-4">
              {/* Layer 4: Revenue Reality */}
              <div className="rounded-2xl p-6 backdrop-blur-xl border text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(72,187,120,0.12), rgba(72,187,120,0.08))",
                  borderColor: "rgba(72,187,120,0.3)",
                }}>
                <div className="font-display text-lg font-bold text-white mb-1">
                  REVENUE REALITY
                </div>
                <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  What's actually happening
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8" style={{ background: "linear-gradient(180deg, rgba(72,187,120,0.5), rgba(245,74,72,0.5))" }} />
              </div>

              {/* Layer 3: Convert */}
              <div className="rounded-2xl p-6 backdrop-blur-xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.08))",
                  borderColor: "rgba(245,74,72,0.3)",
                }}>
                <div className="font-display text-lg font-bold text-white mb-1">
                  CONVERT
                </div>
                <div className="font-body text-sm mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                  AI Lead Conversion & Booking
                </div>
                <a href="https://go.shiftnow.io" className="font-mono text-xs font-semibold" style={{ color: "#F54A48" }}>
                  → go.shiftnow.io
                </a>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8" style={{ background: "linear-gradient(180deg, rgba(245,74,72,0.5), rgba(250,152,47,0.5))" }} />
              </div>

              {/* Layer 2: Attract */}
              <div className="rounded-2xl p-6 backdrop-blur-xl border"
                style={{
                  background: "linear-gradient(135deg, rgba(250,152,47,0.12), rgba(250,152,47,0.08))",
                  borderColor: "rgba(250,152,47,0.3)",
                }}>
                <div className="font-display text-lg font-bold text-white mb-1">
                  ATTRACT
                </div>
                <div className="font-body text-sm mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                  AI Lead Generation
                </div>
                <a href="https://attract.shiftnow.io" className="font-mono text-xs font-semibold" style={{ color: "#FA982F" }}>
                  → attract.shiftnow.io
                </a>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8" style={{ background: "linear-gradient(180deg, rgba(250,152,47,0.5), rgba(255,255,255,0.2))" }} />
              </div>

              {/* Layer 1: Your Business */}
              <div className="rounded-2xl p-6 backdrop-blur-xl border text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}>
                <div className="font-display text-lg font-bold text-white mb-1">
                  YOUR BUSINESS
                </div>
                <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Where you are now
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}