import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

const ATTRACT_NAV_HTML = `<!-- SHIFT ATTRACT NAVBAR -->
<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#FA982F;background:rgba(250,152,47,0.12);border-color:rgba(250,152,47,0.3);">Attract</span>
    </div>
    <div class="shift-nav-links">
      <a href="/attract/how-it-works" class="shift-nav-link">How It Works</a>
      <a href="/attract/results" class="shift-nav-link">Results</a>
      <a href="/attract/pricing" class="shift-nav-link">Pricing</a>
      <a href="/attract/book" class="shift-nav-link">Book Audit</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/attract" class="shift-pill shift-pill-active" style="background:linear-gradient(135deg,rgba(250,152,47,0.12),rgba(250,152,47,0.08));border-color:rgba(250,152,47,0.3);color:#F8F9FC;" >
          <span class="shift-pill-dot" style="background:#FA982F;box-shadow:0 0 8px rgba(250,152,47,0.5);"></span> Attract
        </a>
        <a href="/convert" class="shift-pill" style="color:#9DA3B4;">
          <span class="shift-pill-dot"></span> Convert
        </a>
      </div>
      <a href="#audit" class="btn-primary shift-btn-sm">Audit My Pipeline</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/attract/how-it-works" class="shift-mobile-link font-display">How It Works</a>
    <a href="/attract/results" class="shift-mobile-link font-display">Results</a>
    <a href="/attract/pricing" class="shift-mobile-link font-display">Pricing</a>
    <a href="#audit" class="btn-primary">Audit My Pipeline</a>
  </div>
</nav>`;

const ATTRACT_HERO_HTML = `<!-- ATTRACT HERO SECTION -->
<section class="shift-hero" id="hero" aria-label="ShiFt Attract hero">
  <div class="attract-hero-bg"></div>
  <div class="section-inner" style="text-align:center;">
    <div class="shift-hero-badge font-mono" style="background:rgba(250,152,47,0.08);border-color:rgba(250,152,47,0.3);color:#FA982F;">
      <span class="shift-pulse-dot" style="background:#FA982F;"></span>
      AI Lead Generation for Roofing Contractors
    </div>
    <h1 class="shift-hero-headline font-display">
      Your <span style="background:linear-gradient(135deg,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Pipeline Is Empty</span><br/>
      Because Your Marketing Isn't Working
    </h1>
    <p class="shift-hero-sub">
      You're spending on ads, SEO, and agencies—but the phone isn't ringing. ShiFt Attract uses AI to generate qualified leads across every channel, 24 hours a day.
    </p>
    <div class="shift-hero-ctas">
      <a href="#audit" class="btn-primary btn-lg" style="background:linear-gradient(135deg,#FA982F,#F54A48);">
        Audit My Pipeline
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <p class="shift-hero-micro font-mono">Free pipeline audit. See exactly where leads should be coming from.</p>
  </div>
</section>`;

const ATTRACT_HERO_CSS = `.attract-hero-bg {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 800px; height: 800px; border-radius: 50%;
  background: radial-gradient(circle, rgba(250,152,47,0.15) 0%, rgba(245,74,72,0.05) 50%, transparent 70%);
  pointer-events: none; animation: hero-glow 4s ease-in-out infinite;
}`;

