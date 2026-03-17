import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, FileText, Settings, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import BillingOverview from "../components/billing/BillingOverview";
import InvoiceHistory from "../components/billing/InvoiceHistory";
import PaymentMethods from "../components/billing/PaymentMethods";
import RevenueFloorStatus from "../components/billing/RevenueFloorStatus";
import LeadManagement from "../components/leads/LeadManagement";
import RevenueReport from "../components/leads/RevenueReport";

export default function CustomerPortal() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [billingData, setBillingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadPortalData = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);

        // Fetch billing data from backend
        const response = await base44.functions.invoke("getCustomerBilling", {
          company_id: currentUser.company_id
        });

        setBillingData(response.data);
      } catch (error) {
        console.error("Failed to load portal data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPortalData();
  }, []);

  const tabs = [
    { id: "overview", label: "Billing Overview", icon: CreditCard },
    { id: "revenue-floor", label: "Revenue Floor", icon: TrendingUp },
    { id: "invoices", label: "Invoices", icon: FileText },
    { id: "payment", label: "Payment Methods", icon: Settings },
    { id: "leads", label: "Lead Management", icon: TrendingUp },
    { id: "reports", label: "Reports", icon: FileText },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#070820" }}>
        <div className="w-8 h-8 border-4 border-[#F54A48] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#070820", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate("/NeuralOSDashboard")}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>

          <h1 className="font-display text-4xl font-bold text-white mb-2">Customer Portal</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
            Manage your ShiFt subscription, billing, and leads in one place
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex overflow-x-auto gap-2 mb-8 pb-2"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg font-mono text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all"
                style={{
                  background: isActive ? "rgba(245,74,72,0.15)" : "transparent",
                  color: isActive ? "#F54A48" : "rgba(255,255,255,0.4)",
                  borderBottom: isActive ? "2px solid #F54A48" : "none",
                }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && billingData && <BillingOverview data={billingData} user={user} />}
          {activeTab === "revenue-floor" && billingData && <RevenueFloorStatus data={billingData} user={user} />}
          {activeTab === "invoices" && <InvoiceHistory />}
          {activeTab === "payment" && <PaymentMethods data={billingData} user={user} />}
          {activeTab === "leads" && <LeadManagement user={user} />}
          {activeTab === "reports" && <RevenueReport user={user} />}
        </motion.div>
      </div>
    </div>
  );
}