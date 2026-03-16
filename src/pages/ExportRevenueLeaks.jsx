import React, { useState } from "react";

const SECTIONS = {
  globalStyles: {
    label: "Global Styles & Fonts",
    code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root { --coral: #F54A48; --orange: #FA982F; --green: #48BB78; --grad: linear-gradient(135deg,#F54A48,#FA982F); --surface: rgba(255,255,255,0.04); --border: rgba(255,255,255,0.08); }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #070820; color: #fff; font-family: 'DM Sans', sans-serif; }
.rl-font-display { font-family: 'Montserrat Alternates', sans-serif; }
.rl-font-mono { font-family: 'JetBrains Mono', monospace; }
.rl-grad-text { background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.rl-section { padding: 96px 40px; }
.rl-inner { max-width: 1140px; margin: 0 auto; }
.rl-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
.rl-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
@media (max-width: 768px) { .rl-section { padding: 64px 20px; } .rl-grid-2 { grid-template-columns: 1fr !important; } }
</style>`
  },
  hero: {
    label: "Hero",
    code: `<section class="rl-section" style="background: #070820; padding-top: 140px; text-align: center;">
  <div class="rl-inner">
    <h1 class="rl-font-display" style="font-size: clamp(36px,6vw,72px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 20px;">
      The Three Revenue Leaks <span class="rl-grad-text">Draining Your Business</span>
    </h1>
    <p style="font-size: 19px; color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; line-height: 1.7;">
      You're losing $35K–$100K+ every month. Here's exactly where.
    </p>
  </div>
</section>`
  },
  leak1: {
    label: "Leak #1 — Missed Calls",
    code: `<section class="rl-section" style="background: #070820;">
  <div class="rl-inner rl-grid-2">
    <div>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 56px; height: 56px; border-radius: 12px; background: rgba(245,74,72,0.12); display: flex; align-items: center; justify-content: center; font-size: 24px;">📞</div>
        <div>
          <div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4);">Leak #1</div>
          <div class="rl-font-display" style="font-size: 24px; font-weight: 800; color: #fff;">Missed Calls</div>
        </div>
      </div>
      <h3 class="rl-font-display" style="font-size: clamp(28px,4vw,44px); font-weight: 900; letter-spacing: -1px; color: #fff; margin-bottom: 16px;">42% of Leads Call After Hours</h3>
      <p style="font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 20px;">Your phone rings at 6:47 PM. A homeowner with hail damage wants an inspection. They leave a voicemail. You call back at 9 AM the next day. Too late — your competitor already booked them at 7:12 PM.</p>
      <div style="background: rgba(245,74,72,0.08); border: 1px solid rgba(245,74,72,0.2); border-radius: 14px; padding: 22px; margin-bottom: 24px;">
        <div class="rl-font-display" style="font-size: 42px; font-weight: 900; color: #F54A48; margin-bottom: 6px;">$12K–$35K</div>
        <div style="color: rgba(255,255,255,0.7); font-size: 15px;">Average monthly revenue lost to missed calls</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; gap: 10px; align-items: flex-start;"><span style="color: #F54A48; margin-top: 2px;">⏱</span><div><div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 2px;">Industry Stat</div><div style="font-size: 14px; color: rgba(255,255,255,0.7);">78% of buyers choose the first responder</div></div></div>
        <div style="display: flex; gap: 10px; align-items: flex-start;"><span style="color: #F54A48; margin-top: 2px;">📉</span><div><div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 2px;">Your Reality</div><div style="font-size: 14px; color: rgba(255,255,255,0.7);">Average callback time: 4.2 hours</div></div></div>
        <div style="display: flex; gap: 10px; align-items: flex-start;"><span style="color: #F54A48; margin-top: 2px;">💵</span><div><div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 2px;">Cost Per Miss</div><div style="font-size: 14px; color: rgba(255,255,255,0.7);">$2,400–$8,500 per missed call</div></div></div>
      </div>
    </div>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px;">
      <div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4); margin-bottom: 20px;">Calculate Your Missed Call Cost</div>
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div><label style="font-size: 14px; color: rgba(255,255,255,0.7); display: block; margin-bottom: 8px;">Monthly incoming calls</label><input type="number" placeholder="100" style="width: 100%; padding: 12px 16px; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fff; font-size: 15px;" /></div>
        <div><label style="font-size: 14px; color: rgba(255,255,255,0.7); display: block; margin-bottom: 8px;">Average job value</label><input type="number" placeholder="12000" style="width: 100%; padding: 12px 16px; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fff; font-size: 15px;" /></div>
        <div style="background: linear-gradient(135deg,rgba(245,74,72,0.12),rgba(250,152,47,0.12)); border: 1px solid rgba(245,74,72,0.3); border-radius: 12px; padding: 20px;"><div style="font-size: 14px; color: rgba(255,255,255,0.7); margin-bottom: 6px;">Estimated monthly loss:</div><div class="rl-font-display" style="font-size: 32px; font-weight: 900; color: #F54A48;">$28,400</div></div>
        <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" style="display: block; text-align: center; background: linear-gradient(135deg,#F54A48,#FA982F); color: #fff; font-family: 'JetBrains Mono',monospace; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; padding: 14px 24px; border-radius: 10px; text-decoration: none;">Get Full Revenue Audit</a>
      </div>
    </div>
  </div>
</section>`
  },
  leak2: {
    label: "Leak #2 — Junk Leads",
    code: `<section class="rl-section" style="background: #0D0F33;">
  <div class="rl-inner rl-grid-2">
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px;">
      <div class="rl-font-display" style="font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 20px;">The Hidden Cost of Bad Leads</div>
      <div style="display: flex; flex-direction: column; gap: 0;">
        ${[["Lead cost","$45–$250 per lead"],["Sales team time","2.5 hrs per junk lead"],["Qualification rate","Only 27% are qualified"],["Close rate on junk","2%"]].map(([l,v]) => `<div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.06);"><span style="font-size: 14px; color: rgba(255,255,255,0.6);">${l}</span><span style="font-family:'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: #FA982F;">${v}</span></div>`).join("\n        ")}
      </div>
    </div>
    <div>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 56px; height: 56px; border-radius: 12px; background: rgba(250,152,47,0.12); display: flex; align-items: center; justify-content: center; font-size: 24px;">🗑</div>
        <div>
          <div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4);">Leak #2</div>
          <div class="rl-font-display" style="font-size: 24px; font-weight: 800; color: #fff;">Junk Leads</div>
        </div>
      </div>
      <h3 class="rl-font-display" style="font-size: clamp(28px,4vw,44px); font-weight: 900; letter-spacing: -1px; color: #fff; margin-bottom: 16px;">You're Paying for Leads That Will Never Buy</h3>
      <p style="font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 20px;">Tire kickers. Price shoppers. People "just looking." Your sales team wastes hours chasing leads that were never going to convert.</p>
      <div style="background: rgba(250,152,47,0.08); border: 1px solid rgba(250,152,47,0.2); border-radius: 14px; padding: 22px; margin-bottom: 20px;">
        <div class="rl-font-display" style="font-size: 42px; font-weight: 900; color: #FA982F; margin-bottom: 6px;">$8K–$25K</div>
        <div style="color: rgba(255,255,255,0.7); font-size: 15px;">Average monthly cost of junk leads</div>
      </div>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px;">
        <p style="font-size: 14px; font-style: italic; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 14px;">"We were spending $6,500/month on leads. Only 18 out of 120 were actually qualified. ShiFt's AI filters out the garbage before it hits my team."</p>
        <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px;">
          <div style="font-weight: 600; font-size: 14px; color: #fff;">Michael R.</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.4);">Storm Pros Roofing, Houston TX</div>
        </div>
      </div>
    </div>
  </div>
</section>`
  },
  leak3: {
    label: "Leak #3 — Invisible Buyers",
    code: `<section class="rl-section" style="background: #070820;">
  <div class="rl-inner rl-grid-2">
    <div>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <div style="width: 56px; height: 56px; border-radius: 12px; background: rgba(72,187,120,0.12); display: flex; align-items: center; justify-content: center; font-size: 24px;">👻</div>
        <div>
          <div class="rl-font-mono" style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255,255,255,0.4);">Leak #3</div>
          <div class="rl-font-display" style="font-size: 24px; font-weight: 800; color: #fff;">Invisible Buyers</div>
        </div>
      </div>
      <h3 class="rl-font-display" style="font-size: clamp(28px,4vw,44px); font-weight: 900; letter-spacing: -1px; color: #fff; margin-bottom: 16px;">High-Intent Buyers You Never See</h3>
      <p style="font-size: 16px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 20px;">They check your website at 11 PM. They read reviews. They're ready to buy. But they don't fill out a form or leave a voicemail. By morning, they've booked with someone who responded faster.</p>
      <div style="background: rgba(72,187,120,0.08); border: 1px solid rgba(72,187,120,0.2); border-radius: 14px; padding: 22px; margin-bottom: 20px;">
        <div class="rl-font-display" style="font-size: 42px; font-weight: 900; color: #48BB78; margin-bottom: 6px;">$15K–$40K</div>
        <div style="color: rgba(255,255,255,0.7); font-size: 15px;">Average monthly revenue from invisible buyers</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px;"><div class="rl-font-display rl-grad-text" style="font-size: 26px; font-weight: 900; margin-bottom: 4px;">67%</div><div style="font-size: 13px; color: rgba(255,255,255,0.5);">of website visitors never contact you</div></div>
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px;"><div class="rl-font-display rl-grad-text" style="font-size: 26px; font-weight: 900; margin-bottom: 4px;">4.2 hours</div><div style="font-size: 13px; color: rgba(255,255,255,0.5);">industry average response time</div></div>
      </div>
    </div>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px;">
      <div class="rl-font-display" style="font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 14px;">The Monopoly Window</div>
      <p style="font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 20px;">Research shows you have a 5-minute window to capture a hot lead before they move on. After 5 minutes, conversion odds drop by 80%.</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${[["0–5 min","Close rate: 78%",true],["5–30 min","Close rate: 42%",false],["30–60 min","Close rate: 18%",false],["1–4 hours","Close rate: 7%",false],["4+ hours","Close rate: 2%",false]].map(([t,r,hi]) => `<div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; border-radius: 8px; background: ${hi?"rgba(72,187,120,0.12)":"rgba(255,255,255,0.02)"}; border: 1px solid ${hi?"rgba(72,187,120,0.3)":"rgba(255,255,255,0.06)"}"><span style="font-family:'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: ${hi?"#48BB78":"rgba(255,255,255,0.7)"};">${t}</span><span style="font-size: 13px; color: ${hi?"#48BB78":"rgba(255,255,255,0.5)"};">${r}</span></div>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>`
  },
  cta: {
    label: "CTA",
    code: `<section class="rl-section" style="background: #0D0F33; text-align: center;">
  <div class="rl-inner" style="max-width: 600px;">
    <h2 class="rl-font-display" style="font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; color: #fff; margin-bottom: 16px;">Ready to Plug These Leaks?</h2>
    <p style="font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 32px;">See exactly how much revenue you're losing — and how much ShiFt can recover.</p>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg,#F54A48,#FA982F); color: #fff; font-family: 'JetBrains Mono',monospace; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; padding: 16px 32px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 24px rgba(245,74,72,0.3);">
      Calculate My Revenue Leak →
    </a>
  </div>
</section>`
  },
};

