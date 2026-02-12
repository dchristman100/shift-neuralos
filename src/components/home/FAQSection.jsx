import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is this different from a chatbot?",
    answer: "Chatbots collect info. ShiFt AI actually qualifies leads, handles objections, and books appointments—without human intervention.",
  },
  {
    question: "Will it work for my type of roofing company?",
    answer: "ShiFt is built specifically for roofing contractors. Residential, commercial, storm restoration—we speak your language.",
  },
  {
    question: "How fast can I see results?",
    answer: "Most clients see their first AI-booked appointment within 48 hours of going live.",
  },
  {
    question: "What if leads prefer to talk to a human?",
    answer: "ShiFt seamlessly hands off to your team when needed. Warm transfer, full context, no friction.",
  },
  {
    question: "How much does it cost?",
    answer: "Less than your worst salesperson and more reliable than your best one. Packages start at different tiers based on your business size. Calculate your ROI first.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
          style={{ color: "#FA982F" }}>
          Questions
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl backdrop-blur-xl border overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: openIndex === i ? "rgba(245,74,72,0.3)" : "rgba(255,255,255,0.08)",
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200"
            >
              <span className="font-display text-base md:text-lg font-semibold text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                style={{ color: openIndex === i ? "#F54A48" : "rgba(255,255,255,0.4)" }}
              />
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="font-body text-sm md:text-base leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)" }}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}