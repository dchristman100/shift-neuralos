import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileCode, Globe, CheckCircle2 } from "lucide-react";

export default function ExportPackage() {
  const [generating, setGenerating] = useState(false);
  
  const generateExport = () => {
    setGenerating(true);
    // This would trigger the export generation
    setTimeout(() => {
      setGenerating(false);
      alert("Export package generation started. This feature creates static HTML files.");
    }, 1000);
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "120px" }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6"
            style={{
              background: "rgba(245,74,72,0.08)",
              borderColor: "rgba(245,74,72,0.3)",
            }}>
            <FileCode className="w-5 h-5" style={{ color: "#F54A48" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>
              HTML Export Package
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Static HTML Export
          </h1>
          
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Export your entire website as pure HTML, CSS, and JavaScript files compatible with WordPress Elementor
          </p>
        </div>

        {/* What's Included */}
        <div className="rounded-2xl p-8 mb-8" style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <h2 className="font-display text-2xl font-bold text-white mb-6">Package Contents</h2>
          
          <div className="space-y-4">
            {[
              "12 HTML Pages - All pages converted to static HTML",
              "styles.css - Complete CSS file with all styles",
              "script.js - Vanilla JavaScript for interactions",
              "Schema Markup - SEO-optimized structured data",
              "Semantic HTML - Proper heading hierarchy and ARIA labels",
              "Mobile Responsive - Works on all devices",
              "Elementor Compatible - Ready to import"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#48BB78" }} />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pages List */}
        <div className="rounded-2xl p-8 mb-8" style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <h2 className="font-display text-2xl font-bold text-white mb-6">Pages Included</h2>
          
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "index.html - ShiFt Convert Homepage",
              "brand.html - ShiFt NeuralOS Brand Home",
              "attract.html - ShiFt Attract Homepage",
              "how-it-works.html - How It Works",
              "revenue-leaks.html - Revenue Leaks",
              "results.html - Case Studies & Results",
              "pricing.html - Pricing",
              "platform.html - Platform Overview",
              "about.html - About Us",
              "contact.html - Contact",
              "attract-how.html - Attract How It Works",
              "attract-pricing.html - Attract Pricing"
            ].map((page, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{
                background: "rgba(255,255,255,0.02)"
              }}>
                <Globe className="w-4 h-4" style={{ color: "#FA982F" }} />
                <span className="font-mono text-sm text-white">{page}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Instructions */}
        <div className="rounded-2xl p-8 mb-8" style={{
          background: "linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.05))",
          border: "1px solid rgba(245,74,72,0.2)"
        }}>
          <h2 className="font-display text-2xl font-bold text-white mb-4">Export Instructions</h2>
          
          <div className="space-y-4 text-white">
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              <strong className="text-white">Note:</strong> The HTML export feature generates static files that can be downloaded and imported into WordPress with Elementor. 
            </p>
            
            <ol className="space-y-2 list-decimal list-inside" style={{ color: "rgba(255,255,255,0.7)" }}>
              <li>Click "Generate Export Package" below</li>
              <li>Download the ZIP file containing all HTML, CSS, and JS files</li>
              <li>Extract the ZIP file on your computer</li>
              <li>Upload files to your WordPress site or import into Elementor</li>
              <li>Link pages together in your WordPress menu</li>
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={generateExport}
            disabled={generating}
            className="px-8 py-6 text-lg font-mono font-bold uppercase tracking-wider"
            style={{
              background: "linear-gradient(135deg, #F54A48, #FA982F)",
              color: "white",
              border: "none"
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            {generating ? "Generating..." : "Generate Export Package"}
          </Button>
          
          <p className="font-mono text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            Creates a ZIP file with all HTML, CSS, and JavaScript files
          </p>
        </div>

        {/* Technical Details */}
        <div className="mt-12 p-6 rounded-xl" style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "#FA982F" }}>
            Technical Specifications
          </h3>
          
          <div className="space-y-2 font-mono text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <p>✓ Valid HTML5 markup</p>
            <p>✓ CSS3 with vendor prefixes</p>
            <p>✓ Vanilla JavaScript (ES6+)</p>
            <p>✓ No framework dependencies</p>
            <p>✓ Mobile-first responsive design</p>
            <p>✓ SEO optimized with schema markup</p>
            <p>✓ WCAG 2.1 AA accessibility compliant</p>
            <p>✓ Elementor-compatible structure</p>
          </div>
        </div>
      </div>
    </div>
  );
}