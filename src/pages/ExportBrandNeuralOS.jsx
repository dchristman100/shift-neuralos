import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

const GLOBAL_CSS = `/* ============================================
   SHIFT NEURALAOS - GLOBAL STYLES
   Compatible with WordPress / Elementor
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap');

:root {
  --shift-navy: #070820;
  --shift-navy-core: #0D0F33;
  --shift-coral: #F54A48;
  --shift-orange: #FA982F;
  --shift-gradient: linear-gradient(135deg, #F54A48, #FA982F);
  --shift-glass: rgba(255,255,255,0.04);
  --shift-glass-border: rgba(255,255,255,0.08);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
body { font-family: 'DM Sans', sans-serif; background: var(--shift-navy); color: #fff; line-height: 1.6; }

.font-display { font-family: 'Montserrat Alternates', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

.shift-gradient-text {
  background: var(--shift-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.shift-gradient-bg { background: var(--shift-gradient); }

.section-wrap { position: relative; width: 100%; padding: 80px 24px; }
.section-inner { position: relative; max-width: 1140px; margin: 0 auto; }
@media (min-width: 768px) { .section-wrap { padding: 112px 32px; } }

.glass-card {
  background: var(--shift-glass);
  border: 1px solid var(--shift-glass-border);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  padding: 16px 32px; background: var(--shift-gradient); color: #fff;
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.875rem;
  text-transform: uppercase; letter-spacing: 0.08em; border-radius: 12px;
  border: none; cursor: pointer; text-decoration: none;
  box-shadow: 0 4px 24px rgba(245,74,72,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(245,74,72,0.4); }

.btn-outline {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  padding: 16px 32px; background: transparent; color: #fff;
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.875rem;
  text-transform: uppercase; letter-spacing: 0.08em; border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.15); cursor: pointer; text-decoration: none;
  transition: all 0.3s ease;
}
.btn-outline:hover { background: rgba(255,255,255,0.08); border-color: rgba(245,74,72,0.5); }

::selection { background: rgba(245,74,72,0.3); color: white; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--shift-navy); }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }`;

const NAV_HTML = `<!-- SHIFT NEURALAOS NAVBAR -->
<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono">NeuralOS</span>
    </div>
    <div class="shift-nav-links" id="shift-nav-links">
      <a href="/how-it-works" class="shift-nav-link">How It Works</a>
      <a href="/revenue-leaks" class="shift-nav-link">Revenue Leaks</a>
      <a href="/results" class="shift-nav-link">Results</a>
      <a href="/packages" class="shift-nav-link">Packages</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/attract" class="shift-pill shift-pill-attract font-mono">
          <span class="shift-pill-dot"></span> Attract
        </a>
        <a href="/convert" class="shift-pill shift-pill-convert shift-pill-active font-mono">
          <span class="shift-pill-dot shift-pill-dot-active"></span> Convert
        </a>
      </div>
      <a href="#calculator" class="btn-primary shift-btn-sm">Find Your Gap</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/how-it-works" class="shift-mobile-link font-display">How It Works</a>
    <a href="/revenue-leaks" class="shift-mobile-link font-display">Revenue Leaks</a>
    <a href="/results" class="shift-mobile-link font-display">Results</a>
    <a href="/packages" class="shift-mobile-link font-display">Packages</a>
    <a href="#calculator" class="btn-primary">Find Your Gap</a>
  </div>
</nav>`;

