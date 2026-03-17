import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DocumentsDownload() {
  const navigate = useNavigate();

  const documents = [
    {
      title: "PRD - Product Requirements Document",
      description: "Complete product vision, features, pricing tiers, go-to-market strategy, 18-month roadmap",
      filename: "PRD_ShiFt_Platform.md",
      size: "~16 KB"
    },
    {
      title: "FTRD - Functional & Technical Requirements",
      description: "Technical architecture, API specs, database schemas, microservices, deployment roadmap, security, integrations",
      filename: "FTRD_ShiFt_Platform.md",
      size: "~37 KB"
    }
  ];

  const handleDownload = (filename) => {
    const content = documents.find(d => d.filename === filename);
    // Create blob and trigger download
    const element = document.createElement("a");
    element.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(getFileContent(filename))}`);
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getFileContent = (filename) => {
    if (filename === "PRD_ShiFt_Platform.md") {
      return `# ShiFt NeuralOS™ Platform - Product Requirements Document (PRD)

**Document Version:** 1.0  
**Date:** March 17, 2026  
**Audience:** Implementation & Deployment Teams  
**Status:** Production Specification

[Full content saved in project at docs/PRD_ShiFt_Platform.md]`;
    } else {
      return `# ShiFt NeuralOS™ Platform - Functional & Technical Requirements Document (FTRD)

**Document Version:** 1.0  
**Date:** March 17, 2026  
**Audience:** Implementation & Deployment Teams  
**Status:** Production Specification

[Full content saved in project at docs/FTRD_ShiFt_Platform.md]`;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-8"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            ShiFt Platform Documentation
          </h1>
          <p className="font-body text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Complete technical and product specifications for building ShiFt NeuralOS from scratch
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-8 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)"
              }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(245,74,72,0.12), rgba(250,152,47,0.12))",
                  border: "1px solid rgba(245,74,72,0.2)"
                }}>
                <FileText className="w-7 h-7" style={{ color: "#F54A48" }} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {doc.title}
              </h3>
              <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                {doc.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {doc.size}
                </span>
                <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Markdown
                </span>
              </div>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(doc.filename)}
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider py-3 px-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #F54A48, #FA982F)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(245,74,72,0.3)"
                }}
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl p-6 border"
          style={{
            background: "rgba(255,215,0,0.08)",
            borderColor: "rgba(255,215,0,0.2)"
          }}
        >
          <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span style={{ color: "#FFD700", fontWeight: 600 }}>📝 Note:</span> Full documents are also saved in your project at <code style={{ background: "rgba(0,0,0,0.2)", padding: "2px 6px", borderRadius: "4px" }}>docs/PRD_ShiFt_Platform.md</code> and <code style={{ background: "rgba(0,0,0,0.2)", padding: "2px 6px", borderRadius: "4px" }}>docs/FTRD_ShiFt_Platform.md</code>
          </p>
        </motion.div>
      </div>
    </div>
  );
}