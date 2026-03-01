import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

export default function ExportPackage() {
  const [expandedSections, setExpandedSections] = useState({});
  const [copiedCode, setCopiedCode] = useState(null);

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const documentation = {
    "Global Styles": {
      css: `/* === GLOBAL STYLES === */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap');

:root {
  --shift-navy-deep: #070820;
  --shift-navy-core: #0D0F33;
  --shift-coral: #F54A48;
  --shift-orange: #FA982F;
  --shift-glass: rgba(255,255,255,0.04);
  --shift-glass-border: rgba(255,255,255,0.06);
  --shift-gradient: linear-gradient(135deg, #F54A48, #FA982F);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--shift-navy-deep);
  color: #fff;
  line-height: 1.6;
}

/* Typography Classes */
.font-display {
  font-family: 'Montserrat Alternates', sans-serif;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

.font-body {
  font-family: 'DM Sans', sans-serif;
}

/* Gradient Text */
.shift-gradient-text {
  background: var(--shift-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Selection */
::selection {
  background: rgba(245,74,72,0.3);
  color: white;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--shift-navy-deep);
}

::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.2);
}`
    },
    
    "Navigation Bar (72px Height)": {
      html: `<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <!-- Logo -->
    <a href="/" class="nav-logo">
      <span class="font-display" style="font-size: 1.5rem; font-weight: 700;">
        ShiFt<span class="shift-gradient-text">.</span>
      </span>
    </a>

    <!-- Desktop Navigation -->
    <div class="nav-links">
      <a href="/how-it-works.html" class="nav-link">How It Works</a>
      <a href="/revenue-leaks.html" class="nav-link">Revenue Leaks</a>
      <a href="/results.html" class="nav-link">Results</a>
      <a href="/pricing.html" class="nav-link">Pricing</a>
    </div>

    <!-- Product Pills -->
    <div class="nav-products">
      <div class="nav-products-pill">
        <a href="https://attract.shiftnow.io" class="nav-product-link nav-product-attract">
          <span class="nav-product-dot"></span>
          Attract
        </a>
        <a href="https://go.shiftnow.io" class="nav-product-link nav-product-convert nav-product-active">
          <span class="nav-product-dot"></span>
          Convert
        </a>
      </div>
    </div>

    <!-- CTA Button -->
    <a href="#calculator" class="btn-primary btn-nav">
      Find Your Gap
    </a>

    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu">
    <a href="/how-it-works.html" class="mobile-menu-link">How It Works</a>
    <a href="/revenue-leaks.html" class="mobile-menu-link">Revenue Leaks</a>
    <a href="/results.html" class="mobile-menu-link">Results</a>
    <a href="/pricing.html" class="mobile-menu-link">Pricing</a>
    <a href="#calculator" class="btn-primary">Find Your Gap</a>
  </div>
</nav>`,
      css: `.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 100;
  background: rgba(7,8,32,0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;
}

.nav.scrolled {
  background: rgba(7,8,32,0.98);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

.nav-logo {
  text-decoration: none;
  color: white;
  transition: opacity 0.3s ease;
}

.nav-logo:hover {
  opacity: 0.8;
}

.nav-links {
  display: none;
  gap: 32px;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #F54A48;
}

/* Product Pills */
.nav-products {
  display: none;
}

@media (min-width: 1024px) {
  .nav-products {
    display: block;
  }
}

.nav-products-pill {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 4px;
  gap: 4px;
}

.nav-product-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #9DA3B4;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;
}

.nav-product-link:hover {
  background: rgba(255,255,255,0.08);
  color: #F8F9FC;
  transform: translateY(-1px);
}

.nav-product-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6B7280;
  transition: all 0.3s ease;
}

.nav-product-attract:hover .nav-product-dot {
  background: #FA982F;
  box-shadow: 0 0 8px rgba(250,152,47,0.5);
}

.nav-product-convert:hover .nav-product-dot {
  background: #F54A48;
  box-shadow: 0 0 8px rgba(245,74,72,0.5);
}

.nav-product-active {
  background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12));
  border-color: rgba(245,74,72,0.3);
  color: #F8F9FC;
}

.nav-product-active .nav-product-dot {
  background: #F54A48;
  box-shadow: 0 0 8px rgba(245,74,72,0.5);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

@media (min-width: 768px) {
  .mobile-menu-toggle {
    display: none;
  }
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: rgba(7,8,32,0.98);
  border-top: 1px solid rgba(255,255,255,0.08);
}

.mobile-menu.active {
  display: flex;
}

.mobile-menu-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: white;
  text-decoration: none;
  padding: 12px;
  transition: color 0.3s ease;
}

.mobile-menu-link:hover {
  color: #F54A48;
}`,
      js: `// Navigation Scroll Effect
const nav = document.getElementById('main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

// Close mobile menu on link click
const mobileLinks = document.querySelectorAll('.mobile-menu-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});`
    },

    "Primary CTA Button (Gradient)": {
      html: `<a href="#calculator" class="btn-primary">
  Calculate Revenue Leak
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</a>`,
      css: `.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #F54A48, #FA982F);
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(245,74,72,0.3), 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(245,74,72,0.4);
}

.btn-primary:active {
  transform: translateY(-1px);
}

/* Size Variants */
.btn-sm {
  padding: 10px 20px;
  font-size: 0.75rem;
}

.btn-lg {
  padding: 20px 40px;
  font-size: 1rem;
}

.btn-nav {
  padding: 12px 24px;
  font-size: 0.75rem;
}`
    },

    "Secondary Button (Outline)": {
      html: `<a href="#demo" class="btn-outline">
  Watch Demo
</a>`,
      css: `.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 32px;
  background: transparent;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.15);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(245,74,72,0.5);
  transform: translateY(-2px);
}`
    },

    "Glass Card": {
      html: `<div class="glass-card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>`,
      css: `.glass-card {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255,255,255,0.06);
  transform: translateY(-4px);
  border-color: rgba(255,255,255,0.12);
}

/* Card with colored accent border */
.glass-card-accent {
  position: relative;
  overflow: hidden;
}

.glass-card-accent::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #F54A48, #FA982F);
  border-radius: 4px 0 0 4px;
}`
    },

    "Section Wrapper": {
      html: `<section class="section" id="unique-section-id" aria-label="Section description">
  <div class="section-inner">
    <!-- Section content here -->
  </div>
</section>`,
      css: `.section {
  position: relative;
  width: 100%;
  padding: 80px 24px;
}

@media (min-width: 768px) {
  .section {
    padding: 112px 32px;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 128px 32px;
  }
}

.section-inner {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
}`
    },

    "Hero Section (ShiFt Convert - go.shiftnow.io)": {
      html: `<section class="hero" id="hero" aria-label="Hero section">
    <div class="hero-bg"></div>

    <div class="section-inner text-center">
    <!-- Badge -->
    <div class="hero-badge">
    <span class="pulse-dot"></span>
    <span class="font-mono">Calculating Live Revenue Leaks for 847+ Roofing Companies</span>
    </div>

    <!-- Headline -->
    <h1 class="hero-headline font-display">
    <span class="shift-gradient-text">Three Revenue Leaks</span><br/>
    Are Costing You $35K-$100K+ Every Month
    </h1>

    <!-- Subheadline -->
    <p class="hero-subheadline">
    Missed calls. Junk leads. Invisible buyers. Your competitors are capturing these opportunities
    while you sleep. See exactly how much they're costing <strong style="color: #F54A48;">YOUR</strong> business.
    </p>

    <!-- CTA (single button, links to calculator) -->
    <div class="hero-ctas" style="justify-content: center;">
    <a href="https://calc.shiftnow.io" class="btn-primary btn-lg">
      Calculate My Revenue Leak
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
    </div>

    <!-- Micro-commitment -->
    <p class="hero-micro font-mono">
    60 seconds. No credit card. Just your real number.
    </p>
    </div>
    </section>`,
      css: `.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(ellipse, rgba(245,74,72,0.15), transparent 70%);
  pointer-events: none;
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(245,74,72,0.08);
  border: 1px solid rgba(245,74,72,0.3);
  border-radius: 999px;
  margin-bottom: 32px;
  animation: fade-in-up 0.6s ease-out;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #F54A48;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.hero-headline {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 24px;
  animation: fade-in-up 0.6s ease-out 0.2s both;
}

@media (min-width: 768px) {
  .hero-headline {
    font-size: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-headline {
    font-size: 4.5rem;
  }
}

.hero-subheadline {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.7);
  max-width: 700px;
  margin-bottom: 48px;
  animation: fade-in-up 0.6s ease-out 0.4s both;
}

@media (min-width: 768px) {
  .hero-subheadline {
    font-size: 1.25rem;
  }
}

.hero-ctas {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  animation: fade-in-up 0.6s ease-out 0.6s both;
}

@media (min-width: 640px) {
  .hero-ctas {
    flex-direction: row;
  }
}

.hero-micro {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: fade-in-up 0.6s ease-out 0.8s both;
}`
    },

    "Footer": {
      html: `<footer class="footer">
  <div class="section-inner">
    <div class="footer-grid">
      <!-- Brand Column -->
      <div class="footer-col footer-brand">
        <div class="footer-logo font-display">
          ShiFt<span class="shift-gradient-text">.</span>
        </div>
        <p class="footer-tagline">
          AI Revenue Operating System for Roofing Contractors
        </p>
        <div class="footer-social">
          <a href="#" class="footer-social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.46 6c-.85.38-1.78.64-2.75.76a4.8 4.8 0 0 0 2.1-2.66c-.93.55-1.95.95-3.05 1.17a4.77 4.77 0 0 0-8.13 4.35A13.54 13.54 0 0 1 3.8 4.62a4.77 4.77 0 0 0 1.48 6.37 4.75 4.75 0 0 1-2.16-.6v.06c0 2.3 1.64 4.23 3.82 4.67a4.78 4.78 0 0 1-2.16.08 4.77 4.77 0 0 0 4.46 3.31A9.57 9.57 0 0 1 2 19.54a13.5 13.5 0 0 0 7.29 2.14c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.61a9.68 9.68 0 0 0 2.38-2.47z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Products Column -->
      <div class="footer-col">
        <h4 class="footer-heading font-mono">Products</h4>
        <ul class="footer-links">
          <li><a href="https://go.shiftnow.io">ShiFt Convert</a></li>
          <li><a href="https://attract.shiftnow.io">ShiFt Attract</a></li>
          <li><a href="/platform.html">Platform</a></li>
          <li><a href="/pricing.html">Pricing</a></li>
        </ul>
      </div>

      <!-- Company Column -->
      <div class="footer-col">
        <h4 class="footer-heading font-mono">Company</h4>
        <ul class="footer-links">
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/careers.html">Careers</a></li>
          <li><a href="/resources.html">Resources</a></li>
        </ul>
      </div>

      <!-- Legal Column -->
      <div class="footer-col">
        <h4 class="footer-heading font-mono">Legal</h4>
        <ul class="footer-links">
          <li><a href="/privacy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms of Service</a></li>
          <li><a href="/security.html">Security</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">
        © 2026 eWorkForce Technologies Inc. All rights reserved.
      </p>
      <p class="footer-tagline-sm font-mono">
        Built with AI · Powered by Revenue
      </p>
    </div>
  </div>
</footer>`,
      css: `.footer {
  background: rgba(255,255,255,0.02);
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 80px 24px 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-bottom: 64px;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
}

.footer-tagline {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin-bottom: 24px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.footer-social-link:hover {
  background: rgba(255,255,255,0.08);
  color: #F54A48;
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #F54A48;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.08);
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-copyright {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
}

.footer-tagline-sm {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}`
    },

    "Schema Markup": {
      html: `<!-- For ShiFt Convert (go.shiftnow.io) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ShiFt Convert",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered lead conversion system for roofing contractors. Responds in 30 seconds, qualifies leads instantly, and books appointments automatically.",
  "url": "https://go.shiftnow.io",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free Revenue Leak Calculator"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "publisher": {
    "@type": "Organization",
    "name": "eWorkForce Technologies Inc.",
    "url": "https://shiftnow.io"
  }
}
</script>

<!-- For ShiFt Attract (attract.shiftnow.io) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ShiFt Attract",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered lead generation system for roofing contractors. Multi-channel campaigns that fill your pipeline 24/7.",
  "url": "https://attract.shiftnow.io",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free Pipeline Audit"
  },
  "publisher": {
    "@type": "Organization",
    "name": "eWorkForce Technologies Inc.",
    "url": "https://shiftnow.io"
  }
}
</script>

<!-- For Brand Home (shiftnow.io) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ShiFt NeuralOS",
  "alternateName": "eWorkForce Technologies Inc.",
  "url": "https://shiftnow.io",
  "logo": "https://shiftnow.io/logo.svg",
  "description": "AI Revenue Operating System for roofing contractors",
  "sameAs": [
    "https://linkedin.com/company/shiftnow",
    "https://twitter.com/shiftnow"
  ]
}
</script>`
    },

    "Problem Cards Section (Home)": {
      html: `<section class="section" id="revenue-leaks" aria-label="Revenue leak problems">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label" style="color: #F54A48;">The Problem</span>
      <h2 class="section-title font-display">
        Every Day, Money Walks Out Your Door
      </h2>
      <p class="section-description">
        These three leaks drain $35K-$100K+ monthly from the average roofing company
      </p>
    </div>

    <div class="problem-grid">
      <!-- Problem Card 1 -->
      <div class="problem-card" style="--accent-color: #F54A48;">
        <div class="problem-accent"></div>
        <div class="problem-icon" style="background: rgba(245,74,72,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h3 class="problem-title font-display">Missed Calls = Missed Revenue</h3>
        <p class="problem-body">42% of calls come after 5pm. Your voicemail isn't closing deals.</p>
        <div class="problem-stat">
          <div class="problem-stat-value shift-gradient-text">$12K-$35K</div>
          <div class="problem-stat-label">lost monthly</div>
        </div>
        <div class="problem-pain">
          Every missed call is a job your competitor wins.
        </div>
      </div>

      <!-- Problem Card 2 -->
      <div class="problem-card" style="--accent-color: #FA982F;">
        <div class="problem-accent"></div>
        <div class="problem-icon" style="background: rgba(250,152,47,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
          </svg>
        </div>
        <h3 class="problem-title font-display">Junk Leads Eat Your Time</h3>
        <p class="problem-body">You're paying for leads that were never going to buy.</p>
        <div class="problem-stat">
          <div class="problem-stat-value shift-gradient-text">$8K-$25K</div>
          <div class="problem-stat-label">wasted monthly</div>
        </div>
        <div class="problem-pain">
          Bad leads don't just waste money—they waste your sales team's energy.
        </div>
      </div>

      <!-- Problem Card 3 -->
      <div class="problem-card" style="--accent-color: #48BB78;">
        <div class="problem-accent"></div>
        <div class="problem-icon" style="background: rgba(72,187,120,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zM8 12h8"/>
          </svg>
        </div>
        <h3 class="problem-title font-display">Invisible Buyers Choose Competitors</h3>
        <p class="problem-body">High-intent buyers are researching you. You just can't see them.</p>
        <div class="problem-stat">
          <div class="problem-stat-value shift-gradient-text">$15K-$40K</div>
          <div class="problem-stat-label">missed monthly</div>
        </div>
        <div class="problem-pain">
          They wanted to buy from you. You just weren't fast enough.
        </div>
      </div>
    </div>
  </div>
</section>`,
      css: `.problem-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .problem-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.problem-card {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.problem-card:hover {
  background: rgba(255,255,255,0.06);
  transform: translateY(-4px);
}

.problem-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent-color);
  border-radius: 4px 0 0 4px;
}

.problem-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.problem-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.problem-body {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 24px;
}

.problem-stat {
  margin-bottom: 16px;
}

.problem-stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.problem-stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4);
}

.problem-pain {
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.75rem;
  font-style: italic;
  color: rgba(255,255,255,0.4);
}`
    },

    "Comparison Table Section": {
      html: `<section class="section" id="comparison" aria-label="Feature comparison">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label" style="color: #FA982F;">The Reality</span>
      <h2 class="section-title font-display">
        Your Current Approach vs. ShiFt Convert
      </h2>
    </div>

    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="comparison-header">Metric</th>
            <th class="comparison-header comparison-header-center">Your Current Setup</th>
            <th class="comparison-header comparison-header-center">With ShiFt Convert</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="comparison-metric">After-hours response</td>
            <td class="comparison-value">
              <svg class="comparison-icon-bad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              <span>Voicemail</span>
            </td>
            <td class="comparison-value">
              <svg class="comparison-icon-good" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="comparison-value-good">30 seconds</span>
            </td>
          </tr>
          <tr>
            <td class="comparison-metric">Lead qualification</td>
            <td class="comparison-value">
              <svg class="comparison-icon-bad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              <span>Manual</span>
            </td>
            <td class="comparison-value">
              <svg class="comparison-icon-good" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="comparison-value-good">AI-instant</span>
            </td>
          </tr>
          <tr>
            <td class="comparison-metric">Appointment booking</td>
            <td class="comparison-value">
              <svg class="comparison-icon-bad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              <span>Back-and-forth</span>
            </td>
            <td class="comparison-value">
              <svg class="comparison-icon-good" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="comparison-value-good">Automated</span>
            </td>
          </tr>
          <tr>
            <td class="comparison-metric">Follow-up consistency</td>
            <td class="comparison-value">
              <svg class="comparison-icon-bad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              <span>When you remember</span>
            </td>
            <td class="comparison-value">
              <svg class="comparison-icon-good" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="comparison-value-good">100% automated</span>
            </td>
          </tr>
          <tr>
            <td class="comparison-metric">Lead source tracking</td>
            <td class="comparison-value">
              <svg class="comparison-icon-bad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              <span>"I think it was..."</span>
            </td>
            <td class="comparison-value">
              <svg class="comparison-icon-good" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="comparison-value-good">Real-time dashboard</span>
            </td>
          </tr>
          <tr>
            <td class="comparison-metric">Monthly revenue leaked</td>
            <td class="comparison-value">
              <svg class="comparison-icon-bad" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              <span>$35K-$100K+</span>
            </td>
            <td class="comparison-value">
              <svg class="comparison-icon-good" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span class="comparison-value-good">$0</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-cta">
      <a href="#calculator" class="btn-primary btn-lg">
        See Your Specific Numbers
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>`,
      css: `.comparison-table-wrapper {
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(10px);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-header {
  font-family: 'Montserrat Alternates', sans-serif;
  text-align: left;
  padding: 20px 24px;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.comparison-header-center {
  text-align: center;
}

.comparison-metric {
  padding: 20px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

tr:last-child .comparison-metric {
  border-bottom: none;
}

.comparison-value {
  padding: 20px 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

tr:last-child .comparison-value {
  border-bottom: none;
}

.comparison-icon-bad,
.comparison-icon-good {
  flex-shrink: 0;
}

.comparison-value-good {
  font-weight: 700;
  color: #48BB78;
}

.section-cta {
  text-align: center;
  margin-top: 40px;
}`
    },

    "Three-Stage Mechanism Section": {
      html: `<section class="section" id="how-it-works" aria-label="How the conversion mechanism works">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label" style="color: #48BB78;">The Solution</span>
      <h2 class="section-title font-display">
        Three Fixes for Three Leaks
      </h2>
      <p class="section-description">
        ShiFt Convert plugs every hole in your revenue bucket
      </p>
    </div>

    <div class="mechanism-grid">
      <!-- Stage 1 -->
      <div class="mechanism-card">
        <div class="mechanism-stage-badge" style="background: rgba(245,74,72,0.12); color: #F54A48; border-color: rgba(245,74,72,0.25);">
          Stage 1
        </div>
        <div class="mechanism-icon" style="background: rgba(245,74,72,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
          </svg>
        </div>
        <div class="mechanism-fixes" style="color: rgba(255,255,255,0.4);">
          Fixes: Leak #1 (Missed Calls)
        </div>
        <h3 class="mechanism-title font-display">AI Answers in 30 Seconds</h3>
        <p class="mechanism-description">
          Phone, web, text, Facebook—every lead gets an instant response. No voicemail. No missed opportunities.
        </p>
        <div class="mechanism-stat">
          <div class="mechanism-stat-value" style="color: #F54A48;">30 sec</div>
          <div class="mechanism-stat-label">response time</div>
        </div>
      </div>

      <!-- Stage 2 -->
      <div class="mechanism-card">
        <div class="mechanism-stage-badge" style="background: rgba(250,152,47,0.12); color: #FA982F; border-color: rgba(250,152,47,0.25);">
          Stage 2
        </div>
        <div class="mechanism-icon" style="background: rgba(250,152,47,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <div class="mechanism-fixes" style="color: rgba(255,255,255,0.4);">
          Fixes: Leak #2 (Junk Leads)
        </div>
        <h3 class="mechanism-title font-display">AI Separates Gold from Garbage</h3>
        <p class="mechanism-description">
          Our AI asks the right questions, scores every lead, and only passes qualified buyers to your team.
        </p>
        <div class="mechanism-stat">
          <div class="mechanism-stat-value" style="color: #FA982F;">73%</div>
          <div class="mechanism-stat-label">better lead quality</div>
        </div>
      </div>

      <!-- Stage 3 -->
      <div class="mechanism-card">
        <div class="mechanism-stage-badge" style="background: rgba(72,187,120,0.12); color: #48BB78; border-color: rgba(72,187,120,0.25);">
          Stage 3
        </div>
        <div class="mechanism-icon" style="background: rgba(72,187,120,0.12);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </div>
        <div class="mechanism-fixes" style="color: rgba(255,255,255,0.4);">
          Fixes: Leak #3 (Invisible Buyers)
        </div>
        <h3 class="mechanism-title font-display">AI Books the Appointment</h3>
        <p class="mechanism-description">
          Qualified leads get booked instantly. No back-and-forth. No delays. Just appointments on your calendar.
        </p>
        <div class="mechanism-stat">
          <div class="mechanism-stat-value" style="color: #48BB78;">3.2x</div>
          <div class="mechanism-stat-label">more appointments</div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      css: `.mechanism-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .mechanism-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.mechanism-card {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.mechanism-card:hover {
  background: rgba(255,255,255,0.06);
  transform: translateY(-4px);
}

.mechanism-stage-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 24px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid;
}

.mechanism-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.mechanism-card:hover .mechanism-icon {
  transform: scale(1.1);
}

.mechanism-fixes {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.mechanism-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.mechanism-description {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 24px;
}

.mechanism-stat {
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.mechanism-stat-value {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.mechanism-stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4);
}`
    },

    "Proof/Testimonial Section": {
      html: `<section class="section" id="proof" aria-label="Social proof and results">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label" style="color: #FA982F;">Proof</span>
      <h2 class="section-title font-display">
        From Revenue Leak to <span class="shift-gradient-text">Revenue Machine</span>
      </h2>
    </div>

    <div class="testimonial-card glass-card">
      <svg class="testimonial-quote" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(245,74,72,0.3)" stroke-width="2">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
      </svg>

      <blockquote class="testimonial-quote-text">
        "We were losing $47K a month to missed calls alone. ShiFt caught every lead we were missing—now our calendar is full and our close rate is up 34%."
      </blockquote>

      <div class="testimonial-author">
        <div class="testimonial-avatar">JT</div>
        <div class="testimonial-info">
          <div class="testimonial-name font-display">Jake Torres</div>
          <div class="testimonial-role">Owner, Titan Roofing Services</div>
          <div class="testimonial-location font-mono">Dallas, TX</div>
        </div>
      </div>

      <div class="testimonial-stats">
        <div class="testimonial-stat">
          <div class="testimonial-stat-value shift-gradient-text">$750K → $7M</div>
          <div class="testimonial-stat-label">6-Year Growth</div>
        </div>
        <div class="testimonial-stat">
          <div class="testimonial-stat-value shift-gradient-text">34%</div>
          <div class="testimonial-stat-label">Close Rate Increase</div>
        </div>
        <div class="testimonial-stat">
          <div class="testimonial-stat-value shift-gradient-text">89%</div>
          <div class="testimonial-stat-label">Show Rate</div>
        </div>
      </div>

      <div class="testimonial-cta">
        <a href="/case-study.html" class="testimonial-link font-mono">
          Read Full Case Study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>`,
      css: `.testimonial-card {
  padding: 48px;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 32px 24px;
  }
}

.testimonial-quote {
  margin-bottom: 24px;
  opacity: 0.3;
}

.testimonial-quote-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: white;
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .testimonial-quote-text {
    font-size: 1.5rem;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F54A48, #FA982F);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.testimonial-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 4px;
}

.testimonial-role {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 2px;
}

.testimonial-location {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
}

.testimonial-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 32px;
}

@media (min-width: 640px) {
  .testimonial-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial-stat {
  text-align: center;
}

.testimonial-stat-value {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 8px;
}

@media (min-width: 768px) {
  .testimonial-stat-value {
    font-size: 2.25rem;
  }
}

.testimonial-stat-label {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.4);
}

.testimonial-cta {
  text-align: center;
}

.testimonial-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #F54A48;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.testimonial-link:hover {
  opacity: 0.8;
}`
    },

    "Conversion Path/Steps Section": {
      html: `<section class="section" id="conversion-path" aria-label="Conversion path steps">
    <div class="section-inner">
    <div class="section-header">
    <span class="section-label" style="color: #F54A48;">Your Next Step</span>
    <h2 class="section-title font-display">
      See Your Number in <span class="shift-gradient-text">60 Seconds</span>
    </h2>
    </div>

    <div class="conversion-steps">
    <!-- Step 1 -->
    <div class="conversion-step">
      <div class="conversion-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
      <div class="conversion-step-card glass-card">
        <div class="conversion-step-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <div class="conversion-step-label font-mono">Step 1: Calculate</div>
        <h3 class="conversion-step-title font-display">Answer 5 Questions</h3>
        <p class="conversion-step-description">Your revenue, lead volume, and current close rate</p>
        <div class="conversion-step-time">60 seconds</div>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="conversion-step">
      <div class="conversion-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
      <div class="conversion-step-card glass-card">
        <div class="conversion-step-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <div class="conversion-step-label font-mono">Step 2: Experience</div>
        <h3 class="conversion-step-title font-display">See ShiFt in Action</h3>
        <p class="conversion-step-description">Experience how AI handles your actual leads</p>
        <div class="conversion-step-time">Live demo</div>
      </div>
    </div>

    <!-- Step 3 -->
    <div class="conversion-step">
      <div class="conversion-step-card glass-card">
        <div class="conversion-step-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
        </div>
        <div class="conversion-step-label font-mono">Step 3: Book</div>
        <h3 class="conversion-step-title font-display">Reality Session</h3>
        <p class="conversion-step-description">Custom audit of your specific revenue leaks</p>
        <div class="conversion-step-time">15 minutes</div>
      </div>
    </div>
    </div>

    <!-- CTA links to calculator -->
    <div class="section-cta">
    <a href="https://calc.shiftnow.io" class="btn-primary btn-lg">
      See My Number
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
    </div>
    </div>
    </section>`,
      css: `.conversion-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .conversion-steps {
    grid-template-columns: repeat(3, 1fr);
  }
}

