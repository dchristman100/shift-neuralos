import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

// ─── SECTION CONTENT ─────────────────────────────────────────────────────────

const GLOBAL_CSS = `/* ============================================
   SHIFT REVENUE ENGINE PLANS — GLOBAL STYLES
   Compatible with WordPress / Elementor
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --navy:    #0D0F33;
  --coral:   #F54A48;
  --orange:  #FA982F;
  --blue:    #2E77AE;
  --gray:    #6B7C93;
  --surface: rgba(255,255,255,0.04);
  --border:  rgba(255,255,255,0.08);
  --grad:    linear-gradient(135deg, #F54A48, #FA982F);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
body { font-family: 'DM Sans', sans-serif; background: #070820; color: #fff; line-height: 1.6; }

.font-display { font-family: 'Montserrat Alternates', sans-serif; }
.font-mono    { font-family: 'JetBrains Mono', monospace; }
.font-body    { font-family: 'DM Sans', sans-serif; }

.rep-grad-text {
  background: var(--grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.rep-section { padding: 96px 40px; }
.rep-inner   { max-width: 1140px; margin: 0 auto; }

.rep-label {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  letter-spacing: 0.2em; text-transform: uppercase; color: #FA982F;
  margin-bottom: 20px;
}
.rep-label-bar { width: 4px; height: 14px; background: var(--grad); border-radius: 2px; flex-shrink: 0; }

.rep-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 16px; transition: all 0.3s ease;
}
.rep-card:hover { border-color: rgba(245,74,72,0.25); transform: translateY(-4px); }

.rep-pkg-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 20px; display: flex; flex-direction: column; position: relative;
  overflow: hidden; transition: transform 0.3s ease;
}
.rep-pkg-card:hover { transform: translateY(-6px); }
.rep-pkg-card.featured {
  background: linear-gradient(180deg, rgba(245,74,72,0.07) 0%, rgba(255,255,255,0.03) 100%);
  border-color: rgba(245,74,72,0.3);
}

.rep-btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--grad); color: #fff;
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 14px 28px; border-radius: 10px; border: none; cursor: pointer;
  text-decoration: none; transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(245,74,72,0.3);
}
.rep-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(245,74,72,0.45); }

.rep-btn-outline {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: transparent; color: #fff;
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 14px 28px; border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
  text-decoration: none; transition: all 0.3s ease;
}
.rep-btn-outline:hover { border-color: rgba(245,74,72,0.5); background: rgba(245,74,72,0.06); }

.rep-btn-ghost {
  display: inline-flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
  color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 13px;
  font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 14px 28px; border-radius: 10px; cursor: pointer; text-decoration: none;
  transition: all 0.3s ease; width: 100%; justify-content: center;
}
.rep-btn-ghost:hover { border-color: rgba(245,74,72,0.4); color: #F54A48; }

.rep-check      { color: #F54A48; font-weight: 700; margin-right: 8px; }
.rep-check-gold { color: #FFD700; font-weight: 700; margin-right: 8px; }
.rep-dash       { color: rgba(255,255,255,0.15); margin-right: 8px; }

.rep-feature-row {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
  font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.75);
}
.rep-feature-row:last-child { border-bottom: none; }

.rep-table { width: 100%; border-collapse: collapse; }
.rep-table th {
  padding: 16px 20px; font-family: 'JetBrains Mono', monospace; font-size: 10px;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(255,255,255,0.4); border-bottom: 1px solid rgba(255,255,255,0.08); text-align: center;
}
.rep-table th:first-child { text-align: left; }
.rep-table td {
  padding: 14px 20px; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.05);
  text-align: center; color: rgba(255,255,255,0.6); font-family: 'DM Sans', sans-serif;
}
.rep-table td:first-child { text-align: left; color: rgba(255,255,255,0.85); font-weight: 500; }
.rep-table tr:last-child td { border-bottom: none; }
.rep-table .group-header td {
  background: rgba(255,255,255,0.02); font-family: 'JetBrains Mono', monospace;
  font-size: 10px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.12em; color: rgba(255,255,255,0.35); padding: 10px 20px;
}

@keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.8); } }
.rep-pulse { animation: pulse 2s ease-in-out infinite; }

@media (max-width: 768px) {
  .rep-section { padding: 64px 20px; }
  .rep-hero-hl { font-size: clamp(38px, 10vw, 60px) !important; }
  .rep-pkg-grid { grid-template-columns: 1fr !important; }
  .rep-proof-grid { grid-template-columns: 1fr 1fr !important; }
  .rep-2col { grid-template-columns: 1fr !important; }
  .rep-stat-bar { grid-template-columns: 1fr 1fr !important; }
}`;

const HERO_HTML = `<!-- REVENUE ENGINE PLANS — HERO SECTION -->
<section class="rep-section" id="hero" style="min-height:100vh;display:flex;align-items:center;padding-top:140px;position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 30%, rgba(245,74,72,0.12) 0%, transparent 60%);"></div>
  <div class="rep-inner" style="position:relative;text-align:center;">
    <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(250,152,47,0.08);border:1px solid rgba(250,152,47,0.3);border-radius:999px;padding:10px 22px;margin-bottom:32px;">
      <span class="rep-pulse" style="width:6px;height:6px;border-radius:50%;background:#FA982F;display:inline-block;flex-shrink:0;"></span>
      <span class="font-mono" style="font-size:11px;color:#FA982F;text-transform:uppercase;letter-spacing:0.2em;">Revenue Infrastructure for Roofing Contractors</span>
    </div>

    <h1 class="font-display rep-hero-hl" style="font-size:clamp(48px,7vw,92px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:24px;max-width:900px;margin-left:auto;margin-right:auto;">
      Turn Marketing<br><span class="rep-grad-text">Into Revenue</span>
    </h1>

    <p class="font-body" style="font-size:19px;color:rgba(255,255,255,0.6);line-height:1.75;max-width:620px;margin:0 auto 40px;">
      ShiFt installs and operates AI-powered revenue engines that turn marketing into booked jobs and predictable growth for service businesses.
    </p>

    <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:64px;">
      <a href="#packages" class="rep-btn-primary" style="padding:16px 36px;font-size:14px;">
        Get the Revenue Engine
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#proof" class="rep-btn-outline" style="padding:16px 36px;font-size:14px;">See the ROI Math</a>
    </div>

    <div class="rep-stat-bar" style="display:grid;grid-template-columns:repeat(3,1fr);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;max-width:600px;margin:0 auto;overflow:hidden;">
      <div style="padding:24px 20px;text-align:center;border-right:1px solid rgba(255,255,255,0.08);">
        <div class="font-display rep-grad-text" style="font-size:28px;font-weight:900;margin-bottom:6px;">&lt;30s</div>
        <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.4);">AI Response Time</div>
      </div>
      <div style="padding:24px 20px;text-align:center;border-right:1px solid rgba(255,255,255,0.08);">
        <div class="font-display rep-grad-text" style="font-size:28px;font-weight:900;margin-bottom:6px;">3–5×</div>
        <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.4);">Average ROI</div>
      </div>
      <div style="padding:24px 20px;text-align:center;">
        <div class="font-display rep-grad-text" style="font-size:28px;font-weight:900;margin-bottom:6px;">24/7</div>
        <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.4);">System Uptime</div>
      </div>
    </div>
  </div>
</section>`;