const PROBLEMS_HTML = `<!-- EMPTY PIPELINE PROBLEMS SECTION -->
<section class="section-wrap" id="problems" aria-label="Pipeline problems">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">The Problem</span>
      <h2 class="shift-section-title font-display">Why Your Pipeline Stays Empty</h2>
      <p class="shift-section-desc">Three systemic failures that keep roofing contractors stuck in feast-or-famine cycles.</p>
    </div>
    <div class="attract-problems-grid">

      <div class="attract-problem-card" style="--accent:#FA982F;">
        <div class="attract-problem-accent" style="background:#FA982F;"></div>
        <div class="attract-problem-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <h3 class="attract-problem-title font-display">Invisible to High-Intent Buyers</h3>
        <p class="attract-problem-headline">"They searched. They found your competitor."</p>
        <p class="attract-problem-body">67% of roofing decisions start online. If you're not ranking on Google, Facebook, and YouTube—you simply don't exist to the buyer.</p>
        <div class="attract-problem-stat">
          <div class="attract-stat-value shift-gradient-text">$22K–$65K</div>
          <div class="attract-stat-label font-mono">in lost jobs monthly</div>
        </div>
        <div class="attract-problem-pain">"I didn't know you existed—I Googled 'roofers near me' and called the first three."</div>
      </div>

      <div class="attract-problem-card" style="--accent:#F54A48;">
        <div class="attract-problem-accent" style="background:#F54A48;"></div>
        <div class="attract-problem-icon" style="background:rgba(245,74,72,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <h3 class="attract-problem-title font-display">Referral Dependency Trap</h3>
        <p class="attract-problem-headline">"Next month's revenue is a guess."</p>
        <p class="attract-problem-body">Referrals are great—until they stop. 43% of contractors rely on referrals for 70%+ of revenue. That's not a business, that's a prayer.</p>
        <div class="attract-problem-stat">
          <div class="attract-stat-value shift-gradient-text">43%</div>
          <div class="attract-stat-label font-mono">over-dependent on referrals</div>
        </div>
        <div class="attract-problem-pain">"We had three referrals cancel in one week. We didn't know where our next job was coming from."</div>
      </div>

      <div class="attract-problem-card" style="--accent:#48BB78;">
        <div class="attract-problem-accent" style="background:#48BB78;"></div>
        <div class="attract-problem-icon" style="background:rgba(72,187,120,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
            <path d="M3 3h18v18H3zM12 8v8M8 12h8"/>
          </svg>
        </div>
        <h3 class="attract-problem-title font-display">Ad Spend with No ROI</h3>
        <p class="attract-problem-headline">"Spending $3K/month. Getting nothing."</p>
        <p class="attract-problem-body">Most roofing contractors waste $2K–$5K/month on ads that don't convert. Wrong targeting, wrong message, wrong platform. AI fixes all three.</p>
        <div class="attract-problem-stat">
          <div class="attract-stat-value shift-gradient-text">$3.2K</div>
          <div class="attract-stat-label font-mono">wasted monthly on average</div>
        </div>
        <div class="attract-problem-pain">"Our agency kept saying 'it takes time.' After 8 months, we fired them and found ShiFt."</div>
      </div>

    </div>
  </div>
</section>`;

const PROBLEMS_CSS = `.attract-problems-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media (min-width: 768px) { .attract-problems-grid { grid-template-columns: repeat(3,1fr); } }
.attract-problem-card {
  position: relative; padding: 32px; border-radius: 16px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px); overflow: hidden; transition: all 0.3s ease;
}
.attract-problem-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-4px); }
.attract-problem-accent {
  position: absolute; top: 0; left: 0; width: 4px; height: 100%; border-radius: 4px 0 0 4px;
}
.attract-problem-icon {
  width: 64px; height: 64px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
}
.attract-problem-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 8px; }
.attract-problem-headline {
  font-size: 0.875rem; font-style: italic; color: rgba(255,255,255,0.5); margin-bottom: 12px;
}
.attract-problem-body { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 24px; }
.attract-problem-stat { margin-bottom: 16px; }
.attract-stat-value { font-family: 'Montserrat Alternates',sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 4px; }
.attract-stat-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.4); }
.attract-problem-pain {
  padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.75rem; font-style: italic; color: rgba(255,255,255,0.35);
}`;

