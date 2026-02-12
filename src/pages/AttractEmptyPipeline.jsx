import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import EmptyPipelineProblems from "../components/attract/EmptyPipelineProblems";
import GradientButton from "../components/shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function AttractEmptyPipeline() {
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
            The{" "}
            <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
              Empty Pipeline
            </span>{" "}
            Problem
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Why roofing contractors lose $35K-$100K+ monthly to broken lead generation systems
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Problems */}
      <EmptyPipelineProblems />

      {/* Cost of Inconsistency */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(250,152,47,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            The Real Cost of an{" "}
            <span style={{ color: "#FA982F" }}>Empty Pipeline</span>
          </h2>

          <div className="rounded-2xl p-8 md:p-12 backdrop-blur-xl border mb-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-display text-5xl font-black mb-2"
                  style={{ color: "#FA982F" }}>
                  $3.2K
                </div>
                <div className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  Wasted monthly on ineffective marketing
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl font-black mb-2"
                  style={{ color: "#F54A48" }}>
                  67%
                </div>
                <div className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  Struggle with lead consistency
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl font-black mb-2"
                  style={{ color: "#48BB78" }}>
                  43%
                </div>
                <div className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  Over-dependent on referrals
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <GradientButton size="lg" className="!bg-gradient-to-r from-[#FA982F] to-[#F54A48]">
              Calculate My Revenue Leak
              <ArrowRight className="w-5 h-5" />
            </GradientButton>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}