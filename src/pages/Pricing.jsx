import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Check, ArrowRight } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";

const tiers = [
  {
    name: "Starter",
    subtitle: "For 1-2 person teams",
    price: "Custom",
    features: [
      "Multi-channel AI response (30 sec)",
      "Basic lead qualification",
      "Calendar integration",
      "Email support",
      "Up to 100 leads/month",
    ],
    bestFor: "Just starting to scale",
    cta: "Get Started",
  },
  {
    name: "Growth",
    subtitle: "For 3-10 person teams",
    price: "Custom",
    features: [
      "Everything in Starter",
      "Advanced AI qualification & scoring",
      "Multi-location support",
      "CRM integrations",
      "Priority support",
      "Up to 500 leads/month",
      "Custom AI training",
    ],
    bestFor: "Ready to dominate",
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Scale",
    subtitle: "For 10+ person teams",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Unlimited leads",
      "Dedicated success manager",
      "Custom integrations",
      "White-label options",
      "Advanced analytics dashboard",
      "API access",
    ],
    bestFor: "Market leaders",
    cta: "Contact Sales",
  },
];

export default function Pricing() {
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
            Pricing That Pays{" "}
            <span className="shift-gradient-text">For Itself</span>
          </h1>
          <p className="font-body text-xl max-w-3xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Less than your worst salesperson. More reliable than your best one.
          </p>
          <p className="font-mono text-sm tracking-wider uppercase"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            Calculate your ROI first →
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Pricing Cards */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 backdrop-blur-xl border ${
                tier.popular ? "md:-translate-y-4" : ""
              }`}
              style={{
                background: tier.popular
                  ? "linear-gradient(135deg, rgba(245,74,72,0.08), rgba(250,152,47,0.08))"
                  : "rgba(255,255,255,0.04)",
                borderColor: tier.popular ? "rgba(245,74,72,0.3)" : "rgba(255,255,255,0.08)",
              }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, #F54A48, #FA982F)",
                    color: "white",
                  }}>
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {tier.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <div className="font-display text-4xl font-bold text-white mb-1">
                  {tier.price}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Pricing
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: tier.popular ? "#F54A48" : "#48BB78" }} />
                    <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t mb-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="font-body text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Best for:
                </div>
                <div className="font-display text-sm font-semibold" style={{ color: tier.popular ? "#F54A48" : "white" }}>
                  {tier.bestFor}
                </div>
              </div>

              {tier.popular ? (
                <GradientButton className="w-full">
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </GradientButton>
              ) : (
                <button className="w-full px-6 py-3 rounded-lg font-mono font-semibold uppercase tracking-wide border transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "white",
                  }}>
                  {tier.cta}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ROI Calculator Preview */}
      <SectionWrapper className="bg-gradient-to-b from-transparent to-[rgba(245,74,72,0.03)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              See Your ROI Before You Buy
            </h2>
            <p className="font-body text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Most clients recover their investment in the first 30-45 days.
            </p>
          </div>

          <div className="rounded-2xl p-8 md:p-10 backdrop-blur-xl border"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="font-body text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Monthly Revenue
                </label>
                <input
                  type="number"
                  placeholder="500000"
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
                  Monthly Leads
                </label>
                <input
                  type="number"
                  placeholder="150"
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
                  Current Close Rate (%)
                </label>
                <input
                  type="number"
                  placeholder="25"
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
                  After-Hours Lead %
                </label>
                <input
                  type="number"
                  placeholder="42"
                  className="w-full px-4 py-3 rounded-lg font-body"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
            </div>

            <div className="rounded-xl p-6 mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                border: "1px solid rgba(245,74,72,0.3)",
              }}
            >
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Monthly Revenue Leaked
                  </div>
                  <div className="font-display text-2xl font-bold" style={{ color: "#F54A48" }}>
                    $67,400
                  </div>
                </div>
                <div>
                  <div className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Projected Recovery
                  </div>
                  <div className="font-display text-2xl font-bold" style={{ color: "#48BB78" }}>
                    $48,200
                  </div>
                </div>
                <div>
                  <div className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    ROI Timeline
                  </div>
                  <div className="font-display text-2xl font-bold text-white">
                    32 days
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-5 backdrop-blur-xl border mb-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="font-body text-sm mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                Recommended Package:
              </div>
              <div className="font-display text-xl font-bold shift-gradient-text">
                Growth Tier
              </div>
            </div>

            <GradientButton size="lg" className="w-full">
              Get Custom ROI Report
              <ArrowRight className="w-5 h-5" />
            </GradientButton>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
                a: "No hidden fees. Everything is included in your monthly subscription.",
              },
              {
                q: "Can I switch plans?",
                a: "Absolutely. Upgrade or downgrade anytime as your business needs change.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "30-day money-back guarantee. If ShiFt doesn't deliver ROI in the first month, we refund you.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl p-6 backdrop-blur-xl border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="font-display text-lg font-semibold text-white mb-3">
                  {faq.q}
                </div>
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