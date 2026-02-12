import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import GradientButton from "../shared/GradientButton";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <SectionWrapper id="cta" aria-label="Call to action">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden px-7 py-16 md:px-14 md:py-24 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(245,74,72,0.12) 0%, rgba(250,152,47,0.08) 100%)",
          border: "1px solid rgba(245,74,72,0.15)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(245,74,72,0.15), transparent 70%)",
          }}
        />

        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to <span className="shift-gradient-text">ShiFt</span> Your Revenue?
          </h2>
          <p className="font-body text-base md:text-lg text-[rgba(255,255,255,0.55)] max-w-lg mx-auto mb-9">
            Get a free revenue audit and see exactly how much money you're leaving on the table. No contracts, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GradientButton size="lg">
              Start Free Audit
              <ArrowRight className="w-5 h-5" />
            </GradientButton>
            <GradientButton variant="outline" size="lg">
              Talk to Sales
            </GradientButton>
          </div>
          <p className="font-mono text-xs text-[rgba(255,255,255,0.3)] mt-6 tracking-wider">
            Setup in 48 hours · No long-term contracts · Cancel anytime
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}