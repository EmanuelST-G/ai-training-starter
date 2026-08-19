# AI Integration into Existing Systems

[← back to topic list](../themenliste.md)

## Learning Objective

Connect AI applications to existing systems while making reasoned choices about integration path, data flow, permissions, cost and operational limits.

## Integration Paths

| Path | Description | Strengths | Typical limits |
|------|-------------|----------|----------------|
| API | Application calls an AI or domain system via a defined interface | Controllable, automatable, well testable | Development and operation of the interface required |
| Embedded UI | AI function is embedded into an existing surface | Familiar context, low switching cost | Dependency on UI and licence capabilities |
| Side-by-Side | Stand-alone AI surface runs next to the existing system | Quick pilot, flexible design | Users switch between contexts |
| Batch | Large volumes processed asynchronously | Cheaply plannable, no real-time pressure | No immediate answer, restart must be safe |

The integration path should start from the work process. A technically elegant API is of little help if users must leave their daily context for it.

## Authentication and Authorisation

Authentication answers "Who is calling?". Authorisation answers "What may this identity see or do?". Both must be consistent between UI, integration service, AI provider and existing system.

Proven principles:

- Secure service-to-service access with short-lived tokens or a suitable identity service.
- Do not store secrets in prompts, source code, logs or browser JavaScript.
- Apply least privilege: a summarisation service usually needs read access, not write access.
- Pass user identity and tenant through to the data access, rather than using a shared full-access account.
- Validate inputs and tool parameters; treat external responses as untrusted data.

Especially with RAG and tools an integration service must not extend rights the person does not have in the source system.

## Data Flows: Pull, Push and Events

| Pattern | Flow | Suitable for | Watch out for |
|---------|------|--------------|---------------|
| Pull | AI service queries data on demand | Current single request | Latency and load on the source system |
| Push | Existing system transmits data to AI service | Scheduled sync, batch | Data minimisation, duplicates and deletion |
| Event-driven | Change triggers processing | Near-time updates and automation | Order, retries and dead-letter cases |

With push and events only the actually needed fields should be transmitted. Every message needs an ID, a timestamp and a traceable source. Repeated delivery must be safe; idempotent processing and a stored processing state help here.

## Latency, Throughput and Rate Limits

Perceived latency includes network, authentication, data fetch, retrieval, model response and rendering. Streaming can shorten the time to the first visible text, but does not automatically change the total time.

[Throughput](../glossar.md#throughput) describes how many requests are processed per time unit. An existing system can be the bottleneck even if the model accepts many requests. A [rate limit](../glossar.md#rate-limit) from the provider must be coordinated with quotas of the own API and database.

For planning:

- Time budgets per segment and a timeout per dependency
- limited retries with backoff instead of an immediate load spike
- Queue or batch processing for non-urgent tasks
- Protection against overload via circuit breaker and bulkheads
- defined response on unavailability, e.g. manual process or stored draft

## Cost, Unit Price and SLA

The unit price of a request is more than the model price. It includes input and output tokens, embedding and search costs, infrastructure, monitoring, support and possibly licences. For a robust business case typical and maximum context sizes as well as failed attempts are measured.

An [SLA (Service Level Agreement)](../glossar.md#sla-service-level-agreement) regulates the contractual commitments of a provider. An internal [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective) sets the target the in-house solution should achieve, e.g. availability, response time or success rate. Both should fit the expectations of the business process: an internal search may tolerate more waiting time than a hotline.

## Standard Integrations

Products such as Microsoft 365 Copilot, Salesforce Einstein or ServiceNow AI come with pre-built connectors, role models and operational responsibility. That can enable a quick start, but does not replace a check of:

- Data residency, contractual terms and licence model
- Actually synchronised sources and their currency
- Permission inheritance and tenant separation
- Exportability of prompts, configurations and results
- Measurability of quality and feasibility of switching providers

A product name is not proof that a concrete process case is supported. Before rollout a representative flow with real roles and test data should be checked.

## Custom Integration: When Does It Make Sense?

A custom integration pays off when existing products do not sufficiently map the process, data sovereignty or required control. Examples are domain-specific search logic, multiple data sources with unified permission checks, or a clearly bounded tool for an internal process.

But it brings lasting responsibility for interfaces, security updates, monitoring, model changes and support. "We can build this ourselves" is therefore only a good argument when a responsible team, a budget and a maintenance plan exist.

## Pilot Operation and Scaling

A pilot should have a limited process, a defined user group and measurable acceptance criteria. Technically not only the happy paths are tested, but also missing permissions, empty answers, provider errors, peak load and abort.

Before scaling, the following should be clear:

1. Which quality and time targets were achieved.
2. Which data is actually transferred and stored.
3. How cost per case and support effort look.
4. Who decides on errors, corrects them and communicates them.
5. How a rollback or manual fallback process works.

Only then user count, data volume and autonomy are gradually increased. Each stage needs metrics and a fallback option.

!!! tip "Practical tip"
    Start the pilot if possible with read access and a clear manual fallback. Enable write actions only when permissions, error cases, unit cost and quality are measurably under control with real roles.

## Glossary Cross-References

- [Streaming](../glossar.md#streaming)
- [Throughput](../glossar.md#throughput)
- [Rate Limit](../glossar.md#rate-limit)
- [SLA (Service Level Agreement)](../glossar.md#sla-service-level-agreement)
- [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective)
- [API](../glossar.md#api)
- [Event Streaming](../glossar.md#event-streaming)
