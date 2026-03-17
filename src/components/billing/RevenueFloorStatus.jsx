import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function RevenueFloorStatus({ data, user }) {
  const [floorData, setFloorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFloorData = async () => {
      try {
        const response = await base44.functions.invoke("getRevenueFloorStatus", {
          company_id: user.company_id,
        });
        setFloorData(response.data);
      } catch (error) {
        console.error("Failed to load revenue floor data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFloorData();
  }, [user.company_id]);

  const guarantees = {
    activate: 15000,
    amplify: 30000,
    dominate: 50000,
  };

  const guaranteeAmount = guarantees[data?.tier] || 15000;
  const daysRemaining = floorData?.days_remaining || 0;
  const percentageComplete = Math.min((daysRemaining / 90) * 100, 100);
  const isOnTrack = (floorData?.actual_revenue || 0) >= guaranteeAmount;
  const status = floorData?.status || "active";

  return (
    <div className="space-y-8">
      {/* Main Guarantee Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-8"
        style={{
          background: isOnTrack
            ? "linear-gradient(135deg, rgba(72,187,120,0.12), rgba(72,187,120,0.06))"
            : "linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,215,0,0.06))",
          border: isOnTrack ? "1px solid rgba(72,187,120,0.3)" : "1px solid rgba(255,215,0,0.3)",
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            {isOnTrack ? (
              <CheckCircle className="w-8 h-8" style={{ color: "#48BB78" }} />
            ) : (
              <TrendingUp className="w-8 h-8" style={{ color: "#FFD700" }} />
            )}
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                90-Day Revenue Floor Guarantee
              </h2>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Your performance promise is on track
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Guarantee Amount */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              Guaranteed Minimum Revenue
            </p>
            <div className="font-display text-3xl font-black text-white">
              ${(guaranteeAmount / 1000).toFixed(0)}K
            </div>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              {data?.tier?.toUpperCase()} tier
            </p>
          </div>

          {/* Actual Revenue */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              Actual Revenue Increase
            </p>
            <div className="font-display text-3xl font-black" style={{ color: isOnTrack ? "#48BB78" : "#FFD700" }}>
              ${(floorData?.actual_revenue / 1000 || 0).toFixed(0)}K
            </div>
            <p className="text-xs mt-1" style={{ color: isOnTrack ? "#48BB78" : "#FFD700" }}>
              {isOnTrack ? "✓ On Track" : "In Progress"}
            </p>
          </div>

          {/* Days Remaining */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              Days Remaining
            </p>
            <div className="font-display text-3xl font-black text-white">
              {daysRemaining}
            </div>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              of 90 days
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentageComplete}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full"
              style={{
                background: isOnTrack
                  ? "linear-gradient(90deg, #48BB78, #5FCD9A)"
                  : "linear-gradient(90deg, #FFD700, #FFE55C)",
              }}
            ></motion.div>
          </div>
          <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            {percentageComplete.toFixed(0)}% complete
          </p>
        </div>
      </motion.div>

      {/* Status Details */}
      {!isOnTrack && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl p-6 flex items-start gap-4"
          style={{
            background: "rgba(255,215,0,0.08)",
            border: "1px solid rgba(255,215,0,0.2)",
          }}
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#FFD700" }} />
          <div>
            <h4 className="font-semibold text-white mb-1">On Pace to Meet Guarantee</h4>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Your current revenue trajectory shows you're on track to meet the {data?.tier?.toUpperCase()} tier
              guarantee of ${(guaranteeAmount / 1000).toFixed(0)}K by day 90. Keep up the momentum!
            </p>
          </div>
        </motion.div>
      )}

      {isOnTrack && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl p-6 flex items-start gap-4"
          style={{
            background: "rgba(72,187,120,0.08)",
            border: "1px solid rgba(72,187,120,0.2)",
          }}
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#48BB78" }} />
          <div>
            <h4 className="font-semibold text-white mb-1">Guarantee Exceeded</h4>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Congratulations! You've already exceeded your {data?.tier?.toUpperCase()} tier guarantee. Your billing
              will continue normally — no credits or refunds needed.
            </p>
          </div>
        </motion.div>
      )}

      {/* How It Works */}
      <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <h3 className="font-display text-lg font-bold text-white mb-4">How the 90-Day Revenue Floor Works</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="font-mono text-xs font-bold text-white" style={{ color: "#F54A48" }}>1.</span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              We guarantee a minimum revenue increase based on your tier (Activate: $15K, Amplify: $30K, Dominate: $50K)
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-mono text-xs font-bold" style={{ color: "#F54A48" }}>2.</span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Over 90 days, we track the revenue increases directly attributable to ShiFt using CRM data
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-mono text-xs font-bold" style={{ color: "#F54A48" }}>3.</span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              If you don't hit the guarantee, your billing pauses until you do — the system keeps running for free
            </p>
          </div>
          <div className="flex gap-3">
            <span className="font-mono text-xs font-bold" style={{ color: "#F54A48" }}>4.</span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Once you exceed it (like you have!), billing continues normally — there's no ceiling or limit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}