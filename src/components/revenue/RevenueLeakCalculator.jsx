import React, { useState, useMemo } from "react";

const PKG = {
  ACTIVATE: { name: "ACTIVATE", cost: 1997, color: "#F54A48" },
  AMPLIFY:  { name: "AMPLIFY",  cost: 3497, color: "#FA982F" },
  DOMINATE: { name: "DOMINATE", cost: 8997, color: "#FFD700" },
};

function fmt(n) {
  if (isNaN(n) || !isFinite(n)) return "$0";
  return "$" + Math.round(n).toLocaleString();
}

function SliderInput({ label, sublabel, value, onChange, min, max, step = 1, prefix = "", suffix = "" }) {
  const display = prefix + (Number(value) || 0).toLocaleString() + suffix;
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{label}</div>
          {sublabel && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2px" }}>{sublabel}</div>}
        </div>
        <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: "20px", fontWeight: 800, color: "#FA982F", minWidth: "80px", textAlign: "right" }}>{display}</div>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#F54A48", height: "4px", cursor: "pointer" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>{prefix}{min.toLocaleString()}{suffix}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

function OutputBox({ val, label, color = "#FA982F", big = false }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 12px", background: "rgba(0,0,0,0.2)", borderRadius: "12px", border: `1px solid ${color}22` }}>
      <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: big ? "32px" : "24px", fontWeight: 900, color, marginBottom: "6px", lineHeight: 1 }}>{val}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