const NAV_CSS = `.shift-nav {
  position: fixed; top: 0; left: 0; right: 0; height: 72px; z-index: 100;
  background: rgba(7,8,32,0.92); backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 0 24px; transition: background 0.3s ease;
}
.shift-nav.scrolled { background: rgba(7,8,32,0.98); box-shadow: 0 4px 24px rgba(0,0,0,0.4); }
.shift-nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  height: 72px; max-width: 1140px; margin: 0 auto;
}
.shift-nav-logo-group { display: flex; align-items: center; gap: 12px; }
.shift-nav-logo { font-size: 1.25rem; font-weight: 700; color: white; text-decoration: none; }
.shift-nav-badge {
  padding: 4px 12px; border-radius: 999px; font-size: 10px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em; color: #F54A48;
  background: rgba(245,74,72,0.12); border: 1px solid rgba(245,74,72,0.3);
}
.shift-nav-links { display: none; gap: 32px; }
@media (min-width: 1024px) { .shift-nav-links { display: flex; } }
.shift-nav-link {
  font-family: 'DM Sans', sans-serif; font-size: 0.875rem;
  color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s;
}
.shift-nav-link:hover { color: white; }
.shift-nav-right { display: none; align-items: center; gap: 16px; }
@media (min-width: 1024px) { .shift-nav-right { display: flex; } }
.shift-product-pills {
  display: flex; align-items: center; gap: 4px; padding: 4px;
  background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
}
.shift-pill {
  display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px;
  border-radius: 8px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: #9DA3B4; text-decoration: none;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;
}
.shift-pill:hover { background: rgba(255,255,255,0.08); color: white; }
.shift-pill-active {
  background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12));
  border-color: rgba(245,74,72,0.3); color: #F8F9FC;
}
.shift-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #6B7280; }
.shift-pill-dot-active { background: #F54A48; box-shadow: 0 0 8px rgba(245,74,72,0.5); }
.shift-btn-sm { padding: 10px 20px; font-size: 0.75rem; }
.shift-mobile-toggle {
  display: flex; flex-direction: column; gap: 5px; background: none;
  border: none; cursor: pointer; padding: 8px;
}
@media (min-width: 1024px) { .shift-mobile-toggle { display: none; } }
.shift-mobile-toggle span {
  display: block; width: 24px; height: 2px; background: white; transition: all 0.3s ease;
}
.shift-mobile-menu {
  display: none; flex-direction: column; gap: 20px; padding: 24px;
  background: rgba(7,8,32,0.98); border-top: 1px solid rgba(255,255,255,0.08);
}
.shift-mobile-menu.open { display: flex; }
.shift-mobile-link { font-size: 1.25rem; font-weight: 600; color: white; text-decoration: none; }`;

const NAV_JS = `// Navbar scroll effect
var nav = document.getElementById('shift-nav');
window.addEventListener('scroll', function() {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});
// Mobile toggle
var toggle = document.getElementById('shift-mobile-toggle');
var mobileMenu = document.getElementById('shift-mobile-menu');
if (toggle) {
  toggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
  });
}`;

const HERO_HTML = `<!-- NEURALAOS HERO SECTION -->
<section class="shift-hero" id="hero" aria-label="Hero section">
  <div class="shift-hero-bg"></div>
  <div class="section-inner text-center" style="text-align:center;">
    <div class="shift-hero-badge font-mono">
      <span class="shift-pulse-dot"></span>
      AI Revenue Operating System
    </div>
    <h1 class="shift-hero-headline font-display">
      <span class="shift-gradient-text">Revenue Leaks</span><br/>
      Don't Fix Themselves
    </h1>
    <p class="shift-hero-sub">
      Roofing contractors lose $35K–$100K+ monthly to broken lead systems. ShiFt NeuralOS plugs the leaks with AI that generates, qualifies, and converts leads 24/7—without adding headcount.
    </p>
    <div class="shift-hero-ctas">
      <a href="#problem-selector" class="btn-primary btn-lg">
        Find Your Gap
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <p class="shift-hero-micro font-mono">Trusted by 847+ roofing companies across 42 states</p>
  </div>
</section>`;

