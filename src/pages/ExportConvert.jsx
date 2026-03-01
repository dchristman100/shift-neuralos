import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

const CONVERT_NAV_HTML = `<!-- SHIFT CONVERT NAVBAR -->
<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono">Convert</span>
    </div>
    <div class="shift-nav-links">
      <a href="/how-it-works" class="shift-nav-link">How It Works</a>
      <a href="/revenue-leaks" class="shift-nav-link">Revenue Leaks</a>
      <a href="/results" class="shift-nav-link">Results</a>
      <a href="/pricing" class="shift-nav-link">Pricing</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/attract" class="shift-pill" style="color:#9DA3B4;">
          <span class="shift-pill-dot"></span> Attract
        </a>
        <a href="/convert" class="shift-pill shift-pill-active">
          <span class="shift-pill-dot shift-pill-dot-active"></span> Convert
        </a>
      </div>
      <a href="https://calc.shiftnow.io" class="btn-primary shift-btn-sm">See My Number</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/how-it-works" class="shift-mobile-link font-display">How It Works</a>
    <a href="/revenue-leaks" class="shift-mobile-link font-display">Revenue Leaks</a>
    <a href="/results" class="shift-mobile-link font-display">Results</a>
    <a href="/pricing" class="shift-mobile-link font-display">Pricing</a>
    <a href="https://calc.shiftnow.io" class="btn-primary">See My Number</a>
  </div>
</nav>`;

const CONVERT_HERO_HTML = `<!-- CONVERT HERO SECTION -->
<section class="shift-hero" id="hero" aria-label="ShiFt Convert hero">
  <div class="shift-hero-bg"></div>
  <div class="section-inner" style="text-align:center;">
    <div class="shift-hero-badge font-mono">
      <span class="shift-pulse-dot"></span>
      Calculating Live Revenue Leaks for 847+ Roofing Companies
    </div>
    <h1 class="shift-hero-headline font-display">
      <span class="shift-gradient-text">Three Revenue Leaks</span><br/>
      Are Costing You $35K–$100K+ Every Month
    </h1>
    <p class="shift-hero-sub">
      Missed calls. Junk leads. Invisible buyers. Your competitors are capturing these opportunities while you sleep. See exactly how much they're costing <strong style="color:#F54A48;">YOUR</strong> business.
    </p>
    <div class="shift-hero-ctas">
      <a href="https://calc.shiftnow.io" class="btn-primary btn-lg">
        Calculate My Revenue Leak
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <p class="shift-hero-micro font-mono">60 seconds. No credit card. Just your real number.</p>
  </div>
</section>`;

