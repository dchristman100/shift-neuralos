import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { ArrowRight, Phone, Brain, Calendar, Zap } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";

export default function HowItWorks() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            How ShiFt Convert{" "}
            <span className="shift-gradient-text">Plugs Your Revenue Leaks</span>
          </h1>
          <p className="font-body text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            From first contact to booked appointment—without lifting a finger
          </p>
        </motion.div>

        {/* Animated Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-32"
        >
          {["Lead Arrives", "AI Responds (30 sec)", "AI Qualifies", "AI Books", "You Close"].map((step, i) => (
            <React.Fragment key={i}>
              <div className="rounded-xl px-6 py-3 backdrop-blur-xl border font-mono text-sm font-semibold"
                style={{
                  background: i === 4 ? "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))" : "rgba(255,255,255,0.04)",
                  borderColor: i === 4 ? "rgba(245,74,72,0.3)" : "rgba(255,255,255,0.08)",
                  color: i === 4 ? "#F54A48" : "white",
                }}>
                {step}
              </div>
              {i < 4 && <ArrowRight className="w-5 h-5 text-gray-500 hidden md:block" />}
            </React.Fragment>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Stage 1: Capture */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.02)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(245,74,72,0.12)",
                color: "#F54A48",
                border: "1px solid rgba(245,74,72,0.3)",
              }}>
              Stage 1
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Instant Capture
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              Every lead that comes in—phone, web form, text, Facebook—gets an instant AI response in under 30 seconds. No voicemail. No "we'll call you back." Just immediate engagement.
            </p>
            <div className="space-y-4">
              {["Phone calls", "Web forms", "Text messages", "Facebook Messenger", "Google Ads"].map((channel, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Zap className="w-5 h-5" style={{ color: "#F54A48" }} />
                  <span className="font-body" style={{ color: "rgba(255,255,255,0.7)" }}>{channel}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-12 backdrop-blur-xl border flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
              minHeight: "400px",
            }}
          >
            <Phone className="w-32 h-32" style={{ color: "#F54A48", opacity: 0.3 }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stage 2: Qualify */}
      <SectionWrapper className="bg-gradient-to-b from-[rgba(245,74,72,0.02)] to-[rgba(250,152,47,0.02)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-12 backdrop-blur-xl border flex items-center justify-center order-2 md:order-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
              minHeight: "400px",
            }}
          >
            <Brain className="w-32 h-32" style={{ color: "#FA982F", opacity: 0.3 }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(250,152,47,0.12)",
                color: "#FA982F",
                border: "1px solid rgba(250,152,47,0.3)",
              }}>
              Stage 2
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              AI Qualification
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              Our AI asks the right questions to separate high-intent buyers from tire kickers. Lead scoring happens in real-time, so your sales team only talks to qualified prospects.
            </p>
            <div className="rounded-xl p-6 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}>
              <div className="font-mono text-xs uppercase tracking-wider mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                Sample AI Questions:
              </div>
              <ul className="space-y-3 font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <li>• "What type of roofing service do you need?"</li>
                <li>• "When did you notice the issue?"</li>
                <li>• "Is this for insurance or out-of-pocket?"</li>
                <li>• "What's your timeframe for getting this done?"</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stage 3: Convert */}
      <SectionWrapper className="bg-gradient-to-b from-[rgba(250,152,47,0.02)] to-transparent">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 font-mono text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(72,187,120,0.12)",
                color: "#48BB78",
                border: "1px solid rgba(72,187,120,0.3)",
              }}>
              Stage 3
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Automated Booking
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              Qualified leads get booked instantly onto your calendar. No back-and-forth emails. No phone tag. Just confirmed appointments with automated reminders and follow-ups.
            </p>
            <div className="space-y-4">
              <div className="rounded-xl p-4 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}>
                <div className="font-display text-2xl font-bold shift-gradient-text mb-1">3.2x</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  More appointments booked
                </div>
              </div>
              <div className="rounded-xl p-4 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}>
                <div className="font-display text-2xl font-bold shift-gradient-text mb-1">89%</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Average show rate
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-12 backdrop-blur-xl border flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
              minHeight: "400px",
            }}
          >
            <Calendar className="w-32 h-32" style={{ color: "#48BB78", opacity: 0.3 }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Integration Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Works With Your Existing Tools
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Setup in 24 hours, not 24 days. ShiFt integrates seamlessly with the tools you already use.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {["GoHighLevel", "Calendly", "Google Calendar", "Zapier", "Slack", "HubSpot", "Salesforce", "Zoom"].map((tool, i) => (
            <div
              key={i}
              className="rounded-xl p-6 backdrop-blur-xl border flex items-center justify-center font-display font-semibold text-white"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {tool}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <GradientButton size="lg">
            See It in Action
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}