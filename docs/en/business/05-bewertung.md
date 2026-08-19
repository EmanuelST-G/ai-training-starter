# Use-Case Evaluation and Prioritisation

[← back to topic list](../themenliste.md)
[Previous: AI Use Cases](04-use-cases.md) · [Next: Business Case](06-business-case.md)

## Learning Objective

Create a simple AI use-case matrix.

## Evaluation Questions

Answer structurally for each use case:

- What problem is being solved?
- Who is the target group?
- How does the current process run?
- What improvement is expected?
- Is suitable data available?
- How high is the error risk?
- Is human control required?
- How often is the process executed?
- How much time / money is saved?
- How complex is the integration?
- What legal risks exist?
- How will success be measured?

## Prioritisation Criteria

| Criterion | Scale |
|-----------|-------|
| Business Value | 1 (low) – 5 (high) |
| Technical Feasibility | 1 (risk) – 5 (standard) |
| Data Availability | 1 (missing) – 5 (complete) |
| Risk (legal, reputation) | 1 (high) – 5 (low) |
| Implementation Effort (small = high) | 1 (large) – 5 (small) |
| [Time-to-Value](../glossar.md#time-to-value) (small = high) | 1 (years) – 5 (weeks) |

## Example Matrix

| Use Case | BV | TF | DA | R | IE | TtV | Score |
|----------|----|----|----|----|----|-----|-------|
| Meeting summary | 4 | 5 | 5 | 5 | 4 | 5 | **28** |
| Contract analysis | 5 | 3 | 4 | 2 | 2 | 3 | **19** |
| Customer service [agent](../glossar.md#agents) | 4 | 3 | 3 | 3 | 2 | 3 | **18** |
| Internal [knowledge assistant](../glossar.md#wissensassistent) | 4 | 4 | 3 | 4 | 4 | 4 | **23** |

Score = sum (max. 30). Higher = better prioritised.

For model-based use cases, [accuracy](../glossar.md#accuracy), [precision](../glossar.md#precision), [recall](../glossar.md#recall) and a check for [bias](../glossar.md#bias) complement the qualitative prioritisation.

## Practical Exercise

Collect use cases, build the matrix, discuss the top 3. See `Exercises` (in follow-up plan).

!!! warning "Common trap"
    "Coolness" does not justify a use case. Without measurable business value, the project vanishes after 6 months.
