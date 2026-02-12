import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import GlassCard from "../shared/GlassCard";
import { Brain, Target, TrendingUp, Clock } from "lucide-react";

const props = [
  {
    icon: Brain,
    title: "Neural Lead Scoring",
    description: "AI analyzes every inbound lead in real-time, scoring intent and routing hot prospects to your closers instantly.",
    color: "#F54A48",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Hyper-local storm tracking and property intelligence identify your highest-value opportunities before competitors.",
    color: "#FA982F",
  },
  {
    icon: TrendingUp,
    title: "Revenue Autopilot",
    description: "Automated follow-ups, proposals, and pipeline management that works 24/7 — even while your crew sleeps.",
    color: "#F54A48",
  },
  {
    icon: Clock,
    title: "Speed-to-Lead",
    description: "Respond to every inquiry in under 60 seconds with AI-powered conversations that feel genuinely human.",
    color: "#FA982F",
  },
];

export default function ValueProps() {
  return (
    <SectionWrapper id="value-props">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#FA982F] mb-4 block">
          Why ShiFt
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Built for Roofing.{" "}
          <span className="shift-gradient-text">Powered by AI.</span>
        </h2>
        <p className="font-body text-base md:text-lg text-[rgba(255,255,255,0.5)] max-w-xl mx-auto">
          Every feature is purpose-built for roofing contractors who want to dominate their market.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {props.map((prop, i) => (
          <GlassCard key={i} delay={i * 0.1} className="p-7 md:p-9 group">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `rgba(${prop.color === "#F54A48" ? "245,74,72" : "250,152,47"}, 0.12)`,
              }}
            >
              <prop.icon className="w-6 h-6" style={{ color: prop.color }} />
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-3">
              {prop.title}
            </h3>
            <p className="font-body text-sm md:text-base text-[rgba(255,255,255,0.5)] leading-relaxed">
              {prop.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}