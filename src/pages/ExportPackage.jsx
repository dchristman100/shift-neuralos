import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileCode, Copy, CheckCircle2, ExternalLink } from "lucide-react";

export default function ExportPackage() {
  const [copied, setCopied] = useState(null);

  const files = [
    { name: "index.html", desc: "ShiFt Convert Homepage", path: "/export/index.html" },
    { name: "brand.html", desc: "ShiFt NeuralOS Brand Home", path: "/export/brand.html" },
    { name: "attract.html", desc: "ShiFt Attract Homepage", path: "/export/attract.html" },
    { name: "how-it-works.html", desc: "How It Works Page", path: "/export/how-it-works.html" },
    { name: "revenue-leaks.html", desc: "Revenue Leaks Page", path: "/export/revenue-leaks.html" },
    { name: "results.html", desc: "Results & Case Studies", path: "/export/results.html" },
    { name: "pricing.html", desc: "Pricing Page", path: "/export/pricing.html" },
    { name: "book.html", desc: "Booking Page", path: "/export/book.html" },
    { name: "about.html", desc: "About Us Page", path: "/export/about.html" },
    { name: "contact.html", desc: "Contact Page", path: "/export/contact.html" },
    { name: "platform.html", desc: "Platform Overview", path: "/export/platform.html" },
    { name: "styles.css", desc: "Complete CSS Stylesheet", path: "/export/styles.css" },
    { name: "script.js", desc: "Vanilla JavaScript", path: "/export/script.js" }
  ];

  const copyToClipboard = (text, fileName) => {
    navigator.clipboard.writeText(text);
    setCopied(fileName);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "120px" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6"
            style={{
              background: "rgba(245,74,72,0.08)",
              borderColor: "rgba(245,74,72,0.3)",
            }}>
            <FileCode className="w-5 h-5" style={{ color: "#F54A48" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>
              Elementor Export Package
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Static HTML Export Files
          </h1>
          
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Complete HTML, CSS, and JavaScript files ready for WordPress Elementor import. 
            Click any file below to view and copy the code.
          </p>
        </div>

        {/* Files Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {files.map((file) => (
            <a
              key={file.name}
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl p-6 transition-all hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-mono text-white font-bold mb-1">{file.name}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{file.desc}</p>
                </div>
                <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: "#FA982F" }} />
              </div>
            </a>
          ))}
        </div>

        {/* Instructions */}
        <div className="rounded-2xl p-8 mb-8" style={{
          background: "linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.05))",
          border: "1px solid rgba(245,74,72,0.2)"
        }}>
          <h2 className="font-display text-2xl font-bold text-white mb-6">Elementor Import Instructions</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" 
                style={{ background: "rgba(245,74,72,0.2)", color: "#F54A48" }}>1</div>
              <div>
                <h4 className="text-white font-bold mb-1">Open Each HTML File</h4>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>Click on each .html file above to view the complete code</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" 
                style={{ background: "rgba(245,74,72,0.2)", color: "#F54A48" }}>2</div>
              <div>
                <h4 className="text-white font-bold mb-1">Copy the HTML Code</h4>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>Select all code and copy to your clipboard</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" 
                style={{ background: "rgba(245,74,72,0.2)", color: "#F54A48" }}>3</div>
              <div>
                <h4 className="text-white font-bold mb-1">Import to Elementor</h4>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>Create a new page in WordPress, use Elementor → HTML widget, paste code</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" 
                style={{ background: "rgba(245,74,72,0.2)", color: "#F54A48" }}>4</div>
              <div>
                <h4 className="text-white font-bold mb-1">Add CSS & JS</h4>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>Copy styles.css to WordPress Customizer → Additional CSS, and script.js to footer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "✓", title: "SEO Optimized", desc: "Schema markup, meta tags, semantic HTML" },
            { icon: "✓", title: "Fully Responsive", desc: "Mobile-first design, works on all devices" },
            { icon: "✓", title: "Accessible", desc: "WCAG 2.1 AA compliant, ARIA labels" },
            { icon: "✓", title: "Fast Loading", desc: "Optimized CSS, minimal JavaScript" },
            { icon: "✓", title: "Clean Code", desc: "Valid HTML5, organized CSS classes" },
            { icon: "✓", title: "Brand Compliant", desc: "ShiFt design system implemented" }
          ].map((feature, i) => (
            <div key={i} className="rounded-xl p-6" style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)"
            }}>
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}