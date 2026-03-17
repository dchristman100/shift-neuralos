import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ExternalLink } from "lucide-react";

export default function PaymentMethods({ data, user }) {
  const handleManagePayment = () => {
    if (data?.customer_portal_url) {
      window.open(data.customer_portal_url, "_blank");
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-8"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-start gap-4 mb-6">
          <CreditCard className="w-8 h-8 flex-shrink-0" style={{ color: "#F54A48" }} />
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-1">Payment Methods</h2>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Manage your billing payment information</p>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-6 mb-6">
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
            <strong className="text-white">Currently on file:</strong> Payment method managed through Stripe
          </p>

          <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            All payment information is securely stored and processed by Stripe, our PCI-compliant payment processor.
            We never store your credit card details directly.
          </p>
        </div>

        <button
          onClick={handleManagePayment}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-bold uppercase tracking-wider"
          style={{
            background: "linear-gradient(135deg, #F54A48, #FA982F)",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(245, 74, 72, 0.3)",
          }}
        >
          Edit Payment Methods in Stripe
          <ExternalLink className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Security Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl p-6"
        style={{
          background: "rgba(72,187,120,0.08)",
          border: "1px solid rgba(72,187,120,0.2)",
        }}
      >
        <h3 className="font-display text-lg font-bold text-white mb-3">🔒 Security & Privacy</h3>
        <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          <li>✓ All payments processed by Stripe (PCI DSS Level 1 certified)</li>
          <li>✓ End-to-end encryption for all payment data</li>
          <li>✓ Your credit card details are never stored on our servers</li>
          <li>✓ Automatic recurring billing with clear notifications</li>
          <li>✓ Cancel anytime — no lock-in contracts</li>
        </ul>
      </motion.div>

      {/* Billing FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl p-6"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3 className="font-display text-lg font-bold text-white mb-4">Common Questions</h3>
        <div className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          <div>
            <p className="font-semibold text-white mb-1">When am I billed?</p>
            <p>Billing happens automatically on the same day each month. You'll receive an invoice 24 hours before.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Can I cancel anytime?</p>
            <p>Yes. Cancel your subscription at any time. Your access continues until the end of the current billing cycle.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">What if the 90-Day Guarantee isn't met?</p>
            <p>Your billing pauses automatically. The system keeps working — you just don't pay until you hit the guarantee.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}