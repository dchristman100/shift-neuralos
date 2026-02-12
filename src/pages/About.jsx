import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

export default function About() {
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
            We're Building the{" "}
            <span className="shift-gradient-text">Operating System</span>
            <br />
            for AI-First Business
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            ShiFt started with one question: Why do great contractors lose to faster, not better, competitors?
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Our Mission
          </h2>
          <div className="rounded-2xl p-8 md:p-12 backdrop-blur-xl border mb-12"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <p className="font-body text-xl md:text-2xl leading-relaxed text-white text-center mb-8">
              "To give every contractor the same AI advantage that only enterprise companies could afford—and make it roofing-specific."
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Speed over size", desc: "Fast response wins deals" },
                { icon: Users, title: "AI over headcount", desc: "Scale without hiring" },
                { icon: Target, title: "Roofing-specific", desc: "Built for your industry" },
              ].map((pillar, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: i === 0 ? "rgba(245,74,72,0.12)" : i === 1 ? "rgba(250,152,47,0.12)" : "rgba(72,187,120,0.12)",
                    }}>
                    <pillar.icon className="w-7 h-7"
                      style={{ color: i === 0 ? "#F54A48" : i === 1 ? "#FA982F" : "#48BB78" }} />
                  </div>
                  <div className="font-display text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </div>
                  <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Presence over perfection", desc: "Show up fast, iterate constantly" },
              { title: "Speed over sophistication", desc: "First responder wins the deal" },
              { title: "Results over rhetoric", desc: "ROI talks, everything else walks" },
              { title: "Coherence over chaos", desc: "Simple systems beat complex ones" },
            ].map((value, i) => (
              <div
                key={i}
                className="rounded-xl p-6 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-body" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}