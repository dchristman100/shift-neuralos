import React from "react";
import { motion } from "framer-motion";

export default function GradientButton({ children, onClick, href, size = "default", variant = "primary", className = "" }) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    default: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const variants = {
    primary: "shift-gradient-bg text-white",
    outline: "bg-transparent border border-[rgba(255,255,255,0.15)] text-white hover:border-[rgba(245,74,72,0.5)]",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-lg
    font-mono font-semibold tracking-wide uppercase
    transition-all duration-300 cursor-pointer
    ${sizes[size]} ${variants[variant]} ${className}
  `;

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        className={baseClasses}
        style={variant === "primary" ? {
          boxShadow: "0 4px 24px rgba(245, 74, 72, 0.3), 0 1px 3px rgba(0,0,0,0.2)"
        } : {}}
      >
        {children}
      </Comp>
    </motion.div>
  );
}