# Exercise 05: Formulate Measurable Acceptance Criteria

[← back to exercises overview](index.md)

**Phase:** 2
**Duration:** 30 minutes
**Prerequisite:** [Requirements & User Stories for AI](../projektleitung/09-anforderungen.md)
**Format:** Partner work

## Task

A team is planning an assistant that delivers answer drafts from approved handbooks to service staff. The previous requirement reads: "The AI responds quickly, correctly and safely and provides sources where possible."

From this formulate at least six verifiable acceptance criteria. Cover subject-matter quality, sources, response time, cost, allowed answers and fallback. Describe for each criterion how it is accepted.

## Hints

- Use metric, threshold, test quantity and measurement time.
- Also define when the system must not answer.
- Percentages need a named test dataset as reference.

## Solution

A complete user story reads:

> As a service employee I want to receive a sourced answer draft to a customer question, so that I can answer faster and retain subject-matter responsibility before sending.

The following acceptance criteria fit:

| No. | Criterion | Acceptance |
|-----|-----------|------------|
| 1 | At least 90 % of 50 versioned gold-set questions are answered correctly in subject matter. | Two subject-matter experts rate blind; disagreement is decided jointly. |
| 2 | 100 % of subject-matter statements contain document title, section and link to an approved source. | Automatic completeness test plus manual review of all 50 cases. |
| 3 | In at least 95 % of cases the cited passage actually supports the statement. | Subject-matter experts compare answer and cited passage. |
| 4 | Response time with 100 parallel users is p95 at most 5 seconds. | Load test in a production-like environment before go-live. |
| 5 | Variable model and search costs are on monthly average at most €0.05 per request. | Cost dashboard over four pilot weeks, including failed attempts. |
| 6 | For 20 out-of-scope questions the system refuses 100 % and names the responsible escalation path. | Run negative test set before each approval. |
| 7 | Without sufficient source the system produces no factual draft but asks back or escalates. | Ten test cases with intentionally missing source. |
| 8 | No draft is sent without visible human approval. | End-to-end test of all roles; sending API must block unchecked calls. |

The criteria are jointly evaluable but remain separate. An average may for example not offset a security violation against a fast answer.

The go-live rule is: criteria 2, 6, 7 and 8 are knockout criteria. For criteria 1, 4 and 5 the team may only proceed with documented deviation, responsible approval and time-limited improvement plan.

For later model, prompt or data changes the same acceptance package is versioned as regression test. The test report contains at minimum:

- System version, test-set version and executing roles
- Individual results, deviation decision and approval date

## Reflection

Probabilistic systems need acceptance criteria for quality and for safe non-action. Project managers turn expectations into reliable decisions by agreeing measurement methods, thresholds and knockout criteria already before the pilot.
