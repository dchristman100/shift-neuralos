import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionWrapper from "../components/shared/SectionWrapper";
import GradientButton from "../components/shared/GradientButton";

const planOptions = {
  ACTIVATE: {
    plan_name: "ACTIVATE",
    // type: "Core Package",
    price: 7500,
    buildprice: 5000,
    features: [
      { text: "Google Business Profile Optimization" },
      { text: "Local Services Ads (managed + spend included)" },
      { text: "24/7 AI Lead Response - 3-second reply" },
      { text: "AI Qualification + Appointment Booking" },
      { text: "Live deal-tracking dashboard" },
      { text: "Facebook Ads", disabled: true },
      { text: "Retargeting", disabled: true },
      { text: "SMS + Email Reactivation", disabled: true },
    ],
  },
  AMPLIFY: {
    plan_name: "AMPLIFY",
    // type: "Core Package",
    price: 10000,
    buildprice: 5000,
    features: [
      { text: "Google Business Profile Optimization" },
      { text: "Local Services Ads (managed + spend included)" },
      { text: "24/7 AI Lead Response - 3-second reply" },
      { text: "AI Qualification + Appointment Booking" },
      { text: "Live deal-tracking dashboard" },
      { text: "Facebook Ads (managed + spend included)" },
      { text: "Retargeting", disabled: true },
      { text: "SMS + Email Reactivation", disabled: true },
    ],
  },
  DOMINATE: {
    plan_name: "DOMINATE",
    // type: "Core Package",
    price: 15000,
    buildprice: 5000,
    features: [
      { text: "Google Business Profile Optimization" },
      { text: "Local Services Ads (managed + spend included)" },
      { text: "24/7 AI Lead Response - 3-second reply" },
      { text: "AI Qualification + Appointment Booking" },
      { text: "Live deal-tracking dashboard" },
      { text: "Facebook Ads (managed + spend included)" },
      { text: "Retargeting - all channels" },
      { text: "SMS + Email Reactivation System" },
    ],
  },
};