.conversion-step {
  position: relative;
}

.conversion-arrow {
  display: none;
}

@media (min-width: 768px) {
  .conversion-arrow {
    display: block;
    position: absolute;
    top: 48px;
    right: -28px;
    z-index: 10;
  }
  
  .conversion-step:last-child .conversion-arrow {
    display: none;
  }
}

.conversion-step-card {
  text-align: center;
  padding: 32px;
  transition: all 0.3s ease;
}

.conversion-step-card:hover {
  transform: translateY(-4px);
}

.conversion-step-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12));
  border: 1px solid rgba(245,74,72,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.conversion-step-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.5);
  margin-bottom: 12px;
}

.conversion-step-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.conversion-step-description {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 16px;
}

.conversion-step-time {
  display: inline-flex;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(250,152,47,0.12);
  color: #FA982F;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
}`
    },

    "FAQ Section": {
      html: `<section class="section" id="faq" aria-label="Frequently asked questions">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label" style="color: #F54A48;">FAQ</span>
      <h2 class="section-title font-display">
        Questions? <span class="shift-gradient-text">Answered.</span>
      </h2>
    </div>

    <div class="faq-list">
      <!-- FAQ Item 1 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>How long does setup take?</span>
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>48 hours from signing to live. We handle everything—integration, testing, training. You just show up.</p>
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>Will this replace my team?</span>
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>No. ShiFt handles repetitive work—qualifying, scheduling, follow-up. Your team closes qualified appointments, not chasing dead leads.</p>
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>What if leads don't like talking to AI?</span>
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>They don't care—they care about speed. Our AI responds in 30 seconds. Your competitor's voicemail doesn't. We've handled 10,000+ conversations. 89% show rate proves it works.</p>
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>Do I need long-term contracts?</span>
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>No. Month-to-month. Cancel anytime. We bet on results, not contracts.</p>
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>How much does ShiFt cost?</span>
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="faq-answer">
          <p>Plans start at $997/month. If you're leaking $35K-$100K, it's a no-brainer. Book a call to see exact pricing for your volume.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
      css: `.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
  background: none;
  border: none;
  text-align: left;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: #F54A48;
}

.faq-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: rgba(255,255,255,0.4);
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
  color: #F54A48;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding-bottom: 24px;
}

.faq-answer p {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.6);
}`,
      js: `// FAQ Accordion
function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains('active');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add('active');
  }
}`
    },

    "How It Works - Flow Diagram": {
      notes: "Steps: Lead Arrives → AI Responds (30 sec) → AI Qualifies → AI Books → You Close. Last step styled with gradient coral border. Use flex-row on desktop, flex-col on mobile."
    },

    "How It Works - Stage Cards": {
      notes: "3-column grid. Stage 1: Instant Capture (coral, 30 sec stat). Stage 2: AI Qualification (orange, 73% stat). Stage 3: Automated Booking (green, 3.2x stat). Each card: glass bg, stage badge pill, icon box, title, description, stat with border-top. Hover lifts card. CSS classes: .stage-card, .stage-badge, .stage-icon, .stage-title, .stage-description, .stage-stat, .stage-stat-value, .stage-stat-label — same pattern as .mechanism-card in Three-Stage Mechanism section."
    },

    "How It Works - Integrations Grid": {
      notes: "2-col mobile / 4-col desktop grid. Items: GoHighLevel, Calendly, Google Calendar, Zapier, Slack, HubSpot, Salesforce, Zoom. Each is a glass card (rgba white 0.04 bg) with Montserrat Alternates font, hover lifts and shows coral border."
    },

    "Utility CSS Classes": {
      css: `/* Section Header Utilities */
.section-header {
  text-align: center;
  margin-bottom: 56px;
}

@media (min-width: 768px) {
  .section-header {
    margin-bottom: 80px;
  }
}

.section-label {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 16px;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 20px;
}

@media (min-width: 640px) {
  .section-title {
    font-size: 2.25rem;
  }
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

.section-description {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.5);
  max-width: 672px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .section-description {
    font-size: 1.125rem;
  }
}

.section-cta {
  text-align: center;
  margin-top: 40px;
}`
    },

    "How It Works Page (Full)": {
      notes: "Combine: Flow Diagram section (Lead Arrives→AI Responds→AI Qualifies→AI Books→You Close) + Stage Cards section (3 columns, Stages 1-2-3). Stages 2 & 3 follow same 2-col layout as Stage 1. Use standard HTML page template shell from 'Complete HTML Page Template' section."
    },

    "Pricing Page": {
      html: `<!-- Pricing Cards Grid -->
<section class="section">
  <div class="section-inner">
    <h1 class="font-display text-center text-4xl md:text-6xl font-black text-white mb-20">
      Pricing That Pays <span class="shift-gradient-text">For Itself</span>
    </h1>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Starter Tier -->
      <div class="pricing-card">
        <div class="pricing-card-header">
          <h3 class="pricing-card-title">Starter</h3>
          <p class="pricing-card-subtitle">For 1-2 person teams</p>
        </div>
        <div class="pricing-card-price">
          <span class="price-value">Custom</span>
          <span class="price-label">Pricing</span>
        </div>
        <ul class="pricing-features">
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Multi-channel AI response (30 sec)</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Basic lead qualification</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Calendar integration</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Up to 100 leads/month</li>
        </ul>
        <button class="btn-outline w-full">Get Started</button>
      </div>

      <!-- Growth Tier (Most Popular) -->
      <div class="pricing-card pricing-card-featured">
        <div class="pricing-badge">Most Popular</div>
        <div class="pricing-card-header">
          <h3 class="pricing-card-title">Growth</h3>
          <p class="pricing-card-subtitle">For 3-10 person teams</p>
        </div>
        <div class="pricing-card-price">
          <span class="price-value">Custom</span>
          <span class="price-label">Pricing</span>
        </div>
        <ul class="pricing-features">
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Everything in Starter</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Advanced AI qualification</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Up to 500 leads/month</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Priority support</li>
        </ul>
        <button class="btn-primary w-full">Most Popular</button>
      </div>

      <!-- Scale Tier -->
      <div class="pricing-card">
        <div class="pricing-card-header">
          <h3 class="pricing-card-title">Scale</h3>
          <p class="pricing-card-subtitle">For 10+ person teams</p>
        </div>
        <div class="pricing-card-price">
          <span class="price-value">Custom</span>
          <span class="price-label">Pricing</span>
        </div>
        <ul class="pricing-features">
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Everything in Growth</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Unlimited leads</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> API access</li>
          <li><svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Dedicated success manager</li>
        </ul>
        <button class="btn-outline w-full">Contact Sales</button>
      </div>
    </div>
  </div>
</section>`,
      css: `.pricing-card {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
}

.pricing-card-featured {
  background: linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.08));
  border-color: rgba(245,74,72,0.3);
  transform: scale(1.05);
}

.pricing-badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, #F54A48, #FA982F);
  color: white;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.pricing-card-header {
  margin-bottom: 24px;
}

.pricing-card-title {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}

.pricing-card-subtitle {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
}

.pricing-card-price {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.price-value {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.price-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4);
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}

.pricing-features li {
  display: flex;
  align-items: start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.7);
}

.check-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.w-full {
  width: 100%;
}`
    },

    "Contact Page": {
      html: `<!-- Contact Page Layout -->
<section class="section">
  <div class="section-inner">
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Left: Form -->
      <div>
        <h1 class="font-display text-4xl md:text-5xl font-black text-white mb-6">
          Get in <span class="shift-gradient-text">Touch</span>
        </h1>
        <p class="font-body text-lg mb-8" style="color: rgba(255,255,255,0.6);">
          Questions about ShiFt? Want to see a demo? We're here to help.
        </p>

        <form class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Company</label>
            <input type="text" class="form-input" />
          </div>

          <div class="form-group">
            <label class="form-label">What brings you here?</label>
            <select class="form-input">
              <option>Schedule a demo</option>
              <option>Get pricing</option>
              <option>Ask a question</option>
              <option>Partnership inquiry</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea rows="5" class="form-input"></textarea>
          </div>

          <button type="submit" class="btn-primary btn-lg w-full">
            Send Message
          </button>
        </form>
      </div>

      <!-- Right: Contact Info -->
      <div class="sticky top-24">
        <div class="glass-card p-8">
          <h3 class="font-display text-2xl font-bold text-white mb-6">
            Contact Information
          </h3>
          
          <div class="contact-info-list">
            <div class="contact-info-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div>
                <div class="contact-info-label">Email</div>
                <a href="mailto:hello@shiftnow.io" class="contact-info-value">hello@shiftnow.io</a>
              </div>
            </div>

            <div class="contact-info-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07..."/>
              </svg>
              <div>
                <div class="contact-info-label">Phone</div>
                <a href="tel:+15551234567" class="contact-info-value">(555) 123-4567</a>
              </div>
            </div>

            <div class="contact-info-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <div class="contact-info-label">Address</div>
                <div class="contact-info-value">
                  123 Innovation Drive<br />San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      css: `.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: white;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  background: rgba(255,255,255,0.08);
  border-color: rgba(245,74,72,0.5);
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-info-item {
  display: flex;
  align-items: start;
  gap: 16px;
}

.contact-info-item svg {
  flex-shrink: 0;
}

.contact-info-label {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 4px;
}

.contact-info-value {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info-value:hover {
  color: #F54A48;
}`
    },

    "Revenue Leaks Page": {
    html: `<!-- Revenue Leaks Deep Dive Page -->
    <section class="section">
    <div class="section-inner text-center mb-20">
    <h1 class="font-display text-4xl md:text-6xl font-black text-white mb-6">
    The Three Revenue Leaks <span class="shift-gradient-text">Draining Your Business</span>
    </h1>
    <p class="font-body text-xl" style="color: rgba(255,255,255,0.6);">
    You're losing $35K-$100K+ every month. Here's exactly where.
    </p>
    </div>
    </section>

    <!-- Leak #1: Missed Calls -->
    <section class="section" style="background: linear-gradient(to bottom, transparent, rgba(245,74,72,0.03));">
    <div class="section-inner">
    <div class="grid md:grid-cols-2 gap-12 items-center">
    <div>
    <div class="flex items-center gap-3 mb-6">
    <div class="w-16 h-16 rounded-xl flex items-center justify-center" style="background: rgba(245,74,72,0.12);">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07..."/>
      </svg>
    </div>
    <div>
      <div class="font-mono text-xs uppercase tracking-wider" style="color: rgba(255,255,255,0.5);">Leak #1</div>
      <h2 class="font-display text-3xl font-bold text-white">Missed Calls</h2>
    </div>
    </div>

    <h3 class="font-display text-4xl md:text-5xl font-bold text-white mb-6">
    42% of Leads Call After Hours
    </h3>

    <p class="font-body text-lg mb-6" style="color: rgba(255,255,255,0.6);">
    Your phone rings at 6:47 PM. A homeowner with hail damage wants an inspection. They leave a voicemail. You call back at 9 AM the next day. Too late—your competitor already booked them at 7:12 PM.
    </p>

    <div class="glass-card p-6 mb-8" style="background: rgba(245,74,72,0.08); border-color: rgba(245,74,72,0.2);">
    <div class="font-display text-4xl font-bold mb-2" style="color: #F54A48;">$12K-$35K</div>
    <div class="font-body" style="color: rgba(255,255,255,0.7);">Average monthly revenue lost to missed calls</div>
    </div>
    </div>

    <!-- Calculator sidebar -->
    <div class="glass-card p-8">
    <div class="font-mono text-xs uppercase tracking-wider mb-6" style="color: rgba(255,255,255,0.5);">
    Calculate Your Missed Call Cost
    </div>
    <div class="space-y-6">
    <div>
      <label class="form-label">Monthly incoming calls</label>
      <input type="number" placeholder="100" class="form-input" />
    </div>
    <div>
      <label class="form-label">Average job value</label>
      <input type="number" placeholder="12000" class="form-input" />
    </div>
    <div class="glass-card p-6" style="background: linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12));">
      <div class="font-body text-sm mb-2" style="color: rgba(255,255,255,0.7);">Estimated monthly loss:</div>
      <div class="font-display text-3xl font-bold" style="color: #F54A48;">$28,400</div>
    </div>
    <button class="btn-primary w-full">Get Full Revenue Audit</button>
    </div>
    </div>
    </div>
    </div>
    </section>

    <!-- Leak #2 & #3 follow similar pattern -->`
    },

    "About Page": {
    html: `<!-- About Page -->
    <section class="section">
    <div class="section-inner text-center max-w-4xl mx-auto mb-20">
    <h1 class="font-display text-4xl md:text-6xl font-black text-white mb-6">
    We're Building the <span class="shift-gradient-text">Operating System</span><br/>for AI-First Business
    </h1>
    <p class="font-body text-xl" style="color: rgba(255,255,255,0.6);">
    ShiFt started with one question: Why do great contractors lose to faster, not better, competitors?
    </p>
    </div>
    </section>

    <section class="section" style="background: linear-gradient(to bottom, transparent, rgba(245,74,72,0.02));">
    <div class="section-inner max-w-4xl mx-auto">
    <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Mission</h2>

    <div class="glass-card p-8 md:p-12 mb-12">
    <p class="font-body text-xl md:text-2xl leading-relaxed text-white text-center mb-8">
    "To give every contractor the same AI advantage that only enterprise companies could afford—and make it roofing-specific."
    </p>

    <div class="grid sm:grid-cols-3 gap-6">
    <div class="text-center">
    <div class="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style="background: rgba(245,74,72,0.12);">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    </div>
    <div class="font-display text-lg font-bold text-white mb-2">Speed over size</div>
    <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">Fast response wins deals</div>
    </div>

    <div class="text-center">
    <div class="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style="background: rgba(250,152,47,0.12);">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    </div>
    <div class="font-display text-lg font-bold text-white mb-2">AI over headcount</div>
    <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">Scale without hiring</div>
    </div>

    <div class="text-center">
    <div class="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style="background: rgba(72,187,120,0.12);">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    </div>
    <div class="font-display text-lg font-bold text-white mb-2">Roofing-specific</div>
    <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">Built for your industry</div>
    </div>
    </div>
    </div>
    </div>
    </section>

    <!-- Values Section -->
    <section class="section">
    <div class="section-inner max-w-4xl mx-auto">
    <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Values</h2>

    <div class="grid md:grid-cols-2 gap-6">
    <div class="glass-card p-6">
    <h3 class="font-display text-xl font-bold text-white mb-3">Presence over perfection</h3>
    <p class="font-body" style="color: rgba(255,255,255,0.6);">Show up fast, iterate constantly</p>
    </div>
    <div class="glass-card p-6">
    <h3 class="font-display text-xl font-bold text-white mb-3">Speed over sophistication</h3>
    <p class="font-body" style="color: rgba(255,255,255,0.6);">First responder wins the deal</p>
    </div>
    <div class="glass-card p-6">
    <h3 class="font-display text-xl font-bold text-white mb-3">Results over rhetoric</h3>
    <p class="font-body" style="color: rgba(255,255,255,0.6);">ROI talks, everything else walks</p>
    </div>
    <div class="glass-card p-6">
    <h3 class="font-display text-xl font-bold text-white mb-3">Coherence over chaos</h3>
    <p class="font-body" style="color: rgba(255,255,255,0.6);">Simple systems beat complex ones</p>
    </div>
    </div>
    </div>
    </section>`
    },

    "Attract Home Page": {
    html: `<!-- Attract Home Hero -->
    <section class="hero">
    <div class="hero-bg" style="background: radial-gradient(circle, rgba(250,152,47,0.2) 0%, rgba(245,74,72,0.1) 40%, transparent 70%);"></div>

    <div class="section-inner text-center">
    <div class="hero-badge" style="background: rgba(250,152,47,0.08); border-color: rgba(250,152,47,0.3);">
    <span class="pulse-dot" style="background: #FA982F;"></span>
    <span class="font-mono" style="color: #FA982F;">AI Lead Generation for Roofing Contractors</span>
    </div>

    <h1 class="hero-headline font-display">
    Your <span style="background: linear-gradient(to right, #FA982F, #F54A48); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Pipeline Is Empty</span> Because Your Marketing Isn't Working
    </h1>

    <p class="hero-subheadline">
    You're spending on ads, SEO, and agencies—but the phone isn't ringing. ShiFt Attract uses AI to generate qualified leads across every channel, 24 hours a day.
    </p>

    <div class="hero-ctas" style="justify-content: center;">
    <a href="#audit" class="btn-primary btn-lg" style="background: linear-gradient(135deg, #FA982F, #F54A48);">
    Audit My Pipeline
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
    </a>
    </div>

    <p class="hero-micro font-mono">
    Free pipeline audit. See exactly where leads should be coming from.
    </p>
    </div>
    </section>

    <!-- Then include EmptyPipelineProblems section (already documented) -->
    <!-- Then include AttractSolution section (already documented) -->`
    },

    "Attract Empty Pipeline Page": {
    html: `<!-- Empty Pipeline Problems Page -->
    <section class="section">
    <div class="section-inner text-center max-w-4xl mx-auto mb-20">
    <h1 class="font-display text-4xl md:text-6xl font-black text-white mb-6">
    The <span class="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">Empty Pipeline</span> Problem
    </h1>
    <p class="font-body text-xl" style="color: rgba(255,255,255,0.6);">
    Why roofing contractors lose $35K-$100K+ monthly to broken lead generation systems
    </p>
    </div>
    </section>

    <!-- Use the EmptyPipelineProblems section from earlier -->

    <!-- Cost Stats Section -->
    <section class="section" style="background: linear-gradient(to bottom, transparent, rgba(250,152,47,0.02));">
    <div class="section-inner max-w-4xl mx-auto">
    <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center">
    The Real Cost of an <span style="color: #FA982F;">Empty Pipeline</span>
    </h2>

    <div class="glass-card p-8 md:p-12 mb-8">
    <div class="grid md:grid-cols-3 gap-8 text-center">
    <div>
    <div class="font-display text-5xl font-black mb-2" style="color: #FA982F;">$3.2K</div>
    <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">Wasted monthly on ineffective marketing</div>
    </div>
    <div>
    <div class="font-display text-5xl font-black mb-2" style="color: #F54A48;">67%</div>
    <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">Struggle with lead consistency</div>
    </div>
    <div>
    <div class="font-display text-5xl font-black mb-2" style="color: #48BB78;">43%</div>
    <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">Over-dependent on referrals</div>
    </div>
    </div>
    </div>

    <div class="text-center">
    <a href="#calculator" class="btn-primary btn-lg" style="background: linear-gradient(to right, #FA982F, #F54A48);">
    Calculate My Revenue Leak
    </a>
    </div>
    </div>
    </section>`
    },

    "Attract How It Works Page": {
      notes: "Timeline layout. 4 items: Day 1-3 (Platform Configuration), Day 4-7 (Campaign Launch), Day 8-21 (AI Optimization), Day 22-30 (Pipeline Full). Each item: orange icon box (64x64, rounded-2xl), vertical connector line, glass card with orange badge pill, title, description, checkmark result. CSS: .timeline, .timeline-item (flex gap-8), .timeline-icon, .timeline-connector (absolute left-8 w-0.5), .timeline-content, .timeline-badge."
    },

    "Attract Pricing Page": {
      notes: "3-column pricing grid (same .pricing-card CSS as Convert Pricing Page). Starter $997/mo: 3 channels, 50-75 leads/mo, basic AI. Growth $1,997/mo (featured, orange, scale(1.05)): all channels, 125-175 leads/mo, advanced AI. Scale: Custom, multi-location, dedicated manager. Note below headline: 'Plus ad spend (minimum $2,000/month recommended)'. Growth CTA button uses orange gradient."
    },

    "Booking Page (Calendar Embed)": {
    html: `<!-- Booking Page Template -->
    <section class="section">
    <div class="section-inner">
    <div class="grid lg:grid-cols-2 gap-12">
    <!-- Left: What to Expect -->
    <div>
    <h1 class="font-display text-4xl md:text-5xl font-black text-white mb-6">
    Book Your Revenue <span class="shift-gradient-text">Reality Session</span>
    </h1>
    <p class="font-body text-lg mb-8" style="color: rgba(255,255,255,0.6);">
    15 minutes. Your specific numbers. Zero obligation.
    </p>

    <div class="glass-card p-8 mb-8">
    <h2 class="font-display text-xl font-bold text-white mb-6">What to Expect:</h2>

    <div class="space-y-5">
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(245,74,72,0.12);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>
        <div>
          <div class="font-display text-base font-semibold text-white mb-1">Your Revenue Leak Analysis</div>
          <div class="font-body text-sm" style="color: rgba(255,255,255,0.6);">
            We'll analyze YOUR specific revenue leaks based on your numbers
          </div>
        </div>
      </div>

      <!-- Repeat for other benefits -->
    </div>
    </div>

    <div class="glass-card p-6" style="background: rgba(72,187,120,0.08); border-color: rgba(72,187,120,0.2);">
    <div class="flex items-center gap-3 mb-3">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <div class="font-display text-lg font-semibold text-white">Trusted by 847+ Roofing Companies</div>
    </div>
    <p class="font-body text-sm" style="color: rgba(255,255,255,0.6);">
      From solo operators to 50-person teams, roofing contractors across the country use ShiFt.
    </p>
    </div>
    </div>

    <!-- Right: Calendar Embed -->
    <div class="sticky top-24">
    <div class="glass-card p-8">
    <div class="text-center mb-6">
      <div class="font-mono text-xs uppercase tracking-wider mb-2" style="color: rgba(255,255,255,0.5);">Step 1</div>
      <h3 class="font-display text-2xl font-bold text-white">Select Your Time</h3>
    </div>

    <!-- Calendar placeholder -->
    <div class="rounded-xl overflow-hidden mb-6" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); min-height: 500px;">
      <div class="flex items-center justify-center h-full p-12 text-center">
        <div>
          <svg class="w-16 h-16 mx-auto mb-4 opacity-20" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
          <p class="font-mono text-sm" style="color: rgba(255,255,255,0.4);">
            Calendar embed goes here<br/>(Calendly, Cal.com, or similar)
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-3">
      <div class="flex items-center gap-2 font-body text-sm" style="color: rgba(255,255,255,0.6);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        15-minute session
      </div>
      <div class="flex items-center gap-2 font-body text-sm" style="color: rgba(255,255,255,0.6);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        No credit card required
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>`
    },

    "Platform Page": {
    html: `<!-- Platform Architecture Page -->
    <section class="section">
    <div class="section-inner text-center mb-20">
    <h1 class="font-display text-4xl md:text-6xl font-black text-white mb-6">
    The Complete <span class="shift-gradient-text">Neural Stack</span>
    </h1>
    <p class="font-body text-xl max-w-3xl mx-auto" style="color: rgba(255,255,255,0.6);">
    Four layers working in perfect sync to maximize your revenue
    </p>
    </div>
    </section>

    <!-- Stack Layers -->
    <section class="section">
    <div class="section-inner max-w-4xl mx-auto space-y-6">
    <!-- Layer 1: Business Foundation -->
    <div class="glass-card p-8">
    <div class="flex items-center gap-4 mb-4">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(255,255,255,0.08);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
    </div>
    <div>
    <div class="font-mono text-xs uppercase tracking-wider" style="color: rgba(255,255,255,0.5);">Layer 1</div>
    <h3 class="font-display text-2xl font-bold text-white">Your Business Foundation</h3>
    </div>
    </div>
    <p class="font-body" style="color: rgba(255,255,255,0.7);">
    Your existing CRM, calendar, and tools. ShiFt plugs in seamlessly.
    </p>
    </div>

    <!-- Layer 2: Attract -->
    <div class="glass-card p-8" style="background: rgba(250,152,47,0.08); border-color: rgba(250,152,47,0.2);">
    <div class="flex items-center gap-4 mb-4">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(250,152,47,0.15);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA982F" stroke-width="2">
      <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/>
    </svg>
    </div>
    <div>
    <div class="font-mono text-xs uppercase tracking-wider" style="color: rgba(250,152,47,0.7);">Layer 2</div>
    <h3 class="font-display text-2xl font-bold text-white">ShiFt Attract</h3>
    </div>
    </div>
    <p class="font-body mb-4" style="color: rgba(255,255,255,0.7);">
    AI-powered lead generation. Multi-channel campaigns that fill your pipeline.
    </p>
    <a href="/attract" class="font-mono text-sm font-semibold uppercase tracking-wider" style="color: #FA982F;">
    Explore Attract →
    </a>
    </div>

    <!-- Layer 3: Convert -->
    <div class="glass-card p-8" style="background: rgba(245,74,72,0.08); border-color: rgba(245,74,72,0.2);">
    <div class="flex items-center gap-4 mb-4">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(245,74,72,0.15);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F54A48" stroke-width="2">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/>
    </svg>
    </div>
    <div>
    <div class="font-mono text-xs uppercase tracking-wider" style="color: rgba(245,74,72,0.7);">Layer 3</div>
    <h3 class="font-display text-2xl font-bold text-white">ShiFt Convert</h3>
    </div>
    </div>
    <p class="font-body mb-4" style="color: rgba(255,255,255,0.7);">
    AI-powered lead conversion. Instant response, qualification, and booking.
    </p>
    <a href="/convert" class="font-mono text-sm font-semibold uppercase tracking-wider" style="color: #F54A48;">
    Explore Convert →
    </a>
    </div>

    <!-- Layer 4: Insights -->
    <div class="glass-card p-8">
    <div class="flex items-center gap-4 mb-4">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: rgba(72,187,120,0.15);">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48BB78" stroke-width="2">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    </svg>
    </div>
    <div>
    <div class="font-mono text-xs uppercase tracking-wider" style="color: rgba(255,255,255,0.5);">Layer 4</div>
    <h3 class="font-display text-2xl font-bold text-white">Revenue Insights & Analytics</h3>
    </div>
    </div>
    <p class="font-body" style="color: rgba(255,255,255,0.7);">
    Real-time visibility into every dollar spent and earned.
    </p>
    </div>
    </div>
    </section>`
    },

    "Complete HTML Page Template": {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="AI-powered lead conversion system for roofing contractors. Calculate your revenue leak in 60 seconds.">
  <meta name="keywords" content="roofing leads, lead conversion, AI automation, revenue leak">
  
  <!-- Open Graph -->
  <meta property="og:title" content="ShiFt Convert - AI Lead Conversion">
  <meta property="og:description" content="Stop losing money to slow responses and junk leads. Convert more with AI.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://go.shiftnow.io">
  
  <title>ShiFt Convert - AI Lead Conversion for Roofing Contractors</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ShiFt Convert",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "AI-powered lead conversion system for roofing contractors.",
    "url": "https://go.shiftnow.io"
  }
  </script>
</head>
<body>
  <!-- Navigation -->
  <nav class="nav" id="main-nav">
    <!-- Copy nav HTML from "Navigation Bar" section -->
  </nav>

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section class="hero" id="hero" aria-label="Hero section">
      <!-- Copy hero HTML from "Hero Section" section -->
    </section>

    <!-- Problem Cards -->
    <section class="section" id="revenue-leaks">
      <!-- Copy from "Problem Cards Section" -->
    </section>

    <!-- Comparison Table -->
    <section class="section" id="comparison">
      <!-- Copy from "Comparison Table Section" -->
    </section>

    <!-- Three-Stage Mechanism -->
    <section class="section" id="how-it-works">
      <!-- Copy from "Three-Stage Mechanism Section" -->
    </section>

    <!-- Proof/Testimonial -->
    <section class="section" id="proof">
      <!-- Copy from "Proof/Testimonial Section" -->
    </section>

    <!-- Conversion Path -->
    <section class="section" id="conversion-path">
      <!-- Copy from "Conversion Path/Steps Section" -->
    </section>

    <!-- FAQ -->
    <section class="section" id="faq">
      <!-- Copy from "FAQ Section" -->
    </section>

    <!-- CTA -->
    <section class="section" id="cta">
      <!-- Copy CTA HTML from "CTA Section" below -->
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <!-- Copy footer HTML from "Footer" section -->
  </footer>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>`
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6"
            style={{
              background: "rgba(245,74,72,0.08)",
              borderColor: "rgba(245,74,72,0.3)",
            }}>
            <FileCode className="w-5 h-5" style={{ color: "#F54A48" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>
              HTML/CSS/JS Documentation
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Component-by-Component<br/>Conversion Guide
          </h1>
          
          <p className="text-lg max-w-3xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Complete HTML, CSS, and JavaScript code for every component. Copy and paste to build your static site or import into WordPress Elementor.
          </p>
        </div>

        {/* Instructions */}
        <div className="rounded-2xl p-8 mb-12" style={{
          background: "linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.05))",
          border: "1px solid rgba(245,74,72,0.2)"
        }}>
          <h2 className="font-display text-2xl font-bold text-white mb-4">How to Use This Guide</h2>
          <div className="space-y-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            <p><strong className="text-white">1.</strong> Each section below contains complete HTML, CSS, and JavaScript for a specific component</p>
            <p><strong className="text-white">2.</strong> Copy the HTML structure and paste into your page or Elementor HTML widget</p>
            <p><strong className="text-white">3.</strong> Add all CSS to a single styles.css file or WordPress Customizer → Additional CSS</p>
            <p><strong className="text-white">4.</strong> Add JavaScript to script.js and include before closing &lt;/body&gt; tag</p>
            <p><strong className="text-white">5.</strong> Use the "Complete HTML Page Template" at the bottom for full page structure</p>
          </div>
        </div>

        <div className="rounded-2xl p-8 mb-12" style={{
          background: "rgba(72,187,120,0.08)",
          border: "1px solid rgba(72,187,120,0.2)"
        }}>
          <h2 className="font-display text-2xl font-bold text-white mb-4">📄 Finding HTML for Full Pages</h2>
          <div className="space-y-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            <p><strong className="text-white">Home Page:</strong> Combine "Hero Section" + "Problem Cards Section" + "Comparison Table Section" + "Three-Stage Mechanism" + "Proof/Testimonial" + "Conversion Path" + "FAQ Section"</p>
            <p><strong className="text-white">How It Works:</strong> See "How It Works - Flow Diagram" + "How It Works - Stage Cards" + "How It Works - Integrations Grid"</p>
            <p><strong className="text-white">Revenue Leaks:</strong> See "Revenue Leaks Page" section below</p>
            <p><strong className="text-white">Pricing:</strong> See "Pricing Page" section below</p>
            <p><strong className="text-white">Contact:</strong> See "Contact Page" section below</p>
            <p><strong className="text-white">About:</strong> See "About Page" section below</p>
            <p><strong className="text-white">Attract Pages:</strong> See "Attract Home Page", "Attract Empty Pipeline Page", "Attract How It Works Page", "Attract Pricing Page"</p>
            <p><strong className="text-white">Booking:</strong> See "Booking Page (Calendar Embed)" section below</p>
            <p><strong className="text-white">Platform:</strong> See "Platform Page" section below</p>
            <p className="pt-3 border-t" style={{ borderColor: "rgba(72,187,120,0.3)", color: "#48BB78" }}>
              💡 <strong>Tip:</strong> Scroll through all sections below. Each page has its complete HTML ready to copy!
            </p>
          </div>
        </div>

        {/* Component Sections */}
        <div className="space-y-4">
          {Object.entries(documentation).map(([title, content]) => (
            <div key={title} className="rounded-xl overflow-hidden" style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              {/* Header */}
              <button
                onClick={() => toggleSection(title)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-[rgba(255,255,255,0.02)]"
              >
                <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                {expandedSections[title] ? (
                  <ChevronDown className="w-5 h-5 text-white" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-white" />
                )}
              </button>

              {/* Content */}
              {expandedSections[title] && (
                <div className="p-6 pt-0 space-y-6">
                  {content.html && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#FA982F" }}>
                          HTML
                        </h4>
                        <button
                          onClick={() => copyCode(content.html, `${title}-html`)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: copiedCode === `${title}-html` ? "#48BB78" : "rgba(255,255,255,0.6)"
                          }}
                        >
                          {copiedCode === `${title}-html` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copiedCode === `${title}-html` ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className="rounded-lg p-4 overflow-x-auto" style={{
                        background: "#0D0F33",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        <code className="text-sm" style={{ color: "#E2E8F0" }}>{content.html}</code>
                      </pre>
                    </div>
                  )}

                  {content.css && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#FA982F" }}>
                          CSS
                        </h4>
                        <button
                          onClick={() => copyCode(content.css, `${title}-css`)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: copiedCode === `${title}-css` ? "#48BB78" : "rgba(255,255,255,0.6)"
                          }}
                        >
                          {copiedCode === `${title}-css` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copiedCode === `${title}-css` ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className="rounded-lg p-4 overflow-x-auto" style={{
                        background: "#0D0F33",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        <code className="text-sm" style={{ color: "#E2E8F0" }}>{content.css}</code>
                      </pre>
                    </div>
                  )}

                  {content.js && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#FA982F" }}>
                          JavaScript
                        </h4>
                        <button
                          onClick={() => copyCode(content.js, `${title}-js`)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: copiedCode === `${title}-js` ? "#48BB78" : "rgba(255,255,255,0.6)"
                          }}
                        >
                          {copiedCode === `${title}-js` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copiedCode === `${title}-js` ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <pre className="rounded-lg p-4 overflow-x-auto" style={{
                        background: "#0D0F33",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        <code className="text-sm" style={{ color: "#E2E8F0" }}>{content.js}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 rounded-xl text-center" style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            💡 <strong className="text-white">Pro Tip:</strong> Start with "Global Styles" and "Complete HTML Page Template", then add components as needed.
            All components are mobile-responsive, SEO-optimized, and brand-compliant.
          </p>
        </div>
      </div>
    </div>
  );
}