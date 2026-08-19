# Case Study 01: RAG Knowledge Assistant in Mid-Market

**Industry:** Industrial mid-market (mechanical and plant engineering)
**Company size:** about 600 employees, three production sites in southern Germany
**AI component:** Internal RAG knowledge assistant over heterogeneous engineering documentation
**Starting situation (time):** Q3/2025 – state of re-evaluation, 12 months after productive rollout in Q3/2024 (PoC Q1/2024)
**Result KPIs:** 280 → 80 → 220 queries/week (acceptance curve after maintenance discipline); €4,200/month operating cost; average response time <4 s; 96 % source coverage on standard topics (torque tables, bills of material); 17 % drift alerts per quarter

## Starting Situation

Mayer & Rieger Werkzeugtechnik GmbH produces special machines and special tools for the automotive and aerospace industries. Over decades roughly 8,000 technical documents have accumulated: engineering drawings as PDFs, bills of material in Excel, commissioning protocols, service reports, approved engineering guidelines and numerous Confluence pages of the development department. The knowledge lies scattered across three DMS systems, one SharePoint and an orphaned wiki. 60 per cent of the workforce are experienced employees in production and service; 40 per cent have been newly hired since 2020. Statements like "Herr Falk used to handle that" multiplied. In Q1/2024 the IT department started a RAG pilot based on Azure AI Search as a vector index and GPT-4o for generation; the productive rollout happened in Q3/2024, the re-evaluation described here in Q3/2025. The goal was to make knowledge accessible independently of individuals and get new employees productive faster.

## Problem / Opportunity

The opportunity was clear: reduce search times in service from an average 25 minutes per query, shorten onboarding for new service technicians and secure the "knowledge in heads" against fluctuation. The problem only showed after the productive rollout: the knowledge base aged faster than the pilot team could respond. Engineering guidelines were revised multiple times in 2024, old versions remained indexed. Several thousand new service reports per quarter were only sporadically re-indexed because the responsible employees had no clear maintenance mandate. Employees received answers with outdated torque values, wrong safety notes and references to tools that had long been discontinued. Trust fell measurably, the usage rate dropped from 280 queries per week to below 80. The management held the IT department accountable; the pilot phase was formally rated "successful with conditions".

## Solution Approach with AI

A classic [RAG stack](../glossar.md#rag-retrieval-augmented-generation) was built: Azure Blob Storage as document source, an Azure AI Search index with hybrid search (vector plus BM25) and re-ranking via Cohere Rerank v3, GPT-4o as answer model via the Azure OpenAI resource with EU data residency. The pipeline uses Unstructured-IO for preprocessing. Documents are split into chunks of 800 tokens with 100 tokens overlap; each chunk carries metadata such as document ID, validity date, owner and release status. The system prompt obliges the model to use only the provided sources, to name contradictions and to explicitly mark missing information as such.

In phase 2 a retrieval dashboard was set up in Power BI. It shows per department the top topics, the retrieval confidence, the number of empty answers and a drift indicator: if the distribution of returned chunks deviates significantly from the distribution of the last 30 days, the indicator triggers. In addition a weekly "knowledge brief" was emailed to the document owners, listing newly indexed, changed and deleted documents and pointing to missing answers.

Central was the insight from month nine: without defined maintenance discipline every knowledge base ages within a few weeks. Three measures were introduced. First: a monthly maintenance slot per document owner (90 minutes, blocked in the calendar), in which new documents are ingested, old versions invalidated and gaps in the index manually closed. Second: a two-step [drift detection](../glossar.md#drift-detection) process – an automatic comparison between expected and actual source distribution per quarter, plus a manual spot-check audit of 50 random answers per week by the IT department. Third: a decommissioning workflow that removes documents with `valid_until` in the past from the active index instead of leaving them ambiguously side by side.

## What Worked, What Did Not

The initial acceptance worked well: in the first three weeks after rollout the system recorded about 1,500 searches per day, the average response time was below four seconds. The hybrid retrieval with re-ranking delivered very precise hits for standard topics such as torque tables and bills of material; the source display was explicitly praised by service and commissioning. Also positive: costs remained in the first operating year at about €4,200 per month, well below the business case. What did not work was scaling maintenance: of 142 document owners only 38 kept the monthly maintenance slot in the first half-year, the rest reacted only after escalation. Drift detection triggered in 17 per cent of all quarterly reviews, but the corrective measures were delayed by weeks. Consequence: three safety-relevant inconsistencies were only discovered through near-incidents in the workshop. The pilot is rated internally as a success with clear improvement potential, a second expansion stage was budgeted for Q1/2026.

## Lessons Learned for Specialists and Executives

- **Maintenance discipline is a product component**, not an IT task. A RAG system without defined owners, maintenance slots and decommissioning rules becomes a burden within a few months.
- **[Drift detection](../glossar.md#drift-detection) must come early**, not after damage. Quarterly comparisons between expected and observed source distribution uncover knowledge gaps before users find them.
- **Sources and validity belong in the answer**, not only in the backend. A visible validity display ("valid until 03/2024, replaced by V2.1") makes ageing visible for users and strengthens trust.
- **Spot-check audits cannot be delegated**. 50 random answers per week by a subject-matter-savvy person are cheaper than a safety incident and provide valuable training impulses.
- **Business case does not include maintenance effort**. Realistic TCO models must contain the personnel cost for knowledge maintenance, audits and escalations from month one, otherwise the economics tip after the first half-year.

## Course & Numbers

| Metric | Before (before maintenance discipline) | After (status Q3/2025) |
|--------|----------------------------------------|------------------------|
| Queries per week (acceptance) | 280 → 80 (drop due to outdated content) | 220 (after maintenance slot + decommissioning workflow) |
| Average response time | n/a (manual search, average 25 min) | <4 s |
| Maintenance discipline (142 document owners) | 38 kept maintenance slot (27 %) | 89 kept maintenance slot (63 %, after escalation routine) |
| Drift alerts per quarter | not recorded | 17 % of quarters triggered an alert |
| Safety-relevant inconsistencies | 3 near-incidents discovered in the workshop | 0 in the last quarter before re-evaluation |
| Operating cost | n/a | €4,200/month (GPT-4o + Azure AI Search + Cohere Rerank) |
