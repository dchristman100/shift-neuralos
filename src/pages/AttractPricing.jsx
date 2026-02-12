import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Check } from "lucide-react";
import GradientButton from "../components/shared/GradientButton";

const packages = [
  {
    name: "Starter",
    price: "$997",
    period: "/month",
    description: "Perfect for single-location contractors testing AI lead generation",
    features: [
      "3 primary channels (Google, Facebook, Local SEO)",
      "50-75 monthly leads target",
      "Basic AI optimization",
      "Weekly performance reports",
      "Email support",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/month",
    description: "For established contractors ready to scale pipeline",
    features: [
      "All channels (Google, Facebook, Instagram, TikTok, YouTube, SEO)",
      "125-175 monthly leads target",
      "Advanced AI optimization",
      "Real-time dashboard",
      "Daily performance updates",
      "Priority support",
      "Quarterly strategy calls",
    ],
    cta: "Scale with Growth",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "Enterprise solution for multi-location operations",
    features: [
      "Multi-location management",
      "Custom lead targets",
      "White-glove AI optimization",
      "Custom integrations",
      "Dedicated success manager",
      "Monthly strategy sessions",
      "API access",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export default function AttractPricing() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Simple,{" "}
            <span className="bg-gradient-to-r from-[#FA982F] to-[#F54A48] bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h1>
          <p className="font-body text-xl mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            Choose the plan that fits your pipeline goals
          </p>
          <p className="font-mono text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Plus ad spend (minimum $2,000/month recommended)
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Packages */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 backdrop-blur-xl border ${pkg.highlight ? 'transform scale-105' : ''}`}
              style={{
                background: pkg.highlight
                  ? "linear-gradient(135deg, rgba(250,152,47,0.08), rgba(245,74,72,0.04))"
                  : "rgba(255,255,255,0.04)",
                borderColor: pkg.highlight ? "rgba(250,152,47,0.3)" : "rgba(255,255,255,0.08)",
              }}
            >
              {pkg.highlight && (
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(250,152,47,0.2)",
                      color: "#FA982F",
                    }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="font-display text-5xl font-black"
                    style={{ color: pkg.highlight ? "#FA982F" : "white" }}>
                    {pkg.price}
                  </span>
                  <span className="font-body text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}>
                    {pkg.period}
                  </span>
                </div>
                <p className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: pkg.highlight ? "#FA982F" : "#48BB78" }} />
                    <span className="font-body text-sm"
                      style={{ color: "rgba(255,255,255,0.7)" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <GradientButton
                size="default"
                className={`w-full ${pkg.highlight ? '!bg-gradient-to-r from-[#FA982F] to-[#F54A48]' : ''}`}
                variant={pkg.highlight ? "primary" : "outline"}
              >
                {pkg.cta}
              </GradientButton>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Note */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-xl p-6 backdrop-blur-xl border text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <strong style={{ color: "white" }}>Note on Ad Spend:</strong> Platform fees cover AI optimization, campaign management, and reporting. Ad spend (paid directly to platforms like Google & Facebook) is separate and typically starts at $2,000/month for meaningful results.
          </p>
        </motion.div>
      </SectionWrapper>
    </main>
  );
}