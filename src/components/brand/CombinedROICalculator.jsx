import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function CombinedROICalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlyRevenue: 40000,
    monthlyLeads: 20,
    closeRate: 60,
    attractPipelineGrowth: 0,
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
    <>
      <button
        onClick={() => { setIsOpen(true); setStep(1); }}
        className="font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #F54A48, #FA982F)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        See My ROI
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative rounded-2xl w-full max-w-md mt-8 mb-8"
              style={{
                background: "#0D0F33",
                border: "1px solid rgba(245,74,72,0.3)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="p-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="font-display text-lg font-bold text-white mb-1">ShiFt ROI Calculator</h2>
                    <p className="font-body text-xs text-[rgba(255,255,255,0.5)] mb-5">
                      See the combined revenue impact of Attract + Convert
                    </p>

                    <div className="space-y-3 mb-5">
                      <div>
                        <label className="font-body text-xs text-[rgba(255,255,255,0.7)] block mb-1">
                          Annual Revenue
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold text-sm">$</span>
                          <input
                            type="number"
                            name="monthlyRevenue"
                            value={formData.monthlyRevenue}
                            onChange={handleChange}
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-xs"
                            placeholder="Monthly revenue"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-xs">/mo</span>
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-xs text-[rgba(255,255,255,0.7)] block mb-1">
                          Monthly Leads
                        </label>
                        <input
                          type="number"
                          name="monthlyLeads"
                          value={formData.monthlyLeads}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-xs"
                        />
                      </div>

                      <div>
                        <label className="font-body text-xs text-[rgba(255,255,255,0.7)] block mb-1">
                          Current Close Rate
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="closeRate"
                            value={formData.closeRate}
                            onChange={handleChange}
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-xs"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-xs">%</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full font-mono text-xs font-semibold uppercase tracking-wider py-2 rounded-lg transition-all"
                      style={{
                        background: "linear-gradient(135deg, #F54A48, #FA982F)",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Next: Revenue Leaks →
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="font-display text-lg font-bold text-white mb-1">Convert: Revenue Leaks</h2>
                    <p className="font-body text-xs text-[rgba(255,255,255,0.5)] mb-5">
                      Estimate monthly losses
                    </p>

                    <div className="space-y-3 mb-5">
                      <div>
                        <label className="font-body text-xs text-[rgba(255,255,255,0.7)] block mb-1">
                          Missed Calls (%)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="missedCallsPercent"
                            value={formData.missedCallsPercent}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-xs"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-xs">%</span>
                        </div>
                        <div className="text-[10px] text-[rgba(255,255,255,0.3)] mt-1">
                          ≈ ${(missedCallsLoss).toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-xs text-[rgba(255,255,255,0.7)] block mb-1">
                          Garbage Leads (%)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="garbageLeadsPercent"
                            value={formData.garbageLeadsPercent}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-xs"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-xs">%</span>
                        </div>
                        <div className="text-[10px] text-[rgba(255,255,255,0.3)] mt-1">
                          ≈ ${(garbageLeadsLoss).toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-xs text-[rgba(255,255,255,0.7)] block mb-1">
                          Invisible Buyers (%)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="invisibleBuyersPercent"
                            value={formData.invisibleBuyersPercent}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-xs"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-xs">%</span>
                        </div>
                        <div className="text-[10px] text-[rgba(255,255,255,0.3)] mt-1">
                          ≈ ${(invisibleBuyersLoss).toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 font-mono text-xs font-semibold uppercase tracking-wider py-2 rounded-lg transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.7)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          cursor: "pointer",
                        }}
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 font-mono text-xs font-semibold uppercase tracking-wider py-2 rounded-lg transition-all"
                        style={{
                          background: "linear-gradient(135deg, #F54A48, #FA982F)",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        See Results →
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="font-display text-lg font-bold text-white mb-4">Your ROI Potential</h2>

                    {/* Attract ROI */}
                    <div className="rounded-lg p-3 mb-3 border"
                      style={{
                        background: "rgba(255,215,0,0.08)",
                        borderColor: "rgba(255,215,0,0.3)",
                      }}>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#FFD700] mb-1">Attract</div>
                      <div className="font-display text-lg font-bold text-white">
                        +${attractMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </div>
                      <div className="text-[10px] text-[rgba(255,255,255,0.4)] mt-1">
                        ${attractAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr
                      </div>
                    </div>

                    {/* Convert ROI */}
                    <div className="rounded-lg p-3 mb-3 border"
                      style={{
                        background: "rgba(245,74,72,0.08)",
                        borderColor: "rgba(245,74,72,0.3)",
                      }}>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#F54A48] mb-1">Convert</div>
                      <div className="font-display text-lg font-bold text-white">
                        +${convertMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </div>
                      <div className="text-[10px] text-[rgba(255,255,255,0.4)] mt-1">
                        ${convertAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr
                      </div>
                    </div>

                    {/* Total ROI */}
                    <div className="rounded-lg p-3 border mb-5"
                      style={{
                        background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                        borderColor: "rgba(245,74,72,0.3)",
                      }}>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#FA982F] mb-1">Combined</div>
                      <div className="font-display text-2xl font-bold shift-gradient-text">
                        +${totalMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </div>
                      <div className="text-[10px] text-[rgba(255,255,255,0.4)] mt-1">
                        ${totalAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr potential
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 font-mono text-xs font-semibold uppercase tracking-wider py-2 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.7)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          cursor: "pointer",
                        }}
                      >
                        Adjust
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 font-mono text-xs font-semibold uppercase tracking-wider py-2 rounded-lg"
                        style={{
                          background: "linear-gradient(135deg, #F54A48, #FA982F)",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}