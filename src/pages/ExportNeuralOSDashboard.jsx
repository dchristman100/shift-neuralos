import React, { useState } from "react";
import { Copy, Check, Download, Globe } from "lucide-react";

const DASHBOARD_HTML = `<!-- ══ ShiFt NeuralOS Dashboard Preview — Static HTML Export ══
   Source: /NeuralOSDashboard (React page)
   Note: recharts replaced with pure CSS/SVG bars; live counters replaced with static values
-->
<section style="padding:100px 24px 80px;background:#070820;min-height:100vh;font-family:'DM Sans',sans-serif;">
<div style="max-width:1200px;margin:0 auto;">

  <!-- Header -->
  <div style="margin-bottom:40px;display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;">
    <div>
      <div style="display:inline-flex;align-items:center;gap:10px;padding:8px 18px;border-radius:999px;background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.25);margin-bottom:16px;">
        <span style="width:8px;height:8px;border-radius:50%;background:#48BB78;box-shadow:0 0 8px #48BB78;display:inline-block;"></span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#FA982F;text-transform:uppercase;letter-spacing:0.15em;">NeuralOS™ Live Dashboard Preview</span>
      </div>
      <h1 style="font-family:'Montserrat Alternates',sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:900;color:white;line-height:1.1;letter-spacing:-1px;margin-bottom:10px;">
        Your Revenue Engine,<br>
        <span style="background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Working Right Now</span>
      </h1>
      <p style="font-size:16px;color:rgba(255,255,255,0.55);line-height:1.7;max-width:560px;">
        This is a high-fidelity preview of the ShiFt NeuralOS contractor portal — the live dashboard your team monitors daily once the Revenue Engine is installed.
      </p>
    </div>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank"
      style="display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;background:linear-gradient(135deg,#F54A48,#FA982F);color:#fff;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;text-decoration:none;box-shadow:0 4px 20px rgba(245,74,72,0.35);">
      Get This Dashboard →
    </a>
  </div>

  <!-- Mock Browser Chrome -->
  <div style="border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 32px 80px rgba(0,0,0,0.6);">

    <!-- Browser Bar -->
    <div style="background:#10122A;padding:12px 20px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,0.06);">
      <div style="display:flex;gap:6px;">
        <div style="width:11px;height:11px;border-radius:50%;background:#F54A48;opacity:0.7;"></div>
        <div style="width:11px;height:11px;border-radius:50%;background:#FA982F;opacity:0.7;"></div>
        <div style="width:11px;height:11px;border-radius:50%;background:#48BB78;opacity:0.7;"></div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:5px 12px;display:flex;align-items:center;gap:8px;">
        <span style="font-size:10px;color:rgba(255,255,255,0.2);">🔒</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,0.35);">app.shiftnow.io/dashboard</span>
      </div>
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#48BB78;">● LIVE</span>
    </div>

    <!-- Dashboard Interior -->
    <div style="background:#0D0F33;">

      <!-- Top Nav Strip -->
      <div style="background:#070820;border-bottom:1px solid rgba(255,255,255,0.06);padding:12px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:16px;">
          <span style="font-family:'Montserrat Alternates',sans-serif;font-size:14px;font-weight:800;color:white;">ShiFt<span style="color:#F54A48;">.</span></span>
          <span style="font-family:'DM Sans',sans-serif;font-size:12px;color:white;padding:4px 10px;border-radius:6px;background:rgba(245,74,72,0.1);border:1px solid rgba(245,74,72,0.25);">Overview</span>
          <span style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.35);padding:4px 10px;">Leads</span>
          <span style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.35);padding:4px 10px;">Appointments</span>
          <span style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.35);padding:4px 10px;">Revenue</span>
          <span style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.35);padding:4px 10px;">Settings</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#48BB78;padding:4px 10px;background:rgba(72,187,120,0.1);border:1px solid rgba(72,187,120,0.25);border-radius:999px;">Engine Active</div>
          <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:white;">JD</div>
        </div>
      </div>

      <div style="padding:24px;">

        <!-- KPI Row -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin-bottom:24px;">
          ${[
            { label: "Conversations Today", value: "47", sub: "AI-handled · 24/7", color: "#F54A48", pulse: true },
            { label: "Appointments Booked", value: "9", sub: "This week", color: "#48BB78" },
            { label: "Avg AI Response", value: "26s", sub: "Industry avg: 4+ hrs", color: "#FA982F" },
            { label: "Revenue This Month", value: "$41.2K", sub: "↑ 38% vs last month", color: "#FFD700" },
            { label: "Close Rate", value: "63%", sub: "Qualified leads", color: "#63B3ED" },
            { label: "ROI Multiple", value: "14×", sub: "vs engine cost", color: "#48BB78" },
          ].map(k => `
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:22px 24px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.4);margin-bottom:8px;">${k.label}</div>
            <div style="display:flex;align-items:center;gap:8px;">
              ${k.pulse ? `<span style="width:8px;height:8px;border-radius:50%;background:${k.color};box-shadow:0 0 8px ${k.color};display:inline-block;flex-shrink:0;"></span>` : ""}
              <div style="font-family:'Montserrat Alternates',sans-serif;font-size:30px;font-weight:900;color:${k.color};line-height:1;">${k.value}</div>
            </div>
            <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.4);margin-top:6px;">${k.sub}</div>
          </div>`).join("")}
        </div>

        <!-- Charts Row (CSS bar approximations) -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
          <!-- Revenue Trend -->
          <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:20px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.35);margin-bottom:4px;">Platform-Attributed Revenue</div>
            <div style="font-family:'Montserrat Alternates',sans-serif;font-size:20px;font-weight:900;color:white;margin-bottom:16px;">$212,900 <span style="font-size:12px;color:#48BB78;font-weight:600;">↑ 8wk</span></div>
            <div style="display:flex;align-items:flex-end;gap:6px;height:100px;">
              ${[14200,18900,22400,19800,31200,28700,36500,41200].map((v,i) => {
                const pct = Math.round((v/41200)*100);
                const labels = ["Wk1","Wk2","Wk3","Wk4","Wk5","Wk6","Wk7","Wk8"];
                return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:100%;background:linear-gradient(180deg,#FA982F,#F54A48);border-radius:3px 3px 0 0;height:${pct}px;min-height:4px;"></div>
                  <span style="font-family:'JetBrains Mono',monospace;font-size:8px;color:rgba(255,255,255,0.3);">${labels[i]}</span>
                </div>`;
              }).join("")}
            </div>
          </div>
          <!-- Conversion Chart -->
          <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:20px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.35);margin-bottom:4px;">Leads vs Booked · Last 7 Days</div>
            <div style="font-family:'Montserrat Alternates',sans-serif;font-size:20px;font-weight:900;color:white;margin-bottom:16px;">95 Leads <span style="font-size:12px;color:#48BB78;font-weight:600;">→ 37 Booked</span></div>
            <div style="display:flex;align-items:flex-end;gap:4px;height:100px;">
              ${[{d:"Mon",l:12,b:4},{d:"Tue",l:18,b:7},{d:"Wed",l:9,b:3},{d:"Thu",l:22,b:9},{d:"Fri",l:16,b:6},{d:"Sat",l:11,b:5},{d:"Sun",l:7,b:3}].map(day => `
              <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;">
                <div style="width:100%;display:flex;gap:2px;align-items:flex-end;height:88px;">
                  <div style="flex:1;background:rgba(245,74,72,0.25);border-radius:2px 2px 0 0;height:${Math.round((day.l/22)*88)}px;"></div>
                  <div style="flex:1;background:#48BB78;border-radius:2px 2px 0 0;height:${Math.round((day.b/9)*88)}px;"></div>
                </div>
                <span style="font-family:'JetBrains Mono',monospace;font-size:8px;color:rgba(255,255,255,0.3);">${day.d}</span>
              </div>`).join("")}
            </div>
          </div>
        </div>

        <!-- Lead Intelligence Table -->
        <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;margin-bottom:24px;overflow:hidden;">
          <div style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
            <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.35);margin-bottom:4px;">AI Lead Intelligence Feed</div>
            <div style="font-family:'Montserrat Alternates',sans-serif;font-size:15px;font-weight:700;color:white;">Real-Time Qualification Status</div>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <thead>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
                <th style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.3);text-align:left;">Contact</th>
                <th style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.3);text-align:center;">Source</th>
                <th style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.3);text-align:center;">AI Status</th>
                <th style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.3);text-align:center;">Score</th>
                <th style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.3);text-align:center;">Est. Value</th>
                <th style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.3);text-align:center;">AI Response</th>
              </tr>
            </thead>
            <tbody>
              ${[
                { name:"Marcus T.", addr:"4821 Ridgecrest Dr", source:"GBP", status:"Booked", statusBg:"rgba(72,187,120,0.12)", statusBorder:"rgba(72,187,120,0.3)", statusColor:"#48BB78", score:94, value:"$9,200", response:"28s" },
                { name:"Sarah K.", addr:"1102 Maple Ave", source:"LSA", status:"Qualifying", statusBg:"rgba(250,152,47,0.12)", statusBorder:"rgba(250,152,47,0.3)", statusColor:"#FA982F", score:78, value:"$6,800", response:"31s" },
                { name:"Derek P.", addr:"882 Oak Blvd", source:"Facebook", status:"Booked", statusBg:"rgba(72,187,120,0.12)", statusBorder:"rgba(72,187,120,0.3)", statusColor:"#48BB78", score:91, value:"$11,400", response:"24s" },
                { name:"Lisa M.", addr:"3390 Vine St", source:"GBP", status:"Follow-Up", statusBg:"rgba(99,179,237,0.12)", statusBorder:"rgba(99,179,237,0.3)", statusColor:"#63B3ED", score:61, value:"$4,200", response:"30s" },
                { name:"James R.", addr:"741 Summit Rd", source:"LSA", status:"Booked", statusBg:"rgba(72,187,120,0.12)", statusBorder:"rgba(72,187,120,0.3)", statusColor:"#48BB78", score:88, value:"$7,900", response:"19s" },
              ].map(l => `<tr style="border-bottom:1px solid rgba(255,255,255,0.04);">
                <td style="padding:12px 16px;">
                  <div style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;color:white;">${l.name}</div>
                  <div style="font-family:'DM Sans',sans-serif;font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px;">${l.addr}</div>
                </td>
                <td style="padding:12px 16px;text-align:center;"><span style="font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;padding:3px 8px;border-radius:6px;background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.08);">${l.source}</span></td>
                <td style="padding:12px 16px;text-align:center;"><span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;background:${l.statusBg};color:${l.statusColor};border:1px solid ${l.statusBorder};">${l.status}</span></td>
                <td style="padding:12px 16px;text-align:center;"><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:${l.score>80?"#48BB78":l.score>60?"#FA982F":"rgba(255,255,255,0.4)"};">${l.score}</span></td>
                <td style="padding:12px 16px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:11px;color:#48BB78;font-weight:700;">${l.value}</td>
                <td style="padding:12px 16px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:11px;color:#FA982F;">${l.response}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>

        <!-- AI Activity Log -->
        <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:20px;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.35);margin-bottom:4px;">AI Activity Log</div>
          <div style="font-family:'Montserrat Alternates',sans-serif;font-size:15px;font-weight:700;color:white;margin-bottom:16px;">Live Engine Actions</div>
          ${[
            { time:"2:41 PM", event:"Booked appointment — Marcus T. — Thu Mar 20, 10:00 AM", dot:"#48BB78", label:"BOOKED" },
            { time:"2:37 PM", event:"Qualifying in progress — Sarah K. — Damage type confirmed: Age", dot:"#FA982F", label:"QUALIFYING" },
            { time:"2:28 PM", event:"Appointment confirmed — Derek P. — Wed Mar 19, 2:00 PM", dot:"#48BB78", label:"BOOKED" },
            { time:"2:14 PM", event:"5th follow-up sent — Lisa M. — SMS delivered", dot:"#63B3ED", label:"FOLLOW-UP" },
            { time:"1:59 PM", event:"New inbound call — James R. — Answered in 19s", dot:"#F54A48", label:"INBOUND" },
            { time:"1:42 PM", event:"Storm protocol activated — 3 new LSA leads captured", dot:"#FFD700", label:"STORM" },
          ].map((a,i,arr) => `<div style="display:flex;align-items:center;gap:14px;padding:10px 0;border-bottom:${i<arr.length-1?"1px solid rgba(255,255,255,0.04)":"none"};">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,0.25);flex-shrink:0;min-width:60px;">${a.time}</span>
            <span style="width:7px;height:7px;border-radius:50%;background:${a.dot};box-shadow:0 0 6px ${a.dot};flex-shrink:0;display:inline-block;"></span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:700;color:${a.dot};text-transform:uppercase;letter-spacing:0.08em;flex-shrink:0;min-width:80px;">${a.label}</span>
            <span style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.65);line-height:1.5;">${a.event}</span>
          </div>`).join("")}
        </div>

      </div>
    </div>
  </div>

  <!-- Trust Strip -->
  <div style="margin-top:40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">
    ${[
      { icon:"⚡", title:"Live in 7 Days", body:"Your Revenue Engine is fully configured, tested, and live within one week of signing." },
      { icon:"🎯", title:"Every Lead Captured", body:"No missed calls. No silent forms. AI responds to every inbound in under 30 seconds." },
      { icon:"📊", title:"Full Transparency", body:"Every conversation, every booked job, every dollar tracked in real time in this dashboard." },
      { icon:"🛡", title:"90-Day Revenue Floor", body:"If the engine doesn't produce, billing pauses. You see the math here before you pay." },
    ].map(t => `<div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:20px 22px;">
      <div style="font-size:24px;margin-bottom:10px;">${t.icon}</div>
      <div style="font-family:'Montserrat Alternates',sans-serif;font-size:14px;font-weight:700;color:white;margin-bottom:6px;">${t.title}</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.45);line-height:1.65;">${t.body}</div>
    </div>`).join("")}
  </div>

  <!-- CTA -->
  <div style="margin-top:40px;text-align:center;padding:56px 32px;border-radius:20px;background:linear-gradient(135deg,rgba(245,74,72,0.1),rgba(250,152,47,0.07));border:1px solid rgba(245,74,72,0.2);">
    <div style="font-family:'Montserrat Alternates',sans-serif;font-size:clamp(1.75rem,4vw,2.75rem);font-weight:900;color:white;line-height:1.1;margin-bottom:16px;">
      Ready to See This Dashboard<br>
      <span style="background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">With Your Numbers?</span>
    </div>
    <p style="font-family:'DM Sans',sans-serif;font-size:16px;color:rgba(255,255,255,0.55);max-width:500px;margin:0 auto 32px;line-height:1.7;">
      Book a 30-minute strategy call. We'll run your numbers live, show you your revenue leak, and walk you through exactly how the engine gets installed.
    </p>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank"
      style="display:inline-flex;align-items:center;gap:8px;padding:16px 40px;border-radius:12px;background:linear-gradient(135deg,#F54A48,#FA982F);color:#fff;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;text-decoration:none;box-shadow:0 4px 24px rgba(245,74,72,0.35);">
      Book a Strategy Call →
    </a>
  </div>

</div>
</section>`;

