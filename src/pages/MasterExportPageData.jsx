// ═══════════════════════════════════════════════════════════════════════════
// MASTER EXPORT — ALL PAGE HTML CONSTANTS
// Extracted from live React components — March 2026
// ═══════════════════════════════════════════════════════════════════════════

export const HOW_IT_WORKS_HTML = `<!-- HOW IT WORKS PAGE (/HowItWorks) — ShiFt Convert -->
<!-- Use Convert Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <!-- Hero -->
  <section style="padding:80px 24px 40px;text-align:center;max-width:1140px;margin:0 auto;">
    <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
      How ShiFt Convert <span class="shift-gradient-text">Plugs Your Revenue Leaks</span>
    </h1>
    <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);max-width:700px;margin:0 auto 56px;">
      From first contact to booked appointment—without lifting a finger
    </p>
    <!-- Flow diagram -->
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;margin-bottom:80px;">
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 24px;font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:white;">Lead Arrives</div>
      <span style="color:rgba(255,255,255,0.3);font-size:1.25rem;">→</span>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 24px;font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:white;">AI Responds (30 sec)</div>
      <span style="color:rgba(255,255,255,0.3);font-size:1.25rem;">→</span>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 24px;font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:white;">AI Qualifies</div>
      <span style="color:rgba(255,255,255,0.3);font-size:1.25rem;">→</span>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px 24px;font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:white;">AI Books</div>
      <span style="color:rgba(255,255,255,0.3);font-size:1.25rem;">→</span>
      <div style="background:linear-gradient(135deg,rgba(245,74,72,0.12),rgba(250,152,47,0.12));border:1px solid rgba(245,74,72,0.3);border-radius:10px;padding:12px 24px;font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:#F54A48;">You Close</div>
    </div>
  </section>

  <!-- Stage 1: Capture -->
  <section style="padding:80px 24px;background:#0D0F33;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;">
      <div>
        <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Stage 1</div>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:900;color:white;margin-bottom:24px;">Instant Capture</h2>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);margin-bottom:32px;line-height:1.7;">Every lead that comes in—phone, web form, text, Facebook—gets an instant AI response in under 30 seconds. No voicemail. No "we'll call you back." Just immediate engagement.</p>
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${["Phone calls","Web forms","Text messages","Facebook Messenger","Google Ads"].map(ch => `<div style="display:flex;align-items:center;gap:12px;"><span style="color:#F54A48;font-size:1.25rem;">⚡</span><span style="color:rgba(255,255,255,0.7);">${ch}</span></div>`).join("")}
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:64px;display:flex;align-items:center;justify-content:center;min-height:320px;">
        <span style="font-size:120px;opacity:0.2;">📞</span>
      </div>
    </div>
  </section>

  <!-- Stage 2: Qualify -->
  <section style="padding:80px 24px;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;">
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;min-height:320px;">
        <div style="font-family:'Montserrat Alternates',sans-serif;font-size:1.25rem;font-weight:700;color:white;margin-bottom:20px;">Sample AI Questions:</div>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:12px;">
          ${['"What type of roofing service do you need?"','"When did you notice the issue?"','"Is this for insurance or out-of-pocket?"','"What\'s your timeframe for getting this done?"'].map(q => `<li style="font-size:.875rem;color:rgba(255,255,255,0.7);padding-left:16px;border-left:2px solid #FA982F;">• ${q}</li>`).join("")}
        </ul>
      </div>
      <div>
        <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(250,152,47,0.12);border:1px solid rgba(250,152,47,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#FA982F;margin-bottom:24px;">Stage 2</div>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:900;color:white;margin-bottom:24px;">AI Qualification</h2>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);line-height:1.7;">Our AI asks the right questions to separate high-intent buyers from tire kickers. Lead scoring happens in real-time, so your sales team only talks to qualified prospects.</p>
      </div>
    </div>
  </section>

  <!-- Stage 3: Convert -->
  <section style="padding:80px 24px;background:#0D0F33;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;">
      <div>
        <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(72,187,120,0.12);border:1px solid rgba(72,187,120,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#48BB78;margin-bottom:24px;">Stage 3</div>
        <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:900;color:white;margin-bottom:24px;">Automated Booking</h2>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);margin-bottom:32px;line-height:1.7;">Qualified leads get booked instantly onto your calendar. No back-and-forth emails. No phone tag. Just confirmed appointments with automated reminders and follow-ups.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;"><div class="font-display" style="font-size:2rem;font-weight:900;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">3.2x</div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);">More appointments booked</div></div>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;"><div class="font-display" style="font-size:2rem;font-weight:900;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">89%</div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);">Average show rate</div></div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:64px;display:flex;align-items:center;justify-content:center;min-height:320px;">
        <span style="font-size:120px;opacity:0.2;">📅</span>
      </div>
    </div>
  </section>

  <!-- Integrations -->
  <section style="padding:80px 24px;">
    <div style="max-width:1140px;margin:0 auto;text-align:center;">
      <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:800;color:white;margin-bottom:16px;">Works With Your Existing Tools</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);max-width:600px;margin:0 auto 48px;line-height:1.7;">Setup in 24 hours, not 24 days. ShiFt integrates seamlessly with the tools you already use.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;margin-bottom:48px;">
        ${["GoHighLevel","Calendly","Google Calendar","Zapier","Slack","HubSpot","Salesforce","Zoom"].map(t => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;font-family:'Montserrat Alternates',sans-serif;font-weight:600;color:white;font-size:.875rem;">${t}</div>`).join("")}
      </div>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary">See It in Action →</a>
    </div>
  </section>
