import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { TrendingUp, DollarSign, Calendar, Award } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function AttractResults() {
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
            Real Numbers From{" "}
            <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
              Real Roofing Companies
            </span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            See how AI-powered lead generation transforms pipelines
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Aggregated Results */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(250,152,47,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Average Performance Metrics
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: TrendingUp, number: "147", unit: "%", label: "Average lead increase", context: "First 90 days" },
            { icon: DollarSign, number: "$47", unit: "", label: "Average cost per lead", context: "(vs. $120+ industry average)" },
            { icon: Calendar, number: "12", unit: "days", label: "Time to first lead", context: "(from launch)" },
            { icon: Award, number: "4.2x", unit: "", label: "Marketing ROI", context: "Average across clients" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 backdrop-blur-xl border text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" style={{ color: "#FA982F" }} />
              <div className="font-display text-5xl font-black mb-2"
                style={{ color: "#FA982F" }}>
                {stat.number}
                <span className="text-2xl">{stat.unit}</span>
              </div>
              <div className="font-body text-sm font-semibold mb-2 text-white">
                {stat.label}
              </div>
              <div className="font-mono text-xs"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.context}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 backdrop-blur-xl border"
          style={{
            background: "linear-gradient(135deg, rgba(250,152,47,0.08), rgba(245,74,72,0.04))",
            borderColor: "rgba(250,152,47,0.2)",
          }}
        >
          <div className="text-center mb-8">
            <div className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
              "We went from hoping for leads to having more than we could handle. Our marketing finally makes sense."
            </div>
            <div className="font-body" style={{ color: "rgba(255,255,255,0.6)" }}>
              — Mike Chen, Peak Roofing Solutions
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See{" "}
            <span style={{ color: "#FA982F" }}>Your Numbers?</span>
          </h2>
          <GradientButton size="lg" className="!bg-gradient-to-r from-[#FA982F] to-[#F54A48]">
            Get My Pipeline Audit
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}