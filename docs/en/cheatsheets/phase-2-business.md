# Cheat Sheet Phase 2 – Business { .cheatsheet }

After this phase you can evaluate use cases in a structured way, set up an economically robust business case and address data risks early.

## Key Messages

1. AI is worthwhile especially with high frequency, low complexity, structured inputs and tolerable error rate.
2. "Coolness" is not business value — a use case without measurable benefit disappears after six months.
3. Three-scenario calculation (best / realistic / worst) is mandatory, including a scenario without AI success.
4. In most projects data quality is the bottleneck, not the model architecture — complete, current, correct, representative.
5. Data classification determines whether a use case is permissible at all; assessment happens at the highest affected level.
6. Anonymised data can be re-identifiable through combinations — the model can reconstruct individuals.

## Key Terms

- [AI Use Cases](../business/04-use-cases.md)
- [Use-Case Evaluation](../business/05-bewertung.md)
- [Business Case and Economics](../business/06-business-case.md)
- [Data Understanding](../business/07-daten.md)
- [Human-in-the-Loop](../glossar.md#human-in-the-loop)
- [Copilot](../glossar.md#copilot)
- [TCO (Total Cost of Ownership)](../glossar.md#tco-total-cost-of-ownership)
- [Bias](../glossar.md#bias)

## Common Mistakes

- **Choosing use cases by tech hype rather than by problems** — leads to a pilot without acceptance.
- **Confusing licence costs with total costs** — API use, data preparation, evaluation and operations drive the TCO.
- **Quoting ROI only as a point estimate** — without scenarios there is no basis for a sound decision.
- **Checking data protection only in the pilot** — use cases without GDPR sign-off are not finished use cases.
- **Adopting productivity gains from studies unchecked** — 10–25 % in operation are more realistic than 30–60 % from pilots.

## Clarify Before the Next Session

- Which three concrete business problems are actually on the agenda for the next AI initiative?
- Which data sources are available, who is the data owner, and at which classification level are they?
- How high are realistic API, licence and operating costs per request and per month?
- Which stakeholders (data protection, IT, business unit, management) must be involved before the next milestone?
- Which success metric defines "done" — and at what value is the use case considered failed?
- Where are bias risks in the historical data that the model could inherit?

!!! info "Print hint"
    This cheat sheet is optimised for A4; can be used as a PDF via browser print or `git clone`.
