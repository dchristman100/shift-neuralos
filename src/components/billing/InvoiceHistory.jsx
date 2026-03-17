import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function InvoiceHistory() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInvoices = async () => {
      try {
        const user = await base44.auth.me();
        const response = await base44.functions.invoke("getInvoices", {
          company_id: user.company_id,
        });
        setInvoices(response.data.invoices || []);
      } catch (error) {
        console.error("Failed to load invoices:", error);
      } finally {
        setLoading(false);
      }
    };

    loadInvoices();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-[#F54A48] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (invoices.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl p-12 text-center"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: "rgba(255,255,255,0.3)" }} />
        <h3 className="font-display text-lg font-bold text-white mb-2">No Invoices Yet</h3>
        <p style={{ color: "rgba(255,255,255,0.5)" }}>Your invoice history will appear here once billing begins</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-bold text-white mb-6">Invoice History</h3>

      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <table className="w-full">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <th className="px-6 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Invoice #
              </th>
              <th className="px-6 py-3 text-left font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Date
              </th>
              <th className="px-6 py-3 text-right font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Amount
              </th>
              <th className="px-6 py-3 text-center font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Status
              </th>
              <th className="px-6 py-3 text-center font-mono text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <motion.tr
                key={invoice.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              >
                <td className="px-6 py-4 text-sm font-mono text-white">{invoice.number}</td>
                <td className="px-6 py-4 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {new Date(invoice.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-white">
                  ${(invoice.amount / 100).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: invoice.status === "paid" ? "rgba(72,187,120,0.15)" : "rgba(255,215,0,0.15)",
                      color: invoice.status === "paid" ? "#48BB78" : "#FFD700",
                    }}
                  >
                    {invoice.status === "paid" ? "✓ Paid" : "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {invoice.pdf_url && (
                    <a
                      href={invoice.pdf_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: "rgba(245,74,72,0.15)",
                        color: "#F54A48",
                        border: "1px solid rgba(245,74,72,0.3)",
                      }}
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}