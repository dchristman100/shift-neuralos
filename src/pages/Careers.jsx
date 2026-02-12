import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Zap, Users, TrendingUp, Heart } from "lucide-react";
import GradientButton from "../shared/GradientButton";

export default function Careers() {
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
            Join the{" "}
            <span className="shift-gradient-text">Revolution</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            We're building the AI operating system that transforms how contractors do business. Come help us.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Zap, title: "Move Fast", desc: "Ship quickly, iterate constantly" },
            { icon: Users, title: "Own It", desc: "Take ownership, drive results" },
            { icon: TrendingUp, title: "Grow Daily", desc: "Learn something new every day" },
            { icon: Heart, title: "Care Deeply", desc: "About customers, team, craft" },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 backdrop-blur-xl border text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <value.icon className="w-10 h-10 mx-auto mb-4" style={{ color: "#F54A48" }} />
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {value.title}
              </h3>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.02)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Open Positions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote" },
              { title: "Product Designer", dept: "Design", location: "SF / Remote" },
              { title: "AI/ML Engineer", dept: "Engineering", location: "Remote" },
              { title: "Head of Growth", dept: "Marketing", location: "SF / Remote" },
            ].map((job, i) => (
              <div
                key={i}
                className="rounded-xl p-6 backdrop-blur-xl border flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {job.dept}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {job.location}
                    </span>
                  </div>
                </div>
                <GradientButton size="sm">Apply</GradientButton>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}