const PROBLEM_HTML = `<!-- PROBLEM SECTION -->
<section class="rep-section" id="problem" style="background:#0D0F33;">
  <div class="rep-inner">
    <div class="rep-label"><span class="rep-label-bar"></span>The Problem</div>
    <h2 class="font-display" style="font-size:clamp(32px,4vw,54px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;max-width:700px;margin-bottom:56px;">
      Your Marketing Isn't Broken.<br><span class="rep-grad-text">Your Follow-Up Is.</span>
    </h2>
    <div class="rep-2col" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;">
      <div class="rep-card" style="padding:36px 32px;">
        <div class="font-display" style="font-size:48px;font-weight:900;color:#F54A48;margin-bottom:12px;">60%</div>
        <h3 class="font-display" style="font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;">Leads Lost to Slow Response</h3>
        <p class="font-body" style="font-size:14px;color:rgba(255,255,255,0.55);line-height:1.7;">The average roofing contractor takes 4+ hours to respond to an inquiry. By then, the homeowner has already called someone else.</p>
      </div>
      <div class="rep-card" style="padding:36px 32px;">
        <div class="font-display" style="font-size:48px;font-weight:900;color:#FA982F;margin-bottom:12px;">74%</div>
        <h3 class="font-display" style="font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;">Burned by Prior Tools</h3>
        <p class="font-body" style="font-size:14px;color:rgba(255,255,255,0.55);line-height:1.7;">Three out of four contractors have paid for tools that never produced a single booked job. Hatch, Scorpion, HomeAdvisor — all cost, no revenue.</p>
      </div>
      <div class="rep-card" style="padding:36px 32px;">
        <div class="font-display" style="font-size:48px;font-weight:900;color:#F54A48;margin-bottom:12px;">$24K+</div>
        <h3 class="font-display" style="font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;">Missed Revenue Per Month</h3>
        <p class="font-body" style="font-size:14px;color:rgba(255,255,255,0.55);line-height:1.7;">Just three missed leads at an $8K average ticket is $24,000 left on the table. Every month. The math is brutal.</p>
      </div>
    </div>
  </div>
</section>`;

const SYSTEM_HTML = `<!-- SYSTEM / GENERATE-CONVERT-BOOK SECTION -->
<section class="rep-section" id="system">
  <div class="rep-inner">
    <div style="text-align:center;margin-bottom:56px;">
      <div class="rep-label" style="justify-content:center;"><span class="rep-label-bar"></span>The System</div>
      <h2 class="font-display" style="font-size:clamp(32px,4vw,54px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;margin-bottom:16px;">Generate. Convert. Book.</h2>
      <p class="font-body" style="font-size:17px;color:rgba(255,255,255,0.55);max-width:580px;margin:0 auto;line-height:1.7;">
        ShiFt installs a complete Revenue Engine that captures every inbound lead and converts it into a booked appointment — automatically.
      </p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
      <div class="rep-card" style="padding:32px 28px;">
        <div style="font-size:28px;margin-bottom:16px;">⚡</div>
        <div class="font-mono rep-grad-text" style="font-size:28px;font-weight:900;opacity:0.25;line-height:1;margin-bottom:12px;">1</div>
        <h3 class="font-display" style="font-size:17px;font-weight:700;color:#fff;margin-bottom:10px;">Instant Response</h3>
        <p class="font-body" style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.65;">Every call, text, and form submission answered by AI in under 30 seconds. 24/7. No missed leads.</p>
      </div>
      <div class="rep-card" style="padding:32px 28px;">
        <div style="font-size:28px;margin-bottom:16px;">🎯</div>
        <div class="font-mono rep-grad-text" style="font-size:28px;font-weight:900;opacity:0.25;line-height:1;margin-bottom:12px;">2</div>
        <h3 class="font-display" style="font-size:17px;font-weight:700;color:#fff;margin-bottom:10px;">AI Qualification</h3>
        <p class="font-body" style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.65;">Roofing-native conversation flows qualify every lead — property type, damage, timeline, and booking intent.</p>
      </div>
      <div class="rep-card" style="padding:32px 28px;">
        <div style="font-size:28px;margin-bottom:16px;">📅</div>
        <div class="font-mono rep-grad-text" style="font-size:28px;font-weight:900;opacity:0.25;line-height:1;margin-bottom:12px;">3</div>
        <h3 class="font-display" style="font-size:17px;font-weight:700;color:#fff;margin-bottom:10px;">Automatic Booking</h3>
        <p class="font-body" style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.65;">Qualified leads are booked directly onto your calendar. Confirmation texts sent to you and the homeowner.</p>
      </div>
      <div class="rep-card" style="padding:32px 28px;">
        <div style="font-size:28px;margin-bottom:16px;">📊</div>
        <div class="font-mono rep-grad-text" style="font-size:28px;font-weight:900;opacity:0.25;line-height:1;margin-bottom:12px;">4</div>
        <h3 class="font-display" style="font-size:17px;font-weight:700;color:#fff;margin-bottom:10px;">Revenue Tracking</h3>
        <p class="font-body" style="font-size:13px;color:rgba(255,255,255,0.5);line-height:1.65;">Every lead, appointment, and won job is tracked. Monthly revenue reports with clear ROI math.</p>
      </div>
    </div>
  </div>
</section>`;

