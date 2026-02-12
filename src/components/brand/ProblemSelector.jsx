import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { TrendingDown, RotateCcw, Zap, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const problems = [
  {
    icon: TrendingDown,
    title: "I'm not getting enough leads",
    subtext: "Pipeline is empty. Phone isn't ringing. Marketing isn't working.",
    solution: "ATTRACT can help",
    route: "AttractHome",
    color: "#FA982F",
    external: false,
  },
  {
    icon: RotateCcw,
    title: "I'm getting leads but not converting them",
    subtext: "Leads come in but don't book. Follow-up falls through. Close rate is low.",
    solution: "CONVERT can help",
    route: "Home",
    color: "#F54A48",
    external: false,
  },
  {
    icon: Zap,
    title: "I'm losing leads to competitors",
    subtext: "Competitors respond faster. After-hours leads go to voicemail.",
    solution: "SPEED can help",
    route: "Home",
    color: "#F54A48",
    external: false,
  },
  {
    icon: Search,
    title: "I don't know what's working",
    subtext: "Marketing ROI is a mystery. Can't track lead sources. Flying blind.",
    solution: "INSIGHTS can help",
    route: "Platform",
    color: "#48BB78",
    external: false,
  },
];

export default function ProblemSelector() {
  return (
    <SectionWrapper id="problem-selector" aria-label="Revenue gap diagnostic selector">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#F54A48" }}>
          Diagnose Your Gap
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Where Is Revenue Leaking From{" "}
          <span className="shift-gradient-text">Your Business?</span>
        </h2>
        <p className="font-body text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          Select your biggest challenge to find your solution
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {problems.map((problem, i) => (
          <Link
            key={i}
            to={createPageUrl(problem.route)}
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${problem.color}20` }}>
                <problem.icon className="w-7 h-7" style={{ color: problem.color }} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {problem.subtext}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <span className="font-mono text-sm font-semibold uppercase tracking-wider"
                style={{ color: problem.color }}>
                {problem.solution}
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: problem.color }} />
            </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
          Or:
        </p>
        <Link
          to={createPageUrl("Platform")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold uppercase tracking-wider border transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.15)",
            color: "white",
          }}
        >
          I Have ALL of These Problems
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}