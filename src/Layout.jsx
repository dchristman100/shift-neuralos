import React from "react";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";

export default function Layout({ children }) {
  return (
    <div className="shift-app min-h-screen" style={{ background: "#070820" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap');

        :root {
          --shift-navy-deep: #070820;
          --shift-navy-core: #0D0F33;
          --shift-coral: #F54A48;
          --shift-orange: #FA982F;
          --shift-glass: rgba(255,255,255,0.04);
          --shift-glass-border: rgba(255,255,255,0.06);
          --shift-gradient: linear-gradient(135deg, #F54A48, #FA982F);
        }

        .shift-app {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .font-display {
          font-family: 'Montserrat Alternates', sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .font-body {
          font-family: 'DM Sans', sans-serif;
        }

        .shift-gradient-text {
          background: var(--shift-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shift-gradient-bg {
          background: var(--shift-gradient);
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: var(--shift-navy-deep);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }

        /* Selection */
        ::selection {
          background: rgba(245,74,72,0.3);
          color: white;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          color: white;
          background: var(--shift-navy-deep);
        }
      `}</style>

      <Navbar />
      {children}
      <Footer />
    </div>
  );
}