# Prompt Engineering

[← back to topic list](../themenliste.md)
[Previous: Generative AI & LLMs](02-llms.md)

## Learning Objective

Iterate from a weak prompt to a stable business prompt.

## Structure of a Good Prompt

| Element | Purpose |
|---------|---------|
| Role | Who should the model be? |
| Goal | What should be achieved? |
| Context | What is this about, what is the background? |
| Task | Concrete instruction |
| Constraints | What is not allowed? |
| Output format | What should the result look like? |
| Examples | Few-shot templates |

## Zero-Shot and Few-Shot

- **[Zero-Shot](../glossar.md#zero-shot-prompting):** only the task, no examples
- **[Few-Shot](../glossar.md#few-shot-prompting):** 1–5 examples for the desired schema

Few-shot is more robust for structured tasks but costs [tokens](../glossar.md#token).

## Iterative Prompting

A good prompt almost never emerges on the first try. Approach:

1. Write a first draft
2. Run it on 5–10 examples
3. Identify weaknesses ([hallucinations](../glossar.md#hallucination), wrong format, missing context)
4. Adjust the prompt precisely
5. Repeat until stability is achieved

## Prompt Templates

For recurring tasks: prompt as a template with placeholders. Versioning in Git. Tools: `promptr`, `langchain` templates, or simply Markdown files.

## Model Asking Back

Models are allowed (and should) ask back when the task is ambiguous. This dramatically lowers the hallucination rate. In the prompt: *"If anything is unclear, ask rather than guess."*

## Prompt Patterns for Business Tasks

| Task | Pattern |
|------|---------|
| Summarisation | "Summarise the following text in 5 sentences." |
| Analysis | Provide structured schema + demand evidence from the text |
| Classification | Provide list of categories + allow multi-select |
| Document creation | Provide outline + style example |
| Project management | Demand RACI + acceptance criteria |
| Decision support | Pros/cons with estimated impact |

## Common Prompt Mistakes

- Mixing **multiple tasks** in one prompt
- **Implicit assumptions** instead of explicit context
- Missing **output format specification** (the model "guesses")
- **Negative instructions** ("don't say X") instead of positive phrasing
- **Overly long prompts** with redundant context

!!! warning "Practical trap"
    [Prompt engineering](../glossar.md#prompt-engineering) alone does **not** yield a reliable AI application. For that you need:
    - Evaluation (qualified test cases)
    - Predefined tools / [function calling](../glossar.md#function-calling)
    - Sources ([RAG](../glossar.md#rag-retrieval-augmented-generation)) instead of free invention
    - [Human-in-the-loop](../glossar.md#human-in-the-loop) for consequential decisions
