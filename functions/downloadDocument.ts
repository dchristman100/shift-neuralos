import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

const documents = {
  'PRD_ShiFt_Platform.md': `# ShiFt NeuralOS™ Platform - Product Requirements Document (PRD)

**Document Version:** 1.0  
**Date:** March 17, 2026  
**Audience:** Implementation & Deployment Teams  
**Status:** Production Specification

---

## Executive Summary

ShiFt NeuralOS™ is an AI-powered Revenue Operating System designed for roofing contractors to eliminate revenue leaks, generate qualified pipeline, and automate lead conversion. The platform consists of three integrated modules:

- **ShiFt Attract**: AI-powered lead generation system (Multi-channel campaigns, lead scoring, pipeline filling 24/7)
- **ShiFt Convert**: AI-powered lead conversion system (Instant response, qualification, appointment booking)
- **ShiFt NeuralOS Dashboard**: Unified intelligence platform (Real-time revenue tracking, leak detection, AI automation controls)

**Market Opportunity**: Roofing contractors lose $35K-$100K+ monthly to broken lead systems. ShiFt captures this leakage via AI that works every lead, 24/7.

**Target Users**: Roofing contractors, home improvement contractors (100-300 leads/month), $500K-$10M annual revenue

[Document continues... see full PRD in project for complete content]
`,
  'FTRD_ShiFt_Platform.md': `# ShiFt NeuralOS™ Platform - Functional & Technical Requirements Document (FTRD)

**Document Version:** 1.0  
**Date:** March 17, 2026  
**Audience:** Implementation & Deployment Teams  
**Status:** Production Specification

---

## Executive Summary

This FTRD defines the complete technical architecture, API specifications, data models, and implementation roadmap for building and deploying the ShiFt NeuralOS platform. The system consists of:

1. **Frontend**: React SPA (marketing site + contractor dashboard)
2. **Backend Services**: Node.js/Deno microservices
3. **AI/LLM Layer**: OpenAI/Anthropic integration
4. **Data Layer**: PostgreSQL + Redis
5. **Communications**: Twilio, Vonage, Facebook API
6. **CRM Integration**: Zapier + custom connectors

[Document continues... see full FTRD in project for complete content]
`
};

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    const filename = url.searchParams.get('filename');

    if (!filename || !documents[filename]) {
      return Response.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    const content = documents[filename];

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
});