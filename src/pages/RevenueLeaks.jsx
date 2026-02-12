import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Phone, Trash2, Ghost, TrendingDown, Clock, DollarSign } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function RevenueLeaks() {
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
            The Three Revenue Leaks{" "}
            <span className="shift-gradient-text">Draining Your Business</span>
          </h1>
          <p className="font-body text-xl max-w-3xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            You're losing $35K-$100K+ every month. Here's exactly where.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Leak #1: Missed Calls */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.03)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(245,74,72,0.12)" }}>
                <Phone className="w-8 h-8" style={{ color: "#F54A48" }} />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  Leak #1
                </div>
                <h2 className="font-display text-3xl font-bold text-white">
                  Missed Calls
                </h2>
              </div>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              42% of Leads Call After Hours
            </h3>

            <p className="font-body text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Your phone rings at 6:47 PM. A homeowner with hail damage wants an inspection. They leave a voicemail. You call back at 9 AM the next day. Too late—your competitor already booked them at 7:12 PM.
            </p>

            <div className="rounded-2xl p-6 backdrop-blur-xl border mb-8"
              style={{
                background: "rgba(245,74,72,0.08)",
                borderColor: "rgba(245,74,72,0.2)",
              }}>
              <div className="font-display text-4xl font-bold mb-2" style={{ color: "#F54A48" }}>
                $12K-$35K
              </div>
              <div className="font-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                Average monthly revenue lost to missed calls
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Clock, label: "Industry Stat", value: "78% of buyers choose the first responder" },
                { icon: TrendingDown, label: "Your Reality", value: "Average callback time: 4.2 hours" },
                { icon: DollarSign, label: "Cost Per Miss", value: "$2,400-$8,500 per missed call" },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <stat.icon className="w-5 h-5 mt-1" style={{ color: "#F54A48" }} />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider mb-1"
                      style={{ color: "rgba(255,255,255,0.4)" }}>
                      {stat.label}
                    </div>
                    <div className="font-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {stat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 backdrop-blur-xl border"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="font-mono text-xs uppercase tracking-wider mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              Calculate Your Missed Call Cost
            </div>
            <div className="space-y-6">
              <div>
                <label className="font-body text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Monthly incoming calls
                </label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full px-4 py-3 rounded-lg font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label className="font-body text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Average job value
                </label>
                <input
                  type="number"
                  placeholder="12000"
                  className="w-full px-4 py-3 rounded-lg font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
              <div className="rounded-xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                  border: "1px solid rgba(245,74,72,0.3)",
                }}>
                <div className="font-body text-sm mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Estimated monthly loss:
                </div>
                <div className="font-display text-3xl font-bold" style={{ color: "#F54A48" }}>
                  $28,400
                </div>
              </div>
              <GradientButton className="w-full">
                Get Full Revenue Audit
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Leak #2: Junk Leads */}
      <SectionWrapper className="bg-gradient-to-b from-[rgba(245,74,72,0.03)] to-[rgba(250,152,47,0.03)]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="rounded-2xl p-8 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="font-display text-xl font-bold text-white mb-6">
                The Hidden Cost of Bad Leads
              </div>
              <div className="space-y-4">
                {[
                  { label: "Lead cost", value: "$45-$250 per lead" },
                  { label: "Sales team time", value: "2.5 hrs per junk lead" },
                  { label: "Qualification rate", value: "Only 27% are qualified" },
                  { label: "Close rate on junk", value: "2%" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {item.label}
                    </span>
                    <span className="font-mono text-sm font-semibold" style={{ color: "#FA982F" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(250,152,47,0.12)" }}>
                <Trash2 className="w-8 h-8" style={{ color: "#FA982F" }} />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  Leak #2
                </div>
                <h2 className="font-display text-3xl font-bold text-white">
                  Junk Leads
                </h2>
              </div>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              You're Paying for Leads That Will Never Buy
            </h3>

            <p className="font-body text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Tire kickers. Price shoppers. People "just looking." Your sales team wastes hours chasing leads that were never going to convert. Meanwhile, real buyers slip through.
            </p>

            <div className="rounded-2xl p-6 backdrop-blur-xl border mb-8"
              style={{
                background: "rgba(250,152,47,0.08)",
                borderColor: "rgba(250,152,47,0.2)",
              }}>
              <div className="font-display text-4xl font-bold mb-2" style={{ color: "#FA982F" }}>
                $8K-$25K
              </div>
              <div className="font-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                Average monthly cost of junk leads
              </div>
            </div>

            <div className="rounded-xl p-6 backdrop-blur-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}>
              <div className="font-body text-sm italic" style={{ color: "rgba(255,255,255,0.6)" }}>
                "We were spending $6,500/month on leads. Only 18 out of 120 were actually qualified. ShiFt's AI filters out the garbage before it hits my team."
              </div>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="font-display text-sm font-semibold text-white">Michael R.</div>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Storm Pros Roofing, Houston TX
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Leak #3: Invisible Buyers */}
      <SectionWrapper className="bg-gradient-to-b from-[rgba(250,152,47,0.03)] to-transparent">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(72,187,120,0.12)" }}>
                <Ghost className="w-8 h-8" style={{ color: "#48BB78" }} />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}>
                  Leak #3
                </div>
                <h2 className="font-display text-3xl font-bold text-white">
                  Invisible Buyers
                </h2>
              </div>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              High-Intent Buyers You Never See
            </h3>

            <p className="font-body text-lg mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              They check your website at 11 PM. They read reviews. They're ready to buy. But they don't fill out a form or leave a voicemail. By morning, they've booked with someone who responded faster.
            </p>

            <div className="rounded-2xl p-6 backdrop-blur-xl border mb-8"
              style={{
                background: "rgba(72,187,120,0.08)",
                borderColor: "rgba(72,187,120,0.2)",
              }}>
              <div className="font-display text-4xl font-bold mb-2" style={{ color: "#48BB78" }}>
                $15K-$40K
              </div>
              <div className="font-body" style={{ color: "rgba(255,255,255,0.7)" }}>
                Average monthly revenue from invisible buyers
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl p-5 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}>
                <div className="font-display text-2xl font-bold shift-gradient-text mb-1">67%</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  of website visitors never contact you
                </div>
              </div>
              <div className="rounded-xl p-5 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}>
                <div className="font-display text-2xl font-bold shift-gradient-text mb-1">4.2 hours</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  industry average response time
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 backdrop-blur-xl border"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="font-display text-xl font-bold text-white mb-6">
              The Monopoly Window
            </div>
            <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Research shows you have a 5-minute window to capture a hot lead before they move on to your competitor. After 5 minutes, your odds of conversion drop by 80%.
            </p>

            <div className="space-y-4">
              {[
                { time: "0-5 min", rate: "Close rate: 78%" },
                { time: "5-30 min", rate: "Close rate: 42%" },
                { time: "30-60 min", rate: "Close rate: 18%" },
                { time: "1-4 hours", rate: "Close rate: 7%" },
                { time: "4+ hours", rate: "Close rate: 2%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 rounded-lg"
                  style={{
                    background: i === 0 ? "rgba(72,187,120,0.12)" : "rgba(255,255,255,0.02)",
                    border: i === 0 ? "1px solid rgba(72,187,120,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="font-mono text-sm font-semibold"
                    style={{ color: i === 0 ? "#48BB78" : "rgba(255,255,255,0.7)" }}>
                    {item.time}
                  </span>
                  <span className="font-body text-sm"
                    style={{ color: i === 0 ? "#48BB78" : "rgba(255,255,255,0.5)" }}>
                    {item.rate}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Plug These Leaks?
          </h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            See exactly how much revenue you're losing—and how much ShiFt can recover.
          </p>
          <GradientButton size="lg">
            Calculate My Revenue Leak
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}