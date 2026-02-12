import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import GlassCard from "../shared/GlassCard";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

export default function ProofSection() {
  return (
    <SectionWrapper id="proof" aria-label="Social proof and results">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#FA982F" }}>
          Proof
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          From Revenue Leak to{" "}
          <span className="shift-gradient-text">Revenue Machine</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GlassCard className="p-8 md:p-12">
          <Quote className="w-12 h-12 mb-6 opacity-30" style={{ color: "#F54A48" }} />
          
          <blockquote className="font-body text-xl md:text-2xl leading-relaxed mb-8 text-white">
            "We were losing $47K a month to missed calls alone. ShiFt caught every lead we were missing—now our calendar is full and our close rate is up 34%."
          </blockquote>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-xl"
              style={{
                background: "linear-gradient(135deg, #F54A48, #FA982F)",
                color: "white",
              }}>
              JT
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-white">
                Jake Torres
              </div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Owner, Titan Roofing Services
              </div>
              <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Dallas, TX
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold shift-gradient-text mb-2">
                $750K → $7M
              </div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                6-Year Growth
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold shift-gradient-text mb-2">
                34%
              </div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Close Rate Increase
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold shift-gradient-text mb-2">
                89%
              </div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Show Rate
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to={createPageUrl("Results")}
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{ color: "#F54A48" }}
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </SectionWrapper>
  );
}