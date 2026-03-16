import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import GradientButton from "../components/shared/GradientButton";
import { ArrowRight, TrendingUp, DollarSign, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

const cases = [
  {
    company: "Titan Roofing Services",
    location: "Dallas, TX",
    package: "Convert",
    color: "#F54A48",
    headline: "From $750K to $7M in 6 Years",
    problem: "Missing 42% of inbound leads. No after-hours coverage. $47K lost in a single storm month.",
    result: "ShiFt implemented in 36 hours. Lead capture rate went from 58% to 98%. Revenue compounded to $7M+ by 2026.",
    stats: [
      { icon: DollarSign, value: "$7M+", label: "Annual Revenue" },
      { icon: TrendingUp, value: "427%", label: "ROI on ShiFt" },
      { icon: Calendar, value: "89%", label: "Show Rate" },
      { icon: Users, value: "3.2×", label: "More Appointments" },
    ],
    quote: "ShiFt didn't just fix our lead problem — it became the foundation of our entire growth strategy.",
    person: "Jake Torres, Owner",
    featured: true,
  },
  {
    company: "Storm Pros Roofing",
    location: "Houston, TX",
    package: "Convert",
    color: "#FA982F",
    headline: "$72K Booked in 30 Days",
    problem: "Paying $6,500/month for leads. Only 18 out of 120 qualified. Sales team burned out on junk.",
    result: "AI qualification eliminated tire-kickers before they hit the calendar. First 30 days: 340 conversations, 47 appointments, 9 jobs won.",
    stats: [
      { icon: DollarSign, value: "$72K", label: "Revenue in 30 days" },
      { icon: Users, value: "47", label: "Appointments Booked" },
      { icon: Calendar, value: "9", label: "Jobs Won" },
      { icon: TrendingUp, value: "20×", label: "Monthly ROI" },
    ],
    quote: "We were spending $6,500/month on leads. Only 18 out of 120 were actually qualified. ShiFt's AI filters out the garbage before it hits my team.",
    person: "Michael R., Owner",
    featured: false,
  },
  {
    company: "Summit Roofing Group",
    location: "Denver, CO",
    package: "Attract + Convert",
    color: "#48BB78",
    headline: "Pipeline Filled Year-Round",
    problem: "Referral-dependent business. Pipeline dried up in off-season. No consistent lead generation.",
    result: "ShiFt Attract built a multi-channel lead engine. Combined with Convert's AI qualification, booked jobs in January exceeded the previous August peak.",
    stats: [
      { icon: TrendingUp, value: "3×", label: "Off-Season Revenue" },
      { icon: Calendar, value: "100%", label: "Lead Capture Rate" },
      { icon: DollarSign, value: "$38K", label: "Added Monthly Revenue" },
      { icon: Users, value: "0", label: "Extra Headcount Needed" },
    ],
    quote: "We stopped dreading winter. The pipeline keeps filling whether we're working or not.",
    person: "Sarah M., Operations Director",
    featured: false,
  },
];

export default function CaseStudies() {
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
            Case Studies
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Real Contractors.<br />
            <span className="shift-gradient-text">Real Revenue.</span>
          </h1>
          <p className="font-body text-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Not impressions. Not clicks. Booked jobs and dollars closed.
          </p>
        </motion.div>

        <div className="space-y-8 mb-20">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${c.color}33` }}
            >
              {/* Top bar */}
              <div style={{ height: "3px", background: c.color }} />
              <div className="p-8 md:p-10" style={{ background: `${c.color}08` }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs px-2 py-1 rounded uppercase tracking-wider"
                        style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}33` }}>
                        {c.package}
                      </span>
                      <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{c.location}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{c.company}</h2>
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-black" style={{ color: c.color }}>{c.headline}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>The Problem</div>
                    <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{c.problem}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>The Result</div>
                    <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{c.result}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {c.stats.map((s, si) => (
                    <div key={si} className="rounded-xl p-4 text-center"
                      style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="font-display text-2xl font-black mb-1" style={{ color: c.color }}>{s.value}</div>
                      <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="font-body text-sm italic mb-3" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                    "{c.quote}"
                  </p>
                  <div className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>— {c.person}</div>
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
            Ready to Write Your Story?
          </h2>
          <p className="font-body text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Book a 20-minute call. We'll show you the exact revenue opportunity in your market.
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