# Cheat Sheet Phase 5 – Responsibility { .cheatsheet }

After this phase you can combine privacy, security, responsible AI and governance so that AI systems go live in a compliant, reviewable and switchable way.

## Key Messages

1. AI security is a discipline of its own: classic firewalls are not enough — risk sits in the model, in content and in tool calls.
2. Prompt injection is the most common and most dangerous attack class — external content is "untrusted data", not instruction.
3. Data minimisation is a design decision: what does not enter the system cannot leak later.
4. Accountability beats principle: a system without a named person becomes a "nobody's baby" when problems arise.
5. Governance does not work as control but as a shared language — involve data protection, security and subject-matter early.
6. Every AI system needs a kill switch and a practised rollback — whoever has never switched off will not switch off in an emergency.

## Key Terms

- [Privacy, Law and EU AI Act](../verantwortung/16-datenschutz.md)
- [AI Security](../verantwortung/17-security.md)
- [Responsible AI](../verantwortung/18-responsible-ai.md)
- [AI Governance](../verantwortung/19-governance.md)
- [GDPR](../glossar.md#dsgvo)
- [Data Processing on Behalf](../glossar.md#auftragsverarbeitung)
- [High-Risk System](../glossar.md#hochrisiko-system)
- [Accountability](../glossar.md#verantwortlichkeit)

## Common Mistakes

- **Checking data protection only at rollout** — use cases without GDPR and AI Act assessment are not production-ready.
- **Not setting the opt-out for training data** — inputs end up in the provider's next model update.
- **Entering trade secrets into AI tools** — logs, caches and retrieval indices become data leak channels.
- **Operating AI systems without responsible parties** — ownership, substitution and authority must be in place before go-live.
- **Treating security as a model property** — architecture, tool restriction, input validation and output filter remain necessary.

## Clarify Before the Next Session

- Which AI systems are recorded in the inventory, and who is the AI Product Owner per system?
- Which processings are GDPR-mandatory (record, DPIA, DPA, SCC/TIA) — and which gaps are open?
- Which security risks (prompt injection, RAG poisoning, over-privileged agents) have been explicitly checked?
- Which bias, fairness and explainability requirements apply for the next evaluation?
- Which approvals (lab / pilot / production) are pending, and who decides with which deadline?
- How is the kill switch defined per system, and when was it last practised?

!!! info "Print hint"
    This cheat sheet is optimised for A4; can be used as a PDF via browser print or `git clone`.