const PROBLEM_CARDS_HTML = `<!-- REVENUE LEAK PROBLEM CARDS -->
<section class="section-wrap" id="revenue-leaks" aria-label="Revenue leak problems">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#F54A48;">The Problem</span>
      <h2 class="shift-section-title font-display">Every Day, Money Walks Out Your Door</h2>
      <p class="shift-section-desc">These three leaks drain $35K–$100K+ monthly from the average roofing company</p>
    </div>
    <div class="convert-problems-grid">

      <div class="convert-problem-card" style="--accent:#F54A48;">
        <div class="convert-problem-accent" style="background:#F54A48;"></div>
        <div class="convert-problem-icon" style="background:rgba(245,74,72,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h3 class="convert-problem-title font-display">Missed Calls = Missed Revenue</h3>
        <p class="convert-problem-body">42% of calls come after 5pm. Your voicemail isn't closing deals. Every missed call is a job your competitor wins.</p>
        <div class="convert-problem-stat">
          <div class="convert-stat-value shift-gradient-text">$12K–$35K</div>
          <div class="convert-stat-label font-mono">lost monthly</div>
        </div>
        <div class="convert-problem-pain">"I didn't know you existed—I called back and got voicemail. So I booked someone else."</div>
      </div>

      <div class="convert-problem-card" style="--accent:#FA982F;">
        <div class="convert-problem-accent" style="background:#FA982F;"></div>
        <div class="convert-problem-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
          </svg>
        </div>
        <h3 class="convert-problem-title font-display">Junk Leads Eat Your Time</h3>
        <p class="convert-problem-body">You're paying for leads that were never going to buy. Bad leads don't just waste money—they waste your sales team's energy.</p>
        <div class="convert-problem-stat">
          <div class="convert-stat-value shift-gradient-text">$8K–$25K</div>
          <div class="convert-stat-label font-mono">wasted monthly</div>
        </div>
        <div class="convert-problem-pain">"Our best closer spent 3 days chasing a lead that was renting. AI would've caught that in 60 seconds."</div>
      </div>

      <div class="convert-problem-card" style="--accent:#48BB78;">
        <div class="convert-problem-accent" style="background:#48BB78;"></div>
        <div class="convert-problem-icon" style="background:rgba(72,187,120,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <h3 class="convert-problem-title font-display">Invisible Buyers Choose Competitors</h3>
        <p class="convert-problem-body">High-intent buyers are researching you right now. You just can't see them. They wanted to buy from you—you just weren't fast enough.</p>
        <div class="convert-problem-stat">
          <div class="convert-stat-value shift-gradient-text">$15K–$40K</div>
          <div class="convert-stat-label font-mono">missed monthly</div>
        </div>
        <div class="convert-problem-pain">"I visited their site three times. They never followed up. Booked with the company that texted me in 2 minutes."</div>
      </div>

    </div>
  </div>
</section>`;

const PROBLEM_CARDS_CSS = `.convert-problems-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media (min-width: 768px) { .convert-problems-grid { grid-template-columns: repeat(3,1fr); } }
.convert-problem-card {
  position: relative; padding: 32px; border-radius: 16px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px); overflow: hidden; transition: all 0.3s ease;
}
.convert-problem-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-4px); }
.convert-problem-accent {
  position: absolute; top: 0; left: 0; width: 4px; height: 100%;
}
.convert-problem-icon {
  width: 64px; height: 64px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
}
.convert-problem-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 12px; }
.convert-problem-body { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 24px; }
.convert-problem-stat { margin-bottom: 16px; }
.convert-stat-value { font-family: 'Montserrat Alternates',sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 4px; }
.convert-stat-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.4); }
.convert-problem-pain {
  padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.75rem; font-style: italic; color: rgba(255,255,255,0.35);
}`;

const COMPARISON_HTML = `<!-- COMPARISON TABLE SECTION -->
<section class="section-wrap" id="comparison" aria-label="Current approach vs ShiFt Convert" style="background:linear-gradient(to bottom, transparent, rgba(245,74,72,0.02));">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">The Reality</span>
      <h2 class="shift-section-title font-display">Your Current Approach vs. ShiFt Convert</h2>
    </div>
    <div class="convert-table-wrap">
      <table class="convert-table">
        <thead>
          <tr>
            <th class="convert-th" style="text-align:left;">Metric</th>
            <th class="convert-th" style="text-align:center;">Your Current Setup</th>
            <th class="convert-th" style="text-align:center;">With ShiFt Convert</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="convert-td-metric">After-hours response</td>
            <td class="convert-td-bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Voicemail</td>
            <td class="convert-td-good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> 30 seconds</td>
          </tr>
          <tr>
            <td class="convert-td-metric">Lead qualification</td>
            <td class="convert-td-bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Manual</td>
            <td class="convert-td-good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> AI-instant</td>
          </tr>
          <tr>
            <td class="convert-td-metric">Appointment booking</td>
            <td class="convert-td-bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Back-and-forth</td>
            <td class="convert-td-good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Automated</td>
          </tr>
          <tr>
            <td class="convert-td-metric">Follow-up consistency</td>
            <td class="convert-td-bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> When you remember</td>
            <td class="convert-td-good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> 100% automated</td>
          </tr>
          <tr>
            <td class="convert-td-metric">Monthly revenue leaked</td>
            <td class="convert-td-bad"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> $35K–$100K+</td>
            <td class="convert-td-good"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> $0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align:center;margin-top:40px;">
      <a href="https://calc.shiftnow.io" class="btn-primary btn-lg">
        See Your Specific Numbers
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>`;

