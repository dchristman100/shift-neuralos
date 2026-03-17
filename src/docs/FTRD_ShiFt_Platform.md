# ShiFt NeuralOS™ Platform - Functional & Technical Requirements Document (FTRD)

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

---

## 1. System Architecture

### 1.1 High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL CHANNELS                          │
│    Phone (Vonage) │ SMS (Twilio) │ Facebook │ Web Form         │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│                  API GATEWAY (Kong)                             │
│  - Rate limiting, auth, request routing                         │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│              MICROSERVICES LAYER                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Lead Service │  │   AI Service │  │ Booking Svc  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  CRM Sync    │  │  Campaign    │  │ Analytics    │          │
│  │  Service     │  │  Service     │  │ Service      │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────┬───────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│                  DATA LAYER                                     │
│  PostgreSQL (primary) │ Redis (cache/queue) │ S3 (files)       │
└─────────────────────────────────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│              EXTERNAL INTEGRATIONS                              │
│  CRM APIs │ OpenAI/Claude │ Stripe │ Google Ads │ Facebook     │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | React 18 + TypeScript | SPA, fast, component-based |
| **Styling** | Tailwind CSS | Utility-first, fast iteration |
| **State Mgmt** | TanStack Query + Zustand | Data fetching + client state |
| **Backend** | Node.js + Express/Deno | Async, event-driven |
| **Database** | PostgreSQL 15 | ACID, relational, reliable |
| **Cache** | Redis 7 | Session, queue, real-time updates |
| **Message Queue** | Bull/BullMQ | Background jobs, reliability |
| **LLM** | OpenAI GPT-4 + Claude | Conversation, qualification |
| **Real-time** | WebSocket + Socket.io | Live dashboard updates |
| **Auth** | Auth0/Firebase | Enterprise auth, SAML |
| **Monitoring** | Datadog + ELK | Observability, debugging |
| **CDN** | Cloudflare | Global distribution |
| **Hosting** | AWS (ECS, RDS, Lambda) | Scalability, reliability |

---

## 2. Data Models & Database Schema

### 2.1 Core Entities

