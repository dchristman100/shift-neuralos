import React, { useState } from "react";
import { Copy, Check, Download, ChevronDown, ChevronRight, Globe, Layers, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

// ─── COPY BUTTON ────────────────────────────────────────────────────────────
function CopyBtn({ code, id, copied, onCopy, size = "sm" }) {
  const active = copied === id;
  return (
    <button
      onClick={() => onCopy(code, id)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all"
      style={{
        background: active ? "rgba(72,187,120,0.15)" : "rgba(255,255,255,0.06)",
        border: `1px solid ${active ? "rgba(72,187,120,0.3)" : "rgba(255,255,255,0.1)"}`,
        color: active ? "#48BB78" : "rgba(255,255,255,0.6)",
      }}
    >
      {active ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {active ? "Copied!" : "Copy"}
    </button>
  );
}

// ─── CODE BLOCK ─────────────────────────────────────────────────────────────
function CodeBlock({ code, id, copied, onCopy, label }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
          style={{ background: "rgba(245,74,72,0.1)", color: "#F54A48" }}>{label}</span>
        <CopyBtn code={code} id={id} copied={copied} onCopy={onCopy} />
      </div>
      <pre className="rounded-lg p-4 overflow-x-auto text-xs leading-relaxed"
        style={{ background: "#0A0C28", border: "1px solid rgba(255,255,255,0.08)", color: "#CBD5E0", maxHeight: 320 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── ACCORDION SECTION ──────────────────────────────────────────────────────
function AccordionSection({ id, title, badge, items, expanded, onToggle, copied, onCopy }) {
  const open = expanded[id];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[rgba(255,255,255,0.02)]"
      >
        <div className="flex items-center gap-3">
          {open ? <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#F54A48" }} />
            : <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }} />}
          <span className="font-display text-base font-bold text-white">{title}</span>
          {badge && (
            <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(245,74,72,0.1)", color: "#FA982F" }}>
              {badge}
            </span>
          )}
        </div>
        <CopyBtn code={items.map(i => i.code).join("\n\n")} id={`${id}-all`} copied={copied} onCopy={onCopy} />
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="pt-4 space-y-5">
            {items.map((item, i) => (
              <CodeBlock
                key={i}
                label={item.label}
                code={item.code}
                id={`${id}-${i}`}
                copied={copied}
                onCopy={onCopy}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PAGE GROUP ─────────────────────────────────────────────────────────────
function PageGroup({ title, color, dotColor, badge, exportPagePath, sections, expanded, onToggle, copied, onCopy }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${color}33` }}>
      <div className="px-6 py-5 flex items-center justify-between" style={{ background: `${color}0A` }}>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: dotColor, boxShadow: `0 0 8px ${dotColor}80` }} />
          <h2 className="font-display text-lg font-bold text-white">{title}</h2>
          {badge && <span className="font-mono text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider" style={{ background: `${color}15`, color: dotColor, border: `1px solid ${color}40` }}>{badge}</span>}
        </div>
        {exportPagePath && (
          <Link
            to={createPageUrl(exportPagePath)}
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <ExternalLink className="w-3 h-3" /> Full Export Page
          </Link>
        )}
      </div>
      <div className="p-5 space-y-3">
        {sections.map((sec) => (
          <AccordionSection
            key={sec.id}
            {...sec}
            expanded={expanded}
            onToggle={onToggle}
            copied={copied}
            onCopy={onCopy}
          />
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CODE CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

const GLOBAL_CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap');
:root{--shift-navy:#070820;--shift-navy-core:#0D0F33;--shift-coral:#F54A48;--shift-orange:#FA982F;--shift-gradient:linear-gradient(135deg,#F54A48,#FA982F);--shift-glass:rgba(255,255,255,0.04);--shift-glass-border:rgba(255,255,255,0.08);}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;}
body{font-family:'DM Sans',sans-serif;background:var(--shift-navy);color:#fff;line-height:1.6;}
.font-display{font-family:'Montserrat Alternates',sans-serif;}.font-mono{font-family:'JetBrains Mono',monospace;}
.shift-gradient-text{background:var(--shift-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.section-wrap{position:relative;width:100%;padding:80px 24px;}.section-inner{position:relative;max-width:1140px;margin:0 auto;}
@media(min-width:768px){.section-wrap{padding:112px 32px;}}
.glass-card{background:var(--shift-glass);border:1px solid var(--shift-glass-border);border-radius:16px;padding:32px;backdrop-filter:blur(10px);}
.btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:16px 32px;background:var(--shift-gradient);color:#fff;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:.875rem;text-transform:uppercase;letter-spacing:.08em;border-radius:12px;border:none;cursor:pointer;text-decoration:none;box-shadow:0 4px 24px rgba(245,74,72,.3);transition:transform .3s ease,box-shadow .3s ease;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(245,74,72,.4);}
.btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:16px 32px;background:transparent;color:#fff;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:.875rem;text-transform:uppercase;letter-spacing:.08em;border-radius:12px;border:1px solid rgba(255,255,255,.15);cursor:pointer;text-decoration:none;transition:all .3s ease;}
.btn-outline:hover{background:rgba(255,255,255,.08);border-color:rgba(245,74,72,.5);}
::selection{background:rgba(245,74,72,.3);color:white;}
.shift-section-header{text-align:center;margin-bottom:56px;}
.shift-section-label{display:block;font-size:.75rem;text-transform:uppercase;letter-spacing:.2em;margin-bottom:16px;}
.shift-section-title{font-size:2.25rem;font-weight:800;line-height:1.1;color:white;margin-bottom:16px;}
@media(min-width:768px){.shift-section-title{font-size:3rem;}}
.shift-section-desc{font-size:1rem;color:rgba(255,255,255,.5);max-width:600px;margin:0 auto;line-height:1.7;}
.shift-cta-box{position:relative;border-radius:24px;overflow:hidden;padding:64px 32px;text-align:center;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.08));border:1px solid rgba(245,74,72,.15);}
.shift-cta-title{font-size:2rem;font-weight:800;color:white;margin-bottom:20px;line-height:1.2;}
@media(min-width:768px){.shift-cta-title{font-size:3rem;}}
.shift-cta-desc{font-size:1rem;color:rgba(255,255,255,.55);max-width:500px;margin:0 auto 36px;line-height:1.7;}
.shift-cta-buttons{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px;}
.shift-cta-micro{font-size:.75rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;}
.shift-avatar{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;}`;

const NEURALAOS_NAV_HTML = `<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#FFD700;background:rgba(255,215,0,0.10);border-color:rgba(255,215,0,0.3);">NeuralOS™</span>
    </div>
    <div class="shift-nav-links">
      <a href="/revenue-engine-plans" class="shift-nav-link">Revenue Engine Plans</a>
      <a href="/dashboard-preview" class="shift-nav-link">Dashboard Preview</a>
      <a href="/platform" class="shift-nav-link">Platform</a>
      <a href="/roofing" class="shift-nav-link">Roofing</a>
      <a href="/about" class="shift-nav-link">About</a>
      <a href="/contact" class="shift-nav-link">Contact</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/attract" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Attract</a>
        <a href="/convert" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Convert</a>
      </div>
      <a href="/revenue-engine-plans" class="btn-primary shift-btn-sm">Find Your Gap</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/revenue-engine-plans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="/platform" class="shift-mobile-link font-display">Platform</a>
    <a href="/roofing" class="shift-mobile-link font-display">Roofing</a>
    <a href="/resources" class="shift-mobile-link font-display">Resources</a>
    <a href="/about" class="shift-mobile-link font-display">About</a>
    <a href="/contact" class="shift-mobile-link font-display">Contact</a>
    <a href="/revenue-engine-plans" class="btn-primary">Find Your Gap</a>
  </div>
</nav>`;

const CONVERT_NAV_HTML = `<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#F54A48;background:rgba(245,74,72,0.12);border-color:rgba(245,74,72,0.3);">Convert</span>
    </div>
    <div class="shift-nav-links">
      <a href="/how-it-works" class="shift-nav-link">How It Works</a>
      <a href="/revenue-leaks" class="shift-nav-link">Revenue Leaks</a>
      <a href="/results" class="shift-nav-link">Results</a>
      <a href="/dashboard-preview" class="shift-nav-link">Dashboard Preview</a>
      <a href="/revenue-engine-plans" class="shift-nav-link">Revenue Engine Plans</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/attract" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Attract</a>
        <a href="/convert" class="shift-pill shift-pill-active font-mono"><span class="shift-pill-dot shift-pill-dot-active"></span> Convert</a>
      </div>
      <a href="https://calc.shiftnow.io" class="btn-primary shift-btn-sm">See My Number</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/how-it-works" class="shift-mobile-link font-display">How It Works</a>
    <a href="/revenue-leaks" class="shift-mobile-link font-display">Revenue Leaks</a>
    <a href="/results" class="shift-mobile-link font-display">Results</a>
    <a href="/revenue-engine-plans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="https://calc.shiftnow.io" class="btn-primary">See My Number</a>
  </div>
</nav>`;

const ATTRACT_NAV_HTML = `<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#FA982F;background:rgba(250,152,47,0.15);border-color:rgba(250,152,47,0.3);">Attract</span>
    </div>
    <div class="shift-nav-links">
      <a href="/attract/how-it-works" class="shift-nav-link">How It Works</a>
      <a href="/attract/empty-pipeline" class="shift-nav-link">Empty Pipeline</a>
      <a href="/attract/results" class="shift-nav-link">Results</a>
      <a href="/revenue-engine-plans" class="shift-nav-link">Revenue Engine Plans</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/attract" class="shift-pill shift-pill-active font-mono" style="background:linear-gradient(135deg,rgba(250,152,47,0.12),rgba(250,152,47,0.08));border-color:rgba(250,152,47,0.3);color:#F8F9FC;"><span class="shift-pill-dot" style="background:#FA982F;box-shadow:0 0 8px rgba(250,152,47,0.5);"></span> Attract</a>
        <a href="/convert" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Convert</a>
      </div>
      <a href="#audit" class="btn-primary shift-btn-sm" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Audit My Pipeline</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/attract/how-it-works" class="shift-mobile-link font-display">How It Works</a>
    <a href="/attract/empty-pipeline" class="shift-mobile-link font-display">Empty Pipeline</a>
    <a href="/attract/results" class="shift-mobile-link font-display">Results</a>
    <a href="/revenue-engine-plans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="#audit" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Audit My Pipeline</a>
  </div>
</nav>`;

const NAV_CSS = `.shift-nav{position:fixed;top:0;left:0;right:0;height:72px;z-index:100;background:rgba(7,8,32,.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08);padding:0 24px;transition:background .3s ease;}
.shift-nav.scrolled{background:rgba(7,8,32,.98);box-shadow:0 4px 24px rgba(0,0,0,.4);}
.shift-nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px;max-width:1140px;margin:0 auto;}
.shift-nav-logo-group{display:flex;align-items:center;gap:12px;}
.shift-nav-logo{font-size:1.25rem;font-weight:700;color:white;text-decoration:none;}
.shift-nav-badge{padding:4px 12px;border-radius:999px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;border:1px solid;}
.shift-nav-links{display:none;gap:28px;}@media(min-width:1024px){.shift-nav-links{display:flex;}}
.shift-nav-link{font-family:'DM Sans',sans-serif;font-size:.875rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s;}.shift-nav-link:hover{color:white;}
.shift-nav-right{display:none;align-items:center;gap:16px;}@media(min-width:1024px){.shift-nav-right{display:flex;}}
.shift-product-pills{display:flex;align-items:center;gap:4px;padding:4px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:10px;}
.shift-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#9DA3B4;text-decoration:none;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);transition:all .3s ease;}
.shift-pill:hover{background:rgba(255,255,255,.08);color:white;}
.shift-pill-active{background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.12));border-color:rgba(245,74,72,.3);color:#F8F9FC;}
.shift-pill-dot{width:6px;height:6px;border-radius:50%;background:#6B7280;}.shift-pill-dot-active{background:#F54A48;box-shadow:0 0 8px rgba(245,74,72,.5);}
.shift-btn-sm{padding:10px 20px;font-size:.75rem;}
.shift-mobile-toggle{display:flex;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:8px;}@media(min-width:1024px){.shift-mobile-toggle{display:none;}}
.shift-mobile-toggle span{display:block;width:24px;height:2px;background:white;transition:all .3s ease;}
.shift-mobile-menu{display:none;flex-direction:column;gap:20px;padding:24px;background:rgba(7,8,32,.98);border-top:1px solid rgba(255,255,255,.08);}
.shift-mobile-menu.open{display:flex;}.shift-mobile-link{font-size:1.25rem;font-weight:600;color:white;text-decoration:none;}`;

const NAV_JS = `var nav=document.getElementById('shift-nav');
window.addEventListener('scroll',function(){if(window.scrollY>40)nav.classList.add('scrolled');else nav.classList.remove('scrolled');});
var toggle=document.getElementById('shift-mobile-toggle');
var mobileMenu=document.getElementById('shift-mobile-menu');
if(toggle){toggle.addEventListener('click',function(){mobileMenu.classList.toggle('open');});}`;

const FOOTER_HTML = `<footer class="shift-footer" id="footer">
  <div class="section-inner">
    <div class="shift-footer-grid">
      <div class="shift-footer-brand">
        <div class="shift-footer-logo font-display">ShiFt<span class="shift-gradient-text">.</span></div>
        <p class="shift-footer-tagline">The AI Revenue Operating System for roofing contractors.</p>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Product</h4>
        <ul class="shift-footer-links">
          <li><a href="/features">Features</a></li>
          <li><a href="/revenue-engine-plans">Revenue Engine Plans</a></li>
          <li><a href="/integrations">Integrations</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
        </ul>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Company</h4>
        <ul class="shift-footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Legal</h4>
        <ul class="shift-footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/cookie-policy">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="shift-footer-bottom">
      <p>© 2026 ShiFt NeuralOS™. All rights reserved.</p>
      <p class="font-mono" style="font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.2);">AI Revenue Operating System</p>
    </div>
  </div>
</footer>`;

const FOOTER_CSS = `.shift-footer{padding:64px 24px 32px;border-top:1px solid rgba(255,255,255,.06);}
.shift-footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-bottom:48px;}
@media(min-width:1024px){.shift-footer-grid{grid-template-columns:2fr 1fr 1fr 1fr;}}
.shift-footer-brand{grid-column:1/-1;}@media(min-width:1024px){.shift-footer-brand{grid-column:auto;}}
.shift-footer-logo{font-size:1.5rem;font-weight:700;color:white;margin-bottom:12px;}
.shift-footer-tagline{font-size:.875rem;color:rgba(255,255,255,.4);line-height:1.6;}
.shift-footer-heading{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.5);margin-bottom:16px;}
.shift-footer-links{list-style:none;padding:0;}.shift-footer-links li{margin-bottom:10px;}
.shift-footer-links a{font-size:.875rem;color:rgba(255,255,255,.35);text-decoration:none;transition:color .2s;}.shift-footer-links a:hover{color:#F54A48;}
.shift-footer-bottom{display:flex;flex-direction:column;gap:8px;padding-top:24px;border-top:1px solid rgba(255,255,255,.06);font-size:.75rem;color:rgba(255,255,255,.25);}
@media(min-width:768px){.shift-footer-bottom{flex-direction:row;justify-content:space-between;}}`;

const NEURALAOS_HOME_HTML = `<!-- NEURALAOS HOME: Hero + Problem Selector + Two Products + Social Proof + CTA -->
<!-- Use Global CSS + NeuralOS Nav + Footer from above -->
<!-- See ExportBrandNeuralOS for complete section-by-section breakdown -->
<main style="padding-top:72px;">
  <!-- Hero Section -->
  <section class="shift-hero" id="hero" style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;position:relative;">
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(245,74,72,.15) 0%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner" style="position:relative;">
      <div class="shift-hero-badge font-mono" style="display:inline-flex;align-items:center;gap:12px;padding:12px 24px;border-radius:999px;background:rgba(245,74,72,.08);border:1px solid rgba(245,74,72,.3);margin-bottom:32px;font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;color:#F54A48;">
        <span style="width:8px;height:8px;background:#F54A48;border-radius:50%;animation:pulse-dot 2s ease-in-out infinite;flex-shrink:0;"></span>
        AI Revenue Operating System
      </div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,5rem);font-weight:800;line-height:1.1;color:white;margin-bottom:24px;">
        <span class="shift-gradient-text">Revenue Leaks</span><br/>Don't Fix Themselves
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,.65);max-width:700px;margin:0 auto 48px;line-height:1.7;">
        Roofing contractors lose $35K–$100K+ monthly to broken lead systems. ShiFt NeuralOS plugs the leaks with AI that generates, qualifies, and converts leads 24/7.
      </p>
      <a href="#problem-selector" class="btn-primary" style="padding:18px 40px;font-size:1rem;">Find Your Gap →</a>
    </div>
  </section>
</main>`;

const CONVERT_HOME_HTML = `<!-- CONVERT HOME: Hero + Problem Cards + Comparison + Mechanism + Proof + Conversion Path + FAQ + CTA -->
<!-- Use Global CSS + Convert Nav + Footer from above -->
<!-- See ExportConvert for complete section-by-section breakdown -->
<main style="padding-top:72px;">
  <section class="shift-hero" id="hero" style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;position:relative;">
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(245,74,72,.12) 0%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner" style="position:relative;">
      <div class="font-mono" style="display:inline-flex;align-items:center;gap:12px;padding:12px 24px;border-radius:999px;background:rgba(245,74,72,.08);border:1px solid rgba(245,74,72,.3);margin-bottom:32px;font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;color:#F54A48;">
        <span style="width:8px;height:8px;background:#F54A48;border-radius:50%;flex-shrink:0;"></span>
        Calculating Live Revenue Leaks
      </div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,5rem);font-weight:800;line-height:1.1;color:white;margin-bottom:24px;">
        <span class="shift-gradient-text">Three Revenue Leaks</span><br/>Are Costing You $35K–$100K+
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,.65);max-width:700px;margin:0 auto 48px;line-height:1.7;">
        Missed calls. Junk leads. Invisible buyers. See exactly how much they're costing your business.
      </p>
      <a href="https://calc.shiftnow.io" class="btn-primary" style="padding:18px 40px;font-size:1rem;">Calculate My Revenue Leak →</a>
    </div>
  </section>
</main>`;

const ATTRACT_HOME_HTML = `<!-- ATTRACT HOME: Hero + Empty Pipeline Problems + Solution + Social Proof + FAQ + CTA -->
<!-- Use Global CSS + Attract Nav + Footer from above -->
<!-- See ExportAttract for complete section-by-section breakdown -->
<main style="padding-top:72px;">
  <section class="shift-hero" id="hero" style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;position:relative;">
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(250,152,47,.15) 0%,rgba(245,74,72,.05) 50%,transparent 70%);pointer-events:none;"></div>
    <div class="section-inner" style="position:relative;">
      <div class="font-mono" style="display:inline-flex;align-items:center;gap:12px;padding:12px 24px;border-radius:999px;background:rgba(250,152,47,.08);border:1px solid rgba(250,152,47,.3);margin-bottom:32px;font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;color:#FA982F;">
        <span style="width:8px;height:8px;background:#FA982F;border-radius:50%;flex-shrink:0;"></span>
        AI Lead Generation for Roofing Contractors
      </div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,5rem);font-weight:800;line-height:1.1;color:white;margin-bottom:24px;">
        Your <span style="background:linear-gradient(135deg,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Pipeline Is Empty</span><br/>Because Your Marketing Isn't Working
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,.65);max-width:700px;margin:0 auto 48px;line-height:1.7;">
        ShiFt Attract uses AI to generate qualified leads across every channel, 24 hours a day.
      </p>
      <a href="#audit" class="btn-primary" style="padding:18px 40px;font-size:1rem;background:linear-gradient(135deg,#FA982F,#F54A48);">Audit My Pipeline →</a>
    </div>
  </section>
</main>`;

const REVENUE_PLANS_HTML = `<!-- REVENUE ENGINE PLANS PAGE: complete standalone -->
<!-- Contains: Hero, Problem Stats, System Overview, Case Study, ROI Math, Package Cards (Activate/Amplify/Dominate), Feature Table, 90-Day Guarantee, CTA -->
<!-- See ExportRevenueEnginePlans for the full section-by-section breakdown with all CSS -->
<!-- Quick embed: paste this stub + link to the full plans page -->
<section class="section-wrap" style="background:#0D0F33;text-align:center;">
  <div class="section-inner">
    <div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.2em;color:#FA982F;margin-bottom:20px;">Revenue Engine Plans</div>
    <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:20px;">Three Packages. One Goal.<br><span class="shift-gradient-text">Booked Jobs.</span></h2>
    <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:560px;margin:0 auto 36px;line-height:1.7;">Every package includes a $5,000 one-time Revenue Engine Installation + 90-Day Revenue Floor.</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:700px;margin:0 auto 36px;">
      <div style="background:rgba(245,74,72,.06);border:1px solid rgba(245,74,72,.2);border-radius:14px;padding:24px 16px;text-align:center;">
        <div class="font-display" style="font-size:.9rem;font-weight:800;color:#F54A48;margin-bottom:8px;">ACTIVATE</div>
        <div class="font-display" style="font-size:1.75rem;font-weight:900;color:white;">$1,997<span style="font-size:.875rem;color:rgba(255,255,255,.4);">/mo</span></div>
        <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-top:4px;">+ 15% RevShare</div>
      </div>
      <div style="background:linear-gradient(180deg,rgba(245,74,72,.10),rgba(255,255,255,.03));border:1px solid rgba(245,74,72,.35);border-radius:14px;padding:24px 16px;text-align:center;position:relative;">
        <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#F54A48,#FA982F);font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;color:#fff;padding:3px 12px;border-radius:999px;white-space:nowrap;">Most Popular</div>
        <div class="font-display" style="font-size:.9rem;font-weight:800;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px;">AMPLIFY</div>
        <div class="font-display" style="font-size:1.75rem;font-weight:900;color:white;">$3,497<span style="font-size:.875rem;color:rgba(255,255,255,.4);">/mo</span></div>
        <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-top:4px;">+ 12% RevShare</div>
      </div>
      <div style="background:rgba(255,215,0,.04);border:1px solid rgba(255,215,0,.2);border-radius:14px;padding:24px 16px;text-align:center;">
        <div class="font-display" style="font-size:.9rem;font-weight:800;color:#FFD700;margin-bottom:8px;">DOMINATE</div>
        <div class="font-display" style="font-size:1.75rem;font-weight:900;color:white;">$8,997<span style="font-size:.875rem;color:rgba(255,255,255,.4);">/mo</span></div>
        <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-top:4px;">+ 10% RevShare</div>
      </div>
    </div>
    <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="padding:16px 40px;">Book a Strategy Call →</a>
  </div>
</section>`;

const OTHER_PAGES_HTML = `<!-- OTHER PAGES — Complete URL Reference for WordPress/Elementor -->
<!--
  ── NEURALAOS BRAND SITE ──────────────────────────────────────────────────
  /                   → NeuralOS Home (Hero + Problem Selector + Two Products + Proof + CTA)
  /BrandHome          → Brand Home (same as above, React route)
  /platform           → Platform Page (NeuralOS system overview)
  /roofing            → Roofing Page (industry-specific landing)
  /resources          → Resources Page (guides, tools, downloads)
  /about              → About Page (company mission & values)
  /careers            → Careers Page (open positions)
  /blog               → Blog Page (roofing revenue articles)
  /contact            → Contact Page (form + info)
  /features           → Features Page (AI tools breakdown)
  /integrations       → Integrations Page (CRM, calendar, ad platforms)
  /case-studies       → Case Studies Page (contractor success stories)

  ── REVENUE ENGINE PLANS ─────────────────────────────────────────────────
  /RevenueEnginePlans → Revenue Engine Plans (Activate / Amplify / Dominate)
  /Packages           → Legacy Packages Page (alternate plans view)
  /Pricing            → Pricing Page

  ── SHIFTCONVERT PRODUCT SITE ────────────────────────────────────────────
  /Home               → Convert Home (Hero + Revenue Leaks + Proof + CTA)
  /HowItWorks         → Convert: How It Works (3-stage process)
  /RevenueLeaks       → Convert: Revenue Leaks (3 leak types)
  /Results            → Convert: Results (Titan Roofing case study)
  /Book               → Convert: Book a Call / Demo booking page

  ── SHIFTATTRACT PRODUCT SITE ────────────────────────────────────────────
  /AttractHome        → Attract Home (Hero + Empty Pipeline + Solution + Proof + CTA)
  /AttractHowItWorks  → Attract: How It Works (lead gen process)
  /AttractEmptyPipeline → Attract: Empty Pipeline Problem
  /AttractResults     → Attract: Results & pipeline proof
  /AttractPricing     → Attract: Pricing
  /AttractBook        → Attract: Book a Pipeline Audit

  ── LEGAL ────────────────────────────────────────────────────────────────
  /PrivacyPolicy      → Privacy Policy (Effective March 15, 2026)
  /TermsOfService     → Terms of Service (Effective March 15, 2026)
  /CookiePolicy       → Cookie Policy (Effective March 15, 2026)

  ── NEURALAOS DASHBOARD PREVIEW ──────────────────────────────────────────
  /NeuralOSDashboard  → Dashboard Preview (live KPIs, lead qualification feed, revenue charts, activity log)

  ── EXPORT PAGES (Internal Dev Tool) ────────────────────────────────────
  /MasterExport       → This page — full site export hub
  /ExportBrandNeuralOS → NeuralOS Brand: global CSS, nav, all sections
  /ExportConvert      → ShiFt Convert: full page section-by-section
  /ExportAttract      → ShiFt Attract: full page section-by-section
  /ExportRevenueEnginePlans → Revenue Engine Plans: full page
  /ExportHowItWorks   → Convert: How It Works (per-section HTML/CSS)
  /ExportRevenueLeaks → Convert: Revenue Leaks (per-section HTML/CSS)
  /ExportResults      → Convert: Results / Case Study (per-section HTML/CSS)
  /ExportAttractEmptyPipeline → Attract: Empty Pipeline (per-section HTML/CSS)
-->`;

const FAQ_JS_CODE = `function shiftToggleFaq(btn){var item=btn.parentElement;var isOpen=item.classList.contains('open');document.querySelectorAll('.shift-faq-item').forEach(function(i){i.classList.remove('open');});if(!isOpen)item.classList.add('open');}`;

// Full Site Assembly
const buildFullSite = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="ShiFt NeuralOS - AI Revenue Operating System for roofing contractors">
  <meta property="og:title" content="ShiFt NeuralOS - AI Revenue Operating System">
  <meta property="og:url" content="https://shiftnow.io">
  <title>ShiFt NeuralOS - AI Revenue Operating System for Roofing Contractors</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Organization","name":"ShiFt NeuralOS","url":"https://shiftnow.io","telephone":"(707) SHIFT-NOW","address":{"@type":"PostalAddress","streetAddress":"12460 Crabapple Road, Ste 202-522","addressLocality":"Alpharetta","addressRegion":"GA","postalCode":"30004","addressCountry":"US"}}
  </script>
  <style>
${GLOBAL_CSS}
${NAV_CSS}
${FOOTER_CSS}
  </style>
</head>
<body>
  <!-- ═══ NEURALAOS NAV (swap for Convert or Attract nav as needed) ═══ -->
${NEURALAOS_NAV_HTML}

  <!-- ═══ MAIN CONTENT ═══ -->
${NEURALAOS_HOME_HTML}

  <!-- ═══ FOOTER ═══ -->
${FOOTER_HTML}

  <script>
${NAV_JS}
${FAQ_JS_CODE}
  </script>
</body>
</html>`;

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function MasterExport() {
  const [expanded, setExpanded] = useState({});
  const [copied, setCopied] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleFullSiteExport = () => {
    setDownloading(true);
    const html = buildFullSite();
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ShiFtNeuralOS-FullSite.html";
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(false), 1500);
  };

  const pageGroups = [
    {
      title: "Shared Foundation",
      color: "#48BB78",
      dotColor: "#48BB78",
      badge: "Required on ALL pages",
      exportPagePath: "ExportBrandNeuralOS",
      sections: [
        { id: "global-css", title: "Global CSS + Fonts", badge: "Base", items: [{ label: "CSS", code: GLOBAL_CSS }] },
        { id: "nav-css-js", title: "Navbar CSS + JS (Shared)", badge: "All Navbars", items: [{ label: "CSS", code: NAV_CSS }, { label: "JS", code: NAV_JS }] },
        { id: "footer", title: "Footer (Product / Company / Legal)", items: [{ label: "HTML", code: FOOTER_HTML }, { label: "CSS", code: FOOTER_CSS }] },
        { id: "faq-js", title: "FAQ Accordion JS", items: [{ label: "JS", code: FAQ_JS_CODE }] },
      ],
    },
    {
      title: "ShiFt NeuralOS Header",
      color: "#FFD700",
      dotColor: "#FFD700",
      badge: "Revenue Engine Plans · Platform · Roofing · Resources · About · Contact",
      exportPagePath: "ExportBrandNeuralOS",
      sections: [
        { id: "neuralaos-nav", title: "NeuralOS Navigation Bar", items: [{ label: "HTML", code: NEURALAOS_NAV_HTML }] },
      ],
    },
    {
      title: "ShiFt Convert Header",
      color: "#F54A48",
      dotColor: "#F54A48",
      badge: "How It Works · Revenue Leaks · Results · Dashboard Preview · Revenue Engine Plans",
      exportPagePath: "ExportConvert",
      sections: [
        { id: "convert-nav", title: "Convert Navigation Bar", items: [{ label: "HTML", code: CONVERT_NAV_HTML }] },
      ],
    },
    {
      title: "ShiFt Attract Header",
      color: "#FA982F",
      dotColor: "#FA982F",
      badge: "How It Works · Empty Pipeline · Results · Revenue Engine Plans",
      exportPagePath: "ExportAttract",
      sections: [
        { id: "attract-nav", title: "Attract Navigation Bar", items: [{ label: "HTML", code: ATTRACT_NAV_HTML }] },
      ],
    },
    {
      title: "ShiFt NeuralOS Home Page",
      color: "#FFD700",
      dotColor: "#FFD700",
      exportPagePath: "ExportBrandNeuralOS",
      sections: [
        { id: "neuralaos-home", title: "NeuralOS Home Page (Hero + Full Assembly)", items: [{ label: "HTML", code: NEURALAOS_HOME_HTML }] },
      ],
    },
    {
      title: "ShiFt Convert Home Page",
      color: "#F54A48",
      dotColor: "#F54A48",
      exportPagePath: "ExportConvert",
      sections: [
        { id: "convert-home", title: "Convert Home Page (Hero + Full Assembly)", items: [{ label: "HTML", code: CONVERT_HOME_HTML }] },
      ],
    },
    {
      title: "ShiFt Attract Home Page",
      color: "#FA982F",
      dotColor: "#FA982F",
      exportPagePath: "ExportAttract",
      sections: [
        { id: "attract-home", title: "Attract Home Page (Hero + Full Assembly)", items: [{ label: "HTML", code: ATTRACT_HOME_HTML }] },
      ],
    },
    {
      title: "NeuralOS Dashboard Preview Page",
      color: "#63B3ED",
      dotColor: "#63B3ED",
      badge: "Trust-Building · Prospect-Facing",
      exportPagePath: "NeuralOSDashboard",
      sections: [
        {
          id: "neuralaos-dashboard",
          title: "NeuralOS Dashboard Preview",
          items: [{
            label: "INFO",
            code: `<!-- Route: /NeuralOSDashboard\n     URL:   ShiFtNow.io/NeuralOSDashboard\n     Purpose: High-fidelity mock-up of the contractor portal shown to prospects to build trust\n     Sections:\n       - Live KPI row (AI conversations, bookings, avg response, monthly revenue, close rate, ROI)\n       - 8-week platform-attributed revenue line chart\n       - Leads vs Booked 7-day bar chart\n       - Filterable AI Lead Intelligence table (status, lead score, est. value, AI response time)\n       - Live AI Activity Log (booked / qualifying / follow-up / inbound / storm events)\n       - Trust strip (Live in 7 Days / Every Lead Captured / Full Transparency / 90-Day Floor)\n       - CTA → Book a Strategy Call\n     Nav: Linked from NeuralOS Brand Navbar and ShiFt Convert Navbar as "Dashboard Preview"\n     Export: React-only page (recharts + framer-motion) — no static HTML equivalent -->`
          }]
        },
      ],
    },
    {
      title: "Revenue Engine Plans Page",
      color: "#F54A48",
      dotColor: "#FA982F",
      exportPagePath: "ExportRevenueEnginePlans",
      sections: [
        { id: "rev-plans", title: "Revenue Engine Plans (Activate / Amplify / Dominate)", items: [{ label: "HTML", code: REVENUE_PLANS_HTML }] },
      ],
    },
    {
      title: "ShiFt Convert — Inner Pages",
      color: "#F54A48",
      dotColor: "#F54A48",
      badge: "How It Works · Revenue Leaks · Results · Dashboard Preview · Revenue Engine Plans · Book",
      sections: [
        { id: "convert-how-it-works", title: "Convert: How It Works", badge: "ExportHowItWorks", items: [{ label: "INFO", code: `<!-- Full section-by-section HTML/CSS available at /ExportHowItWorks -->\n<!-- Sections: Hero → 3-Stage Process (Capture / Qualify / Book) → Integrations → CTA -->` }] },
        { id: "convert-revenue-leaks", title: "Convert: Revenue Leaks", badge: "ExportRevenueLeaks", items: [{ label: "INFO", code: `<!-- Full section-by-section HTML/CSS available at /ExportRevenueLeaks -->\n<!-- Sections: Hero → Leak 1 (Missed Calls) → Leak 2 (Junk Leads) → Leak 3 (Invisible Buyers) → CTA -->` }] },
        { id: "convert-results", title: "Convert: Results (Titan Roofing Case Study)", badge: "ExportResults", items: [{ label: "INFO", code: `<!-- Full section-by-section HTML/CSS available at /ExportResults -->\n<!-- Sections: Hero → Stats Grid → Customer Story → CTA -->` }] },
        { id: "convert-dashboard-preview", title: "Convert: Dashboard Preview", items: [{ label: "INFO", code: `<!-- Route: /NeuralOSDashboard -->\n<!-- React-only page — see the "NeuralOS Dashboard Preview Page" group above for full section details -->` }] },
        { id: "convert-revenue-engine-plans", title: "Convert: Revenue Engine Plans", badge: "ExportRevenueEnginePlans", items: [{ label: "INFO", code: `<!-- Route: /RevenueEnginePlans -->\n<!-- Full section-by-section HTML/CSS available at /ExportRevenueEnginePlans -->\n<!-- Sections: Hero → Problem → System → Proof → Calculator → Packages (Activate/Amplify/Dominate) → Comparison Table → Guarantee → CTA -->` }] },
        { id: "convert-book", title: "Convert: Book a Call", items: [{ label: "INFO", code: `<!-- Book page embeds the booking calendar widget -->\n<!-- Route: /Book -->\n<!-- Embed: <div style="min-height:700px;"><iframe src="https://makea.shiftnow.io/widget/bookings/reality" width="100%" height="700" frameborder="0"></iframe></div> -->` }] },
      ],
    },
    {
      title: "ShiFt Attract — Inner Pages",
      color: "#FA982F",
      dotColor: "#FA982F",
      badge: "How It Works · Empty Pipeline · Results · Pricing · Book",
      sections: [
        { id: "attract-how-it-works", title: "Attract: How It Works", items: [{ label: "INFO", code: `<!-- Route: /AttractHowItWorks -->\n<!-- Sections: Hero → Lead Gen Process → Multi-Channel Overview → CTA -->` }] },
        { id: "attract-empty-pipeline", title: "Attract: Empty Pipeline Problem", exportPagePath: "ExportAttractEmptyPipeline", items: [{ label: "INFO", code: `<!-- Full section-by-section HTML/CSS available at /ExportAttractEmptyPipeline -->\n<!-- Sections: Hero → Pipeline Problems Grid → Cost of Inconsistency Stats → CTA -->` }] },
        { id: "attract-results", title: "Attract: Results & Pipeline Proof", items: [{ label: "INFO", code: `<!-- Route: /AttractResults -->\n<!-- Sections: Hero → Results Stats → Case Study → CTA -->` }] },
        { id: "attract-pricing", title: "Attract: Pricing", items: [{ label: "INFO", code: `<!-- Route: /AttractPricing -->\n<!-- Sections: Pricing tiers for ShiFt Attract lead gen packages -->` }] },
        { id: "attract-book", title: "Attract: Book a Pipeline Audit", items: [{ label: "INFO", code: `<!-- Route: /AttractBook -->\n<!-- Embed: Pipeline Audit booking widget + qualifier form -->` }] },
      ],
    },
    {
      title: "ShiFt NeuralOS Brand — Inner Pages",
      color: "#FFD700",
      dotColor: "#FFD700",
      badge: "Platform · Roofing · Resources · About · Careers · Blog · Contact · Features · Integrations · Case Studies",
      exportPagePath: "ExportBrandNeuralOS",
      sections: [
        { id: "brand-platform", title: "Platform Page", items: [{ label: "INFO", code: `<!-- Route: /Platform -->\n<!-- Sections: NeuralOS system overview, AI modules, tech stack, integration diagram -->` }] },
        { id: "brand-roofing", title: "Roofing Industry Page", items: [{ label: "INFO", code: `<!-- Route: /Roofing -->\n<!-- Sections: Roofing-specific pain points, ShiFt solution for contractors, testimonials -->` }] },
        { id: "brand-resources", title: "Resources Page", items: [{ label: "INFO", code: `<!-- Route: /Resources -->\n<!-- Sections: Guides, calculators, playbooks, and tools for roofing contractors -->` }] },
        { id: "brand-about", title: "About Page", items: [{ label: "INFO", code: `<!-- Route: /About -->\n<!-- Sections: Hero → Mission → Pillars → Values -->` }] },
        { id: "brand-careers", title: "Careers Page", items: [{ label: "INFO", code: `<!-- Route: /Careers -->\n<!-- Sections: Hero → Core Values → Open Positions -->` }] },
        { id: "brand-blog", title: "Blog Page", items: [{ label: "INFO", code: `<!-- Route: /Blog -->\n<!-- Sections: Hero → Featured Article → Article Grid -->` }] },
        { id: "brand-contact", title: "Contact Page", items: [{ label: "INFO", code: `<!-- Route: /Contact -->\n<!-- Sections: Contact Form + Contact Info (email, phone, address) -->` }] },
        { id: "brand-features", title: "Features Page", items: [{ label: "INFO", code: `<!-- Route: /Features -->\n<!-- Sections: Hero → Feature Cards (AI Response / Qualification / Booking / Follow-Up / Analytics) -->` }] },
        { id: "brand-integrations", title: "Integrations Page", items: [{ label: "INFO", code: `<!-- Route: /Integrations -->\n<!-- Sections: Hero → Integration Categories (CRM / Calendar / Ads / Comms / Automation) -->` }] },
        { id: "brand-case-studies", title: "Case Studies Page", items: [{ label: "INFO", code: `<!-- Route: /CaseStudies -->\n<!-- Sections: Hero → Individual Case Study Cards (stats + testimonials) -->` }] },
      ],
    },
    {
      title: "Legal Pages",
      color: "#6B7C93",
      dotColor: "#9DA3B4",
      badge: "Privacy · Terms · Cookies",
      sections: [
        { id: "legal-privacy", title: "Privacy Policy", items: [{ label: "INFO", code: `<!-- Route: /PrivacyPolicy\n     URL:   ShiFtNow.io/PrivacyPolicy\n     Effective: March 15, 2026\n     Sections: 13 sections covering data collection, TCPA, sharing, retention, user rights (CCPA), contact -->\n<!-- Full text rendered at /PrivacyPolicy in the React app -->` }] },
        { id: "legal-tos", title: "Terms of Service", items: [{ label: "INFO", code: `<!-- Route: /TermsOfService\n     URL:   ShiFtNow.io/TermsOfService\n     Effective: March 15, 2026 | Version 21\n     Jurisdiction: Cherokee County, Georgia\n     Sections: 0–20 covering Definitions, 90-Day Non-Cancelable Term, No Refunds/Chargebacks, RevShare, Revenue Floor, TCPA, IP, Arbitration -->\n<!-- Full text rendered at /TermsOfService in the React app -->` }] },
        { id: "legal-cookies", title: "Cookie Policy", items: [{ label: "INFO", code: `<!-- Route: /CookiePolicy\n     URL:   ShiFtNow.io/CookiePolicy\n     Effective: March 15, 2026\n     Sections: 12 sections covering cookie types (Necessary / Functional / Analytics / Marketing), consent, GPC, CCPA, Platform cookies -->\n<!-- Full text rendered at /CookiePolicy in the React app -->` }] },
      ],
    },
    {
      title: "Complete URL Map — All Pages",
      color: "#6B7C93",
      dotColor: "#9DA3B4",
      sections: [
        {
          id: "all-pages-url-map",
          title: "Full Site URL Reference (All Routes)",
          items: [{ label: "URL MAP", code: OTHER_PAGES_HTML }]
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-6 font-mono text-xs uppercase tracking-widest"
            style={{ background: "rgba(245,74,72,0.08)", borderColor: "rgba(245,74,72,0.3)", color: "#F54A48" }}>
            <Globe className="w-4 h-4" />
            Master Export Hub
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Site Export Center
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Every page, every section — pure HTML/CSS/JS, Elementor + WordPress ready.
          </p>
        </div>

        {/* Full Site Export CTA */}
        <div className="rounded-2xl p-8 mb-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.08))", border: "1px solid rgba(245,74,72,0.25)" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%) translateY(-50%)", width: 500, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,74,72,0.15), transparent 70%)", pointerEvents: "none" }} />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="w-6 h-6" style={{ color: "#FA982F" }} />
              <span className="font-display text-xl font-bold text-white">Export Entire Site</span>
            </div>
            <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Download a fully self-contained <strong className="text-white">ShiFtNeuralOS-FullSite.html</strong> file with all global styles, the NeuralOS nav, hero, and footer assembled and ready to open in any browser or import to Elementor.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleFullSiteExport}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 24px rgba(245,74,72,0.35)" }}
              >
                <Download className="w-4 h-4" />
                {downloading ? "Downloading..." : "Download Full Site HTML"}
              </button>
              <button
                onClick={() => handleCopy(buildFullSite(), "full-site")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: copied === "full-site" ? "rgba(72,187,120,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${copied === "full-site" ? "rgba(72,187,120,0.3)" : "rgba(255,255,255,0.15)"}`, color: copied === "full-site" ? "#48BB78" : "white" }}
              >
                {copied === "full-site" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied === "full-site" ? "Copied to Clipboard!" : "Copy Full Site HTML"}
              </button>
            </div>
          </div>
        </div>

        {/* Elementor Instructions */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(72,187,120,0.06)", border: "1px solid rgba(72,187,120,0.2)" }}>
          <h2 className="font-display text-base font-bold text-white mb-3">Elementor / WordPress Import Guide</h2>
          <ol className="space-y-1.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <li><strong className="text-white">1.</strong> Add <strong className="text-white">Global CSS</strong> → <em>Appearance → Customize → Additional CSS</em></li>
            <li><strong className="text-white">2.</strong> Add <strong className="text-white">Nav CSS</strong> and <strong className="text-white">Footer CSS</strong> to the same Additional CSS block</li>
            <li><strong className="text-white">3.</strong> For each page section: insert an <strong className="text-white">HTML widget</strong> in Elementor → paste HTML</li>
            <li><strong className="text-white">4.</strong> Paste section-specific CSS in <strong className="text-white">Advanced → Custom CSS</strong> on each widget</li>
            <li><strong className="text-white">5.</strong> Paste JS (Nav JS + FAQ JS) in <em>Appearance → Theme Editor → footer.php</em> before <code className="text-white">&lt;/body&gt;</code></li>
            <li><strong className="text-white">6.</strong> Or use the <strong className="text-white">Download Full Site HTML</strong> button above for a standalone file</li>
          </ol>
        </div>

        {/* Page Groups */}
        <div className="space-y-6">
          {pageGroups.map((group, i) => (
            <PageGroup
              key={i}
              {...group}
              expanded={expanded}
              onToggle={toggle}
              copied={copied}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 p-5 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            ShiFt NeuralOS™ Master Export · All HTML is pure CSS/JS, no React dependencies · Elementor + WordPress compatible
          </p>
        </div>
      </div>
    </div>
  );
}