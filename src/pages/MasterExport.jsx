import React, { useState } from "react";
import JSZip from "jszip";
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
function AccordionSection({ id, title, badge, exportPagePath, items, expanded, onToggle, copied, onCopy }) {
  const open = expanded[id];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[rgba(255,255,255,0.02)]"
      >
        <div className="flex items-center gap-3 flex-wrap">
          {open ? <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "#F54A48" }} />
            : <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }} />}
          <span className="font-display text-base font-bold text-white">{title}</span>
          {badge && (
            <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(245,74,72,0.1)", color: "#FA982F" }}>
              {badge}
            </span>
          )}
          {exportPagePath && (
            <Link
              to={createPageUrl(exportPagePath)}
              target="_blank"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded-full transition-all"
              style={{ background: "rgba(99,179,237,0.1)", color: "#63B3ED", border: "1px solid rgba(99,179,237,0.25)" }}
            >
              <ExternalLink className="w-2.5 h-2.5" /> Export Page
            </Link>
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
      <a href="https://shiftnow.io" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#FFD700;background:rgba(255,215,0,0.10);border-color:rgba(255,215,0,0.3);">NeuralOS™</span>
    </div>
    <div class="shift-nav-links">
      <a href="https://shiftnow.io/RevenueEnginePlans" class="shift-nav-link">Revenue Engine Plans</a>
      <a href="https://shiftnow.io/NeuralOSDashboard" class="shift-nav-link">Dashboard Preview</a>
      <a href="https://shiftnow.io/Platform" class="shift-nav-link">Platform</a>
      <a href="https://shiftnow.io/Roofing" class="shift-nav-link">Roofing</a>
      <a href="https://shiftnow.io/About" class="shift-nav-link">About</a>
      <a href="https://shiftnow.io/Contact" class="shift-nav-link">Contact</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="https://shiftnow.io/AttractHome" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Attract</a>
        <a href="https://shiftnow.io/Home" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Convert</a>
      </div>
      <a href="https://shiftnow.io/RevenueEnginePlans" class="btn-primary shift-btn-sm">Find Your Gap</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="https://shiftnow.io/RevenueEnginePlans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="https://shiftnow.io/NeuralOSDashboard" class="shift-mobile-link font-display">Dashboard Preview</a>
    <a href="https://shiftnow.io/Platform" class="shift-mobile-link font-display">Platform</a>
    <a href="https://shiftnow.io/Roofing" class="shift-mobile-link font-display">Roofing</a>
    <a href="https://shiftnow.io/About" class="shift-mobile-link font-display">About</a>
    <a href="https://shiftnow.io/Contact" class="shift-mobile-link font-display">Contact</a>
    <a href="https://shiftnow.io/RevenueEnginePlans" class="btn-primary">Find Your Gap</a>
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
    <a href="/dashboard-preview" class="shift-mobile-link font-display">Dashboard Preview</a>
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
          <li><a href="https://shiftnow.io/Features">Features</a></li>
          <li><a href="https://shiftnow.io/RevenueEnginePlans">Revenue Engine Plans</a></li>
          <li><a href="https://shiftnow.io/Integrations">Integrations</a></li>
          <li><a href="https://shiftnow.io/CaseStudies">Case Studies</a></li>
        </ul>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Company</h4>
        <ul class="shift-footer-links">
          <li><a href="https://shiftnow.io/About">About</a></li>
          <li><a href="https://shiftnow.io/Careers">Careers</a></li>
          <li><a href="https://shiftnow.io/Blog">Blog</a></li>
          <li><a href="https://shiftnow.io/Contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="shift-footer-heading font-mono">Legal</h4>
        <ul class="shift-footer-links">
          <li><a href="https://shiftnow.io/PrivacyPolicy">Privacy Policy</a></li>
          <li><a href="https://shiftnow.io/TermsOfService">Terms of Service</a></li>
          <li><a href="https://shiftnow.io/CookiePolicy">Cookie Policy</a></li>
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

/* ── NAV ── */
${NAV_CSS}

/* ── HERO ── */
.shift-hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:120px 24px 80px;overflow:hidden;text-align:center;}
.shift-hero-bg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(245,74,72,.15) 0%,transparent 70%);pointer-events:none;animation:hero-glow 4s ease-in-out infinite;}
@keyframes hero-glow{0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1);}50%{opacity:.8;transform:translate(-50%,-50%) scale(1.1);}}
.shift-hero-badge{display:inline-flex;align-items:center;gap:12px;padding:12px 24px;border-radius:999px;background:rgba(245,74,72,.08);border:1px solid rgba(245,74,72,.3);margin-bottom:32px;font-size:.75rem;text-transform:uppercase;letter-spacing:.15em;color:#F54A48;}
.shift-pulse-dot{width:8px;height:8px;background:#F54A48;border-radius:50%;animation:pulse-dot 2s ease-in-out infinite;flex-shrink:0;}
@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(1.3);}}
.shift-hero-headline{font-size:clamp(2.5rem,5vw,5rem);font-weight:800;line-height:1.1;color:white;margin-bottom:24px;max-width:900px;margin-left:auto;margin-right:auto;}
.shift-hero-sub{font-size:1.25rem;color:rgba(255,255,255,.65);max-width:700px;margin:0 auto 48px;line-height:1.7;}
.shift-hero-ctas{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:32px;}
.btn-lg{padding:18px 40px;font-size:1rem;}
.shift-hero-micro{font-size:.75rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;}

