# Business Case and Economics

[← back to topic list](../themenliste.md)

## Learning Objective

Create a business case with multiple scenarios instead of just comparing licence costs.

## Cost Categories

- Model development (custom development)
- Licences (platform fees per user/month)
- API usage / [tokens](../glossar.md#token)
- Infrastructure (compute, storage, [vector DB](../glossar.md#vektor-datenbank))
- Data preparation (manual + tools)
- Integration (into existing systems)
- [Evaluation](../glossar.md#evaluation) (internal tests, gold-set maintenance)
- Operations and monitoring ([LLMOps](../glossar.md#llmops))
- Change management (training, communication)

## Cloud vs. On-Premises

| Aspect | Cloud | On-Premises |
|--------|-------|-------------|
| Time-to-Market | Days | Months |
| Data protection | Depends on the provider | Best controllable; compliance depends on the implementation (operating model, audit, certifications) |
| Cost pattern | OPEX, scaling | CAPEX + OPEX |
| [Vendor lock-in](../glossar.md#vendor-lock-in) | High | Low |

## Small vs. Large Models

- **Large model** (GPT-4 class): better quality, higher cost per token, often cloud-only
- **Small model** (e.g. 7B, local): cheaper, often sufficient for classification/extraction, on-premises possible

## Cost per Request

Example: [RAG](../glossar.md#rag-retrieval-augmented-generation) request with 2k input + 500 output tokens.

**Status: 23.07.2026, pricing without guarantee — request current quote from the provider before use**

- GPT-4o: ~$0.01
- Claude Haiku: ~$0.003
- Own 7B model on-prem: $0.0003 + electricity

At 50,000 requests / month: **$500 vs. $150 vs. $15**. Even with a low unit price, volume adds up.

## [ROI](../glossar.md#roi-return-on-investment) and [Total Cost of Ownership](../glossar.md#tco-total-cost-of-ownership)

ROI = (Benefit − Cost) / Cost

But: many benefits are **not directly measurable** (employee satisfaction, time-to-market). Scenarios help here.

## Three-Scenario Calculation

| Scenario | Benefit/Year | Cost/Year | ROI |
|----------|--------------|-----------|------|
| Best case | €800,000 | €200,000 | 300 % |
| Realistic | €400,000 | €250,000 | 60 % |
| Worst case | €80,000 | €300,000 | −73 % |

Decisions usually fall on Realistic with a Worst-case floor.

## Hidden Costs

- Manual quality review of AI outputs
- Prompt engineering maintenance (model updates break prompts)
- Data maintenance (keep RAG sources current)
- Incident response

## Realistically Measuring Productivity Gains

Studies often overestimate the effect. Realistic:

- 30–60 % time saving in pilot studies
- 10–25 % in production operations (friction losses)
- Varies strongly by use case

## Scaling Effects

AI solutions scale linearly in token costs and sub-linearly in staffing — the point at which the solution pays off depends on volume.

!!! tip "Practical tip"
    Before signing the contract: calculate three scenarios, including **one without AI success** (What does the project cost if the AI delivers only 50 % of the promised effect?).
