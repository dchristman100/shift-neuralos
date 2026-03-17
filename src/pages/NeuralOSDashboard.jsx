import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

// ── Fake live counter hook ───────────────────────────────────────────────────
function useLiveCount(base, variance = 3, interval = 4000) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setVal(base + Math.floor(Math.random() * variance));
    }, interval);
    return () => clearInterval(t);
  }, [base, variance, interval]);
  return val;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const revenueData = [
  { week: "Wk 1", revenue: 14200 },
  { week: "Wk 2", revenue: 18900 },
  { week: "Wk 3", revenue: 22400 },
  { week: "Wk 4", revenue: 19800 },
  { week: "Wk 5", revenue: 31200 },
  { week: "Wk 6", revenue: 28700 },
  { week: "Wk 7", revenue: 36500 },
  { week: "Wk 8", revenue: 41200 },
];

const conversionData = [
  { day: "Mon", leads: 12, booked: 4 },
  { day: "Tue", leads: 18, booked: 7 },
  { day: "Wed", leads: 9,  booked: 3 },
  { day: "Thu", leads: 22, booked: 9 },
  { day: "Fri", leads: 16, booked: 6 },
  { day: "Sat", leads: 11, booked: 5 },
  { day: "Sun", leads: 7,  booked: 3 },
];

const leads = [
  { id: 1, name: "Marcus T.", address: "4821 Ridgecrest Dr", source: "GBP", status: "booked", score: 94, time: "2m ago", damage: "Storm", value: "$9,200", response: "28s" },
  { id: 2, name: "Sarah K.",  address: "1102 Maple Ave",     source: "LSA", status: "qualifying", score: 78, time: "6m ago", damage: "Age",   value: "$6,800", response: "31s" },
  { id: 3, name: "Derek P.",  address: "882 Oak Blvd",       source: "Facebook", status: "booked", score: 91, time: "14m ago", damage: "Hail",  value: "$11,400", response: "24s" },
  { id: 4, name: "Lisa M.",   address: "3390 Vine St",       source: "GBP", status: "follow-up", score: 61, time: "22m ago", damage: "Leak",  value: "$4,200", response: "30s" },
  { id: 5, name: "James R.",  address: "741 Summit Rd",      source: "LSA", status: "booked", score: 88, time: "31m ago", damage: "Wind",  value: "$7,900", response: "19s" },
  { id: 6, name: "Angela N.", address: "5510 Birch Ct",      source: "Referral", status: "qualifying", score: 72, time: "44m ago", damage: "Storm", value: "$8,500", response: "26s" },
  { id: 7, name: "Tom H.",    address: "221 Cedar Lane",     source: "GBP", status: "no-answer", score: 45, time: "1h ago", damage: "Age",   value: "—",      response: "29s" },
];

const aiActivity = [
  { time: "2:41 PM", event: "Booked appointment — Marcus T. — Thu Mar 20, 10:00 AM", type: "booked" },
  { time: "2:37 PM", event: "Qualifying in progress — Sarah K. — Damage type confirmed: Age", type: "qualifying" },
  { time: "2:28 PM", event: "Appointment confirmed — Derek P. — Wed Mar 19, 2:00 PM", type: "booked" },
  { time: "2:14 PM", event: "5th follow-up sent — Lisa M. — SMS delivered", type: "followup" },
  { time: "1:59 PM", event: "New inbound call — James R. — Answered in 19s", type: "inbound" },
  { time: "1:42 PM", event: "Storm protocol activated — 3 new LSA leads captured", type: "storm" },
  { time: "1:18 PM", event: "Missed call recovered — Angela N. — Text-back sent in 22s", type: "inbound" },
];