const COMPARISON_CSS = `.convert-table-wrap {
  overflow-x: auto; border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04); backdrop-filter: blur(10px);
}
.convert-table { width: 100%; border-collapse: collapse; }
.convert-th {
  padding: 20px 24px; font-family: 'JetBrains Mono',monospace;
  font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.convert-td-metric {
  padding: 18px 24px; font-size: 0.875rem; font-weight: 500; color: white;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.convert-td-bad, .convert-td-good {
  padding: 18px 24px; text-align: center;
  display: table-cell;
  font-family: 'JetBrains Mono',monospace; font-size: 0.8125rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.convert-td-bad { color: rgba(255,255,255,0.45); }
.convert-td-good { color: #48BB78; font-weight: 700; }
.convert-td-bad svg, .convert-td-good svg { display: inline; vertical-align: middle; margin-right: 6px; }
tr:last-child .convert-td-metric,
tr:last-child .convert-td-bad,
tr:last-child .convert-td-good { border-bottom: none; }`;

const MECHANISM_HTML = `<!-- THREE-STAGE MECHANISM SECTION -->
<section class="section-wrap" id="how-it-works" aria-label="Three-stage revenue recovery mechanism">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#48BB78;">The Solution</span>
      <h2 class="shift-section-title font-display">Three Fixes for Three Leaks</h2>
      <p class="shift-section-desc">ShiFt Convert plugs every hole in your revenue bucket—simultaneously.</p>
    </div>
    <div class="mechanism-grid">

      <div class="mechanism-card">
        <div class="mechanism-badge font-mono" style="background:rgba(245,74,72,0.12);color:#F54A48;border-color:rgba(245,74,72,0.25);">Stage 1</div>
        <div class="mechanism-icon" style="background:rgba(245,74,72,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <div class="mechanism-fixes font-mono">Fixes: Missed Calls (Leak #1)</div>
        <h3 class="mechanism-title font-display">AI Answers in 30 Seconds</h3>
        <p class="mechanism-desc">Phone, web, text, Facebook—every lead gets an instant response. No voicemail. No missed opportunities. 24/7.</p>
        <div class="mechanism-stat">
          <div class="mechanism-stat-val" style="color:#F54A48;">30 sec</div>
          <div class="mechanism-stat-label font-mono">response time</div>
        </div>
      </div>

      <div class="mechanism-card">
        <div class="mechanism-badge font-mono" style="background:rgba(250,152,47,0.12);color:#FA982F;border-color:rgba(250,152,47,0.25);">Stage 2</div>
        <div class="mechanism-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <div class="mechanism-fixes font-mono">Fixes: Junk Leads (Leak #2)</div>
        <h3 class="mechanism-title font-display">AI Separates Gold from Garbage</h3>
        <p class="mechanism-desc">Our AI asks the right questions, scores every lead, and only passes qualified buyers to your team. Stop wasting time on tire kickers.</p>
        <div class="mechanism-stat">
          <div class="mechanism-stat-val" style="color:#FA982F;">73%</div>
          <div class="mechanism-stat-label font-mono">better lead quality</div>
        </div>
      </div>

      <div class="mechanism-card">
        <div class="mechanism-badge font-mono" style="background:rgba(72,187,120,0.12);color:#48BB78;border-color:rgba(72,187,120,0.25);">Stage 3</div>
        <div class="mechanism-icon" style="background:rgba(72,187,120,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </div>
        <div class="mechanism-fixes font-mono">Fixes: Invisible Buyers (Leak #3)</div>
        <h3 class="mechanism-title font-display">AI Books the Appointment</h3>
        <p class="mechanism-desc">Qualified leads get booked instantly. No back-and-forth. No delays. Just confirmed appointments on your calendar—automatically.</p>
        <div class="mechanism-stat">
          <div class="mechanism-stat-val" style="color:#48BB78;">3.2x</div>
          <div class="mechanism-stat-label font-mono">more appointments</div>
        </div>
      </div>

    </div>
  </div>
</section>`;