</main>`;

export const REVENUE_LEAKS_HTML = `<!-- REVENUE LEAKS PAGE (/RevenueLeaks) — ShiFt Convert -->
<!-- Use Convert Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <!-- Hero -->
  <section style="padding:80px 24px 40px;text-align:center;max-width:1140px;margin:0 auto;">
    <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
      The Three Revenue Leaks <span class="shift-gradient-text">Draining Your Business</span>
    </h1>
    <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);max-width:700px;margin:0 auto;">You're losing $35K-$100K+ every month. Here's exactly where.</p>
  </section>

  <!-- Leak 1: Missed Calls -->
  <section style="padding:80px 24px;background:#0D0F33;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:start;">
      <div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
          <div style="width:64px;height:64px;border-radius:14px;background:rgba(245,74,72,0.12);display:flex;align-items:center;justify-content:center;font-size:28px;">📞</div>
          <div><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,0.5);">Leak #1</div><h2 class="font-display" style="font-size:1.75rem;font-weight:700;color:white;">Missed Calls</h2></div>
        </div>
        <h3 class="font-display" style="font-size:clamp(1.75rem,4vw,2.5rem);font-weight:900;color:white;margin-bottom:24px;">42% of Leads Call After Hours</h3>
        <p style="font-size:1rem;color:rgba(255,255,255,0.6);margin-bottom:24px;line-height:1.7;">Your phone rings at 6:47 PM. A homeowner with hail damage wants an inspection. They leave a voicemail. You call back at 9 AM the next day. Too late—your competitor already booked them at 7:12 PM.</p>
        <div style="background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.2);border-radius:16px;padding:24px;margin-bottom:24px;">
          <div class="font-display" style="font-size:2.5rem;font-weight:900;color:#F54A48;margin-bottom:6px;">$12K-$35K</div>
          <div style="color:rgba(255,255,255,0.7);">Average monthly revenue lost to missed calls</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;gap:12px;"><span style="color:#F54A48;">📊</span><div><div style="font-size:.7rem;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,0.4);margin-bottom:4px;">Industry Stat</div><div style="color:rgba(255,255,255,0.7);">78% of buyers choose the first responder</div></div></div>
          <div style="display:flex;gap:12px;"><span style="color:#F54A48;">📉</span><div><div style="font-size:.7rem;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,0.4);margin-bottom:4px;">Your Reality</div><div style="color:rgba(255,255,255,0.7);">Average callback time: 4.2 hours</div></div></div>
          <div style="display:flex;gap:12px;"><span style="color:#F54A48;">💰</span><div><div style="font-size:.7rem;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,0.4);margin-bottom:4px;">Cost Per Miss</div><div style="color:rgba(255,255,255,0.7);">$2,400-$8,500 per missed call</div></div></div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,0.5);margin-bottom:24px;">Calculate Your Missed Call Cost</div>
        <div style="display:flex;flex-direction:column;gap:20px;">
          <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Monthly incoming calls</label><input type="number" placeholder="100" style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;" /></div>
          <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Average job value</label><input type="number" placeholder="12000" style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;" /></div>
          <div style="background:linear-gradient(135deg,rgba(245,74,72,0.12),rgba(250,152,47,0.12));border:1px solid rgba(245,74,72,0.3);border-radius:12px;padding:20px;"><div style="font-size:.875rem;color:rgba(255,255,255,0.7);margin-bottom:8px;">Estimated monthly loss:</div><div class="font-display" style="font-size:2rem;font-weight:900;color:#F54A48;">$28,400</div></div>
          <a href="https://shiftnow.io/Calculator" class="btn-primary" style="text-align:center;">Get Full Revenue Audit</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Leak 2: Junk Leads -->
  <section style="padding:80px 24px;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:start;">
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;">
        <div class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:20px;">The Hidden Cost of Bad Leads</div>
        <div style="display:flex;flex-direction:column;gap:0;">
          ${[["Lead cost","$45-$250 per lead"],["Sales team time","2.5 hrs per junk lead"],["Qualification rate","Only 27% are qualified"],["Close rate on junk","2%"]].map(([l,v]) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span style="font-size:.875rem;color:rgba(255,255,255,0.6);">${l}</span><span style="font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:#FA982F;">${v}</span></div>`).join("")}
        </div>
      </div>
      <div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
          <div style="width:64px;height:64px;border-radius:14px;background:rgba(250,152,47,0.12);display:flex;align-items:center;justify-content:center;font-size:28px;">🗑️</div>
          <div><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,0.5);">Leak #2</div><h2 class="font-display" style="font-size:1.75rem;font-weight:700;color:white;">Junk Leads</h2></div>
        </div>
        <h3 class="font-display" style="font-size:clamp(1.75rem,4vw,2.5rem);font-weight:900;color:white;margin-bottom:24px;">You're Paying for Leads That Will Never Buy</h3>
        <p style="font-size:1rem;color:rgba(255,255,255,0.6);margin-bottom:24px;line-height:1.7;">Tire kickers. Price shoppers. People "just looking." Your sales team wastes hours chasing leads that were never going to convert. Meanwhile, real buyers slip through.</p>
        <div style="background:rgba(250,152,47,0.08);border:1px solid rgba(250,152,47,0.2);border-radius:16px;padding:24px;margin-bottom:24px;">
          <div class="font-display" style="font-size:2.5rem;font-weight:900;color:#FA982F;margin-bottom:6px;">$8K-$25K</div>
          <div style="color:rgba(255,255,255,0.7);">Average monthly cost of junk leads</div>
        </div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;">
          <p style="font-size:.875rem;font-style:italic;color:rgba(255,255,255,0.6);margin-bottom:12px;">"We were spending $6,500/month on leads. Only 18 out of 120 were actually qualified. ShiFt's AI filters out the garbage before it hits my team."</p>
          <div style="font-family:'Montserrat Alternates',sans-serif;font-size:.875rem;font-weight:600;color:white;">Michael R.</div>
          <div style="font-size:.75rem;color:rgba(255,255,255,0.4);">Storm Pros Roofing, Houston TX</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Leak 3: Invisible Buyers -->
  <section style="padding:80px 24px;background:#0D0F33;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:start;">
      <div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
          <div style="width:64px;height:64px;border-radius:14px;background:rgba(72,187,120,0.12);display:flex;align-items:center;justify-content:center;font-size:28px;">👻</div>
          <div><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,0.5);">Leak #3</div><h2 class="font-display" style="font-size:1.75rem;font-weight:700;color:white;">Invisible Buyers</h2></div>
        </div>
        <h3 class="font-display" style="font-size:clamp(1.75rem,4vw,2.5rem);font-weight:900;color:white;margin-bottom:24px;">High-Intent Buyers You Never See</h3>
        <p style="font-size:1rem;color:rgba(255,255,255,0.6);margin-bottom:24px;line-height:1.7;">They check your website at 11 PM. They read reviews. They're ready to buy. But they don't fill out a form or leave a voicemail. By morning, they've booked with someone who responded faster.</p>
        <div style="background:rgba(72,187,120,0.08);border:1px solid rgba(72,187,120,0.2);border-radius:16px;padding:24px;margin-bottom:24px;">
          <div class="font-display" style="font-size:2.5rem;font-weight:900;color:#48BB78;margin-bottom:6px;">$15K-$40K</div>
          <div style="color:rgba(255,255,255,0.7);">Average monthly revenue from invisible buyers</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;"><div class="font-display" style="font-size:1.5rem;font-weight:900;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:4px;">67%</div><div style="font-size:.75rem;color:rgba(255,255,255,0.6);">of website visitors never contact you</div></div>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;"><div class="font-display" style="font-size:1.5rem;font-weight:900;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:4px;">4.2 hrs</div><div style="font-size:.75rem;color:rgba(255,255,255,0.6);">industry average response time</div></div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;">
        <div class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:12px;">The Monopoly Window</div>
        <p style="font-size:.875rem;color:rgba(255,255,255,0.6);margin-bottom:24px;line-height:1.7;">Research shows you have a 5-minute window to capture a hot lead before they move on. After 5 minutes, odds of conversion drop 80%.</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${[["0-5 min","Close rate: 78%",true],["5-30 min","Close rate: 42%",false],["30-60 min","Close rate: 18%",false],["1-4 hours","Close rate: 7%",false],["4+ hours","Close rate: 2%",false]].map(([t,r,hi]) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-radius:10px;background:${hi ? "rgba(72,187,120,0.12)" : "rgba(255,255,255,0.02)"};border:1px solid ${hi ? "rgba(72,187,120,0.3)" : "rgba(255,255,255,0.06)"};"><span style="font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;color:${hi ? "#48BB78" : "rgba(255,255,255,0.7)"};">${t}</span><span style="font-size:.875rem;color:${hi ? "#48BB78" : "rgba(255,255,255,0.5)"};">${r}</span></div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="padding:80px 24px;text-align:center;">
    <div style="max-width:700px;margin:0 auto;">
      <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:800;color:white;margin-bottom:20px;">Ready to Plug These Leaks?</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);margin-bottom:36px;line-height:1.7;">See exactly how much revenue you're losing—and how much ShiFt can recover.</p>
      <a href="https://shiftnow.io/Calculator" class="btn-primary" style="padding:18px 40px;font-size:1rem;">Calculate My Revenue Leak →</a>
    </div>
  </section>
</main>`;

export const RESULTS_HTML = `<!-- RESULTS PAGE (/Results) — ShiFt Convert — Titan Roofing Case Study -->
<!-- Use Convert Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <!-- Hero -->
  <section style="padding:80px 24px 40px;text-align:center;max-width:1140px;margin:0 auto;">
    <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Case Study</div>
    <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
      From $750K to $7M in <span class="shift-gradient-text">6 Years</span>
    </h1>
    <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);max-width:700px;margin:0 auto;">How Titan Roofing Services went from missing half their leads to dominating Dallas</p>
  </section>

  <!-- Stats -->
  <section style="padding:60px 24px;background:#0D0F33;">
    <div style="max-width:1140px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:24px;">
      ${[["$7M","Annual Revenue","#F54A48"],["34%","Close Rate Increase","#FA982F"],["89%","Show Rate","#48BB78"],["3.2x","More Appointments","#F54A48"]].map(([v,l,c]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px;text-align:center;"><div class="font-display" style="font-size:2.5rem;font-weight:900;color:${c};margin-bottom:8px;">${v}</div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);">${l}</div></div>`).join("")}
    </div>
  </section>

  <!-- Story -->
  <section style="padding:80px 24px;">
    <div style="max-width:800px;margin:0 auto;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:24px;">The Problem: Revenue Slipping Through the Cracks</h2>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:40px;margin-bottom:40px;">
        <div style="font-size:40px;opacity:.25;color:#F54A48;margin-bottom:20px;">💬</div>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.7);line-height:1.75;margin-bottom:20px;">"In 2019, we were doing $750K in revenue. Not bad, but we knew we were leaving money on the table. We'd get 40-50 leads a week, but only connect with maybe 20 of them. The rest went straight to voicemail."</p>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.7);line-height:1.75;margin-bottom:24px;">"We tried hiring more salespeople, but they couldn't work 24/7. Storm season was the worst—leads would flood in at night and on weekends, and by the time we called back Monday morning, they'd already signed with someone else."</p>
        <div style="display:flex;align-items:center;gap:14px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);">
          <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#F54A48,#FA982F);display:flex;align-items:center;justify-content:center;font-family:'Montserrat Alternates',sans-serif;font-size:1.125rem;font-weight:700;color:white;flex-shrink:0;">JT</div>
          <div><div style="font-family:'Montserrat Alternates',sans-serif;font-weight:600;color:white;">Jake Torres</div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);">Owner, Titan Roofing Services</div></div>
        </div>
      </div>

      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:24px;">The Breaking Point: $47K Lost in One Month</h2>
      <div style="background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.2);border-radius:16px;padding:28px;margin-bottom:40px;">
        <div style="font-size:.875rem;color:rgba(255,255,255,0.7);margin-bottom:16px;">Breakdown of the May 2020 hail storm surge:</div>
        ${[["Total leads received","213"],["Leads contacted within 5 minutes","34 (16%)"],["Leads never reached","89 (42%)"],["Estimated revenue lost","$47,200"]].map(([l,v],i) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);"><span style="font-size:.875rem;color:rgba(255,255,255,0.6);">${l}</span><span style="font-family:'JetBrains Mono',monospace;font-weight:600;color:${i===3?"#F54A48":"white"};">${v}</span></div>`).join("")}
      </div>

      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:24px;">The Results: 6 Years of Compound Growth</h2>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:40px;margin-bottom:32px;">
        ${[["Year 1 (2020-2021)","$750K → $1.8M","58% → 98% lead capture"],["Year 3 (2022-2023)","$4.2M","4 → 12 salespeople"],["Today (2026)","$7M+","427% ROI on ShiFt"]].map(([yr,rev,sub]) => `<div style="padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.06);last-of-type:border:none;"><div style="font-family:'Montserrat Alternates',sans-serif;font-size:1.125rem;font-weight:700;color:white;margin-bottom:10px;">${yr}</div><div style="display:flex;gap:40px;flex-wrap:wrap;"><div><div style="font-family:'JetBrains Mono',monospace;font-size:1.25rem;font-weight:700;background:linear-gradient(135deg,#F54A48,#FA982F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${rev}</div><div style="font-size:.75rem;color:rgba(255,255,255,0.4);">Revenue</div></div><div><div style="font-family:'JetBrains Mono',monospace;font-size:1.125rem;font-weight:600;color:white;">${sub}</div></div></div></div>`).join("")}
      </div>

      <div style="background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.2);border-radius:20px;padding:40px;text-align:center;">
        <p style="font-size:1.25rem;color:white;line-height:1.7;margin-bottom:16px;">"ShiFt didn't just fix our lead problem—it became the foundation of our entire growth strategy. Every lead gets handled. Every opportunity gets captured. My team focuses on closing, not chasing."</p>
        <p style="font-style:italic;color:rgba(255,255,255,0.6);">— Jake Torres, February 2026</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="padding:80px 24px;text-align:center;">
    <div style="max-width:600px;margin:0 auto;">
      <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:800;color:white;margin-bottom:20px;">Ready to Write Your Success Story?</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);margin-bottom:36px;">See what ShiFt can do for your roofing business.</p>
      <a href="https://shiftnow.io/Calculator" class="btn-primary" style="padding:18px 40px;font-size:1rem;">Calculate My Revenue Opportunity →</a>
    </div>
  </section>
</main>`;

export const FEATURES_HTML = `<!-- FEATURES PAGE (/Features) — ShiFt Platform Features -->
<!-- Use Convert Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 64px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Platform Features</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Everything Your Revenue Engine<br /><span class="shift-gradient-text">Needs to Run</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">ShiFt is not a tool you manage. It's infrastructure that runs your lead pipeline 24/7 — automatically.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(420px,1fr));gap:24px;margin-bottom:64px;">
      ${[
        ["⚡","30-Second AI Response","Every inbound lead — call, text, form, Facebook — gets an intelligent AI response in under 30 seconds. 24 hours a day, 7 days a week. No missed opportunities.","#F54A48","<30s","Response time"],
        ["🧠","Roofing-Native AI Qualification","Our AI asks the right questions — damage type, insurance vs. out-of-pocket, property details, timeline — and scores every lead before it touches your calendar.","#FA982F","27%→89%","Qualified lead rate"],
        ["📅","Automatic Appointment Booking","Qualified leads are booked directly onto your calendar with confirmations sent to you and the homeowner. No phone tag. No back-and-forth.","#48BB78","3.2×","More appointments"],
        ["📞","Missed Call Text-Back","Every missed call gets an instant AI text follow-up within seconds — keeping the lead warm and capturing conversations you'd otherwise lose forever.","#F54A48","78%","Leads saved from voicemail"],
        ["💬","Multi-Channel Conversations","ShiFt handles SMS, phone, web chat, Facebook Messenger, and email in one unified AI inbox. Leads can reach you however they prefer.","#FA982F","5+","Channels covered"],
        ["📊","Revenue Tracking & Reports","Every lead, appointment, and won job is tracked. Monthly revenue reports show you the exact ROI of your ShiFt investment — in dollars, not impressions.","#48BB78","427%","Avg client ROI"],
        ["🔄","5-Touch Follow-Up Sequences","Leads that don't book immediately get automated follow-up across SMS and email. Most revenue is in the follow-up — ShiFt never forgets to do it.","#F54A48","5×","Follow-up touches"],
        ["🛡️","90-Day Revenue Floor","If the system doesn't generate incremental revenue above your baseline within 90 days, billing pauses until it does. You pay when it produces.","#FFD700","100%","Performance-backed"],
      ].map(([icon,title,desc,color,stat,statLabel]) => `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:32px;display:flex;gap:20px;transition:transform .3s;">
        <div style="flex-shrink:0;width:48px;height:48px;border-radius:12px;background:${color}18;display:flex;align-items:center;justify-content:center;font-size:22px;">${icon}</div>
        <div style="flex:1;">
          <h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:10px;">${title}</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,0.55);margin-bottom:16px;line-height:1.75;">${desc}</p>
          <div style="display:flex;align-items:center;gap:8px;"><span class="font-display" style="font-size:1.25rem;font-weight:900;color:${color};">${stat}</span><span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,0.35);">${statLabel}</span></div>
        </div>
      </div>`).join("")}
    </div>
    <div style="text-align:center;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:16px;">See It Running in Your Market</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);max-width:480px;margin:0 auto 32px;line-height:1.7;">Book a 20-minute strategy call and we'll show you exactly what your AI Revenue Engine looks like — live.</p>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary">Book a Strategy Call →</a>
    </div>
  </section>