const statusConfig = {
  booked:     { label: "Booked",     bg: "rgba(72,187,120,0.12)",  border: "rgba(72,187,120,0.3)",  text: "#48BB78" },
  qualifying: { label: "Qualifying", bg: "rgba(250,152,47,0.12)",  border: "rgba(250,152,47,0.3)",  text: "#FA982F" },
  "follow-up":{ label: "Follow-Up",  bg: "rgba(99,179,237,0.12)",  border: "rgba(99,179,237,0.3)",  text: "#63B3ED" },
  "no-answer":{ label: "No Answer",  bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.12)", text: "rgba(255,255,255,0.4)" },
};

const activityConfig = {
  booked:     { dot: "#48BB78", label: "BOOKED" },
  qualifying: { dot: "#FA982F", label: "QUALIFYING" },
  followup:   { dot: "#63B3ED", label: "FOLLOW-UP" },
  inbound:    { dot: "#F54A48", label: "INBOUND" },
  storm:      { dot: "#FFD700", label: "STORM" },
};

// ── Sub-components ────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, color, pulse = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 24px" }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {pulse && <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, boxShadow: `0 0 8px ${color}`, flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />}
        <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 30, fontWeight: 900, color, lineHeight: 1 }}>{value}</div>
      </div>
      {sub && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>{sub}</div>}
    </motion.div>
  );
}