```sql
-- Users (contractors, team members)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  auth0_id VARCHAR UNIQUE,
  email VARCHAR UNIQUE NOT NULL,
  full_name VARCHAR,
  company_id UUID NOT NULL REFERENCES companies(id),
  role ENUM ('owner', 'sales_manager', 'admin', 'user'),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Companies (contractor businesses)
CREATE TABLE companies (
  id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  industry VARCHAR DEFAULT 'roofing',
  monthly_revenue DECIMAL(12,2),
  monthly_leads INTEGER,
  close_rate DECIMAL(5,2), -- percentage
  service_areas JSONB, -- array of zip codes
  crm_type ENUM ('pipedrive', 'hubspot', 'salesforce', 'custom'),
  crm_api_key ENCRYPTED VARCHAR,
  stripe_customer_id VARCHAR,
  tier ENUM ('activate', 'amplify', 'dominate'),
  status ENUM ('active', 'paused', 'cancelled'),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Leads (inbound leads from all channels)
CREATE TABLE leads (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  source ENUM ('phone', 'sms', 'web_form', 'facebook', 'email'),
  source_campaign VARCHAR, -- which campaign did it come from
  first_name VARCHAR,
  last_name VARCHAR,
  phone VARCHAR,
  email VARCHAR,
  property_address VARCHAR,
  property_zip VARCHAR,
  damage_type VARCHAR, -- roof damage type
  insurance_status VARCHAR, -- insured, not insured
  timeline VARCHAR, -- urgent, asap, 1-2 weeks, etc
  qualification_score INTEGER (0-100),
  status ENUM ('new', 'qualified', 'booked', 'contacted', 'disqualified', 'closed'),
  ai_transcript JSONB, -- conversation history
  crm_sync_id VARCHAR, -- ID in external CRM
  appointment_id UUID REFERENCES appointments(id),
  estimated_value DECIMAL(10,2), -- potential job value
  created_at TIMESTAMP DEFAULT NOW(),
  responded_at TIMESTAMP,
  qualified_at TIMESTAMP,
  booked_at TIMESTAMP,
  closed_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_company_created (company_id, created_at),
  INDEX idx_status_qualified (company_id, status)
);

-- Appointments (booked appointments)
CREATE TABLE appointments (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  lead_id UUID NOT NULL REFERENCES leads(id),
  contractor_email VARCHAR,
  scheduled_time TIMESTAMP NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  calendar_event_id VARCHAR, -- Google Calendar event ID
  status ENUM ('scheduled', 'confirmed', 'completed', 'no_show', 'cancelled'),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Campaigns (Attract module - marketing campaigns)
CREATE TABLE campaigns (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  name VARCHAR NOT NULL,
  channel ENUM ('google_lsa', 'facebook', 'tiktok', 'google_search', 'email'),
  status ENUM ('draft', 'active', 'paused', 'completed'),
  budget_monthly DECIMAL(10,2),
  target_service_areas JSONB, -- array of zip codes
  target_audience JSONB, -- demographic filters
  ai_optimized BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Campaign Performance (daily metrics)
CREATE TABLE campaign_performance (
  id UUID PRIMARY KEY,
  campaign_id UUID NOT NULL REFERENCES campaigns(id),
  date DATE NOT NULL,
  leads_generated INTEGER,
  qualified_leads INTEGER,
  appointments_booked INTEGER,
  cost DECIMAL(10,2),
  revenue_attributed DECIMAL(12,2),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (campaign_id, date)
);

-- Revenue Leaks (detected missed opportunities)
CREATE TABLE revenue_leaks (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  lead_id UUID REFERENCES leads(id),
  leak_type ENUM ('missed_followup', 'slow_response', 'unclosed_intent'),
  severity ENUM ('critical', 'high', 'medium'),
  estimated_value DECIMAL(10,2),
  days_open INTEGER,
  fix_action VARCHAR, -- what should be done
  status ENUM ('detected', 'fixed', 'dismissed'),
  created_at TIMESTAMP DEFAULT NOW(),
  fixed_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Integrations (track connected CRM/calendar/etc)
CREATE TABLE integrations (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  integration_type ENUM ('pipedrive', 'hubspot', 'salesforce', 'google_calendar', 'outlook'),
  access_token ENCRYPTED VARCHAR,
  refresh_token ENCRYPTED VARCHAR,
  last_sync TIMESTAMP,
  sync_status ENUM ('active', 'error', 'disconnected'),
  error_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- AI Conversation Log (for training & debugging)
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES leads(id),
  channel ENUM ('phone', 'sms', 'web'),
  model_used VARCHAR, -- 'gpt-4', 'claude-3', etc
  messages JSONB, -- array of {role: 'user'|'assistant', content: '...'}
  qualification_result JSONB, -- {score: X, qualified: bool, ...}
  duration_seconds INTEGER,
  tokens_used INTEGER,
  cost DECIMAL(8,4),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Revenue Baseline (for guarantee tracking)
CREATE TABLE revenue_baselines (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  baseline_monthly_revenue DECIMAL(12,2),
  guarantee_tier ENUM ('activate', 'amplify', 'dominate'),
  guarantee_amount DECIMAL(10,2),
  start_date DATE,
  end_date DATE, -- 90 days from start
  actual_revenue_increase DECIMAL(10,2),
  status ENUM ('active', 'met', 'exceeded', 'refund_eligible'),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics Events (track user actions for insight)
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES companies(id),
  event_type VARCHAR, -- 'lead_received', 'appointment_booked', etc
  properties JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_company_event_time (company_id, event_type, created_at)
);
```

### 2.2 Key Relationships

```
companies (1) ──→ (M) users
companies (1) ──→ (M) leads
companies (1) ──→ (M) appointments
companies (1) ──→ (M) campaigns
companies (1) ──→ (M) integrations
companies (1) ──→ (M) revenue_leaks

leads (1) ──→ (M) ai_conversations
leads (1) ──→ (1) appointments
campaigns (1) ──→ (M) campaign_performance
```

---

## 3. API Specification

### 3.1 Authentication

**OAuth 2.0 via Auth0**
```
POST /auth/login
  - Email/password → JWT token
  
POST /auth/logout
  - Invalidate session
  
GET /auth/me
  - Return current user + company
```

**Headers for all requests**:
```
Authorization: Bearer {JWT_TOKEN}
X-Company-ID: {UUID}
Content-Type: application/json
```

### 3.2 Lead Management Endpoints

#### Create Lead (Internal or via Webhook)
```
POST /api/v1/leads
Headers: Authorization, X-Company-ID
Body:
{
  "source": "phone|sms|web_form|facebook",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+12025551234",
  "email": "john@example.com",
  "property_address": "123 Main St",
  "property_zip": "10001",
  "message_body": "My roof is leaking", // for SMS/web forms
  "campaign_id": "uuid" // optional, if from campaign
}

Response: 201 Created
{
  "id": "uuid",
  "status": "new",
  "created_at": "2026-03-17T10:00:00Z"
}
```

#### Get Lead Details
```
GET /api/v1/leads/{lead_id}
Response: 200 OK
{
  "id": "uuid",
  "first_name": "John",
  "phone": "+12025551234",
  "qualification_score": 85,
  "status": "qualified",
  "ai_transcript": [
    {"role": "assistant", "content": "Hi John, thanks for calling..."},
    {"role": "user", "content": "My roof is leaking"},
    ...
  ],
  "appointment": {
    "id": "uuid",
    "scheduled_time": "2026-03-20T14:00:00Z"
  }
}
```