</main>`;

export const INTEGRATIONS_HTML = `<!-- INTEGRATIONS PAGE (/Integrations) — ShiFt Platform Integrations -->
<!-- Use Convert Nav or NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 64px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Integrations</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Works With the Tools<br /><span class="shift-gradient-text">You Already Use</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);">ShiFt plugs into your existing stack. Setup in 24 hours — not 24 days.</p>
    </div>
    <!-- Zero disruption promise -->
    <div style="background:linear-gradient(135deg,rgba(245,74,72,0.07),rgba(250,152,47,0.04));border:1px solid rgba(245,74,72,0.2);border-radius:20px;padding:40px;margin-bottom:64px;display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;">
      <div>
        <h2 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:12px;">Zero-Disruption Setup</h2>
        <p style="color:rgba(255,255,255,0.6);line-height:1.7;">ShiFt connects to your existing tools without replacing them. Your team keeps using the same CRM, calendar, and workflow tools. We just make them work automatically.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;flex-shrink:0;">
        ${["No new software to learn","Live in 24–48 hours","Dedicated setup support"].map(i => `<div style="display:flex;align-items:center;gap:10px;"><span style="color:#48BB78;">✓</span><span style="color:white;font-size:.875rem;">${i}</span></div>`).join("")}
      </div>
    </div>
    <!-- Integration Groups -->
    ${[
      ["CRM & Sales","#F54A48",[["GoHighLevel","Full 2-way sync — contacts, pipelines, appointments, and conversations."],["HubSpot","Leads flow directly into your HubSpot CRM with conversation history."],["Salesforce","Enterprise-grade CRM integration with custom field mapping."]]],
      ["Scheduling & Calendar","#FA982F",[["Google Calendar","AI books appointments directly onto your Google Calendar in real-time."],["Calendly","Route qualified leads to your Calendly booking page automatically."],["Outlook Calendar","Microsoft 365 calendar sync for enterprise teams."]]],
      ["Communication","#48BB78",[["Twilio","Carrier-grade SMS and voice infrastructure powering every AI conversation."],["Slack","Real-time alerts for new leads, bookings, and revenue milestones."],["Zoom","Zoom meetings auto-created for virtual inspection appointments."]]],
      ["Advertising & Lead Gen","#F54A48",[["Google Ads","Lead form extensions feed directly into the AI response system."],["Facebook / Meta","Facebook Lead Ads and Messenger conversations handled automatically."],["Google LSA","Local Service Ads leads captured and qualified in seconds."]]],
      ["Workflow & Automation","#FA982F",[["Zapier","Connect ShiFt to 5,000+ apps with no-code automation workflows."],["Webhook / API","Custom integrations with any platform via REST API and webhooks."],["Make (Integromat)","Advanced multi-step automation for complex operational workflows."]]],
    ].map(([cat,color,tools]) => `
    <div style="margin-bottom:48px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
        <div style="width:4px;height:20px;border-radius:2px;background:${color};flex-shrink:0;"></div>
        <span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;color:${color};">${cat}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
        ${tools.map(([name,desc]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px;"><div class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:8px;">${name}</div><p style="font-size:.875rem;color:rgba(255,255,255,0.5);line-height:1.65;">${desc}</p></div>`).join("")}
      </div>
    </div>`).join("")}
    <div style="text-align:center;padding-top:40px;border-top:1px solid rgba(255,255,255,0.06);">
      <h2 class="font-display" style="font-size:1.75rem;font-weight:700;color:white;margin-bottom:12px;">Don't See Your Tool?</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);max-width:480px;margin:0 auto 32px;line-height:1.7;">We integrate with virtually any platform via our API and Zapier. Tell us what you use and we'll build the connection.</p>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary">Talk to Our Team →</a>
    </div>
  </section>
</main>`;

