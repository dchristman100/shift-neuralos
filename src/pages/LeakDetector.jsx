import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ── Mock CRM data analysis engine ─────────────────────────────────────────
const analyzeCRM = () => [
  {
    id: "missed-followup-1",
    category: "Missed Follow-Up",
    severity: "critical",
    color: "#F54A48",
    lead: "Marcus W. — 1423 Elm St",
    detail: "Inbound lead 6 days ago. No follow-up attempt recorded. Insurance claim confirmed.",
    estimatedValue: 18500,
    daysOpen: 6,
    fix: "Send follow-up SMS + email sequence now",
    fixType: "auto",
  },
  {
    id: "missed-followup-2",
    category: "Missed Follow-Up",
    severity: "critical",
    color: "#F54A48",
    lead: "Sandra K. — 889 Maple Dr",
    detail: "Web form submitted 4 days ago. Called once, no voicemail left. Lead still open.",
    estimatedValue: 12200,
    daysOpen: 4,
    fix: "Drop voicemail + trigger 5-day SMS drip",
    fixType: "auto",
  },
  {
    id: "slow-response-1",
    category: "Slow Response",
    severity: "high",
    color: "#FA982F",
    lead: "Derek P. — 2201 Oak Blvd",
    detail: "Average response time to this source: 4h 17m. Industry benchmark: under 5 minutes.",
    estimatedValue: 9800,
    daysOpen: 2,
    fix: "Enable AI instant response for this lead channel",
    fixType: "config",
  },
  {
    id: "slow-response-2",
    category: "Slow Response",
    severity: "high",
    color: "#FA982F",
    lead: "Facebook Ads — Weekend Batch",
    detail: "14 leads received Sat–Sun. First contact averaged 9h 42m. 6 already went cold.",
    estimatedValue: 54000,
    daysOpen: 3,
    fix: "Activate 24/7 AI coverage for Facebook channel",
    fixType: "config",
  },
  {
    id: "unclosed-intent-1",
    category: "Unclosed High-Intent",
    severity: "high",
    color: "#FFD700",
    lead: "Tom R. — 57 Birch Lane",
    detail: "Appointment set, showed up, estimate delivered. No close in 11 days. High-intent signals: insurance adjuster involved.",
    estimatedValue: 22000,
    daysOpen: 11,
    fix: "Send urgency follow-up with financing options",
    fixType: "auto",
  },
  {
    id: "unclosed-intent-2",
    category: "Unclosed High-Intent",
    severity: "medium",
    color: "#FFD700",
    lead: "Angela M. — 345 Cedar Rd",
    detail: "Requested callback 3 times. Spoke with rep twice. No proposal sent. Lead score: 94/100.",
    estimatedValue: 15700,
    daysOpen: 8,
    fix: "Generate and send proposal via AI",
    fixType: "auto",
  },
  {
    id: "slow-response-3",
    category: "Slow Response",
    severity: "medium",
    color: "#FA982F",
    lead: "Google LSA — Tuesday Batch",
    detail: "8 Google Local Service Ads leads. Average first response: 2h 11m. Optimal window: 90 seconds.",
    estimatedValue: 32000,
    daysOpen: 1,
    fix: "Route Google LSA leads to AI instant responder",
    fixType: "config",
  },
  {
    id: "missed-followup-3",
    category: "Missed Follow-Up",
    severity: "medium",
    color: "#F54A48",
    lead: "Chris B. — 901 Pine Ave",
    detail: "Storm damage inquiry 9 days ago. One text sent, no reply. No further attempts logged.",
    estimatedValue: 8900,
    daysOpen: 9,
    fix: "Re-engage with storm urgency sequence",
    fixType: "auto",
  },
];

const CATEGORIES = ["All", "Missed Follow-Up", "Slow Response", "Unclosed High-Intent"];
const SEVERITY_ORDER = { critical: 0, high: 1, medium: 2 };
const SEVERITY_LABELS = { critical: "Critical", high: "High", medium: "Medium" };
const SEVERITY_COLORS = { critical: "#F54A48", high: "#FA982F", medium: "#FFD700" };

function SeverityBadge({ severity }) {
  return (
    <span
      className="font-mono"
      style={{
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        fontWeight: 700,
        padding: "3px 10px",
        borderRadius: "999px",
        background: `${SEVERITY_COLORS[severity]}18`,
        color: SEVERITY_COLORS[severity],
        border: `1px solid ${SEVERITY_COLORS[severity]}40`,
      }}
    >
      {SEVERITY_LABELS[severity]}
    </span>
  );
}

