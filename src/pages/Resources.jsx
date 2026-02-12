import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { BookOpen, FileText, Video, Calculator } from "lucide-react";

export default function Resources() {
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
            Resources &{" "}
            <span className="shift-gradient-text">Learning Center</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Guides, case studies, and insights to help you master AI-powered revenue generation.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Resource Types */}
      <SectionWrapper>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: BookOpen, title: "Blog Posts", count: "48 articles" },
            { icon: FileText, title: "Guides & eBooks", count: "12 resources" },
            { icon: Video, title: "Webinars", count: "8 recordings" },
            { icon: Calculator, title: "Tools", count: "5 calculators" },
          ].map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 backdrop-blur-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <type.icon className="w-10 h-10 mb-4" style={{ color: "#F54A48" }} />
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {type.title}
              </h3>
              <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                {type.count}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Featured Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "The Speed Kill: Why Response Time Matters More Than Price", category: "Strategy", time: "8 min read" },
              { title: "How to Calculate Your Revenue Leak (Step-by-Step)", category: "Tools", time: "5 min read" },
              { title: "Case Study: $750K to $7M in 6 Years with AI", category: "Results", time: "12 min read" },
              { title: "Roofing Lead Generation in 2026: What Actually Works", category: "Marketing", time: "10 min read" },
            ].map((article, i) => (
              <div
                key={i}
                className="rounded-xl p-6 backdrop-blur-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(245,74,72,0.12)",
                      color: "#F54A48",
                    }}>
                    {article.category}
                  </span>
                  <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {article.time}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}