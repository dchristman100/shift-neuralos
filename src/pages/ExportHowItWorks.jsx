import React, { useState } from "react";

const SECTIONS = {
  globalStyles: {
    label: "Global Styles & Fonts",
    code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --navy: #0D0F33;
  --coral: #F54A48;
  --orange: #FA982F;
  --green: #48BB78;
  --grad: linear-gradient(135deg, #F54A48, #FA982F);
  --surface: rgba(255,255,255,0.04);
  --border: rgba(255,255,255,0.08);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #070820; color: #fff; font-family: 'DM Sans', sans-serif; }
.hiw-font-display { font-family: 'Montserrat Alternates', sans-serif; }
.hiw-font-mono { font-family: 'JetBrains Mono', monospace; }
.hiw-font-body { font-family: 'DM Sans', sans-serif; }
.hiw-grad-text { background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hiw-section { padding: 96px 40px; max-width: 1140px; margin: 0 auto; }
.hiw-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
@media (max-width: 768px) { .hiw-section { padding: 64px 20px; } .hiw-grid-2 { grid-template-columns: 1fr !important; } }
</style>`
  },
  hero: {
    label: "Hero — Flow Steps",
    code: `<section style="padding: 120px 40px 80px; text-align: center; background: #070820;">
  <div style="max-width: 1140px; margin: 0 auto;">
    <h1 class="hiw-font-display" style="font-size: clamp(36px,6vw,72px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 20px;">
      How ShiFt Convert <span class="hiw-grad-text">Plugs Your Revenue Leaks</span>
    </h1>
    <p class="hiw-font-body" style="font-size: 19px; color: rgba(255,255,255,0.6); margin-bottom: 48px;">
      From first contact to booked appointment — without lifting a finger
    </p>
    <!-- Flow Steps -->
    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;">
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 20px; font-family: 'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: #fff;">Lead Arrives</div>
      <span style="color: rgba(255,255,255,0.3); font-size: 18px;">→</span>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 20px; font-family: 'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: #fff;">AI Responds (30 sec)</div>
      <span style="color: rgba(255,255,255,0.3); font-size: 18px;">→</span>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 20px; font-family: 'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: #fff;">AI Qualifies</div>
      <span style="color: rgba(255,255,255,0.3); font-size: 18px;">→</span>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px 20px; font-family: 'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: #fff;">AI Books</div>
      <span style="color: rgba(255,255,255,0.3); font-size: 18px;">→</span>
      <div style="background: linear-gradient(135deg,rgba(245,74,72,0.12),rgba(250,152,47,0.12)); border: 1px solid rgba(245,74,72,0.3); border-radius: 10px; padding: 10px 20px; font-family: 'JetBrains Mono',monospace; font-size: 13px; font-weight: 600; color: #F54A48;">You Close</div>
    </div>
  </div>
</section>`
  },
  stage1: {
    label: "Stage 1 — Instant Capture",
    code: `<section style="padding: 96px 40px; background: #070820;">
  <div class="hiw-grid-2" style="max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
    <div>
      <div style="display: inline-flex; align-items: center; background: rgba(245,74,72,0.12); color: #F54A48; border: 1px solid rgba(245,74,72,0.3); border-radius: 999px; padding: 6px 16px; font-family: 'JetBrains Mono',monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px;">Stage 1</div>
      <h2 class="hiw-font-display" style="font-size: clamp(32px,4vw,52px); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; color: #fff; margin-bottom: 20px;">Instant Capture</h2>
      <p class="hiw-font-body" style="font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 28px;">Every lead that comes in — phone, web form, text, Facebook — gets an instant AI response in under 30 seconds. No voicemail. No "we'll call you back." Just immediate engagement.</p>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 15px;">⚡ Phone calls</div>
        <div style="display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 15px;">⚡ Web forms</div>
        <div style="display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 15px;">⚡ Text messages</div>
        <div style="display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 15px;">⚡ Facebook Messenger</div>
        <div style="display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 15px;">⚡ Google Ads</div>
      </div>
    </div>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 48px; min-height: 360px; display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 100px; opacity: 0.25;">📞</div>
    </div>
  </div>
</section>`
  },
  stage2: {
    label: "Stage 2 — AI Qualification",
    code: `<section style="padding: 96px 40px; background: #0D0F33;">
  <div class="hiw-grid-2" style="max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 48px; min-height: 360px; display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 100px; opacity: 0.25;">🧠</div>
    </div>
    <div>
      <div style="display: inline-flex; align-items: center; background: rgba(250,152,47,0.12); color: #FA982F; border: 1px solid rgba(250,152,47,0.3); border-radius: 999px; padding: 6px 16px; font-family: 'JetBrains Mono',monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px;">Stage 2</div>
      <h2 class="hiw-font-display" style="font-size: clamp(32px,4vw,52px); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; color: #fff; margin-bottom: 20px;">AI Qualification</h2>
      <p class="hiw-font-body" style="font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 24px;">Our AI asks the right questions to separate high-intent buyers from tire kickers. Lead scoring happens in real-time, so your sales team only talks to qualified prospects.</p>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px;">
        <div style="font-family: 'JetBrains Mono',monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); margin-bottom: 14px;">Sample AI Questions:</div>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.7);">
          <li>• "What type of roofing service do you need?"</li>
          <li>• "When did you notice the issue?"</li>
          <li>• "Is this for insurance or out-of-pocket?"</li>
          <li>• "What's your timeframe for getting this done?"</li>
        </ul>
      </div>
    </div>
  </div>
</section>`
  },
  stage3: {
    label: "Stage 3 — Automated Booking",
    code: `<section style="padding: 96px 40px; background: #070820;">
  <div class="hiw-grid-2" style="max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;">
    <div>
      <div style="display: inline-flex; align-items: center; background: rgba(72,187,120,0.12); color: #48BB78; border: 1px solid rgba(72,187,120,0.3); border-radius: 999px; padding: 6px 16px; font-family: 'JetBrains Mono',monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 20px;">Stage 3</div>
      <h2 class="hiw-font-display" style="font-size: clamp(32px,4vw,52px); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; color: #fff; margin-bottom: 20px;">Automated Booking</h2>
      <p class="hiw-font-body" style="font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.75; margin-bottom: 24px;">Qualified leads get booked instantly onto your calendar. No back-and-forth emails. No phone tag. Just confirmed appointments with automated reminders and follow-ups.</p>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px;">
          <div class="hiw-font-display" style="font-size: 28px; font-weight: 900; background: linear-gradient(135deg,#F54A48,#FA982F); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 4px;">3.2x</div>
          <div style="font-size: 13px; color: rgba(255,255,255,0.5);">More appointments booked</div>
        </div>
        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px;">
          <div class="hiw-font-display" style="font-size: 28px; font-weight: 900; background: linear-gradient(135deg,#F54A48,#FA982F); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 4px;">89%</div>
          <div style="font-size: 13px; color: rgba(255,255,255,0.5);">Average show rate</div>
        </div>
      </div>
    </div>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 48px; min-height: 360px; display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 100px; opacity: 0.25;">📅</div>
    </div>
  </div>
</section>`
  },
  integrations: {
    label: "Integrations Grid",
    code: `<section style="padding: 96px 40px; background: #0D0F33; text-align: center;">
  <div style="max-width: 1140px; margin: 0 auto;">
    <h2 class="hiw-font-display" style="font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; color: #fff; margin-bottom: 16px;">Works With Your Existing Tools</h2>
    <p class="hiw-font-body" style="font-size: 17px; color: rgba(255,255,255,0.6); margin-bottom: 48px;">Setup in 24 hours, not 24 days.</p>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 800px; margin: 0 auto 40px;">
      ${["GoHighLevel","Calendly","Google Calendar","Zapier","Slack","HubSpot","Salesforce","Zoom"].map(t => `<div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; font-family: 'Montserrat Alternates',sans-serif; font-weight: 600; font-size: 14px;">${t}</div>`).join("\n      ")}
    </div>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg,#F54A48,#FA982F); color: #fff; font-family: 'JetBrains Mono',monospace; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; padding: 16px 32px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 24px rgba(245,74,72,0.3);">
      See It in Action →
    </a>
  </div>
</section>`
  },
};

export default function ExportHowItWorks() {
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
  <title>How ShiFt Convert Works</title>
  ${SECTIONS.globalStyles.code}
</head>
<body>
${SECTIONS.hero.code}
${SECTIONS.stage1.code}
${SECTIONS.stage2.code}
${SECTIONS.stage3.code}
${SECTIONS.integrations.code}
</body>
</html>`;

  return (
    <div style={{ background: "#070820", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800;900&family=JetBrains+Mono:wght@500;700&family=DM+Sans:wght@400;500&display=swap');`}</style>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>Export Package</div>
          <h1 style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 36, fontWeight: 900, letterSpacing: "-1px", marginBottom: 8 }}>How It Works Page</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>ShiFt Convert · 3-Stage Process Page</p>
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
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>Use "Copy Full Page HTML" for a standalone page. For WordPress/Elementor, paste Global Styles in theme header, then drop individual sections into HTML blocks. Requires the NeuralOS global nav component to be present.</p>
        </div>
      </div>
    </div>
  );
}