export const CASE_STUDIES_HTML = `<!-- CASE STUDIES PAGE (/CaseStudies) — ShiFt NeuralOS -->
<!-- Use NeuralOS Nav or Convert Nav + Global CSS + Footer -->
<!-- NOTE: Interactive recharts chart and filter state cannot be replicated in static HTML. -->
<!-- Static version shows the company cards only. Use /CaseStudies for the live interactive version. -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 64px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Case Studies</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Real Contractors.<br /><span class="shift-gradient-text">Real Revenue.</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);">Not impressions. Not clicks. Booked jobs and dollars closed.</p>
    </div>
    <div style="background:rgba(99,179,237,0.06);border:1px solid rgba(99,179,237,0.2);border-radius:16px;padding:20px 24px;margin-bottom:40px;display:flex;gap:12px;align-items:start;">
      <span style="color:#63B3ED;font-size:1.25rem;">📸</span>
      <div><strong style="color:white;display:block;margin-bottom:4px;">Interactive Chart Available at /CaseStudies</strong><p style="font-size:.875rem;color:rgba(255,255,255,0.55);margin:0;">The live page features an interactive revenue growth chart (recharts) and filterable cards. This static version shows representative case card data.</p></div>
    </div>
    <!-- Case Cards -->
    ${[
      ["#F54A48","Titan Roofing Services","Dallas, TX","AMPLIFY","$750K → $7M in 6 Years","Missed 42% of after-hours leads, losing $47K in one storm surge month","Implemented AI in 36 hours. 98% lead capture rate. 34% close rate increase.",[["$7M","Annual Revenue"],["34%","Close Rate Up"],["89%","Show Rate"],["427%","ROI on ShiFt"]],"ShiFt didn't just fix our lead problem—it became the foundation of our entire growth strategy.","Jake Torres, Owner"],
      ["#FA982F","Apex Roofing Co.","Phoenix, AZ","ACTIVATE","Revenue Doubled in 6 Months","Struggling with inconsistent lead flow and over-dependence on referrals","AI pipeline filled calendar. Revenue doubled. Now runs a waitlist.",[["2×","Revenue"],["6","Months"],["40+","Weekly Inspections"],["3.2×","More Appointments"]],"ShiFt turned our business around. We went from chasing leads to having a waitlist.","Marcus Johnson, Owner"],
      ["#48BB78","Summit Storm Solutions","Denver, CO","DOMINATE","Pipeline Full. Waitlist Open.","Storm season surges overwhelmed small team. After-hours calls went to voicemail","AI scales for storm surges instantly. Calendar always full. Zero missed leads.",[["100%","Lead Capture"],["40+","Inspections/Week"],["89%","Show Rate"],["$47K","Monthly Revenue"]],"The AI assistant books 40+ inspections a week for us. It's like having a sales team that never sleeps.","Sarah Chen, GM"],
    ].map(([color,company,loc,pkg,headline,problem,result,stats,quote,person]) => `
    <div style="border-radius:20px;overflow:hidden;border:1px solid ${color}33;margin-bottom:24px;">
      <div style="height:3px;background:${color};"></div>
      <div style="padding:40px;background:${color}08;">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:start;gap:16px;margin-bottom:24px;">
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
              <span style="font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:4px 10px;border-radius:999px;background:${color}18;color:${color};border:1px solid ${color}33;">${pkg}</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.4);">${loc}</span>
            </div>
            <h2 class="font-display" style="font-size:1.75rem;font-weight:700;color:white;">${company}</h2>
          </div>
          <div class="font-display" style="font-size:1.25rem;font-weight:900;color:${color};">${headline}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px;">
          <div><div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,0.3);margin-bottom:8px;">The Problem</div><p style="font-size:.875rem;color:rgba(255,255,255,0.65);line-height:1.75;">${problem}</p></div>
          <div><div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,0.3);margin-bottom:8px;">The Result</div><p style="font-size:.875rem;color:rgba(255,255,255,0.65);line-height:1.75;">${result}</p></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px;">
          ${stats.map(([v,l]) => `<div style="background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;text-align:center;"><div class="font-display" style="font-size:1.25rem;font-weight:900;color:${color};margin-bottom:4px;">${v}</div><div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,0.35);">${l}</div></div>`).join("")}
        </div>
        <div style="background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px;">
          <p style="font-size:.875rem;font-style:italic;color:rgba(255,255,255,0.7);line-height:1.75;margin-bottom:8px;">"${quote}"</p>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.4);">— ${person}</div>
        </div>
      </div>
    </div>`).join("")}
    <div style="text-align:center;padding-top:48px;">
      <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:800;color:white;margin-bottom:16px;">Ready to Write Your Story?</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);max-width:480px;margin:0 auto 32px;line-height:1.7;">Book a 20-minute call. We'll show you the exact revenue opportunity in your market.</p>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary">Book a Strategy Call →</a>
    </div>
  </section>
</main>`;

