# Requirements & User Stories for AI

[← back to topic list](../themenliste.md)

## Learning Objective

Formulate measurable quality targets instead of "the AI must always be right".

## Business Requirement vs. Technical Solution

A requirement describes **what** should be achieved. Not **how**.

❌ "We will use GPT-4 with [RAG](../glossar.md#rag-retrieval-augmented-generation) and a Pinecone [vector DB](../glossar.md#vektor-datenbank)."
✅ "Our sales staff can have contract questions answered in 30 s with source attribution."

## Functional Requirements

- Answers certain question types
- Provides source attributions
- Allows follow-up questions
- Takes follow-on actions (e.g. draft email)

## Non-Functional Requirements

| Category | Example |
|----------|---------|
| Accuracy | [Recall](../glossar.md#recall) ≥ 0.9 on [gold set](../glossar.md#gold-set) |
| Response time | p95 ≤ 5 s |
| Cost | ≤ €0.05 per request |
| Availability | [SLO](../glossar.md#slo-service-level-objective) of 99.5 % monthly; if contractually agreed, as [SLA](../glossar.md#sla-service-level-agreement) |
| Privacy | GDPR-compliant, no PII to external providers |
| Traceability | every answer with source attribution |
| Scalability | 50,000 requests / day without performance drop |

## Example of an AI User Story

> As a **sales representative**, I want to **be able to ask a contract question in natural language**, so that **I can answer customer questions immediately without searching three systems**.
>
> **[Acceptance criteria](../glossar.md#akzeptanzkriterien):**
> - Answer contains source attribution with document name and section
> - Response time ≤ 5 s (p95)
> - At least 80 % of answers are accepted by the user without follow-up
> - When uncertain: ask back instead of answering

## Acceptance Criteria for Probabilistic Systems

Probabilistic systems can never be "always right". Instead:

- **Minimum recall** on a gold set
- **Maximum false-positive rate**
- **Share of uncertain answers** (where the model should ask back)
- **User feedback rate** (correctness from the user's perspective)

## Definition of Allowed and Disallowed Answers

What may the AI answer? What not? Examples:

- ❌ Legally binding information
- ❌ Medical diagnoses
- ❌ Speculation about individuals
- ✅ Knowledge questions within the defined topic area
- ✅ Operational instructions from handbooks

## Escalation and Fallback Behaviour

- When uncertain: human expert takes over
- For out-of-scope questions: "I cannot answer that" + named contact point
- For technical errors: defined fallback process

## Requirements for Source Attributions

Which information should be attached?

- Document name
- Section / page number
- Direct quote for paraphrased answers
- Link to original source (when internally available)

## [Human-in-the-Loop](../glossar.md#human-in-the-loop) Requirements

Define:

- Which actions need approval?
- Which can run autonomously?
- Who approves? (Single-person approval or four-eyes principle)

## Golden Datasets and Test Cases

At least **20–50 test cases** per use case that:

- Cover the normal case
- Contain edge cases
- Reproduce known errors
- Use domain-specific terms

!!! tip "Acceptance-criteria formula"
    Every AI requirement should contain the word "measure" or "demonstrate" — otherwise it is not a requirement but a hope.
