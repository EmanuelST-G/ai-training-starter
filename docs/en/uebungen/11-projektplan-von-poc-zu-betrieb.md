# Exercise 11: Plan from PoC to Productive Operation

[← back to exercises overview](index.md)

**Phase:** 3
**Duration:** 60 minutes
**Prerequisite:** [AI Project Management](../projektleitung/08-projektphasen.md)
**Format:** Individual work

## Task

Plan the path from a successful lab experiment to production for a RAG knowledge assistant. In the PoC 30 synthetic questions were tested; for the pilot 40 employees should use real handbooks. Create a 12-week plan with outcomes, responsible parties, dependencies and gates.

Also research in the current primary documentation of the planned cloud provider the hosting region, log storage and data deletion. Note URL, document version or retrieval date and one open contract question. Define an abort and a fallback process.

## Hints

- A successful PoC replaces neither data protection review nor subject-matter acceptance.
- Plan data, eval, security, change and operational work in parallel.
- A gate contains measurable evidence and a deciding role.

## Solution

A complete sample plan is:

| Week | Outcome | Lead | Dependency |
|------|---------|------|------------|
| 1 | Purpose, scope, owner and knockout criteria confirmed | Project lead, business unit | Sponsor named |
| 1–2 | Data inventory, rights and valid document versions | Data Owner | Source access |
| 2 | Privacy, security and co-determination screening | DPO, CISO, works council | Data flow |
| 2–3 | Provider research and contract gaps documented | Procurement, legal | Target architecture |
| 3–4 | 60-case gold set with role and negative cases | Subject-matter experts | Scope stable |
| 3–5 | ACL-filtered index and logging implemented | Engineering | Approved data |
| 5 | PoC-to-Pilot gate | Sponsor, AI Product Owner | Evidence complete |
| 6–8 | Pilot with 40 trained users | Business unit, change lead | Gate passed |
| 6–8 | Measure quality, usage, cost and incidents | Eval lead, operations | Telemetry active |
| 9 | Pilot evaluation and remaining measures | Project lead | Pilot data |
| 10 | Load, security, restore and kill-switch test | CISO, operations | Production-like environment |
| 11 | Approve runbook, support, SLA and model version | Service owner | Operations handover |
| 12 | Go-live gate and staged activation | Sponsor, service owner | All knockout criteria met |

**Gate week 5:** at least 80 % subject-matter correct answers in the gold set, 100 % correct rights filtering, data protection decision documented, no critical security finding and pilot support named. **Gate week 12:** at least 90 % correctness, p95 below 5 seconds, zero rights violations, kill switch successful in at most 15 minutes, operations budget and runbook approved.

The research entry contains per provider feature original source, statement, scope, retrieval date and copy of evidence. Marketing pages are not enough. A typical open contract question reads: "Do deletion deadline and training exclusion also apply to support logs, backups and all sub-processors?" Legal and data protection confirm the result in writing.

**Abort:** if rights are violated or correctness remains below 80 % after two improvement cycles, the pilot ends. **Fallback:** users switch to the existing DMS search and manual subject-matter support; API access and index are deactivated, evidence is secured and pilot data treated according to deletion concept.

## Reflection

The path to production consists of verifiable transitions, not of a technical scale-up of the PoC. Project managers connect research and subject-matter evidence with clear gates so that uncertainty becomes a steerable decision.
