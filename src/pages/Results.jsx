import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import GlassCard from "../components/shared/GlassCard";
import { Quote, TrendingUp, Users, DollarSign, Calendar, ArrowRight } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";

export default function Results() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
            style={{
              background: "rgba(245,74,72,0.12)",
              color: "#F54A48",
              border: "1px solid rgba(245,74,72,0.3)",
            }}>
            Case Study
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            From $750K to $7M in{" "}
            <span className="shift-gradient-text">6 Years</span>
          </h1>
          <p className="font-body text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            How Titan Roofing Services went from missing half their leads to dominating Dallas
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Stats Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: DollarSign, value: "$7M", label: "Annual Revenue", color: "#F54A48" },
            { icon: TrendingUp, value: "34%", label: "Close Rate Increase", color: "#FA982F" },
            { icon: Calendar, value: "89%", label: "Show Rate", color: "#48BB78" },
            { icon: Users, value: "3.2x", label: "More Appointments", color: "#F54A48" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 backdrop-blur-xl border text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl mx-auto mb-4"
                style={{ background: `${stat.color}20` }}>
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <div className="font-display text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* The Story */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.02)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              The Problem: Revenue Slipping Through the Cracks
            </h2>
            <div className="rounded-2xl p-8 md:p-10 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <Quote className="w-10 h-10 mb-6 opacity-30" style={{ color: "#F54A48" }} />
              <p className="font-body text-lg leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                "In 2019, we were doing $750K in revenue. Not bad, but we knew we were leaving money on the table. We'd get 40-50 leads a week, but only connect with maybe 20 of them. The rest went straight to voicemail."
              </p>
              <p className="font-body text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                "We tried hiring more salespeople, but they couldn't work 24/7. Storm season was the worst—leads would flood in at night and on weekends, and by the time we called back Monday morning, they'd already signed with someone else."
              </p>
              <div className="mt-8 pt-6 border-t flex items-center gap-4"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg"
                  style={{
                    background: "linear-gradient(135deg, #F54A48, #FA982F)",
                    color: "white",
                  }}>
                  JT
                </div>
                <div>
                  <div className="font-display font-semibold text-white">Jake Torres</div>
                  <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Owner, Titan Roofing Services
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              The Breaking Point: $47K Lost in One Month
            </h2>
            <div className="space-y-6">
              <p className="font-body text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                May 2020 was a massive hail storm in Dallas. Leads were pouring in—over 200 in two weeks. Jake's team was overwhelmed. They worked 12-hour days but still couldn't keep up.
              </p>
              <div className="rounded-2xl p-6 backdrop-blur-xl border"
                style={{
                  background: "rgba(245,74,72,0.08)",
                  borderColor: "rgba(245,74,72,0.2)",
                }}>
                <div className="font-body text-sm mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Breakdown of that month:
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Total leads received
                    </span>
                    <span className="font-mono font-semibold text-white">213</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Leads contacted within 5 minutes
                    </span>
                    <span className="font-mono font-semibold text-white">34 (16%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Leads never reached
                    </span>
                    <span className="font-mono font-semibold" style={{ color: "#EF4444" }}>89 (42%)</span>
                  </div>
                  <div className="pt-3 border-t flex justify-between items-center"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <span className="font-body text-sm font-semibold text-white">
                      Estimated revenue lost
                    </span>
                    <span className="font-display text-xl font-bold" style={{ color: "#F54A48" }}>
                      $47,200
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body text-lg italic leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}>
                "That was my wake-up call. We were literally watching money walk out the door."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              The Solution: ShiFt Convert Goes Live
            </h2>
            <p className="font-body text-lg leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.7)" }}>
              Jake implemented ShiFt in July 2020. The AI was trained on Titan's specific services, pricing, and sales process. Within 48 hours, it was live.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "First AI response", value: "22 seconds" },
                { label: "Leads captured (first week)", value: "100%" },
                { label: "Setup time", value: "36 hours" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 backdrop-blur-xl border text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="font-display text-2xl font-bold shift-gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              The Results: 6 Years of Compound Growth
            </h2>
            <div className="rounded-2xl p-8 backdrop-blur-xl border mb-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="space-y-6">
                <div>
                  <div className="font-display text-lg font-semibold text-white mb-3">
                    Year 1 (2020-2021)
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Revenue
                      </div>
                      <div className="font-mono text-xl font-bold shift-gradient-text">
                        $750K → $1.8M
                      </div>
                    </div>
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Lead capture rate
                      </div>
                      <div className="font-mono text-xl font-bold text-white">
                        58% → 98%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="font-display text-lg font-semibold text-white mb-3">
                    Year 3 (2022-2023)
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Revenue
                      </div>
                      <div className="font-mono text-xl font-bold shift-gradient-text">
                        $4.2M
                      </div>
                    </div>
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Team size
                      </div>
                      <div className="font-mono text-xl font-bold text-white">
                        4 → 12 salespeople
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="font-display text-lg font-semibold text-white mb-3">
                    Today (2026)
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Revenue
                      </div>
                      <div className="font-mono text-2xl font-bold shift-gradient-text">
                        $7M+
                      </div>
                    </div>
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        ROI on ShiFt
                      </div>
                      <div className="font-mono text-2xl font-bold shift-gradient-text">
                        427%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: "rgba(245,74,72,0.06)",
                borderColor: "rgba(245,74,72,0.2)",
              }}
            >
              <Quote className="w-10 h-10 mb-6 opacity-30" style={{ color: "#F54A48" }} />
              <p className="font-body text-xl leading-relaxed mb-6 text-white">
                "ShiFt didn't just fix our lead problem—it became the foundation of our entire growth strategy. Every lead gets handled. Every opportunity gets captured. My team focuses on closing, not chasing."
              </p>
              <p className="font-body text-lg italic" style={{ color: "rgba(255,255,255,0.6)" }}>
                — Jake Torres, February 2026
              </p>
            </div>
          </motion.div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            See what ShiFt can do for your roofing business.
          </p>
          <GradientButton size="lg">
            Calculate My Revenue Opportunity
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}