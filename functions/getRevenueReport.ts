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

    // Fetch leads and calculate metrics
    const leads = await base44.entities.Lead.filter({ company_id });

    // Calculate statistics
    const totalLeads = leads.length;
    const qualifiedLeads = leads.filter((l) => l.status === "qualified").length;
    const bookedLeads = leads.filter((l) => l.status === "booked").length;
    const closedLeads = leads.filter((l) => l.status === "closed").length;

    const totalValue = leads.reduce((sum, l) => sum + (l.estimated_value || 0), 0);
    const avgLeadValue = totalLeads > 0 ? totalValue / totalLeads : 0;
    const conversionRate = totalLeads > 0 ? (bookedLeads / totalLeads) * 100 : 0;
    const closeRate = bookedLeads > 0 ? (closedLeads / bookedLeads) * 100 : 0;

    return Response.json({
      success: true,
      total_leads: totalLeads,
      qualified_leads: qualifiedLeads,
      booked_leads: bookedLeads,
      closed_leads: closedLeads,
      total_revenue: totalValue,
      avg_lead_value: avgLeadValue,
      conversion_rate: conversionRate,
      close_rate: closeRate,
    });
  } catch (error) {
    console.error("Error fetching revenue report:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});