const SOLUTION_HTML = `<!-- ATTRACT SOLUTION / CAPABILITIES SECTION -->
<section class="section-wrap" id="solution" aria-label="ShiFt Attract solution" style="background:linear-gradient(to bottom, transparent, rgba(250,152,47,0.02));">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">The Solution</span>
      <h2 class="shift-section-title font-display">AI Lead Generation That Never Sleeps</h2>
      <p class="shift-section-desc">ShiFt Attract runs multi-channel AI campaigns that fill your pipeline 24/7—while you focus on closing jobs.</p>
    </div>
    <div class="attract-capabilities-grid">

      <div class="attract-cap-card glass-card">
        <div class="attract-cap-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <h3 class="attract-cap-title font-display">Multi-Channel AI Campaigns</h3>
        <p class="attract-cap-desc">Google, Facebook, Instagram, TikTok, YouTube, and local SEO—all managed by AI that optimizes in real-time.</p>
        <div class="attract-cap-benefit font-mono" style="color:#FA982F;">→ 3x more visibility</div>
      </div>

      <div class="attract-cap-card glass-card">
        <div class="attract-cap-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <h3 class="attract-cap-title font-display">Storm & Property Intelligence</h3>
        <p class="attract-cap-desc">AI detects storm-hit neighborhoods and identifies homeowners actively searching for roofing help before competitors know.</p>
        <div class="attract-cap-benefit font-mono" style="color:#FA982F;">→ First-mover advantage</div>
      </div>

      <div class="attract-cap-card glass-card">
        <div class="attract-cap-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <h3 class="attract-cap-title font-display">Real-Time Lead Scoring</h3>
        <p class="attract-cap-desc">Every lead is scored instantly. High-intent buyers get priority. Tire kickers get filtered out automatically.</p>
        <div class="attract-cap-benefit font-mono" style="color:#FA982F;">→ 73% better lead quality</div>
      </div>

      <div class="attract-cap-card glass-card">
        <div class="attract-cap-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </div>
        <h3 class="attract-cap-title font-display">Predictable Lead Volume</h3>
        <p class="attract-cap-desc">Set your target. AI hits it. No more feast-or-famine cycles—just consistent, qualified leads every month.</p>
        <div class="attract-cap-benefit font-mono" style="color:#FA982F;">→ 50–175 leads/month</div>
      </div>

      <div class="attract-cap-card glass-card">
        <div class="attract-cap-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
          </svg>
        </div>
        <h3 class="attract-cap-title font-display">ROI Dashboard</h3>
        <p class="attract-cap-desc">Real-time visibility into every dollar spent and every lead generated. No more guessing what's working.</p>
        <div class="attract-cap-benefit font-mono" style="color:#FA982F;">→ Full attribution</div>
      </div>

      <div class="attract-cap-card glass-card">
        <div class="attract-cap-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
          </svg>
        </div>
        <h3 class="attract-cap-title font-display">Seamless Handoff to Convert</h3>
        <p class="attract-cap-desc">Every qualified lead flows directly into ShiFt Convert for instant AI follow-up, qualification, and booking.</p>
        <div class="attract-cap-benefit font-mono" style="color:#FA982F;">→ Zero lead leakage</div>
      </div>

    </div>
  </div>
</section>`;

const SOLUTION_CSS = `.attract-capabilities-grid {
  display: grid; grid-template-columns: 1fr; gap: 20px;
}
@media (min-width: 640px) { .attract-capabilities-grid { grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px) { .attract-capabilities-grid { grid-template-columns: repeat(3,1fr); } }
.attract-cap-card { transition: transform 0.3s ease; }
.attract-cap-card:hover { transform: translateY(-4px); }
.attract-cap-icon {
  width: 56px; height: 56px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
}
.attract-cap-title { font-size: 1.125rem; font-weight: 700; color: white; margin-bottom: 10px; }
.attract-cap-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 16px; }
.attract-cap-benefit { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }`;

