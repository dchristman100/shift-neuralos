import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const fmt = (n) => n >= 1000000 ? `$${(n / 1000000).toFixed(2)}M` : `$${(n / 1000).toFixed(0)}K`;
const fmtFull = (n) => `$${n.toLocaleString()}`;

function Slider({ label, value, min, max, step, onChange, format, color = "#FA982F" }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{label}</span>
        <span className="font-mono text-sm font-bold" style={{ color }}>{format(value)}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${color} ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl px-4 py-3 text-xs font-mono"
      style={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>
      <div className="font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Month {label}</div>
      <div style={{ color: "#FA982F" }}>Without ShiFt: {fmt(payload[0]?.value)}</div>
      <div style={{ color: "#48BB78" }}>With ShiFt: {fmt(payload[1]?.value)}</div>
    </div>
  );
};

export default function AttractROICalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(50);
  const [avgTicket, setAvgTicket] = useState(8000);
  const [currentCloseRate, setCurrentCloseRate] = useState(20);
  const [shiftCloseRate, setShiftCloseRate] = useState(60);

  const results = useMemo(() => {
    const currentMonthlyRev = leadsPerMonth * (currentCloseRate / 100) * avgTicket;
    const shiftMonthlyRev = leadsPerMonth * (shiftCloseRate / 100) * avgTicket;
    const addedMonthly = shiftMonthlyRev - currentMonthlyRev;
    const addedAnnual = addedMonthly * 12;
    const shiftCost = 1997; // Activate plan
    const roi = ((addedMonthly - shiftCost) / shiftCost) * 100;
    const paybackDays = shiftCost / (addedMonthly / 30);

    const chartData = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      without: Math.round(currentMonthlyRev * (i + 1)),
      with: Math.round(shiftMonthlyRev * (i + 1)),
    }));

    return { currentMonthlyRev, shiftMonthlyRev, addedMonthly, addedAnnual, roi, paybackDays, chartData };
  }, [leadsPerMonth, avgTicket, currentCloseRate, shiftCloseRate]);

  return (
    <section style={{ background: "#0D0F33", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 font-mono text-xs uppercase tracking-wider"
            style={{ background: "rgba(250,152,47,0.1)", color: "#FA982F", border: "1px solid rgba(250,152,47,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#FA982F" }} />
            ROI Calculator
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            See Your Pipeline's<br />
            <span style={{ background: "linear-gradient(135deg,#FA982F,#F54A48)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real Revenue Potential
            </span>
          </h2>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Adjust your numbers. See exactly what a consistent pipeline of ready-to-convert leads is worth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ── LEFT: Sliders ── */}
          <div className="rounded-2xl p-7 flex flex-col gap-7"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Your Business</div>
              <div className="flex flex-col gap-6">
                <Slider label="Monthly leads" value={leadsPerMonth} min={10} max={300} step={5}
                  onChange={setLeadsPerMonth} format={v => `${v} leads/mo`} color="#FA982F" />
                <Slider label="Average job ticket" value={avgTicket} min={2000} max={25000} step={500}
                  onChange={setAvgTicket} format={v => fmtFull(v)} color="#FA982F" />
              </div>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

            <div>
              <div className="font-mono text-xs uppercase tracking-wider mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Close Rates</div>
              <div className="flex flex-col gap-6">
                <Slider label="Current close rate (without ShiFt)" value={currentCloseRate} min={5} max={45} step={1}
                  onChange={setCurrentCloseRate} format={v => `${v}%`} color="rgba(255,255,255,0.4)" />
                <Slider label="ShiFt close rate (50%–70% qualified leads)" value={shiftCloseRate} min={50} max={70} step={1}
                  onChange={setShiftCloseRate} format={v => `${v}%`} color="#48BB78" />
              </div>
              <div className="mt-4 rounded-xl px-4 py-3 font-mono text-xs"
                style={{ background: "rgba(72,187,120,0.08)", border: "1px solid rgba(72,187,120,0.2)", color: "rgba(255,255,255,0.55)" }}>
                ShiFt Attract delivers pre-qualified leads with intent signals — industry average close rate <strong style={{ color: "#48BB78" }}>50%–70%</strong> vs. cold leads at 15%–25%.
              </div>
            </div>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="flex flex-col gap-5">
            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Added Monthly Revenue", value: fmt(results.addedMonthly), color: "#48BB78", sub: "vs. current pipeline" },
                { label: "Added Annual Revenue", value: fmt(results.addedAnnual), color: "#FA982F", sub: "cumulative 12-month gain" },
                { label: "Monthly ROI", value: `${Math.round(results.roi)}%`, color: "#F54A48", sub: "on ShiFt Activate plan" },
                { label: "Break-even", value: `${Math.round(results.paybackDays)} days`, color: "#63B3ED", sub: "to recover monthly cost" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl p-5 text-center"
                  style={{ background: `${m.color}0D`, border: `1px solid ${m.color}33` }}
                >
                  <div className="font-display text-2xl font-black mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="font-display text-xs font-bold text-white mb-1">{m.label}</div>
                  <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{m.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Comparison bar */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Monthly Revenue Comparison</div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Without ShiFt", value: results.currentMonthlyRev, color: "rgba(255,255,255,0.2)", max: results.shiftMonthlyRev },
                  { label: "With ShiFt Attract", value: results.shiftMonthlyRev, color: "#48BB78", max: results.shiftMonthlyRev },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{bar.label}</span>
                      <span className="font-mono text-xs font-bold" style={{ color: bar.color }}>{fmt(bar.value)}</span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: bar.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(bar.value / bar.max) * 100}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://makea.shiftnow.io/widget/bookings/reality"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl py-4 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#FA982F,#F54A48)", color: "#fff", boxShadow: "0 4px 24px rgba(250,152,47,0.3)" }}
            >
              Lock In This Revenue — Book a Call →
            </a>
          </div>
        </div>

        {/* ── Cumulative Revenue Chart ── */}
        <div className="mt-8 rounded-2xl p-7"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>12-Month Cumulative Revenue</div>
              <h3 className="font-display text-lg font-bold text-white">Pipeline Value Over Time</h3>
            </div>
            <div className="flex items-center gap-5 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-2 rounded-sm inline-block" style={{ background: "rgba(255,255,255,0.2)" }} />
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Without ShiFt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-2 rounded-sm inline-block" style={{ background: "#48BB78" }} />
                <span style={{ color: "rgba(255,255,255,0.4)" }}>With ShiFt</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={results.chartData} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
              <defs>
                <linearGradient id="gradWithout" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgba(255,255,255,0.2)" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="rgba(255,255,255,0.2)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradWith" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#48BB78" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#48BB78" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tickFormatter={v => `M${v}`}
                tick={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fill: "rgba(255,255,255,0.3)" }}
                axisLine={false} tickLine={false} />
              <YAxis tickFormatter={fmt}
                tick={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fill: "rgba(255,255,255,0.3)" }}
                axisLine={false} tickLine={false} width={55} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 }} />
              <Area type="monotone" dataKey="without" stroke="rgba(255,255,255,0.25)" strokeWidth={2} fill="url(#gradWithout)" />
              <Area type="monotone" dataKey="with" stroke="#48BB78" strokeWidth={2.5} fill="url(#gradWith)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
}