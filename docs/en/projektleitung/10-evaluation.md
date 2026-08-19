# Evaluation and Quality Measurement

[← back to topic list](../themenliste.md)

## Learning Objective

Develop an evaluation rubric for 20–50 real test cases.

## Why Demo Examples Are Not Enough

"The model looked good in the meeting" is no proof of production readiness. For that you need:

- Structured test set (gold set)
- Quantitative metrics
- Reproducibility
- Re-running after every change

## Offline and Online Evaluation

- **Offline:** test set, before rollout
- **Online:** user feedback, conversion, processing time, complaints

## Subject-Matter Test Datasets

Test cases must be created by **subject-matter experts**, not by developers. Otherwise you test the model against your own opinion.

## Ground Truth

Ground truth is the **human-defined correct outcome**. Per test case:

- Question / task
- Expected answer
- Optional: reasoning for why this is the correct answer

## Metrics by Application

| Application | Metrics |
|-------------|---------|
| Classification | [accuracy](../glossar.md#accuracy), [precision](../glossar.md#precision), [recall](../glossar.md#recall), F1 |
| Extraction | Token-F1, exact match |
| Generative answer | BLEU / ROUGE (weak), [LLM-as-a-judge](../glossar.md#llm-as-a-judge), manual evaluation |
| RAG | Source correctness, answer correctness, hallucination rate |
| Conversation | task completion rate, user satisfaction, processing time |

## False Positives / False Negatives

- **False positive:** AI gives an answer it should not have given
- **False negative:** AI gives no answer although it could have

Which is more expensive depends on the use case:

- Compliance checks: false negative is more expensive (risk missed)
- Advertising: false positive is more expensive (customer annoyed)

## Answer Quality

For generative answers, structured evaluation rubrics help:

- **Correctness** (1–5)
- **Completeness** (1–5)
- **Clarity** (1–5)
- **Source attribution** present? (yes/no)
- **Tone** appropriate? (yes/no)

## LLM-as-a-Judge — Limits

An LLM can evaluate another LLM — but it is **not** neutral. Problems:

- Favours eloquent answers
- Has its own [bias](../glossar.md#bias)
- Misses domain errors

Use only as **one** of several methods, not as the only one.

## [A/B Tests](../glossar.md#ab-test)

Comparison of two model versions or prompt variants with real traffic. Watch out for:

- Need statistical significance
- Carry-over effects
- Ethical concerns when quality differs

## Subject-Matter Acceptance

Indispensable: a **subject-matter expert** gives the final sign-off. Whoever does not plan this builds products nobody wants to be responsible for.

## [Red Teaming](../glossar.md#red-teaming)

Targeted search for vulnerabilities:

- Prompt injection
- Jailbreaks
- Bias in the output
- Incorrect source attributions
- Behaviour on out-of-scope questions

## [Regression Tests](../glossar.md#regressionstest)

After every model or prompt change: re-run the full gold set. Otherwise errors creep back unnoticed.

!!! warning "Eval without consequence"
    Evaluation without a clear process "did not pass → project back to the start" is theatre. Whoever accepts no "no" has no evaluation.
