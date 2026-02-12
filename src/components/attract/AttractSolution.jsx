import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { Globe, Target, RefreshCw, CheckCircle } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Every Channel. Every Day.",
    description: "Facebook, Google, Instagram, TikTok, Local SEO—ShiFt Attract runs intelligent campaigns across all channels simultaneously.",
    benefit: "Be everywhere your prospects are, without the work.",
  },
  {
    icon: Target,
    title: "Find the Right Prospects",
    description: "Our AI identifies homeowners actively researching roofing services in your service area. No more spraying and praying.",
    benefit: "Leads that actually want roofing work—not tire kickers.",
  },
  {
    icon: RefreshCw,
    title: "Campaigns That Improve Themselves",
    description: "AI continuously tests creative, audiences, and placements. What works gets more budget. What doesn't gets cut.",
    benefit: "Marketing that gets smarter every day.",
  },
  {
    icon: CheckCircle,
    title: "Ready-to-Convert Leads",
    description: "Every lead is pre-qualified before it reaches you. Know their project type, timeline, and budget upfront.",
    benefit: "Talk to prospects who are ready to buy, not browse.",
  },
];

export default function AttractSolution() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(250,152,47,0.02)]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#FA982F" }}>
          The Solution
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          AI That Fills Your Pipeline{" "}
          <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
            While You Work
          </span>
        </h2>
        <p className="font-body text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          ShiFt Attract doesn't just run campaigns—it thinks, optimizes, and scales
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl p-8 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(250,152,47,0.12)" }}>
              <cap.icon className="w-8 h-8" style={{ color: "#FA982F" }} />
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              {cap.title}
            </h3>

            <p className="font-body text-base mb-6 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}>
              {cap.description}
            </p>

            <div className="pt-4 border-t"
              style={{ borderColor: "rgba(250,152,47,0.2)" }}>
              <div className="font-body text-sm font-semibold"
                style={{ color: "#FA982F" }}>
                → {cap.benefit}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}