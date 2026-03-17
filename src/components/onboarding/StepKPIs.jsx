import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

function NumberField({ label, prefix, suffix, placeholder, value, onChange, hint }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider block mb-2"
        style={{ color: "rgba(255,255,255,0.4)" }}>{label}</label>
      <div className="flex items-center rounded-xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        {prefix && (
          <span className="px-3 py-3 font-mono text-sm font-bold border-r"
            style={{ color: "#FA982F", borderColor: "rgba(255,255,255,0.08)" }}>{prefix}</span>
        )}
        <input
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="flex-1 px-4 py-3 font-body text-sm text-white outline-none bg-transparent"
          onFocus={e => e.target.closest("div").style.borderColor = "#FA982F"}
          onBlur={e => e.target.closest("div").style.borderColor = "rgba(255,255,255,0.1)"}
        />
        {suffix && (
          <span className="px-3 font-mono text-xs border-l"
            style={{ color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.08)" }}>{suffix}</span>
        )}
      </div>
      {hint && <p className="font-body text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>{hint}</p>}
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider block mb-2"
        style={{ color: "rgba(255,255,255,0.4)" }}>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 font-body text-sm text-white outline-none appearance-none"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: value ? "#fff" : "rgba(255,255,255,0.35)" }}>
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o.value} value={o.value} style={{ background: "#0D0F33" }}>{o.label}</option>)}
      </select>
    </div>
  );
}

const isValid = (data) => data.monthlyLeads && data.avgTicket && data.monthlyRevenueGoal && data.primaryMetric;

export default function StepKPIs({ data, onChange, onNext, onBack }) {
  const monthlyLeads = Number(data.monthlyLeads || 0);
  const avgTicket = Number(data.avgTicket || 0);
  const closeRate = 0.6;
  const projectedMonthly = Math.round(monthlyLeads * closeRate * avgTicket);

  return (
    <div>
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "#FA982F" }}>Step 2 of 3</div>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Set Your Business KPIs</h2>
        <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          ShiFt uses these to calibrate your AI engine and track your Revenue Floor guarantee.
        </p>
      </div>

      <div className="flex flex-col gap-5 mb-6 rounded-2xl p-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>Pipeline Inputs</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <NumberField label="Monthly Leads" placeholder="e.g. 75" value={data.monthlyLeads || ""}
            onChange={v => onChange("monthlyLeads", v)} suffix="leads/mo"
            hint="Average inbound leads across all channels" />
          <NumberField label="Average Job Ticket" prefix="$" placeholder="e.g. 8000" value={data.avgTicket || ""}
            onChange={v => onChange("avgTicket", v)}
            hint="Average revenue per closed roofing job" />
        </div>
        <NumberField label="Monthly Revenue Goal" prefix="$" placeholder="e.g. 120000" value={data.monthlyRevenueGoal || ""}
          onChange={v => onChange("monthlyRevenueGoal", v)}
          hint="The minimum monthly revenue target for your Revenue Floor" />
      </div>

      {/* ShiFt projection */}
      {projectedMonthly > 0 && (
        <div className="rounded-2xl p-5 mb-5 flex items-center justify-between gap-4 flex-wrap"
          style={{ background: "rgba(72,187,120,0.07)", border: "1px solid rgba(72,187,120,0.25)" }}>
          <div>
            <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>ShiFt Projected Monthly Revenue</div>
            <div className="font-display text-2xl font-black" style={{ color: "#48BB78" }}>
              ${projectedMonthly.toLocaleString()}
            </div>
            <div className="font-mono text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              at 60% close rate on {monthlyLeads} leads × ${Number(data.avgTicket || 0).toLocaleString()} avg ticket
            </div>
          </div>
          <div className="font-mono text-xs px-3 py-2 rounded-xl"
            style={{ background: "rgba(72,187,120,0.12)", color: "#48BB78", border: "1px solid rgba(72,187,120,0.3)" }}>
            Revenue Floor Eligible ✓
          </div>
        </div>
      )}

      <div className="rounded-2xl p-5 mb-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Dashboard Priority</div>
        <SelectField label="Primary Success Metric" value={data.primaryMetric || ""}
          onChange={v => onChange("primaryMetric", v)}
          options={[
            { value: "revenue", label: "Monthly Revenue Closed" },
            { value: "appointments", label: "Appointments Booked" },
            { value: "leads_captured", label: "Leads Captured" },
            { value: "close_rate", label: "Close Rate %" },
            { value: "roi", label: "ROI on ShiFt" },
          ]} />
      </div>

      <div className="flex gap-3">
        <button onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
        <button onClick={onNext} disabled={!isValid(data)}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
          style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: isValid(data) ? "0 4px 24px rgba(245,74,72,0.3)" : "none" }}>
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}