#### List Leads (with filtering)
```
GET /api/v1/leads?status=qualified&page=1&limit=50
Response: 200 OK
{
  "leads": [...],
  "total": 245,
  "page": 1,
  "pages": 5
}
```

#### Update Lead Status
```
PATCH /api/v1/leads/{lead_id}
Body:
{
  "status": "booked",
  "notes": "Confirmed appointment"
}
Response: 200 OK
```

### 3.3 Appointment Endpoints

#### Create Appointment
```
POST /api/v1/appointments
Body:
{
  "lead_id": "uuid",
  "scheduled_time": "2026-03-20T14:00:00Z",
  "duration_minutes": 60,
  "contractor_email": "contractor@company.com",
  "sync_to_calendar": true
}
Response: 201 Created
{
  "id": "uuid",
  "calendar_event_id": "google-event-id",
  "status": "scheduled"
}
```

#### Send Appointment Reminder
```
POST /api/v1/appointments/{appointment_id}/send-reminder
Body: {} // trigger SMS reminder
Response: 200 OK
{
  "sent_to": "+12025551234",
  "message": "Reminder: appointment tomorrow at 2 PM..."
}
```

### 3.4 AI Conversation Endpoints

#### Get AI Transcript
```
GET /api/v1/leads/{lead_id}/transcript
Response: 200 OK
{
  "messages": [
    {"role": "assistant", "text": "...", "timestamp": "..."},
    {"role": "user", "text": "...", "timestamp": "..."}
  ],
  "qualification_result": {
    "qualified": true,
    "score": 85,
    "reason": "Property in service area, urgent timeline, insured"
  }
}
```

#### Manual AI Correction
```
POST /api/v1/leads/{lead_id}/transcript/correct
Body:
{
  "corrected_qualification": true,
  "corrected_score": 95
}
Response: 200 OK
```

### 3.5 CRM Sync Endpoints

#### Trigger Manual Sync
```
POST /api/v1/integrations/{integration_id}/sync
Response: 202 Accepted
{
  "sync_id": "uuid",
  "status": "in_progress"
}
```

#### Get Sync Status
```
GET /api/v1/integrations/{integration_id}/sync/{sync_id}
Response: 200 OK
{
  "status": "completed",
  "leads_synced": 142,
  "errors": [],
  "completed_at": "2026-03-17T10:15:00Z"
}
```

### 3.6 Dashboard/Analytics Endpoints

#### Get KPI Summary
```
GET /api/v1/dashboard/kpis?period=month
Response: 200 OK
{
  "monthly_revenue": 45000,
  "leads_received": 87,
  "leads_qualified": 62,
  "appointments_booked": 48,
  "close_rate": 0.68,
  "avg_response_time_seconds": 28,
  "lead_quality_score": 78
}
```

#### Get Revenue Leaks
```
GET /api/v1/dashboard/leaks?severity=critical
Response: 200 OK
{
  "leaks": [
    {
      "id": "uuid",
      "type": "missed_followup",
      "lead_name": "John Doe",
      "estimated_value": 8500,
      "days_open": 6,
      "fix_action": "Send follow-up SMS + email sequence"
    }
  ],
  "total_at_risk": 156000
}
```

#### Fix Revenue Leak
```
POST /api/v1/dashboard/leaks/{leak_id}/fix
Response: 200 OK
{
  "action_taken": "Triggered re-engagement sequence",
  "affected_leads": 1
}
```

### 3.7 Campaign Endpoints

#### Create Campaign
```
POST /api/v1/campaigns
Body:
{
  "name": "Facebook Roofing Ads Q1",
  "channel": "facebook",
  "budget_monthly": 2000,
  "target_service_areas": ["10001", "10002", "10003"],
  "target_audience": {
    "age_min": 35,
    "age_max": 65,
    "homeowner": true
  }
}
Response: 201 Created
```

#### Get Campaign Performance
```
GET /api/v1/campaigns/{campaign_id}/performance?start_date=2026-03-01&end_date=2026-03-17
Response: 200 OK
{
  "daily_metrics": [
    {
      "date": "2026-03-17",
      "leads": 12,
      "qualified": 9,
      "booked": 7,
      "cost": 150,
      "revenue_attributed": 15000
    }
  ],
  "summary": {
    "total_leads": 156,
    "total_qualified": 115,
    "roi": 3.8
  }
}
```

---

## 4. Backend Service Architecture

### 4.1 Microservices

#### **Lead Ingestion Service**
- Receives leads from: phone (Vonage), SMS (Twilio), web forms, Facebook
- Stores to PostgreSQL
- Triggers AI qualification in queue
- Publishes `lead.received` event to message bus

