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
.res-font-display { font-family: 'Montserrat Alternates', sans-serif; }
.res-font-mono { font-family: 'JetBrains Mono', monospace; }
.res-grad-text { background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.res-section { padding: 96px 40px; }
.res-inner { max-width: 1140px; margin: 0 auto; }
@media (max-width: 768px) { .res-section { padding: 64px 20px; } .res-grid-4 { grid-template-columns: 1fr 1fr !important; } .res-grid-2 { grid-template-columns: 1fr !important; } }
</style>`
  },
  hero: {
    label: "Hero — Case Study Badge + Headline",
    code: `<section class="res-section" style="background: #070820; padding-top: 140px; text-align: center;">
  <div class="res-inner">
    <div style="display: inline-flex; align-items: center; background: rgba(245,74,72,0.12); color: #F54A48; border: 1px solid rgba(245,74,72,0.3); border-radius: 999px; padding: 6px 18px; font-family: 'JetBrains Mono',monospace; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 24px;">Case Study</div>
    <h1 class="res-font-display" style="font-size: clamp(36px,6vw,72px); font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 20px;">
      From $750K to $7M in <span class="res-grad-text">6 Years</span>
    </h1>
    <p style="font-size: 19px; color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; line-height: 1.7;">
      How Titan Roofing Services went from missing half their leads to dominating Dallas
    </p>
  </div>
</section>`
  },
  stats: {
    label: "Stats Grid",
    code: `<section class="res-section" style="background: #070820;">
  <div class="res-inner">
    <div class="res-grid-4" style="display: grid; grid-template-columns: repeat(4,1fr); gap: 20px;">
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; text-align: center;">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(245,74,72,0.12); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 14px;">💵</div>
        <div class="res-font-display" style="font-size: 40px; font-weight: 900; color: #F54A48; margin-bottom: 6px;">$7M</div>
        <div style="font-size: 13px; color: rgba(255,255,255,0.5);">Annual Revenue</div>
      </div>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; text-align: center;">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(250,152,47,0.12); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 14px;">📈</div>
        <div class="res-font-display" style="font-size: 40px; font-weight: 900; color: #FA982F; margin-bottom: 6px;">34%</div>
        <div style="font-size: 13px; color: rgba(255,255,255,0.5);">Close Rate Increase</div>
      </div>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; text-align: center;">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(72,187,120,0.12); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 14px;">📅</div>
        <div class="res-font-display" style="font-size: 40px; font-weight: 900; color: #48BB78; margin-bottom: 6px;">89%</div>
        <div style="font-size: 13px; color: rgba(255,255,255,0.5);">Show Rate</div>
      </div>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; text-align: center;">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(245,74,72,0.12); display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto 14px;">👥</div>
        <div class="res-font-display" style="font-size: 40px; font-weight: 900; color: #F54A48; margin-bottom: 6px;">3.2x</div>
        <div style="font-size: 13px; color: rgba(255,255,255,0.5);">More Appointments</div>
      </div>
    </div>
  </div>
</section>`
  },
  story: {
    label: "The Story — Problem + Breaking Point",
    code: `<section class="res-section" style="background: #0D0F33;">
  <div class="res-inner" style="max-width: 820px;">
    <h2 class="res-font-display" style="font-size: clamp(26px,3.5vw,42px); font-weight: 800; letter-spacing: -1px; color: #fff; margin-bottom: 24px;">The Problem: Revenue Slipping Through the Cracks</h2>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 36px; margin-bottom: 40px;">
      <div style="font-size: 48px; opacity: 0.2; color: #F54A48; margin-bottom: 16px;">"</div>
      <p style="font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 16px;">"In 2019, we were doing $750K in revenue. Not bad, but we knew we were leaving money on the table. We'd get 40–50 leads a week, but only connect with maybe 20 of them. The rest went straight to voicemail."</p>
      <p style="font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 24px;">"We tried hiring more salespeople, but they couldn't work 24/7. Storm season was the worst — leads would flood in at night and on weekends, and by the time we called back Monday morning, they'd already signed with someone else."</p>
      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; display: flex; align-items: center; gap: 16px;">
        <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg,#F54A48,#FA982F); display: flex; align-items: center; justify-content: center; font-family: 'Montserrat Alternates',sans-serif; font-weight: 800; font-size: 16px;">JT</div>
        <div><div style="font-weight: 600; color: #fff; margin-bottom: 2px;">Jake Torres</div><div style="font-size: 13px; color: rgba(255,255,255,0.4);">Owner, Titan Roofing Services</div></div>
      </div>
    </div>

    <h2 class="res-font-display" style="font-size: clamp(26px,3.5vw,42px); font-weight: 800; letter-spacing: -1px; color: #fff; margin-bottom: 20px;">The Breaking Point: $47K Lost in One Month</h2>
    <p style="font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px;">May 2020 was a massive hail storm in Dallas. Leads were pouring in — over 200 in two weeks. Jake's team was overwhelmed, working 12-hour days but still couldn't keep up.</p>
    <div style="background: rgba(245,74,72,0.08); border: 1px solid rgba(245,74,72,0.2); border-radius: 14px; padding: 24px; margin-bottom: 20px;">
      <div style="font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 14px;">Breakdown of that month:</div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; justify-content: space-between;"><span style="font-size: 14px; color: rgba(255,255,255,0.6);">Total leads received</span><span style="font-family:'JetBrains Mono',monospace; font-weight: 600; color: #fff;">213</span></div>
        <div style="display: flex; justify-content: space-between;"><span style="font-size: 14px; color: rgba(255,255,255,0.6);">Leads contacted within 5 minutes</span><span style="font-family:'JetBrains Mono',monospace; font-weight: 600; color: #fff;">34 (16%)</span></div>
        <div style="display: flex; justify-content: space-between;"><span style="font-size: 14px; color: rgba(255,255,255,0.6);">Leads never reached</span><span style="font-family:'JetBrains Mono',monospace; font-weight: 600; color: #EF4444;">89 (42%)</span></div>
        <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1);"><span style="font-size: 14px; font-weight: 600; color: #fff;">Estimated revenue lost</span><span class="res-font-display" style="font-size: 22px; font-weight: 900; color: #F54A48;">$47,200</span></div>
      </div>
    </div>
    <p style="font-size: 16px; font-style: italic; color: rgba(255,255,255,0.6); line-height: 1.7;">"That was my wake-up call. We were literally watching money walk out the door."</p>
  </div>
