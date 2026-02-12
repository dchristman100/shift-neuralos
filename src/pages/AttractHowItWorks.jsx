import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Settings, Rocket, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";

const stages = [
  {
    icon: Settings,
    timeline: "Day 1-3",
    title: "Platform Configuration",
    description: "We connect to your systems, define your service area, and configure AI targeting parameters.",
    outcome: "Ready to launch",
    color: "#FA982F",
  },
  {
    icon: Rocket,
    timeline: "Day 4-7",
    title: "Multi-Channel Activation",
    description: "AI campaigns go live across Facebook, Google, and local channels. Initial data collection begins.",
    outcome: "First leads arriving",
    color: "#F54A48",
  },
  {
    icon: BarChart3,
    timeline: "Day 8-21",
    title: "AI Learning Phase",
    description: "AI analyzes performance, identifies winning combinations, and automatically reallocates budget to top performers.",
    outcome: "Cost per lead dropping",
    color: "#48BB78",
  },
  {
    icon: TrendingUp,
    timeline: "Day 22-30",
    title: "Predictable Pipeline",
    description: "System reaches optimization. Consistent lead flow established. Ready to scale investment.",
    outcome: "Predictable, profitable leads",
    color: "#FA982F",
  },
];

export default function AttractHowItWorks() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            How ShiFt Attract{" "}
            <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
              Fills Your Pipeline
            </span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            AI-powered lead generation that works while you sleep
          </p>
        </motion.div>
      </SectionWrapper>

      {/* The System */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(250,152,47,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
            style={{ color: "#FA982F" }}>
            The System
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            From Zero to Full Pipeline in{" "}
            <span style={{ color: "#FA982F" }}>30 Days</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex gap-8">
                {/* Timeline */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${stage.color}20` }}>
                    <stage.icon className="w-8 h-8" style={{ color: stage.color }} />
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-0.5 h-full mt-4"
                      style={{ background: "linear-gradient(180deg, rgba(250,152,47,0.5), rgba(250,152,47,0.1))" }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="rounded-2xl p-8 backdrop-blur-xl border"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: `${stage.color}15`,
                          color: stage.color,
                        }}>
                        {stage.timeline}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="font-body text-base mb-4"
                      style={{ color: "rgba(255,255,255,0.7)" }}>
                      {stage.description}
                    </p>
                    <div className="font-body text-sm font-semibold"
                      style={{ color: stage.color }}>
                      ✓ {stage.outcome}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <GradientButton size="lg" className="!bg-gradient-to-r from-[#FA982F] to-[#F54A48]">
            Start Your 30-Day Pipeline Build
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}