import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { Bot, BarChart3, Phone, Shield, Workflow, Database } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Sales Assistant",
    desc: "Conversational AI that qualifies leads, books inspections, and nurtures prospects through your pipeline.",
  },
  {
    icon: BarChart3,
    title: "Revenue Dashboard",
    desc: "Real-time visibility into every dollar in your pipeline with predictive forecasting and trend analysis.",
  },
  {
    icon: Phone,
    title: "Smart Call Routing",
    desc: "Intelligent IVR and call distribution ensures every homeowner reaches the right rep at the right time.",
  },
  {
    icon: Shield,
    title: "Insurance Integration",
    desc: "Automated supplement writing and carrier communication that maximizes claim approvals.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "From first contact to final invoice — every step is automated, tracked, and optimized.",
  },
  {
    icon: Database,
    title: "Property Intelligence",
    desc: "Satellite imagery, permit data, and storm history combined to identify your highest-value neighborhoods.",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(250,152,47,0.2) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#F54A48] mb-4 block">
          Platform
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          The Complete <span className="shift-gradient-text">Neural Stack</span>
        </h2>
        <p className="font-body text-base md:text-lg text-[rgba(255,255,255,0.5)] max-w-xl mx-auto">
          Six integrated modules working together as one intelligent system.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]" style={{ background: "rgba(255,255,255,0.06)" }}>
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="p-7 md:p-9 group cursor-default transition-colors duration-300 hover:bg-[rgba(255,255,255,0.03)]"
            style={{ background: "rgba(13,15,51,0.9)" }}
          >
            <feature.icon
              className="w-7 h-7 mb-5 transition-colors duration-300"
              style={{ color: i % 2 === 0 ? "#F54A48" : "#FA982F" }}
            />
            <h3 className="font-display text-base md:text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-[rgba(255,255,255,0.45)] leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}