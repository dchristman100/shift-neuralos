import React, { useState } from "react";
import JSZip from "jszip";
import { Copy, Check, Download, ChevronDown, ChevronRight, Globe, Layers, ExternalLink, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import {
  HOW_IT_WORKS_HTML,
  REVENUE_LEAKS_HTML,
  RESULTS_HTML,
  FEATURES_HTML,
  INTEGRATIONS_HTML,
  CASE_STUDIES_HTML,
  BLOG_HTML,
  ABOUT_HTML,
  CAREERS_HTML,
  CONTACT_HTML,
  PLATFORM_HTML,
  ROOFING_HTML,
  RESOURCES_HTML,
  ATTRACT_HOW_IT_WORKS_HTML,
  ATTRACT_RESULTS_HTML,
  ATTRACT_EMPTY_PIPELINE_HTML,
  PRIVACY_POLICY_HTML,
  TERMS_OF_SERVICE_HTML,
  COOKIE_POLICY_HTML,
} from "./MasterExportPageData";

// ─── COPY BUTTON ────────────────────────────────────────────────────────────
function CopyBtn({ code, id, copied, onCopy }) {
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
// CURRENT HTML EXTRACTED FROM LIVE REACT COMPONENTS
// Last updated: March 2026 — reflects actual component source
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
::selection{background:rgba(245,74,72,.3);color:white;}`;

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

const FOOTER_HTML = `<footer class="shift-footer">
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

const NEURALAOS_NAV_HTML = `<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="https://shiftnow.io/BrandHome" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span><span style="font-size:14px;font-weight:500;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-left:4px;">NeuralOS™</span></a>
    </div>
    <div class="shift-nav-links">
      <a href="https://shiftnow.io/Platform" class="shift-nav-link">Platform</a>
      <a href="https://shiftnow.io/Roofing" class="shift-nav-link">Roofing</a>
      <a href="https://shiftnow.io/NeuralOSDashboard" class="shift-nav-link">Demo</a>
      <a href="https://shiftnow.io/RevenueEnginePlans" class="shift-nav-link">Revenue Engine Plans</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="https://shiftnow.io/AttractHome" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Attract</a>
        <a href="https://shiftnow.io/Home" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Convert</a>
      </div>
      <a href="https://shiftnow.io/Calculator" class="btn-primary shift-btn-sm">Find Your Gap</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="https://shiftnow.io/Platform" class="shift-mobile-link font-display">Platform</a>
    <a href="https://shiftnow.io/Roofing" class="shift-mobile-link font-display">Roofing</a>
    <a href="https://shiftnow.io/NeuralOSDashboard" class="shift-mobile-link font-display">Demo</a>
    <a href="https://shiftnow.io/RevenueEnginePlans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="https://shiftnow.io/Calculator" class="btn-primary">Find Your Gap</a>
  </div>
</nav>`;

const CONVERT_NAV_HTML = `<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#F54A48;background:rgba(245,74,72,0.12);border-color:rgba(245,74,72,0.3);">Convert</span>
    </div>
    <div class="shift-nav-links">
      <a href="/HowItWorks" class="shift-nav-link">How It Works</a>
      <a href="/RevenueLeaks" class="shift-nav-link">Revenue Leaks</a>
      <a href="/Results" class="shift-nav-link">Results</a>
      <a href="/NeuralOSDashboard" class="shift-nav-link">Dashboard Preview</a>
      <a href="/RevenueEnginePlans" class="shift-nav-link">Revenue Engine Plans</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/AttractHome" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Attract</a>
        <a href="/Home" class="shift-pill shift-pill-active font-mono"><span class="shift-pill-dot shift-pill-dot-active"></span> Convert</a>
      </div>
      <a href="/ROICalculator" class="btn-primary shift-btn-sm">See My ROI</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/HowItWorks" class="shift-mobile-link font-display">How It Works</a>
    <a href="/RevenueLeaks" class="shift-mobile-link font-display">Revenue Leaks</a>
    <a href="/Results" class="shift-mobile-link font-display">Results</a>
    <a href="/RevenueEnginePlans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="/ROICalculator" class="btn-primary">See My ROI</a>
  </div>
</nav>`;

const ATTRACT_NAV_HTML = `<nav class="shift-nav" id="shift-nav">
  <div class="shift-nav-inner">
    <div class="shift-nav-logo-group">
      <a href="/" class="shift-nav-logo font-display">ShiFt<span class="shift-gradient-text">.</span></a>
      <span class="shift-nav-badge font-mono" style="color:#FA982F;background:rgba(250,152,47,0.15);border-color:rgba(250,152,47,0.3);">Attract</span>
    </div>
    <div class="shift-nav-links">
      <a href="/AttractHowItWorks" class="shift-nav-link">How It Works</a>
      <a href="/AttractEmptyPipeline" class="shift-nav-link">Empty Pipeline</a>
      <a href="/AttractResults" class="shift-nav-link">Results</a>
      <a href="/NeuralOSDashboard" class="shift-nav-link">Demo</a>
      <a href="/RevenueEnginePlans" class="shift-nav-link">Revenue Engine Plans</a>
    </div>
    <div class="shift-nav-right">
      <div class="shift-product-pills">
        <a href="/AttractHome" class="shift-pill shift-pill-active font-mono" style="background:linear-gradient(135deg,rgba(250,152,47,0.12),rgba(250,152,47,0.08));border-color:rgba(250,152,47,0.3);color:#F8F9FC;"><span class="shift-pill-dot" style="background:#FA982F;box-shadow:0 0 8px rgba(250,152,47,0.5);"></span> Attract</a>
        <a href="/Home" class="shift-pill font-mono"><span class="shift-pill-dot"></span> Convert</a>
      </div>
      <a href="/ROICalculator" class="btn-primary shift-btn-sm" style="background:linear-gradient(135deg,#FA982F,#F54A48);">See My ROI</a>
    </div>
    <button class="shift-mobile-toggle" id="shift-mobile-toggle"><span></span><span></span><span></span></button>
  </div>
  <div class="shift-mobile-menu" id="shift-mobile-menu">
    <a href="/AttractHowItWorks" class="shift-mobile-link font-display">How It Works</a>
    <a href="/AttractEmptyPipeline" class="shift-mobile-link font-display">Empty Pipeline</a>
    <a href="/AttractResults" class="shift-mobile-link font-display">Results</a>
    <a href="/RevenueEnginePlans" class="shift-mobile-link font-display">Revenue Engine Plans</a>
    <a href="/ROICalculator" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">See My ROI</a>
  </div>
</nav>`;

// ── BRAND HOME (BrandHero + ProblemSelector + TwoProducts + SocialProof + CTA) ──
const BRAND_HOME_HTML = `<!-- BRAND HOME: BrandHero + ProblemSelector + TwoProducts + SocialProof + CTA -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<style>
.brand-section{padding:80px 24px;}.brand-inner{max-width:1140px;margin:0 auto;}
@media(min-width:768px){.brand-section{padding:112px 32px;}}
.brand-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;transition:all .3s ease;}
.brand-card:hover{transform:translateY(-4px);border-color:rgba(245,74,72,0.15);}
</style>

<main style="padding-top:72px;">

  <!-- ═ HERO (BrandHero.jsx) ═ -->
  <section id="hero" style="position:relative;min-height:100vh;display:flex;align-items:center;padding:128px 24px 80px;overflow:hidden;">
    <div style="position:absolute;inset:0;pointer-events:none;">
      <div style="position:absolute;top:25%;left:50%;transform:translateX(-50%);width:900px;height:900px;border-radius:50%;opacity:.15;background:radial-gradient(circle,rgba(245,74,72,.2) 0%,rgba(250,152,47,.1) 40%,transparent 70%);"></div>
    </div>
    <div style="position:relative;max-width:1140px;margin:0 auto;">
      <div style="max-width:768px;">
        <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;border-radius:999px;background:rgba(245,74,72,.08);border:1px solid rgba(245,74,72,.3);margin-bottom:32px;">
          <span style="position:relative;display:flex;height:8px;width:8px;">
            <span style="position:absolute;display:inline-flex;height:100%;width:100%;border-radius:50%;background:#F54A48;opacity:.75;animation:ping 1s cubic-bezier(0,0,.2,1) infinite;"></span>
            <span style="position:relative;display:inline-flex;border-radius:50%;height:8px;width:8px;background:#F54A48;"></span>
          </span>
          <span class="font-mono" style="font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:#F54A48;">AI Revenue Operating System</span>
        </div>
        <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;line-height:1.08;letter-spacing:-.03em;color:white;margin-bottom:24px;">
          <span class="shift-gradient-text">Revenue Leaks</span><br/>Don't Fix Themselves
        </h1>
        <p style="font-family:'DM Sans',sans-serif;font-size:1.125rem;color:rgba(255,255,255,.6);line-height:1.7;max-width:640px;margin-bottom:40px;">
          Roofing contractors lose $35K–$100K+ monthly to broken lead systems. ShiFt NeuralOS plugs the leaks with AI that generates, qualifies, and converts leads 24/7—without adding headcount.
        </p>
        <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:32px;">
          <a href="https://shiftnow.io/Calculator" class="btn-primary" style="padding:18px 36px;font-size:1rem;">Find Your Gap →</a>
        </div>
        <p class="font-mono" style="font-size:.75rem;letter-spacing:.1em;color:rgba(255,255,255,.4);">Trusted by 847+ roofing companies across 42 states</p>
      </div>
    </div>
  </section>

  <!-- ═ PROBLEM SELECTOR (ProblemSelector.jsx) ═ -->
  <section id="problem-selector" class="brand-section">
    <div class="brand-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#F54A48;display:block;margin-bottom:16px;">Diagnose Your Gap</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Where Is Revenue Leaking From <span class="shift-gradient-text">Your Business?</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:560px;margin:0 auto;">Select your biggest challenge to find your solution</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-bottom:48px;">
        <a href="/AttractHome" style="text-decoration:none;" class="brand-card" style="display:block;border-left:4px solid #FA982F;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:24px;">📉</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:8px;">I'm not getting enough leads</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Pipeline is empty. Phone isn't ringing. Marketing isn't working.</p>
          <span class="font-mono" style="font-size:.75rem;font-weight:700;color:#FA982F;text-transform:uppercase;letter-spacing:.08em;">ATTRACT can help →</span>
        </a>
        <a href="/Home" style="text-decoration:none;" class="brand-card" style="display:block;border-left:4px solid #F54A48;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(245,74,72,.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:24px;">🔄</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:8px;">I'm getting leads but not converting them</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Leads come in but don't book. Follow-up falls through. Close rate is low.</p>
          <span class="font-mono" style="font-size:.75rem;font-weight:700;color:#F54A48;text-transform:uppercase;letter-spacing:.08em;">CONVERT can help →</span>
        </a>
        <a href="/Home" style="text-decoration:none;" class="brand-card" style="display:block;border-left:4px solid #F54A48;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(245,74,72,.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:24px;">⚡</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:8px;">I'm losing leads to competitors</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Competitors respond faster. After-hours leads go to voicemail.</p>
          <span class="font-mono" style="font-size:.75rem;font-weight:700;color:#F54A48;text-transform:uppercase;letter-spacing:.08em;">SPEED can help →</span>
        </a>
        <a href="/Platform" style="text-decoration:none;" class="brand-card" style="display:block;border-left:4px solid #48BB78;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(72,187,120,.12);display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:24px;">🔍</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:8px;">I don't know what's working</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Marketing ROI is a mystery. Can't track lead sources. Flying blind.</p>
          <span class="font-mono" style="font-size:.75rem;font-weight:700;color:#48BB78;text-transform:uppercase;letter-spacing:.08em;">INSIGHTS can help →</span>
        </a>
      </div>
      <div style="text-align:center;">
        <a href="/Platform" class="btn-outline">I Have ALL of These Problems →</a>
      </div>
    </div>
  </section>

  <!-- ═ TWO PRODUCTS (TwoProducts.jsx) ═ -->
  <section id="products" class="brand-section" style="background:#0D0F33;">
    <div class="brand-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">The Platform</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Two Systems. <span class="shift-gradient-text">One Revenue Machine.</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:560px;margin:0 auto;">ShiFt NeuralOS has two complementary products that work together—or independently.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:32px;margin-bottom:32px;">
        <!-- Attract -->
        <div style="background:linear-gradient(135deg,rgba(250,152,47,.08),rgba(250,152,47,.04));border:1px solid rgba(250,152,47,.2);border-radius:20px;padding:40px;">
          <div style="width:64px;height:64px;border-radius:16px;background:rgba(250,152,47,.15);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🧲</div>
          <h3 class="font-display" style="font-size:2rem;font-weight:700;color:white;margin-bottom:8px;">ShiFt <span style="color:#FA982F;">ATTRACT</span></h3>
          <div class="font-mono" style="font-size:.875rem;text-transform:uppercase;letter-spacing:.08em;color:#FA982F;margin-bottom:16px;">Fill the Pipeline</div>
          <p style="font-size:1rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.7;">AI-powered lead generation that brings qualified prospects to your door. Multi-channel campaigns, automated outreach, and intelligent targeting.</p>
          <ul style="list-style:none;padding:0;margin-bottom:32px;">
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.875rem;color:rgba(255,255,255,.7);">⚡ AI-Powered Campaigns</li>
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.875rem;color:rgba(255,255,255,.7);">👥 Multi-Channel Outreach</li>
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.875rem;color:rgba(255,255,255,.7);">🎯 Intelligent Targeting</li>
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:.875rem;color:rgba(255,255,255,.7);">📈 Pipeline Analytics</li>
          </ul>
          <div style="padding-top:24px;border-top:1px solid rgba(250,152,47,.2);margin-bottom:24px;">
            <div style="font-size:.75rem;color:rgba(255,255,255,.5);margin-bottom:6px;">Best for:</div>
            <div class="font-display" style="font-size:.875rem;font-weight:600;color:#FA982F;">Empty pipeline, inconsistent lead flow</div>
          </div>
          <a href="https://attract.shiftnow.io" class="font-mono" style="font-size:.875rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#FA982F;text-decoration:none;">Explore Attract →</a>
        </div>
        <!-- Convert -->
        <div style="background:linear-gradient(135deg,rgba(245,74,72,.08),rgba(245,74,72,.04));border:1px solid rgba(245,74,72,.2);border-radius:20px;padding:40px;">
          <div style="width:64px;height:64px;border-radius:16px;background:rgba(245,74,72,.15);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🎯</div>
          <h3 class="font-display" style="font-size:2rem;font-weight:700;color:white;margin-bottom:8px;">ShiFt <span style="color:#F54A48;">CONVERT</span></h3>
          <div class="font-mono" style="font-size:.875rem;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:16px;">Close the Deals</div>
          <p style="font-size:1rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.7;">AI-powered lead conversion that turns prospects into booked appointments. 24/7 response, instant qualification, automated booking.</p>
          <ul style="list-style:none;padding:0;margin-bottom:32px;">
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.875rem;color:rgba(255,255,255,.7);">⏱ 30-Second Response Time</li>
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.875rem;color:rgba(255,255,255,.7);">✅ AI Qualification</li>
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:.875rem;color:rgba(255,255,255,.7);">📅 Automated Appointment Booking</li>
            <li style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:.875rem;color:rgba(255,255,255,.7);">📊 Show Rate Optimization</li>
          </ul>
          <div style="padding-top:24px;border-top:1px solid rgba(245,74,72,.2);margin-bottom:24px;">
            <div style="font-size:.75rem;color:rgba(255,255,255,.5);margin-bottom:6px;">Best for:</div>
            <div class="font-display" style="font-size:.875rem;font-weight:600;color:#F54A48;">Leads not converting, slow response time</div>
          </div>
          <a href="https://go.shiftnow.io" class="font-mono" style="font-size:.875rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;text-decoration:none;">Explore Convert →</a>
        </div>
      </div>
      <div style="text-align:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
        <p class="font-display" style="font-size:1.5rem;font-weight:700;color:white;">
          <span style="color:#FA982F;">Attract</span> brings them in. <span style="color:#F54A48;">Convert</span> closes them.<br/>
          <span class="shift-gradient-text">Together, they're unstoppable.</span>
        </p>
      </div>
    </div>
  </section>

  <!-- ═ SOCIAL PROOF (SocialProof.jsx) ═ -->
  <section id="testimonials" class="brand-section">
    <div class="brand-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">Results</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Trusted by <span class="shift-gradient-text">Top Contractors</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:480px;margin:0 auto;">Roofing companies across the country are scaling with ShiFt NeuralOS™.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">
        <div class="glass-card" style="display:flex;flex-direction:column;">
          <div style="color:#FA982F;font-size:1rem;letter-spacing:2px;margin-bottom:20px;">★★★★★</div>
          <p style="font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;margin-bottom:24px;">"ShiFt turned our business around. We went from chasing leads to having a waitlist. Revenue doubled in 6 months."</p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;">M</div>
            <div><div class="font-display" style="font-size:.875rem;font-weight:600;color:white;">Marcus Johnson</div><div style="font-size:.75rem;color:rgba(255,255,255,.4);">Owner, Apex Roofing Co.</div></div>
          </div>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;">
          <div style="color:#FA982F;font-size:1rem;letter-spacing:2px;margin-bottom:20px;">★★★★★</div>
          <p style="font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;margin-bottom:24px;">"The AI assistant books 40+ inspections a week for us. It's like having a sales team that never sleeps."</p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#FA982F,#F54A48);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;">S</div>
            <div><div class="font-display" style="font-size:.875rem;font-weight:600;color:white;">Sarah Chen</div><div style="font-size:.75rem;color:rgba(255,255,255,.4);">GM, Summit Storm Solutions</div></div>
          </div>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;">
          <div style="color:#FA982F;font-size:1rem;letter-spacing:2px;margin-bottom:20px;">★★★★★</div>
          <p style="font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;margin-bottom:24px;">"Property intelligence alone paid for the platform in the first month. We're closing neighborhoods, not just houses."</p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;">D</div>
            <div><div class="font-display" style="font-size:.875rem;font-weight:600;color:white;">David Martinez</div><div style="font-size:.75rem;color:rgba(255,255,255,.4);">CEO, Eagle Eye Roofing</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═ CTA (CTA.jsx) ═ -->
  <section id="cta" class="brand-section" style="background:#0D0F33;">
    <div class="brand-inner">
      <div style="position:relative;border-radius:24px;overflow:hidden;padding:64px 32px;text-align:center;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.08));border:1px solid rgba(245,74,72,.15);">
        <div style="position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-50%);width:500px;height:300px;border-radius:50%;background:radial-gradient(ellipse,rgba(245,74,72,.15),transparent 70%);pointer-events:none;"></div>
        <div style="position:relative;">
          <h2 class="font-display" style="font-size:clamp(2rem,5vw,3rem);font-weight:800;color:white;margin-bottom:20px;">Ready to <span class="shift-gradient-text">ShiFt</span> Your Revenue?</h2>
          <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:500px;margin:0 auto 36px;line-height:1.7;">Get a free revenue audit and see exactly how much money you're leaving on the table. No contracts, no pressure.</p>
          <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px;">
            <a href="https://calc.shiftnow.io" class="btn-primary" style="padding:18px 36px;">Start Free Audit →</a>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-outline" style="padding:18px 36px;">Talk to Sales</a>
          </div>
          <p class="font-mono" style="font-size:.75rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;">Setup in 48 hours · No long-term contracts · Cancel anytime</p>
        </div>
      </div>
    </div>
  </section>
</main>
<script>@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}
document.querySelectorAll('[style*="animation:ping"]').forEach(el=>{el.style.animation='ping 1s cubic-bezier(0,0,.2,1) infinite';});</script>`;

// ── CONVERT HOME (HeroNew + ProblemCards + ComparisonTable + Mechanism + ProofSection + ConversionPath + FAQSection + CTA) ──
const CONVERT_HOME_HTML = `<!-- CONVERT HOME: HeroNew + ProblemCards + ComparisonTable + Mechanism + ProofSection + ConversionPath + FAQSection + CTA -->
<!-- Use Convert Nav + Global CSS + Footer -->
<style>
.cv-section{padding:80px 24px;}.cv-inner{max-width:1140px;margin:0 auto;}
@media(min-width:768px){.cv-section{padding:112px 32px;}}
.cv-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;transition:all .3s ease;}
.cv-card:hover{transform:translateY(-4px);}
.shift-faq-item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;margin-bottom:16px;}
.shift-faq-btn{width:100%;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;background:none;border:none;cursor:pointer;text-align:left;color:white;}
.shift-faq-question{font-family:'Montserrat Alternates',sans-serif;font-size:1.125rem;font-weight:600;color:white;}
.shift-faq-chevron{width:20px;height:20px;flex-shrink:0;color:rgba(255,255,255,.4);transition:transform .3s ease;}
.shift-faq-item.open .shift-faq-chevron{transform:rotate(180deg);color:#F54A48;}
.shift-faq-answer{display:none;padding:0 24px 20px;font-size:.9375rem;color:rgba(255,255,255,.6);line-height:1.7;}
.shift-faq-item.open .shift-faq-answer{display:block;}
</style>

<main style="padding-top:72px;">

  <!-- ═ HERO (HeroNew.jsx) ═ -->
  <section id="hero" style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:128px 24px 80px;overflow:hidden;text-align:center;">
    <div style="position:absolute;inset:0;pointer-events:none;">
      <div style="position:absolute;top:25%;right:0;width:900px;height:900px;border-radius:50%;opacity:.15;background:radial-gradient(circle,rgba(245,74,72,.2) 0%,rgba(250,152,47,.1) 40%,transparent 70%);"></div>
    </div>
    <div style="position:relative;max-width:1140px;margin:0 auto;">
      <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;border-radius:999px;background:rgba(245,74,72,.08);border:1px solid rgba(245,74,72,.3);margin-bottom:32px;">
        <span style="position:relative;display:flex;height:8px;width:8px;">
          <span style="position:absolute;display:inline-flex;height:100%;width:100%;border-radius:50%;background:#F54A48;opacity:.75;animation:ping 1s cubic-bezier(0,0,.2,1) infinite;"></span>
          <span style="position:relative;display:inline-flex;border-radius:50%;height:8px;width:8px;background:#F54A48;"></span>
        </span>
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:#F54A48;">Calculating Live Revenue Leaks for 847+ Roofing Companies</span>
      </div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:900;line-height:1.08;letter-spacing:-.03em;color:white;margin-bottom:24px;">
        <span class="shift-gradient-text">Three Revenue Leaks</span><br/>Are Costing You<br/>$35K–$100K+ Every Month
      </h1>
      <p style="font-family:'DM Sans',sans-serif;font-size:1.125rem;color:rgba(255,255,255,.6);max-width:768px;margin:0 auto 40px;line-height:1.7;">
        Missed calls. Junk leads. Invisible buyers. Your competitors are capturing these opportunities while you sleep. See exactly how much they're costing <strong style="color:#F54A48;">YOUR</strong> business.
      </p>
      <div style="margin-bottom:24px;">
        <a href="https://calc.shiftnow.io" class="btn-primary" style="padding:18px 40px;font-size:1rem;">Calculate My Revenue Leak →</a>
      </div>
      <p class="font-mono" style="font-size:.75rem;letter-spacing:.1em;color:rgba(255,255,255,.4);">60 seconds. No credit card. Just your real number.</p>
    </div>
  </section>

  <!-- ═ PROBLEM CARDS (ProblemCards.jsx) ═ -->
  <section id="revenue-leaks" class="cv-section" style="background:#0D0F33;">
    <div class="cv-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#F54A48;display:block;margin-bottom:16px;">The Problem</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Every Day, Money Walks Out Your Door</h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:540px;margin:0 auto;">These three leaks drain $35K–$100K+ monthly from the average roofing company</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">
        <div style="position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;border-left:4px solid #F54A48;">
          <div style="width:64px;height:64px;border-radius:12px;background:rgba(245,74,72,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">📞</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">Missed Calls = Missed Revenue</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.6;">42% of calls come after 5pm. Your voicemail isn't closing deals.</p>
          <div style="margin-bottom:16px;"><div class="font-display shift-gradient-text" style="font-size:2rem;font-weight:700;margin-bottom:4px;">$12K–$35K</div><div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);">lost monthly</div></div>
          <div style="padding-top:16px;border-top:1px solid rgba(255,255,255,.06);"><p style="font-size:.75rem;font-style:italic;color:rgba(255,255,255,.4);">Every missed call is a job your competitor wins.</p></div>
        </div>
        <div style="position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;border-left:4px solid #FA982F;">
          <div style="width:64px;height:64px;border-radius:12px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🗑</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">Junk Leads Eat Your Time</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.6;">You're paying for leads that were never going to buy.</p>
          <div style="margin-bottom:16px;"><div class="font-display shift-gradient-text" style="font-size:2rem;font-weight:700;margin-bottom:4px;">$8K–$25K</div><div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);">wasted monthly</div></div>
          <div style="padding-top:16px;border-top:1px solid rgba(255,255,255,.06);"><p style="font-size:.75rem;font-style:italic;color:rgba(255,255,255,.4);">Bad leads don't just waste money—they waste your sales team's energy.</p></div>
        </div>
        <div style="position:relative;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;border-left:4px solid #48BB78;">
          <div style="width:64px;height:64px;border-radius:12px;background:rgba(72,187,120,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">👻</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">Invisible Buyers Choose Competitors</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.6;">High-intent buyers are researching you. You just can't see them.</p>
          <div style="margin-bottom:16px;"><div class="font-display shift-gradient-text" style="font-size:2rem;font-weight:700;margin-bottom:4px;">$15K–$40K</div><div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);">missed monthly</div></div>
          <div style="padding-top:16px;border-top:1px solid rgba(255,255,255,.06);"><p style="font-size:.75rem;font-style:italic;color:rgba(255,255,255,.4);">They wanted to buy from you. You just weren't fast enough.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═ COMPARISON TABLE (ComparisonTable.jsx) ═ -->
  <section id="comparison" class="cv-section">
    <div class="cv-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">The Reality</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;">Your Current Approach vs. ShiFt Convert</h2>
      </div>
      <div style="border-radius:16px;overflow:hidden;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:1px solid rgba(255,255,255,.08);">
              <th style="text-align:left;padding:20px 24px;font-size:.875rem;font-weight:600;color:rgba(255,255,255,.6);">Metric</th>
              <th style="text-align:center;padding:20px 24px;font-size:.875rem;font-weight:600;color:rgba(255,255,255,.6);">Your Current Setup</th>
              <th style="text-align:center;padding:20px 24px;font-size:.875rem;font-weight:600;color:rgba(255,255,255,.6);">With ShiFt Convert</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:20px 24px;font-size:.875rem;font-weight:500;color:white;">After-hours response</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:rgba(255,255,255,.5);">❌ Voicemail</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:#48BB78;font-weight:700;">✓ 30 seconds</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:20px 24px;font-size:.875rem;font-weight:500;color:white;">Lead qualification</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:rgba(255,255,255,.5);">❌ Manual</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:#48BB78;font-weight:700;">✓ AI-instant</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:20px 24px;font-size:.875rem;font-weight:500;color:white;">Appointment booking</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:rgba(255,255,255,.5);">❌ Back-and-forth</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:#48BB78;font-weight:700;">✓ Automated</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:20px 24px;font-size:.875rem;font-weight:500;color:white;">Follow-up consistency</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:rgba(255,255,255,.5);">❌ When you remember</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:#48BB78;font-weight:700;">✓ 100% automated</td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,.06);"><td style="padding:20px 24px;font-size:.875rem;font-weight:500;color:white;">Lead source tracking</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:rgba(255,255,255,.5);">❌ "I think it was..."</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:#48BB78;font-weight:700;">✓ Real-time dashboard</td></tr>
            <tr><td style="padding:20px 24px;font-size:.875rem;font-weight:500;color:white;">Monthly revenue leaked</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:rgba(255,255,255,.5);">❌ $35K–$100K+</td><td style="padding:20px 24px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:.875rem;color:#48BB78;font-weight:700;">✓ $0</td></tr>
          </tbody>
        </table>
      </div>
      <div style="text-align:center;margin-top:40px;">
        <a href="https://calc.shiftnow.io" class="btn-primary">See Your Specific Numbers →</a>
      </div>
    </div>
  </section>

  <!-- ═ MECHANISM / HOW IT WORKS (Mechanism.jsx) ═ -->
  <section id="how-it-works" class="cv-section" style="background:#0D0F33;">
    <div class="cv-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#48BB78;display:block;margin-bottom:16px;">The Solution</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Three Fixes for Three Leaks</h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:540px;margin:0 auto;">ShiFt Convert plugs every hole in your revenue bucket</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="display:inline-flex;align-items:center;padding:4px 12px;border-radius:999px;background:rgba(245,74,72,.12);color:#F54A48;border:1px solid rgba(245,74,72,.25);margin-bottom:24px;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Stage 1</div>
          <div style="width:64px;height:64px;border-radius:12px;background:rgba(245,74,72,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🎯</div>
          <div class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);margin-bottom:8px;">Fixes: Leak #1 (Missed Calls)</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:16px;">AI Answers in 30 Seconds</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.6;">Phone, web, text, Facebook—every lead gets an instant response. No voicemail. No missed opportunities.</p>
          <div style="padding-top:24px;border-top:1px solid rgba(255,255,255,.06);"><div class="font-display" style="font-size:2.5rem;font-weight:700;color:#F54A48;margin-bottom:4px;">30 sec</div><div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);">response time</div></div>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="display:inline-flex;align-items:center;padding:4px 12px;border-radius:999px;background:rgba(250,152,47,.12);color:#FA982F;border:1px solid rgba(250,152,47,.25);margin-bottom:24px;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Stage 2</div>
          <div style="width:64px;height:64px;border-radius:12px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">✅</div>
          <div class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);margin-bottom:8px;">Fixes: Leak #2 (Junk Leads)</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:16px;">AI Separates Gold from Garbage</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.6;">Our AI asks the right questions, scores every lead, and only passes qualified buyers to your team.</p>
          <div style="padding-top:24px;border-top:1px solid rgba(255,255,255,.06);"><div class="font-display" style="font-size:2.5rem;font-weight:700;color:#FA982F;margin-bottom:4px;">73%</div><div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);">better lead quality</div></div>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="display:inline-flex;align-items:center;padding:4px 12px;border-radius:999px;background:rgba(72,187,120,.12);color:#48BB78;border:1px solid rgba(72,187,120,.25);margin-bottom:24px;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Stage 3</div>
          <div style="width:64px;height:64px;border-radius:12px;background:rgba(72,187,120,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">📅</div>
          <div class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);margin-bottom:8px;">Fixes: Leak #3 (Invisible Buyers)</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:16px;">AI Books the Appointment</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:24px;line-height:1.6;">Qualified leads get booked instantly. No back-and-forth. No delays. Just appointments on your calendar.</p>
          <div style="padding-top:24px;border-top:1px solid rgba(255,255,255,.06);"><div class="font-display" style="font-size:2.5rem;font-weight:700;color:#48BB78;margin-bottom:4px;">3.2x</div><div class="font-mono" style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);">more appointments</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═ PROOF SECTION (ProofSection.jsx) ═ -->
  <section id="proof" class="cv-section">
    <div class="cv-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">Proof</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;">From Revenue Leak to <span class="shift-gradient-text">Revenue Machine</span></h2>
      </div>
      <div class="glass-card" style="padding:48px;">
        <div style="font-size:48px;margin-bottom:24px;opacity:.3;">💬</div>
        <blockquote style="font-size:1.375rem;line-height:1.65;color:white;margin-bottom:32px;">"We were losing $47K a month to missed calls alone. ShiFt caught every lead we were missing—now our calendar is full and our close rate is up 34%."</blockquote>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:40px;">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:1.25rem;font-weight:700;color:white;flex-shrink:0;">JT</div>
          <div>
            <div class="font-display" style="font-size:1.125rem;font-weight:600;color:white;">Jake Torres</div>
            <div style="font-size:.875rem;color:rgba(255,255,255,.5);">Owner, Titan Roofing Services</div>
            <div class="font-mono" style="font-size:.75rem;color:rgba(255,255,255,.4);">Dallas, TX</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:24px;padding-top:32px;border-top:1px solid rgba(255,255,255,.08);text-align:center;">
          <div><div class="font-display shift-gradient-text" style="font-size:2rem;font-weight:700;margin-bottom:8px;">$750K → $7M</div><div style="font-size:.875rem;color:rgba(255,255,255,.4);">6-Year Growth</div></div>
          <div><div class="font-display shift-gradient-text" style="font-size:2rem;font-weight:700;margin-bottom:8px;">34%</div><div style="font-size:.875rem;color:rgba(255,255,255,.4);">Close Rate Increase</div></div>
          <div><div class="font-display shift-gradient-text" style="font-size:2rem;font-weight:700;margin-bottom:8px;">89%</div><div style="font-size:.875rem;color:rgba(255,255,255,.4);">Show Rate</div></div>
        </div>
        <div style="text-align:center;margin-top:32px;"><a href="/Results" class="font-mono" style="font-size:.875rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;text-decoration:none;">Read Full Case Study →</a></div>
      </div>
    </div>
  </section>

  <!-- ═ CONVERSION PATH (ConversionPath.jsx) ═ -->
  <section id="conversion-path" class="cv-section" style="background:#0D0F33;">
    <div class="cv-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#F54A48;display:block;margin-bottom:16px;">Your Next Step</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;">See Your Number in <span class="shift-gradient-text">60 Seconds</span></h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:32px;margin-bottom:48px;">
        <div style="text-align:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:80px;height:80px;border-radius:16px;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.12));border:1px solid rgba(245,74,72,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:36px;">🧮</div>
          <div class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:12px;">Step 1: Calculate</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">Answer 5 Questions</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Your revenue, lead volume, and current close rate</p>
          <span style="display:inline-flex;align-items:center;padding:4px 12px;border-radius:999px;background:rgba(250,152,47,.12);color:#FA982F;font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:700;">60 seconds</span>
        </div>
        <div style="text-align:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:80px;height:80px;border-radius:16px;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.12));border:1px solid rgba(245,74,72,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:36px;">👁</div>
          <div class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:12px;">Step 2: Experience</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">See ShiFt in Action</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Experience how AI handles your actual leads</p>
          <span style="display:inline-flex;align-items:center;padding:4px 12px;border-radius:999px;background:rgba(250,152,47,.12);color:#FA982F;font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:700;">Live demo</span>
        </div>
        <div style="text-align:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:80px;height:80px;border-radius:16px;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.12));border:1px solid rgba(245,74,72,.2);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:36px;">📅</div>
          <div class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:12px;">Step 3: Book</div>
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">Reality Session</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;">Custom audit of your specific revenue leaks</p>
          <span style="display:inline-flex;align-items:center;padding:4px 12px;border-radius:999px;background:rgba(250,152,47,.12);color:#FA982F;font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:700;">15 minutes</span>
        </div>
      </div>
      <div style="text-align:center;"><a href="/ROICalculator" class="btn-primary" style="padding:18px 40px;">See My ROI →</a></div>
    </div>
  </section>

  <!-- ═ FAQ (FAQSection.jsx) ═ -->
  <section id="faq" class="cv-section">
    <div class="cv-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">Questions</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;">Frequently Asked Questions</h2>
      </div>
      <div style="max-width:768px;margin:0 auto;">
        <div class="shift-faq-item"><button class="shift-faq-btn" onclick="shiftToggleFaq(this)"><span class="shift-faq-question">How is this different from a chatbot?</span><svg class="shift-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="shift-faq-answer">Chatbots collect info. ShiFt AI actually qualifies leads, handles objections, and books appointments—without human intervention.</div></div>
        <div class="shift-faq-item"><button class="shift-faq-btn" onclick="shiftToggleFaq(this)"><span class="shift-faq-question">Will it work for my type of roofing company?</span><svg class="shift-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="shift-faq-answer">ShiFt is built specifically for roofing contractors. Residential, commercial, storm restoration—we speak your language.</div></div>
        <div class="shift-faq-item"><button class="shift-faq-btn" onclick="shiftToggleFaq(this)"><span class="shift-faq-question">How fast can I see results?</span><svg class="shift-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="shift-faq-answer">Most clients see their first AI-booked appointment within 48 hours of going live.</div></div>
        <div class="shift-faq-item"><button class="shift-faq-btn" onclick="shiftToggleFaq(this)"><span class="shift-faq-question">What if leads prefer to talk to a human?</span><svg class="shift-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="shift-faq-answer">ShiFt seamlessly hands off to your team when needed. Warm transfer, full context, no friction.</div></div>
        <div class="shift-faq-item"><button class="shift-faq-btn" onclick="shiftToggleFaq(this)"><span class="shift-faq-question">How much does it cost?</span><svg class="shift-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button><div class="shift-faq-answer">Less than your worst salesperson and more reliable than your best one. Packages start at different tiers based on your business size. Calculate your ROI first.</div></div>
      </div>
    </div>
  </section>

  <!-- ═ CTA ═ -->
  <section id="cta" class="cv-section" style="background:#0D0F33;">
    <div class="cv-inner">
      <div style="position:relative;border-radius:24px;overflow:hidden;padding:64px 32px;text-align:center;background:linear-gradient(135deg,rgba(245,74,72,.12),rgba(250,152,47,.08));border:1px solid rgba(245,74,72,.15);">
        <div style="position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-50%);width:500px;height:300px;border-radius:50%;background:radial-gradient(ellipse,rgba(245,74,72,.15),transparent 70%);pointer-events:none;"></div>
        <div style="position:relative;">
          <h2 class="font-display" style="font-size:clamp(2rem,5vw,3rem);font-weight:800;color:white;margin-bottom:20px;">Ready to <span class="shift-gradient-text">ShiFt</span> Your Revenue?</h2>
          <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:500px;margin:0 auto 36px;line-height:1.7;">Get a free revenue audit and see exactly how much money you're leaving on the table. No contracts, no pressure.</p>
          <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px;">
            <a href="https://calc.shiftnow.io" class="btn-primary" style="padding:18px 36px;">Start Free Audit →</a>
            <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-outline" style="padding:18px 36px;">Talk to Sales</a>
          </div>
          <p class="font-mono" style="font-size:.75rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;">Setup in 48 hours · No long-term contracts · Cancel anytime</p>
        </div>
      </div>
    </div>
  </section>
</main>`;

// ── ATTRACT HOME (AttractHero + EmptyPipelineProblems + AttractSolution + AttractROICalculator + SocialProof + FAQ + CTA) ──
const ATTRACT_HOME_HTML = `<!-- ATTRACT HOME: AttractHero + EmptyPipelineProblems + AttractSolution + SocialProof + FAQ + CTA -->
<!-- NOTE: AttractROICalculator uses recharts — static version with comparison bars included instead -->
<!-- Use Attract Nav + Global CSS + Footer -->
<style>
.at-section{padding:80px 24px;}.at-inner{max-width:1140px;margin:0 auto;}
@media(min-width:768px){.at-section{padding:112px 32px;}}
.at-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;transition:all .3s ease;}
</style>

<main style="padding-top:72px;">

  <!-- ═ HERO (AttractHero.jsx) ═ -->
  <section id="hero" style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:128px 24px 80px;overflow:hidden;text-align:center;">
    <div style="position:absolute;inset:0;pointer-events:none;">
      <div style="position:absolute;top:25%;left:50%;transform:translateX(-50%);width:900px;height:900px;border-radius:50%;opacity:.15;background:radial-gradient(circle,rgba(250,152,47,.2) 0%,rgba(245,74,72,.1) 40%,transparent 70%);"></div>
    </div>
    <div style="position:relative;max-width:1140px;margin:0 auto;">
      <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 20px;border-radius:999px;background:rgba(250,152,47,.08);border:1px solid rgba(250,152,47,.3);margin-bottom:32px;">
        <span style="position:relative;display:flex;height:8px;width:8px;">
          <span style="position:absolute;display:inline-flex;height:100%;width:100%;border-radius:50%;background:#FA982F;opacity:.75;animation:ping 1s cubic-bezier(0,0,.2,1) infinite;"></span>
          <span style="position:relative;display:inline-flex;border-radius:50%;height:8px;width:8px;background:#FA982F;"></span>
        </span>
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:#FA982F;">AI Lead Generation for Roofing Contractors</span>
      </div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:900;line-height:1.08;letter-spacing:-.03em;color:white;margin-bottom:24px;max-width:900px;margin-left:auto;margin-right:auto;">
        Your <span style="background:linear-gradient(to right,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Pipeline Is Empty</span> Because Your Marketing Isn't Working
      </h1>
      <p style="font-family:'DM Sans',sans-serif;font-size:1.125rem;color:rgba(255,255,255,.6);max-width:768px;margin:0 auto 40px;line-height:1.7;">
        You're spending on ads, SEO, and agencies—but the phone isn't ringing. ShiFt Attract uses AI to generate qualified leads across every channel, 24 hours a day.
      </p>
      <div style="margin-bottom:32px;">
        <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="padding:18px 40px;font-size:1rem;background:linear-gradient(135deg,#FA982F,#F54A48);">Audit My Pipeline →</a>
      </div>
      <p class="font-mono" style="font-size:.75rem;letter-spacing:.1em;color:rgba(255,255,255,.4);">Free pipeline audit. See exactly where leads should be coming from.</p>
    </div>
  </section>

  <!-- ═ EMPTY PIPELINE PROBLEMS (EmptyPipelineProblems.jsx) ═ -->
  <section id="problems" class="at-section" style="background:#0D0F33;">
    <div class="at-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">The Problem</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Empty Pipeline = <span style="background:linear-gradient(to right,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Unpredictable Revenue</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:540px;margin:0 auto;">If you can't control your pipeline, you can't control your business</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">
        <div style="background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.08);border-right:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);border-left:4px solid #FA982F;border-radius:16px;padding:32px;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:24px;">📉</div>
          <div class="font-mono" style="font-size:.6rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(250,152,47,.7);margin-bottom:12px;">PROBLEM #1: INCONSISTENT LEAD FLOW</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Feast or Famine</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.6;">Some months you're drowning. Other months, crickets. No consistency means no predictability.</p>
          <div style="background:rgba(250,152,47,.08);border-radius:10px;padding:16px;margin-bottom:16px;">
            <div class="font-display" style="font-size:2rem;font-weight:900;color:#FA982F;margin-bottom:4px;">67%</div>
            <div style="font-size:.75rem;color:rgba(255,255,255,.6);">of contractors struggle with lead consistency</div>
          </div>
          <p style="font-size:.875rem;font-style:italic;font-weight:600;color:rgba(255,255,255,.5);">"You can't grow a business you can't predict."</p>
        </div>
        <div style="background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.08);border-right:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);border-left:4px solid #FA982F;border-radius:16px;padding:32px;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:24px;">🔥</div>
          <div class="font-mono" style="font-size:.6rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(250,152,47,.7);margin-bottom:12px;">PROBLEM #2: MARKETING THAT DOESN'T WORK</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Money Burning, Phone Silent</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.6;">You're paying for ads, SEO, agencies—but where are the leads? Marketing ROI is a mystery.</p>
          <div style="background:rgba(250,152,47,.08);border-radius:10px;padding:16px;margin-bottom:16px;">
            <div class="font-display" style="font-size:2rem;font-weight:900;color:#FA982F;margin-bottom:4px;">$3,200</div>
            <div style="font-size:.75rem;color:rgba(255,255,255,.6);">monthly average wasted on ineffective marketing</div>
          </div>
          <p style="font-size:.875rem;font-style:italic;font-weight:600;color:rgba(255,255,255,.5);">"Every dollar you waste is a dollar your competitor invests."</p>
        </div>
        <div style="background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.08);border-right:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);border-left:4px solid #FA982F;border-radius:16px;padding:32px;">
          <div style="width:56px;height:56px;border-radius:12px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:24px;">🤝</div>
          <div class="font-mono" style="font-size:.6rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(250,152,47,.7);margin-bottom:12px;">PROBLEM #3: DEPENDENT ON REFERRALS</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Living on Hope</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.6;">Referrals are great—but unreliable. You need a system that generates leads on demand.</p>
          <div style="background:rgba(250,152,47,.08);border-radius:10px;padding:16px;margin-bottom:16px;">
            <div class="font-display" style="font-size:2rem;font-weight:900;color:#FA982F;margin-bottom:4px;">43%</div>
            <div style="font-size:.75rem;color:rgba(255,255,255,.6);">of contractors get 80%+ of leads from referrals</div>
          </div>
          <p style="font-size:.875rem;font-style:italic;font-weight:600;color:rgba(255,255,255,.5);">"Hope is not a strategy. Systems are."</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═ ATTRACT SOLUTION (AttractSolution.jsx) ═ -->
  <section id="solution" class="at-section">
    <div class="at-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">The Solution</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">AI That Fills Your Pipeline <span style="background:linear-gradient(to right,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">While You Work</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:540px;margin:0 auto;">ShiFt Attract doesn't just run campaigns—it thinks, optimizes, and scales</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:64px;height:64px;border-radius:16px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🌐</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Every Channel. Every Day.</h3>
          <p style="font-size:1rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.7;">Facebook, Google, Instagram, TikTok, Local SEO—ShiFt Attract runs intelligent campaigns across all channels simultaneously.</p>
          <div style="padding-top:16px;border-top:1px solid rgba(250,152,47,.2);"><p class="font-display" style="font-size:.875rem;font-weight:600;color:#FA982F;">→ Be everywhere your prospects are, without the work.</p></div>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:64px;height:64px;border-radius:16px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🎯</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Find the Right Prospects</h3>
          <p style="font-size:1rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.7;">Our AI identifies homeowners actively researching roofing services in your service area. No more spraying and praying.</p>
          <div style="padding-top:16px;border-top:1px solid rgba(250,152,47,.2);"><p class="font-display" style="font-size:.875rem;font-weight:600;color:#FA982F;">→ Leads that actually want roofing work—not tire kickers.</p></div>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:64px;height:64px;border-radius:16px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">🔄</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Campaigns That Improve Themselves</h3>
          <p style="font-size:1rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.7;">AI continuously tests creative, audiences, and placements. What works gets more budget. What doesn't gets cut.</p>
          <div style="padding-top:16px;border-top:1px solid rgba(250,152,47,.2);"><p class="font-display" style="font-size:.875rem;font-weight:600;color:#FA982F;">→ Marketing that gets smarter every day.</p></div>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:32px;">
          <div style="width:64px;height:64px;border-radius:16px;background:rgba(250,152,47,.12);display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">✅</div>
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:16px;">Ready-to-Convert Leads</h3>
          <p style="font-size:1rem;color:rgba(255,255,255,.7);margin-bottom:24px;line-height:1.7;">Every lead is pre-qualified before it reaches you. Know their project type, timeline, and budget upfront.</p>
          <div style="padding-top:16px;border-top:1px solid rgba(250,152,47,.2);"><p class="font-display" style="font-size:.875rem;font-weight:600;color:#FA982F;">→ Talk to prospects who are ready to buy, not browse.</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═ ROI CALCULATOR STATIC VERSION (AttractROICalculator.jsx — interactive, use /AttractHome for live) ═ -->
  <section id="roi-calculator" class="at-section" style="background:#0D0F33;">
    <div class="at-inner">
      <div style="text-align:center;margin-bottom:40px;">
        <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;background:rgba(250,152,47,.1);border:1px solid rgba(250,152,47,.3);margin-bottom:20px;">
          <span style="width:6px;height:6px;border-radius:50%;background:#FA982F;display:inline-block;"></span>
          <span class="font-mono" style="font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:#FA982F;">ROI Calculator</span>
        </div>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:900;color:white;margin-bottom:16px;">See Your Pipeline's<br/><span style="background:linear-gradient(135deg,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Real Revenue Potential</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:480px;margin:0 auto 32px;line-height:1.7;">Adjust your numbers. See exactly what a consistent pipeline of ready-to-convert leads is worth.</p>
        <a href="/AttractHome" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Use Interactive Calculator →</a>
        <p style="font-size:.75rem;color:rgba(255,255,255,.3);margin-top:12px;font-family:'JetBrains Mono',monospace;">Full interactive version (recharts) available at /AttractHome</p>
      </div>
      <!-- Static example output -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;max-width:900px;margin:0 auto;">
        <div style="background:rgba(72,187,120,.08);border:1px solid rgba(72,187,120,.2);border-radius:16px;padding:20px;text-align:center;"><div class="font-display" style="font-size:1.75rem;font-weight:900;color:#48BB78;">+$32K/mo</div><div class="font-display" style="font-size:.75rem;font-weight:700;color:white;margin:4px 0;">Added Monthly Revenue</div><div class="font-mono" style="font-size:.65rem;color:rgba(255,255,255,.3);">vs. current pipeline</div></div>
        <div style="background:rgba(250,152,47,.08);border:1px solid rgba(250,152,47,.2);border-radius:16px;padding:20px;text-align:center;"><div class="font-display" style="font-size:1.75rem;font-weight:900;color:#FA982F;">+$384K/yr</div><div class="font-display" style="font-size:.75rem;font-weight:700;color:white;margin:4px 0;">Added Annual Revenue</div><div class="font-mono" style="font-size:.65rem;color:rgba(255,255,255,.3);">cumulative 12-month gain</div></div>
        <div style="background:rgba(245,74,72,.08);border:1px solid rgba(245,74,72,.2);border-radius:16px;padding:20px;text-align:center;"><div class="font-display" style="font-size:1.75rem;font-weight:900;color:#F54A48;">1,502%</div><div class="font-display" style="font-size:.75rem;font-weight:700;color:white;margin:4px 0;">Monthly ROI</div><div class="font-mono" style="font-size:.65rem;color:rgba(255,255,255,.3);">on ShiFt Activate plan</div></div>
        <div style="background:rgba(99,179,237,.08);border:1px solid rgba(99,179,237,.2);border-radius:16px;padding:20px;text-align:center;"><div class="font-display" style="font-size:1.75rem;font-weight:900;color:#63B3ED;">2 days</div><div class="font-display" style="font-size:.75rem;font-weight:700;color:white;margin:4px 0;">Break-even</div><div class="font-mono" style="font-size:.65rem;color:rgba(255,255,255,.3);">to recover monthly cost</div></div>
      </div>
    </div>
  </section>

  <!-- ═ SOCIAL PROOF (SocialProof.jsx) ═ -->
  <section id="testimonials" class="at-section">
    <div class="at-inner">
      <div style="text-align:center;margin-bottom:56px;">
        <span class="font-mono" style="font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:#FA982F;display:block;margin-bottom:16px;">Results</span>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3.5rem);font-weight:800;color:white;margin-bottom:16px;">Trusted by <span class="shift-gradient-text">Top Contractors</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.5);max-width:480px;margin:0 auto;">Roofing companies across the country are scaling with ShiFt NeuralOS™.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">
        <div class="glass-card" style="display:flex;flex-direction:column;">
          <div style="color:#FA982F;font-size:1rem;letter-spacing:2px;margin-bottom:20px;">★★★★★</div>
          <p style="font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;margin-bottom:24px;">"ShiFt turned our business around. We went from chasing leads to having a waitlist. Revenue doubled in 6 months."</p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;">M</div>
            <div><div class="font-display" style="font-size:.875rem;font-weight:600;color:white;">Marcus Johnson</div><div style="font-size:.75rem;color:rgba(255,255,255,.4);">Owner, Apex Roofing Co.</div></div>
          </div>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;">
          <div style="color:#FA982F;font-size:1rem;letter-spacing:2px;margin-bottom:20px;">★★★★★</div>
          <p style="font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;margin-bottom:24px;">"The AI assistant books 40+ inspections a week for us. It's like having a sales team that never sleeps."</p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#FA982F,#F54A48);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;">S</div>
            <div><div class="font-display" style="font-size:.875rem;font-weight:600;color:white;">Sarah Chen</div><div style="font-size:.75rem;color:rgba(255,255,255,.4);">GM, Summit Storm Solutions</div></div>
          </div>
        </div>
        <div class="glass-card" style="display:flex;flex-direction:column;">
          <div style="color:#FA982F;font-size:1rem;letter-spacing:2px;margin-bottom:20px;">★★★★★</div>
          <p style="font-size:.9375rem;color:rgba(255,255,255,.65);line-height:1.7;flex:1;margin-bottom:24px;">"Property intelligence alone paid for the platform in the first month. We're closing neighborhoods, not just houses."</p>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:700;color:white;flex-shrink:0;">D</div>
            <div><div class="font-display" style="font-size:.875rem;font-weight:600;color:white;">David Martinez</div><div style="font-size:.75rem;color:rgba(255,255,255,.4);">CEO, Eagle Eye Roofing</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═ CTA ═ -->
  <section id="cta" class="at-section" style="background:#0D0F33;">
    <div class="at-inner">
      <div style="position:relative;border-radius:24px;overflow:hidden;padding:64px 32px;text-align:center;background:linear-gradient(135deg,rgba(250,152,47,.12),rgba(245,74,72,.08));border:1px solid rgba(250,152,47,.2);">
        <h2 class="font-display" style="font-size:clamp(2rem,5vw,3rem);font-weight:800;color:white;margin-bottom:20px;">Ready to <span style="background:linear-gradient(135deg,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Fill Your Pipeline?</span></h2>
        <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:500px;margin:0 auto 36px;line-height:1.7;">Get a free pipeline audit and see exactly where your leads should be coming from.</p>
        <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:24px;">
          <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="padding:18px 36px;background:linear-gradient(135deg,#FA982F,#F54A48);">Audit My Pipeline →</a>
          <a href="/ROICalculator" class="btn-outline" style="padding:18px 36px;">See My ROI</a>
        </div>
        <p class="font-mono" style="font-size:.75rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;">Free audit · No commitment · Results in 15 minutes</p>
      </div>
    </div>
  </section>
</main>`;

const CALCULATOR_HTML = `<!-- CALCULATOR PAGE: "What Is Your Business Actually Losing?" — SHIFT-CALC-001 v1.0 -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<style>
.calc-font-display { font-family: 'Montserrat Alternates', sans-serif; }
.calc-font-mono { font-family: 'JetBrains Mono', monospace; }
.calc-slider {
  -webkit-appearance: none; appearance: none;
  width: 100%; height: 6px; border-radius: 3px; outline: none; cursor: pointer;
}
.calc-slider::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 24px; height: 24px; border-radius: 50%; background: #F54A48; cursor: pointer;
  box-shadow: 0 0 0 4px rgba(245,74,72,0.2), 0 2px 8px rgba(0,0,0,0.4); transition: box-shadow 0.2s ease;
}
.calc-slider::-webkit-slider-thumb:hover { box-shadow: 0 0 0 6px rgba(245,74,72,0.3), 0 2px 12px rgba(0,0,0,0.5); }
.calc-slider::-moz-range-thumb {
  width: 24px; height: 24px; border-radius: 50%; background: #F54A48; cursor: pointer; border: none;
  box-shadow: 0 0 0 4px rgba(245,74,72,0.2);
}
.calc-card {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 36px 28px; text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.calc-card:hover { transform: translateY(-3px); }
</style>

<main style="padding-top:72px;">
  <section style="min-height:100vh;background:#070820;padding:100px 24px 80px;">
    <div style="max-width:860px;margin:0 auto;">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:60px;">
        <div class="calc-font-mono" style="display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#F54A48;margin-bottom:20px;">
          <span style="width:6px;height:12px;background:linear-gradient(135deg,#F54A48,#FA982F);border-radius:2px;display:inline-block;"></span>
          Revenue Loss Calculator · SHIFT-CALC-001 v1.0
        </div>
        <h1 class="calc-font-display" style="font-size:clamp(36px,6vw,64px);font-weight:900;line-height:1.08;letter-spacing:-2px;color:#fff;margin-bottom:20px;">
          What Is Your Business<br>
          <span style="background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Actually Losing?</span>
        </h1>
        <p style="font-size:18px;color:rgba(255,255,255,0.55);max-width:580px;margin:0 auto;line-height:1.7;">
          Move the slider to your monthly revenue. Watch your three revenue leaks calculate in real time.
        </p>
      </div>

      <!-- Slider Card -->
      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:44px 40px;margin-bottom:40px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
          <div>
            <div class="calc-font-mono" style="font-size:11px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.4);margin-bottom:6px;">Your Monthly Revenue</div>
            <div class="calc-font-display" id="rev-display" aria-label="Monthly Revenue" aria-valuetext="$200,000"
              style="font-size:clamp(36px,6vw,52px);font-weight:900;line-height:1;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
              $200,000
            </div>
          </div>
          <div class="calc-font-mono" style="font-size:12px;color:rgba(255,255,255,0.25);text-align:right;">per month</div>
        </div>
        <input type="range" class="calc-slider" id="rev-slider"
          min="50000" max="500000" step="5000" value="200000"
          aria-label="Monthly Revenue" aria-valuemin="50000" aria-valuemax="500000" aria-valuenow="200000"
          style="background:linear-gradient(to right,#F54A48 33.33%,rgba(255,255,255,0.1) 33.33%);"
          oninput="updateCalc(parseInt(this.value))" />
        <div style="display:flex;justify-content:space-between;margin-top:12px;font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,0.25);">
          <span>$50,000</span><span>$500,000</span>
        </div>
      </div>

      <!-- Three Output Cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-bottom:40px;">
        <!-- Card 1 -->
        <div class="calc-card" style="border-color:rgba(245,74,72,0.25);">
          <div class="calc-font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.35);margin-bottom:14px;">Missed Calls Loss</div>
          <div class="calc-font-display" id="out-missed" aria-live="polite"
            style="font-size:clamp(32px,5vw,44px);font-weight:900;color:#F54A48;margin-bottom:14px;line-height:1;">$18,750</div>
          <div class="calc-font-mono" id="out-missed-formula"
            style="font-size:11px;color:rgba(255,255,255,0.4);line-height:1.55;">~20 missed calls × $15K avg job × 25% close rate</div>
        </div>
        <!-- Card 2 -->
        <div class="calc-card" style="border-color:rgba(250,152,47,0.25);">
          <div class="calc-font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.35);margin-bottom:14px;">Garbage Leads Loss</div>
          <div class="calc-font-display" id="out-garbage" aria-live="polite"
            style="font-size:clamp(32px,5vw,44px);font-weight:900;color:#FA982F;margin-bottom:14px;line-height:1;">$2,000</div>
          <div class="calc-font-mono" id="out-garbage-formula"
            style="font-size:11px;color:rgba(255,255,255,0.4);line-height:1.55;">~50 leads × 40% garbage × 2hrs × $50/hr</div>
        </div>
        <!-- Card 3 -->
        <div class="calc-card" style="border-color:rgba(255,215,0,0.3);background:rgba(255,215,0,0.04);">
          <div class="calc-font-mono" style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.35);margin-bottom:14px;">Total Documented Loss</div>
          <div class="calc-font-display" id="out-total" aria-live="polite"
            style="font-size:clamp(32px,5vw,44px);font-weight:900;color:#FFD700;margin-bottom:14px;line-height:1;">$20,750</div>
          <div class="calc-font-mono" style="font-size:11px;color:rgba(255,255,255,0.4);line-height:1.55;">Missed calls + Garbage leads</div>
        </div>
      </div>

      <!-- Context footer -->
      <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:28px 32px;margin-bottom:48px;text-align:center;">
        <p style="font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7;margin:0;font-style:italic;">
          These three leaks represent documented, measurable revenue your business is losing every month.
          The calculator uses conservative industry averages — your actual leaks may be higher.
          Figures calculated per SHIFT-CALC-001 v1.0.
        </p>
      </div>

      <!-- CTA -->
      <div style="text-align:center;">
        <p class="calc-font-display" style="font-size:clamp(22px,4vw,32px);font-weight:800;color:#fff;margin-bottom:8px;">
          Start Closing Your Gap
        </p>
        <p style="font-size:16px;color:rgba(255,255,255,0.5);margin-bottom:32px;line-height:1.6;">
          You're losing <strong id="cta-total" style="color:#FFD700;">$20,750</strong> every month. The math is simple.
        </p>
        <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank"
          style="display:inline-flex;align-items:center;gap:10px;padding:18px 48px;background:linear-gradient(135deg,#F54A48,#FA982F);color:#fff;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:0.08em;border-radius:12px;text-decoration:none;box-shadow:0 4px 32px rgba(245,74,72,0.35);">
          Book a Strategy Call →
        </a>
        <p class="calc-font-mono" style="margin-top:16px;font-size:11px;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.1em;">
          Live in 7 days · 90-Day Revenue Floor · No long-term contracts
        </p>
      </div>
    </div>
  </section>
</main>

<script>
// SHIFT-CALC-001 v1.0 — Calculator JS
var MISSED_CALLS_AVG_JOB = 15000;
var MISSED_CALLS_CLOSE_RATE = 0.25;
var MISSED_CALLS_PER_DOLLAR = 1/10000;
var GARBAGE_PERCENT = 0.40;
var HOURS_PER_LEAD = 2;
var HOURLY_RATE = 50;
var LEADS_PER_DOLLAR = 1/4000;

function fmt(n) {
  if (isNaN(n) || !isFinite(n)) return '--';
  return '$' + Math.round(n).toLocaleString('en-US');
}

function updateCalc(rev) {
  rev = Math.max(50000, Math.min(500000, rev));
  var M = Math.round(rev * MISSED_CALLS_PER_DOLLAR);
  var missedLoss = M * MISSED_CALLS_AVG_JOB * MISSED_CALLS_CLOSE_RATE;
  var L = Math.round(rev * LEADS_PER_DOLLAR);
  var garbageLoss = L * GARBAGE_PERCENT * HOURS_PER_LEAD * HOURLY_RATE;
  var totalLoss = missedLoss + garbageLoss;
  var pct = ((rev - 50000) / (500000 - 50000)) * 100;

  document.getElementById('rev-display').textContent = '$' + rev.toLocaleString('en-US');
  document.getElementById('rev-display').setAttribute('aria-valuetext', '$' + rev.toLocaleString('en-US'));
  document.getElementById('rev-slider').style.background = 'linear-gradient(to right,#F54A48 ' + pct + '%,rgba(255,255,255,0.1) ' + pct + '%)';
  document.getElementById('out-missed').textContent = fmt(missedLoss);
  document.getElementById('out-missed-formula').textContent = '~' + M + ' missed calls × $15K avg job × 25% close rate';
  document.getElementById('out-garbage').textContent = fmt(garbageLoss);
  document.getElementById('out-garbage-formula').textContent = '~' + L + ' leads × 40% garbage × 2hrs × $' + HOURLY_RATE + '/hr';
  document.getElementById('out-total').textContent = fmt(totalLoss);
  document.getElementById('cta-total').textContent = fmt(totalLoss);
}
// Init at default $200K
updateCalc(200000);
// Keyboard accessibility
document.getElementById('rev-slider').addEventListener('keydown', function(e) {
  var step = e.shiftKey ? 50000 : 5000;
  if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { this.value = Math.min(500000, parseInt(this.value) + step); updateCalc(parseInt(this.value)); e.preventDefault(); }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { this.value = Math.max(50000, parseInt(this.value) - step); updateCalc(parseInt(this.value)); e.preventDefault(); }
});
</script>`;

const FAQ_JS_CODE = `function shiftToggleFaq(btn){var item=btn.parentElement;var isOpen=item.classList.contains('open');document.querySelectorAll('.shift-faq-item').forEach(function(i){i.classList.remove('open');});if(!isOpen)item.classList.add('open');}`;

const SCREENSHOT_NOTE = `<!-- ══════════════════════════════════════════════
  SCREENSHOT EXPORT — React-Only Pages
  ══════════════════════════════════════════════
  
  The following pages use recharts, framer-motion animations,
  and live React state. Static HTML cannot replicate them.
  Use these URLs for screenshots / screen recording instead:
  
  /NeuralOSDashboard     → Live KPI dashboard (recharts, counters)
  /AttractHome           → AttractROICalculator (interactive recharts)
  /ROICalculator         → Full interactive ROI calculator
  /LeakDetector          → CRM analyzer with modals
  /CampaignInsights      → Attribution dashboard (recharts)
  /CustomerPortal        → Authenticated billing portal
  /Onboarding            → Multi-step onboarding wizard
  
  Screenshot method:
  1. Open page in Chrome
  2. DevTools → Command+P → "Capture full size screenshot"
  3. Or use: puppeteer / playwright for automated screenshots
  
  Elementor/WP alternative:
  - Embed an <iframe> pointing to the live page URL
  - Or use a screenshot service (screenshotone.com, htmlcsstoimage.com)
  ══════════════════════════════════════════════ -->`;

// Build full site HTML
const buildFullSite = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="ShiFt NeuralOS - AI Revenue Operating System for roofing contractors">
  <title>ShiFt NeuralOS - AI Revenue Operating System</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
${GLOBAL_CSS}
${NAV_CSS}
${FOOTER_CSS}
.brand-section{padding:80px 24px;}.brand-inner{max-width:1140px;margin:0 auto;}
@media(min-width:768px){.brand-section{padding:112px 32px;}}
.brand-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;transition:all .3s ease;}
.brand-card:hover{transform:translateY(-4px);border-color:rgba(245,74,72,0.15);}
@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}
.shift-faq-item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;margin-bottom:16px;}
.shift-faq-btn{width:100%;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;background:none;border:none;cursor:pointer;text-align:left;color:white;}
.shift-faq-question{font-family:'Montserrat Alternates',sans-serif;font-size:1.125rem;font-weight:600;color:white;}
.shift-faq-chevron{width:20px;height:20px;flex-shrink:0;color:rgba(255,255,255,.4);transition:transform .3s ease;}
.shift-faq-item.open .shift-faq-chevron{transform:rotate(180deg);color:#F54A48;}
.shift-faq-answer{display:none;padding:0 24px 20px;font-size:.9375rem;color:rgba(255,255,255,.6);line-height:1.7;}
.shift-faq-item.open .shift-faq-answer{display:block;}
  </style>
</head>
<body>
${NEURALAOS_NAV_HTML}
${BRAND_HOME_HTML}
${FOOTER_HTML}
<script>${NAV_JS}
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

  const handleFullSiteExport = async () => {
    setDownloading(true);

    // Single HTML
    const singleHtml = buildFullSite();
    const singleBlob = new Blob([singleHtml], { type: "text/html" });
    const singleUrl = URL.createObjectURL(singleBlob);
    const singleA = document.createElement("a");
    singleA.href = singleUrl;
    singleA.download = "ShiFtNeuralOS-BrandHome-v3.html";
    singleA.click();
    URL.revokeObjectURL(singleUrl);

    // ZIP with all pages
    const zip = new JSZip();
    zip.file("assets/global.css", GLOBAL_CSS);
    zip.file("assets/nav.css", NAV_CSS);
    zip.file("assets/footer.css", FOOTER_CSS);
    zip.file("assets/nav.js", NAV_JS);
    zip.file("assets/faq.js", FAQ_JS_CODE);
    zip.file("index.html", singleHtml);
    zip.file("brand-home.html", singleHtml);
    zip.file("convert/index.html", `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>ShiFt Convert</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>${GLOBAL_CSS}${NAV_CSS}${FOOTER_CSS}.cv-section{padding:80px 24px;}.cv-inner{max-width:1140px;margin:0 auto;}@media(min-width:768px){.cv-section{padding:112px 32px;}}.cv-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;transition:all .3s ease;}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}.shift-faq-item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;margin-bottom:16px;}.shift-faq-btn{width:100%;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;background:none;border:none;cursor:pointer;text-align:left;color:white;}.shift-faq-question{font-family:'Montserrat Alternates',sans-serif;font-size:1.125rem;font-weight:600;color:white;}.shift-faq-chevron{width:20px;height:20px;flex-shrink:0;color:rgba(255,255,255,.4);transition:transform .3s ease;}.shift-faq-item.open .shift-faq-chevron{transform:rotate(180deg);color:#F54A48;}.shift-faq-answer{display:none;padding:0 24px 20px;font-size:.9375rem;color:rgba(255,255,255,.6);line-height:1.7;}.shift-faq-item.open .shift-faq-answer{display:block;}</style></head><body>${CONVERT_NAV_HTML}${CONVERT_HOME_HTML}${FOOTER_HTML}<script>${NAV_JS}${FAQ_JS_CODE}</script></body></html>`);
    zip.file("attract/index.html", `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>ShiFt Attract</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>${GLOBAL_CSS}${NAV_CSS}${FOOTER_CSS}.at-section{padding:80px 24px;}.at-inner{max-width:1140px;margin:0 auto;}@media(min-width:768px){.at-section{padding:112px 32px;}}.at-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;transition:all .3s ease;}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}.shift-faq-item{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;margin-bottom:16px;}.shift-faq-btn{width:100%;padding:20px 24px;display:flex;align-items:center;justify-content:space-between;background:none;border:none;cursor:pointer;text-align:left;color:white;}.shift-faq-question{font-family:'Montserrat Alternates',sans-serif;font-size:1.125rem;font-weight:600;color:white;}.shift-faq-chevron{width:20px;height:20px;flex-shrink:0;color:rgba(255,255,255,.4);transition:transform .3s ease;}.shift-faq-item.open .shift-faq-chevron{transform:rotate(180deg);color:#FA982F;}.shift-faq-answer{display:none;padding:0 24px 20px;font-size:.9375rem;color:rgba(255,255,255,.6);line-height:1.7;}.shift-faq-item.open .shift-faq-answer{display:block;}</style></head><body>${ATTRACT_NAV_HTML}${ATTRACT_HOME_HTML}${FOOTER_HTML}<script>${NAV_JS}${FAQ_JS_CODE}</script></body></html>`);

    zip.file("calculator/index.html", `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>ShiFt — Find Your Gap</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>${GLOBAL_CSS}${NAV_CSS}${FOOTER_CSS}</style></head><body>${NEURALAOS_NAV_HTML}${CALCULATOR_HTML}${FOOTER_HTML}<script>${NAV_JS}</script></body></html>`);
  zip.file("SCREENSHOT-ONLY-PAGES.txt", SCREENSHOT_NOTE.replace(/<!--/g, "").replace(/-->/g, "").replace(/=+/g, "==="));
    zip.file("README.txt", `ShiFt NeuralOS — Full Site Export v3
=====================================
Generated: ${new Date().toISOString()}
Source: Extracted directly from live React component files

UPDATED IN THIS VERSION (v3):
  - NeuralOS Navbar: Platform / Roofing / Demo / Revenue Engine Plans links
  - NeuralOS Navbar: "Find Your Gap" → /Calculator (was /RevenueEnginePlans)
  - BrandHero: "Find Your Gap" CTA → /Calculator
  - Calculator: NEW PAGE — SHIFT-CALC-001 v1.0 interactive revenue loss calculator
    Slider $50K–$500K, 3 output cards, full JS, keyboard accessibility, "Start Closing Your Gap" CTA

FILES:
  index.html / brand-home.html  → NeuralOS Brand Home (fully assembled)
  convert/index.html            → ShiFt Convert Home (all 8 sections)
  attract/index.html            → ShiFt Attract Home (all sections)
  calculator/index.html         → Revenue Loss Calculator (interactive, SHIFT-CALC-001 v1.0)
  assets/global.css             → Global CSS
  assets/nav.css                → Navbar CSS
  assets/footer.css             → Footer CSS
  assets/nav.js                 → Navbar JS
  assets/faq.js                 → FAQ accordion JS
  SCREENSHOT-ONLY-PAGES.txt     → Pages that require React (recharts/interactive)

NOTES:
  - RevenueEnginePlans: See /ExportRevenueEnginePlans for full HTML
  - Interactive pages (NeuralOSDashboard, ROICalculator, LeakDetector,
    CampaignInsights, CustomerPortal) require React — use screenshots
`);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const zipA = document.createElement("a");
    zipA.href = zipUrl;
    zipA.download = "ShiFtNeuralOS-FullSite-v3.zip";
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
      sections: [
        { id: "global-css", title: "Global CSS + Fonts", badge: "Base", items: [{ label: "CSS", code: GLOBAL_CSS }] },
        { id: "nav-css-js", title: "Navbar CSS + JS", badge: "All navbars", items: [{ label: "CSS", code: NAV_CSS }, { label: "JS", code: NAV_JS }] },
        { id: "footer", title: "Footer HTML + CSS", items: [{ label: "HTML", code: FOOTER_HTML }, { label: "CSS", code: FOOTER_CSS }] },
        { id: "faq-js", title: "FAQ Accordion JS", items: [{ label: "JS", code: FAQ_JS_CODE }] },
      ],
    },
    {
      title: "Navigation Bars",
      color: "#63B3ED",
      dotColor: "#63B3ED",
      badge: "3 variants — NeuralOS · Convert · Attract",
      sections: [
        { id: "neuralaos-nav", title: "NeuralOS Nav (Brand, Plans, Dashboard)", items: [{ label: "HTML", code: NEURALAOS_NAV_HTML }] },
        { id: "convert-nav", title: "Convert Nav (Home, How It Works, Revenue Leaks, Results)", items: [{ label: "HTML", code: CONVERT_NAV_HTML }] },
        { id: "attract-nav", title: "Attract Nav (Home, How It Works, Empty Pipeline, Results)", items: [{ label: "HTML", code: ATTRACT_NAV_HTML }] },
      ],
    },
    {
      title: "ShiFt NeuralOS Brand Home",
      color: "#FFD700",
      dotColor: "#FFD700",
      badge: "CURRENT — extracted from BrandHero + ProblemSelector + TwoProducts + SocialProof + CTA",
      sections: [
        { id: "brand-home-full", title: "Brand Home — Full Page HTML (All Sections)", items: [{ label: "HTML", code: BRAND_HOME_HTML }] },
      ],
    },
    {
      title: "ShiFt Convert Home",
      color: "#F54A48",
      dotColor: "#F54A48",
      badge: "CURRENT — HeroNew + ProblemCards + ComparisonTable + Mechanism + ProofSection + ConversionPath + FAQ + CTA",
      sections: [
        { id: "convert-home-full", title: "Convert Home — Full Page HTML (All 8 Sections)", items: [{ label: "HTML", code: CONVERT_HOME_HTML }] },
      ],
    },
    {
      title: "ShiFt Attract Home",
      color: "#FA982F",
      dotColor: "#FA982F",
      badge: "CURRENT — AttractHero + EmptyPipelineProblems + AttractSolution + ROI + SocialProof + FAQ + CTA",
      sections: [
        { id: "attract-home-full", title: "Attract Home — Full Page HTML (All Sections)", items: [{ label: "HTML", code: ATTRACT_HOME_HTML }] },
      ],
    },
    {
      title: "Calculator — Find Your Gap",
      color: "#F54A48",
      dotColor: "#FA982F",
      badge: "CURRENT — SHIFT-CALC-001 v1.0 · Interactive slider + 3 output cards",
      sections: [
        {
          id: "calculator-full",
          title: "Calculator — Full Interactive HTML (slider, formulas, CTA)",
          items: [{ label: "HTML + JS", code: CALCULATOR_HTML }],
        },
      ],
    },
    {
      title: "Revenue Engine Plans",
      color: "#F54A48",
      dotColor: "#FA982F",
      exportPagePath: "ExportRevenueEnginePlans",
      badge: "Self-contained — use ExportRevenueEnginePlans for full HTML",
      sections: [
        { id: "rev-plans-info", title: "Revenue Engine Plans (Activate / Amplify / Dominate)", exportPagePath: "ExportRevenueEnginePlans", items: [{ label: "INFO", code: `<!-- Route: /RevenueEnginePlans
   This page is SELF-CONTAINED (no external component dependencies).
   Full HTML export available at /ExportRevenueEnginePlans
   
   Sections:
   - Hero: "Turn Marketing Into Revenue" + Stats bar (30s / 3-5x / 24/7)
   - Problem: 60% Lost Leads / 74% Burned Tools / $24K+ Missed Revenue
   - System: 4-step process (Instant Response → Qualify → Book → Track)
   - Proof: Texas Case Study $72K / 30 days + ROI Math per package
   - Revenue Leak Calculator (3-card slider: Missed Calls / Garbage Leads / Total)
   - Packages: ACTIVATE $1,997/mo · AMPLIFY $3,497/mo · DOMINATE $8,997/mo
   - Feature Comparison Table (30 features across 3 tiers)
   - 90-Day Revenue Floor Guarantee
   - Onboarding CTA (for existing clients)
   - Final CTA: "Stop Losing Leads. Start Booking Jobs."
   
   Copy the full page export at /ExportRevenueEnginePlans -->` }] },
      ],
    },
    // ── CONVERT NAV PAGES ──
    {
      title: "Convert: How It Works (/HowItWorks)",
      color: "#F54A48", dotColor: "#F54A48",
      badge: "Convert Nav · 3 stages: Capture → Qualify → Book",
      sections: [{ id: "how-it-works-full", title: "How It Works — Full Page HTML", items: [{ label: "HTML", code: HOW_IT_WORKS_HTML }] }],
    },
    {
      title: "Convert: Revenue Leaks (/RevenueLeaks)",
      color: "#F54A48", dotColor: "#FA982F",
      badge: "Convert Nav · 3 leaks: Missed Calls + Junk Leads + Invisible Buyers",
      sections: [{ id: "revenue-leaks-full", title: "Revenue Leaks — Full Page HTML", items: [{ label: "HTML", code: REVENUE_LEAKS_HTML }] }],
    },
    {
      title: "Convert: Results — Titan Case Study (/Results)",
      color: "#F54A48", dotColor: "#48BB78",
      badge: "Convert Nav · $750K → $7M · Jake Torres · Dallas TX",
      sections: [{ id: "results-full", title: "Results / Case Study — Full Page HTML", items: [{ label: "HTML", code: RESULTS_HTML }] }],
    },
    // ── ATTRACT NAV PAGES ──
    {
      title: "Attract: How It Works (/AttractHowItWorks)",
      color: "#FA982F", dotColor: "#FA982F",
      badge: "Attract Nav · 30-Day Pipeline Build Timeline",
      sections: [{ id: "attract-how-it-works-full", title: "Attract How It Works — Full Page HTML", items: [{ label: "HTML", code: ATTRACT_HOW_IT_WORKS_HTML }] }],
    },
    {
      title: "Attract: Empty Pipeline (/AttractEmptyPipeline)",
      color: "#FA982F", dotColor: "#FA982F",
      badge: "Attract Nav · 3 Problems: Inconsistent Leads + Bad Marketing + Referral Dependency",
      sections: [{ id: "attract-empty-pipeline-full", title: "Attract Empty Pipeline — Full Page HTML", items: [{ label: "HTML", code: ATTRACT_EMPTY_PIPELINE_HTML }] }],
    },
    {
      title: "Attract: Results (/AttractResults)",
      color: "#FA982F", dotColor: "#FA982F",
      badge: "Attract Nav · 147% lead increase · $47 avg cost per lead · 4.2× ROI",
      sections: [{ id: "attract-results-full", title: "Attract Results — Full Page HTML", items: [{ label: "HTML", code: ATTRACT_RESULTS_HTML }] }],
    },
    // ── NEURALAOS NAV PAGES ──
    {
      title: "Platform (/Platform)",
      color: "#FFD700", dotColor: "#FFD700",
      badge: "NeuralOS Nav · Neural Stack 4 layers + capabilities",
      sections: [{ id: "platform-full", title: "Platform — Full Page HTML", items: [{ label: "HTML", code: PLATFORM_HTML }] }],
    },
    {
      title: "Roofing (/Roofing)",
      color: "#FFD700", dotColor: "#FA982F",
      badge: "NeuralOS Nav · Residential + Commercial + Storm + Multi-Location",
      sections: [{ id: "roofing-full", title: "Roofing — Full Page HTML", items: [{ label: "HTML", code: ROOFING_HTML }] }],
    },
    // ── FOOTER PAGES: PRODUCT ──
    {
      title: "Features (/Features)",
      color: "#48BB78", dotColor: "#48BB78",
      badge: "Footer: Product · 8 platform features with stats",
      sections: [{ id: "features-full", title: "Features — Full Page HTML", items: [{ label: "HTML", code: FEATURES_HTML }] }],
    },
    {
      title: "Integrations (/Integrations)",
      color: "#48BB78", dotColor: "#63B3ED",
      badge: "Footer: Product · CRM + Calendar + Comms + Ads + Workflow",
      sections: [{ id: "integrations-full", title: "Integrations — Full Page HTML", items: [{ label: "HTML", code: INTEGRATIONS_HTML }] }],
    },
    {
      title: "Case Studies (/CaseStudies)",
      color: "#48BB78", dotColor: "#48BB78",
      badge: "Footer: Product · Interactive filters + recharts (static card version included)",
      sections: [{ id: "case-studies-full", title: "Case Studies — Full Page HTML (Static version, 3 cards)", items: [{ label: "HTML", code: CASE_STUDIES_HTML }] }],
    },
    // ── FOOTER PAGES: COMPANY ──
    {
      title: "About (/About)",
      color: "#9DA3B4", dotColor: "#9DA3B4",
      badge: "Footer: Company · Mission + 3 pillars + 4 values",
      sections: [{ id: "about-full", title: "About — Full Page HTML", items: [{ label: "HTML", code: ABOUT_HTML }] }],
    },
    {
      title: "Careers (/Careers)",
      color: "#9DA3B4", dotColor: "#9DA3B4",
      badge: "Footer: Company · 4 values + 4 open positions",
      sections: [{ id: "careers-full", title: "Careers — Full Page HTML", items: [{ label: "HTML", code: CAREERS_HTML }] }],
    },
    {
      title: "Blog (/Blog)",
      color: "#9DA3B4", dotColor: "#FA982F",
      badge: "Footer: Company · Featured post + 6 article cards (static version)",
      sections: [{ id: "blog-full", title: "Blog — Full Page HTML (Static version, no React filter)", items: [{ label: "HTML", code: BLOG_HTML }] }],
    },
    {
      title: "Contact (/Contact)",
      color: "#9DA3B4", dotColor: "#F54A48",
      badge: "Footer: Company · Form + contact info + address",
      sections: [{ id: "contact-full", title: "Contact — Full Page HTML", items: [{ label: "HTML", code: CONTACT_HTML }] }],
    },
    {
      title: "Resources (/Resources)",
      color: "#9DA3B4", dotColor: "#63B3ED",
      badge: "NeuralOS Nav · 4 resource types + 4 featured articles",
      sections: [{ id: "resources-full", title: "Resources — Full Page HTML", items: [{ label: "HTML", code: RESOURCES_HTML }] }],
    },
    // ── FOOTER PAGES: LEGAL ──
    {
      title: "Privacy Policy (/PrivacyPolicy)",
      color: "#6B7C93", dotColor: "#F54A48",
      badge: "Footer: Legal · Effective March 15, 2026 · 13 sections",
      sections: [{ id: "privacy-policy-full", title: "Privacy Policy — Full Page HTML (summary + key sections)", items: [{ label: "HTML", code: PRIVACY_POLICY_HTML }] }],
    },
    {
      title: "Terms of Service (/TermsOfService)",
      color: "#6B7C93", dotColor: "#F54A48",
      badge: "Footer: Legal · Effective March 15, 2026 · Cherokee County GA · 20 sections",
      sections: [{ id: "tos-full", title: "Terms of Service — Full Page HTML (summary + key terms)", items: [{ label: "HTML", code: TERMS_OF_SERVICE_HTML }] }],
    },
    {
      title: "Cookie Policy (/CookiePolicy)",
      color: "#6B7C93", dotColor: "#F54A48",
      badge: "Footer: Legal · Effective March 15, 2026 · 4 cookie categories",
      sections: [{ id: "cookie-policy-full", title: "Cookie Policy — Full Page HTML", items: [{ label: "HTML", code: COOKIE_POLICY_HTML }] }],
    },
    {
      title: "React-Only Pages (Screenshot Required)",
      color: "#6B7C93",
      dotColor: "#9DA3B4",
      badge: "recharts · framer-motion · live state — cannot export as static HTML",
      sections: [
        { id: "screenshot-pages", title: "Screenshot-Only Pages (Interactive/Charts)", items: [{ label: "SCREENSHOT GUIDE", code: SCREENSHOT_NOTE }] },
      ],
    },
    {
      title: "Complete URL Map — All Routes",
      color: "#6B7C93",
      dotColor: "#9DA3B4",
      sections: [
        { id: "url-map", title: "Full Site URL Reference (30+ Routes)", items: [{ label: "URL MAP", code: `<!-- ══ COMPLETE SITE ROUTE MAP ══

── BRAND SITE (NeuralOS) ──────────────────────
/BrandHome       → NeuralOS home (Hero + ProblemSelector 4-cards + TwoProducts + SocialProof + CTA)
/Platform        → Platform overview
/Roofing         → Industry landing
/Resources       → Resources hub
/About           → Company mission
/Careers         → Open positions
/Contact         → Contact form
/Features        → AI features breakdown
/Integrations    → Supported integrations
/CaseStudies     → Case studies
/Blog            → Revenue intelligence blog

── REVENUE ENGINE PLANS ──────────────────────
/RevenueEnginePlans  → Pricing (Activate / Amplify / Dominate)

── SHIFTCONVERT PRODUCT ──────────────────────
/Home            → Convert home (HeroNew + ProblemCards + ComparisonTable + Mechanism + ProofSection + ConversionPath + FAQ + CTA)
/HowItWorks      → Convert: How it works
/RevenueLeaks    → Convert: Revenue leak breakdown
/Results         → Convert: Results & case study
/Book            → Convert: Book a call

── SHIFTATTRACT PRODUCT ──────────────────────
/AttractHome     → Attract home (AttractHero + EmptyPipelineProblems + AttractSolution + AttractROICalculator + SocialProof + FAQ + CTA)
/AttractHowItWorks    → Attract: How it works
/AttractEmptyPipeline → Attract: Empty pipeline
/AttractResults       → Attract: Results
/AttractPricing       → Attract: Pricing
/AttractBook          → Attract: Book pipeline audit
/CampaignInsights     → Attribution dashboard (Google/Meta/Organic) [React-only]

── CALCULATOR (Static HTML exportable) ───────
/Calculator        → Revenue Loss Calculator (SHIFT-CALC-001 v1.0)
                     Slider $50K–$500K, 3 output cards, live JS, CTA

── INTERACTIVE TOOLS (React-only) ───────────
/NeuralOSDashboard → Dashboard preview [React-only / recharts]
/ROICalculator     → Attract + Convert ROI calculator [React-only]
/LeakDetector      → CRM leak detection tool [React-only]
/CampaignInsights  → Campaign attribution ROI [React-only]

── AUTHENTICATED ─────────────────────────────
/CustomerPortal  → Customer billing + revenue portal [React-only]
/Onboarding      → Multi-step setup wizard [React-only]

── DOCUMENTATION ─────────────────────────────
/DocumentsDownload → PRD & FTRD markdown downloads
/MasterExport      → This page

── LEGAL ─────────────────────────────────────
/PrivacyPolicy   → Privacy policy (effective March 15, 2026)
/TermsOfService  → Terms of service
/CookiePolicy    → Cookie policy

── EXPORT PAGES (Dev Tool) ───────────────────
/MasterExport              → This page
/ExportBrandNeuralOS       → Brand sections
/ExportConvert             → Convert sections
/ExportAttract             → Attract sections
/ExportRevenueEnginePlans  → Plans full HTML
/ExportHowItWorks          → How It Works
/ExportRevenueLeaks        → Revenue Leaks
/ExportResults             → Results / Case Study
/ExportAttractEmptyPipeline → Empty Pipeline
/ExportDashboardPreview    → Dashboard Preview
/ExportBookACall           → Book a Call -->` }] },
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
            Master Export Hub · v3 — Current Source
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Site Export Center
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
            HTML extracted directly from live React component files. Always current.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs"
            style={{ background: "rgba(72,187,120,0.1)", border: "1px solid rgba(72,187,120,0.3)", color: "#48BB78" }}>
            ✓ BrandHome · ConvertHome · AttractHome all rebuilt from source components
          </div>
        </div>

        {/* Interactive pages callout */}
        <div className="rounded-2xl p-6 mb-8" style={{ background: "rgba(99,179,237,0.06)", border: "1px solid rgba(99,179,237,0.2)" }}>
          <div className="flex items-start gap-3">
            <Camera className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#63B3ED" }} />
            <div>
              <h3 className="font-display text-sm font-bold text-white mb-2">React-Only Pages → Use Screenshots</h3>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                NeuralOSDashboard, ROICalculator, LeakDetector, CampaignInsights, CustomerPortal, AttractROICalculator use recharts + live state — cannot be exported as static HTML.
              </p>
              <div className="flex flex-wrap gap-2">
                {["/NeuralOSDashboard", "/ROICalculator", "/LeakDetector", "/CampaignInsights", "/CustomerPortal", "/AttractHome#roi"].map(url => (
                  <a key={url} href={url} target="_blank" rel="noreferrer"
                    className="font-mono text-xs px-2 py-1 rounded-md"
                    style={{ background: "rgba(99,179,237,0.1)", color: "#63B3ED", border: "1px solid rgba(99,179,237,0.2)" }}>
                    {url}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Site Export CTA */}
        <div className="rounded-2xl p-8 mb-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.08))", border: "1px solid rgba(245,74,72,0.25)" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%) translateY(-50%)", width: 500, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,74,72,0.15), transparent 70%)", pointerEvents: "none" }} />
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Layers className="w-6 h-6" style={{ color: "#FA982F" }} />
              <span className="font-display text-xl font-bold text-white">Export Entire Site (v3 — Current)</span>
            </div>
            <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Downloads <strong className="text-white">Brand Home HTML</strong> + <strong className="text-white">ZIP</strong> with brand-home, convert/index, attract/index, <strong className="text-white">calculator/index</strong>, shared assets, and README.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleFullSiteExport}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", boxShadow: "0 4px 24px rgba(245,74,72,0.35)" }}
              >
                <Download className="w-4 h-4" />
                {downloading ? "Building ZIP..." : "Download v3 HTML + ZIP"}
              </button>
              <button
                onClick={() => handleCopy(buildFullSite(), "full-site")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider transition-all"
                style={{ background: copied === "full-site" ? "rgba(72,187,120,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${copied === "full-site" ? "rgba(72,187,120,0.3)" : "rgba(255,255,255,0.15)"}`, color: copied === "full-site" ? "#48BB78" : "white" }}
              >
                {copied === "full-site" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied === "full-site" ? "Copied!" : "Copy Brand Home HTML"}
              </button>
            </div>
          </div>
        </div>

        {/* Elementor Instructions */}
        <div className="rounded-2xl p-6 mb-10" style={{ background: "rgba(72,187,120,0.06)", border: "1px solid rgba(72,187,120,0.2)" }}>
          <h2 className="font-display text-base font-bold text-white mb-3">Elementor / WordPress Import Guide</h2>
          <ol className="space-y-1.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <li><strong className="text-white">1.</strong> Add <strong className="text-white">Global CSS</strong> + <strong className="text-white">Nav CSS</strong> + <strong className="text-white">Footer CSS</strong> → <em>Appearance → Customize → Additional CSS</em></li>
            <li><strong className="text-white">2.</strong> For each section: insert <strong className="text-white">HTML widget</strong> in Elementor → paste section HTML</li>
            <li><strong className="text-white">3.</strong> Paste Nav JS + FAQ JS in <em>Theme Editor → footer.php</em> before <code className="text-white">&lt;/body&gt;</code></li>
            <li><strong className="text-white">4.</strong> For recharts/interactive pages: use <strong className="text-white">&lt;iframe&gt;</strong> pointing to live page or embed screenshots</li>
            <li><strong className="text-white">5.</strong> Or use the <strong className="text-white">Download</strong> button above for standalone HTML files</li>
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

        <div className="mt-10 p-5 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            ShiFt NeuralOS™ Master Export v3 · HTML extracted from live React source files · Last updated March 2026
          </p>
        </div>
      </div>
    </div>
  );
}