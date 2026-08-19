# Generative AI & Large Language Models

[← back to topic list](../themenliste.md)
[Previous: AI Fundamentals](01-ai-grundlagen.md) · [Next: Prompt Engineering](03-prompt-engineering.md)

## Learning Objective

Understand why a convincingly worded AI output can still be wrong.

## What are LLMs?

Large Language Models are AI models trained on huge amounts of text that compute probabilities for the "next most likely word". Through scaling, this simple task gives rise to remarkably versatile intelligence.

## Core Principle "Next Most Likely Word"

An LLM splits text into **[tokens](../glossar.md#token)** (often word pieces; around 0.5–1 token per English word; German typically uses 1.2–2 tokens per word depending on the tokenizer) and predicts a probability distribution for each next token. The selection from this distribution — controlled by the **[temperature](../glossar.md#temperature)** — produces the text.

**Status: 23.07.2026**

## Context Window

The **[context window](../glossar.md#kontextfenster)** is the maximum length of input + output a model can process at one time. Typical values 2026:

**Status: 23.07.2026, pricing without guarantee — request current quote from the provider before use**

- GPT-4 class: 128k to 1M tokens
- Claude Opus / Sonnet: 200k to 1M tokens
- Open-source: highly variable, 8k to 200k

What does not fit into the window, the model does not "know".

## System Prompt, User Prompt, Assistant Response

- **[System Prompt](../glossar.md#system-prompt):** role and behaviour instructions (set by the developer)
- **User Prompt:** the actual request
- **Assistant Response:** the model's answer

## Provider Overview

| Provider | Model line | Note |
|----------|-----------|------|
| OpenAI | GPT-4, GPT-5, o-series | Reasoning models with strong planning capability |
| Anthropic | Claude Opus / Sonnet / Haiku | Long context windows, cautious with risks |
| Google | Gemini | Multimodal, tight Workspace integration |
| Microsoft | Copilot | Marketing of OpenAI models + integration |
| Open-source | LLaMA, Mistral, Qwen | Usable on-premises and on edge devices |

## Hallucinations

A [hallucination](../glossar.md#hallucination) is an **incorrect statement that the model presents with confidence**. Sources:

- Training data does not contain the fact
- Distribution permits plausible lies
- Model cannot distinguish between "is often said" and "is true"

Detection: demand sources, cross-check, healthy scepticism.

## Temperature and Determinism

**[Temperature](../glossar.md#temperature)** controls how "creative" or "conservative" the model responds:

- **T = 0**: greedy decoding, very deterministic
- **T ≈ 0.7**: balanced (typical)
- **T ≥ 1**: very creative, higher hallucination rate

For reproducible outputs: temperature 0, optionally set the `seed` parameter.

## Structured Outputs

Models can be forced to produce valid JSON or XML structures — a prerequisite for tool calls and reliable automation. APIs offer `response_format` parameters or "JSON Mode" for this.

## Multimodal Models

Current [multimodal models](../glossar.md#multimodal) process not only text but also images, audio, and partly video. This considerably expands the use cases (invoice scanning, diagram analysis, audio transcription).

## [Reasoning Models](../glossar.md#reasoning-modelle)

Models like OpenAI o1/o3 or Claude with "Extended Thinking" internally break down tasks into intermediate steps. They are slower and more expensive but often deliver noticeably better results in mathematics, logic, and multi-step planning.

## Limits of LLMs

- **Lack of current knowledge** — note the training cutoff
- **Incorrect source citations** — invented papers, rulings, URLs
- **Calculation errors** — even strong models do not compute reliably
- **Apparent confidence** — the model does not volunteer "I don't know"
- **Context loss** — in long conversations, older parts become fuzzy

!!! warning "Practical trap"
    "It sounds convincing" is the weakest argument for correctness. Plausibility and truth are different axes.
