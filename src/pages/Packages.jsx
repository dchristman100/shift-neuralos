import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

export default function Packages() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Entrance animation for hero elements
    const elements = heroRef.current?.querySelectorAll(".fade-up");
    if (!elements) return;
    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 100);
    });
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#060818", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --navy: #0D0F33;
          --navy-deep: #060818;
          --coral: #F54A48;
          --orange: #FA982F;
          --gold: #FFD700;
          --green: #10b981;
          --gray-300: #d1d5db;
          --gray-400: #9ca3af;
          --gray-500: #6b7280;
          --grad: linear-gradient(135deg, #F54A48, #FA982F);
        }

        .pkg-font-display { font-family: 'Montserrat Alternates', sans-serif; }
        .pkg-font-mono { font-family: 'JetBrains Mono', monospace; }
        .pkg-font-body { font-family: 'Space Grotesk', sans-serif; }

        .pkg-grad-text {
          background: linear-gradient(135deg, #F54A48, #FA982F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pkg-section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 0.2em; text-transform: uppercase; color: #F54A48;
          margin-bottom: 20px;
        }
        .pkg-section-label-bar {
          width: 4px; height: 16px; background: linear-gradient(135deg, #F54A48, #FA982F);
          border-radius: 2px; flex-shrink: 0;
        }

        .pkg-btn-primary {
          display: inline-block; background: linear-gradient(135deg, #F54A48, #FA982F);
          color: white; font-family: 'Space Grotesk', sans-serif; font-weight: 600;
          padding: 14px 32px; border-radius: 8px; border: none; cursor: pointer;
          text-decoration: none; transition: all 0.3s ease; font-size: 16px;
        }
        .pkg-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(245,74,72,0.35); }

        .pkg-btn-ghost {
          display: inline-block; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2); color: white;
          font-family: 'Space Grotesk', sans-serif; font-weight: 600;
          padding: 14px 32px; border-radius: 8px; cursor: pointer;
          text-decoration: none; transition: all 0.3s ease; font-size: 16px;
        }
        .pkg-btn-ghost:hover { border-color: #F54A48; color: #F54A48; transform: translateY(-2px); }

        .pkg-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; transition: all 0.3s ease;
        }
        .pkg-card:hover {
          border-color: rgba(245,74,72,0.3); transform: translateY(-4px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.3);
        }

        .pkg-step-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; transition: all 0.3s ease; position: relative; overflow: hidden;
          padding: 36px 32px;
        }
        .pkg-step-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(135deg, #F54A48, #FA982F);
          transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
        }
        .pkg-step-card:hover::before { transform: scaleX(1); }
        .pkg-step-card:hover {
          transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border-color: rgba(245,74,72,0.3);
        }

        .pkg-package-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; transition: all 0.3s ease; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        .pkg-package-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.3); }

        .pkg-dominate-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-top: 3px solid #FFD700; border-radius: 16px; transition: all 0.3s ease;
          padding: 32px;
        }
        .pkg-dominate-card:hover {
          border-color: rgba(255,215,0,0.4); border-top-color: #FFD700;
          transform: translateY(-4px);
        }

        .pkg-check-coral { color: #F54A48; font-weight: 600; }
        .pkg-check-gold { color: #FFD700; font-weight: 600; }
        .pkg-dash { color: rgba(255,255,255,0.18); }

        .pkg-table tr:hover td { background: rgba(255,255,255,0.02); }
        .pkg-work-free-badge {
          display: inline-flex; background: rgba(245,74,72,0.12); color: #F54A48;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600;
          padding: 4px 10px; border-radius: 4px;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .pkg-pulse { animation: pulse 2s ease-in-out infinite; }

        @media (max-width: 700px) {
          .pkg-hero { padding: 120px 20px 80px !important; }
          .pkg-section { padding: 70px 20px !important; }
          .pkg-nav-links { display: none !important; }
          .pkg-grid-2 { grid-template-columns: 1fr !important; }
          .pkg-grid-3 { grid-template-columns: 1fr !important; }
          .pkg-grid-4 { grid-template-columns: 1fr 1fr !important; }
          .pkg-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .pkg-hero-headline { font-size: clamp(36px, 10vw, 60px) !important; }
          .pkg-footer { padding: 32px 20px !important; flex-direction: column !important; gap: 16px !important; text-align: center !important; }
        }
        @media (max-width: 1024px) {
          .pkg-grid-3 { grid-template-columns: 1fr !important; }
          .pkg-grid-2 { grid-template-columns: 1fr !important; }
          .pkg-steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── FIXED NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: "56px", background: "rgba(6,8,24,0.96)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <a href="/" className="pkg-font-display" style={{ fontSize: "26px", fontWeight: 900, color: "#fff", textDecoration: "none" }}>
          Shi<span style={{ color: "#F54A48" }}>F</span>t
        </a>
        <div className="pkg-nav-links" style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "How It Works", id: "how" },
            { label: "Packages", id: "packages" },
            { label: "Guarantee", id: "guarantee" },
          ].map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", color: "#9ca3af", cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "14px",
              transition: "color 0.2s"
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#9ca3af"}>
              {label}
            </button>
          ))}
        </div>
        <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
          className="pkg-btn-primary" style={{ padding: "10px 24px", fontSize: "14px" }}>
          Book a Call
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="pkg-hero" style={{
        minHeight: "100vh", padding: "140px 80px 100px", position: "relative",
        background: "#060818", display: "flex", alignItems: "center"
      }} ref={heroRef}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 15% 40%, rgba(245,74,72,0.10) 0%, transparent 55%), radial-gradient(ellipse at 85% 60%, rgba(250,152,47,0.07) 0%, transparent 55%)"
        }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          {/* Eyebrow */}
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "linear-gradient(135deg, rgba(245,74,72,0.2), rgba(250,152,47,0.1))",
            border: "1px solid rgba(245,74,72,0.3)", borderRadius: "6px",
            padding: "8px 16px", marginBottom: "28px"
          }}>
            <span className="pkg-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#F54A48", flexShrink: 0, display: "inline-block" }} />
            <span className="pkg-font-mono" style={{ fontSize: "12px", fontWeight: 600, color: "#F54A48", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              AI Revenue Operating System · Roofing Contractors
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up pkg-font-display pkg-hero-headline" style={{
            fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 900, lineHeight: 1.05,
            letterSpacing: "-2px", marginBottom: "28px", color: "#fff"
          }}>
            The Machine That Runs Your Leads<br />
            <span className="pkg-grad-text">While You Run Your Crews.</span>
          </h1>

          {/* Sub */}
          <p className="fade-up pkg-font-body" style={{
            fontSize: "19px", fontWeight: 300, color: "#d1d5db", lineHeight: 1.75,
            maxWidth: "560px", marginBottom: "40px"
          }}>
            We build, run, and guarantee a fully autonomous lead generation and conversion system for roofing companies doing $1M–$10M. You close. We do everything else.
          </p>

          {/* CTAs */}
          <div className="fade-up" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer" className="pkg-btn-primary">
              Book Your Call
            </a>
            <button className="pkg-btn-ghost" onClick={() => scrollTo("packages")}>
              See Packages
            </button>
          </div>

          {/* Stats bar */}
          <div className="fade-up pkg-stats-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0",
            marginTop: "72px", background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px",
            maxWidth: "700px", overflow: "hidden"
          }}>
            {[
              { num: "3 sec", label: "AI Response Time — 24/7" },
              { num: "100%", label: "Done For You" },
              { num: "2–4×", label: "Guaranteed ROI" },
              { num: "$0", label: "Until You Get ROI" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "24px 20px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none"
              }}>
                <div className="pkg-font-display pkg-grad-text" style={{ fontSize: "32px", fontWeight: 900, marginBottom: "6px" }}>{s.num}</div>
                <div className="pkg-font-mono" style={{ fontSize: "10px", textTransform: "uppercase", color: "#6b7280", lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="pkg-section" style={{ background: "#0D0F33", padding: "100px 80px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div className="pkg-section-label"><span className="pkg-section-label-bar" />The Problem</div>
          <div className="pkg-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <h2 className="pkg-font-display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "40px" }}>
                You're Losing Deals<br />
                <span className="pkg-grad-text">You Don't Know About.</span>
              </h2>
              <div>
                {[
                  { icon: "📵", text: "Leads call and go to voicemail. Your competitor answers in seconds." },
                  { icon: "💸", text: "You pay for Google and Facebook ads — and most clicks never become appointments." },
                  { icon: "🌙", text: "Your office closes at 5pm. Your buyers research until midnight." },
                  { icon: "📋", text: "Old leads sit in a spreadsheet, never followed up. Pipeline you already paid for — rotting." },
                  { icon: "⚙️", text: "You're running the business, managing crews, handling claims. You can't also work every lead." },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "16px",
                    padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.06)"
                  }}>
                    <div style={{
                      width: 28, height: 28, background: "rgba(245,74,72,0.15)",
                      borderRadius: "6px", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "14px", flexShrink: 0
                    }}>{item.icon}</div>
                    <span className="pkg-font-body" style={{ fontSize: "16px", color: "#d1d5db", lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(245,74,72,0.1), rgba(250,152,47,0.05))",
              border: "1px solid rgba(245,74,72,0.25)", borderRadius: "16px", padding: "48px 40px",
              position: "relative"
            }}>
              <div className="pkg-font-display pkg-grad-text" style={{ fontSize: "96px", fontWeight: 900, opacity: 0.3, position: "absolute", top: "16px", left: "32px", lineHeight: 1 }}>"</div>
              <p className="pkg-font-body" style={{ fontSize: "20px", color: "#fff", lineHeight: 1.7, marginTop: "60px", position: "relative" }}>
                "The roofing companies winning right now are not outworking you. They have a system that works while they sleep. ShiFt is that system."
              </p>
              <div className="pkg-font-mono" style={{ marginTop: "24px", fontSize: "11px", color: "#F54A48", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                ShiFt · AI Revenue Operating System
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="pkg-section" style={{ background: "#060818", padding: "100px 80px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div className="pkg-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "64px" }}>
            <div>
              <div className="pkg-section-label"><span className="pkg-section-label-bar" />How It Works</div>
              <h2 className="pkg-font-display" style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px" }}>
                One System.<br /><span className="pkg-grad-text">Full Funnel.</span>
              </h2>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <p className="pkg-font-body" style={{ fontSize: "17px", color: "#9ca3af", lineHeight: 1.7 }}>
                We handle lead generation and conversion end-to-end. One build fee. One monthly retainer. Ad spend included. Your AI team is online 24/7 — qualifying leads and booking appointments while you're on the roof.
              </p>
            </div>
          </div>

          <div className="pkg-steps-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {[
              { num: "01", title: "We Build Your Machine", body: "30-day build. Google Business Profile optimized. Local Services Ads live. AI response system trained on your business, your services, your prices." },
              { num: "02", title: "AI Attracts Leads", body: "Organic search, LSAs, Facebook (AMPLIFY+), and full omnichannel retargeting + SMS (DOMINATE) run continuously — generating buyer-ready leads around the clock." },
              { num: "03", title: "AI Converts in Seconds", body: "Every lead gets an AI response within 3 seconds — 24/7. Qualifying questions asked. Appointment booked. You show up to a warm, scheduled prospect." },
              { num: "04", title: "You Close. We Prove ROI.", body: "We track every deal closed against your revenue minimum. If we miss the guarantee threshold at 90 days, we work free until you hit it. No exceptions." },
            ].map((step) => (
              <div key={step.num} className="pkg-step-card">
                <div className="pkg-font-display pkg-grad-text" style={{ fontSize: "56px", fontWeight: 900, opacity: 0.25, lineHeight: 1, marginBottom: "16px" }}>{step.num}</div>
                <h3 className="pkg-font-display" style={{ fontSize: "17px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>{step.title}</h3>
                <p className="pkg-font-body" style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="pkg-section" style={{ background: "#0D0F33", padding: "100px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="pkg-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "64px" }}>
            <div>
              <div className="pkg-section-label"><span className="pkg-section-label-bar" />Packages</div>
              <h2 className="pkg-font-display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px" }}>
                Choose Your<br /><span className="pkg-grad-text">Revenue Floor.</span>
              </h2>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <p className="pkg-font-body" style={{ fontSize: "17px", color: "#9ca3af", lineHeight: 1.7 }}>
                Every package is fully done-for-you. Every package includes Attract (lead generation) and Convert (AI qualification, appointment booking, 24/7 3-second response). Ad spend is included. The difference is the scale of your machine — and the revenue minimum we guarantee.
              </p>
            </div>
          </div>

          <div className="pkg-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {/* ACTIVATE */}
            <div className="pkg-package-card">
              <div style={{ height: "3px", background: "#F54A48", borderRadius: "16px 16px 0 0" }} />
              <div style={{ padding: "36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="pkg-font-mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F54A48", marginBottom: "8px" }}>Package 01</div>
                <div className="pkg-font-display" style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px", color: "#F54A48", marginBottom: "12px" }}>ACTIVATE</div>
                <p className="pkg-font-body" style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.6, marginBottom: "24px" }}>
                  Turn on your AI revenue machine. Organic dominance + local intent ads + AI conversion running 24/7.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                  {[["Build Fee (Once)", "$5,000"], ["Monthly Retainer", "$7,500/mo"]].map(([label, val]) => (
                    <div key={label} style={{ background: "rgba(0,0,0,0.25)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                      <div className="pkg-font-mono" style={{ fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>{label}</div>
                      <div className="pkg-font-display" style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "28px" }}>
                  {[["Revenue Min", "$15K/mo"], ["Guaranteed ROI", "2× Return"], ["Ad Spend", "Included"]].map(([label, val], i) => (
                    <div key={label} style={{ textAlign: "center", padding: "12px 8px", background: "rgba(0,0,0,0.15)", borderRadius: "8px" }}>
                      <div className="pkg-font-mono" style={{ fontSize: "9px", color: "#6b7280", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                      <div className="pkg-font-display" style={{ fontSize: "13px", fontWeight: 700, color: i === 2 ? "#10b981" : "#fff" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: "28px", flex: 1 }}>
                  {[
                    "Google Business Profile Optimization",
                    "Local Services Ads (managed + spend included)",
                    "24/7 AI Lead Response — 3-second reply",
                    "AI Qualification + Appointment Booking",
                    "Live deal-tracking dashboard",
                  ].map(f => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="pkg-check-coral">✓</span>
                      <span className="pkg-font-body" style={{ fontSize: "13px", color: "#d1d5db" }}>{f}</span>
                    </div>
                  ))}
                  {["Facebook Ads", "Retargeting", "SMS + Email Reactivation"].map(f => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="pkg-dash">—</span>
                      <span className="pkg-font-body" style={{ fontSize: "13px", color: "#6b7280" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="pkg-btn-ghost" style={{ width: "100%", textAlign: "center" }}
                  onClick={() => window.open("https://makea.shiftnow.io/widget/bookings/reality", "_blank")}>
                  Start with ACTIVATE
                </button>
              </div>
            </div>

            {/* AMPLIFY — Featured */}
            <div className="pkg-package-card" style={{
              background: "linear-gradient(180deg, rgba(245,74,72,0.06) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(245,74,72,0.25)"
            }}>
              <div style={{ height: "3px", background: "linear-gradient(90deg, #F54A48, #FA982F)", borderRadius: "16px 16px 0 0" }} />
              <div style={{ position: "absolute", top: 0, right: 0, background: "linear-gradient(135deg, #F54A48, #FA982F)", padding: "6px 14px", borderRadius: "0 16px 0 10px" }}>
                <span className="pkg-font-mono" style={{ fontSize: "10px", color: "#fff", fontWeight: 600 }}>Most Popular</span>
              </div>
              <div style={{ padding: "36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="pkg-font-mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FA982F", marginBottom: "8px" }}>Package 02</div>
                <div className="pkg-font-display pkg-grad-text" style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px", marginBottom: "12px" }}>AMPLIFY</div>
                <p className="pkg-font-body" style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.6, marginBottom: "24px" }}>
                  Widen the funnel. Add Facebook and push your AI machine into a higher gear.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                  {[["Build Fee (Once)", "$5,000"], ["Monthly Retainer", "$10,000/mo"]].map(([label, val]) => (
                    <div key={label} style={{ background: "rgba(0,0,0,0.25)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                      <div className="pkg-font-mono" style={{ fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>{label}</div>
                      <div className="pkg-font-display" style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "28px" }}>
                  {[["Revenue Min", "$30K/mo"], ["Guaranteed ROI", "3× Return"], ["Ad Spend", "Included"]].map(([label, val], i) => (
                    <div key={label} style={{ textAlign: "center", padding: "12px 8px", background: "rgba(0,0,0,0.15)", borderRadius: "8px" }}>
                      <div className="pkg-font-mono" style={{ fontSize: "9px", color: "#6b7280", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                      <div className="pkg-font-display" style={{ fontSize: "13px", fontWeight: 700, color: i === 2 ? "#10b981" : "#fff" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: "28px", flex: 1 }}>
                  {[
                    "Google Business Profile Optimization",
                    "Local Services Ads (managed + spend included)",
                    "24/7 AI Lead Response — 3-second reply",
                    "AI Qualification + Appointment Booking",
                    "Live deal-tracking dashboard",
                    "Facebook Ads (managed + spend included)",
                  ].map(f => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="pkg-check-coral">✓</span>
                      <span className="pkg-font-body" style={{ fontSize: "13px", color: "#d1d5db" }}>{f}</span>
                    </div>
                  ))}
                  {["Retargeting", "SMS + Email Reactivation"].map(f => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="pkg-dash">—</span>
                      <span className="pkg-font-body" style={{ fontSize: "13px", color: "#6b7280" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
                  className="pkg-btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>
                  Start with AMPLIFY
                </a>
              </div>
            </div>

            {/* DOMINATE */}
            <div className="pkg-package-card">
              <div style={{ height: "3px", background: "linear-gradient(90deg, #FA982F, #FFD700)", borderRadius: "16px 16px 0 0" }} />
              <div style={{ padding: "36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="pkg-font-mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFD700", marginBottom: "8px" }}>Package 03</div>
                <div className="pkg-font-display" style={{ fontSize: "40px", fontWeight: 900, letterSpacing: "-1px", color: "#FFD700", marginBottom: "12px" }}>DOMINATE</div>
                <p className="pkg-font-body" style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.6, marginBottom: "24px" }}>
                  Own every channel. Capture new leads AND recover every lead that got away.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                  {[["Build Fee (Once)", "$5,000"], ["Monthly Retainer", "$15,000/mo"]].map(([label, val]) => (
                    <div key={label} style={{ background: "rgba(0,0,0,0.25)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                      <div className="pkg-font-mono" style={{ fontSize: "10px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>{label}</div>
                      <div className="pkg-font-display" style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "28px" }}>
                  {[["Revenue Min", "$60K/mo"], ["Guaranteed ROI", "4× Return"], ["Ad Spend", "Included"]].map(([label, val], i) => (
                    <div key={label} style={{ textAlign: "center", padding: "12px 8px", background: "rgba(0,0,0,0.15)", borderRadius: "8px" }}>
                      <div className="pkg-font-mono" style={{ fontSize: "9px", color: "#6b7280", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                      <div className="pkg-font-display" style={{ fontSize: "13px", fontWeight: 700, color: i === 2 ? "#10b981" : "#fff" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: "28px", flex: 1 }}>
                  {[
                    "Google Business Profile Optimization",
                    "Local Services Ads (managed + spend included)",
                    "24/7 AI Lead Response — 3-second reply",
                    "AI Qualification + Appointment Booking",
                    "Live deal-tracking dashboard",
                    "Facebook Ads (managed + spend included)",
                    "Retargeting — all channels",
                    "SMS + Email Reactivation System",
                  ].map(f => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="pkg-check-gold">✓</span>
                      <span className="pkg-font-body" style={{ fontSize: "13px", color: "#d1d5db" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="pkg-btn-ghost" style={{ width: "100%", textAlign: "center" }}
                  onClick={() => window.open("https://makea.shiftnow.io/widget/bookings/reality", "_blank")}>
                  Start with DOMINATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOMINATE EXPLAINER ── */}
      <section className="pkg-section" style={{ background: "#060818", padding: "100px 80px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div className="pkg-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "64px" }}>
            <div>
              <div className="pkg-section-label"><span className="pkg-section-label-bar" />Why DOMINATE Is Different</div>
              <h2 className="pkg-font-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px" }}>
                Not Just More Ads.<br /><span className="pkg-grad-text">A Revenue Recovery System.</span>
              </h2>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <p className="pkg-font-body" style={{ fontSize: "17px", color: "#9ca3af", lineHeight: 1.7 }}>
                ACTIVATE and AMPLIFY are acquisition systems — they generate new leads from buyers who are actively searching or browsing. DOMINATE adds a second revenue engine: it goes back for every lead that didn't convert the first time. That changes the economics entirely.
              </p>
            </div>
          </div>

          <div className="pkg-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {[
              {
                lever: "Lever 1 · Retargeting",
                title: "Revenue Recovery",
                body: "Every roofing company loses 95%+ of website visitors without a contact. Retargeting re-serves ads to every visitor who didn't book — a second attempt on leads you already paid for. The incremental cost is low. The revenue is direct recovered pipeline.",
                callout: "ACTIVATE and AMPLIFY cannot do this. Revenue leaves the table permanently.",
              },
              {
                lever: "Lever 2 · SMS + Email",
                title: "Lead Reactivation",
                body: "Over 90 days, your AI builds a database of every lead that contacted you, booked but didn't close, went dark, or asked for a callback. DOMINATE works that database automatically — reactivation sequences, storm-event triggers, seasonal campaigns.",
                callout: "A roofer on AMPLIFY for 6 months has $40K–$80K in recoverable pipeline sitting idle. DOMINATE extracts it.",
              },
              {
                lever: "Lever 3 · Omnichannel",
                title: "Higher Close Rate",
                body: "A buyer who sees your LSA, gets retargeted on Facebook, receives an SMS, and gets a 3-second AI response when they call — closes at a materially higher rate. DOMINATE buyers see you everywhere. Omnipresence is itself a trust signal.",
                callout: "The $60K floor isn't because we run more ads. It's because we stop losing revenue you already earned.",
              },
            ].map((card) => (
              <div key={card.lever} className="pkg-dominate-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <span style={{ width: 6, height: 6, background: "#FFD700", borderRadius: "50%" }} />
                  <span className="pkg-font-mono" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#FFD700" }}>{card.lever}</span>
                </div>
                <h3 className="pkg-font-display" style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>{card.title}</h3>
                <p className="pkg-font-body" style={{ fontSize: "14px", color: "#9ca3af", lineHeight: 1.7, marginBottom: "20px" }}>{card.body}</p>
                <div style={{
                  background: "rgba(255,215,0,0.06)", borderLeft: "3px solid #FFD700",
                  borderRadius: "0 8px 8px 0", padding: "14px 16px"
                }}>
                  <p className="pkg-font-body" style={{ fontSize: "13px", color: "#fff", fontStyle: "italic", lineHeight: 1.6 }}>{card.callout}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section id="guarantee" className="pkg-section" style={{ background: "#0D0F33", padding: "100px 80px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            width: 72, height: 72, margin: "0 auto 32px",
            background: "linear-gradient(135deg, rgba(245,74,72,0.2), rgba(250,152,47,0.1))",
            border: "1px solid rgba(245,74,72,0.3)", borderRadius: "16px",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px"
          }}>🛡</div>
          <h2 className="pkg-font-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "24px" }}>
            We Work <span className="pkg-grad-text">Free</span><br />Until You Win.
          </h2>
          <p className="pkg-font-body" style={{ fontSize: "18px", fontWeight: 400, color: "#d1d5db", lineHeight: 1.7, marginBottom: "48px" }}>
            Miss your revenue minimum at 90 days? We don't invoice. We don't make excuses. We keep running your system at no charge until you hit the number we promised. Every package. No exceptions.
          </p>
          <div style={{
            background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px", padding: "28px 32px", textAlign: "left"
          }}>
            <div className="pkg-font-mono" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F54A48", marginBottom: "16px" }}>
              ⚡ Guarantee Terms
            </div>
            <div className="pkg-font-mono" style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.8 }}>
              <p><strong style={{ color: "#d1d5db" }}>Build period:</strong> $5,000 one-time fee initiates a 30-day setup. Guarantee clock starts Month 2.</p>
              <p><strong style={{ color: "#d1d5db" }}>Commitment:</strong> 3-month minimum required.</p>
              <p><strong style={{ color: "#d1d5db" }}>Revenue measurement:</strong> Deals closed based on known deal size at signing — not cash collection date.</p>
              <p><strong style={{ color: "#d1d5db" }}>Ad spend:</strong> Included in monthly retainer. One number, no surprises.</p>
              <p><strong style={{ color: "#d1d5db" }}>Attribution policy:</strong> ROI is measured on qualified appointments booked and shown by the client. ShiFt guarantees appointment volume and lead quality. Close rate is the client's responsibility. Guarantee applies to clients who attend booked appointments and provide timely lead quality feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="pkg-section" style={{ background: "#060818", padding: "100px 80px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div className="pkg-section-label"><span className="pkg-section-label-bar" />At a Glance</div>
          <h2 className="pkg-font-display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "0" }}>
            Everything You Need<br /><span className="pkg-grad-text">to Decide.</span>
          </h2>

          <div style={{ overflowX: "auto", marginTop: "56px" }}>
            <table className="pkg-table" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left" }}>
                    <span className="pkg-font-mono" style={{ fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>Feature</span>
                  </th>
                  {[
                    { name: "ACTIVATE", color: "#F54A48", isGrad: false },
                    { name: "AMPLIFY", color: null, isGrad: true },
                    { name: "DOMINATE", color: "#FFD700", isGrad: false },
                  ].map(col => (
                    <th key={col.name} style={{ padding: "14px 20px", textAlign: "center" }}>
                      {col.isGrad
                        ? <span className="pkg-font-display pkg-grad-text" style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px" }}>{col.name}</span>
                        : <span className="pkg-font-display" style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px", color: col.color }}>{col.name}</span>
                      }
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Build Fee", "$5,000", "$5,000", "$5,000"],
                  ["Monthly Retainer", "$7,500 / mo", "$10,000 / mo", "$15,000 / mo"],
                  ["Revenue Minimum", "$15,000 / mo ✓", "$30,000 / mo ✓", "$60,000 / mo ✓"],
                  ["Guaranteed ROI", "2× Return", "3× Return", "4× Return"],
                  ["If ROI Not Hit at 90 Days", "work-free", "work-free", "work-free"],
                  ["Ad Spend", "Included ✓", "Included ✓", "Included ✓"],
                  ["Commitment", "3 Months", "3 Months", "3 Months"],
                  ["Google Business Profile", "✓", "✓", "✓"],
                  ["Local Services Ads", "✓", "✓", "✓"],
                  ["24/7 AI Response (3 sec)", "✓", "✓", "✓"],
                  ["AI Qualification + Booking", "✓", "✓", "✓"],
                  ["Facebook Ads", "—", "✓", "✓"],
                  ["Retargeting", "—", "—", "✓"],
                  ["SMS + Email Reactivation", "—", "—", "✓"],
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "14px 20px" }}>
                      <span className="pkg-font-body" style={{ fontSize: "14px", color: "#d1d5db" }}>{row[0]}</span>
                    </td>
                    {[row[1], row[2], row[3]].map((cell, ci) => (
                      <td key={ci} style={{ padding: "14px 20px", textAlign: "center" }}>
                        {cell === "work-free"
                          ? <span className="pkg-work-free-badge">✓ Work Free</span>
                          : cell === "—"
                            ? <span className="pkg-font-mono" style={{ color: "rgba(255,255,255,0.12)", fontSize: "14px" }}>—</span>
                            : <span className="pkg-font-body" style={{ fontSize: "14px", color: cell.includes("✓") || cell.includes("✓") ? "#F54A48" : "#d1d5db", fontWeight: cell.includes("✓") ? 600 : 400 }}>{cell}</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="contact" className="pkg-section" style={{
        background: "#0D0F33", padding: "140px 80px", textAlign: "center",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse at 50% 100%, rgba(245,74,72,0.1), transparent 60%)",
          pointerEvents: "none"
        }} />
        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="pkg-font-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "24px" }}>
            Ready to Turn<br /><span className="pkg-grad-text">It On?</span>
          </h2>
          <p className="pkg-font-body" style={{ fontSize: "18px", color: "#9ca3af", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 48px" }}>
            Book a 20-minute call. We'll show you exactly what your AI revenue machine looks like — and which package fits your market.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
              className="pkg-btn-primary" style={{ fontSize: "18px", padding: "18px 48px" }}>
              Book Your Call
            </a>
            <button className="pkg-btn-ghost" style={{ fontSize: "18px", padding: "18px 40px" }}
              onClick={() => scrollTo("packages")}>
              Compare Packages
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pkg-footer" style={{
        background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 80px", display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div className="pkg-font-display" style={{ fontSize: "28px", fontWeight: 900 }}>
          Shi<span style={{ color: "#F54A48" }}>F</span>t
        </div>
        <div className="pkg-font-mono" style={{ fontSize: "11px", color: "#4b5563", textAlign: "center", lineHeight: 1.7 }}>
          shiftnow.io · AI Revenue Operating System for Roofing Contractors<br />
          © 2026 ShiFt NeuralOS™. All rights reserved.
        </div>
        <div className="pkg-font-mono" style={{ fontSize: "11px", color: "#4b5563", textAlign: "right", lineHeight: 1.7 }}>
          Brand & Style Guide v1.0<br />
          NeuralOS v3.3.2
        </div>
      </footer>
    </div>
  );
}