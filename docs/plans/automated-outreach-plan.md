
# Automated Outreach Plan

## Overview
This document defines the end-to-end automated outreach system for Vectario. The goal is to continuously discover newly formed businesses (starting with California LLCs), enrich them with high-quality public and commercial signals, score prospects based on likelihood of fit and response, and present **only fully validated, high-confidence candidates** for human review before any outreach email is sent.

Quality, correctness, and learning over time are non-negotiable principles.

---

## 1. Prospect Profile (Canonical Model)

Each prospect is stored as a durable record in the database and enriched over time. No enrichment step blindly overwrites prior data.

### Identity
- Legal company name
- Entity number (SOS)
- State
- Entity type (LLC, Corp, etc.)
- Formation date
- Entity status (Active / Suspended / Dissolved)
- Registered agent name
- Registered agent address
- Principal city / region

### Enrichment Fields (Required for Outreach)
- Primary email address (verified if possible)
- Website URL
- LinkedIn URL (company and/or founder)
- Social media URLs (optional)
- Founder / primary contact:
  - First name
  - Last name
  - Role/title (explicit or inferred)
  - Confidence score

Each enrichment field must track:
- Source (SOS, Hunter, Apollo, SignalHire, RocketReach, Web, LinkedIn, Manual)
- Confidence / verification status
- Timestamp of last verification

---

## 2. Ingestion Pipeline (Discovery)

### Primary Source
- Secretary of State data (initially California)
  - Bulk data or API
  - Rolling date windows (e.g., last 14 days)

### Constraints Discovered
- Name prefix searches require 3+ characters
- Result caps require deterministic prefix + date window strategies

New entities are ingested daily and assigned a base score.

---

## 3. Enrichment Pipeline (Automated + AI-Assisted)

After ingestion, enrichment is run in stages to control cost and quality.

### Stage 1 — Low-Cost / Public Signals
- Website discovery (search engine queries)
- LinkedIn search (company + agent/founder name)
- Industry inference from name + context

### Stage 2 — Contact Discovery Tools

The following tools are integrated directly into the pipeline:

#### Hunter.io
- Primary email discovery
- Domain email pattern discovery
- Email verification

#### Apollo.io
- Business and person enrichment
- Corporate emails
- Titles, roles, LinkedIn profiles

#### SignalHire / RocketReach
- Fallback email and phone discovery
- Additional social profiles

**Tool order (cost-efficient):**
1. Hunter.io
2. Apollo.io
3. SignalHire / RocketReach

Each tool call is logged with credit usage and result confidence.

### AI-Assisted Tasks
- Identify likely founder vs agent
- Infer industry category
- Rank confidence of discovered contacts
- Suggest personalization hints for outreach

---

## 4. Weighted Scoring System

Each prospect receives a composite score that evolves over time.

### Example Weight Dimensions
- Fresh SOS formation: +20
- Individual (non-corporate) agent: +10
- Industry keyword relevance (health, fintech, software, etc.): +10
- Website found: +15
- Company LinkedIn found: +15
- Founder LinkedIn found: +20
- Verified email discovered: +30
- Additional social presence: +5

Scores are explainable and visible in the UI.

---

## 5. Review UI (Human-in-the-Loop)

The UI presents prospects sorted by score (highest first).

For each prospect, the UI shows:
- Company snapshot
- All enrichment fields with confidence and source
- Why the prospect scored highly
- Outreach status (never contacted / contacted / replied / closed)
- Generated first-touch email draft

The reviewer can:
- Approve or reject outreach
- Trigger additional enrichment
- Edit personalization
- Add internal notes

---

## 6. Send-Time Validation (Hard Gate)

Emails **cannot be sent** unless all checks pass.

Required validation:
- First name present and non-empty
- Company name present and non-empty
- Valid recipient email address
- At least one credible public reference (website or LinkedIn)
- No unresolved placeholders (`< >`)
- Manual approval in UI

If any rule fails, the prospect is queued for enrichment or manual research.

---

## 7. Outreach Tracking & Audit Trail

For every outreach attempt, store:
- Prospect ID
- Date/time sent
- Exact email content (immutable)
- Subject line
- Template version
- Sender identity
- Discovery tool(s) used for email
- Delivery status (if available)

The database is the system of record, even if emails also exist in external mail systems.

---

## 8. Feedback Loop & Learning System

### Signals Captured
- Reply received
- Positive vs negative response
- No response after N days
- Bounce / invalid email

### Learning Actions
- Adjust scoring weights automatically
- Identify high-performing prospect patterns
- Deprioritize low-performing patterns
- Evaluate which enrichment tools produce better responses

The system should answer over time:
> “What types of newly formed companies actually respond?”

---

## 9. Cost & Credit Management

- Enrichment tools are only triggered once a prospect crosses a score threshold
- Credit usage per tool is tracked
- Duplicate lookups are avoided

Free tiers are used for light enrichment; paid tiers are reserved for high-confidence prospects.

---

## 10. Automation Cadence

### Daily
- Ingest new filings
- Run Stage 1 enrichment
- Score and store

### Weekly
- Run Stage 2 enrichment for high-potential prospects
- Refresh scores
- Surface top candidates in UI

### Monthly
- Recalibrate weights using outreach outcomes
- Review credit efficiency
- Refine enrichment strategies

---

## 11. Design Principles

- Quality over volume
- Human approval before sending
- Perfect emails only
- Explainable scoring
- Full auditability
- Continuous learning

---

## 12. Current Status

- Manual discovery validated
- Prefix + date window constraints identified
- Initial prospect patterns established
- Automation plan defined

Next steps:
- Define database schema
- Define enrichment service interfaces
- Design UI review screens
- Implement scoring v1

---