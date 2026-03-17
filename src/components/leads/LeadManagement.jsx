import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function LeadManagement({ user }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    const loadLeads = async () => {
      try {
        const leadsData = await base44.entities.Lead.filter({ company_id: user.company_id });
        setLeads(leadsData);
      } catch (error) {
        console.error("Failed to load leads:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLeads();
  }, [user.company_id]);

  const statusColors = {
    new: { bg: "rgba(255,255,255,0.1)", text: "rgba(255,255,255,0.7)" },
    qualified: { bg: "rgba(72,187,120,0.15)", text: "#48BB78" },
    booked: { bg: "rgba(99,179,237,0.15)", text: "#63B3ED" },
    closed: { bg: "rgba(72,187,120,0.2)", text: "#48BB78" },
  };

  const filteredLeads = leads.filter(
    (lead) =>
      (selectedStatus === "all" || lead.status === selectedStatus) &&
      (searchTerm === "" ||
        lead.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone?.includes(searchTerm) ||
        lead.email?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const leadStats = {
    total: leads.length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    booked: leads.filter((l) => l.status === "booked").length,
    closed: leads.filter((l) => l.status === "closed").length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-[#F54A48] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Leads", value: leadStats.total, color: "#F54A48" },
          { label: "Qualified", value: leadStats.qualified, color: "#48BB78" },
          { label: "Booked", value: leadStats.booked, color: "#63B3ED" },
          { label: "Closed", value: leadStats.closed, color: "#FFD700" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              {stat.label}
            </p>
            <div className="font-display text-2xl font-black" style={{ color: stat.color }}>
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "rgba(255,255,255,0.3)" }} />
          <input
            type="text"
            placeholder="Search by name, phone, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black/30 text-white placeholder-opacity-50 outline-none"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          />
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2.5 rounded-lg bg-black/30 text-white outline-none"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="qualified">Qualified</option>
          <option value="booked">Booked</option>
          <option value="closed">Closed</option>
        </select>

        <button
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-sm font-semibold uppercase tracking-wider"
          style={{
            background: "rgba(245,74,72,0.15)",
            color: "#F54A48",
            border: "1px solid rgba(245,74,72,0.3)",
          }}
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </motion.div>

      {/* Leads Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-x-auto rounded-xl border"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <table className="w-full">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <th className="px-6 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Name
              </th>
              <th className="px-6 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Contact
              </th>
              <th className="px-6 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Status
              </th>
              <th className="px-6 py-3 text-center font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Score
              </th>
              <th className="px-6 py-3 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead, index) => (
              <motion.tr
                key={lead.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              >
                <td className="px-6 py-4 text-sm text-white font-semibold">
                  {lead.first_name} {lead.last_name}
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <div>{lead.phone}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {lead.email}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize"
                    style={{
                      background: statusColors[lead.status]?.bg,
                      color: statusColors[lead.status]?.text,
                    }}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold" style={{ color: "#F54A48" }}>
                  {lead.qualification_score}/100
                </td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-white">
                  ${(lead.estimated_value / 1000).toFixed(1)}K
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {filteredLeads.length === 0 && (
        <div className="text-center py-12" style={{ color: "rgba(255,255,255,0.4)" }}>
          <p className="font-mono text-sm">No leads found matching your filters</p>
        </div>
      )}
    </div>
  );
}