export const BLOG_HTML = `<!-- BLOG PAGE (/Blog) — ShiFt Revenue Intelligence Blog -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<!-- NOTE: Category filter and AnimatePresence use React state — static version shows all posts -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 48px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">ShiFt Blog</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Revenue Intelligence<br /><span class="shift-gradient-text">for Roofing Contractors</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);">Strategy, AI, and real-world results from the field.</p>
    </div>
    <!-- Featured Post -->
    <div style="position:relative;background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.2);border-radius:20px;padding:40px;margin-bottom:40px;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(135deg,#F54A48,#FA982F);border-radius:20px 20px 0 0;"></div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#F54A48;margin-bottom:16px;">Featured · March 2026</div>
      <h2 class="font-display" style="font-size:clamp(1.75rem,4vw,2.5rem);font-weight:700;color:white;margin-bottom:16px;line-height:1.2;">The $47K Wake-Up Call: How One Storm Changed Everything</h2>
      <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);max-width:700px;margin-bottom:24px;line-height:1.7;">The real story behind how a Dallas contractor lost $47K in one month to missed leads — and what they did about it.</p>
      <div style="display:flex;align-items:center;gap:8px;color:#F54A48;"><span style="font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;">Read Article</span><span>→</span></div>
    </div>
    <!-- Post Grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">
      ${[
        ["Strategy","The Speed Kill: Why Response Time Matters More Than Price","Why the first contractor to respond wins 78% of the time — and what to do about it.","8 min read","#F54A48"],
        ["AI & Automation","How AI Qualification Filters Out $8K in Bad Leads Monthly","A deep dive into how conversational AI separates buyers from browsers.","6 min read","#FA982F"],
        ["Case Study","$750K to $7M: Titan Roofing's 6-Year Transformation","The full story of how ShiFt Convert turned missed calls into a growth machine.","12 min read","#48BB78"],
        ["Lead Gen","Roofing Lead Generation in 2026: What Actually Works","Google Ads, LSA, Facebook, door-to-door — what's actually ROI positive?","10 min read","#F54A48"],
        ["Operations","Storm Season Playbook: Capturing Surge Leads Without Burning Out","How to prepare your AI system for a 10x lead surge — before the storm hits.","7 min read","#FA982F"],
        ["Strategy","Why Your Close Rate Is Lying to You","The hidden cost of bad lead quality — and how to fix it at the source.","5 min read","#F54A48"],
      ].map(([cat,title,excerpt,time,color]) => `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:24px;display:flex;flex-direction:column;">
        <div style="width:40px;height:3px;border-radius:2px;background:${color};margin-bottom:20px;"></div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:3px 10px;border-radius:999px;background:${color}18;color:${color};border:1px solid ${color}33;">${cat}</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:rgba(255,255,255,0.3);">${time}</span>
        </div>
        <h3 class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:10px;line-height:1.3;flex:1;">${title}</h3>
        <p style="font-size:.875rem;color:rgba(255,255,255,0.5);margin-bottom:16px;line-height:1.7;">${excerpt}</p>
        <div style="display:flex;align-items:center;gap:6px;color:${color};"><span style="font-family:'JetBrains Mono',monospace;font-size:.75rem;font-weight:600;">Read</span><span>→</span></div>
      </div>`).join("")}
    </div>
  </section>
</main>`;

export const ABOUT_HTML = `<!-- ABOUT PAGE (/About) — ShiFt NeuralOS -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        We're Building the <span class="shift-gradient-text">Operating System</span><br />for AI-First Business
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">ShiFt started with one question: Why do great contractors lose to faster, not better, competitors?</p>
    </div>
    <!-- Mission -->
    <div style="max-width:900px;margin:0 auto 80px;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;text-align:center;margin-bottom:32px;">Our Mission</h2>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;">
        <p class="font-display" style="font-size:1.5rem;font-weight:600;color:white;text-align:center;margin-bottom:40px;line-height:1.55;">"To give every contractor the same AI advantage that only enterprise companies could afford—and make it roofing-specific."</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px;">
          ${[["⚡","Speed over size","Fast response wins deals","#F54A48"],["👥","AI over headcount","Scale without hiring","#FA982F"],["🎯","Roofing-specific","Built for your industry","#48BB78"]].map(([icon,title,desc,color]) => `<div style="text-align:center;"><div style="width:56px;height:56px;border-radius:14px;background:${color}12;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:24px;">${icon}</div><div class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:8px;">${title}</div><div style="font-size:.875rem;color:rgba(255,255,255,0.6);">${desc}</div></div>`).join("")}
        </div>
      </div>
    </div>
    <!-- Values -->
    <div style="max-width:900px;margin:0 auto;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;text-align:center;margin-bottom:40px;">Our Values</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
        ${[["Presence over perfection","Show up fast, iterate constantly"],["Speed over sophistication","First responder wins the deal"],["Results over rhetoric","ROI talks, everything else walks"],["Coherence over chaos","Simple systems beat complex ones"]].map(([title,desc]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:28px;"><h3 class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:10px;">${title}</h3><p style="font-size:.875rem;color:rgba(255,255,255,0.6);line-height:1.7;">${desc}</p></div>`).join("")}
      </div>
    </div>
  </section>
</main>`;

export const CAREERS_HTML = `<!-- CAREERS PAGE (/Careers) — ShiFt NeuralOS -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Join the <span class="shift-gradient-text">Revolution</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">We're building the AI operating system that transforms how contractors do business. Come help us.</p>
    </div>
    <!-- Values -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-bottom:80px;">
      ${[["⚡","Move Fast","Ship quickly, iterate constantly"],["👥","Own It","Take ownership, drive results"],["📈","Grow Daily","Learn something new every day"],["❤️","Care Deeply","About customers, team, craft"]].map(([icon,title,desc]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:28px;text-align:center;"><div style="font-size:40px;margin-bottom:16px;">${icon}</div><h3 class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:8px;">${title}</h3><p style="font-size:.875rem;color:rgba(255,255,255,0.6);">${desc}</p></div>`).join("")}
    </div>
    <!-- Open Positions -->
    <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;text-align:center;margin-bottom:40px;">Open Positions</h2>
    <div style="max-width:860px;margin:0 auto;display:flex;flex-direction:column;gap:12px;">
      ${[["Senior Full-Stack Engineer","Engineering","Remote"],["Product Designer","Design","SF / Remote"],["AI/ML Engineer","Engineering","Remote"],["Head of Growth","Marketing","SF / Remote"]].map(([title,dept,loc]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:24px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;"><div><h3 class="font-display" style="font-size:1.25rem;font-weight:700;color:white;margin-bottom:8px;">${title}</h3><div style="display:flex;gap:20px;"><span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.5);">${dept}</span><span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.5);">${loc}</span></div></div><a href="mailto:hello@shiftnow.io" class="btn-primary" style="padding:10px 24px;font-size:.75rem;">Apply</a></div>`).join("")}
    </div>
  </section>
</main>`;

export const CONTACT_HTML = `<!-- CONTACT PAGE (/Contact) — ShiFt NeuralOS -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:48px;">
      <!-- Form -->
      <div>
        <h1 class="font-display" style="font-size:clamp(2.5rem,5vw,3.5rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:16px;">Get in <span class="shift-gradient-text">Touch</span></h1>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.6);margin-bottom:40px;line-height:1.7;">Questions about ShiFt? Want to see a demo? We're here to help.</p>
        <form style="display:flex;flex-direction:column;gap:20px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Name</label><input type="text" style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;" /></div>
            <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Email</label><input type="email" style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;" /></div>
          </div>
          <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Company</label><input type="text" style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;" /></div>
          <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">What brings you here?</label><select style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;"><option>Schedule a demo</option><option>Get pricing</option><option>Ask a question</option><option>Partnership inquiry</option></select></div>
          <div><label style="font-size:.875rem;color:rgba(255,255,255,0.7);display:block;margin-bottom:8px;">Message</label><textarea rows="5" style="width:100%;padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;font-size:1rem;box-sizing:border-box;resize:vertical;"></textarea></div>
          <button type="submit" class="btn-primary" style="padding:16px;font-size:1rem;">Send Message</button>
        </form>
      </div>
      <!-- Contact Info -->
      <div>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:40px;margin-bottom:20px;">
          <h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:32px;">Contact Information</h3>
          <div style="display:flex;flex-direction:column;gap:24px;">
            <div style="display:flex;gap:16px;"><span style="color:#F54A48;font-size:1.5rem;flex-shrink:0;">✉️</span><div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);margin-bottom:4px;">Email</div><a href="mailto:hello@shiftnow.io" style="color:white;text-decoration:none;">hello@shiftnow.io</a></div></div>
            <div style="display:flex;gap:16px;"><span style="color:#FA982F;font-size:1.5rem;flex-shrink:0;">📞</span><div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);margin-bottom:4px;">Phone</div><a href="tel:+17074448669" style="color:white;text-decoration:none;">(707) SHIFT-NOW</a></div></div>
            <div style="display:flex;gap:16px;"><span style="color:#48BB78;font-size:1.5rem;flex-shrink:0;">📍</span><div><div style="font-size:.875rem;color:rgba(255,255,255,0.5);margin-bottom:4px;">Address</div><div style="color:white;line-height:1.7;">ShiFt NeuralOS<br/>12460 Crabapple Road<br/>Ste 202-522<br/>Alpharetta, GA 30004</div></div></div>
          </div>
        </div>
        <div style="background:rgba(245,74,72,0.08);border:1px solid rgba(245,74,72,0.2);border-radius:14px;padding:24px;">
          <div class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:8px;">Prefer to talk?</div>
          <p style="font-size:.875rem;color:rgba(255,255,255,0.7);margin-bottom:16px;line-height:1.7;">Book a 15-minute call with our team to discuss your specific needs.</p>
          <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" style="font-family:'JetBrains Mono',monospace;font-size:.875rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;text-decoration:none;">Schedule Call →</a>
        </div>
      </div>
    </div>
  </section>
