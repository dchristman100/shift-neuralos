import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Revenue Engine Plans", href: "/RevenueEnginePlans" },
    { label: "Dashboard", href: "/NeuralOSDashboard" },
    { label: "Platform", href: "/Platform" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

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

          {/* Logo */}
          <Link to="/BrandHome" className="flex items-center gap-2 flex-shrink-0">
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

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT — Product Pills + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 p-1 rounded-lg"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Link
                to="/AttractHome"
                className="flex items-center gap-2 px-3 py-2 rounded-md font-mono text-[11px] font-semibold uppercase tracking-wider transition-all"
                style={{ color: "#9DA3B4", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FA982F" }} />
                Attract
              </Link>
              <Link
                to="/Home"
                className="flex items-center gap-2 px-3 py-2 rounded-md font-mono text-[11px] font-semibold uppercase tracking-wider transition-all"
                style={{ color: "#9DA3B4", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F54A48" }} />
                Convert
              </Link>
            </div>

            <a
              href="https://makea.shiftnow.io/widget/bookings/reality"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "11px",
                padding: "10px 20px",
                borderRadius: "10px",
                background: "linear-gradient(135deg,#F54A48,#FA982F)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                boxShadow: "0 4px 16px rgba(245,74,72,0.3)",
              }}
            >
              Book a Call →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(7,8,32,0.7)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 z-[70] overflow-y-auto"
              style={{ width: "min(380px, 90vw)", background: "#0A0C28", borderRight: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center justify-between px-6 py-5 sticky top-0"
                style={{ background: "#0A0C28", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <Link to="/BrandHome" onClick={() => setMobileOpen(false)} className="font-display font-bold text-lg text-white">
                  ShiFt<span style={{ color: "#F54A48" }}>.</span>
                </Link>
                <button onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)}
                    className="font-display text-xl font-semibold text-white" style={{ textDecoration: "none" }}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-3 pt-2">
                  <Link to="/AttractHome" onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ background: "rgba(250,152,47,0.1)", border: "1px solid rgba(250,152,47,0.3)", color: "#FA982F", textDecoration: "none" }}>
                    Attract
                  </Link>
                  <Link to="/Home" onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider"
                    style={{ background: "rgba(245,74,72,0.1)", border: "1px solid rgba(245,74,72,0.3)", color: "#F54A48", textDecoration: "none" }}>
                    Convert
                  </Link>
                </div>
                <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" rel="noreferrer"
                  className="block text-center py-3 rounded-xl font-mono font-bold uppercase tracking-wider mt-2"
                  style={{ background: "linear-gradient(135deg,#F54A48,#FA982F)", color: "#fff", textDecoration: "none", fontSize: "12px" }}>
                  Book a Strategy Call →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}