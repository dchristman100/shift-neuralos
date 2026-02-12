import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { Calculator, Eye, Calendar, ArrowRight } from "lucide-react";
import GradientButton from "../shared/GradientButton";

const steps = [
  {
    icon: Calculator,
    title: "Answer 5 Questions",
    description: "Your revenue, lead volume, and current close rate",
    time: "60 seconds",
    step: "Step 1: Calculate",
  },
  {
    icon: Eye,
    title: "See ShiFt in Action",
    description: "Experience how AI handles your actual leads",
    time: "Live demo",
    step: "Step 2: Experience",
  },
  {
    icon: Calendar,
    title: "Reality Session",
    description: "Custom audit of your specific revenue leaks",
    time: "15 minutes",
    step: "Step 3: Book",
  },
];

export default function ConversionPath() {
  return (
    <SectionWrapper id="conversion-path" aria-label="Conversion path steps">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#F54A48" }}>
          Your Next Step
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          See Your Number in{" "}
          <span className="shift-gradient-text">60 Seconds</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 -right-4 z-10">
                <ArrowRight className="w-6 h-6" style={{ color: "rgba(255,255,255,0.2)" }} />
              </div>
            )}

            <div className="rounded-2xl p-8 backdrop-blur-xl border text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                  border: "1px solid rgba(245,74,72,0.2)",
                }}>
                <step.icon className="w-10 h-10" style={{ color: "#F54A48" }} />
              </div>

              <div className="font-mono text-xs uppercase tracking-wider mb-3"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                {step.step}
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                {step.description}
              </p>

              <div className="inline-flex items-center px-3 py-1 rounded-full font-mono text-xs font-semibold"
                style={{
                  background: "rgba(250,152,47,0.12)",
                  color: "#FA982F",
                }}>
                {step.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <GradientButton size="lg">
          Calculate My Revenue Leak
          <ArrowRight className="w-5 h-5" />
        </GradientButton>
      </motion.div>
    </SectionWrapper>
  );
}