const MECHANISM_CSS = `.mechanism-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media (min-width: 768px) { .mechanism-grid { grid-template-columns: repeat(3,1fr); } }
.mechanism-card {
  padding: 32px; border-radius: 16px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px); transition: all 0.3s ease;
}
.mechanism-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-4px); }
.mechanism-badge {
  display: inline-flex; padding: 8px 16px; border-radius: 999px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; border: 1px solid; margin-bottom: 20px;
}
.mechanism-icon {
  width: 64px; height: 64px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
}
.mechanism-fixes {
  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4); margin-bottom: 8px;
}
.mechanism-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 12px; }
.mechanism-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 24px; }
.mechanism-stat { padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); }
.mechanism-stat-val {
  font-family: 'Montserrat Alternates',sans-serif; font-size: 2.5rem;
  font-weight: 700; margin-bottom: 4px;
}
.mechanism-stat-label {
  font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.4);
}`;

const PROOF_HTML = `<!-- PROOF / FEATURED TESTIMONIAL -->
<section class="section-wrap" id="proof" aria-label="Social proof and case study">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">Proof</span>
      <h2 class="shift-section-title font-display">From Revenue Leak to <span class="shift-gradient-text">Revenue Machine</span></h2>
    </div>
    <div class="proof-card glass-card">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(245,74,72,0.25)" stroke-width="2" style="margin-bottom:24px;">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
      </svg>
      <blockquote class="proof-quote">"We were losing $47K a month to missed calls alone. ShiFt caught every lead we were missing—now our calendar is full and our close rate is up 34%."</blockquote>
      <div class="proof-author">
        <div class="shift-avatar" style="background:linear-gradient(135deg,#F54A48,#FA982F);width:64px;height:64px;font-size:1.25rem;">JT</div>
        <div>
          <div class="proof-name font-display">Jake Torres</div>
          <div class="proof-role">Owner, Titan Roofing Services</div>
          <div class="proof-location font-mono">Dallas, TX</div>
        </div>
      </div>
      <div class="proof-stats">
        <div class="proof-stat">
          <div class="proof-stat-val shift-gradient-text">$750K → $7M</div>
          <div class="proof-stat-label">6-Year Growth</div>
        </div>
        <div class="proof-stat">
          <div class="proof-stat-val shift-gradient-text">34%</div>
          <div class="proof-stat-label">Close Rate Increase</div>
        </div>
        <div class="proof-stat">
          <div class="proof-stat-val shift-gradient-text">89%</div>
          <div class="proof-stat-label">Appointment Show Rate</div>
        </div>
      </div>
    </div>
  </div>
</section>`;

const PROOF_CSS = `.proof-card { padding: 48px; }
@media (max-width: 768px) { .proof-card { padding: 28px 20px; } }
.proof-quote {
  font-size: 1.25rem; line-height: 1.7; color: white; margin-bottom: 32px;
}
@media (min-width: 768px) { .proof-quote { font-size: 1.5rem; } }
.proof-author { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
.proof-name { font-size: 1.125rem; font-weight: 600; color: white; margin-bottom: 4px; }
.proof-role { font-size: 0.875rem; color: rgba(255,255,255,0.5); margin-bottom: 2px; }
.proof-location { font-size: 0.75rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.08em; }
.proof-stats {
  display: grid; grid-template-columns: 1fr; gap: 24px;
  padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); text-align: center;
}
@media (min-width: 640px) { .proof-stats { grid-template-columns: repeat(3,1fr); } }
.proof-stat-val {
  font-family: 'Montserrat Alternates',sans-serif; font-size: 1.875rem;
  font-weight: 700; margin-bottom: 8px;
}
.proof-stat-label { font-size: 0.875rem; color: rgba(255,255,255,0.4); }`;

