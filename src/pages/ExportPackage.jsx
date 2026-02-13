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

    "Hero Section": {
      html: `<section class="hero" id="hero" aria-label="Hero section">
  <div class="hero-bg"></div>
  
  <div class="section-inner">
    <!-- Badge -->
    <div class="hero-badge">
      <span class="pulse-dot"></span>
      <span class="font-mono">Live Revenue Leak Calculator</span>
    </div>

    <!-- Headline -->
    <h1 class="hero-headline font-display">
      You're Losing <span class="shift-gradient-text">$47,000/Month</span>
      <br/>in Hidden Revenue Leaks
    </h1>

    <!-- Subheadline -->
    <p class="hero-subheadline">
      Most roofing companies lose 34% of potential revenue to slow responses, 
      junk leads, and missed opportunities. Calculate your exact leak in 60 seconds.
    </p>

    <!-- CTAs -->
    <div class="hero-ctas">
      <a href="#calculator" class="btn-primary btn-lg">
        Calculate My Revenue Leak
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#demo" class="btn-outline btn-lg">
        Watch 2-Min Demo
      </a>
    </div>

    <!-- Micro-commitment -->
    <p class="hero-micro font-mono">
      Takes 60 seconds · No email required · See results instantly
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
    <!-- Nav content here -->
  </nav>

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section class="hero" id="hero" aria-label="Hero section">
      <!-- Hero content here -->
    </section>

    <!-- Other sections... -->
  </main>

  <!-- Footer -->
  <footer class="footer">
    <!-- Footer content here -->
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