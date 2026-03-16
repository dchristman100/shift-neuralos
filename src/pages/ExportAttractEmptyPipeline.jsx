import React, { useState } from "react";

const SECTIONS = {
  globalStyles: {
    label: "Global Styles & Fonts",
    code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root { --coral: #F54A48; --orange: #FA982F; --green: #48BB78; --grad: linear-gradient(135deg,#F54A48,#FA982F); --attract-grad: linear-gradient(135deg,#FA982F,#F54A48); --surface: rgba(255,255,255,0.04); --border: rgba(255,255,255,0.08); }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #070820; color: #fff; font-family: 'DM Sans', sans-serif; }
.ep-font-display { font-family: 'Montserrat Alternates', sans-serif; }
.ep-font-mono { font-family: 'JetBrains Mono', monospace; }
.ep-attract-grad-text { background: var(--attract-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.ep-section { padding: 96px 40px; }
.ep-inner { max-width: 1140px; margin: 0 auto; }
.ep-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
@media (max-width: 768px) { .ep-section { padding: 64px 20px; } .ep-grid-3 { grid-template-columns: 1fr !important; } .ep-grid-stats { grid-template-columns: 1fr !important; } }
</style>`
  },
  hero: {
    label: "Hero",
    code: `<section class="ep-section" style="background: #070820; padding-top: 140px; text-align: center;">
  <div class="ep-inner" style="max-width: 820px;">
    <h1 class="ep-font-display" style="font-size: clamp(36px,6vw,72px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 20px;">
      The <span class="ep-attract-grad-text">Empty Pipeline</span> Problem
    </h1>
    <p style="font-size: 19px; color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; line-height: 1.7;">
      Why roofing contractors lose $35K–$100K+ monthly to broken lead generation systems
    </p>
  </div>
</section>`
  },
  problems: {
    label: "3 Pipeline Problems Grid",
    code: `<section class="ep-section" style="background: #0D0F33;">
  <div class="ep-inner">
    <div style="text-align: center; margin-bottom: 48px;">
      <div class="ep-font-mono" style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #FA982F; margin-bottom: 16px;">The Core Problems</div>
      <h2 class="ep-font-display" style="font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; color: #fff;">Why Your Pipeline Stays Empty</h2>
    </div>
    <div class="ep-grid-3" style="display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;">
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid #FA982F; border-radius: 16px; padding: 32px;">
        <div style="font-size: 32px; margin-bottom: 16px;">📣</div>
        <div class="ep-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #FA982F; margin-bottom: 10px;">Problem 1</div>
        <h3 class="ep-font-display" style="font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 12px;">Inconsistent Lead Flow</h3>
        <p style="font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 20px;">Feast or famine cycles. Some months you're turning work away, others you're desperate for any job. No system = no predictability.</p>
        <div style="background: rgba(250,152,47,0.08); border: 1px solid rgba(250,152,47,0.2); border-radius: 10px; padding: 14px; text-align: center;">
          <div class="ep-font-display" style="font-size: 32px; font-weight: 900; color: #FA982F;">67%</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px;">of contractors struggle with lead consistency</div>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid #F54A48; border-radius: 16px; padding: 32px;">
        <div style="font-size: 32px; margin-bottom: 16px;">💸</div>
        <div class="ep-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #F54A48; margin-bottom: 10px;">Problem 2</div>
        <h3 class="ep-font-display" style="font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 12px;">Wasted Marketing Spend</h3>
        <p style="font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 20px;">Agencies charging $3K–$10K/month with nothing to show. Clicks, impressions, and "brand awareness" — but zero booked jobs on the calendar.</p>
        <div style="background: rgba(245,74,72,0.08); border: 1px solid rgba(245,74,72,0.2); border-radius: 10px; padding: 14px; text-align: center;">
          <div class="ep-font-display" style="font-size: 32px; font-weight: 900; color: #F54A48;">$3.2K</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px;">wasted monthly on ineffective marketing</div>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-top: 3px solid #48BB78; border-radius: 16px; padding: 32px;">
        <div style="font-size: 32px; margin-bottom: 16px;">🤝</div>
        <div class="ep-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #48BB78; margin-bottom: 10px;">Problem 3</div>
        <h3 class="ep-font-display" style="font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 12px;">Referral Dependency</h3>
        <p style="font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 20px;">Waiting on word of mouth is not a growth strategy. When referrals dry up — after a bad review, a slow season, or a key crew member leaves — your pipeline evaporates.</p>
        <div style="background: rgba(72,187,120,0.08); border: 1px solid rgba(72,187,120,0.2); border-radius: 10px; padding: 14px; text-align: center;">
          <div class="ep-font-display" style="font-size: 32px; font-weight: 900; color: #48BB78;">43%</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px;">over-dependent on referrals for new work</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  costSection: {
    label: "Real Cost Stats Block",
    code: `<section class="ep-section" style="background: #070820;">
  <div class="ep-inner" style="max-width: 820px;">
    <h2 class="ep-font-display" style="font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; color: #fff; text-align: center; margin-bottom: 36px;">
      The Real Cost of an <span style="color: #FA982F;">Empty Pipeline</span>
    </h2>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 48px;">
      <div class="ep-grid-stats" style="display: grid; grid-template-columns: repeat(3,1fr); gap: 40px; text-align: center;">
        <div>
          <div class="ep-font-display" style="font-size: 56px; font-weight: 900; color: #FA982F; margin-bottom: 10px;">$3.2K</div>
          <div style="font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6;">Wasted monthly on ineffective marketing</div>
        </div>
        <div>
          <div class="ep-font-display" style="font-size: 56px; font-weight: 900; color: #F54A48; margin-bottom: 10px;">67%</div>
          <div style="font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6;">Struggle with lead consistency</div>
        </div>
        <div>
          <div class="ep-font-display" style="font-size: 56px; font-weight: 900; color: #48BB78; margin-bottom: 10px;">43%</div>
          <div style="font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6;">Over-dependent on referrals</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  cta: {
    label: "CTA",
    code: `<section class="ep-section" style="background: #0D0F33; text-align: center;">
  <div class="ep-inner" style="max-width: 600px;">
    <h2 class="ep-font-display" style="font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; color: #fff; margin-bottom: 16px;">Ready to Fill Your Pipeline?</h2>
    <p style="font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 32px;">See exactly how much revenue you're leaving on the table — and what it takes to fix it.</p>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg,#FA982F,#F54A48); color: #fff; font-family: 'JetBrains Mono',monospace; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; padding: 16px 32px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 24px rgba(250,152,47,0.3);">
      Calculate My Revenue Leak →
    </a>
  </div>
</section>`
  },
};

export default function ExportAttractEmptyPipeline() {
  const [copied, setCopied] = useState(null);
  const [open, setOpen] = useState(null);

  const copy = (key, code) => {
    navigator.clipboard.writeText(code);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const fullPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Empty Pipeline Problem — ShiFt Attract</title>
  ${SECTIONS.globalStyles.code}
</head>
<body>
${SECTIONS.hero.code}
${SECTIONS.problems.code}
${SECTIONS.costSection.code}
${SECTIONS.cta.code}
</body>
</html>`;

  return (
    <div style={{ background: "#070820", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800;900&family=JetBrains+Mono:wght@500;700&family=DM+Sans:wght@400;500&display=swap');`}</style>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>Export Package</div>
          <h1 style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 36, fontWeight: 900, letterSpacing: "-1px", marginBottom: 8 }}>Empty Pipeline Page</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>ShiFt Attract · Empty Pipeline Problem</p>
        </div>

        <button onClick={() => copy("full", fullPage)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FA982F,#F54A48)", color: "#fff", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "12px 24px", borderRadius: 8, border: "none", cursor: "pointer", marginBottom: 32 }}>
          {copied === "full" ? "✓ Copied!" : "Copy Full Page HTML"}
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {Object.entries(SECTIONS).map(([key, s]) => (
            <div key={key} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", cursor: "pointer" }} onClick={() => setOpen(open === key ? null : key)}>
                <span style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontWeight: 700, fontSize: 15 }}>{s.label}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={e => { e.stopPropagation(); copy(key, s.code); }} style={{ background: "rgba(250,152,47,0.12)", border: "1px solid rgba(250,152,47,0.3)", color: "#FA982F", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 700, padding: "6px 14px", borderRadius: 6, cursor: "pointer" }}>
                    {copied === key ? "✓ Copied" : "Copy"}
                  </button>
                  <button style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: "6px 14px", borderRadius: 6, cursor: "pointer" }}>
                    {open === key ? "▲" : "▼"}
                  </button>
                </div>
              </div>
              {open === key && (
                <pre style={{ padding: "0 20px 20px", fontSize: 12, color: "rgba(255,255,255,0.6)", overflowX: "auto", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{s.code}</pre>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: "20px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Instructions</div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>Use "Copy Full Page HTML" for standalone delivery. For WordPress/Elementor, paste Global Styles in theme header, drop each section into HTML blocks. Requires NeuralOS Attract global nav component.</p>
        </div>
      </div>
    </div>
  );
}