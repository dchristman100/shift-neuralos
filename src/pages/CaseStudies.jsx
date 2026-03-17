import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import GradientButton from "../components/shared/GradientButton";
import RevenueGrowthChart from "../components/case-studies/RevenueGrowthChart";
import { cases, SIZE_FILTERS, GROWTH_FILTERS } from "../components/case-studies/caseStudiesData";
import { ArrowRight } from "lucide-react";

function FilterPills({ label, options, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono text-xs uppercase tracking-wider mr-1" style={{ color: "rgba(255,255,255,0.3)" }}>{label}</span>
      {options.map(o => {
        const isActive = active === o.key;
        return (
          <button
            key={o.key}
            onClick={() => onChange(o.key)}
            className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-200"
            style={{
              background: isActive ? "#F54A48" : "rgba(255,255,255,0.05)",
              color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
              border: `1px solid ${isActive ? "#F54A48" : "rgba(255,255,255,0.1)"}`,
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function CaseCard({ c, index }) {
  return (
    <motion.div
      layout
      key={c.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${c.color}33` }}
    >
      <div style={{ height: "3px", background: c.color }} />
      <div className="p-7 md:p-9" style={{ background: `${c.color}08` }}>
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-mono text-xs px-2 py-1 rounded uppercase tracking-wider"
                style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}33` }}>
                {c.package}
              </span>
              <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{c.location}</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{c.company}</h2>
          </div>
          <div className="font-display text-xl md:text-2xl font-black" style={{ color: c.color }}>{c.headline}</div>
        </div>

        {/* Problem / Result */}
        <div className="grid md:grid-cols-2 gap-6 mb-7">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>The Problem</div>
            <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{c.problem}</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>The Result</div>
            <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{c.result}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {c.stats.map((s, si) => (
            <div key={si} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-display text-xl font-black mb-1" style={{ color: c.color }}>{s.value}</div>
              <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="font-body text-sm italic mb-2" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>"{c.quote}"</p>
          <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>— {c.person}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [sizeFilter, setSizeFilter] = useState("all");
  const [growthFilter, setGrowthFilter] = useState("all");

  const filtered = useMemo(() => cases.filter(c => {
    const sizeMatch = sizeFilter === "all" || c.size === sizeFilter;
    const growthMatch = growthFilter === "all" || c.growthMilestone === growthFilter;
    return sizeMatch && growthMatch;
  }), [sizeFilter, growthFilter]);

  const chartCases = filtered.length > 0 ? filtered : cases;

  return (
    <main className="pt-24">
      <SectionWrapper>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(245,74,72,0.12)", color: "#F54A48", border: "1px solid rgba(245,74,72,0.3)" }}>
            Case Studies
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Real Contractors.<br />
            <span className="shift-gradient-text">Real Revenue.</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Not impressions. Not clicks. Booked jobs and dollars closed.
          </p>
        </motion.div>

        {/* ── FILTER BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row gap-5 flex-wrap items-start"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <FilterPills label="Size" options={SIZE_FILTERS} active={sizeFilter} onChange={setSizeFilter} />
          <div className="hidden sm:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.08)" }} />
          <FilterPills label="Growth" options={GROWTH_FILTERS} active={growthFilter} onChange={setGrowthFilter} />
          {(sizeFilter !== "all" || growthFilter !== "all") && (
            <button
              onClick={() => { setSizeFilter("all"); setGrowthFilter("all"); }}
              className="ml-auto font-mono text-xs px-3 py-1.5 rounded-full transition-all"
              style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)", background: "transparent" }}
            >
              Clear filters
            </button>
          )}
        </motion.div>

        {/* ── CHART ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <RevenueGrowthChart cases={chartCases} />
        </motion.div>

        {/* ── CASE CARDS ── */}
        <div className="space-y-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((c, i) => <CaseCard key={c.id} c={c} index={i} />)
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                  No case studies match these filters. Try adjusting your selection.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Story?
          </h2>
          <p className="font-body text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Book a 20-minute call. We'll show you the exact revenue opportunity in your market.
          </p>
          <GradientButton size="lg" href="https://makea.shiftnow.io/widget/bookings/reality">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}