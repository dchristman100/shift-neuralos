import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Mail, Phone, MapPin } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";

export default function Contact() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
              Get in{" "}
              <span className="shift-gradient-text">Touch</span>
            </h1>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              Questions about ShiFt? Want to see a demo? We're here to help.
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Name
                  </label>
                  <input
                    type="text"
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
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg font-body"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Company
                </label>
                <input
                  type="text"
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
                  What brings you here?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                >
                  <option>Schedule a demo</option>
                  <option>Get pricing</option>
                  <option>Ask a question</option>
                  <option>Partnership inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-body text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>

              <GradientButton size="lg" className="w-full">
                Send Message
              </GradientButton>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl p-8 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 flex-shrink-0" style={{ color: "#F54A48" }} />
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Email
                      </div>
                      <a href="mailto:hello@shiftnow.io" className="font-body text-white hover:text-[#F54A48] transition-colors">
                        hello@shiftnow.io
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0" style={{ color: "#FA982F" }} />
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Phone
                      </div>
                      <a href="tel:+17074448669" className="font-body text-white hover:text-[#FA982F] transition-colors">
                        (707) SHIFT-NOW
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: "#48BB78" }} />
                    <div>
                      <div className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                        Address
                      </div>
                      <div className="font-body text-white">
                        ShiFt NeuralOS
                        <br />
                        12460 Crabapple Road
                        <br />
                        Ste 202-522
                        <br />
                        Alpharetta, GA 30004
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 backdrop-blur-xl border"
                style={{
                  background: "rgba(245,74,72,0.08)",
                  borderColor: "rgba(245,74,72,0.2)",
                }}
              >
                <div className="font-display text-lg font-bold text-white mb-2">
                  Prefer to talk?
                </div>
                <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Book a 15-minute call with our team to discuss your specific needs.
                </p>
                <button className="font-mono text-sm font-semibold uppercase tracking-wider" style={{ color: "#F54A48" }}>
                  Schedule Call →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}