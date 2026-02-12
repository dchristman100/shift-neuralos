import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { X, Check } from "lucide-react";
import GradientButton from "../shared/GradientButton";
import { ArrowRight } from "lucide-react";

const comparisons = [
  { metric: "After-hours response", current: "Voicemail", shift: "30 seconds" },
  { metric: "Lead qualification", current: "Manual", shift: "AI-instant" },
  { metric: "Appointment booking", current: "Back-and-forth", shift: "Automated" },
  { metric: "Follow-up consistency", current: "When you remember", shift: "100% automated" },
  { metric: "Lead source tracking", current: '"I think it was..."', shift: "Real-time dashboard" },
  { metric: "Monthly revenue leaked", current: "$35K-$100K+", shift: "$0" },
];

export default function ComparisonTable() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#FA982F" }}>
          The Reality
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Your Current Approach vs. ShiFt Convert
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="overflow-x-auto rounded-2xl border backdrop-blur-xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <th className="font-display text-left py-5 px-6 text-sm font-semibold"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                Metric
              </th>
              <th className="font-display text-center py-5 px-6 text-sm font-semibold"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                Your Current Setup
              </th>
              <th className="font-display text-center py-5 px-6 text-sm font-semibold"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                With ShiFt Convert
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < comparisons.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <td className="font-body py-5 px-6 text-sm font-medium text-white">
                  {row.metric}
                </td>
                <td className="py-5 px-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-5 h-5" style={{ color: "#EF4444" }} />
                    <span className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {row.current}
                    </span>
                  </div>
                </td>
                <td className="py-5 px-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" style={{ color: "#48BB78" }} />
                    <span className="font-mono text-sm font-semibold" style={{ color: "#48BB78" }}>
                      {row.shift}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-10"
      >
        <GradientButton size="lg">
          See Your Specific Numbers
          <ArrowRight className="w-5 h-5" />
        </GradientButton>
      </motion.div>
    </SectionWrapper>
  );
}