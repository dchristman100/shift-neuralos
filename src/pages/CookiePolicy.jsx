import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";

function Section({ number, title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-white mb-4 flex items-start gap-3">
        <span className="font-mono text-sm mt-1 flex-shrink-0" style={{ color: "#F54A48" }}>{number}.</span>
        <span>{title}</span>
      </h2>
      <div className="pl-6">{children}</div>
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-base font-semibold mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#F54A48" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function P({ children }) {
  return (
    <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

function AlertBox({ children }) {
  return (
    <div className="rounded-xl p-5 mb-5 border" style={{ background: "rgba(245,74,72,0.06)", borderColor: "rgba(245,74,72,0.2)" }}>
      <p className="font-body text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>{children}</p>
    </div>
  );
}

const cookieCategories = [
  {
    name: "Strictly Necessary",
    color: "#48BB78",
    purpose: "Essential for the Platform to function. Cannot be disabled.",
    examples: ["Session management and authentication tokens", "Security and fraud prevention", "Cookie consent preference storage (consent_prefs, 12 months)", "Load balancing and performance routing"],
  },
  {
    name: "Functional",
    color: "#FA982F",
    purpose: "Enable personalization and enhanced features.",
    examples: ["Dashboard layout and display preferences", "Onboarding progress tracking", "Language and regional settings", "Saved filters and report configurations"],
  },
  {
    name: "Analytics & Performance",
    color: "#F54A48",
    purpose: "Help us understand how you use the Platform to improve it.",
    examples: ["Google Analytics (page views, session duration, traffic sources)", "Internal usage analytics (feature adoption, conversion funnels)", "Error tracking and performance monitoring (e.g., Sentry)"],
  },
  {
    name: "Marketing & Advertising",
    color: "#9B59B6",
    purpose: "Support targeted advertising and campaign measurement.",
    examples: ["Google Ads remarketing and conversion tracking", "Facebook/Meta Pixel (campaign attribution, lookalike audiences)", "LinkedIn Insight Tag", "Retargeting pixels for prospective Clients"],
  },
];

export default function CookiePolicy() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{ background: "rgba(245,74,72,0.12)", color: "#F54A48", border: "1px solid rgba(245,74,72,0.3)" }}>
              Legal
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">Cookie Policy</h1>
            <p className="font-display text-lg font-semibold text-white mb-3">ShiFt NeuralOS™ | ShiFtNow.io</p>
            <div className="flex items-center justify-center gap-6 font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Effective Date: March 15, 2026</span>
              <span>·</span>
              <span>Last Updated: March 15, 2026</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>

            <P>ShiFt NeuralOS™ ("ShiFt," "we," "us," or "our") uses cookies and similar tracking technologies on ShiFtNow.io and the ShiFt NeuralOS™ Platform ("Site"). This Cookie Policy explains what cookies are, how we use them, the types we use, and how you can control them.</P>
            <P>This Cookie Policy is incorporated into and forms part of our Privacy Policy. By using the Site, you consent to our use of cookies as described in this policy.</P>

            <Section number="1" title="What Are Cookies?">
              <P>Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work, work more efficiently, and to provide reporting information to website operators.</P>
              <P>Cookies can be:</P>
              <BulletList items={[
                "Session cookies: temporary cookies that expire when you close your browser",
                "Persistent cookies: cookies that remain on your device for a set period or until you delete them",
                "First-party cookies: set by the website you are visiting (ShiFt)",
                "Third-party cookies: set by a domain other than the one you are visiting (e.g., analytics providers, advertising networks)",
              ]} />
              <P>In addition to cookies, we may use similar technologies including:</P>
              <BulletList items={[
                "Web beacons (pixel tags): small graphic images used to track email opens and webpage visits",
                "Local storage objects: used to store data locally on your device for functional purposes",
                "Fingerprinting: technical data about your browser and device used for security and fraud prevention",
                "Software development kit (SDK) tracking: used in our Platform mobile applications",
              ]} />
            </Section>

            <Section number="2" title="Why We Use Cookies">
              <BulletList items={[
                "To make the Site and Platform function correctly",
                "To remember your preferences and settings",
                "To keep you logged in to your account",
                "To analyze how the Site and Platform are used so we can improve them",
                "To deliver relevant advertising and measure campaign effectiveness",
                "To prevent fraud and ensure the security of the Platform",
                "To comply with legal requirements",
              ]} />
            </Section>

            <Section number="3" title="Cookies We Use">
              <P>The following describes the cookie categories used on ShiFtNow.io and the ShiFt NeuralOS™ Platform. This list is updated periodically; please check back for changes.</P>
              <div className="space-y-5 mb-4">
                {cookieCategories.map((cat, i) => (
                  <div key={i} className="rounded-xl p-5 border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", borderLeft: `3px solid ${cat.color}` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-base font-bold" style={{ color: cat.color }}>{cat.name}</span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: `${cat.color}18`, color: cat.color }}>
                        {i === 0 ? "Always Active" : "Optional"}
                      </span>
                    </div>
                    <p className="font-body text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>{cat.purpose}</p>
                    <ul className="space-y-1.5">
                      {cat.examples.map((ex, j) => (
                        <li key={j} className="flex items-start gap-2 font-body text-xs" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                          <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: cat.color }} />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <P>Note: Third-party cookie providers may update their cookies and tracking technologies. We endeavor to keep this list current but recommend reviewing third-party providers' privacy policies for the most up-to-date information.</P>
            </Section>

            <Section number="4" title="Consent and Your Cookie Choices">
              <SubSection title="4.1 Cookie Consent Banner">
                <P>When you first visit ShiFtNow.io, you will be presented with a cookie consent banner. You may:</P>
                <BulletList items={[
                  "Accept All Cookies: enable all cookie categories including analytics and marketing",
                  "Accept Only Necessary: enable only strictly necessary and security cookies",
                  "Customize Preferences: select which categories of cookies to enable or disable",
                ]} />
                <P>Your consent preference is stored in a strictly necessary cookie ("consent_prefs") for 12 months. You may update your preferences at any time through the "Cookie Preferences" link in the Site footer.</P>
              </SubSection>
              <SubSection title="4.2 Browser-Level Cookie Controls">
                <P>You can control cookies through your browser settings. Most browsers allow you to:</P>
                <BulletList items={[
                  "View what cookies are stored and delete them individually or all at once",
                  "Block third-party cookies",
                  "Block cookies from specific websites",
                  "Block all cookies from being set",
                  "Delete all cookies when you close your browser",
                ]} />
                <AlertBox>IMPORTANT: Disabling strictly necessary cookies will prevent core Platform features from functioning, including login, payment processing, and security protections. We recommend enabling at minimum strictly necessary cookies for Platform use.</AlertBox>
              </SubSection>
              <SubSection title="4.3 Analytics Opt-Out">
                <P>To opt out of Google Analytics tracking across all websites, you may install the Google Analytics Opt-out Browser Add-on available at <span style={{ color: "#F54A48" }}>tools.google.com/dlpage/gaoptout</span>.</P>
              </SubSection>
              <SubSection title="4.4 Advertising and Remarketing Opt-Out">
                <P>To opt out of interest-based advertising from advertising networks:</P>
                <BulletList items={[
                  "Digital Advertising Alliance (DAA): optout.aboutads.info",
                  "Network Advertising Initiative (NAI): optout.networkadvertising.org",
                  "European Interactive Digital Advertising Alliance (EDAA): youronlinechoices.eu",
                  "Google Ads Settings: adssettings.google.com",
                  "Facebook Ad Preferences: facebook.com/settings?tab=ads",
                ]} />
                <P>Opting out of interest-based advertising does not mean you will stop receiving ads; it means the ads you see will be less tailored to your interests.</P>
              </SubSection>
            </Section>

            <Section number="5" title="Do Not Track Signals">
              <P>Some browsers offer a "Do Not Track" (DNT) feature that sends a signal to websites requesting that your browsing activity not be tracked. There is currently no uniform standard for how websites should respond to DNT signals. The Site does not currently alter its data collection practices in response to DNT signals. We will update this policy if a universally accepted DNT standard is adopted.</P>
            </Section>

            <Section number="6" title="Global Privacy Control (GPC)">
              <P>Global Privacy Control (GPC) is a browser setting or extension that signals a user's privacy preferences, including opt-out of sale/sharing of personal information under the California Consumer Privacy Act (CCPA/CPRA) and similar laws. ShiFt honors GPC signals to the extent required by applicable law. When a GPC signal is detected, we will treat it as a request to opt out of any sharing of personal data for targeted advertising purposes.</P>
            </Section>

            <Section number="7" title="California Residents — Additional Rights">
              <P>Under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), California residents have the right to:</P>
              <BulletList items={[
                "Know what personal information is collected, used, shared, or sold through cookie-based tracking",
                "Opt out of the sale or sharing of personal information (ShiFt does not sell personal information)",
                "Opt out of cross-context behavioral advertising (use our cookie preferences center or GPC signal)",
                "Request deletion of personal information collected through cookies, subject to exceptions",
              ]} />
              <P>To exercise California rights, email <a href="mailto:privacy@shiftnow.io" className="hover:text-white transition-colors" style={{ color: "#F54A48" }}>privacy@shiftnow.io</a>. See our Privacy Policy for complete information about California privacy rights.</P>
            </Section>

            <Section number="8" title="Cookies in the ShiFtNow.io Platform (Logged-In Clients)">
              <P>When you are logged into the ShiFt NeuralOS™ Platform (app.shiftnow.io or dashboard.shiftnow.io), additional functional and security cookies are used to:</P>
              <BulletList items={[
                "Maintain your authenticated session and prevent unauthorized access",
                "Store dashboard preferences and personalization settings",
                "Track your onboarding progress",
                "Support the Revenue Intelligence Dashboard real-time reporting features",
                "Enable the ShiFt Circle referral tracking system",
                "Support payment processing through our payment partner (Stripe)",
              ]} />
              <P>These Platform-specific cookies are integral to Platform functionality. Disabling them will prevent access to and use of the Platform. Session management cookies expire when you log out or close your browser. Authentication tokens expire after 30 days of inactivity.</P>
            </Section>

            <Section number="9" title="Cookies and Email Communications">
              <P>ShiFt uses web beacons (pixel tags) in HTML email communications to:</P>
              <BulletList items={[
                "Determine whether an email was opened",
                "Track clicks on links within emails",
                "Improve future email communications",
              ]} />
              <P>You can opt out of email tracking by: (a) setting your email client to display emails as plain text, or (b) opting out of marketing emails using the unsubscribe link in any marketing email. Transactional emails (receipts, account notices) may still include pixels for delivery confirmation.</P>
            </Section>

            <Section number="10" title="Third-Party Websites">
              <P>The Site and Platform may contain links to third-party websites, integrations (such as JobNimbus, AccuLynx, Google, Facebook), and embedded content. These third parties may use cookies and tracking technologies subject to their own privacy and cookie policies. ShiFt is not responsible for third-party cookie practices. We encourage you to review the cookie policies of any third-party sites you visit.</P>
            </Section>

            <Section number="11" title="Updates to This Cookie Policy">
              <P>We may update this Cookie Policy periodically to reflect changes in technology, law, or our business practices. We will indicate the "Last Updated" date at the top of this policy. Material changes will be communicated through the Site's cookie consent banner or by email to registered Clients. Continued use of the Site after the effective date of any update constitutes acceptance.</P>
            </Section>

            <Section number="12" title="Contact Us">
              <P>For questions about our use of cookies or this Cookie Policy:</P>
              <BulletList items={[
                "Email: privacy@shiftnow.io",
                "Website: ShiFtNow.io",
                "Address: ShiFt NeuralOS™, 12460 Crabapple Road, Ste 202-522, Alpharetta, GA 30004",
              ]} />
            </Section>

            <div className="mt-10 pt-8 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                ShiFt NeuralOS™ — Cookie Policy — Effective March 15, 2026
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}