/* ── SECTION HEADERS ── */
.shift-section-header{text-align:center;margin-bottom:56px;}
.shift-section-label{display:block;font-size:.75rem;text-transform:uppercase;letter-spacing:.2em;margin-bottom:16px;}
.shift-section-title{font-size:2.25rem;font-weight:800;line-height:1.1;color:white;margin-bottom:16px;}
@media(min-width:768px){.shift-section-title{font-size:3rem;}}
.shift-section-desc{font-size:1rem;color:rgba(255,255,255,.5);max-width:600px;margin:0 auto;line-height:1.7;}

/* ── PROBLEM SELECTOR ── */
.shift-problem-grid{display:grid;grid-template-columns:1fr;gap:24px;}
@media(min-width:768px){.shift-problem-grid{grid-template-columns:repeat(3,1fr);}}
.shift-problem-card{display:block;text-decoration:none;padding:32px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(10px);transition:all .3s ease;}
.shift-problem-card:hover{background:rgba(255,255,255,.07);transform:translateY(-4px);border-color:var(--card-color,rgba(255,255,255,.15));box-shadow:0 8px 32px rgba(0,0,0,.3);}
.shift-problem-icon{width:64px;height:64px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.shift-problem-title{font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;}
.shift-problem-body{font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:20px;line-height:1.6;}
.shift-problem-link{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;}

/* ── TWO PRODUCTS ── */
.shift-products-grid{display:grid;grid-template-columns:1fr;gap:24px;}
@media(min-width:768px){.shift-products-grid{grid-template-columns:repeat(2,1fr);}}
.shift-product-card{padding:40px;border-radius:20px;backdrop-filter:blur(10px);transition:transform .3s ease;}
.shift-product-card:hover{transform:translateY(-4px);}
.shift-product-attract{background:linear-gradient(135deg,rgba(250,152,47,.08),rgba(250,152,47,.04));border:1px solid rgba(250,152,47,.25);}
.shift-product-convert{background:linear-gradient(135deg,rgba(245,74,72,.08),rgba(245,74,72,.04));border:1px solid rgba(245,74,72,.25);}
.shift-product-badge{display:inline-flex;padding:8px 16px;border-radius:999px;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border:1px solid;margin-bottom:20px;}
.shift-product-title{font-size:1.75rem;font-weight:800;color:white;margin-bottom:12px;}
.shift-product-desc{font-size:.9375rem;color:rgba(255,255,255,.6);margin-bottom:28px;line-height:1.6;}
.shift-product-features{list-style:none;padding:0;margin-bottom:32px;}
.shift-product-features li{display:flex;align-items:center;gap:10px;font-size:.875rem;color:rgba(255,255,255,.75);padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);}
.shift-check{font-weight:700;font-size:1rem;}

