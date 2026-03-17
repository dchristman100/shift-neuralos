import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock attribution data
const CAMPAIGN_DATA = [
  { source: "Google", spend: 8500, revenue: 42000, leads: 34, booked: 12, roi: 394 },
  { source: "Meta", spend: 6200, revenue: 31000, leads: 28, booked: 9, roi: 400 },
  { source: "Organic", spend: 1200, revenue: 24000, leads: 18, booked: 7, roi: 1900 },
];

const TREND_DATA = [
  { week: "Wk 1", google: 8000, meta: 5200, organic: 3500 },
  { week: "Wk 2", google: 9200, meta: 6800, organic: 4100 },
  { week: "Wk 3", google: 11500, meta: 7600, organic: 5200 },
  { week: "Wk 4", google: 13200, meta: 8900, organic: 6400 },
];

const COLORS = {
  Google: "#4F46E5",
  Meta: "#0EA5E9",
  Organic: "#10B981",
};

function StatCard({ label, value, format, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl p-6"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
        {label}
      </div>
      <div className="font-display text-3xl font-bold text-white">
        {format === "currency"
          ? `$${value.toLocaleString()}`
          : format === "percent"
            ? `${value}%`
            : value.toLocaleString()}
      </div>
    </motion.div>
  );
}

export default function CampaignInsights() {
  const navigate = useNavigate();
  const [selectedSource, setSelectedSource] = useState(null);

  const totalSpend = CAMPAIGN_DATA.reduce((sum, c) => sum + c.spend, 0);
  const totalRevenue = CAMPAIGN_DATA.reduce((sum, c) => sum + c.revenue, 0);
  const totalLeads = CAMPAIGN_DATA.reduce((sum, c) => sum + c.leads, 0);
  const avgROI = Math.round(CAMPAIGN_DATA.reduce((sum, c) => sum + c.roi, 0) / CAMPAIGN_DATA.length);

  return (
    <main className="pt-24" style={{ background: "#070820", minHeight: "100vh", paddingBottom: "80px" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate("/AttractHome")}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-8 text-opacity-50 hover:text-opacity-100 transition-all"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Attract
          </button>

          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
            Campaign Insights
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Compare ROI across lead sources and optimize your marketing spend
          </p>
        </motion.div>

        {/* KPI Row */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <StatCard label="Total Spend" value={totalSpend} format="currency" />
          <StatCard label="Total Revenue" value={totalRevenue} format="currency" />
          <StatCard label="Total Leads" value={totalLeads} />
          <StatCard label="Avg ROI" value={avgROI} format="percent" />
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Spend vs Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6">Spend vs Revenue by Source</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={CAMPAIGN_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="source" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(13,15,51,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Legend />
                <Bar dataKey="spend" fill="#EF4444" name="Spend" />
                <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* ROI Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6">ROI by Source</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={CAMPAIGN_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="source" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(13,15,51,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="roi" fill="#F54A48" name="ROI %" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Revenue Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-6 md:col-span-2"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-6">Revenue Trend - 4 Week</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={TREND_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="week" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
                <YAxis tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(13,15,51,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Legend />
                <Line type="monotone" dataKey="google" stroke="#4F46E5" strokeWidth={2} name="Google" />
                <Line type="monotone" dataKey="meta" stroke="#0EA5E9" strokeWidth={2} name="Meta" />
                <Line type="monotone" dataKey="organic" stroke="#10B981" strokeWidth={2} name="Organic" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Source
                  </th>
                  <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Spend
                  </th>
                  <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Revenue
                  </th>
                  <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Leads
                  </th>
                  <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Booked
                  </th>
                  <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    ROI
                  </th>
                  <th className="px-6 py-4 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Cost/Lead
                  </th>
                </tr>
              </thead>
              <tbody>
                {CAMPAIGN_DATA.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td className="px-6 py-4 font-display font-bold text-white">{row.source}</td>
                    <td className="px-6 py-4 text-right text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      ${row.spend.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold" style={{ color: "#10B981" }}>
                      ${row.revenue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {row.leads}
                    </td>
                    <td className="px-6 py-4 text-right text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {row.booked}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold" style={{ color: "#F54A48" }}>
                      {row.roi}%
                    </td>
                    <td className="px-6 py-4 text-right text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      ${Math.round(row.spend / row.leads)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.08))",
            border: "1px solid rgba(245,74,72,0.2)",
          }}
        >
          <h3 className="font-display text-2xl font-bold text-white mb-3">
            Ready to Optimize Your Campaigns?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="mb-6 max-w-2xl mx-auto">
            Get real-time attribution data and AI-powered recommendations to maximize ROI across all lead sources.
          </p>
          <button
            onClick={() => window.open("https://makea.shiftnow.io/widget/bookings/reality", "_blank")}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-mono text-sm font-bold uppercase tracking-wider"
            style={{
              background: "linear-gradient(135deg, #F54A48, #FA982F)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            <TrendingUp className="w-4 h-4" />
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </main>
  );
}