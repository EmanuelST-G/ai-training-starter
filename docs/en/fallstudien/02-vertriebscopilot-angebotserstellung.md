# Case Study 02: Sales Copilot for Proposal Generation

**Industry:** IT service provider (custom software and data integration)
**Company size:** about 150 employees, four sales regions in DACH
**AI component:** AI copilot for generating proposal drafts from CRM data and bullet points
**Starting situation (time):** Q1/2026 – after eight months of productive use
**Result KPIs:** 4.5 h → 1.2 h creation time per proposal; +28 % proposals sent per week; 142 discrepancies caught deterministically in 6 months (31 with direct order impact); response rate on discrepancy markings 41 % → 89 % after anonymised ranking; €1,100/month AI cost, estimated 320 hours/month time saving

## Starting Situation

Nordlicht Beratung & Entwicklung GmbH is an IT service provider headquartered in Hamburg with offices in Vienna and Zurich. The company delivers custom software, data pipelines and AI modules for mid-market customers from logistics, insurance and mechanical engineering. Before project start the sales department spent on average 4.5 hours per proposal: checking CRM data, assembling service items from the service catalogue, filling in the calculation sheet, drafting continuous text and coordinating with legal. Standard proposals with known building blocks made up about 60 per cent of volume, the rest were individual enquiries with specific requirements, tender conditions or third-party components. The external perception varied strongly between sales regions; proposals from Hamburg usually arrived within one working day, from Vienna it regularly took three to five working days.

## Problem / Opportunity

The opportunity was clear: deliver proposals within 30 minutes instead of the next day, shorten sales cycles by one week and unify the external perception across regions. The problem: for standard cases an LLM draft worked excellently, but for special cases the system produced plausible wording that did not match the tender in subject-matter terms. Specifically: components were offered that the customer had explicitly excluded, and quantity structures from earlier projects were adopted without context. Three lost orders in Q4/2025 with a combined volume of €1.8 million were internally attributed to the AI system because the sales team had sent the draft to customers without thorough review. The management stopped the system for two weeks and commissioned a discrepancy audit by internal audit.

## Solution Approach with AI

A sales copilot was built on GPT-4o mini via the Azure OpenAI EU region. The pipeline loads per request structured CRM data (customer, contact, industry, history, open enquiries), the current service catalogue as versioned JSON, the tender document as PDF (with text extraction via Unstructured) and the sales person's bullet points. The system generates from this a proposal draft with four sections: cover letter, service description, calculation and assumptions. The system prompt obliges the model to check statements against CRM and tender data and to explicitly mark contradictions in the "Assumptions" section.

Before the productive rollout a discrepancy control system was implemented: before handover to the sales person a deterministic rule set checks the draft against the tender document. Three classes of discrepancies are marked: quantity deviations against stated hour numbers, missing mandatory items from the tender, and excluded components that are erroneously included. These discrepancies become visible in the copilot dashboard as red markings, similar to a reviewer mode in a code editor. The draft only goes to the sales person when all Class-1 discrepancies (exclusion criteria) are clarified. The human-in-the-loop is explicit: no proposal leaves the house without approval by a sales employee. The system may only create the draft, never send it directly. Architecturally the previous manual four-eyes approval process with legal department spot-check was thus replaced by the automated plausibility check; in place of manual review loops came the deterministic rule set that checks every request against the tender document before it reaches the sales employee. Personal approval remains mandatory, but it happens on an automatically pre-checked draft basis.

The dashboard additionally shows per sales person the average processing time, the number of detected discrepancies per proposal, the rate of proposals that go to customers without rework, and an anonymised ranking of review discipline in the team.

## What Worked, What Did Not

Standard proposals worked well: the average creation time dropped from 4.5 to 1.2 hours, the number of proposals sent per week rose by 28 per cent. Sales employees reported that the copilot usefully pre-structured the continuous text work and unified cover letter quality across regions. Also positive: the deterministic rule set caught 142 discrepancies in the first six months, 31 of them with direct impact on the order. The damage rate per proposal fell by an estimated 40 per cent. What did not work was the discipline for niche proposals: experienced sales people trusted their own plausibility check and regularly overlooked the automatic discrepancy markings because they checked the result intuitively "by feel". The previous manual four-eyes approval process that would have caught this weakness had been replaced by the deterministic rule set and could no longer compensate for the experienced colleagues – the automated marking must be actively acknowledged by the sales employee, but a blind click on "approve" remains architecturally possible. Three cases in Q4/2025 with inconsistent hour numbers and wrong components were only discovered after customer complaints. The sales team's response rate to discrepancy markings was initially 41 per cent; only a monthly evaluation with anonymised ranking per sales person and the obligation to comment on each Class-1 discrepancy before approval brought it to 89 per cent. The AI costs of about €1,100 per month face an estimated time saving of 320 hours per month.

## Lessons Learned for Specialists and Executives

- **[Human-in-the-loop](../glossar.md#human-in-the-loop) is not optional, but mandatory**. A copilot that may write directly to customers needs a hard approval architecture – not only a recommendation in a training.
- **Discrepancy control belongs before handover**, not in a review afterwards. Deterministic rules for exclusion criteria prevent more damage than any training.
- **Standard use cases must not obscure special cases**. Success metrics must distinguish between standard and niche proposals, otherwise the risk becomes invisible and management only sees the nice statistics.
- **Experienced employees skip review steps most often**. UX and process design must accommodate review obligations also for "old hands", not only training for new colleagues.
- **AI in sales is trust work**. A small public error rate (for example a prominent "copilot misstep") damages credibility more strongly than any efficiency gain builds it up – accordingly incidents must be communicated immediately and transparently.

## Course & Numbers

| Metric | Before (manual, without copilot) | After (status Q1/2026) |
|--------|----------------------------------|------------------------|
| Creation time per proposal | 4.5 h (CRM + catalogue + calculation + text + legal) | 1.2 h (with copilot + discrepancy control) |
| Proposals sent per week | Baseline | +28 % |
| Detected discrepancies (6 months) | 0 (manual spot check, ~10 % sampling rate) | 142 caught deterministically, 31 with direct order impact |
| Response rate on discrepancy markings | n/a | 41 % initial → 89 % after ranking + comment obligation |
| AI cost | n/a | €1,100/month (GPT-4o mini + Azure OpenAI EU) |
| Estimated time saving per month | n/a | 320 hours |