/* ── TESTIMONIALS ── */
.shift-testimonial-grid{display:grid;grid-template-columns:1fr;gap:24px;}
@media(min-width:768px){.shift-testimonial-grid{grid-template-columns:repeat(3,1fr);}}
.shift-testimonial-card{display:flex;flex-direction:column;gap:16px;}
.shift-stars{color:#FA982F;font-size:1rem;letter-spacing:2px;}
.shift-testimonial-quote{font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;}
.shift-testimonial-author{display:flex;align-items:center;gap:12px;}
.shift-avatar{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;}
.shift-author-name{font-size:.875rem;font-weight:600;color:white;}
.shift-author-role{font-size:.75rem;color:rgba(255,255,255,.4);}

/* ── CTA ── */
.shift-cta-box{position:relative;border-radius:24px;overflow:hidden;padding:64px 32px;text-align:center;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.08));border:1px solid rgba(245,74,72,.15);}
@media(min-width:768px){.shift-cta-box{padding:96px 64px;}}
.shift-cta-glow{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-50%);width:500px;height:300px;border-radius:50%;background:radial-gradient(ellipse,rgba(245,74,72,.15),transparent 70%);pointer-events:none;}
.shift-cta-title{font-size:2rem;font-weight:800;color:white;margin-bottom:20px;line-height:1.2;}
@media(min-width:768px){.shift-cta-title{font-size:3rem;}}
.shift-cta-desc{font-size:1rem;color:rgba(255,255,255,.55);max-width:500px;margin:0 auto 36px;line-height:1.7;}
.shift-cta-buttons{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px;}
.shift-cta-micro{font-size:.75rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;}

/* ── FOOTER ── */
${FOOTER_CSS}
  </style>
</head>
<body>

${NEURALAOS_NAV_HTML}

