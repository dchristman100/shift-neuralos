import React from "react";
import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : {}}
      className={`
        rounded-2xl border border-[rgba(255,255,255,0.06)]
        backdrop-blur-xl
        ${className}
      `}
      style={{
        background: "rgba(255,255,255,0.04)",
      }}
    >
      {children}
    </motion.div>
  );
}