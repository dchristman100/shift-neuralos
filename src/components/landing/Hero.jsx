import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 md:px-8 pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(245,74,72,0.15) 0%, rgba(250,152,47,0.08) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(245,74,72,0.2), transparent)",
          }}
        />
      </div>

      <div className="relative max-w-[1140px] mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] mb-8"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <Zap className="w-4 h-4 text-[#FA982F]" />
          <span className="font-mono text-xs tracking-widest uppercase text-[rgba(255,255,255,0.6)]">
            AI-Powered Revenue Engine
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
        >
          Stop Leaving Revenue{" "}
          <br className="hidden sm:block" />
          <span className="shift-gradient-text">On The Roof</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ShiFt NeuralOS™ is the AI operating system that transforms how roofing contractors 
          generate leads, close deals, and scale revenue — on autopilot.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GradientButton size="lg">
            Get Your Free Audit
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
          <GradientButton variant="outline" size="lg">
            Watch Demo
          </GradientButton>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "340%", label: "Avg ROI Increase" },
            { value: "2.4x", label: "More Closed Deals" },
            { value: "67%", label: "Faster Response Time" },
            { value: "$4.2M+", label: "Revenue Generated" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold shift-gradient-text mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-[rgba(255,255,255,0.45)] tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}