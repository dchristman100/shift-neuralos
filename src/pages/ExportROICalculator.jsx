import React, { useState } from "react";
import { Copy, Check, Download, Globe } from "lucide-react";

const ROI_CALCULATOR_HTML = `<!-- ══ ShiFt ROI Calculator — Static HTML Export ══
   Source: /ROICalculator (React page)
   Note: React state/inputs replaced with native HTML inputs + vanilla JS calculations
-->
<section style="min-height:100vh;background:#070820;padding:100px 16px 80px;font-family:'DM Sans',sans-serif;">
<div style="max-width:896px;margin:0 auto;">

  <h1 style="font-family:'Montserrat Alternates',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:900;color:white;margin-bottom:8px;">ShiFt ROI Calculator</h1>
  <p style="font-size:18px;color:rgba(255,255,255,0.6);margin-bottom:48px;line-height:1.65;">
    See the combined revenue impact of Attract + Convert
  </p>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;" id="roi-grid">
    <style>@media(max-width:640px){#roi-grid{grid-template-columns:1fr!important;}}</style>

    <!-- Form -->
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;">
      <div style="display:flex;flex-direction:column;gap:24px;">

        <div>
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Monthly Revenue</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="color:white;font-weight:600;">$</span>
            <input type="number" id="monthlyRevenue" value="40000" oninput="calcROI()"
              style="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
            <span style="color:rgba(255,255,255,0.5);font-size:14px;">/mo</span>
          </div>
        </div>

        <div>
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Monthly Leads</label>
          <input type="number" id="monthlyLeads" value="20" oninput="calcROI()"
            style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
        </div>

        <div>
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Current Close Rate (%)</label>
          <input type="number" id="closeRate" value="60" oninput="calcROI()"
            style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
        </div>

        <div style="padding-top:24px;border-top:1px solid rgba(255,255,255,0.1);">
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Pipeline Growth Potential (%)</label>
          <input type="number" id="attractGrowth" value="30" oninput="calcROI()"
            style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
        </div>

        <div>
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Missed Calls (% of revenue)</label>
          <input type="number" id="missedCalls" value="42" oninput="calcROI()"
            style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
        </div>

        <div>
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Garbage Leads (% of revenue)</label>
          <input type="number" id="garbageLeads" value="35" oninput="calcROI()"
            style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
        </div>

        <div>
          <label style="font-size:14px;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Invisible Buyers (% of revenue)</label>
          <input type="number" id="invisibleBuyers" value="25" oninput="calcROI()"
            style="width:100%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 16px;color:white;font-family:'JetBrains Mono',monospace;font-size:14px;outline:none;" />
        </div>
      </div>
    </div>

    <!-- Results -->
    <div style="display:flex;flex-direction:column;gap:20px;">

      <div style="background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.3);border-radius:12px;padding:24px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#FFD700;margin-bottom:8px;">Attract (Pipeline Growth)</div>
        <div id="attractMo" style="font-family:'Montserrat Alternates',sans-serif;font-size:2.5rem;font-weight:900;color:white;margin-bottom:8px;">+$2,880/mo</div>
        <div id="attractYr" style="font-size:14px;color:rgba(255,255,255,0.4);">$34,560/yr</div>
      </div>

      <div style="background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.3);border-radius:12px;padding:24px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#F54A48;margin-bottom:8px;">Convert (Revenue Leaks Plugged)</div>
        <div id="convertMo" style="font-family:'Montserrat Alternates',sans-serif;font-size:2.5rem;font-weight:900;color:white;margin-bottom:8px;">+$3,400/mo</div>
        <div id="convertYr" style="font-size:14px;color:rgba(255,255,255,0.4);">$40,800/yr</div>
      </div>

      <div style="background:linear-gradient(135deg,rgba(245,74,72,0.12),rgba(250,152,47,0.12));border:1px solid rgba(245,74,72,0.3);border-radius:12px;padding:32px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#FA982F;margin-bottom:12px;">Total Combined ROI</div>
        <div id="totalMo" style="font-family:'Montserrat Alternates',sans-serif;font-size:3rem;font-weight:900;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px;">+$6,280/mo</div>
        <div id="totalYr" style="font-size:16px;color:rgba(255,255,255,0.4);">$75,360/yr potential</div>
      </div>

      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank"
        style="display:block;width:100%;text-align:center;padding:14px;border-radius:10px;background:linear-gradient(135deg,#F54A48,#FA982F);color:white;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;text-decoration:none;box-shadow:0 4px 20px rgba(245,74,72,0.3);">
        Ready to Talk →
      </a>
    </div>
  </div>

</div>

<script>
function fmt(n) { return '+$' + Math.round(n).toLocaleString('en-US') }
function calcROI() {
  var rev = parseFloat(document.getElementById('monthlyRevenue').value)||0;
  var leads = parseFloat(document.getElementById('monthlyLeads').value)||1;
  var close = parseFloat(document.getElementById('closeRate').value)||0;
  var growth = parseFloat(document.getElementById('attractGrowth').value)||0;
  var missed = parseFloat(document.getElementById('missedCalls').value)||0;
  var garbage = parseFloat(document.getElementById('garbageLeads').value)||0;
  var invisible = parseFloat(document.getElementById('invisibleBuyers').value)||0;

  var avgJob = rev / leads;
  var newLeads = leads * (growth/100);
  var attractMo = newLeads * avgJob * (close/100);

  var convertMo = (rev*(missed/100)/12) + (rev*(garbage/100)/12) + (rev*(invisible/100)/12);

  var totalMo = attractMo + convertMo;

  document.getElementById('attractMo').textContent = fmt(attractMo) + '/mo';
  document.getElementById('attractYr').textContent = '$' + Math.round(attractMo*12).toLocaleString('en-US') + '/yr';
  document.getElementById('convertMo').textContent = fmt(convertMo) + '/mo';
  document.getElementById('convertYr').textContent = '$' + Math.round(convertMo*12).toLocaleString('en-US') + '/yr';
  document.getElementById('totalMo').textContent = fmt(totalMo) + '/mo';
  document.getElementById('totalYr').textContent = '$' + Math.round(totalMo*12).toLocaleString('en-US') + '/yr potential';
}
calcROI();
</script>
</section>`;