const PROOF_HTML = `<!-- PROOF / ROI SECTION -->
<section id="proof" class="rep-section" style="background:#0D0F33;">
  <div class="rep-inner">
    <div style="text-align:center;margin-bottom:56px;">
      <div class="rep-label" style="justify-content:center;"><span class="rep-label-bar"></span>From Leads to Booked Jobs</div>
      <h2 class="font-display" style="font-size:clamp(32px,4vw,54px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;">The Math Speaks for Itself</h2>
    </div>

    <!-- Texas Case Study -->
    <div class="rep-card" style="padding:48px;margin-bottom:40px;position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(135deg,#F54A48,#FA982F);"></div>
      <div style="text-align:center;margin-bottom:40px;">
        <div class="font-mono" style="font-size:11px;color:#FA982F;text-transform:uppercase;letter-spacing:0.2em;margin-bottom:12px;">Texas Contractor · 30-Day Result</div>
        <div class="font-display rep-grad-text" style="font-size:80px;font-weight:900;line-height:1;">$72K</div>
        <p class="font-body" style="font-size:17px;color:rgba(255,255,255,0.6);max-width:500px;margin:16px auto 0;line-height:1.6;">in booked revenue within the first 30 days of the Revenue Engine going live. Real jobs on the calendar — not impressions, not clicks.</p>
        <div class="font-mono" style="margin-top:16px;font-size:13px;color:#48BB78;font-weight:700;">20× return on monthly investment</div>
      </div>
      <div class="rep-proof-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
        <div style="text-align:center;padding:24px 16px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <div class="font-display rep-grad-text" style="font-size:32px;font-weight:900;margin-bottom:6px;">340+</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">AI Conversations</div>
        </div>
        <div style="text-align:center;padding:24px 16px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <div class="font-display rep-grad-text" style="font-size:32px;font-weight:900;margin-bottom:6px;">47</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Appointments Booked</div>
        </div>
        <div style="text-align:center;padding:24px 16px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <div class="font-display rep-grad-text" style="font-size:32px;font-weight:900;margin-bottom:6px;">9</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Jobs Won</div>
        </div>
        <div style="text-align:center;padding:24px 16px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <div class="font-display rep-grad-text" style="font-size:32px;font-weight:900;margin-bottom:6px;">$8,000</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Avg Ticket</div>
        </div>
      </div>
    </div>

    <!-- ROI math per package -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
      <div class="rep-card" style="padding:28px;">
        <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#F54A48;margin-bottom:12px;">ACTIVATE ROI</div>
        <div class="font-display" style="font-size:20px;font-weight:800;color:#fff;margin-bottom:8px;">3 jobs × $8K = $24K</div>
        <div class="font-body" style="font-size:14px;color:rgba(255,255,255,0.4);margin-bottom:8px;">Engine cost: $1,997/mo</div>
        <div class="font-mono" style="font-size:16px;font-weight:700;color:#48BB78;">12× return</div>
      </div>
      <div class="rep-card" style="padding:28px;border-color:rgba(245,74,72,0.3);">
        <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#FA982F;margin-bottom:12px;">AMPLIFY ROI</div>
        <div class="font-display" style="font-size:20px;font-weight:800;color:#fff;margin-bottom:8px;">5 jobs × $12K = $60K</div>
        <div class="font-body" style="font-size:14px;color:rgba(255,255,255,0.4);margin-bottom:8px;">Engine cost: $3,497/mo</div>
        <div class="font-mono" style="font-size:16px;font-weight:700;color:#48BB78;">17× return</div>
      </div>
      <div class="rep-card" style="padding:28px;">
        <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#FFD700;margin-bottom:12px;">DOMINATE ROI</div>
        <div class="font-display" style="font-size:20px;font-weight:800;color:#fff;margin-bottom:8px;">7 jobs × $12K = $84K</div>
        <div class="font-body" style="font-size:14px;color:rgba(255,255,255,0.4);margin-bottom:8px;">Engine cost: $8,997/mo</div>
        <div class="font-mono" style="font-size:16px;font-weight:700;color:#48BB78;">9× return</div>
      </div>
    </div>
  </div>
</section>`;

