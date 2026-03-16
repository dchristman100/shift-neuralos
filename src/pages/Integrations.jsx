import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import GradientButton from "../components/shared/GradientButton";
import { ArrowRight, CheckCircle } from "lucide-react";

const integrationGroups = [
  {
    category: "CRM & Sales",
    color: "#F54A48",
    tools: [
      { name: "GoHighLevel", desc: "Full 2-way sync — contacts, pipelines, appointments, and conversations." },
      { name: "HubSpot", desc: "Leads flow directly into your HubSpot CRM with conversation history." },
      { name: "Salesforce", desc: "Enterprise-grade CRM integration with custom field mapping." },
    ],
  },
  {
    category: "Scheduling & Calendar",
    color: "#FA982F",
    tools: [
      { name: "Google Calendar", desc: "AI books appointments directly onto your Google Calendar in real-time." },
      { name: "Calendly", desc: "Route qualified leads to your Calendly booking page automatically." },
      { name: "Outlook Calendar", desc: "Microsoft 365 calendar sync for enterprise teams." },
    ],
  },
  {
    category: "Communication",
    color: "#48BB78",
    tools: [
      { name: "Twilio", desc: "Carrier-grade SMS and voice infrastructure powering every AI conversation." },
      { name: "Slack", desc: "Real-time alerts for new leads, bookings, and revenue milestones." },
      { name: "Zoom", desc: "Zoom meetings auto-created for virtual inspection appointments." },
    ],
  },
  {
    category: "Advertising & Lead Gen",
    color: "#F54A48",
    tools: [
      { name: "Google Ads", desc: "Lead form extensions feed directly into the AI response system." },
      { name: "Facebook / Meta", desc: "Facebook Lead Ads and Messenger conversations handled automatically." },
      { name: "Google LSA", desc: "Local Service Ads leads captured and qualified in seconds." },
    ],
  },
  {
    category: "Workflow & Automation",
    color: "#FA982F",
    tools: [
      { name: "Zapier", desc: "Connect ShiFt to 5,000+ apps with no-code automation workflows." },
      { name: "Webhook / API", desc: "Custom integrations with any platform via REST API and webhooks." },
      { name: "Make (Integromat)", desc: "Advanced multi-step automation for complex operational workflows." },
    ],
  },
];

export default function Integrations() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(245,74,72,0.12)", color: "#F54A48", border: "1px solid rgba(245,74,72,0.3)" }}>
            Integrations
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Works With the Tools<br />
            <span className="shift-gradient-text">You Already Use</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            ShiFt plugs into your existing stack. Setup in 24 hours — not 24 days.
          </p>
        </motion.div>

        {/* Setup promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          style={{ background: "linear-gradient(135deg, rgba(245,74,72,0.07), rgba(250,152,47,0.04))", border: "1px solid rgba(245,74,72,0.2)" }}
        >
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-white mb-3">Zero-Disruption Setup</h2>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
              ShiFt connects to your existing tools without replacing them. Your team keeps using the same CRM, calendar, and workflow tools. We just make them work automatically.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            {["No new software to learn", "Live in 24–48 hours", "Dedicated setup support"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#48BB78" }} />
                <span className="font-body text-sm text-white">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration groups */}
        <div className="space-y-10 mb-20">
          {integrationGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-5 rounded-full" style={{ background: group.color }} />
                <h3 className="font-mono text-xs uppercase tracking-widest" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {group.tools.map((tool, ti) => (
                  <div
                    key={ti}
                    className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="font-display text-lg font-bold text-white mb-2">{tool.name}</div>
                    <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{tool.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white mb-4">Don't See Your Tool?</h2>
          <p className="font-body text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            We integrate with virtually any platform via our API and Zapier. Tell us what you use and we'll build the connection.
          </p>
          <GradientButton size="lg" href="https://makea.shiftnow.io/widget/bookings/reality">
            Talk to Our Team
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}