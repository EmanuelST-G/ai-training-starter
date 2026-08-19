# AI Governance

[← back to topic list](../themenliste.md)

## Learning Objective

Build an AI governance that regulates approvals, documentation, versioning, vendor management and shutdown so that AI systems go live in a controlled way, continue to run in a controlled way and can be retired in a controlled way.

## What AI Governance Delivers

[Governance](../glossar.md#governance) answers the organisational questions around AI systems: who decides what? Which evidence is needed? How are changes approved? Who carries which responsibility? It is the link between responsibility on paper and responsibility in everyday work.

Effective governance is lean, clear and actually lived. It creates no bureaucracy for its own sake, but prevents systems from going productive without the responsible parties knowing.

## AI System Inventory as Register

The [system inventory](../glossar.md#systeminventar) is the central component of any governance. It contains all AI systems — including experimental and retired ones.

Per entry the following is documented:

- Unique ID, name and responsible party
- Purpose, affected groups and business process
- Data sources, legal basis, hosting region
- Model, provider, version, knowledge sources
- Phase (idea, lab, pilot, production, retired)
- Risk class, last and next review
- Linked documents (approval, DPIA, tests, emergency plan)

The register is not an Excel day job. It belongs in a central, searchable data source with clear stewardship duties.

## Approval Processes in Stages

AI systems typically go through three stages before they are widely used:

1. **Lab:** isolated experiments with synthetic or anonymised data, limited users, short effect cycles.
2. **Pilot:** use in a clearly bounded process with real users, measured acceptance criteria and defined stop conditions.
3. **Production:** broad use with monitoring, approvals, documentation and emergency plan.

Each stage needs a documented approval with concrete criteria:

- Quality on gold set met
- Data protection and security review completed
- Responsible parties named, operational window defined
- Rollback and shutdown prepared
- Training and communication carried out

Approvals are not given in a tool nobody knows. They follow a visible process with deadlines and escalation.

## Documentation Obligations

An AI application is described in a dossier that is auditable at any time:

- **Purpose:** what does the system do, what not? For which users, in which process?
- **Data:** which sources, which fields, which permissions, which retention?
- **Model:** provider, model ID, version, knowledge sources, embedding, routing, tools.
- **Tests:** gold set, evaluation criteria, stratification, bias and security tests.
- **Known limits:** documented weaknesses, exclusions, escalation paths.
- **Responsible parties:** AI Product Owner, data protection, IT security, business unit, substitution.

The documentation is updated with every significant change. It is part of the audit answer set.

## Model and Prompt Versioning

A reproducible AI application versions more than source code. The [model registry](../glossar.md#modell-registry) keeps for each released version:

- Model ID, provider, parameters
- System and user prompts, templates
- Tool schemas, permissions, business rules
- Knowledge sources, index version, embedding model
- Test dataset, evaluation rubric
- Configuration of routing, filters, fallbacks

Each version gets a unique ID and a change reason. A rollback restores exactly this package — not just the latest container state.

## Vendor Management

[Vendor management](../glossar.md#vendor-management) for AI providers differs from classic procurement. Checked are:

- DPA, SCC, TIA, hosting region and sub-processors
- Security certificates and audit reports (e.g. ISO 27001, SOC 2)
- Availability, incident notifications, cooperation duties
- Exit strategy: data export, deletion, transition to alternatives
- Economic stability and provider roadmap

Contractual arrangements alone are not enough. Actual practice must be checked regularly: are defaults adhered to? are updates communicated transparently? do support channels respond reliably?

## Regular Reassessment

AI systems change — through new data, new models, new users. Governance requires a planned reassessment at fixed intervals and on an ad-hoc basis:

- **Regular:** e.g. half-yearly review sessions per system
- **Ad-hoc:** provider model change, new data sources, regulatory changes, incidents, complaints

Content of the reassessment: currency of purpose and data, quality on new test set, drift, cost development, security and data protection situation, responsibilities still appropriate?

## Shutdown and Fallback

Every AI system needs a plan for the end — whether planned or emergency.

- **Regular shutdown:** announcement, migration of users, data export and deletion, decommissioning of tools.
- **Emergency shutdown (kill switch):** a documented lever that stops the system immediately — from the kill switch in the gateway to deactivating the API key.
- **Fallback:** manual process or simpler procedure that takes over the core task until the AI system is available again.

The shutdown is practised in advance, not only during an incident. Whoever has never pressed the kill switch will not press it in an emergency.

## Roles in AI Governance

Effective governance distributes responsibility across multiple roles:

- **AI Product Owner:** responsible for a concrete system business-wise and operationally, maintains the dossier and steers approvals.
- **AI Steering Committee:** decides on portfolio priorities, standards, escalations and cross-cutting risks.
- **Data Protection Officer (DPO):** monitors GDPR compliance in the organisation and evaluates DPIAs, records of processing activities and AI Act conformity (Art. 37–39 GDPR). The appointment is legally required as soon as at least 20 persons are permanently engaged with automated processing of personal data **or** special categories of data, extensive processing or systematic monitoring are involved (Art. 37 GDPR, § 38 BDSG).
- **Chief Data Officer (CDO):** responsible for the company-wide data strategy, data quality, data architecture and data governance — a business role, not to be confused with data protection.
- **CISO / IT Security:** responsible for information security including AI-specific risks such as prompt injection, RAG poisoning and supply chain (see [Security](17-security.md)).
- **Business unit:** defines acceptance criteria, trains users, reports anomalies.
- **Legal department and works council:** are involved in cross-cutting initiatives.

The roles are complementary, not competing. Clear handovers and joint appointments prevent gaps.

## Standards and Guidelines

Governance lives on traceable standards:

- **Company AI policy:** allowed providers, data classes, behavioural rules
- **Approval and escalation guide:** criteria, participants, deadlines, forms
- **Test standards:** minimum size and stratification of test sets, mandatory tests
- **Security and data protection standards:** with concrete AI requirements
- **Training plan:** AI literacy per EU AI Act Art. 4 for affected roles

Standards are regularly checked for currency. What made sense two years ago may be obsolete through model or regulatory development.

## Governance in Collaboration

Governance does not work as control but as a shared language. Three habits help:

- **Involve early:** data protection, security and business unit are heard in the idea phase, not only at rollout.
- **Name risks:** an open risk list with evaluation and measures is more valuable than a compliance deck.
- **Celebrate successes:** responsible AI measures also deserve visibility, not only the systems themselves.

!!! tip "Practical tip"
    Start with a lean governance setup: inventory, approval process, dossier template, kill switch plan. It does not have to be perfect on day one — it must be there at all and be lived.

## Glossary Cross-References

- [Governance](../glossar.md#governance)
- [Accountability](../glossar.md#verantwortlichkeit)
- [Compliance](../glossar.md#compliance)
- [Make-or-Buy](../glossar.md#make-or-buy)
- [Pilot](../glossar.md#pilot)
- [Red Teaming](../glossar.md#red-teaming)
- [Model Registry](../glossar.md#modell-registry)
- [System Inventory](../glossar.md#systeminventar)
- [Vendor Management](../glossar.md#vendor-management)