const CALCULATOR_HTML = `<!-- REVENUE LEAK CALCULATOR SECTION -->
<!-- NOTE: This section requires JavaScript to function (see Calculator JS tab). -->
<section class="rep-section" id="calculator" style="background:#0D0F33;">
  <div class="rep-inner">
    <!-- Calculator Header -->
    <div style="text-align:center;margin-bottom:48px;">
      <div class="rep-label" style="justify-content:center;"><span class="rep-label-bar"></span>Revenue Leak Calculator</div>
      <h2 class="font-display" style="font-size:clamp(30px,4vw,52px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;color:#fff;margin-bottom:16px;">Find Your Revenue Leak</h2>
      <p class="font-body" style="font-size:17px;color:rgba(255,255,255,0.55);max-width:560px;margin:0 auto;line-height:1.7;">Enter your numbers. See exactly how much revenue you're leaving on the table every month — before you ever look at a package price.</p>
    </div>

    <!-- Wound badges -->
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-bottom:36px;">
      <div style="display:flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.25);">
        <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:11px;color:#fff;flex-shrink:0;">1</div>
        <span class="font-mono" style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#fff;">Missed Calls</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.25);">
        <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:11px;color:#fff;flex-shrink:0;">2</div>
        <span class="font-mono" style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#fff;">Garbage Leads</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;padding:8px 18px;border-radius:999px;background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.25);">
        <div style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:11px;color:#fff;flex-shrink:0;">3</div>
        <span class="font-mono" style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#fff;">Total Leak + ROI</span>
      </div>
    </div>

    <!-- WOUND 1 -->
    <div class="calc-card" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 32px;margin-bottom:24px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
        <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;color:#fff;flex-shrink:0;">1</div>
        <div>
          <div class="font-display" style="font-weight:800;font-size:18px;color:#fff;">Wound 1 — Missed Calls &amp; Zero Follow-Up</div>
          <div class="font-mono" style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px;">Leads you already paid for, bleeding out before becoming jobs</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0 40px;">
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div>
              <div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Inbound leads per month</div>
              <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">All sources — calls, forms, texts, referrals</div>
            </div>
            <div class="font-display" id="w1-leads-val" style="font-size:20px;font-weight:800;color:#FA982F;">50</div>
          </div>
          <input type="range" id="w1-leads" min="5" max="300" step="5" value="50" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div>
              <div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">% missed or no follow-up</div>
              <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Industry average: 40%</div>
            </div>
            <div class="font-display" id="w1-miss-val" style="font-size:20px;font-weight:800;color:#FA982F;">40%</div>
          </div>
          <input type="range" id="w1-miss" min="5" max="95" step="5" value="40" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div>
              <div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Average job value</div>
              <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Your average booked job revenue</div>
            </div>
            <div class="font-display" id="w1-ticket-val" style="font-size:20px;font-weight:800;color:#FA982F;">$8,000</div>
          </div>
          <input type="range" id="w1-ticket" min="1000" max="30000" step="500" value="8000" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div>
              <div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Close rate on leads reached</div>
              <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">When you respond, how often do you close?</div>
            </div>
            <div class="font-display" id="w1-close-val" style="font-size:20px;font-weight:800;color:#FA982F;">35%</div>
          </div>
          <input type="range" id="w1-close" min="5" max="80" step="5" value="35" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px;">
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.2);border-radius:12px;border:1px solid rgba(250,152,47,0.15);">
          <div class="font-display" id="w1-out-leads" style="font-size:24px;font-weight:900;color:#FA982F;margin-bottom:6px;">20 leads</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Lost per month</div>
        </div>
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.2);border-radius:12px;border:1px solid rgba(250,152,47,0.15);">
          <div class="font-display" id="w1-out-jobs" style="font-size:24px;font-weight:900;color:#FA982F;margin-bottom:6px;">7 jobs</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Lost per month</div>
        </div>
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.2);border-radius:12px;border:1px solid rgba(245,74,72,0.22);">
          <div class="font-display" id="w1-out-leak" style="font-size:32px;font-weight:900;color:#F54A48;margin-bottom:6px;">$56,000</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Estimated monthly revenue leak</div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px 18px;background:rgba(245,74,72,0.06);border-left:3px solid #F54A48;border-radius:0 8px 8px 0;">
        <p class="font-body" style="font-size:13px;color:rgba(255,255,255,0.6);line-height:1.6;margin:0;font-style:italic;">"These leads already exist. ShiFt captures them — the AI responds in under 30 seconds, every time, 24/7."</p>
      </div>
    </div>

    <!-- WOUND 2 -->
    <div class="calc-card" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 32px;margin-bottom:24px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px;">
        <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#FA982F,#F54A48);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;color:#fff;flex-shrink:0;">2</div>
        <div>
          <div class="font-display" style="font-weight:800;font-size:18px;color:#fff;">Wound 2 — Garbage Lead Cost</div>
          <div class="font-mono" style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px;">Wasted ad spend + wasted labor on unqualified contacts</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0 40px;">
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div><div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Monthly lead gen spend</div><div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Ads, lead vendors, SEO — total</div></div>
            <div class="font-display" id="w2-spend-val" style="font-size:20px;font-weight:800;color:#FA982F;">$3,000</div>
          </div>
          <input type="range" id="w2-spend" min="0" max="20000" step="250" value="3000" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div><div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Leads that spend produces</div><div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Total inbound from paid sources</div></div>
            <div class="font-display" id="w2-leads-val" style="font-size:20px;font-weight:800;color:#FA982F;">50</div>
          </div>
          <input type="range" id="w2-leads" min="5" max="300" step="5" value="50" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div><div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">% unqualified / garbage</div><div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Wrong area, renters, tire-kickers, spam</div></div>
            <div class="font-display" id="w2-garbage-val" style="font-size:20px;font-weight:800;color:#FA982F;">35%</div>
          </div>
          <input type="range" id="w2-garbage" min="5" max="80" step="5" value="35" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div><div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Hours/week chasing junk leads</div><div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Self or team time on unqualified contacts</div></div>
            <div class="font-display" id="w2-hours-val" style="font-size:20px;font-weight:800;color:#FA982F;">5 hrs</div>
          </div>
          <input type="range" id="w2-hours" min="1" max="40" value="5" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
        <div class="calc-slider-group">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">
            <div><div class="font-body" style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.85);">Hourly labor cost</div><div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;">Loaded rate for time spent</div></div>
            <div class="font-display" id="w2-rate-val" style="font-size:20px;font-weight:800;color:#FA982F;">$35/hr</div>
          </div>
          <input type="range" id="w2-rate" min="15" max="150" step="5" value="35" oninput="calcUpdate()" style="width:100%;accent-color:#F54A48;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px;">
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.2);border-radius:12px;border:1px solid rgba(250,152,47,0.15);">
          <div class="font-display" id="w2-out-spend" style="font-size:24px;font-weight:900;color:#FA982F;margin-bottom:6px;">$1,050</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Wasted ad spend/mo</div>
        </div>
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.2);border-radius:12px;border:1px solid rgba(250,152,47,0.15);">
          <div class="font-display" id="w2-out-labor" style="font-size:24px;font-weight:900;color:#FA982F;margin-bottom:6px;">$757</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Wasted labor/mo</div>
        </div>
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.2);border-radius:12px;border:1px solid rgba(245,74,72,0.22);">
          <div class="font-display" id="w2-out-total" style="font-size:32px;font-weight:900;color:#F54A48;margin-bottom:6px;">$1,807</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.4);">Estimated garbage lead cost</div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px 18px;background:rgba(250,152,47,0.06);border-left:3px solid #FA982F;border-radius:0 8px 8px 0;">
        <p class="font-body" style="font-size:13px;color:rgba(255,255,255,0.6);line-height:1.6;margin:0;font-style:italic;">"ShiFt AI qualifies every lead in under 30 seconds before it touches your calendar — no wasted sales hours, no tire-kicker calls."</p>
      </div>
    </div>

    <!-- WOUND 3 / TOTAL -->
    <div style="background:linear-gradient(135deg,rgba(245,74,72,0.07),rgba(250,152,47,0.04));border:1px solid rgba(245,74,72,0.2);border-radius:20px;padding:36px 32px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px;">
        <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;color:#fff;flex-shrink:0;">3</div>
        <div>
          <div class="font-display" style="font-weight:800;font-size:18px;color:#fff;">Wound 3 — Total Leak + Revenue Engine ROI</div>
          <div class="font-mono" style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px;">All wounds combined against your selected engine cost</div>
        </div>
      </div>
      <div style="text-align:center;margin-bottom:32px;">
        <div class="font-mono" style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.2em;margin-bottom:8px;">Estimated total monthly revenue leakage</div>
        <div class="font-display" id="w3-total" style="font-size:clamp(56px,8vw,88px);font-weight:900;color:#F54A48;line-height:1;letter-spacing:-2px;">$57,807</div>
        <div style="display:flex;justify-content:center;gap:24px;margin-top:14px;flex-wrap:wrap;">
          <span class="font-mono" style="font-size:12px;color:rgba(255,255,255,0.4);">Wound 1: <strong id="w3-w1" style="color:rgba(255,255,255,0.7);">$56,000</strong></span>
          <span class="font-mono" style="font-size:12px;color:rgba(255,255,255,0.4);">Wound 2: <strong id="w3-w2" style="color:rgba(255,255,255,0.7);">$1,807</strong></span>
        </div>
      </div>
      <!-- Package selector -->
      <div style="margin-bottom:24px;">
        <div class="font-mono" style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.4);margin-bottom:12px;text-align:center;">Select your Revenue Engine</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button id="pkg-activate" onclick="selectPkg('activate')" class="pkg-btn pkg-btn-active font-display" style="padding:10px 22px;border-radius:999px;border:1px solid #F54A48;background:rgba(245,74,72,0.12);color:#F54A48;font-weight:800;font-size:13px;cursor:pointer;">ACTIVATE <span class="font-mono" style="font-weight:400;font-size:11px;">$1,997/mo</span></button>
          <button id="pkg-amplify"  onclick="selectPkg('amplify')"  class="pkg-btn font-display" style="padding:10px 22px;border-radius:999px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);font-weight:800;font-size:13px;cursor:pointer;">AMPLIFY  <span class="font-mono" style="font-weight:400;font-size:11px;">$3,497/mo</span></button>
          <button id="pkg-dominate" onclick="selectPkg('dominate')" class="pkg-btn font-display" style="padding:10px 22px;border-radius:999px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);font-weight:800;font-size:13px;cursor:pointer;">DOMINATE <span class="font-mono" style="font-weight:400;font-size:11px;">$8,997/mo</span></button>
        </div>
      </div>
      <!-- ROI outputs -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;">
        <div style="text-align:center;padding:20px 12px;background:rgba(0,0,0,0.25);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
          <div class="font-display" id="w3-cost" style="font-size:26px;font-weight:900;color:rgba(255,255,255,0.6);margin-bottom:6px;">$1,997</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.35);">Monthly engine cost</div>
        </div>
        <div style="text-align:center;padding:20px 12px;background:rgba(72,187,120,0.08);border-radius:12px;border:1px solid rgba(72,187,120,0.2);">
          <div class="font-display" id="w3-net" style="font-size:26px;font-weight:900;color:#48BB78;margin-bottom:6px;">$55,810</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.35);">Estimated net monthly return</div>
        </div>
        <div style="text-align:center;padding:20px 12px;background:rgba(250,152,47,0.08);border-radius:12px;border:1px solid rgba(250,152,47,0.2);">
          <div class="font-display" id="w3-roi" style="font-size:26px;font-weight:900;color:#FA982F;margin-bottom:6px;">29×</div>
          <div class="font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.35);">ROI multiplier</div>
        </div>
      </div>
      <!-- Guarantee -->
      <div style="background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:18px 22px;margin-bottom:24px;text-align:center;">
        <div class="font-mono" style="font-size:11px;color:#FA982F;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:8px;">🛡 90-Day Revenue Floor</div>
        <p class="font-body" style="font-size:14px;color:rgba(255,255,255,0.6);line-height:1.6;margin:0;">If the engine doesn't produce, <strong style="color:#fff;">billing pauses</strong>. You risk the activation fee, not the monthly investment.</p>
      </div>
      <!-- CTA -->
      <div style="text-align:center;">
        <a href="#packages" class="rep-btn-primary" style="display:inline-flex;align-items:center;gap:8px;">
          See Revenue Engine Plans Below
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </a>
        <div class="font-mono" style="font-size:11px;color:rgba(255,255,255,0.25);margin-top:10px;text-transform:uppercase;letter-spacing:0.1em;">All outputs are estimated based on your inputs</div>
      </div>
    </div>
  </div>
</section>`;

