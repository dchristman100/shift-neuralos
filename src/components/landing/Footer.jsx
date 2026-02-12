import React from "react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Case Studies"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "Help Center", "API", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer id="footer" aria-label="Footer navigation and information" className="relative px-5 sm:px-6 md:px-8 pt-16 pb-8 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-xl text-white mb-3">
              ShiFt<span className="shift-gradient-text">.</span>
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
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
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