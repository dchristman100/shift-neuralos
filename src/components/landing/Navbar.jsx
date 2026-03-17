import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const MENU_SECTIONS = [
  {
    label: "Products",
    items: [
      { label: "ShiFt Attract", sub: "AI Lead Generation", href: "/AttractHome", color: "#FA982F", dot: true },
      { label: "ShiFt Convert", sub: "AI Lead Conversion", href: "/Home", color: "#F54A48", dot: true },
      { label: "NeuralOS Dashboard", sub: "Live Revenue Intelligence", href: "/NeuralOSDashboard", color: "#FFD700" },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Leak Detector", sub: "Find & fix revenue leaks", href: "/LeakDetector", color: "#F54A48" },
      { label: "Revenue Calculator", sub: "See your revenue opportunity", href: "/Home#calculator", color: "#FA982F" },
      { label: "Revenue Engine Plans", sub: "Activate · Amplify · Dominate", href: "/RevenueEnginePlans", color: "#FFD700" },
      { label: "Onboarding Setup", sub: "Connect CRM & go live", href: "/Onboarding", color: "#48BB78" },
    ],
  },
  {
    label: "Learn",
    items: [
      { label: "How It Works", sub: "The 3-stage process", href: "/HowItWorks", color: "#FA982F" },
      { label: "Revenue Leaks", sub: "The 3 leaks costing you money", href: "/RevenueLeaks", color: "#F54A48" },
      { label: "Results", sub: "$750K → $7M case study", href: "/Results", color: "#48BB78" },
      { label: "Case Studies", sub: "Contractor success stories", href: "/CaseStudies", color: "#48BB78" },
      { label: "Blog", sub: "Revenue intelligence insights", href: "/Blog", color: "#FA982F" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", sub: "Our mission & team", href: "/About", color: "#9DA3B4" },
      { label: "Features", sub: "Platform capabilities", href: "/Features", color: "#9DA3B4" },
      { label: "Integrations", sub: "CRM, calendar & ad platforms", href: "/Integrations", color: "#9DA3B4" },
      { label: "Contact", sub: "Get in touch", href: "/Contact", color: "#9DA3B4" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 sm:px-6 md:px-8"
        style={{
          height: "72px",
          background: scrolled ? "rgba(7,8,32,0.96)" : "rgba(7,8,32,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-[1140px] mx-auto flex items-center justify-between h-full">

          {/* LEFT — Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link
              to="/BrandHome"
              className="flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-display font-bold text-xl text-white">
                ShiFt<span style={{ color: "#F54A48" }}>.</span>
              </span>
              <span
                className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full font-mono font-semibold uppercase tracking-wider"
                style={{ fontSize: "9px", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700" }}
              >
                NeuralOS™
              </span>
            </Link>
          </div>

          {/* RIGHT — CTA */}
          <a
            href="https://makea.shiftnow.io/widget/bookings/reality"
            target="_blank"
            rel="noreferrer"
            className="font-mono font-bold uppercase tracking-wider transition-all"
            style={{
              fontSize: "11px",
              padding: "10px 22px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#F54A48,#FA982F)",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(245,74,72,0.3)",
            }}
          >
            Book a Call →
          </a>
        </div>
      </nav>

      {/* ── MEGA MENU DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(7,8,32,0.7)", backdropFilter: "blur(4px)" }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 z-[70] overflow-y-auto"
              style={{
                width: "min(420px, 92vw)",
                background: "#0A0C28",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-6 py-5 sticky top-0 z-10"
                style={{ background: "#0A0C28", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Link to="/BrandHome" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-white">
                    ShiFt<span style={{ color: "#F54A48" }}>.</span>
                  </span>
                  <span
                    className="font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ fontSize: "9px", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700" }}
                  >
                    NeuralOS™
                  </span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Sections */}
              <div className="px-6 py-6 space-y-8">
                {MENU_SECTIONS.map((section) => (
                  <div key={section.label}>
                    <div
                      className="font-mono uppercase tracking-widest mb-3"
                      style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em" }}
                    >
                      {section.label}
                    </div>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all group"
                          style={{ textDecoration: "none" }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                          <span
                            className="flex-shrink-0 w-2 h-2 rounded-full"
                            style={{ background: item.color, boxShadow: `0 0 6px ${item.color}80` }}
                          />
                          <div>
                            <div className="font-display font-bold text-white" style={{ fontSize: "14px" }}>
                              {item.label}
                            </div>
                            <div className="font-body" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                              {item.sub}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Bottom CTA */}
                <div
                  className="rounded-2xl p-5 text-center"
                  style={{ background: "linear-gradient(135deg,rgba(245,74,72,0.1),rgba(250,152,47,0.07))", border: "1px solid rgba(245,74,72,0.2)" }}
                >
                  <div className="font-display font-bold text-white mb-1" style={{ fontSize: "15px" }}>Ready to ShiFt?</div>
                  <div className="font-body mb-4" style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
                    Book a free 30-min revenue audit
                  </div>
                  <a
                    href="https://makea.shiftnow.io/widget/bookings/reality"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="font-mono font-bold uppercase tracking-wider block w-full py-3 rounded-xl"
                    style={{ fontSize: "11px", background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", textDecoration: "none", letterSpacing: "0.1em" }}
                  >
                    Book a Strategy Call →
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}