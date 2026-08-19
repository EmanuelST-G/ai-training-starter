# AI Fundamentals

[← back to topic list](../themenliste.md)

## Learning Objective

Be able to explain when AI is the right choice and when classical software would be the better option.

## What is Artificial Intelligence?

Artificial Intelligence (AI) refers to software that takes on tasks for which humans typically require intelligence — understanding language, recognising patterns, making decisions. In practice today, "AI" almost always means **[Machine Learning](../glossar.md#machine-learning)**: models that generalise from data instead of being explicitly programmed.

## Distinguishing Approaches

| Approach | Properties |
|----------|------------|
| Classical software | Deterministic, rule-based |
| Rule-based systems | "If X, then Y" logic, often with a knowledge base |
| Machine Learning | Learns patterns from examples |
| Deep Learning | ML with deep neural networks |
| Generative AI | Creates new content (text, image, code) |

## Training, Inference, and Models

- **[Training](../glossar.md#training):** model learns from data (one-off or continuous)
- **[Inference](../glossar.md#inference):** model produces predictions for new inputs
- **Model:** stored result of training — the "compiled experience"

## Structured and Unstructured Data

- **Structured:** tables, databases, clearly defined schema
- **Unstructured:** texts, images, audio, video

AI can process both, but models differ greatly in what they are suitable for.

## Probabilities instead of Deterministic Results

Unlike classical software, AI returns a **probability distribution** over possible answers. This has two practical consequences:

1. The same request can yield slightly different answers.
2. Statements often sound confident but are not guaranteed to be correct.

## Why AI Makes Mistakes

- **[Bias](../glossar.md#bias) in the training data** — the model inherits prejudices
- **Distribution shift** — the world changes, the model does not
- **[Hallucinations](../glossar.md#hallucination)** — the model "invents" content that sounds plausible
- **Lack of currency** — the model knows nothing after its training cutoff

## Overview of Important AI Types

- **Classification** — is this email spam or not?
- **Forecasting** — sales figures next week?
- **Clustering** — which customers are similar?
- **Recommender systems** — which film fits?
- **[Computer Vision](../glossar.md#computer-vision)** — what is in the image?
- **[Natural Language Processing (NLP)](../glossar.md#natural-language-processing-nlp)** — understand, generate, translate text
- **Generative AI** — create new content

!!! tip "Practical relevance"
    For AI projects, the question "What kind of AI do we actually need?" is usually the first dividing line between sensible and over-engineered solutions.

## Related Terms

- [Generative AI & LLMs](02-llms.md)
- [Data Understanding](../business/07-daten.md)