<main style="padding-top:72px;">

  <!-- ═══ HERO ═══ -->
  <section class="shift-hero" id="hero">
    <div class="shift-hero-bg"></div>
    <div class="section-inner" style="position:relative;">
      <div class="shift-hero-badge font-mono">
        <span class="shift-pulse-dot"></span>
        AI Revenue Operating System
      </div>
      <h1 class="shift-hero-headline font-display">
        <span class="shift-gradient-text">Revenue Leaks</span><br/>Don't Fix Themselves
      </h1>
      <p class="shift-hero-sub">
        Roofing contractors lose $35K–$100K+ monthly to broken lead systems. ShiFt NeuralOS plugs the leaks with AI that generates, qualifies, and converts leads 24/7.
      </p>
      <div class="shift-hero-ctas">
        <a href="#problem-selector" class="btn-primary btn-lg">Find Your Gap →</a>
      </div>
      <p class="shift-hero-micro font-mono">Trusted by 847+ roofing companies across 42 states</p>
    </div>
  </section>

  <!-- ═══ PROBLEM SELECTOR ═══ -->
  <section class="section-wrap" id="problem-selector" style="background:#0D0F33;">
    <div class="section-inner">
      <div class="shift-section-header">
        <span class="shift-section-label font-mono" style="color:#FA982F;">Diagnose Your Leak</span>
        <h2 class="shift-section-title font-display">What's Draining Your Revenue?</h2>
        <p class="shift-section-desc">Every roofing contractor leaks revenue somewhere. Tell us where yours is hiding.</p>
      </div>
      <div class="shift-problem-grid">
        <a href="https://shiftnow.io/AttractHome" class="shift-problem-card" style="--card-color:#FA982F;">
          <div class="shift-problem-icon" style="background:rgba(250,152,47,.12);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M1 12h6m6 0h6"/></svg>
          </div>
          <h3 class="shift-problem-title font-display">Empty Pipeline</h3>
          <p class="shift-problem-body">Not enough leads coming in. Marketing isn't producing consistent results.</p>
          <div class="shift-problem-link font-mono" style="color:#FA982F;">→ ShiFt Attract</div>
        </a>
        <a href="https://shiftnow.io/Home" class="shift-problem-card" style="--card-color:#F54A48;">
          <div class="shift-problem-icon" style="background:rgba(245,74,72,.12);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h3 class="shift-problem-title font-display">Missed Leads</h3>
          <p class="shift-problem-body">Leads coming in but not converting. Slow response, bad follow-up, no-shows.</p>
          <div class="shift-problem-link font-mono" style="color:#F54A48;">→ ShiFt Convert</div>
        </a>
        <a href="https://shiftnow.io" class="shift-problem-card" style="--card-color:#48BB78;">
          <div class="shift-problem-icon" style="background:rgba(72,187,120,.12);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
          </div>
          <h3 class="shift-problem-title font-display">Both Problems</h3>
          <p class="shift-problem-body">Empty pipeline AND low conversion rate. You need the full NeuralOS stack.</p>
          <div class="shift-problem-link font-mono" style="color:#48BB78;">→ Full Platform</div>
        </a>
      </div>
    </div>
  </section>

  <!-- ═══ TWO PRODUCTS ═══ -->
  <section class="section-wrap" id="platform">
    <div class="section-inner">
      <div class="shift-section-header">
        <span class="shift-section-label font-mono" style="color:#F54A48;">The Platform</span>
        <h2 class="shift-section-title font-display">Two Systems. One Revenue Machine.</h2>
        <p class="shift-section-desc">ShiFt NeuralOS™ runs both sides of your revenue equation simultaneously.</p>
      </div>
      <div class="shift-products-grid">
        <div class="shift-product-card shift-product-attract">
          <div class="shift-product-badge font-mono" style="color:#FA982F;background:rgba(250,152,47,.12);border-color:rgba(250,152,47,.3);">ShiFt Attract</div>
          <h3 class="shift-product-title font-display">Fill Your Pipeline</h3>
          <p class="shift-product-desc">AI-powered lead generation across every channel. Google, Facebook, Instagram, TikTok—your AI works them all.</p>
          <ul class="shift-product-features">
            <li><span class="shift-check" style="color:#FA982F;">✓</span> Multi-channel AI campaigns</li>
            <li><span class="shift-check" style="color:#FA982F;">✓</span> Real-time lead scoring</li>
            <li><span class="shift-check" style="color:#FA982F;">✓</span> Storm & property intelligence</li>
            <li><span class="shift-check" style="color:#FA982F;">✓</span> Predictable lead volume</li>
          </ul>
          <a href="https://shiftnow.io/AttractHome" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Explore Attract →</a>
        </div>
        <div class="shift-product-card shift-product-convert">
          <div class="shift-product-badge font-mono" style="color:#F54A48;background:rgba(245,74,72,.12);border-color:rgba(245,74,72,.3);">ShiFt Convert</div>
          <h3 class="shift-product-title font-display">Convert Every Lead</h3>
          <p class="shift-product-desc">AI that responds in 30 seconds, qualifies instantly, and books appointments automatically—day or night.</p>
          <ul class="shift-product-features">
            <li><span class="shift-check" style="color:#F54A48;">✓</span> 30-second AI response</li>
            <li><span class="shift-check" style="color:#F54A48;">✓</span> Instant lead qualification</li>
            <li><span class="shift-check" style="color:#F54A48;">✓</span> Automated appointment booking</li>
            <li><span class="shift-check" style="color:#F54A48;">✓</span> 24/7 follow-up sequences</li>
          </ul>
          <a href="https://shiftnow.io/Home" class="btn-primary">Explore Convert →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ REVENUE ENGINE PLANS TEASER ═══ -->
  <section class="section-wrap" style="background:#0D0F33;text-align:center;">
    <div class="section-inner">
      <div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.2em;color:#FA982F;margin-bottom:20px;">Revenue Engine Plans</div>
      <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:20px;">Three Packages. One Goal.<br><span class="shift-gradient-text">Booked Jobs.</span></h2>
      <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:560px;margin:0 auto 36px;line-height:1.7;">Every package includes a \$5,000 one-time Revenue Engine Installation + 90-Day Revenue Floor.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:700px;margin:0 auto 36px;">
        <div style="background:rgba(245,74,72,.06);border:1px solid rgba(245,74,72,.2);border-radius:14px;padding:24px 16px;text-align:center;">
          <div class="font-display" style="font-size:.9rem;font-weight:800;color:#F54A48;margin-bottom:8px;">ACTIVATE</div>
          <div class="font-display" style="font-size:1.75rem;font-weight:900;color:white;">\$1,997<span style="font-size:.875rem;color:rgba(255,255,255,.4);">/mo</span></div>
        </div>
        <div style="background:linear-gradient(180deg,rgba(245,74,72,.10),rgba(255,255,255,.03));border:1px solid rgba(245,74,72,.35);border-radius:14px;padding:24px 16px;text-align:center;position:relative;">
          <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#F54A48,#FA982F);font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;color:#fff;padding:3px 12px;border-radius:999px;white-space:nowrap;">Most Popular</div>
          <div class="font-display" style="font-size:.9rem;font-weight:800;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px;">AMPLIFY</div>
          <div class="font-display" style="font-size:1.75rem;font-weight:900;color:white;">\$3,497<span style="font-size:.875rem;color:rgba(255,255,255,.4);">/mo</span></div>
        </div>
        <div style="background:rgba(255,215,0,.04);border:1px solid rgba(255,215,0,.2);border-radius:14px;padding:24px 16px;text-align:center;">
          <div class="font-display" style="font-size:.9rem;font-weight:800;color:#FFD700;margin-bottom:8px;">DOMINATE</div>
          <div class="font-display" style="font-size:1.75rem;font-weight:900;color:white;">\$8,997<span style="font-size:.875rem;color:rgba(255,255,255,.4);">/mo</span></div>
        </div>
      </div>
      <a href="https://shiftnow.io/RevenueEnginePlans" class="btn-primary" style="padding:16px 40px;">View Revenue Engine Plans →</a>
    </div>
  </section>

  <!-- ═══ SOCIAL PROOF ═══ -->
  <section class="section-wrap" id="testimonials">
    <div class="section-inner">
      <div class="shift-section-header">
        <span class="shift-section-label font-mono" style="color:#FA982F;">Results</span>
        <h2 class="shift-section-title font-display">Trusted by <span class="shift-gradient-text">Top Contractors</span></h2>
      </div>
      <div class="shift-testimonial-grid">
        <div class="glass-card shift-testimonial-card">
          <div class="shift-stars">★★★★★</div>
          <p class="shift-testimonial-quote">"ShiFt turned our business around. We went from chasing leads to having a waitlist. Revenue doubled in 6 months."</p>
          <div class="shift-testimonial-author">
            <div class="shift-avatar" style="background:linear-gradient(135deg,#F54A48,#FA982F);">M</div>
            <div><div class="shift-author-name font-display">Marcus Johnson</div><div class="shift-author-role">Owner, Apex Roofing Co.</div></div>
          </div>
        </div>
        <div class="glass-card shift-testimonial-card">
          <div class="shift-stars">★★★★★</div>
          <p class="shift-testimonial-quote">"The AI assistant books 40+ inspections a week for us. It's like having a sales team that never sleeps."</p>
          <div class="shift-testimonial-author">
            <div class="shift-avatar" style="background:linear-gradient(135deg,#FA982F,#F54A48);">S</div>
            <div><div class="shift-author-name font-display">Sarah Chen</div><div class="shift-author-role">GM, Summit Storm Solutions</div></div>
          </div>
        </div>
        <div class="glass-card shift-testimonial-card">
          <div class="shift-stars">★★★★★</div>
          <p class="shift-testimonial-quote">"Property intelligence alone paid for the platform in the first month. We're closing neighborhoods, not just houses."</p>
          <div class="shift-testimonial-author">
            <div class="shift-avatar" style="background:linear-gradient(135deg,#F54A48,#FA982F);">D</div>
            <div><div class="shift-author-name font-display">David Martinez</div><div class="shift-author-role">CEO, Eagle Eye Roofing</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ CTA ═══ -->
  <section class="section-wrap" style="background:#0D0F33;">
    <div class="section-inner">
      <div class="shift-cta-box">
        <div class="shift-cta-glow"></div>
        <div style="position:relative;text-align:center;">
          <h2 class="shift-cta-title font-display">Ready to <span class="shift-gradient-text">ShiFt</span> Your Revenue?</h2>
          <p class="shift-cta-desc">Get a free revenue audit and see exactly how much money you're leaving on the table.</p>
          <div class="shift-cta-buttons">
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary btn-lg">Book a Strategy Call →</a>
            <a href="https://shiftnow.io/RevenueEnginePlans" class="btn-outline btn-lg">View Plans</a>
          </div>
          <p class="shift-cta-micro font-mono">Live in 7 days · 90-Day Revenue Floor · No long-term contracts</p>
        </div>
      </div>
    </div>
  </section>

