import React from "react";
import { Zap, Calendar, BarChart3, ArrowRight } from "lucide-react";

const PILLARS = [
  { icon: Zap, color: "#FA982F", title: "Connect Your CRM", desc: "Link GoHighLevel, HubSpot, or any platform so leads flow automatically." },
  { icon: BarChart3, color: "#F54A48", title: "Set Your KPIs", desc: "Define the revenue targets and metrics that matter to your business." },
  { icon: Calendar, color: "#48BB78", title: "Configure Your AI", desc: "Set response timing, tone, and qualification rules for your market." },
];

export default function StepWelcome({ data, onNext }) {
  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 font-mono text-xs uppercase tracking-wider"
          style={{ background: "rgba(250,152,47,0.1)", color: "#FA982F", border: "1px solid rgba(250,152,47,0.3)" }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#FA982F" }} />
          Revenue Engine Setup
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
          Welcome to ShiFt NeuralOS™
        </h1>
        <p className="font-body text-base" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
          Let's get your AI Revenue Engine live in under 10 minutes.<br />
          We'll walk you through three quick steps.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {PILLARS.map((p, i) => (
          <div key={i} className="flex items-start gap-5 rounded-2xl p-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${p.color}18` }}>
              <p.icon className="w-5 h-5" style={{ color: p.color }} />
            </div>
            <div>
              <div className="font-display text-base font-bold text-white mb-1">{p.title}</div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-xl px-5 py-4 font-body text-sm"
        style={{ background: "rgba(72,187,120,0.06)", border: "1px solid rgba(72,187,120,0.2)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
        💡 <strong style={{ color: "#48BB78" }}>What you'll need:</strong> Your CRM login, your monthly lead volume, average job ticket size, and preferred response window.
      </div>

      <button onClick={onNext}
        className="w-full flex items-center justify-center gap-3 rounded-xl py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 24px rgba(245,74,72,0.3)" }}>
        Start Setup <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}