# Exercise 14: Develop Operational Guidelines for Responsible AI

[← back to exercises overview](index.md)

**Phase:** 3
**Duration:** 45 minutes
**Prerequisite:** [Responsible AI](../verantwortung/18-responsible-ai.md)
**Format:** Group work

## Task

A company already uses AI for text drafts, knowledge search and customer service but only has the sentence "We use AI responsibly". Develop eight binding guidelines. Each guideline needs scope, responsible role, minimum control and verifiable evidence.

Research two current primary frameworks, e.g. a legal source and a recognised risk management standard. Document version, retrieval date, adopted principle and one gap versus the company context. Also establish approval, review and exception process.

## Hints

- Use "must" instead of non-committal value words.
- Connect ethical principles to artefacts and decisions.
- Small assistance systems need less control than systems with personal impact.

## Solution

A usable set of guidelines reads:

| No. | Binding guideline | Scope | Owner | Minimum control and evidence |
|-----|--------------------|-------|-------|-------------------------------|
| 1 | Every AI use must have a documented legitimate purpose and clear non-goals. | all AI projects, from pilot to operation | AI Product Owner | entry in system inventory and approved use-case canvas |
| 2 | For each system business, technical and legal responsibility must be named by person. | all AI projects, including pure internal assistants | Sponsor | RACI with substitution and dated approval |
| 3 | Only necessary, lawfully usable data may be processed. | all AI projects with personal or business data | Data Owner, DPO | data inventory, legal basis, deletion and permission concept |
| 4 | Systems with impact on people must be tested for disadvantage and be contestable. | only customer-facing LLM, application and CV models, and other systems with personal impact | Subject-matter team, Responsible AI review | stratified metrics, complaint and correction path |
| 5 | Users must recognise AI involvement, limits, data use and responsible body. | only customer-facing LLM and customer-near systems, not purely internal assistants | Product Owner | approved transparency text and surface test |
| 6 | Externally effective or irreversible actions must be human-approved proportionate to risk. | only systems with external effect or irreversible follow-on actions | Process Owner | technical approval block and audit log |
| 7 | Security, robustness and safe refusal must be tested before go-live and after changes. | all AI projects, intensified for systems with personal impact | CISO, eval lead | versioned gold set, red-team and regression result |
| 8 | Operation, incidents, changes and shutdown must be monitored and regularly reassessed. | all productive AI systems, including internal assistants | Service Owner | dashboard, incident runbook, review protocol and tested kill switch |

The control density follows the risk class. An internal draft suggestion can start with a standard check; candidate evaluation or autonomous customer contact requires independent review, stricter gates and continuous monitoring.

**Governance:** new systems go into the pilot only after entry in the inventory and risk-based approval. An interdisciplinary committee reviews at least half-yearly and on an ad-hoc basis for model, data, purpose or legal changes. Exceptions are time-limited, name reason, compensating control, owner and end date; they may not override legal or knockout requirements.

A complete research entry can check as primary framework Regulation (EU) 2024/1689 and the NIST AI Risk Management Framework 1.0. It records version, original publisher, URL and retrieval date, assigns concrete guidelines and documents gaps: a general standard for example does not automatically answer German co-determination, internal data classes or the company's own approval path.

The guidelines only become effective when audit samples find the named artefacts and violations trigger a defined consequence. A mere published values paper does not fulfil this solution.

The annual effectiveness review answers at least:

- Are all productive and experimental systems inventoried?
- Do exceptions have a valid end date and effective replacement controls?
- Have complaints, incidents and model changes been translated into new tests?

## Reflection

Responsible AI becomes controllable when principles are translated into owners, controls, evidence and stop rights. Project managers ensure that guidelines apply proportionally to risk and remain verifiable even under time or success pressure.
