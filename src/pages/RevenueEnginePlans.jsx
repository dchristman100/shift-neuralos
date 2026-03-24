import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import RevenueLeakCalculator from "../components/revenue/RevenueLeakCalculator";

export default function RevenueEnginePlans() {
  const [activeTab, setActiveTab] = useState("features");
  const packagesRef = useRef(null);

  const scrollToPackages = () => packagesRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "#070820", color: "#fff", fontFamily: "'Montserrat Alternates', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #0D0F33;
          --coral: #F54A48;
          --orange: #FA982F;
          --blue: #2E77AE;
          --gray: #6B7C93;
          --surface: rgba(255,255,255,0.04);
          --border: rgba(255,255,255,0.08);
          --grad: linear-gradient(135deg, #F54A48, #FA982F);
        }

        .rep-font-display { font-family: 'Montserrat Alternates', sans-serif; }
        .rep-font-mono { font-family: 'JetBrains Mono', monospace; }
        .rep-font-body { font-family: 'DM Sans', sans-serif; }

        .rep-grad-text {
          background: var(--grad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rep-section { padding: 96px 40px; }
        .rep-inner { max-width: 1140px; margin: 0 auto; }

        .rep-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 0.2em; text-transform: uppercase; color: #FA982F;
          margin-bottom: 20px;
        }
        .rep-label-bar { width: 4px; height: 14px; background: var(--grad); border-radius: 2px; flex-shrink: 0; }

        .rep-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; transition: all 0.3s ease;
        }
        .rep-card:hover { border-color: rgba(245,74,72,0.25); transform: translateY(-4px); }

        /* Package cards */
        .rep-pkg-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; display: flex; flex-direction: column; position: relative;
          overflow: hidden; transition: transform 0.3s ease;
        }
        .rep-pkg-card:hover { transform: translateY(-6px); }
        .rep-pkg-card.featured {
          background: linear-gradient(180deg, rgba(245,74,72,0.07) 0%, rgba(255,255,255,0.03) 100%);
          border-color: rgba(245,74,72,0.3);
        }

        .rep-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--grad); color: #fff;
          font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 10px; border: none; cursor: pointer;
          text-decoration: none; transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(245,74,72,0.3);
        }
        .rep-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(245,74,72,0.45); }

        .rep-btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: transparent; color: #fff;
          font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
          text-decoration: none; transition: all 0.3s ease;
        }
        .rep-btn-outline:hover { border-color: rgba(245,74,72,0.5); background: rgba(245,74,72,0.06); }

        .rep-btn-ghost {
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
          color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 13px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 10px; cursor: pointer; text-decoration: none;
          transition: all 0.3s ease; width: 100%; justify-content: center;
        }
        .rep-btn-ghost:hover { border-color: rgba(245,74,72,0.4); color: #F54A48; }

        .rep-check { color: #F54A48; font-weight: 700; margin-right: 8px; }
        .rep-check-gold { color: #FFD700; font-weight: 700; margin-right: 8px; }
        .rep-dash { color: rgba(255,255,255,0.15); margin-right: 8px; }

        .rep-feature-row {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
          font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.75);
        }
        .rep-feature-row:last-child { border-bottom: none; }

        .rep-table { width: 100%; border-collapse: collapse; }
        .rep-table th { padding: 16px 20px; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); border-bottom: 1px solid rgba(255,255,255,0.08); text-align: center; }
        .rep-table th:first-child { text-align: left; }
        .rep-table td { padding: 14px 20px; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: center; color: rgba(255,255,255,0.6); font-family: 'DM Sans', sans-serif; }
        .rep-table td:first-child { text-align: left; color: rgba(255,255,255,0.85); font-weight: 500; }
        .rep-table tr:last-child td { border-bottom: none; }
        .rep-table .group-header td { background: rgba(255,255,255,0.02); font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.35); padding: 10px 20px; }

        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        .rep-pulse { animation: pulse 2s ease-in-out infinite; }

        @media (max-width: 768px) {
          .rep-section { padding: 64px 20px; }
          .rep-hero-hl { font-size: clamp(38px, 10vw, 60px) !important; }
          .rep-pkg-grid { grid-template-columns: 1fr !important; }
          .rep-proof-grid { grid-template-columns: 1fr 1fr !important; }
          .rep-2col { grid-template-columns: 1fr !important; }
          .rep-stat-bar { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="rep-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "140px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 30%, rgba(245,74,72,0.12) 0%, transparent 60%)"
        }} />
        <div className="rep-inner" style={{ position: "relative", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(250,152,47,0.08)", border: "1px solid rgba(250,152,47,0.3)",
            borderRadius: "999px", padding: "10px 22px", marginBottom: "32px"
          }}>
            <span className="rep-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#FA982F", display: "inline-block", flexShrink: 0 }} />
            <span className="rep-font-mono" style={{ fontSize: "11px", color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.2em" }}>Revenue Infrastructure for Roofing Contractors</span>
          </div>

          <h1 className="rep-font-display rep-hero-hl" style={{ fontSize: "clamp(48px, 7vw, 92px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "24px", maxWidth: "900px", margin: "0 auto 24px" }}>
            Turn Marketing<br /><span className="rep-grad-text">Into Revenue</span>
          </h1>

          <p className="rep-font-body" style={{ fontSize: "19px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: "620px", margin: "0 auto 40px" }}>
            ShiFt installs and operates AI-powered revenue engines that turn marketing into booked jobs and predictable growth for service businesses.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}>
            <button className="rep-btn-primary" onClick={scrollToPackages} style={{ padding: "16px 36px", fontSize: "14px" }}>
              Get the Revenue Engine
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="rep-btn-outline" onClick={() => document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "16px 36px", fontSize: "14px" }}>
              See the ROI Math
            </button>
          </div>

          {/* Stats bar */}
          <div className="rep-stat-bar" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px", maxWidth: "600px", margin: "0 auto", overflow: "hidden"
          }}>
            {[
              { val: "<30s", label: "AI Response Time" },
              { val: "3–5×", label: "Average ROI" },
              { val: "24/7", label: "System Uptime" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "24px 20px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="rep-font-display rep-grad-text" style={{ fontSize: "28px", fontWeight: 900, marginBottom: "6px" }}>{s.val}</div>
                <div className="rep-font-mono" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="rep-section" style={{ background: "#0D0F33" }}>
        <div className="rep-inner">
          <div className="rep-label"><span className="rep-label-bar" />The Problem</div>
          <h2 className="rep-font-display" style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", maxWidth: "700px", marginBottom: "56px" }}>
            Your Marketing Isn't Broken.<br /><span className="rep-grad-text">Your Follow-Up Is.</span>
          </h2>
          <div className="rep-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            {[
              { stat: "60%", title: "Leads Lost to Slow Response", body: "The average roofing contractor takes 4+ hours to respond to an inquiry. By then, the homeowner has already called someone else.", color: "#F54A48" },
              { stat: "74%", title: "Burned by Prior Tools", body: "Three out of four contractors have paid for tools that never produced a single booked job. Hatch, Scorpion, HomeAdvisor — all cost, no revenue.", color: "#FA982F" },
              { stat: "$24K+", title: "Missed Revenue Per Month", body: "Just three missed leads at an $8K average ticket is $24,000 left on the table. Every month. The math is brutal.", color: "#F54A48" },
            ].map((p, i) => (
              <div key={i} className="rep-card" style={{ padding: "36px 32px" }}>
                <div className="rep-font-display" style={{ fontSize: "48px", fontWeight: 900, color: p.color, marginBottom: "12px" }}>{p.stat}</div>
                <h3 className="rep-font-display" style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{p.title}</h3>
                <p className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM / SOLUTION ── */}
      <section className="rep-section">
        <div className="rep-inner">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="rep-label" style={{ justifyContent: "center" }}><span className="rep-label-bar" />The System</div>
            <h2 className="rep-font-display" style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "16px" }}>
              Generate. Convert. Book.
            </h2>
            <p className="rep-font-body" style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
              ShiFt installs a complete Revenue Engine that captures every inbound lead and converts it into a booked appointment — automatically.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {[
              { num: "1", title: "Instant Response", body: "Every call, text, and form submission answered by AI in under 30 seconds. 24/7. No missed leads.", icon: "⚡" },
              { num: "2", title: "AI Qualification", body: "Roofing-native conversation flows qualify every lead — property type, damage, timeline, and booking intent.", icon: "🎯" },
              { num: "3", title: "Automatic Booking", body: "Qualified leads are booked directly onto your calendar. Confirmation texts sent to you and the homeowner.", icon: "📅" },
              { num: "4", title: "Revenue Tracking", body: "Every lead, appointment, and won job is tracked. Monthly revenue reports with clear ROI math.", icon: "📊" },
            ].map((s) => (
              <div key={s.num} className="rep-card" style={{ padding: "32px 28px" }}>
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{s.icon}</div>
                <div className="rep-font-mono rep-grad-text" style={{ fontSize: "28px", fontWeight: 900, opacity: 0.25, lineHeight: 1, marginBottom: "12px" }}>{s.num}</div>
                <h3 className="rep-font-display" style={{ fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>{s.title}</h3>
                <p className="rep-font-body" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / ROI ── */}
      <section id="proof" className="rep-section" style={{ background: "#0D0F33" }}>
        <div className="rep-inner">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="rep-label" style={{ justifyContent: "center" }}><span className="rep-label-bar" />From Leads to Booked Jobs</div>
            <h2 className="rep-font-display" style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "0" }}>
              The Math Speaks for Itself
            </h2>
          </div>

          {/* Texas Case Study */}
          <div className="rep-card" style={{ padding: "48px", marginBottom: "40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--grad)" }} />
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div className="rep-font-mono" style={{ fontSize: "11px", color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "12px" }}>Texas Contractor · 30-Day Result</div>
              <div className="rep-font-display rep-grad-text" style={{ fontSize: "80px", fontWeight: 900, lineHeight: 1 }}>$72K</div>
              <p className="rep-font-body" style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "16px auto 0", lineHeight: 1.6 }}>
                in booked revenue within the first 30 days of the Revenue Engine going live. Real jobs on the calendar — not impressions, not clicks.
              </p>
              <div className="rep-font-mono" style={{ marginTop: "16px", fontSize: "13px", color: "#48BB78", fontWeight: 700 }}>20× return on monthly investment</div>
            </div>
            <div className="rep-proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {[
                { val: "340+", label: "AI Conversations" },
                { val: "47", label: "Appointments Booked" },
                { val: "9", label: "Jobs Won" },
                { val: "$8,000", label: "Avg Ticket" },
              ].map((m, i) => (
                <div key={i} style={{ textAlign: "center", padding: "24px 16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="rep-font-display rep-grad-text" style={{ fontSize: "32px", fontWeight: 900, marginBottom: "6px" }}>{m.val}</div>
                  <div className="rep-font-mono" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Math per package */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { name: "ACTIVATE", jobs: "3 jobs × $8K = $24K", cost: "$1,997/mo", roi: "12× return", color: "#F54A48" },
              { name: "AMPLIFY", jobs: "5 jobs × $12K = $60K", cost: "$3,497/mo", roi: "17× return", color: "#FA982F", featured: true },
              { name: "DOMINATE", jobs: "7 jobs × $12K = $84K", cost: "$8,997/mo", roi: "9× return", color: "#FFD700" },
            ].map((r) => (
              <div key={r.name} className="rep-card" style={{ padding: "28px", borderColor: r.featured ? "rgba(245,74,72,0.3)" : undefined }}>
                <div className="rep-font-mono" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: r.color, marginBottom: "12px" }}>{r.name} ROI</div>
                <div className="rep-font-display" style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{r.jobs}</div>
                <div className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>Engine cost: {r.cost}</div>
                <div className="rep-font-mono" style={{ fontSize: "16px", fontWeight: 700, color: "#48BB78" }}>{r.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVENUE LEAK CALCULATOR ── */}
      <section className="rep-section" style={{ background: "#0D0F33" }}>
        <div className="rep-inner">
          <RevenueLeakCalculator onScrollToPackages={scrollToPackages} />
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="rep-section" ref={packagesRef} id="packages">
        <div className="rep-inner">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div className="rep-label" style={{ justifyContent: "center" }}><span className="rep-label-bar" />Choose Your Revenue Engine</div>
            <h2 className="rep-font-display" style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "16px" }}>
              Three Packages. One Goal.<br /><span className="rep-grad-text">Booked Jobs.</span>
            </h2>
            <p className="rep-font-body" style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", maxWidth: "600px", margin: "0 auto 8px", lineHeight: 1.7 }}>
              Every package includes a $5,000 one-time <strong style={{ color: "rgba(255,255,255,0.8)" }}>Revenue Engine Installation</strong> fee and the 90-Day Revenue Floor — billing pauses if we don't produce.
            </p>
          </div>

          <div className="rep-pkg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "32px" }}>

            {/* ACTIVATE */}
            <div className="rep-pkg-card">
              <div style={{ height: "3px", background: "#F54A48", borderRadius: "20px 20px 0 0" }} />
              <div style={{ padding: "36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="rep-font-mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>ICP: $1M–$3M Revenue</div>
                <div className="rep-font-display" style={{ fontSize: "36px", fontWeight: 900, letterSpacing: "-1px", color: "#F54A48", marginBottom: "8px" }}>ACTIVATE</div>
                <div className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>Your Revenue Engine on Organic - GBP &amp; SEO</div>

                <div style={{ background: "rgba(245,74,72,0.06)", border: "1px solid rgba(245,74,72,0.15)", borderRadius: "10px", padding: "16px", marginBottom: "24px" }}>
                  <div className="rep-font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", textAlign: "center" }}>Revenue Outcome Target</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
                    {[["Appts/mo", "5–10"], ["Jobs/mo", "1–2"]].map(([lbl, val]) => (
                      <div key={lbl} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "7px", padding: "8px", textAlign: "center" }}>
                        <div className="rep-font-mono" style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{lbl}</div>
                        <div className="rep-font-display" style={{ fontSize: "16px", fontWeight: 800, color: "#F54A48" }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="rep-font-display" style={{ fontSize: "18px", fontWeight: 800, color: "#F54A48" }}>$15K–$30K/mo</div>
                    <div className="rep-font-mono" style={{ fontSize: "11px", color: "#48BB78", marginTop: "5px", fontWeight: 700 }}>3x–4x Target ROI Expected</div>
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <div className="rep-font-display" style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px", color: "#fff", marginBottom: "4px" }}>$1,997<span style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>/mo</span></div>
                  {[
                    ["Revenue Engine Operation", "$1,297"],
                    ["Lead Intelligence (Organic - GBP & SEO)", "$700"],
                  ].map(([l, v]) => (
                    <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                      <span style={{ color: "rgba(255,255,255,0.45)" }}>{l}</span>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'JetBrains Mono', monospace" }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>RevShare on incremental revenue</span>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>N/A</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(245,74,72,0.1)", border: "1px solid rgba(245,74,72,0.3)", borderRadius: "999px", padding: "5px 12px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F54A48" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="rep-font-mono" style={{ fontSize: "10px", color: "#F54A48", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Exclusive Leads</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FA982F" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    <span className="rep-font-mono" style={{ fontSize: "10px", color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.1em" }}>Limited to 3 per market</span>
                  </div>
                </div>

                <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer" className="rep-btn-primary" style={{ marginBottom: "12px", textDecoration: "none" }}>
                  Book a Strategy Call
                </a>

                <a href="https://reality.shiftnow.io/sales?price=1997&buildprice=5000" target="_blank" rel="noreferrer" className="rep-btn-ghost" style={{ marginBottom: "24px", textDecoration: "none", display: "block", textAlign: "center" }}>
                  Choose this Plan
                </a>

                <div style={{ flex: 1 }}>
                  {[
                    "AI response <30 seconds · 24/7",
                    "Roofing-native conversation flows",
                    "Missed call text-back",
                    "Calendar sync + auto booking",
                    "CRM lead records",
                    "5-touch automated follow-up",
                    "Google Business Profile optimization",
                    "Reputation management",
                    "Local SEO + citations",
                    "Monthly revenue report",
                    "90-Day Revenue Floor",
                  ].map(f => (
                    <div key={f} className="rep-feature-row"><span className="rep-check">✓</span>{f}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* AMPLIFY — Featured */}
            <div className="rep-pkg-card featured">
              <div style={{ position: "absolute", top: 0, right: 0, background: "var(--grad)", padding: "6px 16px", borderRadius: "0 20px 0 10px" }}>
                <span className="rep-font-mono" style={{ fontSize: "10px", color: "#fff", fontWeight: 700 }}>Most Popular</span>
              </div>
              <div style={{ height: "3px", background: "var(--grad)", borderRadius: "20px 20px 0 0" }} />
              <div style={{ padding: "36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="rep-font-mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>ICP: $3M–$7M Revenue</div>
                <div className="rep-font-display rep-grad-text" style={{ fontSize: "36px", fontWeight: 900, letterSpacing: "-1px", marginBottom: "8px" }}>AMPLIFY</div>
                <div className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>Organic + Local Service Ads</div>

                <div style={{ background: "rgba(245,74,72,0.08)", border: "1px solid rgba(245,74,72,0.2)", borderRadius: "10px", padding: "16px", marginBottom: "24px" }}>
                  <div className="rep-font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", textAlign: "center" }}>Revenue Outcome Target</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
                    {[["Appts/mo", "10–20"], ["Jobs/mo", "2–4"]].map(([lbl, val]) => (
                      <div key={lbl} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "7px", padding: "8px", textAlign: "center" }}>
                        <div className="rep-font-mono" style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{lbl}</div>
                        <div className="rep-font-display rep-grad-text" style={{ fontSize: "16px", fontWeight: 800 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="rep-font-display rep-grad-text" style={{ fontSize: "18px", fontWeight: 800 }}>$30K–$60K/mo</div>
                    <div className="rep-font-mono" style={{ fontSize: "11px", color: "#48BB78", marginTop: "5px", fontWeight: 700 }}>5x–6x Target ROI Expected</div>
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <div className="rep-font-display" style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px", color: "#fff", marginBottom: "4px" }}>$3,497<span style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>/mo</span></div>
                  {[
                    ["Revenue Engine Operation", "$1,997"],
                    ["Lead Intelligence (LSA)", "$1,500"],
                  ].map(([l, v]) => (
                    <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                      <span style={{ color: "rgba(255,255,255,0.45)" }}>{l}</span>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'JetBrains Mono', monospace" }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>Paid Social Ads (Facebook/IG)</span>
                    <span style={{ color: "#FA982F", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>+$1,500 add-on</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>RevShare on incremental revenue</span>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>N/A</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(245,74,72,0.1)", border: "1px solid rgba(245,74,72,0.3)", borderRadius: "999px", padding: "5px 12px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F54A48" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="rep-font-mono" style={{ fontSize: "10px", color: "#F54A48", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Exclusive Leads</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FA982F" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    <span className="rep-font-mono" style={{ fontSize: "10px", color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.1em" }}>Limited to 3 per market</span>
                  </div>
                </div>

                <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer" className="rep-btn-primary" style={{ marginBottom: "12px", textDecoration: "none" }}>
                  Book a Strategy Call
                </a>

                <a href="https://reality.shiftnow.io/sales?price=3497&buildprice=5000" target="_blank" rel="noreferrer" className="rep-btn-ghost" style={{ marginBottom: "24px", textDecoration: "none", display: "block", textAlign: "center" }}>
                  Choose this Plan
                </a>

                <div style={{ flex: 1 }}>
                  <div className="rep-font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Everything in ACTIVATE, plus:</div>
                  {[
                    "Google Local Service Ads management",
                    "Weekly LSA optimization",
                    "Lead dispute handling",
                    "Storm event trigger mode",
                    "Weekly 15-min performance call",
                    "7-day system activation",
                  ].map(f => (
                    <div key={f} className="rep-feature-row"><span className="rep-check">✓</span>{f}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* DOMINATE */}
            <div className="rep-pkg-card">
              <div style={{ height: "3px", background: "linear-gradient(90deg, #FA982F, #FFD700)", borderRadius: "20px 20px 0 0" }} />
              <div style={{ padding: "36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="rep-font-mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>ICP: $7M–$10M Revenue</div>
                <div className="rep-font-display" style={{ fontSize: "36px", fontWeight: 900, letterSpacing: "-1px", color: "#FFD700", marginBottom: "8px" }}>DOMINATE</div>
                <div className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>Full Omnichannel Revenue Engine</div>

                <div style={{ background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "10px", padding: "16px", marginBottom: "24px" }}>
                  <div className="rep-font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", textAlign: "center" }}>Revenue Outcome Target</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
                    {[["Appts/mo", "25+"], ["Jobs/mo", "5+"]].map(([lbl, val]) => (
                      <div key={lbl} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "7px", padding: "8px", textAlign: "center" }}>
                        <div className="rep-font-mono" style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{lbl}</div>
                        <div className="rep-font-display" style={{ fontSize: "16px", fontWeight: 800, color: "#FFD700" }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="rep-font-display" style={{ fontSize: "18px", fontWeight: 800, color: "#FFD700" }}>$60K–$120K/mo</div>
                    <div className="rep-font-mono" style={{ fontSize: "11px", color: "#48BB78", marginTop: "5px", fontWeight: 700 }}>7x–8x+ Target ROI Expected</div>
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <div className="rep-font-display" style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px", color: "#fff", marginBottom: "4px" }}>$8,997<span style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>/mo</span></div>
                  {[
                    ["Revenue Engine Operation", "$5,997"],
                    ["Lead Intelligence (Omnichannel)", "$3,000"],
                  ].map(([l, v]) => (
                    <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                      <span style={{ color: "rgba(255,255,255,0.45)" }}>{l}</span>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'JetBrains Mono', monospace" }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>RevShare on incremental revenue</span>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>N/A</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.35)", borderRadius: "999px", padding: "5px 12px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="rep-font-mono" style={{ fontSize: "10px", color: "#FFD700", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Exclusive Leads + Exclusive Market</span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    <span className="rep-font-mono" style={{ fontSize: "10px", color: "#FFD700", textTransform: "uppercase", letterSpacing: "0.1em" }}>Limited to 1 per market</span>
                  </div>
                </div>

                <button className="rep-btn-ghost" style={{ marginBottom: "24px", borderColor: "rgba(255,215,0,0.2)", color: "#FFD700" }}
                  onClick={() => window.open("https://makea.shiftnow.io/widget/bookings/reality", "_blank")}>
                  Apply Now
                </button>

                <div style={{ flex: 1 }}>
                  <div className="rep-font-mono" style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Everything in AMPLIFY, plus:</div>
                  {[
                    "Google Search paid campaigns",
                    "Meta retargeting + lookalike",
                    "Email drip sequences",
                    "SMS outreach campaigns",
                    "Outbound calling (AI + human)",
                    "Full cross-channel attribution",
                    "Custom follow-up by lead score",
                    "Dedicated account strategist",
                    "48-hour priority activation",
                  ].map(f => (
                    <div key={f} className="rep-feature-row"><span className="rep-check-gold">✓</span>{f}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px 28px", textAlign: "center" }}>
            <p className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              All packages require a one-time <strong style={{ color: "rgba(255,255,255,0.7)" }}>$5,000 Revenue Engine Activation</strong> fee, collected at signing.
              Ad spend paid directly by you to Google/Meta — never through ShiFt.
            </p>
            <div style={{ marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(250,152,47,0.08)", border: "1px solid rgba(250,152,47,0.25)", borderRadius: "8px", padding: "8px 16px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FA982F" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
              <span className="rep-font-mono" style={{ fontSize: "11px", color: "#FA982F", letterSpacing: "0.05em" }}>Client is responsible for all Ad Spend — applies to all packages</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE COMPARISON TABLE ── */}
      <section className="rep-section" style={{ background: "#0D0F33" }}>
        <div className="rep-inner">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="rep-label" style={{ justifyContent: "center" }}><span className="rep-label-bar" />Feature Comparison</div>
            <h2 className="rep-font-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px" }}>
              What's Included in Each Package
            </h2>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="rep-table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "20px 24px" }}>Feature</th>
                  <th style={{ color: "#F54A48" }}>ACTIVATE</th>
                  <th style={{ background: "rgba(245,74,72,0.04)" }}>
                    <span style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AMPLIFY</span>
                  </th>
                  <th style={{ color: "#FFD700" }}>DOMINATE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group-header"><td colSpan={4}>Revenue Engine Operation — Core AI</td></tr>
                {[
                  ["AI inbound response <30 seconds · 24/7", true, true, true],
                  ["Roofing-native conversation flows", true, true, true],
                  ["Missed call text-back (MCTB)", true, true, true],
                  ["Calendar sync + appointment booking", true, true, true],
                  ["CRM lead record creation", true, true, true],
                  ["5-touch automated follow-up", true, true, true],
                  ["Monthly revenue report", true, true, true],
                  ["90-Day Revenue Floor (billing pause)", true, true, true],
                  ["Storm event trigger mode", false, true, true],
                  ["Custom follow-up by lead score", false, false, true],
                ].map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {[a, b, c].map((v, i) => (
                      <td key={i} style={{ background: i === 1 ? "rgba(245,74,72,0.02)" : undefined }}>
                        {v ? <span style={{ color: "#48BB78", fontSize: "16px" }}>✓</span> : <span style={{ color: "rgba(255,255,255,0.12)" }}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="group-header"><td colSpan={4}>Lead Intelligence</td></tr>
                {[
                  ["Google Business Profile optimization", true, true, true],
                  ["Reputation management + reviews", true, true, true],
                  ["Local SEO + citation management", true, true, true],
                  ["Google Local Service Ads", false, true, true],
                  ["Google Search paid campaigns", false, false, true],
                  ["Meta retargeting + lookalike", false, false, true],
                  ["Email drip sequences", false, false, true],
                  ["SMS outreach campaigns", false, false, true],
                  ["Outbound calling (AI + human)", false, false, true],
                  ["Full cross-channel attribution", false, false, true],
                ].map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {[a, b, c].map((v, i) => (
                      <td key={i} style={{ background: i === 1 ? "rgba(245,74,72,0.02)" : undefined }}>
                        {v ? <span style={{ color: "#48BB78", fontSize: "16px" }}>✓</span> : <span style={{ color: "rgba(255,255,255,0.12)" }}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="group-header"><td colSpan={4}>Service Level</td></tr>
                {[
                  ["7-day system activation", true, true, false],
                  ["48-hour priority activation", false, false, true],
                  ["Weekly 15-min performance call", false, true, true],
                  ["Dedicated account strategist", false, false, true],
                ].map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {[a, b, c].map((v, i) => (
                      <td key={i} style={{ background: i === 1 ? "rgba(245,74,72,0.02)" : undefined }}>
                        {v ? <span style={{ color: "#48BB78", fontSize: "16px" }}>✓</span> : <span style={{ color: "rgba(255,255,255,0.12)" }}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={{ fontWeight: 600 }}>Market exclusivity</td>
                  <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>3 per DMA</td>
                  <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.6)", background: "rgba(245,74,72,0.02)" }}>3 per DMA</td>
                  <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#FFD700", fontWeight: 700 }}>1 per DMA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 90-DAY REVENUE FLOOR ── */}
      <section className="rep-section">
        <div className="rep-inner" style={{ maxWidth: "780px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="rep-label" style={{ justifyContent: "center" }}><span className="rep-label-bar" />The Guarantee</div>
            <h2 className="rep-font-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "20px" }}>
              90-Day Revenue Floor
            </h2>
            <p className="rep-font-body" style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: "580px", margin: "0 auto" }}>
              If the Revenue Engine doesn't generate incremental revenue above your pre-ShiFt baseline within 90 days, billing pauses until it does. The system keeps running. You only pay when it produces.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
            {[
              { label: "Protected", sublabel: "Installation Fee", desc: "Collected at signing", color: "#6B7C93", icon: "🔒" },
              { label: "Pauses", sublabel: "Monthly Billing", desc: "Until revenue proven", color: "#F54A48", icon: "⏸" },
              { label: "Keeps Running", sublabel: "AI System", desc: "Never stops working", color: "#48BB78", icon: "⚡" },
            ].map((g) => (
              <div key={g.label} className="rep-card" style={{ padding: "28px", textAlign: "center" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{g.icon}</div>
                <div className="rep-font-display" style={{ fontSize: "20px", fontWeight: 800, color: g.color, marginBottom: "4px" }}>{g.label}</div>
                <div className="rep-font-display" style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>{g.sublabel}</div>
                <div className="rep-font-body" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{g.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(245,74,72,0.04)", border: "1px solid rgba(245,74,72,0.15)", borderRadius: "12px", padding: "24px 28px", textAlign: "center" }}>
            <p className="rep-font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              Revenue baseline established during onboarding. Applies to all three packages.
              This is not a trial — it's a performance guarantee backed by billing mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* ── ONBOARDING CTA ── */}
      <section className="rep-section" style={{ background: "#070820" }}>
        <div className="rep-inner" style={{ maxWidth: "720px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(72,187,120,0.1)", border: "1px solid rgba(72,187,120,0.3)", borderRadius: "999px", padding: "8px 20px", marginBottom: "24px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#48BB78", display: "inline-block", flexShrink: 0 }} />
            <span className="rep-font-mono" style={{ fontSize: "11px", color: "#48BB78", textTransform: "uppercase", letterSpacing: "0.15em" }}>Already a Client?</span>
          </div>
          <h2 className="rep-font-display" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", marginBottom: "16px" }}>
            Set Up Your Revenue Engine<br /><span style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>in Under 10 Minutes</span>
          </h2>
          <p className="rep-font-body" style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 32px" }}>
            Connect your CRM, set your KPIs, and configure your AI response parameters — our guided setup wizard walks you through every step.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="/Onboarding" className="rep-btn-primary" style={{ padding: "16px 40px", fontSize: "14px", textDecoration: "none" }}>
              Start My Setup →
            </a>
          </div>
          <p className="rep-font-mono" style={{ marginTop: "16px", fontSize: "11px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            CRM · KPIs · AI Parameters · Go Live
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="rep-section" style={{ background: "#0D0F33", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse at 50% 100%, rgba(245,74,72,0.1), transparent 60%)",
          pointerEvents: "none"
        }} />
        <div className="rep-inner" style={{ position: "relative", maxWidth: "620px" }}>
          <h2 className="rep-font-display" style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "20px" }}>
            Stop Losing Leads.<br /><span className="rep-grad-text">Start Booking Jobs.</span>
          </h2>
          <p className="rep-font-body" style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 40px" }}>
            Most contractors respond to leads in hours. ShiFt responds in seconds. The Revenue Engine captures every opportunity and books it on your calendar.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button className="rep-btn-primary" onClick={scrollToPackages} style={{ padding: "18px 40px", fontSize: "15px" }}>
              Get the Revenue Engine
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer" className="rep-btn-outline" style={{ padding: "18px 40px", fontSize: "15px" }}>
              Book a Strategy Call →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}