import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { CheckCircle, Calendar as CalendarIcon, Clock, Video } from "lucide-react";

export default function AttractBook() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
              Book Your Free{" "}
              <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
                Pipeline Audit
              </span>
            </h1>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              See exactly where your leads should come from—and how to get them.
            </p>

            {/* What You'll Get */}
            <h3 className="font-display text-xl font-bold text-white mb-4">
              What to Expect:
            </h3>
            <div className="space-y-4 mb-8">
              {[
                { icon: CheckCircle, title: "Revenue Leak Analysis", desc: "Identify where leads are slipping through the cracks" },
                { icon: Video, title: "Live AI Demo", desc: "See how AI fills pipelines in your specific market" },
                { icon: CalendarIcon, title: "Custom Roadmap", desc: "30-day plan to hit your lead targets" },
                { icon: Clock, title: "Data-Driven Insights", desc: "See your competitors' estimated ad spend & channel mix" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <item.icon className="w-6 h-6 flex-shrink-0" style={{ color: "#FA982F" }} />
                  <div>
                    <div className="font-body font-semibold text-white mb-1">
                      {item.title}
                    </div>
                    <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Stats */}
            <div className="rounded-xl p-6 backdrop-blur-xl border"
              style={{
                background: "rgba(250,152,47,0.08)",
                borderColor: "rgba(250,152,47,0.2)",
              }}>
              <div className="font-display text-3xl font-black mb-2"
                style={{ color: "#FA982F" }}>
                847+
              </div>
              <div className="font-body text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}>
                Roofing companies have gotten their pipeline audit
              </div>
            </div>
          </motion.div>

          {/* Right: Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Select Your Time
              </h3>

              {/* Calendar Placeholder */}
              <div className="aspect-square rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "2px dashed rgba(250,152,47,0.3)",
                }}>
                <div className="text-center">
                  <CalendarIcon className="w-16 h-16 mx-auto mb-4" style={{ color: "#FA982F" }} />
                  <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Calendar embed here
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                {[
                  { label: "Duration", value: "45 minutes" },
                  { label: "Format", value: "Video call (Zoom)" },
                  { label: "Confirmation", value: "Instant via email" },
                ].map((detail, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {detail.label}
                    </span>
                    <span className="font-body text-sm font-semibold text-white">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}