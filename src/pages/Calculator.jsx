import React, { useState } from "react";

// ─── CONSTANTS per SHIFT-CALC-001 v1.0 Section 5.7 ───────────────────────
const CONSTANTS = {
  MISSED_CALLS: {
    avgJobValue: 15000,
    closeRate: 0.25,
    missedCallsPerDollar: 1 / 10000, // ~1 missed call per $10K revenue
  },
  GARBAGE_LEADS: {
    garbagePercent: 0.40,
    hoursPerLead: 2,
    hourlyRate: 50,
    leadsPerDollar: 1 / 4000, // ~1 lead per $4K revenue
  },
};

const MIN_REVENUE = 50000;
const MAX_REVENUE = 500000;
const STEP = 5000;
const DEFAULT_REVENUE = 200000;

// ─── fmt() per FTRD Section 5.5 ──────────────────────────────────────────
function fmt(n) {
  if (isNaN(n) || !isFinite(n)) return "--";
  return "$" + Math.round(n).toLocaleString("en-US");
}

// ─── Core calculation engine per PRD Section 3 ───────────────────────────
function calculateLosses(monthlyRevenue) {
  const rev = Math.max(MIN_REVENUE, Math.min(MAX_REVENUE, monthlyRevenue));

  // Missed Calls Loss — PRD 3.3 Output 1
  const M = Math.round(rev * CONSTANTS.MISSED_CALLS.missedCallsPerDollar);
  const missedCallsLoss = M * CONSTANTS.MISSED_CALLS.avgJobValue * CONSTANTS.MISSED_CALLS.closeRate;

  // Garbage Leads Loss — PRD 3.3 Output 2
  const L = Math.round(rev * CONSTANTS.GARBAGE_LEADS.leadsPerDollar);
  const H = CONSTANTS.GARBAGE_LEADS.hourlyRate;
  const garbageLoss =
    L * CONSTANTS.GARBAGE_LEADS.garbagePercent * CONSTANTS.GARBAGE_LEADS.hoursPerLead * H;

  // Total Documented Loss — PRD 3.3 Output 3
  const totalLoss = missedCallsLoss + garbageLoss;

  return {
    missedCallsLoss: Math.round(missedCallsLoss),
    garbageLoss: Math.round(garbageLoss),
    totalLoss: Math.round(totalLoss),
    M,
    L,
    H,
  };
}

