# Responsible AI

[← back to topic list](../themenliste.md)

## Learning Objective

Take responsibility for your own AI systems so that responsibilities are clear, risks become visible early and decisions remain reviewable.

## What Does Responsible AI Mean?

[Responsible AI](../glossar.md#responsible-ai) describes the development and use of AI systems taking ethical, social and legal aspects into account. It is not a product feature but an attitude: technical possibilities are weighed against the impact on people, organisation and society.

Four guidelines shape the term:

- **Accountability:** a person or role stands behind every decision.
- **Fairness:** no one is systematically disadvantaged.
- **Transparency:** those affected and reviewers understand how a decision comes about.
- **Traceability:** data, model and process can be reconstructed later.

## Accountability and Ownership

An AI system without clear accountability becomes a "nobody's baby" when problems arise. Ownership means: one person knows purpose, data, model, tests, limits, budget and stakeholders — and decides in case of doubt.

- One AI Product Owner per system with a substitution rule.
- Business and technical responsibility are named separately.
- Changes to the system need a documented approval.
- The responsible person knows the obligations from the GDPR and the EU AI Act.

## AI System Inventory

An inventory is the foundation of any responsible AI work. It answers: which AI systems do we have in use at all?

Minimum data per entry:

- Name and purpose in one sentence
- Responsible parties (business, technical, data protection)
- Data sources and legal basis
- Model, provider, version, hosting region
- Risk class and affected groups
- Current phase (pilot, production, retired)
- Linked processes, KPIs and last review

[System inventory](../glossar.md#systeminventar) lives on discipline: new systems are entered before going live, retirements as well.

## Risk Classification

Not every AI system carries the same risk. A meaningful classification distinguishes by impact on those affected and reversibility:

| Class | Examples | Obligations |
|-------|----------|-------------|
| Low | Summarise texts, internal research | Standard approval, monitoring, logging |
| Medium | Decision suggestions with consequences for individuals | Bias tests, explainability, human-in-the-loop |
| High | Creditworthiness, personnel deployment, health, critical infrastructure | Own approval, continuous monitoring, audit |

The classification decides on test depth, approvals, documentation and monitoring. It is reassessed at every major change.

## Fairness and Discrimination

[Fairness](../glossar.md#fairness) means that a system does not systematically disadvantage anyone. Discrimination arises through:

- Biased training data (historical discrimination, underrepresentation)
- Unfair objective functions (one metric that hides other harms)
- Aggregated evaluations that hide minorities

Counter-measures:

- Data audit before project start: representation, labels, origin
- Stratified evaluation: break down results by gender, age, region, language or other relevant features
- Weigh several fairness definitions against each other — there is no universal yardstick
- Complaints channel and escalation for those affected

## Transparency and Explainability

Transparency is aimed at users, those affected and reviewers. Explainability is aimed at those who want to understand or contest a decision.

- **For users:** clear that an AI is involved, which data it uses and what rights exist.
- **For those affected:** an answer to "why was I assigned X?" — also in non-technical language.
- **For reviewers:** documentation of inputs, rules, thresholds and sample answers.

[Explainability](../glossar.md#erklarbarkeit) is only approximate with complex models. What matters is that the explanation deserves trust: no invented causalities, no sugar-coating of statistics.

## Traceability

Traceability means: from a concrete decision the path there can be reconstructed. At minimum the following data is recorded:

- Inputs (with timestamp and user)
- Model and version ID
- Knowledge sources (with RAG), cited chunks
- Tool calls with parameters and results
- Permission checks
- Approvals made by humans

Retention periods and access to this data are to be regulated in advance, not only when an incident occurs.

## Auditability

[Auditability](../glossar.md#auditierbarkeit) goes beyond traceability: an audit checks whether the system complies with the agreed rules. This includes internal controls, external audits and supervisory authorities.

A system is auditable when

- documentation is current, versioned and accessible,
- logs are complete and protected,
- responsibilities are clearly named,
- tests are reproducible,
- deviations and corrections are documented traceably.

## Bias Detection and Mitigation

Bias does not always show at first glance. Detection needs data, methods and critical distance.

- **Data review:** spot checks on representation, labels and outliers. Comparison with the expected distribution of those affected.
- **Model review:** stratified metrics (accuracy, error rates, false positives/negatives) by sensitive groups.
- **Behaviour review:** spot checks from real queries, targeted adversarial tests, red teaming.

Mitigation does not mean "remove bias" but limit impact:

- More representative data or synthetic supplements
- Weighting, thresholds or constraints in the model
- Downstream corrections or human review
- Conscious decision not to realise a use case

## From Principle to Routine

Responsible AI becomes serious when it becomes operational:

- Own checklists for design, implementation, go-live and operation
- Reviewers with subject and domain expertise
- Regular appointments where risks are openly discussed
- Willingness to learn: mistakes are understood as data, not as blame

!!! tip "Practical tip"
    Attach a one-page "Responsible AI note" to every AI project: purpose, responsible parties, risk class, sensitive groups, known limits, last review, next review. It forces clarity and provides the quick entry point in an audit.

## Glossary Cross-References

- [Responsible AI](../glossar.md#responsible-ai)
- [Accountability](../glossar.md#verantwortlichkeit)
- [Human-in-the-Loop](../glossar.md#human-in-the-loop)
- [Bias](../glossar.md#bias)
- [Compliance](../glossar.md#compliance)
- [Fairness](../glossar.md#fairness)
- [Explainability](../glossar.md#erklarbarkeit)
- [Auditability](../glossar.md#auditierbarkeit)
