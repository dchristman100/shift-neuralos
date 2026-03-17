import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = [
  { num: 1, label: "Welcome" },
  { num: 2, label: "CRM Setup" },
  { num: 3, label: "Business KPIs" },
  { num: 4, label: "AI Parameters" },
  { num: 5, label: "Go Live" },
];

export default function OnboardingLayout({ step, children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#070820" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(7,8,32,0.95)" }}>
        <div className="font-display text-base font-bold text-white">
          ShiFt<span style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>.</span>
          <span className="font-mono text-xs ml-2 px-2 py-0.5 rounded" style={{ color: "#FFD700", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.25)" }}>NeuralOS™</span>
        </div>
        <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Step {step} of {STEPS.length}
        </div>
      </div>

      {/* Step progress */}
      <div className="px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-0">
            {STEPS.map((s, i) => {
              const done = step > s.num;
              const active = step === s.num;
              return (
                <React.Fragment key={s.num}>
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-xs font-mono font-bold"
                      style={{
                        background: done ? "#48BB78" : active ? "linear-gradient(135deg,#F54A48,#FA982F)" : "rgba(255,255,255,0.07)",
                        border: `2px solid ${done ? "#48BB78" : active ? "#F54A48" : "rgba(255,255,255,0.1)"}`,
                        color: done || active ? "#fff" : "rgba(255,255,255,0.3)",
                      }}>
                      {done ? <Check className="w-3.5 h-3.5" /> : s.num}
                    </div>
                    <span className="font-mono text-xs hidden sm:block"
                      style={{ color: active ? "#FA982F" : done ? "#48BB78" : "rgba(255,255,255,0.3)" }}>
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-0.5 mx-1 mb-5 rounded-full transition-all duration-500"
                      style={{ background: done ? "#48BB78" : "rgba(255,255,255,0.08)" }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-10 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}