**Tech**: Node.js + Express, Twilio SDK, Vonage SDK, Bull queue

**Key Endpoints**:
- `POST /api/v1/leads` (create)
- `POST /webhooks/twilio/sms` (Twilio webhook)
- `POST /webhooks/vonage/calls` (Vonage webhook)
- `POST /webhooks/facebook/messages` (Facebook webhook)

---

#### **AI Service**
- Receives lead from queue
- Calls OpenAI/Claude LLM for conversation
- Implements conversation logic: greeting → questions → qualification → booking
- Stores transcript + qualification result
- Updates lead status
- Publishes `lead.qualified` event

**Tech**: Node.js, OpenAI SDK, Redis queue, PostgreSQL

**Key Logic**:
```javascript
// Pseudo-code
async function qualifyLead(lead) {
  const conversation = [];
  let qualified = false;
  let score = 0;
  
  // Step 1: Greeting
  const greeting = await llm.generateResponse(
    "You are a roofing lead qualifier. Be friendly and helpful.",
    conversation
  );
  conversation.push({role: 'assistant', content: greeting});
  
  // Step 2-N: Ask qualification questions
  // - Property address in service area?
  // - Type of damage?
  // - Timeline (urgent/asap/1-2 weeks)?
  // - Insurance status?
  // Score based on answers
  
  // Step N: Booking
  if (score >= 75) {
    // Offer appointment booking
    qualified = true;
  }
  
  // Store result
  await Lead.update({
    qualification_score: score,
    qualified: qualified,
    ai_transcript: conversation
  });
  
  return { qualified, score };
}
```

---

#### **Booking Service**
- Receives qualified lead
- Integrates with Google Calendar / Outlook
- Finds available appointment slots
- Sends confirmation to lead (SMS + email)
- Stores appointment
- Publishes `appointment.booked` event

**Tech**: Node.js, Google Calendar API, Twilio, SendGrid

---

#### **CRM Sync Service**
- Periodically syncs leads/appointments to external CRM
- Handles Pipedrive, HubSpot, Salesforce via their APIs or Zapier
- Bidirectional: updates from CRM reflected back to ShiFt
- Tracks sync status & errors

**Tech**: Node.js, Zapier API, CRM SDKs, PostgreSQL

**Sync Frequency**: Real-time (webhook) + hourly batch fallback

---

#### **Campaign Service**
- Manages Attract campaigns (Google LSA, Facebook, TikTok)
- Creates campaigns via respective APIs
- Tracks performance metrics
- AI optimizes targeting based on lead quality
- Calculates ROI per campaign

**Tech**: Node.js, Google Ads API, Facebook Business API, TikTok Ads API

---

#### **Analytics Service**
- Consumes events: `lead.received`, `lead.qualified`, `appointment.booked`, `deal.closed`
- Aggregates KPIs: leads/day, qualification rate, appointment rate, close rate, revenue
- Detects revenue leaks (missed follow-ups, stalled deals)
- Serves dashboard queries
- Pushes real-time updates via WebSocket

**Tech**: Node.js, PostgreSQL, Redis, Socket.io, Datadog

---

#### **Notification Service**
- Sends SMS (Twilio)
- Sends emails (SendGrid)
- Sends push notifications (Firebase)
- Tracks delivery status
- Handles retries

**Tech**: Node.js, Twilio, SendGrid, Firebase Admin SDK

---

### 4.2 Message Queue Architecture

Using Bull/BullMQ for reliability:

```
┌──────────────────┐
│ Lead Ingestion   │
│ Service          │
└────────┬─────────┘
         │
         ├─→ [LEAD_QUEUE] ─→ AI Service
         │
         └─→ [NOTIFICATION_QUEUE] ─→ Notification Service
         
┌──────────────────┐
│ AI Service       │
└────────┬─────────┘
         │
         └─→ [BOOKING_QUEUE] ─→ Booking Service
                              ↓
                        [CRM_SYNC_QUEUE] ─→ CRM Service
```

Queue properties:
- Max retry attempts: 3
- Retry delay: exponential backoff (1s, 5s, 30s)
- Dead letter queue for failures
- Job persistence to Redis

---

## 5. Frontend Architecture

### 5.1 Application Structure