const HERO_CSS = `.shift-hero {
  position: relative; min-height: 100vh; display: flex; align-items: center;
  justify-content: center; padding: 120px 24px 80px; overflow: hidden; text-align: center;
}
.shift-hero-bg {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 800px; height: 800px; border-radius: 50%;
  background: radial-gradient(circle, rgba(245,74,72,0.15) 0%, transparent 70%);
  pointer-events: none; animation: hero-glow 4s ease-in-out infinite;
}
@keyframes hero-glow {
  0%,100% { opacity: 0.5; transform: translate(-50%,-50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%,-50%) scale(1.1); }
}
.shift-hero-badge {
  display: inline-flex; align-items: center; gap: 12px; padding: 12px 24px;
  border-radius: 999px; background: rgba(245,74,72,0.08);
  border: 1px solid rgba(245,74,72,0.3); margin-bottom: 32px;
  font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: #F54A48;
}
.shift-pulse-dot {
  width: 8px; height: 8px; background: #F54A48; border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite; flex-shrink: 0;
}
@keyframes pulse-dot {
  0%,100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
.shift-hero-headline {
  font-size: 2.5rem; font-weight: 800; line-height: 1.1; color: white;
  margin-bottom: 24px; max-width: 900px; margin-left: auto; margin-right: auto;
}
@media (min-width: 768px) { .shift-hero-headline { font-size: 4rem; } }
@media (min-width: 1024px) { .shift-hero-headline { font-size: 5rem; } }
.shift-hero-sub {
  font-size: 1.125rem; color: rgba(255,255,255,0.65); max-width: 700px;
  margin: 0 auto 48px; line-height: 1.7;
}
@media (min-width: 768px) { .shift-hero-sub { font-size: 1.25rem; } }
.shift-hero-ctas { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; }
.btn-lg { padding: 18px 40px; font-size: 1rem; }
.shift-hero-micro {
  font-size: 0.75rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.1em;
}`;

const PROBLEMS_HTML = `<!-- PROBLEM SELECTOR SECTION -->
<section class="section-wrap" id="problem-selector" aria-label="Identify your revenue gap">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">Diagnose Your Leak</span>
      <h2 class="shift-section-title font-display">What's Draining Your Revenue?</h2>
      <p class="shift-section-desc">Every roofing contractor leaks revenue somewhere. Tell us where yours is hiding.</p>
    </div>
    <div class="shift-problem-grid">
      <a href="/attract" class="shift-problem-card" style="--card-color:#FA982F;">
        <div class="shift-problem-icon" style="background:rgba(250,152,47,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
          </svg>
        </div>
        <h3 class="shift-problem-title font-display">Empty Pipeline</h3>
        <p class="shift-problem-body">Not enough leads coming in. Marketing isn't producing consistent results.</p>
        <div class="shift-problem-link font-mono" style="color:#FA982F;">→ ShiFt Attract</div>
      </a>
      <a href="/convert" class="shift-problem-card" style="--card-color:#F54A48;">
        <div class="shift-problem-icon" style="background:rgba(245,74,72,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h3 class="shift-problem-title font-display">Missed Leads</h3>
        <p class="shift-problem-body">Leads coming in but not converting. Slow response, bad follow-up, no-shows.</p>
        <div class="shift-problem-link font-mono" style="color:#F54A48;">→ ShiFt Convert</div>
      </a>
      <a href="/" class="shift-problem-card" style="--card-color:#48BB78;">
        <div class="shift-problem-icon" style="background:rgba(72,187,120,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
            <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
          </svg>
        </div>
        <h3 class="shift-problem-title font-display">Both Problems</h3>
        <p class="shift-problem-body">Empty pipeline AND low conversion rate. You need the full NeuralOS stack.</p>
        <div class="shift-problem-link font-mono" style="color:#48BB78;">→ Full Platform</div>
      </a>
    </div>
  </div>
</section>`;

const PROBLEMS_CSS = `.shift-section-header { text-align: center; margin-bottom: 56px; }
.shift-section-label {
  display: block; font-size: 0.75rem; text-transform: uppercase;
  letter-spacing: 0.2em; margin-bottom: 16px;
}
.shift-section-title {
  font-size: 2.25rem; font-weight: 800; line-height: 1.1; color: white; margin-bottom: 16px;
}
@media (min-width: 768px) { .shift-section-title { font-size: 3rem; } }
.shift-section-desc {
  font-size: 1rem; color: rgba(255,255,255,0.5); max-width: 600px; margin: 0 auto; line-height: 1.7;
}
.shift-problem-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media (min-width: 768px) { .shift-problem-grid { grid-template-columns: repeat(3,1fr); } }
.shift-problem-card {
  display: block; text-decoration: none; padding: 32px; border-radius: 16px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px); transition: all 0.3s ease;
}
.shift-problem-card:hover {
  background: rgba(255,255,255,0.07); transform: translateY(-4px);
  border-color: var(--card-color, rgba(255,255,255,0.15));
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.shift-problem-icon {
  width: 64px; height: 64px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
}
.shift-problem-title { font-size: 1.25rem; font-weight: 700; color: white; margin-bottom: 12px; }
.shift-problem-body { font-size: 0.875rem; color: rgba(255,255,255,0.5); margin-bottom: 20px; line-height: 1.6; }
.shift-problem-link {
  font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
}`;