function LeadRow({ lead, index }) {
  const s = statusConfig[lead.status];
  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <td style={{ padding: "12px 16px" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "white" }}>{lead.name}</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{lead.address}</div>
      </td>
      <td style={{ padding: "12px 16px", textAlign: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>{lead.source}</span>
      </td>
      <td style={{ padding: "12px 16px", textAlign: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999, background: s.bg, color: s.text, border: `1px solid ${s.border}` }}>{s.label}</span>
      </td>
      <td style={{ padding: "12px 16px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <div style={{ width: 60, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
            <div style={{ width: `${lead.score}%`, height: "100%", background: lead.score > 80 ? "#48BB78" : lead.score > 60 ? "#FA982F" : "#F54A48", borderRadius: 2 }} />
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: lead.score > 80 ? "#48BB78" : lead.score > 60 ? "#FA982F" : "rgba(255,255,255,0.4)" }}>{lead.score}</span>
        </div>
      </td>
      <td style={{ padding: "12px 16px", textAlign: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#48BB78", fontWeight: 700 }}>{lead.value}</td>
      <td style={{ padding: "12px 16px", textAlign: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#FA982F" }}>{lead.response}</td>
      <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{lead.time}</td>
    </motion.tr>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function NeuralOSDashboard() {
  const liveConversations = useLiveCount(47, 4, 3500);
  const liveBookings = useLiveCount(9, 2, 5000);
  const [activeTab, setActiveTab] = useState("all");

  const filteredLeads = activeTab === "all" ? leads : leads.filter(l => l.status === activeTab);

  return (
    <main className="pt-24" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(0.7);} }
        .dash-tooltip { background:#0D0F33!important; border:1px solid rgba(255,255,255,0.1)!important; border-radius:8px!important; font-family:'JetBrains Mono',monospace!important; font-size:11px!important; color:white!important; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* ── Page Header ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px", borderRadius: 999, background: "rgba(245,74,72,0.08)", border: "1px solid rgba(245,74,72,0.25)", marginBottom: 16 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#48BB78", boxShadow: "0 0 8px #48BB78", animation: "pulse-dot 2s ease-in-out infinite", flexShrink: 0 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.15em" }}>NeuralOS™ Live Dashboard Preview</span>
            </div>
            <h1 style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "white", lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 10 }}>
              Your Revenue Engine,<br />
              <span style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Working Right Now</span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 560 }}>
              This is a high-fidelity preview of the ShiFt NeuralOS contractor portal — the live dashboard your team monitors daily once the Revenue Engine is installed.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", borderRadius: 10, background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", boxShadow: "0 4px 20px rgba(245,74,72,0.35)" }}>
              Get This Dashboard →
            </a>
          </div>
        </motion.div>

        {/* ── Mock Browser Chrome ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>

          {/* Browser Bar */}
          <div style={{ background: "#10122A", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#F54A48","#FA982F","#48BB78"].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.7 }} />)}
            </div>
            <div style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "5px 12px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>🔒</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>app.shiftnow.io/dashboard</span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#48BB78", animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#48BB78" }}>LIVE</span>
            </div>
          </div>

          {/* Dashboard Interior */}
          <div style={{ background: "#0D0F33" }}>

            {/* Top Nav Strip */}
            <div style={{ background: "#070820", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 14, fontWeight: 800, color: "white" }}>ShiFt<span style={{ color: "#F54A48" }}>.</span></span>
                {["Overview","Leads","Appointments","Revenue","Settings"].map((item, i) => (
                  <span key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: i === 0 ? "white" : "rgba(255,255,255,0.35)", cursor: "pointer", padding: "4px 10px", borderRadius: 6, background: i === 0 ? "rgba(245,74,72,0.1)" : "transparent", border: i === 0 ? "1px solid rgba(245,74,72,0.25)" : "1px solid transparent" }}>{item}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#48BB78", padding: "4px 10px", background: "rgba(72,187,120,0.1)", border: "1px solid rgba(72,187,120,0.25)", borderRadius: 999 }}>Engine Active</div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#F54A48,#FA982F)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "white" }}>JD</div>
              </div>
            </div>

            <div style={{ padding: "24px" }}>

              {/* ── KPI Row ── */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
                <StatCard label="Conversations Today" value={liveConversations} sub="AI-handled · 24/7" color="#F54A48" pulse delay={0.1} />
                <StatCard label="Appointments Booked" value={liveBookings} sub="This week" color="#48BB78" delay={0.15} />
                <StatCard label="Avg AI Response" value="26s" sub="Industry avg: 4+ hrs" color="#FA982F" delay={0.2} />
                <StatCard label="Revenue This Month" value="$41.2K" sub="↑ 38% vs last month" color="#FFD700" delay={0.25} />
                <StatCard label="Close Rate" value="63%" sub="Qualified leads" color="#63B3ED" delay={0.3} />
                <StatCard label="ROI Multiple" value="14×" sub="vs engine cost" color="#48BB78" delay={0.35} />
              </div>

              {/* ── Charts Row ── */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                {/* Revenue Chart */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>Platform-Attributed Revenue</div>
                      <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 20, fontWeight: 900, color: "white" }}>$212,900 <span style={{ fontSize: 12, color: "#48BB78", fontWeight: 600 }}>↑ 8wk</span></div>
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#FA982F", padding: "3px 8px", background: "rgba(250,152,47,0.1)", border: "1px solid rgba(250,152,47,0.2)", borderRadius: 6 }}>8 Weeks</div>
                  </div>
                  <ResponsiveContainer width="100%" height={160}>
                    <LineChart data={revenueData}>
                      <defs>
                        <linearGradient id="revGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#F54A48" />
                          <stop offset="100%" stopColor="#FA982F" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                      <XAxis dataKey="week" tick={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fill: "rgba(255,255,255,0.3)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fill: "rgba(255,255,255,0.3)" }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
                      <Tooltip contentStyle={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 11 }} formatter={v => [`$${v.toLocaleString()}`, "Revenue"]} />
                      <Line type="monotone" dataKey="revenue" stroke="url(#revGrad)" strokeWidth={3} dot={{ fill: "#FA982F", r: 3, strokeWidth: 0 }} activeDot={{ r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Conversion Chart */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 20 }}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>Leads vs Booked · Last 7 Days</div>
                    <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 20, fontWeight: 900, color: "white" }}>95 Leads <span style={{ fontSize: 12, color: "#48BB78", fontWeight: 600 }}>→ 37 Booked</span></div>
                  </div>
                  <ResponsiveContainer width="100%" height={160}>
                    <BarChart data={conversionData} barGap={2}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                      <XAxis dataKey="day" tick={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fill: "rgba(255,255,255,0.3)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fill: "rgba(255,255,255,0.3)" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 11 }} />
                      <Bar dataKey="leads" fill="rgba(245,74,72,0.25)" radius={[3,3,0,0]} name="Leads" />
                      <Bar dataKey="booked" fill="#48BB78" radius={[3,3,0,0]} name="Booked" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* ── Lead Intelligence Table ── */}
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, marginBottom: 24, overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>AI Lead Intelligence Feed</div>
                    <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 15, fontWeight: 700, color: "white" }}>Real-Time Qualification Status</div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["all","booked","qualifying","follow-up"].map(tab => (
                      <button key={tab} onClick={() => setActiveTab(tab)}
                        style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "5px 12px", borderRadius: 6, cursor: "pointer", background: activeTab === tab ? "rgba(245,74,72,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${activeTab === tab ? "rgba(245,74,72,0.4)" : "rgba(255,255,255,0.08)"}`, color: activeTab === tab ? "#F54A48" : "rgba(255,255,255,0.4)" }}>
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        {["Contact","Source","AI Status","Lead Score","Est. Value","AI Response","Time"].map((h, i) => (
                          <th key={i} style={{ padding: "10px 16px", fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textAlign: i === 0 ? "left" : i === 6 ? "right" : "center" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead, i) => <LeadRow key={lead.id} lead={lead} index={i} />)}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── AI Activity Log ── */}
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 20 }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>AI Activity Log</div>
                <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 15, fontWeight: 700, color: "white", marginBottom: 16 }}>Live Engine Actions</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {aiActivity.map((a, i) => {
                    const cfg = activityConfig[a.type];
                    return (
                      <motion.div key={i}
                        initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0", borderBottom: i < aiActivity.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", flexShrink: 0, minWidth: 60 }}>{a.time}</span>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: cfg.dot, boxShadow: `0 0 6px ${cfg.dot}`, flexShrink: 0 }} />
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 700, color: cfg.dot, textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0, minWidth: 70 }}>{cfg.label}</span>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{a.event}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Trust Strip ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {[
            { icon: "⚡", title: "Live in 7 Days", body: "Your Revenue Engine is fully configured, tested, and live within one week of signing." },
            { icon: "🎯", title: "Every Lead Captured", body: "No missed calls. No silent forms. AI responds to every inbound in under 30 seconds." },
            { icon: "📊", title: "Full Transparency", body: "Every conversation, every booked job, every dollar tracked in real time in this dashboard." },
            { icon: "🛡", title: "90-Day Revenue Floor", body: "If the engine doesn't produce, billing pauses. You see the math here before you pay." },
          ].map((t, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "20px 22px" }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{t.icon}</div>
              <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 14, fontWeight: 700, color: "white", marginBottom: 6 }}>{t.title}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{t.body}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Leak Detector CTA ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", background: "rgba(245,74,72,0.06)", border: "1px solid rgba(245,74,72,0.2)", borderRadius: 14, padding: "20px 28px" }}>
          <div>
            <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 16, fontWeight: 800, color: "white", marginBottom: 4 }}>
              🔍 Revenue Leak Detector
            </div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              Scan your CRM for missed follow-ups, slow responses & unclosed high-intent leads
            </div>
          </div>
          <button onClick={() => window.location.href = "/LeakDetector"}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10, background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(245,74,72,0.3)", border: "none", cursor: "pointer" }}>
            Detect Leaks →
          </button>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          style={{ marginTop: 40, textAlign: "center", padding: "56px 32px", borderRadius: 20, background: "linear-gradient(135deg,rgba(245,74,72,0.1),rgba(250,152,47,0.07))", border: "1px solid rgba(245,74,72,0.2)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 250, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(245,74,72,0.12),transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 16 }}>
              Ready to See This Dashboard<br />
              <span style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>With Your Numbers?</span>
            </div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Book a 30-minute strategy call. We'll run your numbers live, show you your revenue leak, and walk you through exactly how the engine gets installed.
            </p>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 40px", borderRadius: 12, background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", boxShadow: "0 4px 24px rgba(245,74,72,0.35)" }}>
              Book a Strategy Call →
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}