</main>

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

  const handleCopy = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback for large strings or permission issues
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const makePageHtml = (title, navHtml, bodyHtml, extraCss = "") => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${title} · ShiFt NeuralOS</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
${GLOBAL_CSS}
${NAV_CSS}
${FOOTER_CSS}
${extraCss}
  </style>
</head>
<body>
${navHtml}
<main style="padding-top:72px;">
${bodyHtml}
</main>
${FOOTER_HTML}
<script>${NAV_JS}
${FAQ_JS_CODE}</script>
</body>
</html>`;

  const handleFullSiteExport = async () => {
    setDownloading(true);

    // 1. Download the single combined HTML (existing behaviour)
    const singleHtml = buildFullSite();
    const singleBlob = new Blob([singleHtml], { type: "text/html" });
    const singleUrl = URL.createObjectURL(singleBlob);
    const singleA = document.createElement("a");
    singleA.href = singleUrl;
    singleA.download = "ShiFtNeuralOS-FullSite.html";
    singleA.click();
    URL.revokeObjectURL(singleUrl);

    // 2. Build ZIP with every page as its own file
    const zip = new JSZip();

    // Shared assets
    zip.file("assets/global.css", GLOBAL_CSS);
    zip.file("assets/nav.css", NAV_CSS);
    zip.file("assets/footer.css", FOOTER_CSS);
    zip.file("assets/nav.js", NAV_JS);
    zip.file("assets/faq.js", FAQ_JS_CODE);

    // NeuralOS Brand pages
    zip.file("index.html", singleHtml);
    zip.file("neuralaos-home.html", makePageHtml("NeuralOS Home", NEURALAOS_NAV_HTML, NEURALAOS_HOME_HTML));

    // Convert pages
    zip.file("convert/index.html", makePageHtml("ShiFt Convert", CONVERT_NAV_HTML, CONVERT_HOME_HTML));
    zip.file("convert/how-it-works.html", makePageHtml("How It Works · Convert", CONVERT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">How ShiFt Convert Works</h1><p class="shift-section-desc">Full content available at /ExportHowItWorks</p></div></section>`));
    zip.file("convert/revenue-leaks.html", makePageHtml("Revenue Leaks · Convert", CONVERT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">The Three Revenue Leaks</h1><p class="shift-section-desc">Full content available at /ExportRevenueLeaks</p></div></section>`));
    zip.file("convert/results.html", makePageHtml("Results · Convert", CONVERT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">From $750K to $7M</h1><p class="shift-section-desc">Full content available at /ExportResults</p></div></section>`));
    zip.file("convert/book.html", makePageHtml("Book a Call · Convert", CONVERT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">Book a Strategy Call</h1><p class="shift-section-desc">Full content available at /ExportBookACall</p></div></section>`));

    // Attract pages
    zip.file("attract/index.html", makePageHtml("ShiFt Attract", ATTRACT_NAV_HTML, ATTRACT_HOME_HTML));
    zip.file("attract/empty-pipeline.html", makePageHtml("Empty Pipeline · Attract", ATTRACT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">The Empty Pipeline Problem</h1><p class="shift-section-desc">Full content available at /ExportAttractEmptyPipeline</p></div></section>`));
    zip.file("attract/how-it-works.html", makePageHtml("How It Works · Attract", ATTRACT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">How ShiFt Attract Works</h1><p class="shift-section-desc">Full content available at /ExportAttract</p></div></section>`));
    zip.file("attract/results.html", makePageHtml("Results · Attract", ATTRACT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">Pipeline Results</h1><p class="shift-section-desc">Full content available at /ExportAttract</p></div></section>`));
    zip.file("attract/book.html", makePageHtml("Book a Pipeline Audit · Attract", ATTRACT_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">Book a Pipeline Audit</h1><p class="shift-section-desc">Full content available at /ExportBookACall</p></div></section>`));

    // Revenue Engine Plans
    zip.file("revenue-engine-plans.html", makePageHtml("Revenue Engine Plans", NEURALAOS_NAV_HTML, REVENUE_PLANS_HTML));

    // Shared brand pages
    const brandPages = [
      ["about", "About"],
      ["careers", "Careers"],
      ["blog", "Blog"],
      ["contact", "Contact"],
      ["features", "Features"],
      ["integrations", "Integrations"],
      ["case-studies", "Case Studies"],
      ["platform", "Platform"],
      ["roofing", "Roofing for Contractors"],
      ["resources", "Resources"],
    ];
    brandPages.forEach(([slug, title]) => {
      zip.file(`${slug}.html`, makePageHtml(title, NEURALAOS_NAV_HTML, `<section class="section-wrap"><div class="section-inner"><h1 class="font-display shift-section-title">${title}</h1><p class="shift-section-desc">Full content available at /ExportBrandNeuralOS</p></div></section>`));
    });

    // README
    zip.file("README.txt", `ShiFt NeuralOS — Full Site Export
===================================
Generated: ${new Date().toISOString()}

Files included:
  index.html                  → NeuralOS brand home (fully assembled)
  neuralaos-home.html         → NeuralOS home (nav + hero + footer)
  revenue-engine-plans.html   → Plans page (Activate / Amplify / Dominate)
  convert/index.html          → ShiFt Convert home
  convert/how-it-works.html   → Convert: How It Works
  convert/revenue-leaks.html  → Convert: Revenue Leaks
  convert/results.html        → Convert: Results (Titan case study)
  convert/book.html           → Convert: Book a Call
  attract/index.html          → ShiFt Attract home
  attract/empty-pipeline.html → Attract: Empty Pipeline
  attract/how-it-works.html   → Attract: How It Works
  attract/results.html        → Attract: Results
  attract/book.html           → Attract: Book a Pipeline Audit
  about.html, careers.html, blog.html, contact.html, features.html,
  integrations.html, case-studies.html, platform.html, roofing.html, resources.html

  assets/global.css           → Global CSS (include on every page)
  assets/nav.css              → Navbar CSS
  assets/footer.css           → Footer CSS
  assets/nav.js               → Navbar JS (mobile toggle + scroll)
  assets/faq.js               → FAQ accordion JS

Usage:
  - Open index.html directly in a browser to preview
  - For Elementor/WordPress: paste assets/global.css into Additional CSS,
    then paste each page's <main> content into HTML widgets
  - All links point to https://shiftnow.io/... (absolute URLs)
`);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const zipA = document.createElement("a");
    zipA.href = zipUrl;
    zipA.download = "ShiFtNeuralOS-FullSite.zip";
    zipA.click();
    URL.revokeObjectURL(zipUrl);

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
      badge: "Revenue Engine Plans · Dashboard Preview · Platform · Roofing · About · Contact",
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
      exportPagePath: "ExportDashboardPreview",
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
        { id: "convert-dashboard-preview", title: "Convert: Dashboard Preview", badge: "ExportDashboardPreview", exportPagePath: "ExportDashboardPreview", items: [{ label: "INFO", code: `<!-- Route: /NeuralOSDashboard -->\n<!-- Full section-by-section HTML available at /ExportDashboardPreview -->\n<!-- Sections: Hero → KPI Row → AI Lead Table → Trust Strip → CTA -->` }] },
        { id: "convert-revenue-engine-plans", title: "Convert: Revenue Engine Plans", badge: "ExportRevenueEnginePlans", exportPagePath: "ExportRevenueEnginePlans", items: [{ label: "INFO", code: `<!-- Route: /RevenueEnginePlans -->\n<!-- Full section-by-section HTML/CSS available at /ExportRevenueEnginePlans -->\n<!-- Sections: Hero → Problem → System → Proof → Calculator → Packages (Activate/Amplify/Dominate) → Comparison Table → Guarantee → CTA -->` }] },
        { id: "convert-book", title: "Convert: Book a Call", badge: "ExportBookACall", exportPagePath: "ExportBookACall", items: [{ label: "INFO", code: `<!-- Route: /Book -->\n<!-- Full section-by-section HTML available at /ExportBookACall -->\n<!-- Sections: Hero → Booking Calendar Widget Embed → What to Expect -->` }] },
      ],
    },
    {
      title: "ShiFt Attract — Inner Pages",
      color: "#FA982F",
      dotColor: "#FA982F",
      badge: "How It Works · Empty Pipeline · Results · Pricing · Book",
      sections: [
        { id: "attract-how-it-works", title: "Attract: How It Works", badge: "ExportAttract", exportPagePath: "ExportAttract", items: [{ label: "INFO", code: `<!-- Route: /AttractHowItWorks -->\n<!-- Full section-by-section export available at /ExportAttract (see sections: Attract Nav, Hero, Problems, Solution, Proof, FAQ, CTA) -->\n<!-- Sections: Hero → Lead Gen Process → Multi-Channel Overview → CTA -->` }] },
        { id: "attract-empty-pipeline", title: "Attract: Empty Pipeline Problem", badge: "ExportAttractEmptyPipeline", exportPagePath: "ExportAttractEmptyPipeline", items: [{ label: "INFO", code: `<!-- Route: /AttractEmptyPipeline -->\n<!-- Full section-by-section HTML/CSS available at /ExportAttractEmptyPipeline -->\n<!-- Sections: Hero → Pipeline Problems Grid → Cost of Inconsistency Stats → CTA -->` }] },
        { id: "attract-results", title: "Attract: Results & Pipeline Proof", badge: "ExportAttract", exportPagePath: "ExportAttract", items: [{ label: "INFO", code: `<!-- Route: /AttractResults -->\n<!-- Full section-by-section export available at /ExportAttract (see section 5: Results & Testimonials) -->\n<!-- Sections: Hero → Results Stats → Case Study → CTA -->` }] },
        { id: "attract-pricing", title: "Attract: Pricing", badge: "ExportRevenueEnginePlans", exportPagePath: "ExportRevenueEnginePlans", items: [{ label: "INFO", code: `<!-- Route: /AttractPricing -->\n<!-- Full section-by-section HTML/CSS available at /ExportRevenueEnginePlans -->\n<!-- Sections: Pricing tiers for ShiFt Attract lead gen packages -->` }] },
        { id: "attract-book", title: "Attract: Book a Pipeline Audit", badge: "ExportBookACall", exportPagePath: "ExportBookACall", items: [{ label: "INFO", code: `<!-- Route: /AttractBook -->\n<!-- Full section-by-section HTML available at /ExportBookACall -->\n<!-- Sections: Hero → Booking Calendar Widget Embed → What to Expect -->` }] },
      ],
    },
    {
      title: "ShiFt NeuralOS Brand — Inner Pages",
      color: "#FFD700",
      dotColor: "#FFD700",
      badge: "Platform · Roofing · Resources · About · Careers · Blog · Contact · Features · Integrations · Case Studies",
      exportPagePath: "ExportBrandNeuralOS",
      sections: [
        { id: "brand-platform", title: "Platform Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Platform -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: NeuralOS system overview, AI modules, tech stack, integration diagram -->` }] },
        { id: "brand-roofing", title: "Roofing Industry Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Roofing -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Roofing-specific pain points, ShiFt solution for contractors, testimonials -->` }] },
        { id: "brand-resources", title: "Resources Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Resources -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Guides, calculators, playbooks, and tools for roofing contractors -->` }] },
        { id: "brand-about", title: "About Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /About -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Hero → Mission → Pillars → Values -->` }] },
        { id: "brand-careers", title: "Careers Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Careers -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Hero → Core Values → Open Positions -->` }] },
        { id: "brand-blog", title: "Blog Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Blog -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Hero → Featured Article → Article Grid -->` }] },
        { id: "brand-contact", title: "Contact Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Contact -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Contact Form + Contact Info (email, phone, address) -->` }] },
        { id: "brand-features", title: "Features Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Features -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Hero → Feature Cards (AI Response / Qualification / Booking / Follow-Up / Analytics) -->` }] },
        { id: "brand-integrations", title: "Integrations Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /Integrations -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Hero → Integration Categories (CRM / Calendar / Ads / Comms / Automation) -->` }] },
        { id: "brand-case-studies", title: "Case Studies Page", badge: "ExportBrandNeuralOS", exportPagePath: "ExportBrandNeuralOS", items: [{ label: "INFO", code: `<!-- Route: /CaseStudies -->\n<!-- Full global CSS/Nav/Footer export available at /ExportBrandNeuralOS -->\n<!-- Sections: Hero → Individual Case Study Cards (stats + testimonials) -->` }] },
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
              Downloads <strong className="text-white">ShiFtNeuralOS-FullSite.html</strong> (single assembled page) <strong className="text-white">+</strong> <strong className="text-white">ShiFtNeuralOS-FullSite.zip</strong> containing every page as a separate HTML file with shared CSS/JS assets and a README.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleFullSiteExport}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 24px rgba(245,74,72,0.35)" }}
              >
                <Download className="w-4 h-4" />
                {downloading ? "Building ZIP..." : "Download Full Site HTML + ZIP"}
              </button>
              <button
                onClick={() => { const html = buildFullSite(); handleCopy(html, "full-site"); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: copied === "full-site" ? "rgba(72,187,120,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${copied === "full-site" ? "rgba(72,187,120,0.3)" : "rgba(255,255,255,0.15)"}`, color: copied === "full-site" ? "#48BB78" : "white" }}
              >
                {copied === "full-site" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied === "full-site" ? `Copied! (${Math.round(buildFullSite().length / 1024)}KB)` : "Copy Full Site HTML"}
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