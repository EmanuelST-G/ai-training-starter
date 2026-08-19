# Case Study 03: Agent-Based Email Triage in Customer Service

**Industry:** Mail-order (multichannel, fashion and home accessories)
**Company size:** about 1,200 employees, three logistics centres, 14 service mailboxes
**AI component:** Agent for email classification and routing into 14 service categories
**Starting situation (time):** Q4/2025 – after eleven months of productive use
**Result KPIs:** 4.2 h → 9 s average triage time per mail; 78 % single-classification with confidence >0.85; 31 % faster customer response time; 96 % injection detection rate on 2,000-mail test set (2.1 % false positive); 14 % multi-topic mails in the input; €1,800/month agent operating cost

## Starting Situation

Alpenrose Versand GmbH runs a classic mail-order business with catalogue, web shop and stationary outlets in southern Germany and Austria. On each working day between 4,500 and 7,000 customer emails arrive. Until 2024 eight service employees in the incoming triage manually sorted the mails into 14 categories (order, shipping, return, complaint, data protection, newsletter, advertising customers, major customers, careers, press, IT disruption, security, compliance, other) and forwarded them to the responsible mailboxes. The triage was error-prone: at load peaks on Monday mails remained unprocessed for over 14 hours, wrong assignments led to multiple forwards and customer complaints, and the turnover in the triage role was unusually high at 38 per cent p.a. At the beginning of 2025 an internal project started to automate the triage with an LLM agent that should take over the manual pre-sorting step by step.

## Problem / Opportunity

The opportunity was clear: a consistent triage within seconds, a measurably shorter response time and a noticeable relief of the triage role whose turnover was traditionally high. The problem appeared in three variants. First, classification worked excellently for structured enquiries. Second, the system failed on multi-topic mails (order with attached complaint and data protection question) – it usually chose the first recognised topic, which led to wrong routing and double processing. Third, and that became the most important learning effect: in September 2025 a customer mail reached the triage agent with the subject "Shipment damaged" and a PDF attachment containing a hidden [prompt injection](../glossar.md#prompt-injection) attempt. The mail text contained near the end a seemingly harmless phrase with instructions for the model. The agent interpreted the phrase as a system instruction and forwarded the mail to the security category, while at the same time setting an internal note to a security mail distribution that is normally reserved for the SOC.

## Solution Approach with AI

An [agent](../glossar.md#agents) was built with two tools: a classification tool that checks the email against 14 category labels and returns a confidence value, and a routing tool that forwards the mail to the responsible mailbox. Both tools work with least-privilege rights: the routing tool may only write into the approved mailboxes, the classification tool may only read. The model is GPT-4o mini via the Azure OpenAI EU region. The inputs and outputs are additionally checked with Microsoft Defender for Cloud Apps for known injection patterns.

Input validation: every incoming mail is routed through a classic pipeline before model processing – MIME parsing, extraction of text and attachments, length limitation, removal of typical injection patterns ("Ignore all previous instructions", "You are now...", multi-step role plays, empty phrases in attachments). When a pattern is detected the mail is not deleted but flagged and forwarded to the triage employees. The detection rate of this pipeline was 96 per cent on a test set of 2,000 known injection mails after three months of fine-tuning; false positives were 2.1 per cent and made visible in a separate monitoring dashboard.

Escalation paths are explicitly programmed: for a model confidence below 0.7 the mail goes to manual triage. For detected possible injection (pattern heuristic or model self-report) the mail goes to a security mailbox that is read by only three named employees. For multi-topic detection (more than one category above the threshold) the mail is duplicated to all detected mailboxes with a "Multi-topic mail" marker in the header. A retrospective analysis after the incident showed that 14 per cent of all incoming mails are multi-topic mails. The described incident was evaluated in a post-mortem analysis and led to three concrete changes in the escalation and pipeline design (incident vs. afterwards):

**Incident (status September 2025):** the heuristic for injection detection ran *parallel* to the model call, not before. In the concrete case the classification tool called the model first, the model interpreted the phrase as a system instruction, forwarded the mail to the security category and at the same time set a security note to the SOC distribution. Only afterwards did the heuristic signal a match; the mail landed in the normal triage flow of the security category, the security mailbox was not yet the primary catch path at this time.

**Afterwards (status Q4/2025):** the heuristic now runs *strictly before* every model call. If the pipeline detects an injection pattern, the mail no longer enters the normal triage flow but goes directly to a dedicated security mailbox that is read by only three named employees; the security mailbox additionally receives a low-priority copy of all conspicuous incoming mails for retrospective pattern recognition. A simulated injection test was included in the weekly regression test so that a renewed swapping of the pipeline order is noticed immediately.

## What Worked, What Did Not

The standard triage worked well: on about 78 per cent of incoming mails the model delivered a correct single classification with confidence above 0.85. The average triage time dropped from 4.2 hours to 9 seconds, the response time to customer mails improved by 31 per cent, and manual triage reduced to the problematic 22 per cent where human expertise was still needed. The agent operating cost was about €1,800 per month. Also positive: in the described incident the system generated a security mail by mistake, but the input validation set a marker in parallel to the security employees, so the incident was discovered and analysed within two hours. There was no data leak, the mail landed in the correct security mailbox. What did not work was the multi-topic handling in the first weeks – the rate of multiple forwards rose from 6 to 18 per cent, which overloaded individual mailboxes. Also unsatisfactory: the injection detection reacted too slowly in the mentioned case (heuristic ran parallel to the model call instead of before), so the model had already routed the mail to the security category before the heuristic confirmed the pattern; the learning lesson "pipeline order" was immediately closed afterwards. The incident was reported to the supervisory authority and processed in an extraordinary training session of the triage team.

## Lessons Learned for Specialists and Executives

- **Input validation belongs before the model**, not parallel to it. A heuristic input check is the cheapest and most effective line of defence against [prompt injection](../glossar.md#prompt-injection).
- **Escalation paths are mandatory, not optional**. Every agent needs defined triggers (confidence, pattern detection, ambiguity) and a clear escalation target with named recipients.
- **Agents with external effect need least-privilege tools**. A routing tool that may only write into defined mailboxes is safer than a free "any API" tool with far-reaching rights.
- **Multi-topic inputs are more common than expected**. A serious triage architecture must think about duplication and multi-routing from the start and make them visible in a dashboard.
- **Security incidents are discovered through observability**, not by luck. Logs, audit trails and alarm chains must be in place before the productive rollout, not afterwards, otherwise the clean-up takes days instead of hours.

## Course & Numbers

| Metric | Before (manual, 8 triage employees) | After (status Q4/2025) |
|--------|-------------------------------------|------------------------|
| Average triage time per mail | 4.2 h (up to 14 h unprocessed at peaks) | 9 s (automatic) |
| Share correct single classification | ~85 % in quiet phases, clearly less at peak load | 78 % with confidence >0.85 (model-based) |
| Response time to customer mails | Baseline | −31 % (shorter) |
| Multiple-forward rate | ~6 % (manual) | 18 % peak in first weeks → 7 % after duplication fix |
| Injection detection (pipeline order) | not present / parallel to model | 96 % before model, 2.1 % false positive |
| Multi-topic mails in the input | not systematically recorded | 14 % (from retrospective analysis) |
| Agent operating cost | n/a | €1,800/month (GPT-4o mini + Defender for Cloud Apps) |
