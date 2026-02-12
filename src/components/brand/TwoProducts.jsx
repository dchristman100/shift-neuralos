import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { Magnet, Target, ArrowRight, Sparkles, Clock, Users, TrendingUp } from "lucide-react";

export default function TwoProducts() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#FA982F" }}>
          The Platform
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Two Systems.{" "}
          <span className="shift-gradient-text">One Revenue Machine.</span>
        </h2>
        <p className="font-body text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          ShiFt NeuralOS has two complementary products that work together—or independently.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* ShiFt Attract */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 md:p-10 backdrop-blur-xl border group transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, rgba(250,152,47,0.08), rgba(250,152,47,0.04))",
            borderColor: "rgba(250,152,47,0.2)",
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: "rgba(250,152,47,0.15)" }}>
            <Magnet className="w-8 h-8" style={{ color: "#FA982F" }} />
          </div>

          <div className="mb-6">
            <h3 className="font-display text-3xl font-bold text-white mb-2">
              ShiFt <span style={{ color: "#FA982F" }}>ATTRACT</span>
            </h3>
            <div className="font-mono text-sm uppercase tracking-wider mb-4"
              style={{ color: "#FA982F" }}>
              Fill the Pipeline
            </div>
            <p className="font-body text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}>
              AI-powered lead generation that brings qualified prospects to your door. Multi-channel campaigns, automated outreach, and intelligent targeting.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              { icon: Sparkles, text: "AI-Powered Campaigns" },
              { icon: Users, text: "Multi-Channel Outreach" },
              { icon: Target, text: "Intelligent Targeting" },
              { icon: TrendingUp, text: "Pipeline Analytics" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <feature.icon className="w-5 h-5" style={{ color: "#FA982F" }} />
                <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t mb-6" style={{ borderColor: "rgba(250,152,47,0.2)" }}>
            <div className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              Best for:
            </div>
            <div className="font-display text-sm font-semibold" style={{ color: "#FA982F" }}>
              Empty pipeline, inconsistent lead flow
            </div>
          </div>

          <a
            href="https://attract.shiftnow.io"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
            style={{ color: "#FA982F" }}
          >
            Explore Attract
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* ShiFt Convert */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-8 md:p-10 backdrop-blur-xl border group transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, rgba(245,74,72,0.08), rgba(245,74,72,0.04))",
            borderColor: "rgba(245,74,72,0.2)",
          }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: "rgba(245,74,72,0.15)" }}>
            <Target className="w-8 h-8" style={{ color: "#F54A48" }} />
          </div>

          <div className="mb-6">
            <h3 className="font-display text-3xl font-bold text-white mb-2">
              ShiFt <span style={{ color: "#F54A48" }}>CONVERT</span>
            </h3>
            <div className="font-mono text-sm uppercase tracking-wider mb-4"
              style={{ color: "#F54A48" }}>
              Close the Deals
            </div>
            <p className="font-body text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}>
              AI-powered lead conversion that turns prospects into booked appointments. 24/7 response, instant qualification, automated booking.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              { icon: Clock, text: "30-Second Response Time" },
              { icon: Sparkles, text: "AI Qualification" },
              { icon: Target, text: "Automated Appointment Booking" },
              { icon: TrendingUp, text: "Show Rate Optimization" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <feature.icon className="w-5 h-5" style={{ color: "#F54A48" }} />
                <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t mb-6" style={{ borderColor: "rgba(245,74,72,0.2)" }}>
            <div className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              Best for:
            </div>
            <div className="font-display text-sm font-semibold" style={{ color: "#F54A48" }}>
              Leads not converting, slow response time
            </div>
          </div>

          <a
            href="https://go.shiftnow.io"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
            style={{ color: "#F54A48" }}
          >
            Explore Convert
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Connector Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center rounded-2xl p-8 backdrop-blur-xl border"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <p className="font-display text-xl md:text-2xl font-bold text-white">
          <span style={{ color: "#FA982F" }}>Attract</span> brings them in.{" "}
          <span style={{ color: "#F54A48" }}>Convert</span> closes them.
          <br />
          <span className="shift-gradient-text">Together, they're unstoppable.</span>
        </p>
      </motion.div>
    </SectionWrapper>
  );
}