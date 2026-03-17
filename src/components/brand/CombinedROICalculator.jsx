import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import GradientButton from "../shared/GradientButton";

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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative rounded-2xl w-full max-w-xl my-8"
              style={{
                background: "#0D0F33",
                border: "1px solid rgba(245,74,72,0.3)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="p-6 md:p-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-2">ShiFt ROI Calculator</h2>
                    <p className="font-body text-xs md:text-sm text-[rgba(255,255,255,0.5)] mb-6">
                      See the combined revenue impact of Attract + Convert
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                          Annual Revenue
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">$</span>
                          <input
                            type="number"
                            name="monthlyRevenue"
                            value={formData.monthlyRevenue}
                            onChange={handleChange}
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                            placeholder="Monthly revenue"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-sm">(monthly avg)</span>
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
                          Current Close Rate
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="closeRate"
                            value={formData.closeRate}
                            onChange={handleChange}
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono text-xs">%</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setStep(2)}
                      className="w-full font-mono text-xs md:text-sm font-semibold uppercase tracking-wider py-2 md:py-3 rounded-lg transition-all"
                      style={{
                        background: "linear-gradient(135deg, #F54A48, #FA982F)",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Next: Revenue Leaks <ArrowRight className="inline w-4 h-4 ml-2" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-2">Convert: Revenue Leaks</h2>
                    <p className="font-body text-xs md:text-sm text-[rgba(255,255,255,0.5)] mb-6">
                      Estimate what you're losing monthly to these three leaks
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                          Missed Calls (% of revenue lost)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="missedCallsPercent"
                            value={formData.missedCallsPercent}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono">%</span>
                        </div>
                        <div className="text-xs text-[rgba(255,255,255,0.4)] mt-1">
                          ≈ ${(missedCallsLoss).toLocaleString('en-US', { maximumFractionDigits: 0 })} monthly
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                          Garbage Leads (% of revenue wasted)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="garbageLeadsPercent"
                            value={formData.garbageLeadsPercent}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono">%</span>
                        </div>
                        <div className="text-xs text-[rgba(255,255,255,0.4)] mt-1">
                          ≈ ${(garbageLeadsLoss).toLocaleString('en-US', { maximumFractionDigits: 0 })} monthly
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-sm text-[rgba(255,255,255,0.7)] block mb-2">
                          Invisible Buyers (% of revenue missed)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            name="invisibleBuyersPercent"
                            value={formData.invisibleBuyersPercent}
                            onChange={handleChange}
                            min="0"
                            max="100"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono"
                          />
                          <span className="text-[rgba(255,255,255,0.5)] font-mono">%</span>
                        </div>
                        <div className="text-xs text-[rgba(255,255,255,0.4)] mt-1">
                          ≈ ${(invisibleBuyersLoss).toLocaleString('en-US', { maximumFractionDigits: 0 })} monthly
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 font-mono text-sm font-semibold uppercase tracking-wider py-3 rounded-lg transition-all"
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
                        className="flex-1 font-mono text-sm font-semibold uppercase tracking-wider py-3 rounded-lg transition-all"
                        style={{
                          background: "linear-gradient(135deg, #F54A48, #FA982F)",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        See Results <ArrowRight className="inline w-4 h-4 ml-2" />
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
                    <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-4">Your ROI Potential</h2>

                    {/* Attract ROI */}
                    <div className="rounded-xl p-4 md:p-6 mb-4 border"
                      style={{
                        background: "rgba(255,215,0,0.08)",
                        borderColor: "rgba(255,215,0,0.3)",
                      }}>
                      <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[#FFD700] mb-1">Attract (Pipeline Growth)</div>
                      <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                        +${attractMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </div>
                      <div className="text-sm text-[rgba(255,255,255,0.5)]">
                        {attractNewLeads.toFixed(1)} new qualified leads × ${avgJobValue.toLocaleString('en-US', { maximumFractionDigits: 0 })} avg job = ${attractAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr
                      </div>
                    </div>

                    {/* Convert ROI */}
                    <div className="rounded-xl p-4 md:p-6 mb-4 border"
                      style={{
                        background: "rgba(245,74,72,0.08)",
                        borderColor: "rgba(245,74,72,0.3)",
                      }}>
                      <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[#F54A48] mb-1">Convert (Plugged Leaks)</div>
                      <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                        +${convertMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </div>
                      <div className="text-sm text-[rgba(255,255,255,0.5)]">
                        Eliminated: Missed Calls + Garbage Leads + Invisible Buyers = ${convertAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/yr
                      </div>
                    </div>

                    {/* Total ROI */}
                    <div className="rounded-xl p-4 md:p-6 border mb-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                        borderColor: "rgba(245,74,72,0.3)",
                      }}>
                      <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-[#FA982F] mb-1">Total Combined ROI</div>
                      <div className="font-display text-2xl md:text-4xl font-bold shift-gradient-text mb-1">
                        +${totalMonthlyROI.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo
                      </div>
                      <div className="text-sm text-[rgba(255,255,255,0.5)]">
                        ${totalAnnualROI.toLocaleString('en-US', { maximumFractionDigits: 0 })} annual revenue potential
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 font-mono text-sm font-semibold uppercase tracking-wider py-3 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.7)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          cursor: "pointer",
                        }}
                      >
                        Adjust Numbers
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 font-mono text-sm font-semibold uppercase tracking-wider py-3 rounded-lg"
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