const CALCULATOR_JS = `// ── REVENUE LEAK CALCULATOR ────────────────────────────────────
var currentPkg = 'activate';
var pkgCosts = { activate: 1997, amplify: 3497, dominate: 8997 };
var pkgColors = { activate: '#F54A48', amplify: '#FA982F', dominate: '#FFD700' };

function fmtUSD(n) {
  return '$' + Math.round(n).toLocaleString();
}

function calcUpdate() {
  var leads  = +document.getElementById('w1-leads').value  || 50;
  var miss   = +document.getElementById('w1-miss').value   || 40;
  var ticket = +document.getElementById('w1-ticket').value || 8000;
  var close  = +document.getElementById('w1-close').value  || 35;
  var spend  = +document.getElementById('w2-spend').value  || 3000;
  var pLeads = +document.getElementById('w2-leads').value  || 50;
  var garb   = +document.getElementById('w2-garbage').value|| 35;
  var hours  = +document.getElementById('w2-hours').value  || 5;
  var rate   = +document.getElementById('w2-rate').value   || 35;

  // Update display values
  document.getElementById('w1-leads-val').textContent  = leads;
  document.getElementById('w1-miss-val').textContent   = miss + '%';
  document.getElementById('w1-ticket-val').textContent = '$' + ticket.toLocaleString();
  document.getElementById('w1-close-val').textContent  = close + '%';
  document.getElementById('w2-spend-val').textContent  = '$' + spend.toLocaleString();
  document.getElementById('w2-leads-val').textContent  = pLeads;
  document.getElementById('w2-garbage-val').textContent= garb + '%';
  document.getElementById('w2-hours-val').textContent  = hours + ' hrs';
  document.getElementById('w2-rate-val').textContent   = '$' + rate + '/hr';

  // Wound 1
  var lostLeads = leads * (miss / 100);
  var lostJobs  = lostLeads * (close / 100);
  var wound1    = lostJobs * ticket;
  document.getElementById('w1-out-leads').textContent = Math.round(lostLeads) + ' leads';
  document.getElementById('w1-out-jobs').textContent  = (Math.round(lostJobs * 10) / 10) + ' jobs';
  document.getElementById('w1-out-leak').textContent  = fmtUSD(wound1);

  // Wound 2
  var wastedSpend = spend * (garb / 100);
  var wastedLabor = hours * rate * 4.33;
  var wound2      = wastedSpend + wastedLabor;
  document.getElementById('w2-out-spend').textContent = fmtUSD(wastedSpend);
  document.getElementById('w2-out-labor').textContent = fmtUSD(wastedLabor);
  document.getElementById('w2-out-total').textContent = fmtUSD(wound2);

  // Wound 3
  var totalLeak  = wound1 + wound2;
  var pkgCost    = pkgCosts[currentPkg];
  var netReturn  = totalLeak - pkgCost;
  var roiMult    = pkgCost > 0 ? totalLeak / pkgCost : 0;

  document.getElementById('w3-total').textContent = fmtUSD(totalLeak);
  document.getElementById('w3-w1').textContent    = fmtUSD(wound1);
  document.getElementById('w3-w2').textContent    = fmtUSD(wound2);
  document.getElementById('w3-cost').textContent  = fmtUSD(pkgCost);
  document.getElementById('w3-net').textContent   = fmtUSD(netReturn);
  document.getElementById('w3-roi').textContent   = Math.round(roiMult) + '×';

  var netEl = document.getElementById('w3-net').parentElement;
  if (netReturn >= 0) {
    netEl.style.background = 'rgba(72,187,120,0.08)';
    netEl.style.borderColor = 'rgba(72,187,120,0.2)';
    document.getElementById('w3-net').style.color = '#48BB78';
  } else {
    netEl.style.background = 'rgba(245,74,72,0.08)';
    netEl.style.borderColor = 'rgba(245,74,72,0.2)';
    document.getElementById('w3-net').style.color = '#F54A48';
  }
}

function selectPkg(pkg) {
  currentPkg = pkg;
  var btns = { activate: document.getElementById('pkg-activate'), amplify: document.getElementById('pkg-amplify'), dominate: document.getElementById('pkg-dominate') };
  Object.keys(btns).forEach(function(k) {
    var col = pkgColors[k];
    if (k === pkg) {
      btns[k].style.border = '1px solid ' + col;
      btns[k].style.background = 'rgba(' + (k==='activate'?'245,74,72':k==='amplify'?'250,152,47':'255,215,0') + ',0.12)';
      btns[k].style.color = col;
    } else {
      btns[k].style.border = '1px solid rgba(255,255,255,0.12)';
      btns[k].style.background = 'rgba(255,255,255,0.03)';
      btns[k].style.color = 'rgba(255,255,255,0.5)';
    }
  });
  document.getElementById('w3-cost').textContent = '$' + pkgCosts[pkg].toLocaleString();
  calcUpdate();
}

// Init
calcUpdate();`;