function LeakCard({ leak, onFix, fixed }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      style={{
        background: fixed ? "rgba(72,187,120,0.05)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${fixed ? "rgba(72,187,120,0.25)" : leak.color + "33"}`,
        borderLeft: `3px solid ${fixed ? "#48BB78" : leak.color}`,
        borderRadius: "16px",
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span
              className="font-mono"
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: fixed ? "#48BB78" : leak.color,
                fontWeight: 700,
              }}
            >
              {leak.category}
            </span>
            <SeverityBadge severity={leak.severity} />
            {fixed && (
              <span
                className="font-mono"
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: "rgba(72,187,120,0.15)",
                  color: "#48BB78",
                  border: "1px solid rgba(72,187,120,0.3)",
                }}
              >
                ✓ Fixed
              </span>
            )}
          </div>
          <div className="font-display" style={{ fontSize: "17px", fontWeight: 700, color: "#fff" }}>
            {leak.lead}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div className="font-display" style={{ fontSize: "22px", fontWeight: 900, color: fixed ? "#48BB78" : leak.color }}>
            ${leak.estimatedValue.toLocaleString()}
          </div>
          <div className="font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            at risk · {leak.daysOpen}d open
          </div>
        </div>
      </div>

      {/* Detail */}
      <p className="font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
        {leak.detail}
      </p>

      {/* Fix row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          flexWrap: "wrap",
          background: "rgba(0,0,0,0.15)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "10px",
          padding: "12px 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "14px" }}>{leak.fixType === "auto" ? "⚡" : "⚙️"}</span>
          <span className="font-body" style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
            {leak.fix}
          </span>
        </div>
        {!fixed ? (
          <button
            onClick={() => onFix(leak.id)}
            className="font-mono"
            style={{
              background: `linear-gradient(135deg, ${leak.color}, #FA982F)`,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 20px",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: `0 4px 14px ${leak.color}40`,
            }}
          >
            Fix Now →
          </button>
        ) : (
          <span className="font-mono" style={{ fontSize: "11px", color: "#48BB78", fontWeight: 700 }}>Action Sent ✓</span>
        )}
      </div>
    </motion.div>
  );
}

function FixModal({ leak, onClose, onConfirm }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(7,8,32,0.85)", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.93 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0D0F33",
          border: `1px solid ${leak.color}40`,
          borderTop: `3px solid ${leak.color}`,
          borderRadius: "20px",
          padding: "36px",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        <div className="font-mono" style={{ fontSize: "10px", color: leak.color, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px" }}>
          {leak.fixType === "auto" ? "⚡ Auto-Action" : "⚙️ Config Change"}
        </div>
        <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>{leak.fix}</h3>
        <p className="font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "24px" }}>
          This will immediately {leak.fixType === "auto" ? "trigger an AI-powered action for" : "update AI response settings affecting"}{" "}
          <strong style={{ color: "#fff" }}>{leak.lead}</strong>.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={onConfirm}
            className="font-mono"
            style={{
              flex: 1, background: `linear-gradient(135deg,${leak.color},#FA982F)`, color: "#fff",
              border: "none", borderRadius: "10px", padding: "14px", fontSize: "12px",
              fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer",
            }}
          >
            Confirm Fix
          </button>
          <button
            onClick={onClose}
            className="font-mono"
            style={{
              flex: 1, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "14px",
              fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LeakDetector() {
  const leaks = analyzeCRM();
  const [category, setCategory] = useState("All");
  const [fixed, setFixed] = useState(new Set());
  const [confirmLeak, setConfirmLeak] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(true);

  const filtered = leaks
    .filter(l => category === "All" || l.category === category)
    .sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);

  const totalAtRisk = leaks.reduce((sum, l) => sum + (fixed.has(l.id) ? 0 : l.estimatedValue), 0);
  const fixedCount = fixed.size;
  const criticalCount = leaks.filter(l => l.severity === "critical" && !fixed.has(l.id)).length;

  const handleFix = (id) => {
    const leak = leaks.find(l => l.id === id);
    setConfirmLeak(leak);
  };

  const handleConfirm = () => {
    setFixed(prev => new Set([...prev, confirmLeak.id]));
    setConfirmLeak(null);
  };

  const handleRescan = () => {
    setScanning(true);
    setFixed(new Set());
    setTimeout(() => { setScanning(false); setScanned(true); }, 1800);
  };

  return (
    <div
      className="font-body"
      style={{ minHeight: "100vh", background: "#070820", paddingTop: "100px", paddingBottom: "80px", color: "#fff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Montserrat Alternates', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "40px" }}>
          <Link to="/RevenueEnginePlans" className="font-mono" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            ← Revenue Engine Plans
          </Link>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245,74,72,0.1)", border: "1px solid rgba(245,74,72,0.3)", borderRadius: "999px", padding: "6px 16px", marginBottom: "14px" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F54A48", animation: "pulse 2s infinite", display: "inline-block" }} />
                <span className="font-mono" style={{ fontSize: "10px", color: "#F54A48", textTransform: "uppercase", letterSpacing: "0.15em" }}>Live CRM Analysis</span>
              </div>
              <h1 className="font-display" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: 1.1, color: "#fff", marginBottom: "8px" }}>
                Revenue Leak Detector
              </h1>
              <p className="font-body" style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
                Scanning your CRM for missed revenue opportunities
              </p>
            </div>
            <button
              onClick={handleRescan}
              disabled={scanning}
              className="font-mono"
              style={{
                background: scanning ? "rgba(255,255,255,0.05)" : "rgba(245,74,72,0.1)",
                border: "1px solid rgba(245,74,72,0.3)", color: scanning ? "rgba(255,255,255,0.3)" : "#F54A48",
                borderRadius: "10px", padding: "12px 24px", fontSize: "11px", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.1em", cursor: scanning ? "not-allowed" : "pointer",
              }}
            >
              {scanning ? "Scanning..." : "↻ Re-scan CRM"}
            </button>
          </div>
        </div>

        {/* ── Summary KPIs ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginBottom: "32px" }}>
          {[
            { label: "Revenue at Risk", value: `$${(totalAtRisk / 1000).toFixed(0)}K`, color: "#F54A48", sub: `${leaks.length - fixedCount} open leaks` },
            { label: "Critical Leaks", value: criticalCount, color: "#F54A48", sub: "need immediate action" },
            { label: "Fixed This Session", value: fixedCount, color: "#48BB78", sub: `of ${leaks.length} total found` },
          ].map((kpi, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "20px 22px" }}>
              <div className="font-mono" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>{kpi.label}</div>
              <div className="font-display" style={{ fontSize: "32px", fontWeight: 900, color: kpi.color, marginBottom: "4px" }}>{kpi.value}</div>
              <div className="font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>{kpi.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Category Filter ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
          {CATEGORIES.map(cat => {
            const active = category === cat;
            const catColor = cat === "Missed Follow-Up" ? "#F54A48" : cat === "Slow Response" ? "#FA982F" : cat === "Unclosed High-Intent" ? "#FFD700" : "#F54A48";
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="font-mono"
                style={{
                  fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em",
                  padding: "7px 16px", borderRadius: "999px", cursor: "pointer",
                  background: active ? catColor : "rgba(255,255,255,0.04)",
                  color: active ? "#fff" : "rgba(255,255,255,0.45)",
                  border: `1px solid ${active ? catColor : "rgba(255,255,255,0.1)"}`,
                  fontWeight: active ? 700 : 500,
                }}
              >
                {cat}
                {cat !== "All" && (
                  <span style={{ marginLeft: "6px", opacity: 0.7 }}>
                    ({leaks.filter(l => l.category === cat).length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Leak Cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map(leak => (
              <LeakCard key={leak.id} leak={leak} onFix={handleFix} fixed={fixed.has(leak.id)} />
            ))}
          </AnimatePresence>
        </div>

        {/* ── All Fixed Banner ── */}
        {fixedCount === leaks.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: "32px",
              background: "rgba(72,187,120,0.08)",
              border: "1px solid rgba(72,187,120,0.3)",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div>
            <h3 className="font-display" style={{ fontSize: "24px", fontWeight: 800, color: "#48BB78", marginBottom: "8px" }}>All Leaks Patched!</h3>
            <p className="font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>Your AI is now working every lead in your pipeline. Re-scan in 24 hours.</p>
            <button onClick={handleRescan} className="font-mono" style={{ background: "rgba(72,187,120,0.15)", border: "1px solid rgba(72,187,120,0.3)", color: "#48BB78", borderRadius: "10px", padding: "12px 28px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>
              Schedule Re-scan
            </button>
          </motion.div>
        )}

        <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }`}</style>
      </div>

      {/* ── Fix Confirmation Modal ── */}
      <AnimatePresence>
        {confirmLeak && (
          <FixModal leak={confirmLeak} onClose={() => setConfirmLeak(null)} onConfirm={handleConfirm} />
        )}
      </AnimatePresence>
    </div>
  );
}