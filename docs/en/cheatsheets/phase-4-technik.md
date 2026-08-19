# Cheat Sheet Phase 4 – Technology { .cheatsheet }

After this phase you can assess RAG, agents, integration and productive operations so that architecture decisions remain reasoned, documentable and operable.

## Key Messages

1. Look up knowledge → RAG; adjust behaviour → fine-tuning. A fine-tune does not replace a current knowledge base.
2. RAG grounds answers in sources but does not automatically make them true — sources prove origin, not correctness.
3. Permissions must take effect before or during retrieval, not after answer generation — otherwise the content is already in the model.
4. An agent is not a synonym for "good AI" — it is an orchestration of model, tools, context and control.
5. Autonomy is a process decision: it should rise or fall with the damage potential of the action.
6. Go-live is not an endpoint — drift, model updates and changing usage require continuous evaluation and an operations runbook.

## Key Terms

- [RAG and Enterprise Knowledge](../technik/12-rag.md)
- [Agents and Agentic Processes](../technik/13-agents.md)
- [AI Integration](../technik/14-integration.md)
- [Operating AI Solutions](../technik/15-betrieb.md)
- [Embedding](../glossar.md#embedding)
- [Function Calling](../glossar.md#function-calling)
- [Drift](../glossar.md#drift)
- [Canary Deployment](../glossar.md#canary-deployment)

## Common Mistakes

- **Using fine-tuning as knowledge update** — fine-tuning is expensive, sources are missing, updating becomes a permanent task.
- **Building a RAG index once and forgetting it** — drift, version conflicts and old documents otherwise poison the answer quality.
- **Filtering permissions only after answer generation** — confidential content is already in the model and can be leaked.
- **Operating agents with developer admin rights** — a compromised agent becomes a maximum damage vector.
- **Versioning only source code** — prompt, knowledge sources, tools and model parameters belong to the reproducible package.

## Clarify Before the Next Session

- Which share of the knowledge base is searchable, versioned and rights-tagged — and which is not?
- Which tools does the agent receive, and which actions need approval before the tool call?
- How are latency, throughput and cost per request currently measured — and where are the bottlenecks?
- Which drift signals are monitored, and who responds to which alert?
- What does the kill switch look like, and has the rollback ever been practised?
- Which assumptions from the pilot (model, provider, sources) are versioned and exportable in the contract?

!!! info "Print hint"
    This cheat sheet is optimised for A4; can be used as a PDF via browser print or `git clone`.