export default function ExportROICalculator() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ROI_CALCULATOR_HTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const full = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ShiFt ROI Calculator</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700;800;900&family=JetBrains+Mono:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
<style>*{box-sizing:border-box;margin:0;padding:0;}body{background:#070820;color:white;}</style>
</head>
<body>
${ROI_CALCULATOR_HTML}
</body>
</html>`;
    const blob = new Blob([full], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ShiFt-ROICalculator-Export.html";
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
            Export · ROI Calculator
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-3">ROI Calculator — HTML Export</h1>
          <p className="text-base max-w-xl mx-auto mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            Static HTML version of <code className="text-white">/ROICalculator</code>. All 7 inputs are fully interactive with vanilla JS calculations — no React required.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs mt-2"
            style={{ background: "rgba(72,187,120,0.1)", border: "1px solid rgba(72,187,120,0.3)", color: "#48BB78" }}>
            ✓ Fully interactive — all calculations work in plain HTML/JS
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
          <a href="/ROICalculator" target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wider"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
            View Live Page ↗
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="font-mono text-xs text-white/40 uppercase tracking-wider">HTML Source</span>
            <span className="font-mono text-xs" style={{ color: "#FA982F" }}>{ROI_CALCULATOR_HTML.length.toLocaleString()} chars</span>
          </div>
          <pre className="overflow-auto p-6 text-xs leading-relaxed" style={{ background: "#0D0F33", color: "rgba(255,255,255,0.65)", maxHeight: "600px", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {ROI_CALCULATOR_HTML}
          </pre>
        </div>

      </div>
    </div>
  );
}