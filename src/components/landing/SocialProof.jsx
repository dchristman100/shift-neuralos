import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import GlassCard from "../shared/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Owner, Apex Roofing Co.",
    quote: "ShiFt turned our business around. We went from chasing leads to having a waitlist. Revenue doubled in 6 months.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "GM, Summit Storm Solutions",
    quote: "The AI assistant books 40+ inspections a week for us. It's like having a sales team that never sleeps.",
    stars: 5,
  },
  {
    name: "David Martinez",
    role: "CEO, Eagle Eye Roofing",
    quote: "Property intelligence alone paid for the platform in the first month. We're closing neighborhoods, not just houses.",
    stars: 5,
  },
];

export default function SocialProof() {
  return (
    <SectionWrapper id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 md:mb-20"
      >
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#FA982F] mb-4 block">
          Results
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Trusted by <span className="shift-gradient-text">Top Contractors</span>
        </h2>
        <p className="font-body text-base md:text-lg text-[rgba(255,255,255,0.5)] max-w-xl mx-auto">
          Roofing companies across the country are scaling with ShiFt NeuralOS™.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((t, i) => (
          <GlassCard key={i} delay={i * 0.12} className="p-7 md:p-8 flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.stars }).map((_, si) => (
                <Star key={si} className="w-4 h-4 fill-[#FA982F] text-[#FA982F]" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-body text-sm md:text-base text-[rgba(255,255,255,0.65)] leading-relaxed mb-6 flex-1">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white"
                style={{
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, #F54A48, #FA982F)"
                    : "linear-gradient(135deg, #FA982F, #F54A48)",
                }}
              >
                {t.name[0]}
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                <div className="font-body text-xs text-[rgba(255,255,255,0.4)]">{t.role}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}