const TWO_PRODUCTS_HTML = `<!-- TWO PRODUCTS SECTION -->
<section class="section-wrap" id="platform" aria-label="ShiFt platform products">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#F54A48;">The Platform</span>
      <h2 class="shift-section-title font-display">Two Systems. One Revenue Machine.</h2>
      <p class="shift-section-desc">ShiFt NeuralOS™ runs both sides of your revenue equation simultaneously.</p>
    </div>
    <div class="shift-products-grid">
      <!-- Attract -->
      <div class="shift-product-card shift-product-attract">
        <div class="shift-product-header">
          <div class="shift-product-badge font-mono" style="color:#FA982F;background:rgba(250,152,47,0.12);border-color:rgba(250,152,47,0.3);">
            ShiFt Attract
          </div>
          <h3 class="shift-product-title font-display">Fill Your Pipeline</h3>
          <p class="shift-product-desc">AI-powered lead generation across every channel. Google, Facebook, Instagram, TikTok—your AI works them all.</p>
        </div>
        <ul class="shift-product-features">
          <li><span class="shift-check" style="color:#FA982F;">✓</span> Multi-channel AI campaigns</li>
          <li><span class="shift-check" style="color:#FA982F;">✓</span> Real-time lead scoring</li>
          <li><span class="shift-check" style="color:#FA982F;">✓</span> Storm & property intelligence</li>
          <li><span class="shift-check" style="color:#FA982F;">✓</span> Predictable lead volume</li>
        </ul>
        <a href="/attract" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);display:inline-flex;align-items:center;gap:8px;">
          Explore Attract →
        </a>
      </div>
      <!-- Convert -->
      <div class="shift-product-card shift-product-convert">
        <div class="shift-product-header">
          <div class="shift-product-badge font-mono" style="color:#F54A48;background:rgba(245,74,72,0.12);border-color:rgba(245,74,72,0.3);">
            ShiFt Convert
          </div>
          <h3 class="shift-product-title font-display">Convert Every Lead</h3>
          <p class="shift-product-desc">AI that responds in 30 seconds, qualifies instantly, and books appointments automatically—day or night.</p>
        </div>
        <ul class="shift-product-features">
          <li><span class="shift-check" style="color:#F54A48;">✓</span> 30-second AI response</li>
          <li><span class="shift-check" style="color:#F54A48;">✓</span> Instant lead qualification</li>
          <li><span class="shift-check" style="color:#F54A48;">✓</span> Automated appointment booking</li>
          <li><span class="shift-check" style="color:#F54A48;">✓</span> 24/7 follow-up sequences</li>
        </ul>
        <a href="/convert" class="btn-primary" style="display:inline-flex;align-items:center;gap:8px;">
          Explore Convert →
        </a>
      </div>
    </div>
  </div>
</section>`;

const TWO_PRODUCTS_CSS = `.shift-products-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media (min-width: 768px) { .shift-products-grid { grid-template-columns: repeat(2,1fr); } }
.shift-product-card {
  padding: 40px; border-radius: 20px; backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}
.shift-product-card:hover { transform: translateY(-4px); }
.shift-product-attract {
  background: linear-gradient(135deg, rgba(250,152,47,0.08), rgba(250,152,47,0.04));
  border: 1px solid rgba(250,152,47,0.25);
}
.shift-product-convert {
  background: linear-gradient(135deg, rgba(245,74,72,0.08), rgba(245,74,72,0.04));
  border: 1px solid rgba(245,74,72,0.25);
}
.shift-product-badge {
  display: inline-flex; padding: 8px 16px; border-radius: 999px;
  font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; border: 1px solid; margin-bottom: 20px;
}
.shift-product-title { font-size: 1.75rem; font-weight: 800; color: white; margin-bottom: 12px; }
.shift-product-desc { font-size: 0.9375rem; color: rgba(255,255,255,0.6); margin-bottom: 28px; line-height: 1.6; }
.shift-product-features { list-style: none; padding: 0; margin-bottom: 32px; }
.shift-product-features li {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.875rem; color: rgba(255,255,255,0.75); padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.shift-check { font-weight: 700; font-size: 1rem; }`;

