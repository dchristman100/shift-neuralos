import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

const DASHBOARD_HERO_HTML = `<!-- NEURALAOS DASHBOARD PREVIEW — HERO SECTION -->
<section style="padding:120px 24px 60px;text-align:center;position:relative;overflow:hidden;">
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(99,179,237,0.12),transparent 70%);pointer-events:none;"></div>
  <div style="position:relative;max-width:800px;margin:0 auto;">
    <div style="display:inline-flex;align-items:center;gap:10px;padding:10px 20px;border-radius:999px;background:rgba(99,179,237,0.08);border:1px solid rgba(99,179,237,0.3);margin-bottom:24px;">
      <span style="width:8px;height:8px;background:#63B3ED;border-radius:50%;animation:pulse-dot 2s ease-in-out infinite;flex-shrink:0;"></span>
      <span class="font-mono" style="font-size:.7rem;color:#63B3ED;text-transform:uppercase;letter-spacing:.2em;">Live Dashboard Preview</span>
    </div>
    <h1 class="font-display" style="font-size:clamp(2rem,5vw,3.5rem);font-weight:800;color:white;line-height:1.1;margin-bottom:20px;">
      This Is What Your<br/><span class="shift-gradient-text">NeuralOS Portal</span> Looks Like
    </h1>
    <p style="font-size:1.1rem;color:rgba(255,255,255,.6);max-width:600px;margin:0 auto 36px;line-height:1.7;">
      A high-fidelity preview of the contractor dashboard — real-time KPIs, AI lead intelligence, revenue charts, and activity logs. Live in 7 days.
    </p>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="padding:16px 36px;">Book a Strategy Call →</a>
  </div>
</section>`;

const DASHBOARD_KPI_HTML = `<!-- KPI METRICS ROW -->
<section style="padding:0 24px 40px;">
  <div style="max-width:1140px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px 20px;">
        <div class="font-mono" style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.4);margin-bottom:8px;">AI Conversations</div>
        <div class="font-display" style="font-size:2rem;font-weight:900;color:white;margin-bottom:4px;">247</div>
        <div class="font-mono" style="font-size:.7rem;color:#48BB78;">↑ 18% this month</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px 20px;">
        <div class="font-mono" style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.4);margin-bottom:8px;">Bookings This Month</div>
        <div class="font-display" style="font-size:2rem;font-weight:900;color:white;margin-bottom:4px;">34</div>
        <div class="font-mono" style="font-size:.7rem;color:#48BB78;">↑ 12% vs last month</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px 20px;">
        <div class="font-mono" style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.4);margin-bottom:8px;">Avg AI Response</div>
        <div class="font-display" style="font-size:2rem;font-weight:900;color:#F54A48;margin-bottom:4px;">28s</div>
        <div class="font-mono" style="font-size:.7rem;color:rgba(255,255,255,.4);">Target: &lt;30s ✓</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px 20px;">
        <div class="font-mono" style="font-size:.65rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.4);margin-bottom:8px;">Platform Revenue</div>
        <div class="font-display" style="font-size:2rem;font-weight:900;color:#48BB78;margin-bottom:4px;">$72K</div>
        <div class="font-mono" style="font-size:.7rem;color:#48BB78;">20× ROI this month</div>
      </div>
    </div>
  </div>
</section>`;

