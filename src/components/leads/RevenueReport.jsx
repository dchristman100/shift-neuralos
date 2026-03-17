import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { base44 } from "@/api/base44Client";

export default function RevenueReport({ user }) {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReport = async () => {
      try {
        const response = await base44.functions.invoke("getRevenueReport", {
          company_id: user.company_id,
        });
        setReportData(response.data);
      } catch (error) {
        console.error("Failed to load report:", error);
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [user.company_id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-[#F54A48] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const mockRevenueData = [
    { week: "Week 1", revenue: 8000, target: 7500 },
    { week: "Week 2", revenue: 12000, target: 7500 },
    { week: "Week 3", revenue: 10500, target: 7500 },
    { week: "Week 4", revenue: 15200, target: 7500 },
  ];

  const mockConversionData = [
    { day: "Mon", leads: 12, qualified: 8, booked: 5 },
    { day: "Tue", leads: 15, qualified: 10, booked: 7 },
    { day: "Wed", qualified: 9, booked: 6, leads: 14 },
    { day: "Thu", qualified: 12, booked: 8, leads: 18 },
    { day: "Fri", qualified: 7, booked: 5, leads: 11 },
  ];

  return (
    <div className="space-y-8">
      {/* KPIs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Revenue (This Month)", value: "$45,700", color: "#F54A48" },
          { label: "Avg Revenue Per Lead", value: "$2,850", color: "#FA982F" },
          { label: "Conversion Rate", value: "67%", color: "#48BB78" },
          { label: "Avg Lead Value", value: "$4,250", color: "#63B3ED" },
        ].map((kpi, i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              {kpi.label}
            </p>
            <div className="font-display text-xl font-black" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Revenue Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl p-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <h3 className="font-display text-lg font-bold text-white mb-4">Weekly Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockRevenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" />
            <Tooltip
              contentStyle={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
            <Line type="monotone" dataKey="revenue" stroke="#F54A48" strokeWidth={3} dot={{ fill: "#F54A48", r: 5 }} />
            <Line type="monotone" dataKey="target" stroke="rgba(255,255,255,0.2)" strokeWidth={2} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Conversion Funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl p-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <h3 className="font-display text-lg font-bold text-white mb-4">Conversion Funnel (Last 5 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockConversionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" />
            <Tooltip
              contentStyle={{ background: "#0D0F33", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }}
            />
            <Bar dataKey="leads" fill="rgba(245,74,72,0.5)" name="Leads" />
            <Bar dataKey="qualified" fill="#48BB78" name="Qualified" />
            <Bar dataKey="booked" fill="#63B3ED" name="Booked" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-xl p-6"
        style={{ background: "rgba(72,187,120,0.08)", border: "1px solid rgba(72,187,120,0.2)" }}
      >
        <h3 className="font-display text-lg font-bold text-white mb-3">📊 This Month's Performance</h3>
        <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          <p>
            <strong className="text-white">Total Revenue Attributed:</strong> $45,700 (45% above guarantee target)
          </p>
          <p>
            <strong className="text-white">Lead Volume:</strong> 70 leads received, 47 qualified (67% quality rate)
          </p>
          <p>
            <strong className="text-white">Booking Rate:</strong> 32 appointments booked (68% of qualified leads)
          </p>
          <p>
            <strong className="text-white">Trend:</strong> Strong upward trajectory. Continue current strategy.
          </p>
        </div>
      </motion.div>
    </div>
  );
}