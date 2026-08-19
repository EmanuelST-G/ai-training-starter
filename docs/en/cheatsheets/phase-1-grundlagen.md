# Cheat Sheet Phase 1 – Fundamentals { .cheatsheet }

After this phase you can assess when AI is appropriate, how LLMs work and how to formulate stable prompts.

## Key Messages

1. In practice AI almost always means machine learning: models generalise from data instead of explicit rules.
2. LLMs compute a probability distribution word by word — as a result the same request can yield slightly different answers.
3. Hallucinations are confidently sounding false statements; plausibility is not truth.
4. Prompt engineering is iterative: first draft → test on 5–10 examples → identify weaknesses → adjust the prompt precisely.
5. Context window, temperature and system prompt determine behaviour more than the model itself.
6. Prompt engineering alone does not yield a reliable application — evaluation, sources (RAG) and human-in-the-loop remain necessary.

## Key Terms

- [AI Fundamentals](../grundlagen/01-ai-grundlagen.md)
- [Generative AI & LLMs](../grundlagen/02-llms.md)
- [Prompt Engineering](../grundlagen/03-prompt-engineering.md)
- [Artificial Intelligence](../glossar.md#kunstliche-intelligenz-ai)
- [Hallucination](../glossar.md#hallucination)
- [Token](../glossar.md#token)
- [Temperature](../glossar.md#temperature)
- [Few-Shot Prompting](../glossar.md#few-shot-prompting)

## Common Mistakes

- **Confusing AI with classical software** — AI returns probabilities, not guarantees; a deterministic answer is not to be expected.
- **Overlooking hallucinations because the tone convinces** — check plausibility, demand sources, cross-check facts.
- **Mixing several tasks in one prompt** — yields generic, superficial answers instead of clear results.
- **Negative instructions instead of positive phrasing** — "don't say X" works worse than "formulate in the following structure".
- **Seeing prompt engineering as a one-off task** — without version maintenance and test set, quality breaks down after every model update.

## Clarify Before the Next Session

- Which AI tasks in your area of responsibility are suitable for assistance, which for automation?
- Which data, models and providers are already approved in your organisation?
- Who may input which content into AI tools (PII, trade secrets, source code)?
- Which hallucination risks are critical in the upcoming use case (legally binding statements, personal reference)?
- What minimum quality (recall, false-positive rate) must a later AI use case meet to be usable?
- What expectations does management have for "AI in three months" — and where is honest correction needed?

!!! info "Print hint"
    This cheat sheet is optimised for A4; can be used as a PDF via browser print or `git clone`.