const DASHBOARD_LEADS_HTML = `<!-- AI LEAD INTELLIGENCE TABLE -->
<section style="padding:0 24px 40px;">
  <div style="max-width:1140px;margin:0 auto;">
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;overflow:hidden;">
      <div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
        <h3 class="font-display" style="font-size:1rem;font-weight:700;color:white;">AI Lead Intelligence Feed</h3>
        <span class="font-mono" style="font-size:.65rem;color:#63B3ED;background:rgba(99,179,237,0.1);border:1px solid rgba(99,179,237,0.25);padding:4px 10px;border-radius:999px;">LIVE</span>
      </div>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="background:rgba(255,255,255,0.02);">
              <th style="padding:12px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,0.06);">Lead</th>
              <th style="padding:12px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,0.06);">Status</th>
              <th style="padding:12px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,0.06);">Score</th>
              <th style="padding:12px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,0.06);">Est. Value</th>
              <th style="padding:12px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);border-bottom:1px solid rgba(255,255,255,0.06);">AI Response</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
              <td style="padding:14px 16px;font-size:.875rem;color:white;">Mike R. — Dallas, TX</td>
              <td style="padding:14px 16px;"><span style="background:rgba(72,187,120,0.12);color:#48BB78;border:1px solid rgba(72,187,120,0.25);padding:3px 10px;border-radius:999px;font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;">BOOKED</span></td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#48BB78;">94</td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:white;">$12,400</td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#F54A48;">22s</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
              <td style="padding:14px 16px;font-size:.875rem;color:white;">Jennifer L. — Austin, TX</td>
              <td style="padding:14px 16px;"><span style="background:rgba(250,152,47,0.12);color:#FA982F;border:1px solid rgba(250,152,47,0.25);padding:3px 10px;border-radius:999px;font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;">QUALIFYING</span></td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#FA982F;">78</td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:white;">$8,900</td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#F54A48;">18s</td>
            </tr>
            <tr>
              <td style="padding:14px 16px;font-size:.875rem;color:white;">Robert K. — Plano, TX</td>
              <td style="padding:14px 16px;"><span style="background:rgba(99,179,237,0.12);color:#63B3ED;border:1px solid rgba(99,179,237,0.25);padding:3px 10px;border-radius:999px;font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;">FOLLOW-UP</span></td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#63B3ED;">65</td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:white;">$15,200</td>
              <td style="padding:14px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#F54A48;">31s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`;

const DASHBOARD_TRUST_HTML = `<!-- TRUST STRIP -->
<section style="padding:0 24px 60px;">
  <div style="max-width:1140px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
      <div style="background:rgba(72,187,120,0.06);border:1px solid rgba(72,187,120,0.2);border-radius:14px;padding:24px;text-align:center;">
        <div style="font-size:1.5rem;margin-bottom:8px;">⚡</div>
        <div class="font-display" style="font-weight:700;color:white;margin-bottom:4px;">Live in 7 Days</div>
        <div style="font-size:.8rem;color:rgba(255,255,255,.5);">Full setup, AI training, and launch</div>
      </div>
      <div style="background:rgba(99,179,237,0.06);border:1px solid rgba(99,179,237,0.2);border-radius:14px;padding:24px;text-align:center;">
        <div style="font-size:1.5rem;margin-bottom:8px;">🎯</div>
        <div class="font-display" style="font-weight:700;color:white;margin-bottom:4px;">Every Lead Captured</div>
        <div style="font-size:.8rem;color:rgba(255,255,255,.5);">Zero missed calls, texts, or forms</div>
      </div>
      <div style="background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.2);border-radius:14px;padding:24px;text-align:center;">
        <div style="font-size:1.5rem;margin-bottom:8px;">📊</div>
        <div class="font-display" style="font-weight:700;color:white;margin-bottom:4px;">Full Transparency</div>
        <div style="font-size:.8rem;color:rgba(255,255,255,.5);">See every conversation, every booking</div>
      </div>
      <div style="background:rgba(250,152,47,0.06);border:1px solid rgba(250,152,47,0.2);border-radius:14px;padding:24px;text-align:center;">
        <div style="font-size:1.5rem;margin-bottom:8px;">🛡️</div>
        <div class="font-display" style="font-weight:700;color:white;margin-bottom:4px;">90-Day Floor</div>
        <div style="font-size:.8rem;color:rgba(255,255,255,.5);">Billing pauses if we don't produce</div>
      </div>
    </div>
  </div>
</section>`;

const DASHBOARD_CTA_HTML = `<!-- DASHBOARD PREVIEW CTA -->
<section style="padding:0 24px 80px;">
  <div style="max-width:700px;margin:0 auto;text-align:center;">
    <div style="background:linear-gradient(135deg,rgba(245,74,72,0.12),rgba(250,152,47,0.08));border:1px solid rgba(245,74,72,0.25);border-radius:24px;padding:56px 40px;">
      <h2 class="font-display" style="font-size:clamp(1.75rem,4vw,2.75rem);font-weight:800;color:white;line-height:1.1;margin-bottom:16px;">
        Ready to See This <span class="shift-gradient-text">For Your Business?</span>
      </h2>
      <p style="font-size:1rem;color:rgba(255,255,255,.6);max-width:480px;margin:0 auto 32px;line-height:1.7;">
        Book a 15-minute strategy call. We'll show you exactly how your NeuralOS portal would look and what revenue it would capture.
      </p>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="padding:16px 36px;">
        Book a Strategy Call →
      </a>
      <p class="font-mono" style="margin-top:16px;font-size:.7rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;">15 minutes · No obligation · Live demo</p>
    </div>
  </div>
</section>`;

