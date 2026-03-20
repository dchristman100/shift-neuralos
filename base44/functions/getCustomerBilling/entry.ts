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

    // Fetch company data
    const company = await base44.entities.Company.get(company_id);

    if (!company) {
      return Response.json({ error: "Company not found" }, { status: 404 });
    }

    // Mock Stripe customer portal URL (in production, get from Stripe API)
    const customerPortalUrl = `https://billing.stripe.com/p/login/test_${company.stripe_customer_id || "demo"}`;

    return Response.json({
      success: true,
      tier: company.tier || "activate",
      stripe_customer_id: company.stripe_customer_id,
      customer_portal_url: customerPortalUrl,
      next_billing_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      status: company.status || "active",
    });
  } catch (error) {
    console.error("Error fetching billing data:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});