const SOCIAL_PROOF_HTML = `<!-- SOCIAL PROOF / TESTIMONIALS -->
<section class="section-wrap" id="testimonials" aria-label="Client testimonials">
  <div class="section-inner">
    <div class="shift-section-header" style="text-align:center;">
      <span class="shift-section-label font-mono" style="color:#FA982F;">Results</span>
      <h2 class="shift-section-title font-display">Trusted by <span class="shift-gradient-text">Top Contractors</span></h2>
      <p class="shift-section-desc">Roofing companies across the country are scaling with ShiFt NeuralOS™.</p>
    </div>
    <div class="shift-testimonial-grid">
      <div class="shift-testimonial-card glass-card">
        <div class="shift-stars">★★★★★</div>
        <p class="shift-testimonial-quote">"ShiFt turned our business around. We went from chasing leads to having a waitlist. Revenue doubled in 6 months."</p>
        <div class="shift-testimonial-author">
          <div class="shift-avatar" style="background:linear-gradient(135deg,#F54A48,#FA982F);">M</div>
          <div>
            <div class="shift-author-name font-display">Marcus Johnson</div>
            <div class="shift-author-role">Owner, Apex Roofing Co.</div>
          </div>
        </div>
      </div>
      <div class="shift-testimonial-card glass-card">
        <div class="shift-stars">★★★★★</div>
        <p class="shift-testimonial-quote">"The AI assistant books 40+ inspections a week for us. It's like having a sales team that never sleeps."</p>
        <div class="shift-testimonial-author">
          <div class="shift-avatar" style="background:linear-gradient(135deg,#FA982F,#F54A48);">S</div>
          <div>
            <div class="shift-author-name font-display">Sarah Chen</div>
            <div class="shift-author-role">GM, Summit Storm Solutions</div>
          </div>
        </div>
      </div>
      <div class="shift-testimonial-card glass-card">
        <div class="shift-stars">★★★★★</div>
        <p class="shift-testimonial-quote">"Property intelligence alone paid for the platform in the first month. We're closing neighborhoods, not just houses."</p>
        <div class="shift-testimonial-author">
          <div class="shift-avatar" style="background:linear-gradient(135deg,#F54A48,#FA982F);">D</div>
          <div>
            <div class="shift-author-name font-display">David Martinez</div>
            <div class="shift-author-role">CEO, Eagle Eye Roofing</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

const SOCIAL_PROOF_CSS = `.shift-testimonial-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media (min-width: 768px) { .shift-testimonial-grid { grid-template-columns: repeat(3,1fr); } }
.shift-testimonial-card { display: flex; flex-direction: column; gap: 16px; }
.shift-stars { color: #FA982F; font-size: 1rem; letter-spacing: 2px; }
.shift-testimonial-quote { font-size: 0.9375rem; color: rgba(255,255,255,0.65); line-height: 1.7; flex: 1; }
.shift-testimonial-author { display: flex; align-items: center; gap: 12px; }
.shift-avatar {
  width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center;
  justify-content: center; font-family: 'Montserrat Alternates',sans-serif;
  font-size: 0.875rem; font-weight: 700; color: white; flex-shrink: 0;
}
.shift-author-name { font-size: 0.875rem; font-weight: 600; color: white; }
.shift-author-role { font-size: 0.75rem; color: rgba(255,255,255,0.4); }`;

const CTA_HTML = `<!-- FINAL CTA SECTION -->
<section class="section-wrap" id="cta" aria-label="Call to action">
  <div class="section-inner">
    <div class="shift-cta-box">
      <div class="shift-cta-glow"></div>
      <div style="position:relative;text-align:center;">
        <h2 class="shift-cta-title font-display">Ready to <span class="shift-gradient-text">ShiFt</span> Your Revenue?</h2>
        <p class="shift-cta-desc">Get a free revenue audit and see exactly how much money you're leaving on the table. No contracts, no pressure.</p>
        <div class="shift-cta-buttons">
          <a href="#calculator" class="btn-primary btn-lg">
            Start Free Audit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/contact" class="btn-outline btn-lg">Talk to Sales</a>
        </div>
        <p class="shift-cta-micro font-mono">Setup in 48 hours · No long-term contracts · Cancel anytime</p>
      </div>
    </div>
  </div>
</section>`;

const CTA_CSS = `.shift-cta-box {
  position: relative; border-radius: 24px; overflow: hidden;
  padding: 64px 32px; text-align: center;
  background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.08));
  border: 1px solid rgba(245,74,72,0.15);
}
@media (min-width: 768px) { .shift-cta-box { padding: 96px 64px; } }
.shift-cta-glow {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%) translateY(-50%);
  width: 500px; height: 300px; border-radius: 50%;
  background: radial-gradient(ellipse, rgba(245,74,72,0.15), transparent 70%);
  pointer-events: none;
}
.shift-cta-title {
  font-size: 2rem; font-weight: 800; color: white; margin-bottom: 20px; line-height: 1.2;
}
@media (min-width: 768px) { .shift-cta-title { font-size: 3rem; } }
.shift-cta-desc {
  font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 500px; margin: 0 auto 36px; line-height: 1.7;
}
.shift-cta-buttons {
  display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 24px;
}
.shift-cta-micro { font-size: 0.75rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.1em; }`;

const FOOTER_HTML = `<!-- FOOTER -->
<footer class="shift-footer" id="footer" aria-label="Site footer">
  <div class="section-inner">
    <div class="shift-footer-grid">
      <div class="shift-footer-brand">
        <div class="shift-footer-logo font-display">ShiFt<span class="shift-gradient-text">.</span></div>
        <p class="shift-footer-tagline">The AI Revenue Operating System for roofing contractors.</p>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Product</h4>
        <ul class="shift-footer-links">
          <li><a href="/how-it-works">How It Works</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/attract">ShiFt Attract</a></li>
          <li><a href="/convert">ShiFt Convert</a></li>
        </ul>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Company</h4>
        <ul class="shift-footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resources">Resources</a></li>
        </ul>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Legal</h4>
        <ul class="shift-footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="shift-footer-bottom">
      <p>© 2026 ShiFt NeuralOS™. All rights reserved.</p>
      <p class="font-mono" style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.2);">AI Revenue Operating System</p>
    </div>
  </div>
