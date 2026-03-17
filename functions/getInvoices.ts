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

    // Mock invoice data (in production, fetch from Stripe API)
    const mockInvoices = [
      {
        id: "in_march_2026",
        number: "INV-2026-03-001",
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        amount: 199700, // $1,997.00
        status: "paid",
        pdf_url: "https://example.com/invoices/inv-2026-03-001.pdf",
      },
      {
        id: "in_feb_2026",
        number: "INV-2026-02-001",
        date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
        amount: 199700,
        status: "paid",
        pdf_url: "https://example.com/invoices/inv-2026-02-001.pdf",
      },
      {
        id: "in_jan_2026",
        number: "INV-2026-01-001",
        date: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString(),
        amount: 199700,
        status: "paid",
        pdf_url: "https://example.com/invoices/inv-2026-01-001.pdf",
      },
    ];

    return Response.json({
      success: true,
      invoices: mockInvoices,
      total_count: mockInvoices.length,
    });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});