const ATTRACT_SOCIAL_HTML = `<!-- ATTRACT TESTIMONIALS / RESULTS -->
<section class="section-wrap" id="results" aria-label="Results and social proof" style="background:linear-gradient(to bottom, rgba(250,152,47,0.02), transparent);">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">Results</span>
      <h2 class="shift-section-title font-display">Pipelines That <span style="background:linear-gradient(135deg,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Never Run Dry</span></h2>
    </div>
    <div class="attract-stats-bar">
      <div class="attract-stat-item">
        <div class="attract-stat-big" style="color:#FA982F;">847+</div>
        <div class="attract-stat-desc">Roofing companies served</div>
      </div>
      <div class="attract-stat-divider"></div>
      <div class="attract-stat-item">
        <div class="attract-stat-big" style="color:#F54A48;">3.4x</div>
        <div class="attract-stat-desc">Average lead volume increase</div>
      </div>
      <div class="attract-stat-divider"></div>
      <div class="attract-stat-item">
        <div class="attract-stat-big" style="color:#48BB78;">48hrs</div>
        <div class="attract-stat-desc">To first qualified leads</div>
      </div>
      <div class="attract-stat-divider"></div>
      <div class="attract-stat-item">
        <div class="attract-stat-big" style="color:#FA982F;">$0</div>
        <div class="attract-stat-desc">Wasted ad spend after AI optimization</div>
      </div>
    </div>
    <div class="shift-testimonial-grid" style="margin-top:40px;">
      <div class="shift-testimonial-card glass-card">
        <div class="shift-stars">★★★★★</div>
        <p class="shift-testimonial-quote">"ShiFt turned our business around. We went from chasing leads to having a waitlist. Revenue doubled in 6 months."</p>
        <div class="shift-testimonial-author">
          <div class="shift-avatar" style="background:linear-gradient(135deg,#FA982F,#F54A48);">M</div>
          <div>
            <div class="shift-author-name font-display">Marcus Johnson</div>
            <div class="shift-author-role">Owner, Apex Roofing Co.</div>
          </div>
        </div>
      </div>
      <div class="shift-testimonial-card glass-card">
        <div class="shift-stars">★★★★★</div>
        <p class="shift-testimonial-quote">"We went from inconsistent referrals to 125 qualified leads per month. ShiFt Attract is the best investment we've made."</p>
        <div class="shift-testimonial-author">
          <div class="shift-avatar" style="background:linear-gradient(135deg,#F54A48,#FA982F);">S</div>
          <div>
            <div class="shift-author-name font-display">Sarah Chen</div>
            <div class="shift-author-role">GM, Summit Storm Solutions</div>
          </div>
        </div>
      </div>
      <div class="shift-testimonial-card glass-card">
        <div class="shift-stars">★★★★★</div>
        <p class="shift-testimonial-quote">"The storm intelligence feature alone paid for a year of ShiFt. We were knocking on doors before anyone else even knew there was damage."</p>
        <div class="shift-testimonial-author">
          <div class="shift-avatar" style="background:linear-gradient(135deg,#FA982F,#F54A48);">D</div>
          <div>
            <div class="shift-author-name font-display">David Martinez</div>
            <div class="shift-author-role">CEO, Eagle Eye Roofing</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

const ATTRACT_SOCIAL_CSS = `.attract-stats-bar {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 32px;
  padding: 40px; border-radius: 20px; margin-bottom: 24px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
}
.attract-stat-item { text-align: center; }
.attract-stat-big {
  font-family: 'Montserrat Alternates',sans-serif; font-size: 2.5rem;
  font-weight: 800; margin-bottom: 8px;
}
.attract-stat-desc { font-size: 0.875rem; color: rgba(255,255,255,0.5); max-width: 140px; line-height: 1.4; }
.attract-stat-divider {
  width: 1px; background: rgba(255,255,255,0.08); display: none;
}
@media (min-width: 768px) { .attract-stat-divider { display: block; } }`;

const ATTRACT_FAQ_HTML = `<!-- FAQ SECTION -->
<section class="section-wrap" id="faq" aria-label="Frequently asked questions">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">Questions</span>
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
        <div class="shift-faq-a"><p>Most clients see their first AI-generated leads within 48 hours of going live. Full pipeline fill typically happens in 30 days.</p></div>
      </div>
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>Do I need to manage the campaigns myself?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>No. ShiFt Attract runs fully managed AI campaigns. We handle setup, optimization, and reporting. You just close the jobs.</p></div>
      </div>
      <div class="shift-faq-item">
        <button class="shift-faq-q" onclick="shiftToggleFaq(this)">
          <span>How much does ShiFt Attract cost?</span>
          <svg class="shift-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="shift-faq-a"><p>Plans start at $997/month plus ad spend. If you're currently wasting $3K/month on ineffective marketing, ShiFt pays for itself immediately. Get a free audit to see your specific numbers.</p></div>
      </div>
    </div>
  </div>
