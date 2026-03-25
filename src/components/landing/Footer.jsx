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
    { label: "Privacy Policy", to: "PrivacyPolicy" },
    { label: "Terms of Service", to: "TermsOfService" },
    { label: "Cookie Policy", to: "CookiePolicy" },
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
            <p className="font-body text-sm text-[rgba(255,255,255,0.4)] leading-relaxed mb-3">
              The AI Revenue Operating System for roofing contractors.
            </p>
            <address className="not-italic font-body text-sm text-[rgba(255,255,255,0.4)] leading-relaxed mb-4">
              <a href="tel:+17077443866" className="hover:text-white transition-colors duration-200 block">(707) 744-3866</a>
              <span className="block">12460 Crabapple Rd, Ste. 202-522</span>
              <span className="block">Alpharetta, GA 30004</span>
            </address>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ShiFtAlwaysOn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShiFt on Facebook"
                className="text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
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