export default function RevenueLeakCalculator({ onScrollToPackages }) {
  const [inboundLeads, setInboundLeads] = useState(50);
  const [missPct, setMissPct] = useState(40);
  const [avgTicket, setAvgTicket] = useState(8000);
  const [closePct, setClosePct] = useState(35);
  const [monthlySpend, setMonthlySpend] = useState(3000);
  const [paidLeads, setPaidLeads] = useState(50);
  const [garbagePct, setGarbagePct] = useState(35);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [selectedPkg, setSelectedPkg] = useState("ACTIVATE");

  const calc = useMemo(() => {
    const safe = (v, d) => (v > 0 ? v : d);
    const lostLeads = safe(inboundLeads, 50) * (safe(missPct, 40) / 100);
    const lostJobs = lostLeads * (safe(closePct, 35) / 100);
    const wound1 = lostJobs * safe(avgTicket, 8000);

    const wastedSpend = safe(monthlySpend, 3000) * (safe(garbagePct, 35) / 100);
    const wastedLabor = safe(hoursPerWeek, 5) * safe(hourlyRate, 35) * 4.33;
    const wound2 = wastedSpend + wastedLabor;

    const qualLeads = safe(paidLeads, 50) * (1 - safe(garbagePct, 35) / 100);
    const costPerLead = qualLeads > 0 ? safe(monthlySpend, 3000) / qualLeads : null;

    const totalLeak = wound1 + wound2;
    const pkgCost = PKG[selectedPkg].cost;
    const netReturn = totalLeak - pkgCost;
    const roiMultiple = pkgCost > 0 ? totalLeak / pkgCost : 0;

    return { lostLeads, lostJobs, wound1, wastedSpend, wastedLabor, wound2, costPerLead, totalLeak, netReturn, roiMultiple };
  }, [inboundLeads, missPct, avgTicket, closePct, monthlySpend, paidLeads, garbagePct, hoursPerWeek, hourlyRate, selectedPkg]);

  const cardStyle = {
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px", padding: "36px 32px", marginBottom: "24px",
  };

  return (
    <div style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FA982F", marginBottom: "20px" }}>
          <span style={{ width: 4, height: 14, background: "linear-gradient(135deg,#F54A48,#FA982F)", borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
          Revenue Leak Calculator
        </div>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", color: "#fff", marginBottom: "16px" }}>
          Find Your Revenue Leak
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
          Enter your numbers. See exactly how much revenue you're leaving on the table every month — before you ever look at a package price.
        </p>
      </div>

      {/* Wound steps */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}>
        {[["1", "Missed Calls"], ["2", "Garbage Leads"], ["3", "Total Leak + ROI"]].map(([n, l]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "999px", background: "rgba(245,74,72,0.08)", border: "1px solid rgba(245,74,72,0.25)" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg,#F54A48,#FA982F)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "11px", color: "#fff", flexShrink: 0 }}>{n}</div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff", whiteSpace: "nowrap" }}>{l}</span>
          </div>
        ))}
      </div>

      {/* ── WOUND 1 ── */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#F54A48,#FA982F)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", color: "#fff", flexShrink: 0 }}>1</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "18px", color: "#fff" }}>Wound 1 — Missed Calls &amp; Zero Follow-Up</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Leads you already paid for, bleeding out before becoming jobs</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0 40px" }}>
          <SliderInput label="Inbound leads per month" sublabel="All sources — calls, forms, texts, referrals" value={inboundLeads} onChange={setInboundLeads} min={5} max={300} step={5} />
          <SliderInput label="% missed or no follow-up" sublabel="Industry average: 40%" value={missPct} onChange={setMissPct} min={5} max={95} step={5} suffix="%" />
          <SliderInput label="Average job value" sublabel="Your average booked job revenue" value={avgTicket} onChange={setAvgTicket} min={1000} max={30000} step={500} prefix="$" />
          <SliderInput label="Close rate on leads reached" sublabel="When you respond, how often do you close?" value={closePct} onChange={setClosePct} min={5} max={80} step={5} suffix="%" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "8px" }}>
          <OutputBox val={Math.round(calc.lostLeads) + " leads"} label="Lost per month" />
          <OutputBox val={(Math.round(calc.lostJobs * 10) / 10) + " jobs"} label="Lost per month" />
          <OutputBox val={fmt(calc.wound1)} label="Estimated monthly revenue leak" color="#F54A48" big />
        </div>
        <div style={{ marginTop: "16px", padding: "14px 18px", background: "rgba(245,74,72,0.06)", borderLeft: "3px solid #F54A48", borderRadius: "0 8px 8px 0" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>"These leads already exist. ShiFt captures them — the AI responds in under 30 seconds, every time, 24/7."</p>
        </div>
      </div>

      {/* ── WOUND 2 ── */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#FA982F,#F54A48)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", color: "#fff", flexShrink: 0 }}>2</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "18px", color: "#fff" }}>Wound 2 — Garbage Lead Cost</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>Wasted ad spend + wasted labor on unqualified contacts</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0 40px" }}>
          <SliderInput label="Monthly lead gen spend" sublabel="Ads, lead vendors, SEO — total" value={monthlySpend} onChange={setMonthlySpend} min={0} max={20000} step={250} prefix="$" />
          <SliderInput label="Leads that spend produces" sublabel="Total inbound from paid sources" value={paidLeads} onChange={setPaidLeads} min={5} max={300} step={5} />
          <SliderInput label="% unqualified / garbage" sublabel="Wrong area, renters, tire-kickers, spam" value={garbagePct} onChange={setGarbagePct} min={5} max={80} step={5} suffix="%" />
          <SliderInput label="Hours/week chasing junk leads" sublabel="Self or team time on unqualified contacts" value={hoursPerWeek} onChange={setHoursPerWeek} min={1} max={40} suffix=" hrs" />
          <SliderInput label="Hourly labor cost" sublabel="Loaded rate for time spent" value={hourlyRate} onChange={setHourlyRate} min={15} max={150} step={5} prefix="$" suffix="/hr" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {calc.costPerLead !== null
              ? <OutputBox val={fmt(calc.costPerLead)} label="Cost per qualified lead" color="#FA982F" />
              : <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>N/A — enter leads above</div>
            }
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "8px" }}>
          <OutputBox val={fmt(calc.wastedSpend)} label="Wasted ad spend/mo" />
          <OutputBox val={fmt(calc.wastedLabor)} label="Wasted labor/mo" />
          <OutputBox val={fmt(calc.wound2)} label="Estimated garbage lead cost" color="#F54A48" big />
        </div>
        <div style={{ marginTop: "16px", padding: "14px 18px", background: "rgba(250,152,47,0.06)", borderLeft: "3px solid #FA982F", borderRadius: "0 8px 8px 0" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>"ShiFt AI qualifies every lead in under 30 seconds before it touches your calendar — no wasted sales hours, no tire-kicker calls."</p>
        </div>
      </div>

      {/* ── WOUND 3 ── */}
      <div style={{ ...cardStyle, background: "linear-gradient(135deg, rgba(245,74,72,0.07), rgba(250,152,47,0.04))", border: "1px solid rgba(245,74,72,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#F54A48,#FA982F)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "14px", color: "#fff", flexShrink: 0 }}>3</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "18px", color: "#fff" }}>Wound 3 — Total Leak + Revenue Engine ROI</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>All wounds combined against your selected engine cost</div>
          </div>
        </div>

        {/* Big total */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>Estimated total monthly revenue leakage</div>
          <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: "clamp(56px, 8vw, 88px)", fontWeight: 900, color: "#F54A48", lineHeight: 1, letterSpacing: "-2px" }}>{fmt(calc.totalLeak)}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "14px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>Wound 1: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{fmt(calc.wound1)}</strong></span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>Wound 2: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{fmt(calc.wound2)}</strong></span>
          </div>
        </div>

        {/* Package selector */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Select your Revenue Engine</div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {Object.values(PKG).map(p => (
              <button key={p.name} onClick={() => setSelectedPkg(p.name)} style={{
                padding: "10px 22px", borderRadius: "999px",
                border: `1px solid ${selectedPkg === p.name ? p.color : "rgba(255,255,255,0.12)"}`,
                background: selectedPkg === p.name ? `${p.color}18` : "rgba(255,255,255,0.03)",
                color: selectedPkg === p.name ? p.color : "rgba(255,255,255,0.5)",
                fontFamily: "'Montserrat Alternates', sans-serif", fontWeight: 800, fontSize: "13px",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                {p.name} <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: "11px" }}>${p.cost.toLocaleString()}/mo</span>
              </button>
            ))}
          </div>
        </div>

        {/* ROI outputs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
          <div style={{ textAlign: "center", padding: "20px 12px", background: "rgba(0,0,0,0.25)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: "26px", fontWeight: 900, color: "rgba(255,255,255,0.6)", marginBottom: "6px" }}>{fmt(PKG[selectedPkg].cost)}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>Monthly engine cost</div>
          </div>
          <div style={{ textAlign: "center", padding: "20px 12px", background: calc.netReturn >= 0 ? "rgba(72,187,120,0.08)" : "rgba(245,74,72,0.08)", borderRadius: "12px", border: `1px solid ${calc.netReturn >= 0 ? "rgba(72,187,120,0.2)" : "rgba(245,74,72,0.2)"}` }}>
            <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: "26px", fontWeight: 900, color: calc.netReturn >= 0 ? "#48BB78" : "#F54A48", marginBottom: "6px" }}>{fmt(calc.netReturn)}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>Estimated net monthly return</div>
          </div>
          <div style={{ textAlign: "center", padding: "20px 12px", background: "rgba(250,152,47,0.08)", borderRadius: "12px", border: "1px solid rgba(250,152,47,0.2)" }}>
            <div style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: "26px", fontWeight: 900, color: "#FA982F", marginBottom: "6px" }}>{Math.round(calc.roiMultiple)}×</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}>ROI multiplier</div>
          </div>
        </div>

        {/* Guarantee */}
        <div style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px 22px", marginBottom: "24px", textAlign: "center" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>🛡 90-Day Revenue Floor</div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
            If the engine doesn't produce, <strong style={{ color: "#fff" }}>billing pauses</strong>. You risk the activation fee, not the monthly investment.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onScrollToPackages} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff",
            fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "13px",
            letterSpacing: "0.08em", textTransform: "uppercase",
            padding: "16px 36px", borderRadius: "10px", border: "none", cursor: "pointer",
            boxShadow: "0 4px 24px rgba(245,74,72,0.3)",
          }}>
            See Revenue Engine Plans Below
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </button>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>All outputs are estimated based on your inputs</div>
        </div>
      </div>
    </div>
  );
}