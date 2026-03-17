import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const fmt = (v) => v >= 1000000 ? `$${(v / 1000000).toFixed(1)}M` : `$${(v / 1000).toFixed(0)}K`;

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl px-4 py-3 text-xs font-mono"
      style={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>
      <div className="font-bold mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>{label}</div>
      <div style={{ color: payload[0]?.color || "#F54A48" }}>Before: {fmt(payload[0]?.payload?.revenueStart)}</div>
      <div style={{ color: payload[1]?.color || "#48BB78" }}>After: {fmt(payload[1]?.payload?.revenueEnd)}</div>
    </div>
  );
};

export default function RevenueGrowthChart({ cases }) {
  const data = cases.map(c => ({
    name: c.company.split(" ")[0],
    revenueStart: c.revenueStart,
    revenueEnd: c.revenueEnd,
    color: c.color,
    roiMultiple: c.roiMultiple,
  }));

  return (
    <div className="rounded-2xl p-6 md:p-8"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "#FA982F" }}>Revenue Growth Visualization</div>
          <h3 className="font-display text-lg font-bold text-white">Before vs. After ShiFt</h3>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "rgba(255,255,255,0.15)" }} />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Before</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "#48BB78" }} />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>After</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4} barCategoryGap="30%">
          <XAxis
            dataKey="name"
            tick={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 12, fontWeight: 700, fill: "rgba(255,255,255,0.6)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={fmt}
            tick={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fill: "rgba(255,255,255,0.3)" }}
            axisLine={false}
            tickLine={false}
            width={55}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
          <Bar dataKey="revenueStart" radius={[4, 4, 0, 0]} maxBarSize={40}>
            {data.map((_, i) => <Cell key={i} fill="rgba(255,255,255,0.12)" />)}
          </Bar>
          <Bar dataKey="revenueEnd" radius={[4, 4, 0, 0]} maxBarSize={40}>
            {data.map((d, i) => <Cell key={i} fill={d.color} fillOpacity={0.85} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* ROI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {data.map((d, i) => (
          <div key={i} className="rounded-xl p-3 text-center"
            style={{ background: `${cases[i].color}0F`, border: `1px solid ${cases[i].color}33` }}>
            <div className="font-display text-lg font-black" style={{ color: cases[i].color }}>{d.roiMultiple}×</div>
            <div className="font-mono text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{d.name} ROI</div>
          </div>
        ))}
      </div>
    </div>
  );
}