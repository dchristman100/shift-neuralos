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

    <div class="section-cta">
      <a href="#calculator" class="btn-primary btn-lg">
        Calculate My Revenue Leak
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