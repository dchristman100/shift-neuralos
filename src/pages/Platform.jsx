import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Layers, Zap, Brain, BarChart3, Shield, Code } from "lucide-react";
import GradientButton from "../shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function Platform() {
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
            The Complete{" "}
            <span className="shift-gradient-text">Neural Stack</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Four layers working together to transform how roofing contractors generate and convert revenue.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Architecture */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { layer: "Layer 3", title: "Insights & Analytics", desc: "Revenue visibility, attribution tracking, predictive forecasting", icon: BarChart3, color: "#48BB78" },
            { layer: "Layer 2", title: "Convert", desc: "AI lead conversion, qualification, and automated appointment booking", icon: Zap, color: "#F54A48" },
            { layer: "Layer 1", title: "Attract", desc: "AI lead generation, multi-channel campaigns, intelligent targeting", icon: Brain, color: "#FA982F" },
            { layer: "Layer 0", title: "Your Business Foundation", desc: "CRM, calendar, phone system, website", icon: Layers, color: "#9DA3B4" },
          ].map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: i === 3 ? "rgba(255,255,255,0.04)" : `${layer.color}10`,
                borderColor: i === 3 ? "rgba(255,255,255,0.08)" : `${layer.color}30`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${layer.color}20` }}>
                  <layer.icon className="w-7 h-7" style={{ color: layer.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      {layer.layer}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {layer.title}
                    </h3>
                  </div>
                  <p className="font-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {layer.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Capabilities */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Platform Capabilities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, GDPR ready, bank-level encryption" },
            { icon: Code, title: "API Access", desc: "Full REST API for custom integrations and workflows" },
            { icon: Zap, title: "99.9% Uptime SLA", desc: "Guaranteed reliability with 24/7 monitoring" },
          ].map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <cap.icon className="w-10 h-10 mb-4" style={{ color: "#F54A48" }} />
              <h3 className="font-display text-lg font-bold text-white mb-3">
                {cap.title}
              </h3>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
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
            Ready to See the Platform in Action?
          </h2>
          <GradientButton size="lg">
            Schedule Platform Demo
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}