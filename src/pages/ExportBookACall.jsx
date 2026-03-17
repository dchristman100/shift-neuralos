import React, { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check, FileCode } from "lucide-react";

const BOOK_HERO_HTML = `<!-- BOOK A CALL — HERO SECTION -->
<section style="padding:120px 24px 60px;text-align:center;position:relative;overflow:hidden;">
  <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(245,74,72,0.1),transparent 70%);pointer-events:none;"></div>
  <div style="position:relative;max-width:700px;margin:0 auto;">
    <div style="display:inline-flex;align-items:center;gap:10px;padding:10px 20px;border-radius:999px;background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.3);margin-bottom:24px;">
      <span class="font-mono" style="font-size:.7rem;color:#F54A48;text-transform:uppercase;letter-spacing:.2em;">Reality Session</span>
    </div>
    <h1 class="font-display" style="font-size:clamp(2rem,5vw,3.5rem);font-weight:800;color:white;line-height:1.1;margin-bottom:20px;">
      Book Your <span class="shift-gradient-text">15-Minute Reality Session</span>
    </h1>
    <p style="font-size:1.1rem;color:rgba(255,255,255,.6);max-width:560px;margin:0 auto 12px;line-height:1.7;">
      We'll calculate your exact revenue leak, show you the fix, and give you a roadmap — in 15 minutes flat.
    </p>
    <p class="font-mono" style="font-size:.75rem;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.1em;margin-bottom:40px;">No pressure · No sales pitch · Just your real number</p>
  </div>
</section>`;

const BOOK_WIDGET_HTML = `<!-- BOOKING CALENDAR WIDGET EMBED -->
<section style="padding:0 24px 40px;">
  <div style="max-width:900px;margin:0 auto;">
    <!-- Booking widget embed — replace with your calendar URL -->
    <div style="border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);min-height:700px;">
      <iframe
        src="https://makea.shiftnow.io/widget/bookings/reality"
        width="100%"
        height="700"
        frameborder="0"
        style="border:none;display:block;border-radius:20px;"
        title="Book a Reality Session with ShiFt"
      ></iframe>
    </div>
  </div>
</section>`;

const BOOK_WHAT_TO_EXPECT_HTML = `<!-- WHAT TO EXPECT SECTION -->
<section style="padding:40px 24px 80px;">
  <div style="max-width:800px;margin:0 auto;text-align:center;">
    <h2 class="font-display" style="font-size:1.75rem;font-weight:800;color:white;margin-bottom:40px;">What Happens on the Call</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;text-align:left;">
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:28px 24px;">
        <div class="font-mono" style="font-size:.65rem;color:#F54A48;text-transform:uppercase;letter-spacing:.15em;margin-bottom:12px;">Minute 1–5</div>
        <h3 class="font-display" style="font-size:1rem;font-weight:700;color:white;margin-bottom:8px;">Revenue Leak Audit</h3>
        <p style="font-size:.875rem;color:rgba(255,255,255,.55);line-height:1.6;">We calculate your exact monthly leak from missed calls, junk leads, and invisible buyers.</p>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:28px 24px;">
        <div class="font-mono" style="font-size:.65rem;color:#FA982F;text-transform:uppercase;letter-spacing:.15em;margin-bottom:12px;">Minute 6–10</div>
        <h3 class="font-display" style="font-size:1rem;font-weight:700;color:white;margin-bottom:8px;">Live System Demo</h3>
        <p style="font-size:.875rem;color:rgba(255,255,255,.55);line-height:1.6;">We show you your NeuralOS dashboard preview and how AI handles your actual lead scenarios.</p>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:28px 24px;">
        <div class="font-mono" style="font-size:.65rem;color:#48BB78;text-transform:uppercase;letter-spacing:.15em;margin-bottom:12px;">Minute 11–15</div>
        <h3 class="font-display" style="font-size:1rem;font-weight:700;color:white;margin-bottom:8px;">Your Revenue Roadmap</h3>
        <p style="font-size:.875rem;color:rgba(255,255,255,.55);line-height:1.6;">You leave with a clear plan: which package fits, what ROI to expect, and what happens next.</p>
      </div>
    </div>
  </div>
</section>`;

const BOOK_FULL_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Book a 15-minute Reality Session with ShiFt. We'll calculate your revenue leak and show you the fix.">
  <title>Book a Strategy Call — ShiFt Convert</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* 1. PASTE GLOBAL CSS (from ExportBrandNeuralOS) */
    /* 2. PASTE NAV CSS (from ExportBrandNeuralOS) */
    /* 3. PASTE FOOTER CSS (from ExportBrandNeuralOS) */
  </style>
</head>
<body>
  <!-- PASTE CONVERT NAV HTML HERE -->
  <main style="padding-top:72px;">
    <!-- PASTE BOOK HERO HTML HERE -->
    <!-- PASTE BOOKING WIDGET HTML HERE -->
    <!-- PASTE WHAT TO EXPECT HTML HERE -->
  </main>
  <!-- PASTE FOOTER HTML HERE -->
  <script>/* PASTE NAV JS HERE */</script>
</body>
</html>`;

const sections = [
  { id: "book-hero", title: "1. Book a Call Hero", items: [{ label: "HTML", code: BOOK_HERO_HTML }] },
  { id: "book-widget", title: "2. Booking Calendar Widget Embed", items: [{ label: "HTML", code: BOOK_WIDGET_HTML }] },
  { id: "book-expect", title: "3. What to Expect on the Call", items: [{ label: "HTML", code: BOOK_WHAT_TO_EXPECT_HTML }] },
  { id: "book-full", title: "4. Full Page Template (Assembly Guide)", items: [{ label: "HTML", code: BOOK_FULL_PAGE }] },
];

export default function ExportBookACall() {
  const [expanded, setExpanded] = useState({});
  const [copied, setCopied] = useState(null);
  const toggle = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));
  const copy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border mb-6" style={{ background: "rgba(245,74,72,0.08)", borderColor: "rgba(245,74,72,0.3)" }}>
            <FileCode className="w-5 h-5" style={{ color: "#F54A48" }} />
            <span className="font-mono text-sm tracking-widest uppercase" style={{ color: "#F54A48" }}>Export — Book a Call</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Book a Call Export</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>HTML for the Convert booking page — hero, calendar widget embed, and what-to-expect section.</p>
        </div>

        <div className="space-y-4">
          {sections.map((sec) => (
            <div key={sec.id} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <button onClick={() => toggle(sec.id)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <h3 className="font-display text-lg font-bold text-white">{sec.title}</h3>
                {expanded[sec.id] ? <ChevronDown className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
              </button>
              {expanded[sec.id] && (
                <div className="p-6 pt-0 space-y-6">
                  {sec.items.map((item) => {
                    const copyId = `${sec.id}-${item.label}`;
                    return (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-sm font-bold uppercase tracking-wider" style={{ color: "#F54A48" }}>{item.label}</span>
                          <button onClick={() => copy(item.code, copyId)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: copied === copyId ? "#48BB78" : "rgba(255,255,255,0.6)" }}>
                            {copied === copyId ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied === copyId ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        <pre className="rounded-lg p-4 overflow-x-auto text-sm" style={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", color: "#E2E8F0", maxHeight: "400px" }}>
                          <code>{item.code}</code>
                        </pre>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}