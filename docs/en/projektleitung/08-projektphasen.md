# AI Project Management

[← back to topic list](../themenliste.md)

## Learning Objective

Plan and communicate the course of an AI project realistically.

## Differences from Classical IT Projects

- **High uncertainty** at project start (model may or may not work)
- **Feasibility must be tested empirically**, not only theoretically
- **Data situation** is often the show-stopper
- **Iteration** is the standard, not waterfall
- **Acceptance by the business** is harder because outputs are probabilistic

## Project Phases

1. **Problem definition** — which concrete problem, which goal
2. **Use-case selection** — selection from the portfolio
3. **Data review** — what do we have, what is missing
4. **[Proof of Concept (PoC)](../glossar.md#poc)** — does it work in principle?
5. **[Pilot](../glossar.md#pilot)** — how does it behave in real operation with real users?
6. **[Evaluation](../glossar.md#evaluation)** — does it meet the quality goals?
7. **Integration** — connection to existing systems
8. **Productive operation** — go-live with monitoring
9. **Monitoring and improvement** — [drift](../glossar.md#drift), updates, new use cases

## Requirements as Verifiable Criteria

An AI requirement is only useful when it is **measurable**.

❌ "The model should detect contract risks."
✅ "The model detects 90 % of the contract risks defined in the [gold set](../glossar.md#gold-set) ([recall](../glossar.md#recall) 0.9) at a false-positive rate ≤ 0.1."

## Expectation Management

Clarify before project start:

- What is "success" concretely?
- What minimum quality is acceptable?
- What happens when the minimum quality is missed?
- What resources for evaluation are available?

## Stakeholder Management

- **Business** — requirements, acceptance
- **IT** — integration, infrastructure
- **Data protection** — GDPR, AI Act
- **Legal** — contracts, IP
- **Works council** — employee data protection
- **Management** — budget, escalation

## Dependencies on Privacy, Security, IT

These stakeholders are **not a retroactive impediment**, but must be involved early. A use case without data protection sign-off is not a finished use case.

## Decision Points and Stop Criteria

Each phase needs **hard criteria** for when to continue and when not to.

Example: PoC → Pilot
- Recall ≥ 0.7 on the gold set
- Response time < 5 s
- No critical [hallucinations](../glossar.md#hallucination) in 50 test cases

## Dealing with Experiments and Failures

AI projects are research projects. An empirical value from DACH AI projects around 2024–2026: roughly 30–40 % of pilot projects do not reach production. This is strongly industry-dependent; exact figures vary. A failure is **not a disgrace**, but a project risk to be handled openly.

## AI Product Owner and AI Project Lead

- **AI Product Owner:** prioritises use cases, defines acceptance
- **AI Project Lead:** steers phases, risks, stakeholders, budget
- **Data Engineer / ML Engineer:** builds and operates
- **Subject-matter expert:** provides [ground truth](../glossar.md#ground-truth), assesses quality

!!! warning "The most important sentence"
    A successful PoC is not yet a production-ready system. Whoever shouts "it works" too early endangers the later quality.
