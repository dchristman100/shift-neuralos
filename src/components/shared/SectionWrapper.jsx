import React from "react";

export default function SectionWrapper({ children, className = "", id = "", ariaLabel = "" }) {
  return (
    <section id={id} aria-label={ariaLabel} className={`relative w-full px-5 sm:px-6 md:px-8 py-20 md:py-28 lg:py-32 ${className}`}>
      <div className="relative max-w-[1140px] mx-auto">
        {children}
      </div>
    </section>
  );
}