</footer>`;

const FOOTER_CSS = `.shift-footer {
  padding: 64px 24px 32px;
  border-top: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.01);
}
.shift-footer-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 48px;
}
@media (min-width: 1024px) { .shift-footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
.shift-footer-brand { grid-column: 1/-1; }
@media (min-width: 1024px) { .shift-footer-brand { grid-column: auto; } }
.shift-footer-logo { font-size: 1.5rem; font-weight: 700; color: white; margin-bottom: 12px; }
.shift-footer-tagline { font-size: 0.875rem; color: rgba(255,255,255,0.4); line-height: 1.6; }
.shift-footer-heading {
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.15em; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.shift-footer-links { list-style: none; padding: 0; }
.shift-footer-links li { margin-bottom: 10px; }
.shift-footer-links a {
  font-size: 0.875rem; color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s;
}
.shift-footer-links a:hover { color: #F54A48; }
.shift-footer-bottom {
  display: flex; flex-direction: column; gap: 8px; padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.75rem; color: rgba(255,255,255,0.25);
}
@media (min-width: 768px) { .shift-footer-bottom { flex-direction: row; justify-content: space-between; } }`;

const FULL_PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ShiFt NeuralOS - AI Revenue Operating System for roofing contractors. Plug your revenue leaks with AI that generates, qualifies, and converts leads 24/7.">
  <meta property="og:title" content="ShiFt NeuralOS - AI Revenue Operating System">
  <meta property="og:description" content="Roofing contractors lose $35K-$100K+ monthly to broken lead systems. ShiFt NeuralOS plugs the leaks.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://shiftnow.io">
  <title>ShiFt NeuralOS - AI Revenue Operating System for Roofing Contractors</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Organization","name":"ShiFt NeuralOS","url":"https://shiftnow.io","description":"AI Revenue Operating System for roofing contractors","sameAs":["https://linkedin.com/company/shiftnow"]}
  </script>
  <style>
    /* PASTE GLOBAL CSS HERE */
    /* PASTE NAV CSS HERE */
    /* PASTE HERO CSS HERE */
    /* PASTE PROBLEMS CSS HERE */
    /* PASTE TWO PRODUCTS CSS HERE */
    /* PASTE SOCIAL PROOF CSS HERE */
    /* PASTE CTA CSS HERE */
    /* PASTE FOOTER CSS HERE */
  </style>
</head>
<body>
  <!-- PASTE NAV HTML HERE -->
  <main style="padding-top:72px;">
    <!-- PASTE HERO HTML HERE -->
    <!-- PASTE PROBLEMS HTML HERE -->
    <!-- PASTE TWO PRODUCTS HTML HERE -->
    <!-- PASTE SOCIAL PROOF HTML HERE -->
    <!-- PASTE CTA HTML HERE -->
  </main>
  <!-- PASTE FOOTER HTML HERE -->
  <script>
    /* PASTE NAV JS HERE */
  </script>
</body>
</html>`;

// --- Component ---
const sections = [
  { id: "global-css", title: "1. Global CSS (Add to All Pages)", items: [{ label: "CSS", code: GLOBAL_CSS }] },
  { id: "nav", title: "2. Navigation Bar", items: [{ label: "HTML", code: NAV_HTML }, { label: "CSS", code: NAV_CSS }, { label: "JS", code: NAV_JS }] },
  { id: "hero", title: "3. Hero Section", items: [{ label: "HTML", code: HERO_HTML }, { label: "CSS", code: HERO_CSS }] },
  { id: "problems", title: "4. Problem Selector / Find Your Gap", items: [{ label: "HTML", code: PROBLEMS_HTML }, { label: "CSS", code: PROBLEMS_CSS }] },
  { id: "products", title: "5. Two Products Section (Attract + Convert)", items: [{ label: "HTML", code: TWO_PRODUCTS_HTML }, { label: "CSS", code: TWO_PRODUCTS_CSS }] },
  { id: "proof", title: "6. Social Proof / Testimonials", items: [{ label: "HTML", code: SOCIAL_PROOF_HTML }, { label: "CSS", code: SOCIAL_PROOF_CSS }] },
  { id: "cta", title: "7. Final CTA Section", items: [{ label: "HTML", code: CTA_HTML }, { label: "CSS", code: CTA_CSS }] },
  { id: "footer", title: "8. Footer", items: [{ label: "HTML", code: FOOTER_HTML }, { label: "CSS", code: FOOTER_CSS }] },
  { id: "full-page", title: "9. Full Page Template (Assembly Guide)", items: [{ label: "HTML", code: FULL_PAGE_HTML }] },
];

export default function ExportBrandNeuralOS() {
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
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>Export Package 1 of 3</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">ShiFt NeuralOS Export</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>Complete HTML/CSS/JS for the ShiFt NeuralOS brand homepage. Elementor-compatible, section-by-section.</p>
        </div>

        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(72,187,120,0.08)", border: "1px solid rgba(72,187,120,0.2)" }}>
          <h2 className="font-display text-lg font-bold text-white mb-3">Elementor Import Instructions</h2>
          <ol className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <li><strong className="text-white">1.</strong> Add Global CSS to <em>Appearance → Customize → Additional CSS</em> (or Elementor → Custom CSS)</li>
            <li><strong className="text-white">2.</strong> For each section: Add an <strong className="text-white">HTML widget</strong> in Elementor and paste the HTML code</li>
            <li><strong className="text-white">3.</strong> Add section CSS to the widget's <strong className="text-white">Advanced → Custom CSS</strong> tab</li>
            <li><strong className="text-white">4.</strong> Add JS to <em>Appearance → Theme Editor → footer.php</em> before <code>&lt;/body&gt;</code></li>
            <li><strong className="text-white">5.</strong> Use the Full Page Template (section 9) as your complete standalone HTML file</li>
          </ol>
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

        <div className="mt-10 p-5 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            <strong className="text-white">Next:</strong> See <strong className="text-white">Export Package 2</strong> (ShiFt Attract) and <strong className="text-white">Export Package 3</strong> (ShiFt Convert) for those product pages.
          </p>
        </div>
      </div>
    </div>
  );
}