const PACKAGES_HTML = `<!-- PACKAGES SECTION -->
<section class="rep-section" id="packages">
  <div class="rep-inner">
    <div style="text-align:center;margin-bottom:20px;">
      <div class="rep-label" style="justify-content:center;"><span class="rep-label-bar"></span>Choose Your Revenue Engine</div>
      <h2 class="font-display" style="font-size:clamp(32px,4vw,54px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;margin-bottom:16px;">
        Three Packages. One Goal.<br><span class="rep-grad-text">Booked Jobs.</span>
      </h2>
      <p class="font-body" style="font-size:16px;color:rgba(255,255,255,0.5);max-width:600px;margin:0 auto 8px;line-height:1.7;">
        Every package includes a $5,000 one-time <strong style="color:rgba(255,255,255,0.8);">Revenue Engine Installation</strong> fee and the 90-Day Revenue Floor — billing pauses if we don't produce.
      </p>
    </div>

    <div class="rep-pkg-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:32px;">

      <!-- ACTIVATE -->
      <div class="rep-pkg-card">
        <div style="height:3px;background:#F54A48;border-radius:20px 20px 0 0;"></div>
        <div style="padding:36px 32px;flex:1;display:flex;flex-direction:column;">
          <div class="font-mono" style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:8px;">ICP: $1M–$3M Revenue</div>
          <div class="font-display" style="font-size:36px;font-weight:900;letter-spacing:-1px;color:#F54A48;margin-bottom:8px;">ACTIVATE</div>
          <div class="font-body" style="font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:24px;">Your Revenue Engine on Organic</div>
          <div style="background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.15);border-radius:10px;padding:16px;margin-bottom:24px;text-align:center;">
            <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Revenue Outcome Target</div>
            <div class="font-display" style="font-size:20px;font-weight:800;color:#F54A48;">$15K–$30K/mo</div>
          </div>
          <div style="margin-bottom:24px;">
            <div class="font-display" style="font-size:40px;font-weight:900;letter-spacing:-1px;color:#fff;margin-bottom:4px;">$1,997<span style="font-size:18px;font-weight:500;color:rgba(255,255,255,0.4);">/mo</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">Revenue Engine Operation</span><span style="color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">$1,297</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">Lead Intelligence (Organic)</span><span style="color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">$700</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">RevShare on incremental revenue</span><span style="color:#FA982F;font-family:'JetBrains Mono',monospace;font-weight:700;">15%</span></div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:20px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span class="font-mono" style="font-size:10px;color:#FA982F;text-transform:uppercase;letter-spacing:0.1em;">Limited to 3 per market</span>
          </div>
          <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="rep-btn-ghost" style="margin-bottom:24px;text-decoration:none;display:block;text-align:center;">Install the System</a>
          <div style="flex:1;">
            <div class="rep-feature-row"><span class="rep-check">✓</span>AI response &lt;30 seconds · 24/7</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Roofing-native conversation flows</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Missed call text-back</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Calendar sync + auto booking</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>CRM lead records</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>5-touch automated follow-up</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Google Business Profile optimization</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Reputation management</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Local SEO + citations</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Monthly revenue report</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>90-Day Revenue Floor</div>
          </div>
        </div>
      </div>

      <!-- AMPLIFY (featured) -->
      <div class="rep-pkg-card featured">
        <div style="position:absolute;top:0;right:0;background:linear-gradient(135deg,#F54A48,#FA982F);padding:6px 16px;border-radius:0 20px 0 10px;">
          <span class="font-mono" style="font-size:10px;color:#fff;font-weight:700;">Most Popular</span>
        </div>
        <div style="height:3px;background:linear-gradient(135deg,#F54A48,#FA982F);border-radius:20px 20px 0 0;"></div>
        <div style="padding:36px 32px;flex:1;display:flex;flex-direction:column;">
          <div class="font-mono" style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:8px;">ICP: $3M–$7M Revenue</div>
          <div class="font-display rep-grad-text" style="font-size:36px;font-weight:900;letter-spacing:-1px;margin-bottom:8px;">AMPLIFY</div>
          <div class="font-body" style="font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:24px;">Organic + Local Service Ads</div>
          <div style="background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.2);border-radius:10px;padding:16px;margin-bottom:24px;text-align:center;">
            <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Revenue Outcome Target</div>
            <div class="font-display rep-grad-text" style="font-size:20px;font-weight:800;">$30K–$60K/mo</div>
          </div>
          <div style="margin-bottom:24px;">
            <div class="font-display" style="font-size:40px;font-weight:900;letter-spacing:-1px;color:#fff;margin-bottom:4px;">$3,497<span style="font-size:18px;font-weight:500;color:rgba(255,255,255,0.4);">/mo</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">Revenue Engine Operation</span><span style="color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">$1,997</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">Lead Intelligence (LSA)</span><span style="color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">$1,500</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">RevShare on incremental revenue</span><span style="color:#FA982F;font-family:'JetBrains Mono',monospace;font-weight:700;">12%</span></div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:20px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span class="font-mono" style="font-size:10px;color:#FA982F;text-transform:uppercase;letter-spacing:0.1em;">Limited to 3 per market</span>
          </div>
          <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="rep-btn-primary" style="margin-bottom:24px;text-decoration:none;display:block;text-align:center;">Book a Strategy Call</a>
          <div style="flex:1;">
            <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Everything in ACTIVATE, plus:</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Google Local Service Ads management</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Weekly LSA optimization</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Lead dispute handling</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Storm event trigger mode</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>Weekly 15-min performance call</div>
            <div class="rep-feature-row"><span class="rep-check">✓</span>7-day system activation</div>
          </div>
        </div>
      </div>

      <!-- DOMINATE -->
      <div class="rep-pkg-card">
        <div style="height:3px;background:linear-gradient(90deg,#FA982F,#FFD700);border-radius:20px 20px 0 0;"></div>
        <div style="padding:36px 32px;flex:1;display:flex;flex-direction:column;">
          <div class="font-mono" style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:8px;">ICP: $7M–$10M Revenue</div>
          <div class="font-display" style="font-size:36px;font-weight:900;letter-spacing:-1px;color:#FFD700;margin-bottom:8px;">DOMINATE</div>
          <div class="font-body" style="font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:24px;">Full Omnichannel Revenue Engine</div>
          <div style="background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.2);border-radius:10px;padding:16px;margin-bottom:24px;text-align:center;">
            <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">Revenue Outcome Target</div>
            <div class="font-display" style="font-size:20px;font-weight:800;color:#FFD700;">$60K–$120K/mo</div>
          </div>
          <div style="margin-bottom:24px;">
            <div class="font-display" style="font-size:40px;font-weight:900;letter-spacing:-1px;color:#fff;margin-bottom:4px;">$8,997<span style="font-size:18px;font-weight:500;color:rgba(255,255,255,0.4);">/mo</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">Revenue Engine Operation</span><span style="color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">$5,997</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">Lead Intelligence (Omnichannel)</span><span style="color:rgba(255,255,255,0.6);font-family:'JetBrains Mono',monospace;">$3,000</span></div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;font-size:12px;font-family:'DM Sans',sans-serif;"><span style="color:rgba(255,255,255,0.45);">RevShare on incremental revenue</span><span style="color:#FA982F;font-family:'JetBrains Mono',monospace;font-weight:700;">10%</span></div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:20px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span class="font-mono" style="font-size:10px;color:#FFD700;text-transform:uppercase;letter-spacing:0.1em;">Limited to 1 per market</span>
          </div>
          <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="rep-btn-ghost" style="margin-bottom:24px;text-decoration:none;display:block;text-align:center;border-color:rgba(255,215,0,0.2);color:#FFD700;">Apply Now</a>
          <div style="flex:1;">
            <div class="font-mono" style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Everything in AMPLIFY, plus:</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Google Search paid campaigns</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Meta retargeting + lookalike</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Email drip sequences</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>SMS outreach campaigns</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Outbound calling (AI + human)</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Full cross-channel attribution</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Custom follow-up by lead score</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>Dedicated account strategist</div>
            <div class="rep-feature-row"><span class="rep-check-gold">✓</span>48-hour priority activation</div>
          </div>
        </div>
      </div>
    </div>

    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px 28px;text-align:center;">
      <p class="font-body" style="font-size:14px;color:rgba(255,255,255,0.45);line-height:1.6;">
        All packages require a one-time <strong style="color:rgba(255,255,255,0.7);">$5,000 Revenue Engine Installation</strong> fee, collected at signing.
        Ad spend (AMPLIFY/DOMINATE) paid directly by you to Google/Meta — never through ShiFt.
      </p>
    </div>
  </div>
</section>`;

