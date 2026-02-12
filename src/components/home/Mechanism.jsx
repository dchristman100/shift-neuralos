import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { Target, CheckCircle, Calendar } from "lucide-react";

const stages = [
  {
    icon: Target,
    color: "#F54A48",
    stage: "Stage 1",
    title: "AI Answers in 30 Seconds",
    fixes: "Fixes: Leak #1 (Missed Calls)",
    description: "Phone, web, text, Facebook—every lead gets an instant response. No voicemail. No missed opportunities.",
    stat: "30 sec",
    statLabel: "response time",
  },
  {
    icon: CheckCircle,
    color: "#FA982F",
    stage: "Stage 2",
    title: "AI Separates Gold from Garbage",
    fixes: "Fixes: Leak #2 (Junk Leads)",
    description: "Our AI asks the right questions, scores every lead, and only passes qualified buyers to your team.",
    stat: "73%",
    statLabel: "better lead quality",
  },
  {
    icon: Calendar,
    color: "#48BB78",
    stage: "Stage 3",
    title: "AI Books the Appointment",
    fixes: "Fixes: Leak #3 (Invisible Buyers)",
    description: "Qualified leads get booked instantly. No back-and-forth. No delays. Just appointments on your calendar.",
    stat: "3.2x",
    statLabel: "more appointments",
  },
];

export default function Mechanism() {
  return (
    <SectionWrapper id="how-it-works" aria-label="How the conversion mechanism works">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#48BB78" }}>
          The Solution
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Three Fixes for Three Leaks
        </h2>
        <p className="font-body text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          ShiFt Convert plugs every hole in your revenue bucket
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative rounded-2xl p-8 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 group"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Stage badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{
                background: `${stage.color}20`,
                color: stage.color,
                border: `1px solid ${stage.color}40`,
              }}>
              {stage.stage}
            </div>

            <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `${stage.color}20`,
              }}>
              <stage.icon className="w-8 h-8" style={{ color: stage.color }} />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider mb-2"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              {stage.fixes}
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-4">
              {stage.title}
            </h3>

            <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              {stage.description}
            </p>

            <div className="pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="font-display text-4xl font-bold mb-1" style={{ color: stage.color }}>
                {stage.stat}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                {stage.statLabel}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}