export default function Calculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(DEFAULT_REVENUE);
  const losses = calculateLosses(monthlyRevenue);

  const sliderPct = ((monthlyRevenue - MIN_REVENUE) / (MAX_REVENUE - MIN_REVENUE)) * 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070820",
        color: "#fff",
        fontFamily: "'DM Sans', sans-serif",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        .calc-font-display { font-family: 'Montserrat Alternates', sans-serif; }
        .calc-font-mono { font-family: 'JetBrains Mono', monospace; }

        .calc-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F54A48;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(245,74,72,0.2), 0 2px 8px rgba(0,0,0,0.4);
          transition: box-shadow 0.2s ease;
        }
        .calc-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 6px rgba(245,74,72,0.3), 0 2px 12px rgba(0,0,0,0.5);
        }
        .calc-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #F54A48;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 4px rgba(245,74,72,0.2);
        }
        .calc-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .calc-card:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F54A48",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 12,
                background: "linear-gradient(135deg,#F54A48,#FA982F)",
                borderRadius: "2px",
                display: "inline-block",
              }}
            />
            Revenue Loss Calculator · SHIFT-CALC-001 v1.0
          </div>

          <h1
            className="calc-font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-2px",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            What Is Your Business
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F54A48, #FA982F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Actually Losing?
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Move the slider to your monthly revenue. Watch your three revenue leaks calculate in real time.
          </p>
        </div>

        {/* ── Slider Card ── */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "44px 40px",
            marginBottom: "40px",
          }}
        >
          {/* Revenue display */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "24px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <div
                className="calc-font-mono"
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "6px",
                }}
              >
                Your Monthly Revenue
              </div>
              <div
                className="calc-font-display"
                aria-label="Monthly Revenue"
                aria-valuetext={`$${monthlyRevenue.toLocaleString()}`}
                style={{
                  fontSize: "clamp(36px, 6vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #F54A48, #FA982F)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ${monthlyRevenue.toLocaleString()}
              </div>
            </div>
            <div
              className="calc-font-mono"
              style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textAlign: "right" }}
            >
              per month
            </div>
          </div>

          {/* Slider — per FTRD 4.2 + 5.2 */}
          <input
            type="range"
            className="calc-slider"
            min={MIN_REVENUE}
            max={MAX_REVENUE}
            step={STEP}
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            aria-label="Monthly Revenue"
            aria-valuemin={MIN_REVENUE}
            aria-valuemax={MAX_REVENUE}
            aria-valuenow={monthlyRevenue}
            aria-valuetext={`$${monthlyRevenue.toLocaleString()} per month`}
            style={{
              background: `linear-gradient(to right, #F54A48 ${sliderPct}%, rgba(255,255,255,0.1) ${sliderPct}%)`,
            }}
          />

          {/* Range labels */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            <span>$50,000</span>
            <span>$500,000</span>
          </div>
        </div>

        {/* ── Three Output Cards — per PRD Section 4.3 ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {/* Card 1 — Missed Calls */}
          <div
            className="calc-card"
            style={{ borderColor: "rgba(245,74,72,0.25)" }}
          >
            <div
              className="calc-font-mono"
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "14px",
              }}
            >
              Missed Calls Loss
            </div>
            <div
              className="calc-font-display"
              aria-live="polite"
              style={{
                fontSize: "clamp(32px, 5vw, 44px)",
                fontWeight: 900,
                color: "#F54A48",
                marginBottom: "14px",
                lineHeight: 1,
              }}
            >
              {fmt(losses.missedCallsLoss)}
            </div>
            <div
              className="calc-font-mono"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.55,
              }}
            >
              ~{losses.M} missed calls × $15K avg job × 25% close rate
            </div>
          </div>

          {/* Card 2 — Garbage Leads */}
          <div
            className="calc-card"
            style={{ borderColor: "rgba(250,152,47,0.25)" }}
          >
            <div
              className="calc-font-mono"
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "14px",
              }}
            >
              Garbage Leads Loss
            </div>
            <div
              className="calc-font-display"
              aria-live="polite"
              style={{
                fontSize: "clamp(32px, 5vw, 44px)",
                fontWeight: 900,
                color: "#FA982F",
                marginBottom: "14px",
                lineHeight: 1,
              }}
            >
              {fmt(losses.garbageLoss)}
            </div>
            <div
              className="calc-font-mono"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.55,
              }}
            >
              ~{losses.L} leads × 40% garbage × 2hrs × ${losses.H}/hr
            </div>
          </div>

          {/* Card 3 — Total Documented Loss */}
          <div
            className="calc-card"
            style={{
              borderColor: "rgba(255,215,0,0.3)",
              background: "rgba(255,215,0,0.04)",
            }}
          >
            <div
              className="calc-font-mono"
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "14px",
              }}
            >
              Total Documented Loss
            </div>
            <div
              className="calc-font-display"
              aria-live="polite"
              style={{
                fontSize: "clamp(32px, 5vw, 44px)",
                fontWeight: 900,
                color: "#FFD700",
                marginBottom: "14px",
                lineHeight: 1,
              }}
            >
              {fmt(losses.totalLoss)}
            </div>
            <div
              className="calc-font-mono"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.55,
              }}
            >
              Missed calls + Garbage leads
            </div>
          </div>
        </div>

        {/* ── Context footer — per PRD 3.4 ── */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "14px",
            padding: "28px 32px",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            These three leaks represent documented, measurable revenue your business is losing every month.
            The calculator uses conservative industry averages — your actual leaks may be higher.
            Figures calculated per SHIFT-CALC-001 v1.0.
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center" }}>
          <p
            className="calc-font-display"
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            ShiFt costs $897/month.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}
          >
            You're losing{" "}
            <strong style={{ color: "#FFD700" }}>{fmt(losses.totalLoss)}</strong> every month.
            The math is simple.
          </p>
          <a
            href="https://makea.shiftnow.io/widget/bookings/reality"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 48px",
              background: "linear-gradient(135deg, #F54A48, #FA982F)",
              color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 4px 32px rgba(245,74,72,0.35)",
            }}
          >
            Book a Strategy Call →
          </a>
          <p
            className="calc-font-mono"
            style={{
              marginTop: "16px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Live in 7 days · 90-Day Revenue Floor · No long-term contracts
          </p>
        </div>

      </div>
    </div>
  );
}