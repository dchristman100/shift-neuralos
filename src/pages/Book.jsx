import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";

export default function Book() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: What to Expect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Book Your Revenue{" "}
              <span className="shift-gradient-text">Reality Session</span>
            </h1>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              15 minutes. Your specific numbers. Zero obligation.
            </p>

            <div className="rounded-2xl p-8 backdrop-blur-xl border mb-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="font-display text-xl font-bold text-white mb-6">
                What to Expect:
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: TrendingUp,
                    title: "Your Revenue Leak Analysis",
                    desc: "We'll analyze YOUR specific revenue leaks based on your numbers",
                  },
                  {
                    icon: Users,
                    title: "Live Demo with Your Use Case",
                    desc: "See ShiFt AI handle a lead conversation specific to your roofing business",
                  },
                  {
                    icon: CheckCircle,
                    title: "Custom Recovery Roadmap",
                    desc: "Get a personalized plan showing exactly how to plug your leaks",
                  },
                  {
                    icon: Clock,
                    title: "No Pressure, Just Data",
                    desc: "Walk away with insights you can use—whether you choose ShiFt or not",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: i % 2 === 0 ? "rgba(245,74,72,0.12)" : "rgba(250,152,47,0.12)",
                      }}>
                      <item.icon className="w-6 h-6"
                        style={{ color: i % 2 === 0 ? "#F54A48" : "#FA982F" }} />
                    </div>
                    <div>
                      <div className="font-display text-base font-semibold text-white mb-1">
                        {item.title}
                      </div>
                      <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 backdrop-blur-xl border"
              style={{
                background: "rgba(72,187,120,0.08)",
                borderColor: "rgba(72,187,120,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6" style={{ color: "#48BB78" }} />
                <div className="font-display text-lg font-semibold text-white">
                  Trusted by 847+ Roofing Companies
                </div>
              </div>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                From solo operators to 50-person teams, roofing contractors across the country use ShiFt to capture revenue they were missing.
              </p>
            </div>
          </motion.div>

          {/* Right: Calendar Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-24 rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-center mb-6">
                <div className="font-mono text-xs uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  Step 1
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Select Your Time
                </h3>
              </div>

              {/* Calendar placeholder */}
              <div className="rounded-xl overflow-hidden mb-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  minHeight: "500px",
                }}
              >
                <div className="flex items-center justify-center h-full p-12">
                  <div className="text-center">
                    <Clock className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: "white" }} />
                    <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Calendar embed goes here
                      <br />
                      (Calendly, Cal.com, or similar)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "#48BB78" }} />
                  15-minute session
                </div>
                <div className="flex items-center gap-2 font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "#48BB78" }} />
                  Video or phone (your choice)
                </div>
                <div className="flex items-center gap-2 font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "#48BB78" }} />
                  Instant calendar confirmation
                </div>
                <div className="flex items-center gap-2 font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: "#48BB78" }} />
                  No credit card required
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Trust Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "847+", label: "Roofing Companies" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "98%", label: "Lead Capture Rate" },
              { value: "3.2x", label: "More Appointments" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-3xl md:text-4xl font-bold shift-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}