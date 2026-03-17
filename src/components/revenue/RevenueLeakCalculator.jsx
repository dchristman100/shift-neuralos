import React, { useState } from "react";
import { v4 as uuidv4 } from "crypto";

// Constants per SHIFT-CALC-001 v1.0
const CONSTANTS = {
  MISSED_CALLS: {
    avgJobValue: 15000,
    closeRate: 0.25,
  },
  GARBAGE_LEADS: {
    garbagePercent: 0.40,
    hoursPerLead: 2,
    hourlyRate: 50,
  },
};

const MIN_REVENUE = 50000;
const MAX_REVENUE = 500000;
const STEP = 5000;
const DEFAULT_REVENUE = 200000;

// Force cache bust
const CACHE_BUSTER = Date.now();

// Formatting function per FTRD 5.5
function fmt(n) {
  if (isNaN(n) || !isFinite(n)) return "--";
  return "$" + Math.round(n).toLocaleString("en-US");
}

// Core calculation engine per PRD Section 3
function calculateLosses(monthlyRevenue) {
  // Clamp to valid range (FTRD 5.2 - Error Handling)
  const rev = Math.max(MIN_REVENUE, Math.min(MAX_REVENUE, monthlyRevenue));

  // Output 1: Missed Calls Loss (PRD 3.3)
  // Formula: Monthly revenue × (percentage of missed leads) × avg job value × close rate
  // Simplified: assumes ~1 missed call per $10K revenue, 15K job value, 25% close
  const estimatedMissedCalls = rev / 10000;
  const missedCallsLoss = estimatedMissedCalls * CONSTANTS.MISSED_CALLS.avgJobValue * CONSTANTS.MISSED_CALLS.closeRate;

  // Output 2: Garbage Leads Loss (PRD 3.3)
  // Formula: Monthly revenue × (garbage lead %) × (hours wasted) × hourly rate
  const estimatedLeads = rev / 4000; // ~$4K revenue per lead baseline
  const garbageLeads = estimatedLeads * CONSTANTS.GARBAGE_LEADS.garbagePercent;
  const garbageLoss = garbageLeads * CONSTANTS.GARBAGE_LEADS.hoursPerLead * CONSTANTS.GARBAGE_LEADS.hourlyRate;

  // Output 3: Total Documented Loss
  const totalLoss = missedCallsLoss + garbageLoss;

  return {
    missedCallsLoss: Math.round(missedCallsLoss),
    garbageLoss: Math.round(garbageLoss),
    totalLoss: Math.round(totalLoss),
    estimatedMissedCalls: Math.round(estimatedMissedCalls),
    garbageLeads: Math.round(garbageLeads),
  };
}

function Card({ title, value, formula, color = "#F54A48" }) {
  return (
    <div
      style={{
        background: `${color}08`,
        border: `1px solid ${color}33`,
        borderRadius: "16px",
        padding: "28px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "12px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "36px",
          fontFamily: "'Montserrat Alternates', sans-serif",
          fontWeight: 900,
          color,
          marginBottom: "12px",
          lineHeight: 1,
        }}
        aria-live="polite"
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "11px",
          fontFamily: "'DM Sans', sans-serif",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.5,
        }}
      >
        {formula}
      </div>
    </div>
  );
}

export default function RevenueLeakCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(DEFAULT_REVENUE);
  const losses = calculateLosses(monthlyRevenue);

  const handleSliderChange = (e) => {
    setMonthlyRevenue(Number(e.target.value));
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            marginBottom: "16px",
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
          Revenue Loss Calculator
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontFamily: "'Montserrat Alternates', sans-serif",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            color: "#fff",
            marginBottom: "16px",
          }}
        >
          What Is Your Business<br />
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
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Move the slider to your monthly revenue. Watch the three revenue leaks calculate in real time.
        </p>
      </div>

      {/* Slider Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "40px 36px",
          marginBottom: "48px",
        }}
      >
        {/* Monthly Revenue Display */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Your Monthly Revenue
          </div>
          <div
            style={{
              fontSize: "32px",
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontWeight: 900,
              color: "#F54A48",
              minWidth: "140px",
              textAlign: "right",
            }}
            aria-label="Monthly Revenue"
            aria-valuetext={`$${monthlyRevenue.toLocaleString()}`}
          >
            ${monthlyRevenue.toLocaleString()}
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min={MIN_REVENUE}
          max={MAX_REVENUE}
          step={STEP}
          value={monthlyRevenue}
          onChange={handleSliderChange}
          aria-label="Monthly Revenue"
          style={{
            width: "100%",
            height: "6px",
            borderRadius: "3px",
            background: "linear-gradient(to right, #F54A48, #FA982F)",
            accentColor: "#F54A48",
            cursor: "pointer",
            appearance: "none",
            WebkitAppearance: "none",
          }}
        />

        {/* Slider labels */}
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
          <span>${MIN_REVENUE.toLocaleString()}</span>
          <span>${MAX_REVENUE.toLocaleString()}</span>
        </div>
      </div>

      {/* Three Output Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginBottom: "48px",
        }}
      >
        <Card
          title="Missed Calls Loss"
          value={fmt(losses.missedCallsLoss)}
          formula={`~${losses.estimatedMissedCalls} missed calls × $15K avg job × 25% close rate`}
          color="#F54A48"
        />
        <Card
          title="Garbage Leads Loss"
          value={fmt(losses.garbageLoss)}
          formula={`~${losses.garbageLeads} leads × 40% garbage × 2hrs × $50/hr`}
          color="#FA982F"
        />
        <Card
          title="Total Documented Loss"
          value={fmt(losses.totalLoss)}
          formula={"Missed calls + Garbage leads"}
          color="#FFD700"
        />
      </div>

      {/* Context footer */}
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          These three leaks represent the documented, measurable revenue your business is losing every month. The calculator uses conservative industry averages — your actual leaks may be higher.
        </p>
      </div>
    </div>
  );
}