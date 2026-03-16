import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import GradientButton from "../components/shared/GradientButton";
import { Zap, Brain, Calendar, BarChart3, MessageSquare, Shield, Clock, Phone, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "30-Second AI Response",
    desc: "Every inbound lead — call, text, form, Facebook — gets an intelligent AI response in under 30 seconds. 24 hours a day, 7 days a week. No missed opportunities.",
    color: "#F54A48",
    stat: "<30s",
    statLabel: "Response time",
  },
  {
    icon: Brain,
    title: "Roofing-Native AI Qualification",
    desc: "Our AI asks the right questions — damage type, insurance vs. out-of-pocket, property details, timeline — and scores every lead before it touches your calendar.",
    color: "#FA982F",
    stat: "27%→89%",
    statLabel: "Qualified lead rate",
  },
  {
    icon: Calendar,
    title: "Automatic Appointment Booking",
    desc: "Qualified leads are booked directly onto your calendar with confirmations sent to you and the homeowner. No phone tag. No back-and-forth.",
    color: "#48BB78",
    stat: "3.2×",
    statLabel: "More appointments",
  },
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    desc: "Every missed call gets an instant AI text follow-up within seconds — keeping the lead warm and capturing conversations you'd otherwise lose forever.",
    color: "#F54A48",
    stat: "78%",
    statLabel: "Leads saved from voicemail",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Conversations",
    desc: "ShiFt handles SMS, phone, web chat, Facebook Messenger, and email in one unified AI inbox. Leads can reach you however they prefer.",
    color: "#FA982F",
    stat: "5+",
    statLabel: "Channels covered",
  },
  {
    icon: BarChart3,
    title: "Revenue Tracking & Reports",
    desc: "Every lead, appointment, and won job is tracked. Monthly revenue reports show you the exact ROI of your ShiFt investment — in dollars, not impressions.",
    color: "#48BB78",
    stat: "427%",
    statLabel: "Avg client ROI",
  },
  {
    icon: Clock,
    title: "5-Touch Follow-Up Sequences",
    desc: "Leads that don't book immediately get automated follow-up across SMS and email. Most revenue is in the follow-up — ShiFt never forgets to do it.",
    color: "#F54A48",
    stat: "5×",
    statLabel: "Follow-up touches",
  },
  {
    icon: Shield,
    title: "90-Day Revenue Floor",
    desc: "If the system doesn't generate incremental revenue above your baseline within 90 days, billing pauses until it does. You pay when it produces.",
    color: "#FFD700",
    stat: "100%",
    statLabel: "Performance-backed",
  },
];

export default function Features() {
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
            Platform Features
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Everything Your Revenue Engine<br />
            <span className="shift-gradient-text">Needs to Run</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            ShiFt is not a tool you manage. It's infrastructure that runs your lead pipeline 24/7 — automatically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-2xl p-8 flex gap-6 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${f.color}18` }}>
                  <f.icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="font-body text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>{f.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-black" style={{ color: f.color }}>{f.stat}</span>
                  <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{f.statLabel}</span>
                </div>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            See It Running in Your Market
          </h2>
          <p className="font-body text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Book a 20-minute strategy call and we'll show you exactly what your AI Revenue Engine looks like — live.
          </p>
          <GradientButton size="lg" href="https://makea.shiftnow.io/widget/bookings/reality">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}