</section>`;

const FAQ_CSS = `.shift-faq-list { max-width: 800px; margin: 0 auto; }
.shift-faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); }
.shift-faq-item:last-child { border-bottom: none; }
.shift-faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 24px; padding: 24px 0; background: none; border: none; text-align: left;
  font-family: 'Montserrat Alternates',sans-serif; font-size: 1.0625rem;
  font-weight: 600; color: white; cursor: pointer; transition: color 0.2s;
}
.shift-faq-q:hover { color: #FA982F; }
.shift-faq-icon { flex-shrink: 0; color: rgba(255,255,255,0.4); transition: transform 0.3s ease; }
.shift-faq-item.open .shift-faq-icon { transform: rotate(180deg); color: #FA982F; }
.shift-faq-a { max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.2s ease; }
.shift-faq-item.open .shift-faq-a { max-height: 300px; padding-bottom: 20px; }
.shift-faq-a p { font-size: 0.9375rem; color: rgba(255,255,255,0.6); line-height: 1.7; }`;

const FAQ_JS = `function shiftToggleFaq(btn) {
  var item = btn.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.shift-faq-item').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}`;

const ATTRACT_CTA_HTML = `<!-- ATTRACT CTA SECTION -->
<section class="section-wrap" id="audit" aria-label="Get free pipeline audit">
  <div class="section-inner">
    <div class="shift-cta-box" style="background:linear-gradient(135deg,rgba(250,152,47,0.12),rgba(245,74,72,0.08));border-color:rgba(250,152,47,0.2);">
      <div class="shift-cta-glow" style="background:radial-gradient(ellipse, rgba(250,152,47,0.15), transparent 70%);"></div>
      <div style="position:relative;text-align:center;">
        <h2 class="shift-cta-title font-display">Ready to <span style="background:linear-gradient(135deg,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Fill Your Pipeline?</span></h2>
        <p class="shift-cta-desc">Get a free pipeline audit. We'll show you exactly where leads should be coming from—and why they aren't.</p>
        <div class="shift-cta-buttons">
          <a href="#audit-form" class="btn-primary btn-lg" style="background:linear-gradient(135deg,#FA982F,#F54A48);">
            Get Free Audit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/attract/pricing" class="btn-outline btn-lg">View Pricing</a>
        </div>
        <p class="shift-cta-micro font-mono">Free audit · No commitment · Results in 48 hours</p>
      </div>
    </div>
  </div>
</section>`;

const ATTRACT_FULL_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ShiFt Attract - AI-powered lead generation for roofing contractors. Fill your pipeline with qualified leads 24/7.">
  <meta property="og:title" content="ShiFt Attract - AI Lead Generation for Roofing Contractors">
  <meta property="og:description" content="Stop relying on referrals. AI-powered multi-channel lead generation that fills your pipeline predictably.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://attract.shiftnow.io">
  <title>ShiFt Attract - AI Lead Generation for Roofing Contractors</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"SoftwareApplication","name":"ShiFt Attract","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"AI-powered lead generation for roofing contractors","url":"https://attract.shiftnow.io","offers":{"@type":"Offer","price":"0","priceCurrency":"USD","description":"Free Pipeline Audit"}}
  </script>
  <style>
    /* 1. PASTE GLOBAL CSS (from ExportBrandNeuralOS) */
    /* 2. PASTE NAV CSS (from ExportBrandNeuralOS) */
    /* 3. PASTE ATTRACT HERO CSS */
    /* 4. PASTE PROBLEMS CSS */
    /* 5. PASTE SOLUTION CSS */
    /* 6. PASTE ATTRACT SOCIAL CSS */
    /* 7. PASTE FAQ CSS */
    /* 8. PASTE CTA CSS (from ExportBrandNeuralOS) */
    /* 9. PASTE FOOTER CSS (from ExportBrandNeuralOS) */
  </style>
</head>
<body>
  <!-- PASTE ATTRACT NAV HTML HERE -->
  <main style="padding-top:72px;">
    <!-- PASTE ATTRACT HERO HTML HERE -->
    <!-- PASTE PROBLEMS HTML HERE -->
    <!-- PASTE SOLUTION HTML HERE -->
    <!-- PASTE ATTRACT SOCIAL HTML HERE -->
    <!-- PASTE FAQ HTML HERE -->
    <!-- PASTE ATTRACT CTA HTML HERE -->
  </main>
  <!-- PASTE FOOTER HTML (from ExportBrandNeuralOS) -->
  <script>
    /* PASTE NAV JS (from ExportBrandNeuralOS) */
    /* PASTE FAQ JS HERE */
  </script>
</body>
</html>`;

const sections = [
  { id: "attract-nav", title: "1. Attract Navigation Bar", items: [{ label: "HTML", code: ATTRACT_NAV_HTML }] },
  { id: "attract-hero", title: "2. Attract Hero Section", items: [{ label: "HTML", code: ATTRACT_HERO_HTML }, { label: "CSS (add to Global CSS)", code: ATTRACT_HERO_CSS }] },
  { id: "attract-problems", title: "3. Empty Pipeline Problems Section", items: [{ label: "HTML", code: PROBLEMS_HTML }, { label: "CSS", code: PROBLEMS_CSS }] },
  { id: "attract-solution", title: "4. Attract Solution / Capabilities", items: [{ label: "HTML", code: SOLUTION_HTML }, { label: "CSS", code: SOLUTION_CSS }] },
  { id: "attract-proof", title: "5. Results & Testimonials", items: [{ label: "HTML", code: ATTRACT_SOCIAL_HTML }, { label: "CSS", code: ATTRACT_SOCIAL_CSS }] },
  { id: "attract-faq", title: "6. FAQ Section", items: [{ label: "HTML", code: ATTRACT_FAQ_HTML }, { label: "CSS", code: FAQ_CSS }, { label: "JS", code: FAQ_JS }] },
  { id: "attract-cta", title: "7. Attract CTA / Free Audit", items: [{ label: "HTML", code: ATTRACT_CTA_HTML }] },
  { id: "attract-full", title: "8. Full Page Template (Assembly Guide)", items: [{ label: "HTML", code: ATTRACT_FULL_PAGE }] },
];

export default function ExportAttract() {
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
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6" style={{ background: "rgba(250,152,47,0.08)", borderColor: "rgba(250,152,47,0.3)" }}>
            <FileCode className="w-5 h-5" style={{ color: "#FA982F" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#FA982F" }}>Export Package 2 of 3</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">ShiFt Attract Export</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>Complete HTML/CSS/JS for the ShiFt Attract product page. Elementor-compatible, section-by-section.</p>
        </div>

        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(250,152,47,0.06)", border: "1px solid rgba(250,152,47,0.2)" }}>
          <h2 className="font-display text-lg font-bold text-white mb-3">Note: Shared Components</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            The <strong className="text-white">Global CSS, Footer HTML/CSS, and Nav JS</strong> are defined in <strong className="text-white">Export Package 1 (NeuralOS)</strong>. Copy those first, then add the Attract-specific code from this package on top.
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
                          <span className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#FA982F" }}>{item.label}</span>
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