const packages = [
  {
    ...planOptions.ACTIVATE,
    packageNumber: "PACKAGE 01",
    description:
      "Turn on your AI revenue machine. Organic dominance + local intent ads + AI conversion running 24/7.",
    roi: "$15K/mo",
    guaranteed: "2+ ROI",
    adSpend: "Included",
    cta: "Start with ACTIVATE",
    accent: "#F54A48",
    titleColor: "#FF5A52",
  },
  {
    ...planOptions.AMPLIFY,
    packageNumber: "PACKAGE 02",
    description:
      "Widen the funnel. Add Facebook and push your AI machine into a higher gear.",
    roi: "$30K/mo",
    guaranteed: "3+ ROI",
    adSpend: "Included",
    cta: "Start with AMPLIFY",
    popular: true,
    accent: "#FF8E2B",
    titleColor: "#FF9E2F",
  },
  {
    ...planOptions.DOMINATE,
    packageNumber: "PACKAGE 03",
    description:
      "Own every channel. Capture new leads AND recover every lead that got away.",
    roi: "$60K/mo",
    guaranteed: "4+ ROI",
    adSpend: "Included",
    cta: "Start with DOMINATE",
    accent: "#FFD52E",
    titleColor: "#FFE92E",
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function Pricing() {
  return (
    <main className="pt-24">
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Pricing That Pays <span className="shift-gradient-text">For Itself</span>
          </h1>
          <p
            className="mx-auto mb-8 max-w-3xl font-body text-xl"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Less than your worst salesperson. More reliable than your best one.
          </p>
          <p
            className="font-mono text-sm uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Build fee + monthly management. Calculate your ROI first.
          </p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.plan_name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border p-4 sm:p-5 backdrop-blur-xl ${pkg.popular ? "md:-translate-y-4" : ""
                }`}
              style={{
                background: "linear-gradient(180deg, rgba(11,17,68,0.98), rgba(7,13,55,0.98))",
                borderColor: pkg.popular ? "rgba(255,142,43,0.95)" : "rgba(255,255,255,0.12)",
                boxShadow: pkg.popular ? "0 0 0 1px rgba(255,142,43,0.25)" : "none",
              }}
            >
              <div
                className="absolute left-0 top-0 h-[3px] w-full"
                style={{ background: pkg.accent }}
              />
              {pkg.popular && (
                <div
                  className="absolute right-4 top-4 rounded-md px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, #FF7D25, #FF5A52)",
                    color: "#FFF5EA",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6 pt-3">
                <div
                  className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em]"
                  style={{ color: "rgba(196,208,255,0.45)" }}
                >
                  {pkg.packageNumber}
                </div>
                <h3
                  className="mb-3 font-display text-3xl font-black uppercase leading-none"
                  style={{ color: pkg.titleColor }}
                >
                  {pkg.plan_name}
                </h3>
                <p className="max-w-[26ch] font-body text-xs leading-5" style={{ color: "#AAB3D6" }}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-6 space-y-4">

                {/* Build Price */}
                <div className="flex justify-between items-center">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.26em]"
                    style={{ color: "rgba(196,208,255,0.38)" }}
                  >
                    30-Day Build Period
                  </div>

                  <div className="font-display text-1xl font-black text-white">
                    {formatCurrency(pkg.buildprice)}
                  </div>
                </div>

                {/* Monthly Retainer */}
                <div className="flex justify-between items-center">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.26em]"
                    style={{ color: "rgba(196,208,255,0.38)" }}
                  >
                    Monthly Retainer
                  </div>

                  <div className="font-display text-1xl font-black text-white">
                    {formatCurrency(pkg.price)}
                    <span
                      className="ml-1 font-body text-xs font-normal"
                      style={{ color: "rgba(196,208,255,0.58)" }}
                    >
                      /mo
                    </span>
                  </div>
                </div>

              </div>

              <div className="mb-6 grid grid-cols-3 gap-2">
                <div
                  className="rounded-lg border px-3 py-3"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="mb-1 font-mono text-[9px] uppercase tracking-[0.24em]"
                    style={{ color: "rgba(196,208,255,0.35)" }}
                  >
                    ROI Min
                  </div>
                  <div className="font-display text-sm font-black text-white">{pkg.roi}</div>
                </div>
                <div
                  className="rounded-lg border px-3 py-3"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="mb-1 font-mono text-[9px] uppercase tracking-[0.24em]"
                    style={{ color: "rgba(196,208,255,0.35)" }}
                  >
                    Guaranteed
                  </div>
                  <div className="font-display text-sm font-black" style={{ color: "#F7F0C8" }}>
                    {pkg.guaranteed}
                  </div>
                </div>
                <div
                  className="rounded-lg border px-3 py-3"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="mb-1 font-mono text-[9px] uppercase tracking-[0.24em]"
                    style={{ color: "rgba(196,208,255,0.35)" }}
                  >
                    Ad Spend
                  </div>
                  <div className="font-display text-sm font-black" style={{ color: "#4CDE7A" }}>
                    {pkg.adSpend}
                  </div>
                </div>
              </div>

              <div className="mb-8 space-y-2.5">
                {pkg.features.map((feature) => (
                  <div key={feature.text} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                      style={{
                        color: feature.disabled
                          ? "rgba(158,172,220,0.22)"
                          : "#FF5A52",
                      }}
                    />
                    <span
                      className="font-body text-xs leading-5"
                      style={{
                        color: feature.disabled ? "rgba(122,136,183,0.55)" : "#F1F4FF",
                        textDecoration: feature.disabled ? "none" : "none",
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="w-full rounded-lg border px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: pkg.popular
                    ? "linear-gradient(135deg, #FF8E2B, #FF5A52)"
                    : "rgba(255,255,255,0.02)",
                  borderColor: pkg.popular ? "transparent" : "rgba(110,126,186,0.35)",
                  color: "#FFFFFF",
                }}
              >
                <span className="inline-flex items-center gap-1.5">
                  {pkg.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.03)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">
              See Your ROI Before You Buy
            </h2>
            <p className="font-body text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Most clients recover their investment in the first 30-45 days.
            </p>
          </div>

          <div
            className="rounded-2xl border p-8 backdrop-blur-xl md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                <label
                  className="mb-2 block font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Monthly Revenue
                </label>
                <input
                  type="number"
                  placeholder="500000"
                  className="w-full rounded-lg px-4 py-3 font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label
                  className="mb-2 block font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Monthly Leads
                </label>
                <input
                  type="number"
                  placeholder="150"
                  className="w-full rounded-lg px-4 py-3 font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label
                  className="mb-2 block font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Current Close Rate (%)
                </label>
                <input
                  type="number"
                  placeholder="25"
                  className="w-full rounded-lg px-4 py-3 font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
              <div>
                <label
                  className="mb-2 block font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  After-Hours Lead %
                </label>
                <input
                  type="number"
                  placeholder="42"
                  className="w-full rounded-lg px-4 py-3 font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
            </div>

            <div
              className="mb-6 rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                border: "1px solid rgba(245,74,72,0.3)",
              }}
            >
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="mb-2 font-body text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Monthly Revenue Leaked
                  </div>
                  <div className="font-display text-2xl font-bold" style={{ color: "#F54A48" }}>
                    $67,400
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-body text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Projected Recovery
                  </div>
                  <div className="font-display text-2xl font-bold" style={{ color: "#48BB78" }}>
                    $48,200
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-body text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                    ROI Timeline
                  </div>
                  <div className="font-display text-2xl font-bold text-white">32 days</div>
                </div>
              </div>
            </div>

            <div
              className="mb-6 rounded-xl border p-5 backdrop-blur-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="mb-3 font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                Recommended Package:
              </div>
              <div className="shift-gradient-text font-display text-xl font-bold">AMPLIFY</div>
            </div>

            <GradientButton size="lg" className="w-full">
              Get Custom ROI Report
              <ArrowRight className="h-5 w-5" />
            </GradientButton>
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-white md:text-4xl">
            Pricing Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How is pricing determined?",
                a: "Pricing is based on your lead volume, team size, and feature requirements. We customize each package to fit your specific business.",
              },
              {
                q: "Is there a setup fee?",
                a: "The build fee covers setup, launch, and system configuration. Ongoing optimization is included in your monthly management fee.",
              },
              {
                q: "Can I switch plans?",
                a: "Yes. You can move up as your team, lead volume, and channel mix expand.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "We focus on measurable revenue outcomes. If there is a concern, we review performance and adjust the system with you directly.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border p-6 backdrop-blur-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="mb-3 font-display text-lg font-semibold text-white">{faq.q}</div>
                <div className="font-body" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}
