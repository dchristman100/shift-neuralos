import React from "react";
import { useNavigate } from "react-router-dom";

export default function CombinedROICalculator() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/ROICalculator')}
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
  );
}