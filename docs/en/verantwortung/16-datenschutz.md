# Privacy, Law and EU AI Act

[← back to topic list](../themenliste.md)

## Learning Objective

Prepare data protection, contractual and regulatory questions for AI projects so that before production launch they contain no legal gaps, unresolved responsibilities or impermissible data flows.

## GDPR Basics for AI Projects

The [GDPR](../glossar.md#dsgvo) governs every processing of personal data in the EU — regardless of whether a human or a model processes the data. Three terms are central for AI projects:

- **Personal data** are all information relating to an identified or identifiable natural person. This includes name, address, email, but also pseudonyms, device identifiers, location data and free texts with personal reference.
- **Special categories of data** (Art. 9 GDPR) are particularly worthy of protection: health data, biometric data, genetic data, ethnic origin, political opinions, religious beliefs, trade union membership, sex life or sexual orientation. For them a general prohibition applies with few exceptions.
- **Pseudonymisation** replaces direct identifiers with a pseudonym but remains personal data. **Anonymisation** removes the personal reference — in practice this rarely succeeds because seemingly harmless features can enable re-identification.

AI models can reconstruct individuals from seemingly anonymous data (inference). Even the probability with which a model correctly predicts a specific feature can be personal data.

## Legal Basis and Purpose Limitation

Every processing needs a legal basis (Art. 6 GDPR): consent, contract, legal obligation, vital interests, public interest or legitimate interest. The purposes must be defined and documented before processing. A subsequent change of purpose is only possible under strict conditions.

For AI projects this means:

- Before the first training or prompt: clarify what is the purpose? Which data is needed? Which legal basis supports the processing?
- Inputs that go into an AI tool must have the same purpose as the underlying processing.
- Consent must be voluntary, specific, informed and unambiguous. Generic "AI consent" clauses are not enough.

## Data Minimisation

[Data minimisation](../glossar.md#datenminimierung) is a GDPR principle: only the data required for the purpose may be processed. For AI projects this concretely means:

- Before every input ask: is this field really needed?
- Sensitive fields such as date of birth, health characteristics or internal IDs should not be sent to AI services by default.
- Example prompts with real customer data are taboo — even internally.
- With RAG only index documents the respective user group may see.

Data minimisation is not a technical detail but an early design decision. What does not enter the system cannot leak later.

## Data Processing on Behalf (Auftragsverarbeitung)

In a [data processing on behalf](../glossar.md#auftragsverarbeitung) arrangement, a processor processes personal data on behalf of the [controller](../glossar.md#verantwortlicher). Classic AI SaaS providers are almost always processors — even if they do not call it that in marketing. Obligations:

- Written data processing agreement (DPA) under Art. 28 GDPR with concrete rules on purpose, duration, type of data, obligations and sub-processors.
- The provider may only process data on documented instructions.
- Sub-processors (e.g. cloud providers, embedding services) must be disclosed and approved.
- The provider must demonstrate technical and organisational measures (TOMs).
- At the end of the cooperation data must be deleted or returned, unless legal obligations prevent this.

A sample DPA contains: subject matter, duration, type and purpose of processing, categories of data subjects and data, controller's rights, confidentiality obligation, TOMs, sub-processor list, support for data subject rights, incident notification obligations, audit rights and deletion obligations. Before signing the legal department should review the DPA against the provider standard.

## Third-Country Transfer (Schrems II, Standard Contractual Clauses)

When personal data is transferred to countries outside the EEA, the transfer needs a special level of protection. The most important building blocks:

- **Adequacy decision** by the EU Commission: for a few countries (e.g. Switzerland, Canada, parts of Japan) an equivalent level of protection applies.
- **EU Standard Contractual Clauses (SCC)**: contractual modules that transfer obligations from the EEA to third countries. After Schrems II they alone are not enough — they need a **Transfer Impact Assessment (TIA)** that evaluates the legal situation in the recipient country and the actual protective measures.
- **Supplementary measures**: encryption with own key sovereignty, pseudonymisation, contracts with sub-processors and strict access control can mitigate a third-country risk.

For typical US providers this means: contract with SCC modules, TIA, evidence of TOMs, and in practice often the requirement that the provider can host data in EU regions. Cloud configurations must reflect these requirements.

## Use of Inputs for Training Purposes (US Providers)

Many US providers reserve the right in their standard terms to use inputs and outputs to improve their models. This is risky for the GDPR because the data is then processed outside the agreed purposes. In practice:

- **Activate opt-out**: most major providers offer an admin opt-out for using inputs for training purposes. It must be set before productive use.
- **Contractual clarity**: DPA and order must restrict data use to the specific purpose.
- **Separation of sensitive workloads**: for data with elevated protection needs use own contracts, own tenants or EU hosting.
- **Self-hosting or on-premises**: when a provider cannot exclude use, in-house operation is the more honest answer.

Without opt-out and without contractual limits, trade secrets, personal data and source code may end up in the provider's next model update.

## Copyright and Intellectual Property

AI models are trained with large amounts of data whose copyright is not finally settled. Relevant questions for projects:

- Whose content is in the training data? May it be processed for the chosen purpose?
- Are outputs protected by copyright? Under EU law purely machine-generated works lack the required human creative contribution.
- Who is liable when outputs adopt existing works or infringe copyright?
- What licence do inputs have? Employee outputs in copilots usually belong to the employer; customer inputs remain with the customer.

Contractual arrangements with providers must clearly address usage rights to outputs, liability for copyright infringements and the question of training data use.

## Confidential Company Information

AI tools are not a safe place for trade secrets, M&A information, personnel files or security incidents. Risks come from inputs, logs, caches and retrieval indices. Important rules:

- Clearly name and enforce prohibited content in inputs.
- Explicitly address trained or shared content in employee training.
- Combine DPA and non-disclosure agreements (NDAs) with providers.
- Regularly check logs, caches and telemetry data for unwanted content.

## Transparency Towards Users

Users must be able to recognise that they are interacting with an AI system, which data is processed and what rights they have. Practical measures:

- Clear labelling of AI-generated content.
- Reference to training data use, storage duration and third-country transfer in the privacy policy.
- Explanation of when a human reviews the output and who is responsible.
- Easy way to exercise information, deletion or objection rights.

Transparency is not just a GDPR obligation — it is a prerequisite for trust and acceptance.

## Documentation Obligations

Article 30 GDPR requires a **record of processing activities**. For AI projects it typically contains:

- Name and purpose of processing
- Controller, contact person, involved processors
- Categories of data subjects and data
- Recipients and third-country transfer with legal basis
- Deletion deadlines and TOMs
- Legal basis per processing step

Additionally high-risk processing requires a **[Data Protection Impact Assessment (DPIA)](../glossar.md#datenschutz-folgenabschatzung-dsfa)** under Art. 35 GDPR. Inputs into publicly available AI tools without sufficient protective measures are a typical trigger for a DPIA.

## EU AI Act — Overview

The EU AI Act has been in force since 2024 and is applied in stages. It follows a risk-based approach: the higher the risk, the stricter the obligations.

### Prohibited Practices

Certain applications are prohibited regardless of risk class — e.g. exploiting vulnerabilities, social scoring by public bodies, or real-time biometric surveillance in public spaces (with narrow exceptions).

### [High-Risk System](../glossar.md#hochrisiko-system) (Annex III)

Annex III lists areas with elevated risk: personnel decisions, creditworthiness, education, law enforcement, critical infrastructure, migration and more. For these systems obligations apply for risk management, data governance, technical documentation, records, human oversight, accuracy, robustness and cybersecurity.

### Transparency Obligations

Providers and operators must make it visible to users that they are interacting with an AI system. Certain content (e.g. synthetic media) must be labelled.

### General-Purpose AI (Code of Practice)

For general AI models — especially those with "systemic risks" — additional obligations apply for training data, documentation, security tests and incident management. The EU Commission's Code of Practice concretises the expectations.

### [AI Literacy](../glossar.md#ai-literacy) (Art. 4)

Providers and operators must ensure that employees have an appropriate understanding of AI systems, how they work, their limits and risks. Training is therefore a regulatory obligation — not just good practice.

## Roles and Responsibilities

In the AI context several roles must be distinguished:

- **[Controller](../glossar.md#verantwortlicher)** under GDPR: decides on purpose and means.
- Processor: processes on behalf.
- Provider and operator under AI Act: bear the regulatory obligations depending on role.
- AI Product Owner: responsible for the subject-matter and operation of a concrete AI system.
- Data protection officer: advises and reviews.
- CISO/CDO: bear security or data responsibility.

A role matrix with named persons and substitution rules belongs in every AI project.

## When External Parties Must Be Involved

Certain initiatives need early involvement of data protection, legal, works council or supervisory authorities:

- Processing of special data categories or extensive profiles
- Planned third-country transfer or US provider without SCC/TIA
- AI tools that evaluate or monitor employees (works council)
- High-risk systems under AI Act — documentation and oversight obligations
- Material changes to purpose or data flows

!!! info "Note"
    Company-specific requirements — e.g. AI policy, approvals and audits — complement the regulatory obligations. Clarify at the beginning who has which role and which thresholds automatically trigger a review.

## Glossary Cross-References

- [GDPR](../glossar.md#dsgvo)
- [Data Processing on Behalf](../glossar.md#auftragsverarbeitung)
- [High-Risk System](../glossar.md#hochrisiko-system)
- [AI Literacy](../glossar.md#ai-literacy)
- [Controller](../glossar.md#verantwortlicher)
- [Data Minimisation](../glossar.md#datenminimierung)
- [Data Protection Impact Assessment (DPIA)](../glossar.md#datenschutz-folgenabschatzung-dsfa)
- [Compliance](../glossar.md#compliance)
