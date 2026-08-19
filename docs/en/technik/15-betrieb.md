# Operating AI Solutions

[← back to topic list](../themenliste.md)

## Learning Objective

Be able to plan how an AI solution is permanently monitored, evaluated, updated and safely continued after go-live.

## Go-live Is Not an Endpoint

An AI application changes even when no own code was modified: source data is updated, users ask new questions, providers change models and costs, and permissions expire. Operations therefore mean more than server availability. They cover quality, security, currency, cost and the subject-matter responsibility for decisions.

## Development, Test and Production Environments

| Environment | Purpose | Data and access |
|-------------|---------|------------------|
| Development | Build interfaces, prompts and tool calls | Synthetic or anonymised data; extensive logs |
| Test / Staging | Reproducible acceptance and regression tests | Representative test data; controlled roles |
| Production | Real process with real users | Production data; minimum rights and protected logs |

Environments need separate credentials, databases and configurations. A test must not accidentally send a production email or change a ticket. Production data does not belong unchecked in development logs.

## Versioning as a Belonging-Together Package

For a reproducible AI application more things are versioned than source code:

- Model ID, provider and relevant model parameters
- System and user prompts including templates
- Tool schemas, permissions and business rules
- Knowledge sources, parser, chunking and embedding model
- Test dataset, expected answers and evaluation rubric
- Configuration of routing, limits, filters and fallbacks

Each released version gets an ID and a change reason. This lets a team trace whether a quality change comes from model, prompt, data or code. A rollback must restore this package, not only the latest container version.

## Monitoring: What Must Be Visible?

Technical monitoring shows only part of reality. A useful dashboard combines several perspectives:

| Area | Example metrics |
|------|-----------------|
| Quality | Answer faithfulness, source coverage, retrieval recall, acceptance rate |
| Cost | Cost per request and case, token volume, share of expensive fallbacks |
| Response time | Time to answer, time to first token, timeout rate |
| Errors | HTTP errors, tool errors, empty hits, aborts, retries |
| Usage | Active users, cases per process, abort and escalation rate |
| Feedback | Helpful answers, corrections, complaints, free-text patterns |

Metrics must be filterable by model version, tenant, process and environment. Individual sample answers and anonymised traces explain **why** a metric changed. Logs should contain no unnecessary personal content or secrets.

## Detecting and Handling Drift

[Drift](../glossar.md#drift) is a relevant change in the data, request or model distribution compared to the state for which the solution was tested. [Drift detection](../glossar.md#drift-detection) searches for such changes automatically or through regular evaluations.

Three forms are especially useful:

- **Data drift:** inputs or source data change, e.g. new product groups or different language.
- **Concept drift:** the relationship between input and desired answer changes, e.g. after a process reform.
- **Model drift:** a provider or model update changes quality, style, cost or tool behaviour.

Detection combines statistical signals with subject-matter spot checks. An alert needs a threshold, a responsible role and an action: check the data pipeline, adjust the prompt, roll back the version or limit operations. An alert without a runbook remains just a chart.

## Provider or Model Change: Plan B

A [vendor lock-in](../glossar.md#vendor-lock-in) does not become visible only at the cancellation talk. Important counter-measures are:

1. Encapsulate provider access behind an internal gateway or adapter.
2. Use an own message and tool format instead of distributing proprietary fields everywhere.
3. Version prompts, test cases, sources and evaluation outside the provider.
4. Document model dependencies such as context window, tokenisation, vision and tool semantics.
5. Test a second provider or a smaller local model with the same test cases.
6. Practice export, deletion and re-indexing regularly.

Portability does not mean every model delivers the same quality. It means a switch is plannable and measurable instead of blocking the entire process.

## Fallback Models

A fallback can step in under overload, timeout or a temporary provider error. It is not an automatic quality substitute: a smaller model may deliver different formats, source binding or tool calls.

Before use, fallbacks are checked against the most important test cases. For each error it is decided whether a retry, an alternative model, a queue or a manual process is appropriate. Answers must be marked as fallback when quality or privacy conditions differ. A fallback must not bypass a permission check.

## Rate Limits and Availability

A [rate limit](../glossar.md#rate-limit) caps requests or tokens in a time window. The application must view quotas for users, tenants and the overall service together. [Throughput](../glossar.md#throughput) may drop even though the provider is reachable, e.g. due to own database or queue limits.

For outages and peak load:

- exponential backoff with random spread,
- queueing and prioritisation of urgent cases,
- hard timeouts and limiting parallel requests,
- circuit breaker instead of endless retries,
- an understandable message and a manual fallback process.

The [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective) should include quality and freshness goals as well, not only reachability.

## Incident and Change Management

An AI incident can be a technical outage, an incorrect domain answer, a data leak or an unauthorised tool call. The runbook names on-call, escalation path, immediate action, evidence preservation and communication.

After an incident it is clarified:

- Which users, data and decisions were affected?
- Which version and which sources were used?
- Can the error be reproduced and safely corrected?
- Must operations be paused, rolled back or reduced to assistance?
- Which lesson is taken into test set, monitoring or process?

Changes go through a documented review. This includes model and prompt changes as well as new knowledge sources, permission rules and tool functions.

## Canary, Shadow and Rollback

In [canary deployment](../glossar.md#canary-deployment) a new version first receives a small share of real requests. With [shadow traffic](../glossar.md#shadow-traffic) it runs in parallel on copies without delivering its answers to users. Both procedures require a privacy review and a clear abort threshold.

A rollback is practised before the rollout. When answers are not deterministic, the decision is based on subject-matter criteria, sources and security rules, not on text equality. The old version stays available until the new one is demonstrably stable.

## Continuous Evaluation

The test set contains simple standard cases, difficult edge cases, new real examples and negative cases where the system should refuse. After every relevant change regression tests run; in production spot checks and user feedback supplement them.

Evaluation should answer separately:

- Does the application find the right information?
- Is the answer backed by the information?
- Are permissions, privacy and security rules observed?
- Are latency and cost within the agreed range?

A rising average can hide critical minorities. Therefore break down results by process, language, role and risk class.

!!! tip "Practical tip"
    Before go-live create a one-page operations runbook: current version, quality SLO, cost alert, fallback, kill switch, responsible person and rollback command. When this information is missing, the solution is not production-ready.

## Glossary Cross-References

- [SLO (Service Level Objective)](../glossar.md#slo-service-level-objective)
- [Drift](../glossar.md#drift)
- [Drift Detection](../glossar.md#drift-detection)
- [Canary Deployment](../glossar.md#canary-deployment)
- [Shadow Traffic](../glossar.md#shadow-traffic)
- [Rate Limit](../glossar.md#rate-limit)
- [Throughput](../glossar.md#throughput)
- [Vendor Lock-in](../glossar.md#vendor-lock-in)
- [Regression Test](../glossar.md#regressionstest)
- [Evaluation](../glossar.md#evaluation)
