import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const footerLinks = {
  Product: [
    { label: "Features", to: "Features" },
    { label: "Revenue Engine Plans", to: "RevenueEnginePlans" },
    { label: "Integrations", to: "Integrations" },
    { label: "Case Studies", to: "CaseStudies" },
  ],
  Company: [
    { label: "About", to: "About" },
    { label: "Careers", to: "Careers" },
    { label: "Blog", to: "Blog" },
    { label: "Contact", to: "Contact" },
  ],
  Legal: [
    { label: "Privacy Policy", to: null },
    { label: "Terms of Service", to: null },
    { label: "Cookie Policy", to: null },
  ],
};

export default function Footer({ dotColor = "#FFD700" }) {
  return (
    <footer id="footer" aria-label="Footer navigation and information" className="relative px-5 sm:px-6 md:px-8 pt-16 pb-8 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-xl text-white mb-3">
              ShiFt<span style={{ color: dotColor }}>.</span>
            </div>
            <p className="font-body text-sm text-[rgba(255,255,255,0.4)] leading-relaxed">
              The AI Revenue Operating System for roofing contractors.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs tracking-[0.15em] uppercase text-[rgba(255,255,255,0.5)] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={createPageUrl(link.to)}
                        className="font-body text-sm text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="font-body text-sm text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[rgba(255,255,255,0.25)]">
            © {new Date().getFullYear()} ShiFt NeuralOS™. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-[rgba(255,255,255,0.2)] uppercase">
            AI Revenue Operating System
          </p>
        </div>
      </div>
    </footer>
  );
}