const DASHBOARD_FULL_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="See the ShiFt NeuralOS contractor dashboard — live KPIs, AI lead intelligence, revenue charts, and activity logs.">
  <title>NeuralOS Dashboard Preview — ShiFt</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* 1. PASTE GLOBAL CSS (from ExportBrandNeuralOS) */
    /* 2. PASTE NAV CSS (from ExportBrandNeuralOS) */
    /* 3. PASTE FOOTER CSS (from ExportBrandNeuralOS) */
  </style>
</head>
<body>
  <!-- PASTE CONVERT NAV HTML HERE -->
  <main style="padding-top:72px;">
    <!-- PASTE DASHBOARD HERO HTML HERE -->
    <!-- PASTE KPI METRICS ROW HTML HERE -->
    <!-- PASTE AI LEAD INTELLIGENCE TABLE HTML HERE -->
    <!-- PASTE TRUST STRIP HTML HERE -->
    <!-- PASTE DASHBOARD CTA HTML HERE -->
  </main>
  <!-- PASTE FOOTER HTML HERE -->
  <script>/* PASTE NAV JS HERE */</script>
</body>
</html>`;

const sections = [
  { id: "dashboard-hero", title: "1. Dashboard Preview Hero", items: [{ label: "HTML", code: DASHBOARD_HERO_HTML }] },
  { id: "dashboard-kpi", title: "2. KPI Metrics Row", items: [{ label: "HTML", code: DASHBOARD_KPI_HTML }] },
  { id: "dashboard-leads", title: "3. AI Lead Intelligence Table", items: [{ label: "HTML", code: DASHBOARD_LEADS_HTML }] },
  { id: "dashboard-trust", title: "4. Trust Strip (Live in 7 Days / Every Lead / Transparency / 90-Day Floor)", items: [{ label: "HTML", code: DASHBOARD_TRUST_HTML }] },
  { id: "dashboard-cta", title: "5. CTA — Book a Strategy Call", items: [{ label: "HTML", code: DASHBOARD_CTA_HTML }] },
  { id: "dashboard-full", title: "6. Full Page Template (Assembly Guide)", items: [{ label: "HTML", code: DASHBOARD_FULL_PAGE }] },
];

export default function ExportDashboardPreview() {
  const [expanded, setExpanded] = useState({});
  const [copied, setCopied] = useState(null);
  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));
  const copy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6" style={{ background: "rgba(99,179,237,0.08)", borderColor: "rgba(99,179,237,0.3)" }}>
            <FileCode className="w-5 h-5" style={{ color: "#63B3ED" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#63B3ED" }}>Export — Dashboard Preview</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Dashboard Preview Export</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>HTML/CSS for the NeuralOS Dashboard Preview page — hero, KPIs, lead table, trust strip, and CTA.</p>
        </div>

        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(99,179,237,0.06)", border: "1px solid rgba(99,179,237,0.2)" }}>
          <h2 className="font-display text-lg font-bold text-white mb-2">Note</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            The live React version at <strong className="text-white">/NeuralOSDashboard</strong> includes animated recharts and real-time updates. This export provides the static HTML equivalent for WordPress/Elementor.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((sec) => (
            <div key={sec.id} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <button onClick={() => toggle(sec.id)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <h3 className="font-display text-lg font-bold text-white">{sec.title}</h3>
                {expanded[sec.id] ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
              </button>
              {expanded[sec.id] && (
                <div className="p-6 pt-0 space-y-6">
                  {sec.items.map((item) => {
                    const copyId = `${sec.id}-${item.label}`;
                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#63B3ED" }}>{item.label}</span>
                          <button onClick={() => copy(item.code, copyId)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: copied === copyId ? "#48BB78" : "rgba(255,255,255,0.6)" }}>
                            {copied === copyId ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied === copyId ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        <pre className="rounded-lg p-4 overflow-x-auto text-sm" style={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", color: "#E2E8F0", maxHeight: "400px" }}>
                          <code>{item.code}</code>
                        </pre>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}