export default function ExportRevenueLeaks() {
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
  <title>Revenue Leaks — ShiFt Convert</title>
  ${SECTIONS.globalStyles.code}
</head>
<body>
${SECTIONS.hero.code}
${SECTIONS.leak1.code}
${SECTIONS.leak2.code}
${SECTIONS.leak3.code}
${SECTIONS.cta.code}
</body>
</html>`;

  return (
    <div style={{ background: "#070820", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800;900&family=JetBrains+Mono:wght@500;700&family=DM+Sans:wght@400;500&display=swap');`}</style>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>Export Package</div>
          <h1 style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 36, fontWeight: 900, letterSpacing: "-1px", marginBottom: 8 }}>Revenue Leaks Page</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>ShiFt Convert · 3 Revenue Leaks</p>
        </div>

        <button onClick={() => copy("full", fullPage)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", padding: "12px 24px", borderRadius: 8, border: "none", cursor: "pointer", marginBottom: 32 }}>
          {copied === "full" ? "✓ Copied!" : "Copy Full Page HTML"}
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {Object.entries(SECTIONS).map(([key, s]) => (
            <div key={key} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", cursor: "pointer" }} onClick={() => setOpen(open === key ? null : key)}>
                <span style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontWeight: 700, fontSize: 15 }}>{s.label}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={e => { e.stopPropagation(); copy(key, s.code); }} style={{ background: "rgba(245,74,72,0.12)", border: "1px solid rgba(245,74,72,0.3)", color: "#F54A48", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 700, padding: "6px 14px", borderRadius: 6, cursor: "pointer" }}>
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
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>Use "Copy Full Page HTML" for standalone delivery. For WordPress/Elementor, paste Global Styles in theme header, then drop each section into an HTML block. Requires NeuralOS global nav.</p>
        </div>
      </div>
    </div>
  );
}