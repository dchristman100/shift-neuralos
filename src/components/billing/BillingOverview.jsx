import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";

const TIERS = {
  activate: {
    name: "Activate",
    price: 1997,
    color: "#F54A48",
    features: [
      "AI response <30 seconds · 24/7",
      "Roofing-native conversation flows",
      "Missed call text-back",
      "Calendar sync + auto booking",
      "CRM lead records",
      "5-touch automated follow-up",
      "Monthly revenue report",
      "90-Day Revenue Floor",
    ],
  },
  amplify: {
    name: "Amplify",
    price: 3497,
    color: "#FA982F",
    features: [
      "Everything in Activate, plus:",
      "Google Local Service Ads",
      "Weekly LSA optimization",
      "Lead dispute handling",
      "Storm event trigger mode",
      "Weekly performance call",
      "7-day system activation",
    ],
  },
  dominate: {
    name: "Dominate",
    price: 8997,
    color: "#FFD700",
    features: [
      "Everything in Amplify, plus:",
      "Google Search + Meta retargeting",
      "Email + SMS campaigns",
      "Outbound calling (AI + human)",
      "Full cross-channel attribution",
      "Custom follow-up by lead score",
      "Dedicated account strategist",
      "48-hour priority activation",
    ],
  },
};

export default function BillingOverview({ data, user }) {
  const [upgrading, setUpgrading] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const currentTier = data?.tier || "activate";
  const currentPrice = TIERS[currentTier]?.price || 0;

  const handleUpgradeDowngrade = async (newTier) => {
    if (newTier === currentTier) return;

    setUpgrading(true);
    try {
      const response = await base44.functions.invoke("updateSubscription", {
        company_id: user.company_id,
        new_tier: newTier,
      });

      if (response.data.success) {
        // Refresh data
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to update subscription:", error);
    } finally {
      setUpgrading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Current Plan Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-8"
        style={{
          background: "rgba(245,74,72,0.08)",
          border: "1px solid rgba(245,74,72,0.2)",
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-2">
              {TIERS[currentTier]?.name} Plan
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Your current subscription
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl font-black text-white">
              ${(currentPrice / 100).toFixed(0)}
              <span className="text-lg text-opacity-50" style={{ color: "rgba(255,255,255,0.5)" }}>
                /mo
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Next Billing Date
            </p>
            <p className="text-lg font-semibold text-white">
              {data?.next_billing_date
                ? new Date(data.next_billing_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "—"}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Status
            </p>
            <p className="text-lg font-semibold" style={{ color: "#48BB78" }}>
              ✓ Active
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            const url = data?.customer_portal_url;
            if (url) window.open(url, "_blank");
          }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-bold uppercase tracking-wider"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          Manage in Stripe Portal
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Upgrade / Downgrade Options */}
      <div>
        <h3 className="font-display text-2xl font-bold text-white mb-6">Available Plans</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(TIERS).map(([tierKey, tier], index) => {
            const isCurrentTier = tierKey === currentTier;
            const isFeatured = tierKey === "amplify";

            return (
              <motion.div
                key={tierKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: isCurrentTier
                    ? "rgba(245,74,72,0.15)"
                    : isFeatured
                      ? "linear-gradient(180deg, rgba(245,74,72,0.12), rgba(255,255,255,0.03))"
                      : "rgba(255,255,255,0.03)",
                  border: isCurrentTier
                    ? "1px solid rgba(245,74,72,0.4)"
                    : isFeatured
                      ? "1px solid rgba(245,74,72,0.3)"
                      : "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                }}
              >
                {isFeatured && (
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full font-mono text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #F54A48, #FA982F)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {isCurrentTier && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full font-mono text-xs font-bold bg-green-500/20 text-green-400">
                    Current Plan
                  </div>
                )}

                <h4
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h4>

                <div className="mb-6">
                  <div className="font-display text-3xl font-black text-white">
                    ${(tier.price / 100).toFixed(0)}
                    <span className="text-sm text-opacity-50" style={{ color: "rgba(255,255,255,0.5)" }}>
                      /mo
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {!isCurrentTier && (
                  <button
                    onClick={() => handleUpgradeDowngrade(tierKey)}
                    disabled={upgrading}
                    className="w-full py-3 rounded-lg font-mono text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                    style={{
                      background: isFeatured
                        ? "linear-gradient(135deg, #F54A48, #FA982F)"
                        : "rgba(255,255,255,0.1)",
                      color: isFeatured ? "#fff" : "rgba(255,255,255,0.7)",
                      border: `1px solid ${isFeatured ? "transparent" : "rgba(255,255,255,0.2)"}`,
                    }}
                  >
                    {tierKey > currentTier ? "Upgrade" : "Downgrade"}
                  </button>
                )}

                {isCurrentTier && (
                  <div className="w-full py-3 text-center font-mono text-sm font-bold text-green-400">
                    ✓ Current Plan
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pricing Note */}
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(250,152,47,0.08)",
          border: "1px solid rgba(250,152,47,0.2)",
        }}
      >
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          <strong style={{ color: "rgba(255,255,255,0.9)" }}>Note:</strong> All upgrades/downgrades are pro-rated.
          Your billing cycle will adjust accordingly. Changes take effect immediately.
        </p>
      </div>
    </div>
  );
}