const CONVERSION_PATH_HTML = `<!-- CONVERSION PATH / NEXT STEPS -->
<section class="section-wrap" id="conversion-path" aria-label="Your next steps">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#F54A48;">Your Next Step</span>
      <h2 class="shift-section-title font-display">See Your Number in <span class="shift-gradient-text">60 Seconds</span></h2>
    </div>
    <div class="conversion-steps">

      <div class="conversion-step">
        <div class="conversion-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        <div class="glass-card" style="text-align:center;padding:32px;">
          <div class="conversion-step-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <div class="conversion-step-label font-mono">Step 1: Calculate</div>
          <h3 class="conversion-step-title font-display">Answer 5 Questions</h3>
          <p class="conversion-step-desc">Your revenue, lead volume, and current close rate</p>
          <div class="conversion-step-time font-mono">60 seconds</div>
        </div>
      </div>

      <div class="conversion-step">
        <div class="conversion-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        <div class="glass-card" style="text-align:center;padding:32px;">
          <div class="conversion-step-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div class="conversion-step-label font-mono">Step 2: Experience</div>
          <h3 class="conversion-step-title font-display">See ShiFt in Action</h3>
          <p class="conversion-step-desc">Experience how AI handles your actual leads</p>
          <div class="conversion-step-time font-mono">Live demo</div>
        </div>
      </div>

      <div class="conversion-step">
        <div class="glass-card" style="text-align:center;padding:32px;">
          <div class="conversion-step-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
          <div class="conversion-step-label font-mono">Step 3: Book</div>
          <h3 class="conversion-step-title font-display">Reality Session</h3>
          <p class="conversion-step-desc">Custom audit of your specific revenue leaks</p>
          <div class="conversion-step-time font-mono">15 minutes</div>
        </div>
      </div>

    </div>
    <div style="text-align:center;margin-top:48px;">
      <a href="https://calc.shiftnow.io" class="btn-primary btn-lg">
        See My Number
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>`;

const CONVERSION_PATH_CSS = `.conversion-steps {
  display: grid; grid-template-columns: 1fr; gap: 32px;
}
@media (min-width: 768px) { .conversion-steps { grid-template-columns: repeat(3,1fr); } }
.conversion-step { position: relative; }
.conversion-arrow {
  display: none; position: absolute; top: 48px; right: -28px; z-index: 10;
}
@media (min-width: 768px) {
  .conversion-arrow { display: block; }
  .conversion-step:last-child .conversion-arrow { display: none; }
}
.conversion-step-icon {
  width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 16px;
  background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12));
  border: 1px solid rgba(245,74,72,0.2);
  display: flex; align-items: center; justify-content: center;
}
.conversion-step-label {
  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4); margin-bottom: 10px;
}
.conversion-step-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 10px; }
.conversion-step-desc { font-size: 0.875rem; color: rgba(255,255,255,0.5); margin-bottom: 16px; line-height: 1.5; }
.conversion-step-time {
  display: inline-flex; padding: 6px 16px; border-radius: 999px;
  background: rgba(250,152,47,0.12); color: #FA982F;
  font-size: 0.75rem; font-weight: 600;
}`;

const CONVERT_FAQ_HTML = `<!-- FAQ SECTION (CONVERT) -->
<section class="section-wrap" id="faq" aria-label="Frequently asked questions">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#F54A48;">Questions</span>
      <h2 class="shift-section-title font-display">Frequently Asked Questions</h2>
    </div>
    <div class="shift-faq-list">
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>How is this different from a chatbot?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>Chatbots collect info. ShiFt AI actually qualifies leads, handles objections, and books appointments—without human intervention.</p></div>
      </div>
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>Will it work for my type of roofing company?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>ShiFt is built specifically for roofing contractors. Residential, commercial, storm restoration—we speak your language.</p></div>
      </div>
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>How fast can I see results?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>Most clients see their first AI-booked appointment within 48 hours of going live.</p></div>
      </div>
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>What if leads prefer to talk to a human?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>ShiFt seamlessly hands off to your team when needed. Warm transfer, full context, no friction.</p></div>
      </div>
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>How much does it cost?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>Less than your worst salesperson and more reliable than your best one. Plans start based on your business size. Calculate your ROI first—most clients see 10x+ return.</p></div>
      </div>
    </div>
  </div>
</section>`;

