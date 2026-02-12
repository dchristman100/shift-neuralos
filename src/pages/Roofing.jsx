import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Home, Building2, Cloud, MapPin } from "lucide-react";
import GradientButton from "../shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function Roofing() {
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
            Built By Roofers.{" "}
            <span className="shift-gradient-text">For Roofers.</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            We don't do plumbing. We don't do HVAC. We do roofing—and we do it better than anyone.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Segments */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: "Residential Roofing",
              challenge: "High volume, fast response critical",
              solution: "AI handles the volume. You handle the close.",
              color: "#F54A48",
            },
            {
              icon: Building2,
              title: "Commercial Roofing",
              challenge: "Long nurture cycles, multiple decision makers",
              solution: "AI nurtures for months. Books when ready.",
              color: "#FA982F",
            },
            {
              icon: Cloud,
              title: "Storm Restoration",
              challenge: "Surge capacity, 48-hour response windows",
              solution: "AI scales instantly. Never miss the surge.",
              color: "#48BB78",
            },
          ].map((segment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: `${segment.color}08`,
                borderColor: `${segment.color}30`,
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${segment.color}20` }}>
                <segment.icon className="w-8 h-8" style={{ color: segment.color }} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {segment.title}
              </h3>
              <div className="mb-4">
                <div className="font-mono text-xs uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  Challenge
                </div>
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {segment.challenge}
                </p>
              </div>
              <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="font-mono text-xs uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  How ShiFt Helps
                </div>
                <p className="font-body font-semibold" style={{ color: segment.color }}>
                  {segment.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Multi-location */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 backdrop-blur-xl border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245,74,72,0.12)" }}>
              <MapPin className="w-10 h-10" style={{ color: "#F54A48" }} />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Multi-Location Contractors
              </h3>
              <p className="font-body text-lg mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                Managing 3, 5, or 10+ locations? ShiFt's multi-location dashboard gives you visibility across every market, unified reporting, and location-specific AI training.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {["Unified dashboard", "Location-specific AI", "Centralized reporting"].map((feature, i) => (
                  <div key={i} className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    ✓ {feature}
                  </div>
                ))}
              </div>
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
            See ShiFt Built for Your Type of Roofing
          </h2>
          <GradientButton size="lg">
            Schedule Demo
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}