import { createClientFromRequest } from "npm:@base44/sdk@0.8.20";

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { company_id } = await req.json();

    // Verify user has access to this company
    if (user.company_id !== company_id) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    // Get company and revenue baseline
    const company = await base44.entities.Company.get(company_id);
    
    // Mock revenue baseline (in production, fetch from RevenueBaseline entity)
    const guarantees = {
      activate: 15000,
      amplify: 30000,
      dominate: 50000,
    };

    const guaranteeAmount = guarantees[company.tier] || 15000;
    const startDate = new Date(Date.now() - 45 * 24 * 60 * 60 * 1000); // 45 days ago
    const daysRemaining = 90 - Math.floor((Date.now() - startDate.getTime()) / (24 * 60 * 60 * 1000));

    // Mock actual revenue (in production, calculate from closed deals in CRM)
    const actualRevenue = Math.floor(Math.random() * (guaranteeAmount * 1.5 - guaranteeAmount) + guaranteeAmount);

    return Response.json({
      success: true,
      guarantee_amount: guaranteeAmount,
      actual_revenue: actualRevenue,
      days_remaining: Math.max(0, daysRemaining),
      status: daysRemaining > 0 ? "active" : "completed",
      is_on_track: actualRevenue >= guaranteeAmount,
    });
  } catch (error) {
    console.error("Error fetching revenue floor status:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});