```
src/
├── pages/
│   ├── Public/
│   │   ├── LandingPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── CaseStudiesPage.jsx
│   │   └── ROICalculatorPage.jsx
│   ├── Dashboard/
│   │   ├── DashboardHome.jsx
│   │   ├── LeadsTable.jsx
│   │   ├── AppointmentsView.jsx
│   │   ├── LeakDetectorPage.jsx
│   │   └── CampaignManager.jsx
│   └── Settings/
│       ├── IntegrationSettings.jsx
│       ├── CompanySettings.jsx
│       └── TeamManagement.jsx
├── components/
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── GradientButton.jsx
│   │   └── Card.jsx
│   ├── dashboard/
│   │   ├── KPICard.jsx
│   │   ├── LeakCard.jsx
│   │   ├── ActivityFeed.jsx
│   │   └── ConversationViewer.jsx
│   └── forms/
│       ├── LeadForm.jsx
│       ├── CampaignForm.jsx
│       └── IntegrationSetup.jsx
├── hooks/
│   ├── useLeads.js
│   ├── useAppointments.js
│   ├── useDashboard.js
│   └── useAuth.js
├── context/
│   ├── AuthContext.jsx
│   ├── CompanyContext.jsx
│   └── NotificationContext.jsx
├── lib/
│   ├── api.js (Axios instance)
│   ├── auth.js (Auth0)
│   └── realtime.js (WebSocket)
└── App.jsx
```

### 5.2 Key Pages & Components

#### **Dashboard Home**
Shows KPIs, lead summary, activity feed
- Real-time KPI counters (revenue, leads, appointments)
- Lead quality trend chart
- Activity feed (last 20 events)
- Quick actions (see revenue leaks, view leads)

#### **Leads Table**
Searchable, filterable, sortable table
- Columns: Name, Source, Score, Status, Response Time, Value
- Filters: Status, Source, Date, Score range
- Actions: View details, message, schedule, close
- Pagination (50 leads/page)

#### **Leak Detector**
Shows detected revenue leaks
- Severity badges (critical, high, medium)
- List of leaks with fix suggestions
- "Fix Now" button triggers auto re-engagement
- Filters by type/severity

#### **Campaign Manager**
Create/manage marketing campaigns
- Create campaign: select channel, budget, audience
- Monitor performance: leads/day, cost/lead, ROI
- Pause/resume campaigns
- AI optimization toggle

#### **Settings & Integrations**
- Connect CRM (Pipedrive, HubSpot, Salesforce)
- Configure AI parameters (qualification threshold, response style)
- Set service areas (zip codes)
- Manage team members & permissions
- Billing & subscription

### 5.3 State Management

```javascript
// Zustand stores
├── authStore (user, login/logout)
├── companyStore (company info, tier, settings)
├── leadsStore (cached leads, filters, pagination)
├── dashboardStore (KPIs, summary data)
├── notificationStore (toast notifications)
└── uiStore (sidebar open/close, theme)

// React Query hooks
├── useLeads() → GET /leads (cached, auto-refetch)
├── useAppointments() → GET /appointments
├── useDashboardKPIs() → GET /dashboard/kpis
└── useCampaigns() → GET /campaigns
```

### 5.4 Real-Time Updates

**WebSocket connection** to backend:
```javascript
// Subscribe to events
socket.on('lead.received', (lead) => {
  // Add to leads list, play notification sound
});

socket.on('appointment.booked', (appointment) => {
  // Update leads table, increment KPI counter
});

socket.on('dashboard.kpi_update', (kpis) => {
  // Update KPI cards in real-time
});
```

---

## 6. Integration Points

### 6.1 CRM Integrations

#### **Pipedrive**
- API endpoint: `https://api.pipedrive.com/v1/`
- Sync: Leads → Pipedrive Deals
- Bidirectional: Pipedrive Deal updates → ShiFt lead status
- Frequency: Real-time (webhook) + hourly batch

**Mapped Fields**:
```
ShiFt Lead → Pipedrive Deal
- first_name → Person name
- phone → Phone number
- property_address → Custom field
- qualification_score → Custom field "Lead Score"
- appointment → Activity (appointment)
```

#### **HubSpot**
- API endpoint: `https://api.hubapi.com/crm/v3/`
- Sync: Leads → Contacts + Deals
- Bidirectional webhooks

#### **Salesforce**
- API: Salesforce REST API
- OAuth 2.0 auth
- Sync: Leads → Salesforce Leads/Opportunities

### 6.2 Communication Integrations

#### **Twilio (SMS/Voice)**
```
Inbound SMS:
1. SMS arrives at Twilio number
2. Twilio webhook → Lead Service
3. Create lead + trigger AI Service

Outbound SMS:
1. Notification Service calls Twilio API
2. Send message to contractor/lead
3. Webhook confirmation of delivery
```

#### **Vonage (Phone Calls)**
```
Inbound Call:
1. Call arrives at Vonage number
2. Vonage connects to WebRTC server
3. AI Service answers, conducts qualification
4. Results stored in database
```

#### **Facebook Messenger**
- Webhook: Facebook → Lead Service
- Auth: Verify webhook token
- Parse message → Create lead
- Send response via Facebook API

### 6.3 Calendar Integrations

