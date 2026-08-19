# Data Understanding

[← back to topic list](../themenliste.md)

## Learning Objective

Which data questions must be clarified before starting an AI project.

## Data Quality > Model Quality

In most projects, data quality is the bottleneck, not the model architecture. Check before starting:

- Are the data complete?
- Are they current?
- Are they correct?
- Are they representative for the use case?

## Data Sources and Data Ownership

Each data source needs a **responsible person** (data owner). Without an owner, there is no data strategy.

## Structured and Unstructured Data

- Structured: SQL databases, ERP, CRM, Excel
- Unstructured: PDFs, emails, contracts, images

Both are relevant — many AI projects live from making unstructured data accessible.

## Training, Test, and Validation Data

- **[Training data](../glossar.md#training)** are the examples the model learns from
- **[Validation data](../glossar.md#validierung)** are used during development for hyperparameter tuning
- **[Test data](../glossar.md#testset)** are hidden until final acceptance

If these are mixed, every accuracy figure is worthless.

## Labels and [Ground Truth](../glossar.md#ground-truth)

Ground truth = "what the correct answer is". Who defines it? Who verifies it?

Specialists and executives should insist that ground truth is defined by **subject-matter experts**, not by developers alone.

## Data Quality — Five Dimensions

| Dimension | Question |
|-----------|----------|
| Completeness | Are values missing? |
| Correctness | Are the values correct? |
| Currency | How old are they? |
| Consistency | Same customer, multiple spellings? |
| Representativeness | Do the data mirror the reality of the application? |

## [Bias](../glossar.md#bias) in Data

If historical data underrepresents certain groups, the model learns the discrimination. Examples: application data with gender-biased success patterns, credit data with biased assumptions.

Counter-measures:

- Data audit before project start
- Check fair representation
- Stratify evaluation results by group

## Personal Data and Sensitive Data

Data protection in the sense of the [GDPR](../glossar.md#dsgvo) starts with the question: "Which data **comes in**, which may be **processed**, what may the model **infer** from it?"

- Clear purpose limitation
- [Data minimisation](../glossar.md#datenminimierung)
- Access control
- Retention and deletion

## Data Classification

Typical levels:

- **Public** — no restriction
- **Internal** — employees
- **Confidential** — authorised circle
- **Strictly confidential** — e.g. personal data, trade secrets

AI use cases should always be assessed at the highest level they touch.

## Data Governance

Data governance regulates:

- Who defines quality criteria?
- Who checks?
- Who corrects?
- Who is liable for errors?

## Access Permissions

Doubly relevant in the AI context:

- Who may train / populate the model?
- Which data does the model see on request?
- Which outputs may leave the organisation?

!!! warning "Compliance trap"
    Even anonymised data can be re-identifiable through combinations. The model can reconstruct individuals from it.