const FAQ_JS = `function shiftToggleFaq(btn) {
  var item = btn.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.shift-faq-item').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}`;

const FAQ_CSS = `.shift-faq-list { max-width: 800px; margin: 0 auto; }
.shift-faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); }
.shift-faq-item:last-child { border-bottom: none; }
.shift-faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 24px; padding: 24px 0; background: none; border: none; text-align: left;
  font-family: 'Montserrat Alternates',sans-serif; font-size: 1.0625rem;
  font-weight: 600; color: white; cursor: pointer; transition: color 0.2s;
}
.shift-faq-q:hover { color: #F54A48; }
.shift-faq-icon { flex-shrink: 0; color: rgba(255,255,255,0.4); transition: transform 0.3s ease; }
.shift-faq-item.open .shift-faq-icon { transform: rotate(180deg); color: #F54A48; }
.shift-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
.shift-faq-item.open .shift-faq-a { max-height: 300px; padding-bottom: 20px; }
.shift-faq-a p { font-size: 0.9375rem; color: rgba(255,255,255,0.6); line-height: 1.7; }`;

const CONVERT_CTA_HTML = `<!-- CONVERT FINAL CTA -->
<section class="section-wrap" id="cta" aria-label="Final call to action">
  <div class="section-inner">
    <div class="shift-cta-box">
      <div class="shift-cta-glow"></div>
      <div style="position:relative;text-align:center;">
        <h2 class="shift-cta-title font-display">Ready to <span class="shift-gradient-text">Stop the Leak?</span></h2>
        <p class="shift-cta-desc">Get a free revenue audit and see exactly how much money you're leaving on the table. No contracts, no pressure.</p>
        <div class="shift-cta-buttons">
          <a href="https://calc.shiftnow.io" class="btn-primary btn-lg">
            Calculate My Revenue Leak
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/contact" class="btn-outline btn-lg">Talk to Sales</a>
        </div>
        <p class="shift-cta-micro font-mono">Setup in 48 hours · No long-term contracts · Cancel anytime</p>
      </div>
    </div>
  </div>
</section>`;

const CONVERT_FULL_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ShiFt Convert - AI lead conversion system for roofing contractors. Respond in 30 seconds, qualify instantly, book automatically.">
  <meta property="og:title" content="ShiFt Convert - Stop Losing $35K-$100K Monthly to Revenue Leaks">
  <meta property="og:description" content="AI that responds in 30 seconds, qualifies leads instantly, and books appointments 24/7. Calculate your revenue leak now.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://go.shiftnow.io">
  <title>ShiFt Convert - AI Lead Conversion for Roofing Contractors</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"SoftwareApplication","name":"ShiFt Convert","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"AI-powered lead conversion for roofing contractors. 30-second response, instant qualification, automated booking.","url":"https://go.shiftnow.io","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"127"},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free Revenue Leak Calculator"}}
  </script>
  <style>
    /* 1. PASTE GLOBAL CSS (from ExportBrandNeuralOS) */
    /* 2. PASTE NAV CSS (from ExportBrandNeuralOS) */
    /* 3. PASTE PROBLEM CARDS CSS */
    /* 4. PASTE COMPARISON CSS */
    /* 5. PASTE MECHANISM CSS */
    /* 6. PASTE PROOF CSS */
    /* 7. PASTE CONVERSION PATH CSS */
    /* 8. PASTE FAQ CSS */
    /* 9. PASTE CTA CSS (from ExportBrandNeuralOS) */
    /* 10. PASTE FOOTER CSS (from ExportBrandNeuralOS) */
  </style>
