import React, { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const CRMS = [
  { id: "gohighlevel", name: "GoHighLevel", desc: "Full 2-way sync — contacts, pipelines, appointments.", badge: "Most Popular", color: "#FA982F" },
  { id: "hubspot", name: "HubSpot", desc: "Leads flow into your HubSpot CRM with conversation history.", color: "#F54A48" },
  { id: "jobnimbus", name: "JobNimbus", desc: "Roofing-native CRM with estimate and job tracking.", color: "#48BB78" },
  { id: "acculynx", name: "AccuLynx", desc: "End-to-end roofing business management platform.", color: "#63B3ED" },
  { id: "salesforce", name: "Salesforce", desc: "Enterprise-grade CRM with custom field mapping.", color: "#FA982F" },
  { id: "other", name: "Other / I'll set up later", desc: "Use ShiFt's built-in lead inbox for now.", color: "rgba(255,255,255,0.3)" },
];

function TextField({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider block mb-2"
        style={{ color: "rgba(255,255,255,0.4)" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 font-body text-sm text-white outline-none transition-all"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
        onFocus={e => e.target.style.borderColor = "#FA982F"}
        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
      />
    </div>
  );
}

export default function StepCRM({ data, onChange, onNext, onBack }) {
  const selected = data.crm || "";
  const needsCredentials = selected && selected !== "other";

  return (
    <div>
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "#FA982F" }}>Step 1 of 3</div>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Connect Your CRM</h2>
        <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          Choose your CRM so ShiFt can automatically push qualified leads, appointments, and job status updates.
        </p>
      </div>

      {/* CRM Grid */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {CRMS.map(crm => {
          const active = selected === crm.id;
          return (
            <button key={crm.id} onClick={() => onChange("crm", crm.id)}
              className="text-left rounded-2xl p-4 transition-all duration-200 relative"
              style={{
                background: active ? `${crm.color}12` : "rgba(255,255,255,0.03)",
                border: `1px solid ${active ? crm.color : "rgba(255,255,255,0.08)"}`,
              }}>
              {crm.badge && (
                <span className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${crm.color}20`, color: crm.color, border: `1px solid ${crm.color}40` }}>
                  {crm.badge}
                </span>
              )}
              {active && (
                <CheckCircle2 className="absolute top-3 right-3 w-4 h-4" style={{ color: crm.color }} />
              )}
              <div className="font-display text-base font-bold text-white mb-1">{crm.name}</div>
              <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{crm.desc}</div>
            </button>
          );
        })}
      </div>

      {/* Credentials */}
      {needsCredentials && (
        <div className="rounded-2xl p-5 mb-6 flex flex-col gap-4"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
            {selected.charAt(0).toUpperCase() + selected.slice(1)} Connection
          </div>
          <TextField label="API Key / Subdomain" placeholder="e.g. your-agency.mygohighlevel.com"
            value={data.crmApiKey || ""} onChange={v => onChange("crmApiKey", v)} />
          <TextField label="Account ID (optional)" placeholder="Your account or location ID"
            value={data.crmAccountId || ""} onChange={v => onChange("crmAccountId", v)} />
          <div className="font-body text-xs rounded-xl px-4 py-3"
            style={{ background: "rgba(250,152,47,0.07)", border: "1px solid rgba(250,152,47,0.2)", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
            🔐 Credentials are encrypted at rest. ShiFt never stores plaintext API keys.
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
        <button onClick={onNext} disabled={!selected}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
          style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: selected ? "0 4px 24px rgba(245,74,72,0.3)" : "none" }}>
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}