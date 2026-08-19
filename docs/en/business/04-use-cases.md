# AI Use Cases in Business

[← back to topic list](../themenliste.md)

## Learning Objective

Be able to formulate a concrete, evaluable AI use case from a problem.

## Analyse Processes and Identify AI Potential

Heuristic for the first ideas:

- **High frequency** (> 100 repetitions per month)
- **High manual effort** at low complexity
- **Structured data** or clear inputs
- **Tolerant error rate** (< 5 % errors are acceptable)
- **Written/text-based** rather than the physical world

What AI is bad at: causal reasoning over counterfactual scenarios, perceiving the physical world, long-term strategic decisions.

## Typical Use Cases

- Document analysis (contracts, invoices, audits)
- Knowledge search in internal repositories
- Customer service / first-level support
- Email processing / triage
- Proposal generation from CRM data
- Meeting summaries
- Reporting (KPIs from data sources)
- Forecasting (demand, sales)
- Quality inspection (text, images)
- Contract analysis (clauses, risks)
- Marketing & content
- Software development (code suggestions, tests, refactoring)

## [Assistance vs. Full Automation](../glossar.md#assistenz-vs-automatisierung)

| Degree | Example | Risk |
|--------|---------|------|
| Full automation | Spam filter, auto-completion | Low, because errors are reversible |
| Assistance | Copilot for customer service replies | Medium — human reviews |
| Fully autonomous | AI agent answers customers without review | High — legal and quality-wise |

## [Human-in-the-Loop](../glossar.md#human-in-the-loop)

Where mistakes have consequences, a human **must** review or approve the output. This has two effects:

- Quality becomes measurably better
- [Time-to-value](../glossar.md#time-to-value) drops (the human still reads it)

## AI as Copilot, Reviewer, or Autonomous Agent

- **[Copilot](../glossar.md#copilot):** suggestion, human decides
- **Reviewer:** human does it, AI checks
- **[Autonomous agent](../glossar.md#agents):** AI decides and acts

## Recognising Unsuitable Use Cases

- When classical rule-based software is cheaper and more reliable
- When the error rate must be below 0.1 %
- When training data is missing or [bias](../glossar.md#bias)-dominated
- When ethical, regulatory, or reputational consequences loom

## [Build vs. Buy](../glossar.md#make-or-buy)

| Factor | Build | Buy |
|--------|-------|-----|
| Specific advantage required | yes | no |
| Data is unique | yes | doesn't matter |
| Time-critical | no | yes |
| Volume justifies custom solution | high | low |

## Standard Product vs. Custom Solution

Microsoft 365 Copilot, Salesforce Einstein, ServiceNow AI — if 70 % of the requirements suffice, the standard is almost always cheaper. Custom solutions only when differentiation hangs on the use case.

!!! tip "Decision question"
    What characteristic sets you apart from competitors — and is that characteristic AI-relevant?