#### **Google Calendar**
```javascript
const calendar = google.calendar({ version: 'v3', auth });

// Find available slots
const events = await calendar.events.list({
  calendarId: 'primary',
  timeMin: new Date(),
  timeMax: new Date(Date.now() + 7*24*60*60*1000)
});

// Create appointment
await calendar.events.insert({
  calendarId: 'primary',
  resource: {
    summary: `Roof Inspection - ${lead.name}`,
    start: { dateTime: appointment_time },
    end: { dateTime: appointment_time + 60min },
    attendees: [{ email: lead.email }]
  }
});
```

#### **Outlook**
Similar flow via Microsoft Graph API

---

## 7. Security & Compliance

### 7.1 Authentication & Authorization

**OAuth 2.0 via Auth0**:
- User logs in → Auth0 → JWT token
- JWT stored in HttpOnly cookie (secure, not accessible via JS)
- Refresh token in secure storage for token renewal

**API Authorization**:
- All endpoints require valid JWT
- X-Company-ID header (validated against JWT user's company)
- Role-based access control (RBAC):
  ```
  owner → all actions
  sales_manager → view/edit leads, view dashboard
  admin → all except billing
  user → view only
  ```

### 7.2 Data Encryption

- **At Rest**: AES-256 encryption for sensitive fields
  - CRM API keys
  - Phone numbers
  - Email addresses
  - Payment info

- **In Transit**: TLS 1.3 for all HTTPS connections

- **Database**: RLS (Row-Level Security) ensures contractors see only their own data

### 7.3 TCPA Compliance

**Telephone Consumer Protection Act** (US law for SMS/calls):

Requirements:
1. **Opt-in Consent**: Before sending marketing SMS/calls
2. **Unsubscribe**: STOP keyword removes from list
3. **Do Not Call Registry**: Check before calling
4. **SMS Opt-in**: Text "STOP" to unsubscribe automatically handled
5. **Audit Trail**: Log all consent & communication

Implementation:
```sql
-- Track consent
CREATE TABLE consent_logs (
  id UUID PRIMARY KEY,
  phone VARCHAR,
  consent_type ENUM ('sms', 'call', 'email'),
  opted_in BOOLEAN,
  timestamp TIMESTAMP,
  source VARCHAR -- 'lead_submission', 'verbal', 'sms_reply'
);

-- Before sending SMS/call:
-- 1. Check consent_logs for opted_in = true
-- 2. Check Do Not Call registry (FCC API)
-- 3. If no consent → skip or request consent
```

### 7.4 GDPR/CCPA Compliance

**Data Rights**:
- Users can request: data export, data deletion, opt-out
- Implement data export endpoint (JSON of all user data)
- Implement right-to-be-forgotten (delete all personal data)
- Privacy policy & terms of service required

**Data Retention**:
- Leads: 2 years (for analytics)
- AI conversations: 1 year
- Deleted leads: anonymized after 30 days
- PII purged after retention period

### 7.5 Payment Security

- **PCI DSS Compliance**: Never store credit card numbers directly
- Use **Stripe** for payment processing (fully PCI-compliant)
- Store only Stripe customer IDs + last 4 digits
- Webhooks for payment events (charge.succeeded, charge.failed)

---

## 8. Monitoring & Observability

### 8.1 Metrics & Dashboards

**Key Metrics** (via Datadog):
- **API Performance**: p50, p95, p99 latency per endpoint
- **Service Health**: Error rate, uptime, deployment frequency
- **Business Metrics**: Leads/day, qualified %, close rate
- **Cost**: AWS spend, LLM API costs, Twilio/Vonage costs

**Dashboards**:
1. **Operations Dashboard**: API health, error rates, queue depth
2. **Business Dashboard**: Leads, revenue, KPIs
3. **Cost Dashboard**: Daily spend by service

### 8.2 Logging

**Structured logging** (ELK stack):
```json
{
  "timestamp": "2026-03-17T10:00:00Z",
  "level": "INFO",
  "service": "ai-service",
  "action": "lead.qualified",
  "company_id": "uuid",
  "lead_id": "uuid",
  "qualification_score": 85,
  "duration_ms": 1200,
  "model": "gpt-4"
}
```

**Log retention**: 30 days hot, 1 year cold (S3 archive)

### 8.3 Alerting

**PagerDuty alerts**:
- API latency p95 > 1s (warning)
- API error rate > 1% (critical)
- Queue depth > 1000 (warning)
- Database CPU > 80% (warning)
- Failed CRM syncs (critical)

---

## 9. Implementation Roadmap

### Phase 1: MVP (Weeks 1-8)
**Goal**: Working Convert module + basic dashboard

**Week 1-2: Project Setup**
- [ ] AWS infrastructure (ECS, RDS, Redis)
- [ ] GitHub repo structure
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Local dev environment docs

**Week 3-4: Backend Core**
- [ ] Lead ingestion service (REST API)
- [ ] PostgreSQL schema
- [ ] Redis queue setup
- [ ] Basic auth (JWT)

**Week 5-6: AI Integration**
- [ ] OpenAI integration (conversation + qualification)
- [ ] AI service microservice
- [ ] Qualification logic & scoring
- [ ] Conversation transcript storage

**Week 7-8: Frontend Dashboard**
- [ ] React project setup (Tailwind CSS)
- [ ] Dashboard layout (sidebar, main area)
- [ ] Leads table (search, filter, pagination)
- [ ] Login flow

**Deliverables**:
- Beta dashboard with live leads
- AI qualification working
- 99% uptime
- Documentation for deployment

---

### Phase 2: Integrations (Weeks 9-14)
**Goal**: CRM sync + Calendar booking

**Week 9: Pipedrive Integration**
- [ ] OAuth setup
- [ ] Sync leads → Pipedrive Deals
- [ ] Bidirectional sync (Pipedrive → ShiFt)
- [ ] Error handling & retries

**Week 10: Calendar Integration**
- [ ] Google Calendar API
- [ ] Find available slots
- [ ] Book appointments
- [ ] Send reminders (SMS + email)

**Week 11: Notifications**
- [ ] Twilio SMS integration (already in Lead Service)
- [ ] SendGrid email integration
- [ ] Notification templates
- [ ] Delivery tracking

**Week 12-13: HubSpot & Salesforce**
- [ ] HubSpot CRM sync
- [ ] Salesforce CRM sync
- [ ] UI for integration setup

**Week 14: Testing & Polish**
- [ ] E2E tests (Cypress)
- [ ] Load testing
- [ ] Security audit
- [ ] Performance optimization

**Deliverables**:
- CRM integrations working
- Appointment booking automated
- 3+ case studies in beta
- Security audit passed

---

### Phase 3: Attract Module (Weeks 15-20)
**Goal**: Lead generation campaigns

**Week 15: Campaign Data Model**
- [ ] Campaign schema
- [ ] Performance metrics tracking
- [ ] Campaign UI (create, list, manage)

**Week 16-17: Google LSA Integration**
- [ ] Google Ads API integration
- [ ] Create LSA campaigns programmatically
- [ ] Performance tracking
- [ ] Budget management

**Week 18: Facebook Ads**
- [ ] Facebook Business API
- [ ] Campaign creation
- [ ] Lead syncing from Facebook

**Week 19: Campaign Optimization**
- [ ] AI optimization logic (adjust targeting)
- [ ] A/B testing framework
- [ ] ROI attribution

**Week 20: Testing & Documentation**
- [ ] E2E tests for campaigns
- [ ] Campaign performance docs
- [ ] ROI calculator accuracy

**Deliverables**:
- Attract module MVP
- Google LSA + Facebook running
- Campaign performance dashboard
- 10+ customers in beta

---

### Phase 4: Revenue Leaks & Polish (Weeks 21-24)
**Goal**: Leak detector + launch readiness

**Week 21: Leak Detection**
- [ ] SQL queries to detect leaks
- [ ] Leak types: missed follow-ups, slow response, stalled deals
- [ ] Severity scoring
- [ ] Leak detector UI

**Week 22: Auto-Fix Actions**
- [ ] Trigger re-engagement sequences
- [ ] SMS/email templates
- [ ] Track fix effectiveness

**Week 23: Analytics & Reporting**
- [ ] KPI aggregation
- [ ] Reporting API
- [ ] CSV export

**Week 24: Launch Preparation**
- [ ] Legal review (ToS, Privacy)
- [ ] TCPA compliance audit
- [ ] Pricing & billing finalized
- [ ] Marketing site ready
- [ ] Sales collateral (pitch, ROI calc)

**Deliverables**:
- Feature-complete platform
- 50+ beta contractors
- Case studies & testimonials
- Ready for public launch

---

### Phase 5+: Scale & Expansion (Months 6+)
- White-label options
- Additional integrations (more CRMs, ad networks)
- Advanced AI features (predictive analytics)
- Mobile app
- Vertical expansion (HVAC, plumbing, etc.)
- International markets

---

## 10. Testing Strategy

### 10.1 Test Coverage

| Layer | Type | Framework | Coverage Target |
|-------|------|-----------|-----------------|
| **Unit** | Service logic | Jest | 80%+ |
| **Integration** | API endpoints | Jest + Supertest | 70%+ |
| **E2E** | User workflows | Cypress | Key user paths |
| **Load** | Performance | k6 | p95 latency < 500ms |

### 10.2 Critical Test Scenarios

**Lead Ingestion**:
- [x] SMS arrives → Lead created → AI triggered
- [x] Duplicate phone number handling
- [x] Invalid data rejection

**AI Qualification**:
- [x] Conversation flow (greeting → questions → qualification)
- [x] Score calculation accuracy
- [x] Transcription quality

**CRM Sync**:
- [x] Pipedrive sync accuracy
- [x] Handling CRM API errors
- [x] Avoiding duplicate syncs

**Appointment Booking**:
- [x] Calendar integration (Google Calendar)
- [x] Reminder sending
- [x] No-show handling

**Revenue Leak Detection**:
- [x] Missed follow-up detection
- [x] Leak severity scoring
- [x] Fix action triggering

---

## 11. Deployment & DevOps

### 11.1 Infrastructure (AWS)

```
┌─────────────────────────────────────┐
│   CloudFront (CDN)                  │
│   ↓                                 │
├─────────────────────────────────────┤
│   ALB (Application Load Balancer)   │
│   ↓                                 │
├─────────────────────────────────────┤
│   ECS Cluster (Fargate)             │
│   ├─ Frontend Service (React)       │
│   ├─ API Gateway (Express)          │
│   ├─ Lead Service                   │
│   ├─ AI Service                     │
│   ├─ Booking Service                │
│   ├─ CRM Sync Service               │
│   ├─ Analytics Service              │
│   └─ Notification Service           │
├─────────────────────────────────────┤
│   Data Layer                        │
│   ├─ RDS (PostgreSQL)               │
│   ├─ ElastiCache (Redis)            │
│   └─ S3 (Files, backups)            │
└─────────────────────────────────────┘
```

**Infrastructure as Code** (Terraform):
```hcl
# ECS service for Lead Service
resource "aws_ecs_service" "lead_service" {
  name            = "shift-lead-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.lead_service.arn
  desired_count   = 3
  launch_type     = "FARGATE"
  
  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
  }
}
```

### 11.2 CI/CD Pipeline (GitHub Actions)

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run build
      - run: docker build -t shift:${{ github.sha }} .
      - run: docker push $ECR_REGISTRY/shift:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: aws ecs update-service --cluster shift --service lead-service --force-new-deployment
```

### 11.3 Monitoring & Alerts

- **Uptime Monitoring**: Datadog + PagerDuty
- **Log Aggregation**: CloudWatch + ELK
- **APM**: Datadog APM (application tracing)
- **Error Tracking**: Sentry (exception tracking)

---

## 12. Data Backup & Disaster Recovery

### 12.1 Backup Strategy

| Component | Frequency | Retention | Recovery Time |
|-----------|-----------|-----------|----------------|
| **PostgreSQL** | Daily | 30 days | < 1 hour |
| **Redis** | Hourly | 7 days | < 15 min |
| **S3 Files** | Continuous | 1 year | < 5 min |

### 12.2 DR Plan

**RTO (Recovery Time Objective)**: < 4 hours  
**RPO (Recovery Point Objective)**: < 1 hour

```
Disaster Event → Alert to ops → Restore RDS snapshot → Restore Redis from backup → Verify data integrity → Switch DNS → Monitor
```

---

## 13. API Rate Limits & Quotas

```
Per authenticated user:
- Lead creation: 10,000/day
- API calls: 100,000/day
- CRM sync: 500/day

Per IP (anonymous):
- Public endpoints: 100/hour

Rate limit headers:
X-RateLimit-Limit: 100000
X-RateLimit-Remaining: 99950
X-RateLimit-Reset: 1616001200
```

---

## 14. Vendor & Cost Estimates (Annual)

| Service | Usage | Cost/Month | Cost/Year |
|---------|-------|-----------|-----------|
| AWS (ECS, RDS, S3) | Moderate | $3,000 | $36,000 |
| OpenAI (GPT-4) | 500K API calls/mo | $2,000 | $24,000 |
| Twilio (SMS) | 100K SMS/mo | $1,000 | $12,000 |
| Vonage (Voice) | 500 calls/mo | $500 | $6,000 |
| Stripe (payments) | 2.9% + $0.30 | $500 | $6,000 |
| Auth0 | 10K active users | $1,000 | $12,000 |
| Datadog (monitoring) | APM + logs | $1,000 | $12,000 |
| SendGrid (email) | 500K emails/mo | $300 | $3,600 |
| **TOTAL** | | **$9,300** | **$111,600** |

---

## 15. Success Criteria

**Beta Launch** (Week 8):
- [ ] 5+ contractors actively using platform
- [ ] AI qualification accuracy > 85%
- [ ] 99.9% uptime
- [ ] Average response time < 30 seconds

**General Availability** (Week 24):
- [ ] 100+ paid contractors
- [ ] Average revenue increase: +25%
- [ ] NPS > 60
- [ ] Support queue < 24 hour response
- [ ] All integrations working reliably

**Scale Phase** (Month 12):
- [ ] 500+ customers
- [ ] $500K+ MRR
- [ ] Churn < 5%
- [ ] Profitable (post-COGS)

---

**Document End**