import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../shared/GradientButton";
import CombinedROICalculator from "./CombinedROICalculator";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const navLinks = [
  { label: "Revenue Engine Plans", href: "/RevenueEnginePlans" },
  { label: "Dashboard Preview", href: "/NeuralOSDashboard" },
  { label: "Platform", href: "/Platform" },
  { label: "Roofing", href: "/Roofing" },
];

const aboutMenu = [
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export default function BrandNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
            ShiFt<span style={{ color: "#FFD700" }}>.</span><span className="shift-gradient-text" style={{ fontSize: "14px", fontWeight: 500 }}> NeuralOS™</span>
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

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="font-body text-sm text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-200 flex items-center gap-1"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                About
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg"
                    style={{
                      background: "rgba(13, 15, 51, 0.95)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)"
                    }}
                  >
                    <div className="py-2">
                      {aboutMenu.map((item) => (
                        <Link
                          key={item.label}
                          to={createPageUrl(item.href.replace("/", ""))}
                          className="block px-4 py-2 font-body text-sm text-[rgba(255,255,255,0.55)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Right Side - Product Pills + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Product Pills - Neither active for brand home */}
            <div className="flex items-center gap-1 rounded-lg p-1"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)"
              }}>
              <Link
                to={createPageUrl("AttractHome")}
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
                style={{
                  color: "#9DA3B4",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                Attract
              </Link>
              <Link
                to={createPageUrl("Home")}
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
                style={{
                  color: "#9DA3B4",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                Convert
              </Link>
            </div>
            
            <CombinedROICalculator />
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

              {/* Mobile About Menu */}
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="font-display text-2xl font-semibold text-white flex items-center gap-2 w-full"
                >
                  About
                  <ChevronDown className={`w-5 h-5 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pl-4 flex flex-col gap-3"
                    >
                      {aboutMenu.slice(1).map((item) => (
                        <Link
                          key={item.label}
                          to={createPageUrl(item.href.replace("/", ""))}
                          onClick={() => {
                            setMobileOpen(false);
                            setAboutOpen(false);
                          }}
                          className="font-body text-lg text-[rgba(255,255,255,0.65)] hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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