</section>`
  },
  results: {
    label: "Results — 6 Years of Growth",
    code: `<section class="res-section" style="background: #070820;">
  <div class="res-inner" style="max-width: 820px;">
    <h2 class="res-font-display" style="font-size: clamp(26px,3.5vw,42px); font-weight: 800; letter-spacing: -1px; color: #fff; margin-bottom: 20px;">The Solution: ShiFt Convert Goes Live</h2>
    <p style="font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px;">Jake implemented ShiFt in July 2020. The AI was trained on Titan's specific services, pricing, and sales process. Within 48 hours, it was live.</p>
    <div style="display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 40px;">
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; text-align: center;"><div class="res-grad-text res-font-display" style="font-size: 24px; font-weight: 900; margin-bottom: 6px;">22 seconds</div><div style="font-size: 12px; color: rgba(255,255,255,0.4);">First AI response</div></div>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; text-align: center;"><div class="res-grad-text res-font-display" style="font-size: 24px; font-weight: 900; margin-bottom: 6px;">100%</div><div style="font-size: 12px; color: rgba(255,255,255,0.4);">Leads captured (first week)</div></div>
      <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; text-align: center;"><div class="res-grad-text res-font-display" style="font-size: 24px; font-weight: 900; margin-bottom: 6px;">36 hours</div><div style="font-size: 12px; color: rgba(255,255,255,0.4);">Setup time</div></div>
    </div>

    <h2 class="res-font-display" style="font-size: clamp(26px,3.5vw,42px); font-weight: 800; letter-spacing: -1px; color: #fff; margin-bottom: 20px;">The Results: 6 Years of Compound Growth</h2>
    <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; margin-bottom: 24px;">
      <div style="display: flex; flex-direction: column; gap: 0;">
        <div style="padding-bottom: 20px;"><div style="font-weight: 700; color: #fff; margin-bottom: 12px; font-family: 'Montserrat Alternates',sans-serif; font-size: 16px;">Year 1 (2020–2021)</div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div><div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Revenue</div><div style="font-family:'JetBrains Mono',monospace; font-size: 20px; font-weight: 700; background: linear-gradient(135deg,#F54A48,#FA982F); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$750K → $1.8M</div></div><div><div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Lead capture rate</div><div style="font-family:'JetBrains Mono',monospace; font-size: 20px; font-weight: 700; color: #fff;">58% → 98%</div></div></div></div>
        <div style="padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.06);"><div style="font-weight: 700; color: #fff; margin-bottom: 12px; font-family: 'Montserrat Alternates',sans-serif; font-size: 16px;">Year 3 (2022–2023)</div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div><div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Revenue</div><div style="font-family:'JetBrains Mono',monospace; font-size: 20px; font-weight: 700; background: linear-gradient(135deg,#F54A48,#FA982F); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$4.2M</div></div><div><div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Team size</div><div style="font-family:'JetBrains Mono',monospace; font-size: 20px; font-weight: 700; color: #fff;">4 → 12 salespeople</div></div></div></div>
        <div style="padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06);"><div style="font-weight: 700; color: #fff; margin-bottom: 12px; font-family: 'Montserrat Alternates',sans-serif; font-size: 16px;">Today (2026)</div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"><div><div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Revenue</div><div style="font-family:'JetBrains Mono',monospace; font-size: 24px; font-weight: 700; background: linear-gradient(135deg,#F54A48,#FA982F); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$7M+</div></div><div><div style="font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 4px;">ROI on ShiFt</div><div style="font-family:'JetBrains Mono',monospace; font-size: 24px; font-weight: 700; background: linear-gradient(135deg,#F54A48,#FA982F); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">427%</div></div></div></div>
      </div>
    </div>

    <div style="background: rgba(245,74,72,0.06); border: 1px solid rgba(245,74,72,0.2); border-radius: 16px; padding: 32px;">
      <div style="font-size: 48px; opacity: 0.2; color: #F54A48; margin-bottom: 16px;">"</div>
      <p style="font-size: 18px; color: #fff; line-height: 1.75; margin-bottom: 14px;">"ShiFt didn't just fix our lead problem — it became the foundation of our entire growth strategy. Every lead gets handled. Every opportunity gets captured. My team focuses on closing, not chasing."</p>
      <p style="font-size: 15px; font-style: italic; color: rgba(255,255,255,0.5);">— Jake Torres, February 2026</p>
    </div>
  </div>
</section>`
  },
  cta: {
    label: "CTA",
    code: `<section class="res-section" style="background: #0D0F33; text-align: center;">
  <div class="res-inner" style="max-width: 600px;">
    <h2 class="res-font-display" style="font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; color: #fff; margin-bottom: 16px;">Ready to Write Your Success Story?</h2>
    <p style="font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 32px;">See what ShiFt can do for your roofing business.</p>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg,#F54A48,#FA982F); color: #fff; font-family: 'JetBrains Mono',monospace; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; padding: 16px 32px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 24px rgba(245,74,72,0.3);">
      Calculate My Revenue Opportunity →
    </a>
  </div>
</section>`
  },
};

export default function ExportResults() {
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
  <title>Results — Titan Roofing Case Study · ShiFt</title>
  ${SECTIONS.globalStyles.code}
</head>
<body>
${SECTIONS.hero.code}
${SECTIONS.stats.code}
${SECTIONS.story.code}
${SECTIONS.results.code}
${SECTIONS.cta.code}
</body>
</html>`;

  return (
    <div style={{ background: "#070820", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800;900&family=JetBrains+Mono:wght@500;700&family=DM+Sans:wght@400;500&display=swap');`}</style>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#FA982F", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>Export Package</div>
          <h1 style={{ fontFamily: "'Montserrat Alternates',sans-serif", fontSize: 36, fontWeight: 900, letterSpacing: "-1px", marginBottom: 8 }}>Results Page</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>ShiFt Convert · Titan Roofing Case Study</p>
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
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>Use "Copy Full Page HTML" for standalone delivery. For WordPress/Elementor, paste Global Styles in theme header, drop each section into HTML blocks. Requires NeuralOS global nav.</p>
        </div>
      </div>
    </div>
  );
}