import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ROICalculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlyRevenue: 40000,
    monthlyLeads: 20,
    closeRate: 60,
    attractPipelineGrowth: 30,
    missedCallsPercent: 42,
    garbageLeadsPercent: 35,
    invisibleBuyersPercent: 25,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  // Calculate Attract ROI (Pipeline Growth)
  const avgJobValue = formData.monthlyRevenue / Math.max(formData.monthlyLeads, 1);
  const attractNewLeads = (formData.monthlyLeads * (formData.attractPipelineGrowth / 100));
  const attractMonthlyROI = attractNewLeads * avgJobValue * (formData.closeRate / 100);
  const attractAnnualROI = attractMonthlyROI * 12;

  // Calculate Convert ROI (Eliminated Leaks)
  const missedCallsLoss = (formData.monthlyRevenue * (formData.missedCallsPercent / 100)) / 12;
  const garbageLeadsLoss = (formData.monthlyRevenue * (formData.garbageLeadsPercent / 100)) / 12;
  const invisibleBuyersLoss = (formData.monthlyRevenue * (formData.invisibleBuyersPercent / 100)) / 12;
  
  const convertMonthlyROI = missedCallsLoss + garbageLeadsLoss + invisibleBuyersLoss;
  const convertAnnualROI = convertMonthlyROI * 12;

  const totalMonthlyROI = attractMonthlyROI + convertMonthlyROI;
  const totalAnnualROI = attractAnnualROI + convertAnnualROI;

  return (
    <div className="min-h-screen bg-[#070820]" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-8 text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">ShiFt ROI Calculator</h1>
          <p className="font-body text-base md:text-lg text-[rgba(255,255,255,0.6)] mb-12">
            See the combined revenue impact of Attract + Convert
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="rounded-2xl p-8 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}>
              <div className="space-y-6">
                <div>
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Monthly Revenue
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">$</span>
                    <input
                      type="number"
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                    />
                    <span className="text-[rgba(255,255,255,0.5)] font-mono text-sm">/mo</span>
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Monthly Leads
                  </label>
                  <input
                    type="number"
                    name="monthlyLeads"
                    value={formData.monthlyLeads}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Current Close Rate (%)
                  </label>
                  <input
                    type="number"
                    name="closeRate"
                    value={formData.closeRate}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                  />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Pipeline Growth Potential (%)
                  </label>
                  <input
                    type="number"
                    name="attractPipelineGrowth"
                    value={formData.attractPipelineGrowth}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Missed Calls (% of revenue)
                  </label>
                  <input
                    type="number"
                    name="missedCallsPercent"
                    value={formData.missedCallsPercent}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Garbage Leads (% of revenue)
                  </label>
                  <input
                    type="number"
                    name="garbageLeadsPercent"
                    value={formData.garbageLeadsPercent}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                    Invisible Buyers (% of revenue)
                  </label>
                  <input
                    type="number"
                    name="invisibleBuyersPercent"
                    value={formData.invisibleBuyersPercent}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Attract ROI */}
              <div className="rounded-xl p-6 border"
                style={{
                  background: "rgba(255,215,0,0.08)",
                  borderColor: "rgba(255,215,0,0.3)",
                }}>
                <div className="font-mono text-xs uppercase tracking-wider text-[#FFD700] mb-2">Attract (Pipeline Growth)</div>
                <div className="font-display text-4xl font-bold text-white mb-2">
                  +${attractMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                </div>
                <div className="text-sm text-[rgba(255,255,255,0.4)]">
                  ${attractAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr
                </div>
              </div>

              {/* Convert ROI */}
              <div className="rounded-xl p-6 border"
                style={{
                  background: "rgba(245,74,72,0.08)",
                  borderColor: "rgba(245,74,72,0.3)",
                }}>
                <div className="font-mono text-xs uppercase tracking-wider text-[#F54A48] mb-2">Convert (Revenue Leaks Plugged)</div>
                <div className="font-display text-4xl font-bold text-white mb-2">
                  +${convertMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                </div>
                <div className="text-sm text-[rgba(255,255,255,0.4)]">
                  ${convertAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr
                </div>
              </div>

              {/* Total ROI */}
              <div className="rounded-xl p-8 border"
                style={{
                  background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                  borderColor: "rgba(245,74,72,0.3)",
                }}>
                <div className="font-mono text-xs uppercase tracking-wider text-[#FA982F] mb-3">Total Combined ROI</div>
                <div className="font-display text-5xl font-bold shift-gradient-text mb-2">
                  +${totalMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                </div>
                <div className="text-base text-[rgba(255,255,255,0.4)]">
                  ${totalAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr potential
                </div>
              </div>

              <button
                onClick={() => navigate(-1)}
                className="w-full font-mono text-sm font-semibold uppercase tracking-wider py-3 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #F54A48, #FA982F)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Ready to Talk →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}