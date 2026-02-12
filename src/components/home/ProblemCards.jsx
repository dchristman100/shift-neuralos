import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import GlassCard from "../shared/GlassCard";
import { Phone, Trash2, Ghost } from "lucide-react";

const leaks = [
  {
    icon: Phone,
    color: "#F54A48",
    title: "Missed Calls = Missed Revenue",
    body: "42% of calls come after 5pm. Your voicemail isn't closing deals.",
    stat: "$12K-$35K",
    label: "lost monthly",
    pain: "Every missed call is a job your competitor wins.",
  },
  {
    icon: Trash2,
    color: "#FA982F",
    title: "Junk Leads Eat Your Time",
    body: "You're paying for leads that were never going to buy.",
    stat: "$8K-$25K",
    label: "wasted monthly",
    pain: "Bad leads don't just waste money—they waste your sales team's energy.",
  },
  {
    icon: Ghost,
    color: "#48BB78",
    title: "Invisible Buyers Choose Competitors",
    body: "High-intent buyers are researching you. You just can't see them.",
    stat: "$15K-$40K",
    label: "missed monthly",
    pain: "They wanted to buy from you. You just weren't fast enough.",
  },
];

export default function ProblemCards() {
  return (
    <SectionWrapper id="revenue-leaks" aria-label="Revenue leak problems">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#F54A48" }}>
          The Problem
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Every Day, Money Walks Out Your Door
        </h2>
        <p className="font-body text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          These three leaks drain $35K-$100K+ monthly from the average roofing company
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaks.map((leak, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative rounded-2xl p-8 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Left colored border accent */}
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
              style={{ background: leak.color }}
            />

            <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6"
              style={{
                background: `${leak.color}20`,
              }}>
              <leak.icon className="w-8 h-8" style={{ color: leak.color }} />
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-3">
              {leak.title}
            </h3>

            <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              {leak.body}
            </p>

            <div className="mb-4">
              <div className="font-display text-3xl font-bold shift-gradient-text mb-1">
                {leak.stat}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                {leak.label}
              </div>
            </div>

            <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-body text-xs italic" style={{ color: "rgba(255,255,255,0.4)" }}>
                {leak.pain}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}