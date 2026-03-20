import { createClientFromRequest } from "npm:@base44/sdk@0.8.20";

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { company_id, new_tier } = await req.json();

    // Verify user has access to this company
    if (user.company_id !== company_id) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    // Validate tier
    const validTiers = ["activate", "amplify", "dominate"];
    if (!validTiers.includes(new_tier)) {
      return Response.json({ error: "Invalid tier" }, { status: 400 });
    }

    // Get company
    const company = await base44.entities.Company.get(company_id);

    if (!company) {
      return Response.json({ error: "Company not found" }, { status: 404 });
    }

    // Update company tier (in production, also update Stripe subscription)
    await base44.entities.Company.update(company_id, {
      tier: new_tier,
    });

    // In production, call Stripe API to update subscription
    // const stripeResponse = await fetch(...)

    return Response.json({
      success: true,
      message: `Subscription updated to ${new_tier} tier`,
      new_tier: new_tier,
    });
  } catch (error) {
    console.error("Error updating subscription:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});