</main>`;

export const PLATFORM_HTML = `<!-- PLATFORM PAGE (/Platform) — ShiFt NeuralOS Neural Stack -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        The Complete <span class="shift-gradient-text">Neural Stack</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">Four layers working together to transform how roofing contractors generate and convert revenue.</p>
    </div>
    <!-- Neural Stack -->
    <div style="max-width:860px;margin:0 auto 80px;display:flex;flex-direction:column;gap:20px;">
      ${[["Layer 3","Insights & Analytics","Revenue visibility, attribution tracking, predictive forecasting","📊","#48BB78"],["Layer 2","Convert","AI lead conversion, qualification, and automated appointment booking","🎯","#F54A48"],["Layer 1","Attract","AI lead generation, multi-channel campaigns, intelligent targeting","🧠","#FA982F"],["Layer 0","Your Business Foundation","CRM, calendar, phone system, website","🏗️","#9DA3B4"]].map(([layer,title,desc,icon,color],i) => `<div style="background:${i===3?"rgba(255,255,255,0.04)":`${color}10`};border:1px solid ${i===3?"rgba(255,255,255,0.08)":`${color}30`};border-radius:16px;padding:32px;display:flex;gap:20px;align-items:start;"><div style="width:56px;height:56px;border-radius:14px;background:${color}20;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">${icon}</div><div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;"><span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,0.5);">${layer}</span><h3 class="font-display" style="font-size:1.375rem;font-weight:700;color:white;">${title}</h3></div><p style="font-size:1rem;color:rgba(255,255,255,0.7);line-height:1.6;">${desc}</p></div></div>`).join("")}
    </div>
    <!-- Capabilities -->
    <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;text-align:center;margin-bottom:40px;">Platform Capabilities</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-bottom:64px;">
      ${[["🛡️","Enterprise Security","SOC 2 compliant, GDPR ready, bank-level encryption"],["⚡","API Access","Full REST API for custom integrations and workflows"],["🔄","99.9% Uptime SLA","Guaranteed reliability with 24/7 monitoring"]].map(([icon,title,desc]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:28px;"><div style="font-size:36px;margin-bottom:16px;">${icon}</div><h3 class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:10px;">${title}</h3><p style="font-size:.875rem;color:rgba(255,255,255,0.6);line-height:1.7;">${desc}</p></div>`).join("")}
    </div>
    <div style="text-align:center;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:16px;">Ready to See the Platform in Action?</h2>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary">Schedule Platform Demo →</a>
    </div>
  </section>
</main>`;

export const ROOFING_HTML = `<!-- ROOFING PAGE (/Roofing) — Built For Roofers -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Built By Roofers. <span class="shift-gradient-text">For Roofers.</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">We don't do plumbing. We don't do HVAC. We do roofing—and we do it better than anyone.</p>
    </div>
    <!-- Segments -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-bottom:64px;">
      ${[["🏠","Residential Roofing","High volume, fast response critical","AI handles the volume. You handle the close.","#F54A48"],["🏢","Commercial Roofing","Long nurture cycles, multiple decision makers","AI nurtures for months. Books when ready.","#FA982F"],["⛈️","Storm Restoration","Surge capacity, 48-hour response windows","AI scales instantly. Never miss the surge.","#48BB78"]].map(([icon,title,challenge,solution,color]) => `<div style="background:${color}08;border:1px solid ${color}30;border-radius:20px;padding:40px;"><div style="width:64px;height:64px;border-radius:14px;background:${color}20;display:flex;align-items:center;justify-content:center;margin-bottom:24px;font-size:28px;">${icon}</div><h3 class="font-display" style="font-size:1.5rem;font-weight:700;color:white;margin-bottom:20px;">${title}</h3><div style="margin-bottom:16px;"><div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,0.5);margin-bottom:8px;">Challenge</div><p style="font-size:.875rem;color:rgba(255,255,255,0.7);line-height:1.6;">${challenge}</p></div><div style="padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);"><div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,0.5);margin-bottom:8px;">How ShiFt Helps</div><p style="font-weight:600;color:${color};">${solution}</p></div></div>`).join("")}
    </div>
    <!-- Multi-location -->
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;margin-bottom:64px;display:flex;gap:24px;align-items:start;">
      <div style="width:80px;height:80px;border-radius:16px;background:rgba(245,74,72,0.12);display:flex;align-items:center;justify-content:center;font-size:40px;flex-shrink:0;">📍</div>
      <div>
        <h3 class="font-display" style="font-size:1.75rem;font-weight:700;color:white;margin-bottom:16px;">Multi-Location Contractors</h3>
        <p style="font-size:1.125rem;color:rgba(255,255,255,0.7);margin-bottom:24px;line-height:1.7;">Managing 3, 5, or 10+ locations? ShiFt's multi-location dashboard gives you visibility across every market, unified reporting, and location-specific AI training.</p>
        <div style="display:flex;gap:32px;flex-wrap:wrap;">
          ${["Unified dashboard","Location-specific AI","Centralized reporting"].map(f => `<div style="font-size:.875rem;color:rgba(255,255,255,0.6);">✓ ${f}</div>`).join("")}
        </div>
      </div>
    </div>
    <div style="text-align:center;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:16px;">See ShiFt Built for Your Type of Roofing</h2>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary">Schedule Demo →</a>
    </div>
  </section>
</main>`;

export const RESOURCES_HTML = `<!-- RESOURCES PAGE (/Resources) — ShiFt Learning Center -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Resources & <span class="shift-gradient-text">Learning Center</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">Guides, case studies, and insights to help you master AI-powered revenue generation.</p>
    </div>
    <!-- Resource types -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-bottom:64px;">
      ${[["📚","Blog Posts","48 articles"],["📄","Guides & eBooks","12 resources"],["🎬","Webinars","8 recordings"],["🧮","Tools","5 calculators"]].map(([icon,title,count]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:28px;cursor:pointer;"><div style="font-size:40px;margin-bottom:16px;">${icon}</div><h3 class="font-display" style="font-size:1.125rem;font-weight:700;color:white;margin-bottom:6px;">${title}</h3><p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.5);">${count}</p></div>`).join("")}
    </div>
    <!-- Featured Articles -->
    <h2 class="font-display" style="font-size:2rem;font-weight:700;color:white;margin-bottom:32px;">Featured Articles</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">
      ${[["The Speed Kill: Why Response Time Matters More Than Price","Strategy","8 min read"],["How to Calculate Your Revenue Leak (Step-by-Step)","Tools","5 min read"],["Case Study: $750K to $7M in 6 Years with AI","Results","12 min read"],["Roofing Lead Generation in 2026: What Actually Works","Marketing","10 min read"]].map(([title,cat,time]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:24px;cursor:pointer;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;"><span style="font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:4px 10px;border-radius:999px;background:rgba(245,74,72,0.12);color:#F54A48;border:1px solid rgba(245,74,72,0.3);">${cat}</span><span style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:rgba(255,255,255,0.4);">${time}</span></div><h3 class="font-display" style="font-size:1.125rem;font-weight:700;color:white;line-height:1.3;">${title}</h3></div>`).join("")}
    </div>
  </section>
</main>`;

export const ATTRACT_HOW_IT_WORKS_HTML = `<!-- ATTRACT HOW IT WORKS PAGE (/AttractHowItWorks) — ShiFt Attract -->
<!-- Use Attract Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        How ShiFt Attract <span style="background:linear-gradient(to right,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Fills Your Pipeline</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">AI-powered lead generation that works while you sleep</p>
    </div>
    <div style="text-align:center;margin-bottom:48px;">
      <span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;color:#FA982F;">The System</span>
      <h2 class="font-display" style="font-size:clamp(2rem,4vw,3rem);font-weight:800;color:white;margin-top:12px;">From Zero to Full Pipeline in <span style="color:#FA982F;">30 Days</span></h2>
    </div>
    <div style="max-width:800px;margin:0 auto;">
      ${[["⚙️","Day 1-3","Platform Configuration","We connect to your systems, define your service area, and configure AI targeting parameters.","Ready to launch","#FA982F"],["🚀","Day 4-7","Multi-Channel Activation","AI campaigns go live across Facebook, Google, and local channels. Initial data collection begins.","First leads arriving","#F54A48"],["📊","Day 8-21","AI Learning Phase","AI analyzes performance, identifies winning combinations, and automatically reallocates budget to top performers.","Cost per lead dropping","#48BB78"],["📈","Day 22-30","Predictable Pipeline","System reaches optimization. Consistent lead flow established. Ready to scale investment.","Predictable, profitable leads","#FA982F"]].map(([icon,timeline,title,desc,outcome,color],i,arr) => `<div style="display:flex;gap:24px;margin-bottom:${i<arr.length-1?"32px":"0"};">
        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;">
          <div style="width:64px;height:64px;border-radius:16px;background:${color}20;display:flex;align-items:center;justify-content:center;font-size:28px;">${icon}</div>
          ${i<arr.length-1?`<div style="width:2px;flex:1;margin-top:12px;background:linear-gradient(180deg,${color}80,${color}10);"></div>`:""}
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:28px;${i<arr.length-1?"margin-bottom:0":""}" >
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;"><span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:4px 12px;border-radius:999px;background:${color}15;color:${color};">${timeline}</span><h3 class="font-display" style="font-size:1.375rem;font-weight:700;color:white;">${title}</h3></div>
          <p style="font-size:1rem;color:rgba(255,255,255,0.7);margin-bottom:16px;line-height:1.7;">${desc}</p>
          <div style="font-size:.875rem;font-weight:600;color:${color};">✓ ${outcome}</div>
        </div>
      </div>`).join("")}
    </div>
    <div style="text-align:center;margin-top:48px;">
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Start Your 30-Day Pipeline Build →</a>
    </div>
  </section>
</main>`;

export const ATTRACT_RESULTS_HTML = `<!-- ATTRACT RESULTS PAGE (/AttractResults) — ShiFt Attract Performance Data -->
<!-- Use Attract Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        Real Numbers From <span style="background:linear-gradient(to right,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Real Roofing Companies</span>
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">See how AI-powered lead generation transforms pipelines</p>
    </div>
    <!-- Metrics -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-bottom:64px;">
      ${[["📈","147%","Average lead increase","First 90 days"],["💰","$47","Average cost per lead","(vs. $120+ industry avg)"],["📅","12 days","Time to first lead","from launch"],["🏆","4.2×","Marketing ROI","Average across clients"]].map(([icon,num,label,ctx]) => `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:32px;text-align:center;"><div style="font-size:48px;margin-bottom:12px;">${icon}</div><div class="font-display" style="font-size:3rem;font-weight:900;color:#FA982F;margin-bottom:8px;">${num}</div><div style="font-size:.875rem;font-weight:600;color:white;margin-bottom:6px;">${label}</div><div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:rgba(255,255,255,0.4);">${ctx}</div></div>`).join("")}
    </div>
    <!-- Testimonial -->
    <div style="background:linear-gradient(135deg,rgba(250,152,47,0.08),rgba(245,74,72,0.04));border:1px solid rgba(250,152,47,0.2);border-radius:20px;padding:48px;text-align:center;margin-bottom:64px;">
      <p class="font-display" style="font-size:clamp(1.25rem,3vw,1.75rem);font-weight:700;color:white;line-height:1.6;margin-bottom:16px;">"We went from hoping for leads to having more than we could handle. Our marketing finally makes sense."</p>
      <div style="color:rgba(255,255,255,0.6);">— Mike Chen, Peak Roofing Solutions</div>
    </div>
    <div style="text-align:center;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;margin-bottom:16px;">Ready to See <span style="color:#FA982F;">Your Numbers?</span></h2>
      <a href="https://makea.shiftnow.io/widget/bookings/reality" target="_blank" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Get My Pipeline Audit →</a>
    </div>
  </section>
</main>`;

export const ATTRACT_EMPTY_PIPELINE_HTML = `<!-- ATTRACT EMPTY PIPELINE PAGE (/AttractEmptyPipeline) -->
<!-- Use Attract Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:800px;margin:0 auto 80px;">
      <h1 class="font-display" style="font-size:clamp(2.5rem,6vw,4rem);font-weight:900;color:white;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px;">
        The <span style="background:linear-gradient(to right,#FA982F,#F54A48);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Empty Pipeline</span> Problem
      </h1>
      <p style="font-size:1.25rem;color:rgba(255,255,255,0.6);line-height:1.7;">Why roofing contractors lose $35K-$100K+ monthly to broken lead generation systems</p>
    </div>
    <!-- Problems -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-bottom:64px;">
      ${[["📉","PROBLEM #1: INCONSISTENT LEAD FLOW","Feast or Famine","Some months you're drowning. Other months, crickets. No consistency means no predictability.","67%","of contractors struggle with lead consistency",'"You can\'t grow a business you can\'t predict."'],["🔥","PROBLEM #2: MARKETING THAT DOESN'T WORK","Money Burning, Phone Silent","You're paying for ads, SEO, agencies—but where are the leads? Marketing ROI is a mystery.","$3,200","monthly average wasted on ineffective marketing",'"Every dollar you waste is a dollar your competitor invests."'],["🤝","PROBLEM #3: DEPENDENT ON REFERRALS","Living on Hope","Referrals are great—but unreliable. You need a system that generates leads on demand.","43%","of contractors get 80%+ of leads from referrals",'"Hope is not a strategy. Systems are."']].map(([icon,label,title,desc,stat,statDesc,quote]) => `<div style="background:rgba(255,255,255,0.04);border-top:1px solid rgba(255,255,255,0.08);border-right:1px solid rgba(255,255,255,0.08);border-bottom:1px solid rgba(255,255,255,0.08);border-left:4px solid #FA982F;border-radius:16px;padding:32px;"><div style="width:48px;height:48px;border-radius:10px;background:rgba(250,152,47,0.12);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;">${icon}</div><div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;text-transform:uppercase;letter-spacing:.15em;color:rgba(250,152,47,0.7);margin-bottom:10px;">${label}</div><h3 class="font-display" style="font-size:1.375rem;font-weight:700;color:white;margin-bottom:14px;">${title}</h3><p style="font-size:.875rem;color:rgba(255,255,255,0.7);margin-bottom:20px;line-height:1.65;">${desc}</p><div style="background:rgba(250,152,47,0.08);border-radius:10px;padding:16px;margin-bottom:16px;"><div class="font-display" style="font-size:2rem;font-weight:900;color:#FA982F;margin-bottom:4px;">${stat}</div><div style="font-size:.75rem;color:rgba(255,255,255,0.6);">${statDesc}</div></div><p style="font-size:.875rem;font-style:italic;font-weight:600;color:rgba(255,255,255,0.5);">${quote}</p></div>`).join("")}
    </div>
    <!-- Cost section -->
    <div style="max-width:860px;margin:0 auto;">
      <h2 class="font-display" style="font-size:2rem;font-weight:800;color:white;text-align:center;margin-bottom:32px;">The Real Cost of an <span style="color:#FA982F;">Empty Pipeline</span></h2>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;margin-bottom:40px;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:32px;">
          ${[["$3.2K","#FA982F","Wasted monthly on ineffective marketing"],["67%","#F54A48","Struggle with lead consistency"],["43%","#48BB78","Over-dependent on referrals"]].map(([v,c,d]) => `<div style="text-align:center;"><div class="font-display" style="font-size:3rem;font-weight:900;color:${c};margin-bottom:8px;">${v}</div><div style="font-size:.875rem;color:rgba(255,255,255,0.6);">${d}</div></div>`).join("")}
        </div>
      </div>
      <div style="text-align:center;">
        <a href="https://shiftnow.io/Calculator" class="btn-primary" style="background:linear-gradient(135deg,#FA982F,#F54A48);">Calculate My Revenue Leak →</a>
      </div>
    </div>
  </section>
</main>`;

export const PRIVACY_POLICY_HTML = `<!-- PRIVACY POLICY PAGE (/PrivacyPolicy) -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<!-- Full policy text — Effective March 15, 2026 -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 48px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Legal</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,5vw,3.5rem);font-weight:900;color:white;margin-bottom:16px;">Privacy Policy</h1>
      <p class="font-display" style="font-size:1.125rem;font-weight:600;color:white;margin-bottom:8px;">ShiFt NeuralOS™ | ShiFtNow.io</p>
      <div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:rgba(255,255,255,0.4);">Effective Date: March 15, 2026 · Last Updated: March 15, 2026</div>
    </div>
    <div style="max-width:800px;margin:0 auto;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;">
      <p style="font-size:.875rem;color:rgba(255,255,255,0.65);line-height:1.8;margin-bottom:20px;">ShiFt NeuralOS™ ("ShiFt," "we," "us," or "our") operates ShiFtNow.io and the ShiFt NeuralOS™ AI Revenue Operating System (collectively, the "Platform"). This Privacy Policy explains how we collect, use, disclose, retain, and protect information about Clients and End Users.</p>
      <div style="background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.2);border-radius:12px;padding:20px;margin-bottom:32px;"><p style="font-size:.875rem;font-weight:600;color:rgba(255,255,255,0.8);line-height:1.75;">IMPORTANT: When you use the Platform to process personal information of your customers, you represent and warrant that you have obtained all legally required consents, including TCPA, CAN-SPAM, and applicable state privacy laws.</p></div>
      <p style="font-size:.75rem;color:rgba(255,255,255,0.35);font-style:italic;margin-bottom:8px;">For the complete 13-section Privacy Policy, visit the live page at shiftnow.io/PrivacyPolicy or embed the React component directly.</p>
      <p style="font-size:.875rem;color:rgba(255,255,255,0.5);">Key sections covered: Information We Collect · How We Use Information · TCPA Compliance · Data Sharing · Data Retention · Data Security · Privacy Rights (including CCPA/CPRA) · Cookies · Children's Privacy · Contact Information</p>
      <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
        <p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.25);">ShiFt NeuralOS™ — Privacy Policy — Effective March 15, 2026</p>
        <p style="font-size:.75rem;color:rgba(255,255,255,0.3);margin-top:8px;">Contact: privacy@shiftnow.io</p>
      </div>
    </div>
  </section>
</main>`;

export const TERMS_OF_SERVICE_HTML = `<!-- TERMS OF SERVICE PAGE (/TermsOfService) -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<!-- Full ToS — Effective March 15, 2026, Cherokee County, Georgia -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 48px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Legal</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,5vw,3.5rem);font-weight:900;color:white;margin-bottom:16px;">Terms of Service</h1>
      <p class="font-display" style="font-size:1.125rem;font-weight:600;color:white;margin-bottom:8px;">ShiFt NeuralOS™ | ShiFtNow.io</p>
      <div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:rgba(255,255,255,0.4);">Effective Date: March 15, 2026 · Governing Jurisdiction: Cherokee County, Georgia</div>
    </div>
    <div style="max-width:800px;margin:0 auto;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;">
      <div style="background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.2);border-radius:12px;padding:20px;margin-bottom:32px;"><p style="font-size:.875rem;font-weight:600;color:rgba(255,255,255,0.8);line-height:1.75;">PLEASE READ THESE TERMS CAREFULLY. BY ACCESSING OR USING THE SHIFTNOW.IO PLATFORM, OR BY EXECUTING A CLIENT AGREEMENT, YOU AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY.</p></div>
      <p style="font-size:.75rem;color:rgba(255,255,255,0.35);font-style:italic;margin-bottom:8px;">This is a summary. For the complete 20-section Terms of Service, visit the live page at shiftnow.io/TermsOfService.</p>
      <p style="font-size:.875rem;color:rgba(255,255,255,0.5);line-height:1.75;">Key terms covered: 90-Day Non-Cancelable Commitment ($5,000 RAF) · No Refunds / No Chargebacks · RevShare Structure (ACTIVATE / AMPLIFY / DOMINATE) · Revenue Floor Guarantee (billing pause) · TCPA Compliance Obligations · IP Rights · Binding Arbitration (Cherokee County, GA) · ShiFt Circle Referral Program · Indemnification</p>
      <div style="margin-top:24px;background:rgba(245,74,72,0.06);border:1px solid rgba(245,74,72,0.2);border-radius:12px;padding:20px;">
        <p style="font-size:.875rem;font-weight:700;color:#F54A48;margin-bottom:8px;">⛔ Key Non-Negotiable Terms:</p>
        <ul style="list-style:none;padding:0;display:flex;flex-direction:column;gap:8px;">
          <li style="font-size:.875rem;color:rgba(255,255,255,0.7);">• 90-Day Initial Term is non-cancelable — no exceptions</li>
          <li style="font-size:.875rem;color:rgba(255,255,255,0.7);">• $5,000 Revenue Activation Fee (RAF) is non-refundable</li>
          <li style="font-size:.875rem;color:rgba(255,255,255,0.7);">• Chargebacks = immediate termination + $500 fee + legal action</li>
          <li style="font-size:.875rem;color:rgba(255,255,255,0.7);">• All disputes go to binding arbitration in Cherokee County, GA</li>
        </ul>
      </div>
      <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
        <p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.25);">ShiFt NeuralOS™ — Terms of Service — Effective March 15, 2026 — Cherokee County, Georgia</p>
        <p style="font-size:.75rem;color:rgba(255,255,255,0.3);margin-top:8px;">Legal: legal@shiftnow.io</p>
      </div>
    </div>
  </section>
