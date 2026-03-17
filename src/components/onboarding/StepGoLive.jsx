import React, { useState } from "react";
import { CheckCircle2, ExternalLink, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CRM_LABELS = {
  gohighlevel: "GoHighLevel", hubspot: "HubSpot", jobnimbus: "JobNimbus",
  acculynx: "AccuLynx", salesforce: "Salesforce", other: "Built-in Inbox",
};
const METRIC_LABELS = {
  revenue: "Monthly Revenue", appointments: "Appointments Booked", leads_captured: "Leads Captured",
  close_rate: "Close Rate %", roi: "ROI on ShiFt",
};
const TONE_LABELS = { professional: "Professional", friendly: "Friendly", direct: "Direct & Concise" };
const WINDOW_LABELS = { instant: "Instant (<30s)", "1min": "~1 Minute", "5min": "~5 Minutes" };

function SummaryRow({ label, value, color = "#FA982F" }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</span>
      <span className="font-mono text-xs font-bold" style={{ color }}>{value}</span>
    </div>
  );
}

export default function StepGoLive({ data, onBack }) {
  const [launched, setLaunched] = useState(false);

  const handleLaunch = () => setLaunched(true);

  const fmt = (n) => n ? `$${Number(n).toLocaleString()}` : "—";

  if (launched) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(72,187,120,0.15)", border: "2px solid #48BB78" }}>
          <CheckCircle2 className="w-10 h-10" style={{ color: "#48BB78" }} />
        </div>
        <h2 className="font-display text-3xl font-black text-white mb-3">You're Live.</h2>
        <p className="font-body text-base mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          Your AI Revenue Engine is activating. Expect your first AI-handled conversation within hours.
        </p>

        <div className="rounded-2xl p-5 mb-8 text-left"
          style={{ background: "rgba(72,187,120,0.06)", border: "1px solid rgba(72,187,120,0.2)" }}>
          <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "#48BB78" }}>What Happens Next</div>
          {[
            "Your AI response system goes live within 30 minutes",
            "CRM sync verified — leads will flow automatically",
            "Your Revenue Floor baseline is being established",
            "You'll receive a setup confirmation email within 1 hour",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#48BB78" }} />
              <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/NeuralOSDashboard"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 24px rgba(245,74,72,0.3)" }}>
            <Zap className="w-4 h-4" /> View Dashboard
          </Link>
          <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
            <ExternalLink className="w-3.5 h-3.5" /> Talk to Strategy Team
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider mb-4"
          style={{ background: "rgba(72,187,120,0.1)", color: "#48BB78", border: "1px solid rgba(72,187,120,0.25)" }}>
          <CheckCircle2 className="w-3 h-3" /> Setup Complete
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Review & Go Live</h2>
        <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          Confirm your configuration below. You can edit any setting from your dashboard after launch.
        </p>
      </div>

      {/* Summary card */}
      <div className="rounded-2xl p-6 mb-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Configuration Summary</div>
        <SummaryRow label="CRM" value={CRM_LABELS[data.crm] || "—"} color="#FA982F" />
        <SummaryRow label="Monthly Leads" value={data.monthlyLeads ? `${data.monthlyLeads} leads/mo` : "—"} />
        <SummaryRow label="Avg Ticket" value={fmt(data.avgTicket)} />
        <SummaryRow label="Revenue Goal" value={fmt(data.monthlyRevenueGoal)} color="#48BB78" />
        <SummaryRow label="Primary KPI" value={METRIC_LABELS[data.primaryMetric] || "—"} />
        <SummaryRow label="Response Window" value={WINDOW_LABELS[data.responseWindow] || "—"} color="#F54A48" />
        <SummaryRow label="AI Tone" value={TONE_LABELS[data.aiTone] || "—"} />
        <SummaryRow label="After-Hours" value={data.afterHours === "full" ? "24/7 Coverage" : data.afterHours || "—"} />
        <SummaryRow label="Channels" value={(data.inboundChannels || []).length > 0 ? `${data.inboundChannels.length} active` : "—"} />
        <div className="pt-2">
          <SummaryRow label="Storm Mode" value={data.stormMode === "auto" ? "Auto-Detect ✓" : data.stormMode || "—"} color="#63B3ED" />
        </div>
      </div>

      {/* Revenue floor teaser */}
      {data.monthlyRevenueGoal && (
        <div className="rounded-2xl p-5 mb-6 flex items-center gap-4"
          style={{ background: "rgba(72,187,120,0.06)", border: "1px solid rgba(72,187,120,0.25)" }}>
          <CheckCircle2 className="w-8 h-8 flex-shrink-0" style={{ color: "#48BB78" }} />
          <div>
            <div className="font-display text-sm font-bold text-white mb-0.5">Revenue Floor Activated</div>
            <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
              Your 90-Day Revenue Floor target is set to <strong style={{ color: "#48BB78" }}>{fmt(data.monthlyRevenueGoal)}/mo</strong>. Billing pauses if we don't hit it.
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}>
          ← Back
        </button>
        <button onClick={handleLaunch}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 24px rgba(245,74,72,0.35)" }}>
          <Zap className="w-4 h-4" /> Launch My Revenue Engine
        </button>
      </div>
    </div>
  );
}