export default function ExportNeuralOSDashboard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DASHBOARD_HTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const full = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ShiFt NeuralOS Dashboard Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700;800;900&family=JetBrains+Mono:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
<style>*{box-sizing:border-box;margin:0;padding:0;}body{background:#070820;color:white;}</style>
</head>
<body>
${DASHBOARD_HTML}
</body>
</html>`;
    const blob = new Blob([full], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ShiFt-NeuralOSDashboard-Export.html";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-5 font-mono text-xs uppercase tracking-widest"
            style={{ background: "rgba(245,74,72,0.08)", borderColor: "rgba(245,74,72,0.3)", color: "#F54A48" }}>
            <Globe className="w-4 h-4" />
            Export · NeuralOS Dashboard Preview
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-3">NeuralOS Dashboard — HTML Export</h1>
          <p className="text-base max-w-xl mx-auto mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Static HTML version of <code className="text-white">/NeuralOSDashboard</code> with CSS bar charts replacing recharts. All sections included: KPIs, charts, lead table, activity log, trust strip, CTA.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs mt-2"
            style={{ background: "rgba(250,152,47,0.1)", border: "1px solid rgba(250,152,47,0.3)", color: "#FA982F" }}>
            ⚠ recharts replaced with CSS bars · live counters replaced with static values
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider"
            style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 20px rgba(245,74,72,0.35)" }}>
            <Download className="w-4 h-4" />
            Download HTML File
          </button>
          <button onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
            style={{ background: copied ? "rgba(72,187,120,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${copied ? "rgba(72,187,120,0.4)" : "rgba(255,255,255,0.15)"}`, color: copied ? "#48BB78" : "white" }}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy HTML"}
          </button>
          <a href="/NeuralOSDashboard" target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
            View Live Page ↗
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="font-mono text-xs text-white/40 uppercase tracking-wider">HTML Source</span>
            <span className="font-mono text-xs" style={{ color: "#FA982F" }}>{DASHBOARD_HTML.length.toLocaleString()} chars</span>
          </div>
          <pre className="overflow-auto p-6 text-xs leading-relaxed" style={{ background: "#0D0F33", color: "rgba(255,255,255,0.65)", maxHeight: "600px", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {DASHBOARD_HTML}
          </pre>
        </div>

      </div>
    </div>
  );
}