</main>`;

export const COOKIE_POLICY_HTML = `<!-- COOKIE POLICY PAGE (/CookiePolicy) -->
<!-- Use NeuralOS Nav + Global CSS + Footer -->
<main style="padding-top:100px;background:#070820;">
  <section style="padding:80px 24px;max-width:1140px;margin:0 auto;">
    <div style="text-align:center;max-width:760px;margin:0 auto 48px;">
      <div style="display:inline-flex;padding:6px 16px;border-radius:999px;background:rgba(245,74,72,0.12);border:1px solid rgba(245,74,72,0.3);font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#F54A48;margin-bottom:24px;">Legal</div>
      <h1 class="font-display" style="font-size:clamp(2.5rem,5vw,3.5rem);font-weight:900;color:white;margin-bottom:16px;">Cookie Policy</h1>
      <p class="font-display" style="font-size:1.125rem;font-weight:600;color:white;margin-bottom:8px;">ShiFt NeuralOS™ | ShiFtNow.io</p>
      <div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:rgba(255,255,255,0.4);">Effective Date: March 15, 2026 · Last Updated: March 15, 2026</div>
    </div>
    <div style="max-width:800px;margin:0 auto;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:48px;">
      <p style="font-size:.875rem;color:rgba(255,255,255,0.65);margin-bottom:24px;line-height:1.8;">ShiFt NeuralOS™ uses cookies and similar tracking technologies on ShiFtNow.io. This Cookie Policy explains what cookies are, how we use them, the types we use, and how you can control them.</p>
      <!-- Cookie categories -->
      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:32px;">
        ${[["Strictly Necessary","#48BB78","Always Active","Essential for the Platform to function. Cannot be disabled. Includes session management, security, and consent storage."],["Functional","#FA982F","Optional","Enable personalization, dashboard preferences, onboarding progress, and saved configurations."],["Analytics & Performance","#F54A48","Optional","Google Analytics, internal usage analytics, error tracking (e.g., Sentry)."],["Marketing & Advertising","#9B59B6","Optional","Google Ads remarketing, Facebook/Meta Pixel, LinkedIn Insight Tag, retargeting pixels."]].map(([name,color,type,desc]) => `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-left:3px solid ${color};border-radius:12px;padding:20px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span class="font-display" style="font-size:1rem;font-weight:700;color:${color};">${name}</span><span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:700;padding:2px 8px;border-radius:999px;background:${color}18;color:${color};">${type}</span></div><p style="font-size:.875rem;color:rgba(255,255,255,0.55);line-height:1.65;">${desc}</p></div>`).join("")}
      </div>
      <p style="font-size:.875rem;color:rgba(255,255,255,0.65);line-height:1.8;margin-bottom:16px;"><strong style="color:white;">Your Choices:</strong> You can manage cookies via our consent banner (shown on first visit), your browser settings, or by emailing privacy@shiftnow.io. Disabling strictly necessary cookies will prevent Platform login and core features.</p>
      <p style="font-size:.875rem;color:rgba(255,255,255,0.65);line-height:1.8;">California residents (CCPA/CPRA): ShiFt does not sell personal information. You may opt out of cross-context behavioral advertising via our cookie preferences center or Global Privacy Control (GPC) signal.</p>
      <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
        <p style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(255,255,255,0.25);">ShiFt NeuralOS™ — Cookie Policy — Effective March 15, 2026</p>
        <p style="font-size:.75rem;color:rgba(255,255,255,0.3);margin-top:8px;">Contact: privacy@shiftnow.io</p>
      </div>
    </div>
  </section>
</main>`;