const COMPARISON_HTML = `<!-- FEATURE COMPARISON TABLE -->
<section class="rep-section" style="background:#0D0F33;">
  <div class="rep-inner">
    <div style="text-align:center;margin-bottom:48px;">
      <div class="rep-label" style="justify-content:center;"><span class="rep-label-bar"></span>Feature Comparison</div>
      <h2 class="font-display" style="font-size:clamp(28px,3.5vw,48px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;">What's Included in Each Package</h2>
    </div>
    <div style="border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
      <table class="rep-table">
        <thead>
          <tr>
            <th style="text-align:left;padding:20px 24px;">Feature</th>
            <th style="color:#F54A48;">ACTIVATE</th>
            <th style="background:rgba(245,74,72,0.04);"><span style="background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">AMPLIFY</span></th>
            <th style="color:#FFD700;">DOMINATE</th>
          </tr>
        </thead>
        <tbody>
          <tr class="group-header"><td colspan="4">Revenue Engine Operation — Core AI</td></tr>
          <tr><td>AI inbound response &lt;30 seconds · 24/7</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Roofing-native conversation flows</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Missed call text-back (MCTB)</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Calendar sync + appointment booking</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>CRM lead record creation</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>5-touch automated follow-up</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Monthly revenue report</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>90-Day Revenue Floor (billing pause)</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Storm event trigger mode</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Custom follow-up by lead score</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr class="group-header"><td colspan="4">Lead Intelligence</td></tr>
          <tr><td>Google Business Profile optimization</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Reputation management + reviews</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Local SEO + citation management</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Google Local Service Ads</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Google Search paid campaigns</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Meta retargeting + lookalike</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Email drip sequences</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>SMS outreach campaigns</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Outbound calling (AI + human)</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Full cross-channel attribution</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr class="group-header"><td colspan="4">Service Level</td></tr>
          <tr><td>7-day system activation</td><td style="color:#48BB78;">✓</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:rgba(255,255,255,0.12);">—</td></tr>
          <tr><td>48-hour priority activation</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Weekly 15-min performance call</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:#48BB78;">✓</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td>Dedicated account strategist</td><td style="color:rgba(255,255,255,0.12);">—</td><td style="background:rgba(245,74,72,0.02);color:rgba(255,255,255,0.12);">—</td><td style="color:#48BB78;">✓</td></tr>
          <tr><td style="font-weight:600;">Market exclusivity</td><td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,0.6);">3 per DMA</td><td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,0.6);background:rgba(245,74,72,0.02);">3 per DMA</td><td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#FFD700;font-weight:700;">1 per DMA</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`;

const GUARANTEE_HTML = `<!-- 90-DAY REVENUE FLOOR / GUARANTEE SECTION -->
<section class="rep-section" id="guarantee">
  <div class="rep-inner" style="max-width:780px;">
    <div style="text-align:center;margin-bottom:48px;">
      <div class="rep-label" style="justify-content:center;"><span class="rep-label-bar"></span>The Guarantee</div>
      <h2 class="font-display" style="font-size:clamp(32px,4vw,52px);font-weight:800;line-height:1.1;letter-spacing:-1.5px;margin-bottom:20px;">90-Day Revenue Floor</h2>
      <p class="font-body" style="font-size:17px;color:rgba(255,255,255,0.6);line-height:1.75;max-width:580px;margin:0 auto;">
        If the Revenue Engine doesn't generate incremental revenue above your pre-ShiFt baseline within 90 days, billing pauses until it does. The system keeps running. You only pay when it produces.
      </p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:40px;">
      <div class="rep-card" style="padding:28px;text-align:center;">
        <div style="font-size:32px;margin-bottom:12px;">🔒</div>
        <div class="font-display" style="font-size:20px;font-weight:800;color:#6B7C93;margin-bottom:4px;">Protected</div>
        <div class="font-display" style="font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;">Installation Fee</div>
        <div class="font-body" style="font-size:12px;color:rgba(255,255,255,0.4);">Collected at signing</div>
      </div>
      <div class="rep-card" style="padding:28px;text-align:center;">
        <div style="font-size:32px;margin-bottom:12px;">⏸</div>
        <div class="font-display" style="font-size:20px;font-weight:800;color:#F54A48;margin-bottom:4px;">Pauses</div>
        <div class="font-display" style="font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;">Monthly Billing</div>
        <div class="font-body" style="font-size:12px;color:rgba(255,255,255,0.4);">Until revenue proven</div>
      </div>
      <div class="rep-card" style="padding:28px;text-align:center;">
        <div style="font-size:32px;margin-bottom:12px;">⚡</div>
        <div class="font-display" style="font-size:20px;font-weight:800;color:#48BB78;margin-bottom:4px;">Keeps Running</div>
        <div class="font-display" style="font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;">AI System</div>
        <div class="font-body" style="font-size:12px;color:rgba(255,255,255,0.4);">Never stops working</div>
      </div>
    </div>
    <div style="background:rgba(245,74,72,0.04);border:1px solid rgba(245,74,72,0.15);border-radius:12px;padding:24px 28px;text-align:center;">
      <p class="font-body" style="font-size:14px;color:rgba(255,255,255,0.5);line-height:1.7;">
        Revenue baseline established during onboarding. Applies to all three packages.
        This is not a trial — it's a performance guarantee backed by billing mechanics.
      </p>
    </div>
  </div>
</section>`;

const CTA_HTML = `<!-- FINAL CTA SECTION -->
<section class="rep-section" id="cta" style="background:#0D0F33;text-align:center;position:relative;overflow:hidden;">
  <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:800px;height:400px;border-radius:50%;background:radial-gradient(ellipse at 50% 100%, rgba(245,74,72,0.1), transparent 60%);pointer-events:none;"></div>
  <div class="rep-inner" style="position:relative;max-width:620px;">
    <h2 class="font-display" style="font-size:clamp(40px,6vw,72px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px;">
      Stop Losing Leads.<br><span class="rep-grad-text">Start Booking Jobs.</span>
    </h2>
    <p class="font-body" style="font-size:18px;color:rgba(255,255,255,0.55);line-height:1.7;max-width:500px;margin:0 auto 40px;">
      Most contractors respond to leads in hours. ShiFt responds in seconds. The Revenue Engine captures every opportunity and books it on your calendar.
    </p>
    <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;">
      <a href="#packages" class="rep-btn-primary" style="padding:18px 40px;font-size:15px;">
        Get the Revenue Engine
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="rep-btn-outline" style="padding:18px 40px;font-size:15px;">Book a Strategy Call →</a>
    </div>
  </div>
</section>`;

