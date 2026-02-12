import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const navLinks = [
  { label: "Platform", href: "/Platform" },
  { label: "Roofing", href: "/Roofing" },
  { label: "Resources", href: "/Resources" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export default function BrandNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 sm:px-6 md:px-8"
        style={{
          height: "72px",
          background: scrolled ? "rgba(7,8,32,0.92)" : "rgba(7,8,32,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-[1140px] mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <Link to={createPageUrl("BrandHome")} className="font-display font-bold text-xl text-white">
            ShiFt<span className="shift-gradient-text"> NeuralOS™</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={createPageUrl(link.href.replace("/", ""))}
                className="font-body text-sm text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side - Product Pills + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Product Pills - Neither active for brand home */}
            <div className="flex items-center gap-1 rounded-lg p-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)"
              }}>
              <a
                href="https://attract.shiftnow.io"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
                style={{
                  color: "#9DA3B4",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                Attract
              </a>
              <a
                href="https://go.shiftnow.io"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
                style={{
                  color: "#9DA3B4",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                Convert
              </a>
            </div>
            
            <GradientButton size="sm">Find Your Gap</GradientButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 px-5 pb-8"
            style={{ background: "rgba(7,8,32,0.97)" }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={createPageUrl(link.href.replace("/", ""))}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl font-semibold text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <GradientButton size="lg" className="w-full">
                  Find Your Gap
                </GradientButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}