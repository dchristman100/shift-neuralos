import React from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

function ToggleGroup({ label, value, onChange, options }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider block mb-2.5"
        style={{ color: "rgba(255,255,255,0.4)" }}>{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(o => {
          const active = value === o.value;
          return (
            <button key={o.value} onClick={() => onChange(o.value)}
              className="px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                background: active ? "linear-gradient(135deg,#F54A48,#FA982F)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${active ? "#F54A48" : "rgba(255,255,255,0.1)"}`,
                color: active ? "#fff" : "rgba(255,255,255,0.45)",
              }}>
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TextArea({ label, placeholder, value, onChange, hint }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider block mb-2"
        style={{ color: "rgba(255,255,255,0.4)" }}>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        className="w-full rounded-xl px-4 py-3 font-body text-sm text-white outline-none resize-none"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        onFocus={e => e.target.style.borderColor = "#FA982F"}
        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
      />
      {hint && <p className="font-body text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>{hint}</p>}
    </div>
  );
}

function MultiSelect({ label, values = [], onChange, options }) {
  const toggle = (v) => {
    const next = values.includes(v) ? values.filter(x => x !== v) : [...values, v];
    onChange(next);
  };
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider block mb-2.5"
        style={{ color: "rgba(255,255,255,0.4)" }}>{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(o => {
          const active = values.includes(o.value);
          return (
            <button key={o.value} onClick={() => toggle(o.value)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-body text-xs transition-all"
              style={{
                background: active ? `${o.color || "#FA982F"}15` : "rgba(255,255,255,0.04)",
                border: `1px solid ${active ? (o.color || "#FA982F") : "rgba(255,255,255,0.1)"}`,
                color: active ? "#fff" : "rgba(255,255,255,0.45)",
              }}>
              {active && <CheckCircle2 className="w-3 h-3" style={{ color: o.color || "#FA982F" }} />}
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const isValid = (data) => data.responseWindow && data.aiTone && (data.inboundChannels || []).length > 0;

export default function StepAIParameters({ data, onChange, onNext, onBack }) {
  return (
    <div>
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "#FA982F" }}>Step 3 of 3</div>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Configure Your AI</h2>
        <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          Set how your AI responds — timing, tone, and which channels to monitor. These can be changed anytime.
        </p>
      </div>

      <div className="flex flex-col gap-6 rounded-2xl p-6 mb-5"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>Response Behavior</div>

        <ToggleGroup label="Response Window"
          value={data.responseWindow || ""}
          onChange={v => onChange("responseWindow", v)}
          options={[
            { value: "instant", label: "Instant (<30s)" },
            { value: "1min", label: "~1 Minute" },
            { value: "5min", label: "~5 Minutes" },
          ]} />

        <ToggleGroup label="AI Tone"
          value={data.aiTone || ""}
          onChange={v => onChange("aiTone", v)}
          options={[
            { value: "professional", label: "Professional" },
            { value: "friendly", label: "Friendly" },
            { value: "direct", label: "Direct & Concise" },
          ]} />

        <ToggleGroup label="After-Hours Coverage"
          value={data.afterHours || "full"}
          onChange={v => onChange("afterHours", v)}
          options={[
            { value: "full", label: "24/7 (Recommended)" },
            { value: "business", label: "Business Hours Only" },
            { value: "weekday", label: "Weekdays Only" },
          ]} />
      </div>

      <div className="flex flex-col gap-6 rounded-2xl p-6 mb-5"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>Lead Sources to Monitor</div>

        <MultiSelect label="Inbound Channels"
          values={data.inboundChannels || []}
          onChange={v => onChange("inboundChannels", v)}
          options={[
            { value: "phone", label: "📞 Phone Calls", color: "#F54A48" },
            { value: "sms", label: "💬 SMS / Text", color: "#FA982F" },
            { value: "web_form", label: "🌐 Web Form", color: "#48BB78" },
            { value: "facebook", label: "📘 Facebook Leads", color: "#63B3ED" },
            { value: "google_lsa", label: "🔍 Google LSA", color: "#FA982F" },
            { value: "email", label: "✉️ Email", color: "#F54A48" },
          ]} />

        <ToggleGroup label="Storm Trigger Mode"
          value={data.stormMode || "auto"}
          onChange={v => onChange("stormMode", v)}
          options={[
            { value: "auto", label: "Auto-Detect (Recommended)" },
            { value: "manual", label: "Manual Activate" },
            { value: "off", label: "Disabled" },
          ]} />
      </div>

      <div className="rounded-2xl p-5 mb-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <TextArea label="Custom Qualification Message (optional)"
          placeholder='e.g. "Hi! This is ShiFt AI for [Your Company]. I can get you a free roof inspection — are you the homeowner?"'
          value={data.qualificationMessage || ""}
          onChange={v => onChange("qualificationMessage", v)}
          hint="Leave blank to use our battle-tested roofing qualification script." />
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
          Review & Launch <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}