const FULL_PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ShiFt Revenue Engine Plans — AI-powered revenue infrastructure for roofing contractors. Three packages. One goal: booked jobs.">
  <meta property="og:title" content="ShiFt Revenue Engine Plans">
  <meta property="og:description" content="Install and operate an AI Revenue Engine. ACTIVATE · AMPLIFY · DOMINATE. Billing pauses if we don't produce.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://shiftnow.io/packages">
  <title>ShiFt Revenue Engine Plans — ACTIVATE · AMPLIFY · DOMINATE</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Product","name":"ShiFt Revenue Engine","brand":{"@type":"Brand","name":"ShiFt NeuralOS"},"description":"AI-powered revenue infrastructure for roofing contractors","url":"https://shiftnow.io/packages","offers":[{"@type":"Offer","name":"ACTIVATE","price":"1997","priceCurrency":"USD","priceSpecification":{"@type":"UnitPriceSpecification","price":"1997","priceCurrency":"USD","unitText":"MONTH"}},{"@type":"Offer","name":"AMPLIFY","price":"3497","priceCurrency":"USD"},{"@type":"Offer","name":"DOMINATE","price":"8997","priceCurrency":"USD"}]}
  </script>
  <style>
    /* PASTE GLOBAL CSS HERE */
  </style>
</head>
<body style="background:#070820;">
  <!-- PASTE NAV HTML FROM PACKAGE 1 (NeuralOS) -->
  <main style="padding-top:72px;">
    <!-- PASTE HERO HTML HERE -->
    <!-- PASTE PROBLEM HTML HERE -->
    <!-- PASTE SYSTEM HTML HERE -->
    <!-- PASTE PROOF HTML HERE -->
    <!-- PASTE CALCULATOR HTML HERE -->
    <!-- PASTE PACKAGES HTML HERE -->
    <!-- PASTE COMPARISON HTML HERE -->
    <!-- PASTE GUARANTEE HTML HERE -->
    <!-- PASTE CTA HTML HERE -->
  </main>
  <!-- PASTE FOOTER HTML FROM PACKAGE 1 (NeuralOS) -->
  <script>
    /* PASTE NAV JS FROM PACKAGE 1 (NeuralOS) */
    /* PASTE CALCULATOR JS HERE */
  </script>
</body>
</html>`;

// ─── SECTIONS ARRAY ──────────────────────────────────────────────────────────
const sections = [
  { id: "global-css",   title: "1. Global CSS",                          items: [{ label: "CSS", code: GLOBAL_CSS }] },
  { id: "hero",         title: "2. Hero Section",                        items: [{ label: "HTML", code: HERO_HTML }] },
  { id: "problem",      title: "3. Problem Section",                     items: [{ label: "HTML", code: PROBLEM_HTML }] },
  { id: "system",       title: "4. Generate–Convert–Book System",        items: [{ label: "HTML", code: SYSTEM_HTML }] },
  { id: "proof",        title: "5. Proof / ROI Section",                 items: [{ label: "HTML", code: PROOF_HTML }] },
  { id: "calculator",   title: "6. Revenue Leak Calculator",             items: [{ label: "HTML", code: CALCULATOR_HTML }, { label: "JS", code: CALCULATOR_JS }] },
  { id: "packages",     title: "7. Package Cards (ACTIVATE · AMPLIFY · DOMINATE)", items: [{ label: "HTML", code: PACKAGES_HTML }] },
  { id: "comparison",   title: "8. Feature Comparison Table",            items: [{ label: "HTML", code: COMPARISON_HTML }] },
  { id: "guarantee",    title: "9. 90-Day Revenue Floor / Guarantee",    items: [{ label: "HTML", code: GUARANTEE_HTML }] },
  { id: "cta",          title: "10. Final CTA Section",                  items: [{ label: "HTML", code: CTA_HTML }] },
  { id: "full-page",    title: "11. Full Page Template (Assembly Guide)", items: [{ label: "HTML", code: FULL_PAGE_HTML }] },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function ExportRevenueEnginePlans() {
  const [expanded, setExpanded] = useState({});
  const [copied, setCopied]     = useState(null);

  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));
  const copy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6"
            style={{ background: "rgba(245,74,72,0.08)", borderColor: "rgba(245,74,72,0.3)" }}>
            <FileCode className="w-5 h-5" style={{ color: "#F54A48" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>Export Package 4 of 4</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Revenue Engine Plans Export</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Complete HTML/CSS/JS for the ShiFt Revenue Engine Plans page (shiftnow.io/packages) — including the interactive Revenue Leak Calculator. Elementor-compatible, section-by-section.
          </p>
        </div>

        {/* Instructions */}
        <div className="rounded-2xl p-6 mb-6" style={{ background: "rgba(72,187,120,0.08)", border: "1px solid rgba(72,187,120,0.2)" }}>
          <h2 className="font-display text-lg font-bold text-white mb-3">Elementor Import Instructions</h2>
          <ol className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <li><strong className="text-white">1.</strong> Add <strong className="text-white">Global CSS</strong> to Appearance → Customize → Additional CSS</li>
            <li><strong className="text-white">2.</strong> For each section: Add an <strong className="text-white">HTML widget</strong> in Elementor and paste the HTML</li>
            <li><strong className="text-white">3.</strong> Add the <strong className="text-white">Calculator JS</strong> to footer.php before <code>&lt;/body&gt;</code></li>
            <li><strong className="text-white">4.</strong> Nav + Footer HTML from <strong className="text-white">Package 1 (NeuralOS)</strong> wrap this page</li>
            <li><strong className="text-white">5.</strong> Use the Full Page Template (section 11) as your complete standalone file</li>
          </ol>
        </div>

        {/* Calculator note */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(250,152,47,0.06)", border: "1px solid rgba(250,152,47,0.2)" }}>
          <h2 className="font-display text-lg font-bold text-white mb-2">⚡ Revenue Leak Calculator (Section 6)</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            The calculator requires both the <strong className="text-white">HTML</strong> (section content) and the <strong className="text-white">JS</strong> (calculator logic). Both are in section 6. The JS must load <em>after</em> the HTML — place it in your footer script block or use a deferred script tag.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((sec) => (
            <div key={sec.id} className="rounded-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <button onClick={() => toggle(sec.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <h3 className="font-display text-lg font-bold text-white">{sec.title}</h3>
                {expanded[sec.id]
                  ? <ChevronDown className="w-5 h-5 text-white" />
                  : <ChevronRight className="w-5 h-5 text-white" />}
              </button>
              {expanded[sec.id] && (
                <div className="p-6 pt-0 space-y-6">
                  {sec.items.map((item) => {
                    const copyId = `${sec.id}-${item.label}`;
                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#FA982F" }}>{item.label}</span>
                          <button onClick={() => copy(item.code, copyId)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
                            style={{ background: "rgba(255,255,255,0.06)", color: copied === copyId ? "#48BB78" : "rgba(255,255,255,0.6)" }}>
                            {copied === copyId ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied === copyId ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        <pre className="rounded-lg p-4 overflow-x-auto text-sm"
                          style={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", color: "#E2E8F0", maxHeight: "400px" }}>
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

        {/* Footer note */}
        <div className="mt-10 p-5 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            <strong className="text-white">Dependencies:</strong> Global CSS · Nav HTML/CSS/JS · Footer HTML/CSS from <strong className="text-white">Package 1 (NeuralOS Export)</strong> are required for this page.
          </p>
        </div>
      </div>
    </div>
  );
}