</head>
<body>
  <!-- PASTE CONVERT NAV HTML HERE -->
  <main style="padding-top:72px;">
    <!-- PASTE CONVERT HERO HTML HERE -->
    <!-- PASTE PROBLEM CARDS HTML HERE -->
    <!-- PASTE COMPARISON HTML HERE -->
    <!-- PASTE MECHANISM HTML HERE -->
    <!-- PASTE PROOF HTML HERE -->
    <!-- PASTE CONVERSION PATH HTML HERE -->
    <!-- PASTE FAQ HTML HERE -->
    <!-- PASTE CONVERT CTA HTML HERE -->
  </main>
  <!-- PASTE FOOTER HTML (from ExportBrandNeuralOS) -->
  <script>
    /* PASTE NAV JS (from ExportBrandNeuralOS) */
    /* PASTE FAQ JS HERE */
  </script>
</body>
</html>`;

const sections = [
  { id: "convert-nav", title: "1. Convert Navigation Bar", items: [{ label: "HTML", code: CONVERT_NAV_HTML }] },
  { id: "convert-hero", title: "2. Convert Hero Section", items: [{ label: "HTML", code: CONVERT_HERO_HTML }] },
  { id: "problem-cards", title: "3. Revenue Leak Problem Cards", items: [{ label: "HTML", code: PROBLEM_CARDS_HTML }, { label: "CSS", code: PROBLEM_CARDS_CSS }] },
  { id: "comparison", title: "4. Comparison Table (Before vs After)", items: [{ label: "HTML", code: COMPARISON_HTML }, { label: "CSS", code: COMPARISON_CSS }] },
  { id: "mechanism", title: "5. Three-Stage Mechanism (The Solution)", items: [{ label: "HTML", code: MECHANISM_HTML }, { label: "CSS", code: MECHANISM_CSS }] },
  { id: "proof", title: "6. Featured Proof / Case Study", items: [{ label: "HTML", code: PROOF_HTML }, { label: "CSS", code: PROOF_CSS }] },
  { id: "conversion-path", title: "7. Conversion Path / Next Steps", items: [{ label: "HTML", code: CONVERSION_PATH_HTML }, { label: "CSS", code: CONVERSION_PATH_CSS }] },
  { id: "convert-faq", title: "8. FAQ Section", items: [{ label: "HTML", code: CONVERT_FAQ_HTML }, { label: "CSS", code: FAQ_CSS }, { label: "JS", code: FAQ_JS }] },
  { id: "convert-cta", title: "9. Final CTA Section", items: [{ label: "HTML", code: CONVERT_CTA_HTML }] },
  { id: "convert-full", title: "10. Full Page Template (Assembly Guide)", items: [{ label: "HTML", code: CONVERT_FULL_PAGE }] },
];

export default function ExportConvert() {
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
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6" style={{ background: "rgba(245,74,72,0.08)", borderColor: "rgba(245,74,72,0.3)" }}>
            <FileCode className="w-5 h-5" style={{ color: "#F54A48" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>Export Package 3 of 3</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">ShiFt Convert Export</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>Complete HTML/CSS/JS for the ShiFt Convert product page. Elementor-compatible, section-by-section.</p>
        </div>

        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(245,74,72,0.06)", border: "1px solid rgba(245,74,72,0.2)" }}>
          <h2 className="font-display text-lg font-bold text-white mb-3">Note: Shared Components</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            The <strong className="text-white">Global CSS, Footer HTML/CSS, CTA CSS, and Nav JS</strong> are defined in <strong className="text-white">Export Package 1 (NeuralOS)</strong>. Copy those first, then add the Convert-specific code from this package on top.
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
                          <span className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#F54A48" }}>{item.label}</span>
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

        <div className="mt-10 p-5 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            All 3 export packages complete. Start with <strong className="text-white">Package 1 (NeuralOS)</strong> for global CSS/JS, then apply Attract and Convert page-specific styles.
          </p>
        </div>
      </div>
    </div>
  );
}