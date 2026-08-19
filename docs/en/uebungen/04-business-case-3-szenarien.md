# Exercise 04: Calculate a Business Case in Three Scenarios

[← back to exercises overview](index.md)

**Phase:** 2
**Duration:** 45 minutes
**Prerequisite:** [Business Case and Economics](../business/06-business-case.md)
**Format:** Individual work

## Task

For an internal knowledge assistant the following assumptions apply:

- 250 employees, 6 searches per week, 18 minutes current effort
- 48 working weeks and €46 fully loaded cost per working hour
- Year-1 costs: integration €80,000, data preparation €45,000, change €25,000, platform €72,000, operations €40,000, evaluation €18,000
- Best case: 80 % usage, 70 % of theoretical time saving realised
- Realistic case: 60 % usage, 50 % realised
- Worst case: 35 % usage, 30 % realised

Calculate for all three scenarios benefit, year-1 costs, net effect and ROI. Give a recommendation with two conditions for a pilot.

## Hints

- Theoretical benefit = people × searches × time × weeks × hourly rate.
- Scenario benefit = theoretical benefit × usage rate × realisation factor.
- ROI = (benefit − cost) / cost.

## Solution

First the maximum annual time potential is calculated:

```text
250 × 6 × 18/60 hours × 48 = 21,600 hours
21,600 × €46 = €993,600 theoretical benefit
```

The year-1 costs are the same in all scenarios at first:

```text
80,000 + 45,000 + 25,000 + 72,000 + 40,000 + 18,000
= €280,000
```

| Scenario | Benefit calculation | Benefit | Net effect | ROI |
|----------|----------------------|---------|------------|-----|
| Best | €993,600 × 0.80 × 0.70 | €556,416 | €276,416 | 98.7 % |
| Realistic | €993,600 × 0.60 × 0.50 | €298,080 | €18,080 | 6.5 % |
| Worst | €993,600 × 0.35 × 0.30 | €104,328 | −€175,672 | −62.7 % |

The calculation shows a barely positive realistic case and a significant loss risk. It therefore does not justify an immediate full rollout, but a limited pilot that measures the two biggest assumptions.

**Recommendation:** approve the pilot if, first, usage rate and actually saved processing time are measured over at least eight weeks and, second, a stop occurs if the extrapolated realistic benefit stays below €280,000. Additionally, quality review and time for human control must be included in the measurement; otherwise gross time is overestimated as benefit.

Non-monetised advantages such as faster onboarding may be documented additionally, but must not obscure the negative worst-case calculation.

## Reflection

Three scenarios make visible which assumptions carry the business case and how large the loss span is. Project managers should therefore plan a pilot as a measurement instrument for usage and net time saving, not as a pre-emptive production release.
