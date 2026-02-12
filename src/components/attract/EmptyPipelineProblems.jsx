import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { TrendingDown, Flame, HandHeart } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Feast or Famine",
    headline: "PROBLEM #1: INCONSISTENT LEAD FLOW",
    body: "Some months you're drowning. Other months, crickets. No consistency means no predictability.",
    stat: "67%",
    statLabel: "of contractors struggle with lead consistency",
    pain: "You can't grow a business you can't predict.",
  },
  {
    icon: Flame,
    title: "Money Burning, Phone Silent",
    headline: "PROBLEM #2: MARKETING THAT DOESN'T WORK",
    body: "You're paying for ads, SEO, agencies—but where are the leads? Marketing ROI is a mystery.",
    stat: "$3,200",
    statLabel: "monthly average wasted on ineffective marketing",
    pain: "Every dollar you waste is a dollar your competitor invests.",
  },
  {
    icon: HandHeart,
    title: "Living on Hope",
    headline: "PROBLEM #3: DEPENDENT ON REFERRALS",
    body: "Referrals are great—but unreliable. You need a system that generates leads on demand.",
    stat: "43%",
    statLabel: "of contractors get 80%+ of leads from referrals",
    pain: "Hope is not a strategy. Systems are.",
  },
];

export default function EmptyPipelineProblems() {
  return (
    <SectionWrapper id="problems" aria-label="Common pipeline problems">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#FA982F" }}>
          The Problem
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Empty Pipeline ={" "}
          <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
            Unpredictable Revenue
          </span>
        </h2>
        <p className="font-body text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          If you can't control your pipeline, you can't control your business
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl p-8 backdrop-blur-xl border-l-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderLeft: "4px solid #FA982F",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "rgba(250,152,47,0.12)" }}>
              <problem.icon className="w-7 h-7" style={{ color: "#FA982F" }} />
            </div>

            <div className="font-mono text-[10px] uppercase tracking-widest mb-3"
              style={{ color: "rgba(250,152,47,0.7)" }}>
              {problem.headline}
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              {problem.title}
            </h3>

            <p className="font-body text-sm mb-6 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}>
              {problem.body}
            </p>

            <div className="rounded-lg p-4 mb-4"
              style={{ background: "rgba(250,152,47,0.08)" }}>
              <div className="font-display text-3xl font-black mb-1"
                style={{ color: "#FA982F" }}>
                {problem.stat}
              </div>
              <div className="font-body text-xs"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                {problem.statLabel}
              </div>
            </div>

            <div className="pt-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-body text-sm font-semibold italic"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                "{problem.pain}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}