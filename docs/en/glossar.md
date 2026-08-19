# Glossary

Alphabetical index of the most important AI terms for project managers and decision-makers.

!!! info "How to use"
    - Use the search field in the top right (`/` to focus)
    - Term anchors: each entry has a direct link via `#term`
    - Topic pages link relevant terms with `#term` further down on the page

## A

### A/B Test
Controlled comparison of two variants with comparable user groups or traffic shares to measure differences in impact and quality.

### Accuracy
Share of correct predictions among all predictions. More in [Evaluation](projektleitung/10-evaluation.md).

### Agent Drift
Degradation of agent performance over time due to changes in context or tool availability.

### Agent Loop
Repeated execution of tool calls by an agentic system.

### Agents
AI systems that autonomously plan and execute actions via tools. More in [Generative AI & LLMs](grundlagen/02-llms.md).

### AI Act (EU)
European regulation governing AI systems, in force since 2024, with phased application from 2025. More in `verantwortung/16-datenschutz.md` (follow-up plan).

### AI Literacy
Ability to understand AI concepts, use AI tools critically, and assess societal implications. More in `verantwortung/19-governance.md` (follow-up plan).

### Acceptance Criteria
Measurable conditions that a solution must satisfy so the business side and sponsor can approve it.

### Annex III (EU AI Act)
List of AI use cases classified as high-risk under the EU AI Act.

### Annotation
Manual marking of examples to build training data or ground truth.

### Instruction Prompt
Prompt set by the developer that influences the model's behaviour across the entire conversation. Synonym: System Prompt.

### API
Programming interface; in AI contexts usually an LLM endpoint, embedding API, or tool definition.

### Assistance vs. Automation
Assistance = human reviews every AI output. Automation = AI acts autonomously.

### Auditability
Property of a system to be verifiable through independent reviews; includes internal controls, external audits, and supervisory checks.

### Audit Trail
Complete, immutable record of system events for compliance and forensics.

### Data Processing on Behalf (Auftragsverarbeitung)
Processing of personal data on behalf of the controller by a processor (GDPR term).

## Ä

### Similarity Search
Search for embeddings in a vector database that are closest to a query (nearest-neighbour lookup).

## B

### Bias
Systematic skew in data or models leading to unfair outcomes. More in [Data Understanding](business/07-daten.md).

### Bias Audit
Systematic check of an AI system for statistical discrimination against protected groups.

### BLEU
Metric for machine translation and text generation, measures n-gram overlap with reference texts.

### Branching
Splitting a task into multiple parallel processing paths (e.g. via multiple agents).

## C

### Canary Deployment
Rollout strategy where a new version is first released to a small share of traffic before it becomes widely available.

### Chain-of-Thought (CoT)
Prompting technique that guides the model to show intermediate steps explicitly. More in [Prompt Engineering](grundlagen/03-prompt-engineering.md).

### Change Management
Planned guidance of organisational change through communication, involvement, training, and outcome measurement.

### Chat Mode
Interactive conversation without persistent application logic (example: ChatGPT).

### Compliance
Adherence to legal, regulatory, and internal rules.

### Computer Vision
AI discipline that interprets images and videos.

### Context Drift
Degradation of model quality due to changed distribution of input data.

### Context Window
Maximum number of tokens a model can process at one time.

### Copilot
AI system that makes suggestions while the human retains control.

### Cosine Similarity
Similarity measure between two embedding vectors, measured as the cosine of the angle between them.

## D

### Data Minimisation
GDPR principle that only the personal data required for a clearly defined purpose may be processed.

### Data Protection Impact Assessment (DPIA)
Process for assessing risks to individuals from data processing operations.

### Deep Learning
Machine learning using deep neural networks.

### Drift
Change in data or model distribution over time that causes quality loss.

### Drift Detection
Automated monitoring that detects distribution shifts in input data or model outputs.

### Third-Country Transfer
Transfer of personal data to countries outside the EEA.

### GDPR
EU General Data Protection Regulation, in force since 2018, governs the processing of personal data.

## E

### Embedding
Vector representation of text, images, or other data that captures semantic similarity.

### End-to-End Pipeline
Data processing chain from raw source to final product without manual intermediate steps.

### Explainability
Property of a model to provide traceable reasoning for a given prediction (XAI); trade-off against model complexity.

### Episodic Memory
Memory component of an agent that stores past actions and outcomes for later decisions.

### Ethical AI
See `verantwortung/18-responsible-ai.md` (follow-up plan).

### Evaluation
Structured measurement of model quality on test data. More in [Evaluation and Quality Measurement](projektleitung/10-evaluation.md).

### Event Streaming
Architecture in which data is processed as a continuous stream of events (e.g. Apache Kafka, AWS Kinesis); foundation for real-time AI pipelines.

## F

### Fallback Model
Secondary model activated when the primary model fails or loses quality.

### Fairness
Property of a model to not produce systematic discrimination against protected groups; measurable via fairness metrics on stratified test data.

### False Negative
Actually relevant case missed by the model.

### False Positive
Case marked as relevant by the model that is actually irrelevant.

### Federated Learning
Training method where models are updated locally and only parameters are aggregated.

### Few-Shot Prompting
Prompting with 1–5 examples in the prompt.

### Fine-Tuning
Additional training of a model on domain-specific data.

### Right to be Forgotten
GDPR obligation to delete personal data on request.

### Function Calling
Mechanism that lets models trigger structured tool calls.

## G

### Accuracy (Genauigkeit)
See [Accuracy](#accuracy).

### General-Purpose AI
AI models that can be used for a wide range of tasks (e.g. LLMs).

### Generative AI
AI systems that create new content (text, images, code, audio).

### GFM
GitHub Flavored Markdown — extension of CommonMark with tables, task lists, etc.

### Gold Set
Manually curated test set with known correct answers.

### Governance
Structures and rules for steering AI systems in an organisation.

### Ground Truth
Subject-matter-defined reference answer or correct label against which model outputs are evaluated.

### Grounding
Anchoring AI answers in verifiable sources (typical for RAG).

## H

### Hallucination
Plausible-sounding but incorrect AI output. More in [Generative AI & LLMs](grundlagen/02-llms.md).

### High-Risk System
Category in the AI Act covering applications that pose significant risks to health, safety, or fundamental rights.

### Human-in-the-Loop
Human review or approval as part of the AI workflow.

## I

### Incident Response
Structured reaction to security incidents, often with defined roles and escalation levels.

### Indirect Prompt Injection
Attack in which malicious instructions reach the model via external content (documents, websites).

### Inference
Application of a trained model to new inputs.

### Instruction Tuning
Training a model to follow instructions in natural language.

### Integration Test
Test that verifies the interaction of multiple components.

## J

### Jailbreak
Prompt technique that bypasses a model's safety rules.

## K

### Classification
AI task: assign an input to one of several categories.

### Context Window (Kontextfenster)
See [Context Window](#context-window).

### Artificial Intelligence (AI)
Umbrella term for software that takes on tasks for which humans require intelligence.

## L

### Large Language Model (LLM)
Language model with billions of parameters, trained on massive text corpora.

### Latency
Time between request and response.

### Least Privilege
Security principle of giving each actor only the minimum necessary permissions.

### Learning Rate
Hyperparameter that determines the step size during training.

### Vendor Management
Process for evaluating and continuously controlling AI providers.

### LLM-as-a-Judge
Evaluation method where a language model scores answers against a defined rubric; human oversight remains required.

### LLMOps
Operational practices for LLM-based systems.

### Logging
Structured recording of system events.

## M

### Machine Learning
Subfield of AI: models learn from data instead of explicit rules.

### Make-or-Buy
Decision whether to develop an AI capability in-house or acquire it as a service or product.

### Multi-Tenancy
Ability of an AI solution to process data from multiple customers or departments in isolation.

### Memory
Component of an agent that retains information across multiple conversation or work steps.

### Human-in-the-Loop (Mensch im Prozess)
See [Human-in-the-Loop](#human-in-the-loop).

### Model Card
Standardised document describing a model's capabilities, limitations, and training conditions.

### Model Drift
Change in model quality over time due to changed input data.

### Model Registry
Versioning of deployed models together with training data references, evaluation metrics, and approval status.

### Multimodal
Models that process multiple data types (text, image, audio, video).

## N

### Natural Language Processing (NLP)
Processing of natural language by software.

### Neural Network
Functional architecture inspired by biological neurons.

## O

### Open-Source Models
Publicly available models, often with freely usable weights.

### Opportunity Cost
Value of the best forgone alternative that is lost through a decision (e.g. in-house development vs. procurement).

### Overfitting
Model fits the training data too closely and generalises poorly.

## P

### Pilot
Limited deployment of an AI solution with real users and real processes before deciding on broad rollout.

### Plan
Step of an agent in which a structured sequence of actions is derived from a goal.

### PoC
Proof of Concept: time-boxed feasibility check that verifies whether an approach works in principle.

### Precision
Share of correct positive predictions among all positive predictions.

### Pre-Training
First training of a model on huge data volumes.

### Prompt
Input to an AI model.

### Prompt Engineering
Discipline of writing effective prompts.

### Prompt Injection
Attack that smuggles malicious instructions into the prompt.

### Provenance
Origin and editing history of data or outputs.

## Q

### Quantisation
Reduction of the numerical precision of a model (for edge deployment).

## R

### RAG (Retrieval-Augmented Generation)
Architecture in which the model retrieves sources from a knowledge base before answering.

### RAG Poisoning
Attack that contaminates a RAG system's knowledge base with manipulated content.

### Rate Limit
Limit on the number of requests a client may send to an AI service within a time window.

### Reasoning Models
Models that internally think in intermediate steps before answering.

### Reasoning Chain
Explicitly documented chain of intermediate steps that leads a model to its conclusion.

### Recall
Share of found relevant cases among all relevant cases.

### Red Teaming
Targeted search for vulnerabilities through simulated attacks.

### Regression Test
Re-running of a fixed test set after changes to detect recurring or newly introduced errors.

### Re-Plan
Creating a new plan when an agent determines that the original plan is no longer leading to the goal.

### Responsible AI
AI development and use that takes ethical, social, and legal aspects into account.

### Primary Collection
First-time capture and documentation of personal data directly from the data subjects, including legal basis and purpose limitation.

### ROI (Return on Investment)
Metric that relates the profit of an investment to the costs incurred.

### ROUGE
Metric for text summarisation, measures overlap with reference summaries.

## S

### Closing Prompt
Last instruction in the prompt that defines the output format.

### Self-Consistency
Technique of generating multiple answers and selecting the most common one.

### Shadow AI
Unapproved or unknown use of AI tools by employees outside the intended governance and security processes.

### Shadow Traffic
Traffic requests mirrored in parallel to production at a new model version without responses being delivered to end users.

### SLA (Service Level Agreement)
Contractual agreement on availability, response time, and consequences of failure.

### SLO (Service Level Objective)
Internal target for reliability or quality metrics of a service (e.g. 99.9% availability).

### Streaming
Delivery of the answer in real-time tokens rather than waiting for the full response.

### Structured Output
Output in a defined format (e.g. JSON schema).

### Supply-Chain Risk
Risk from compromised components in the AI supply chain (models, data, tools).

### System Inventory
Registry of all AI systems in an organisation with status, owner, risk class, and lifecycle phase; mandatory element of any governance.

### System Prompt
See [Instruction Prompt](#instruction-prompt).

## T

### Temperature
Control parameter that influences the randomness of the model output.

### TCO (Total Cost of Ownership)
Total cost over the lifecycle of an AI system (licences, infrastructure, operations, training).

### Test Set
See [Gold Set](#gold-set).

### Throughput
Number of requests a system can handle per unit of time.

### Time-to-Value
Time from project start to first measurable benefit for users.

### Token
Basic unit into which a model splits text (often word pieces).

### Tool Call
See [Function Calling](#function-calling).

### Tool Calling
See [Function Calling](#function-calling).

### Training
Process in which a model learns from data.

### Transformer
Model architecture that underpins most modern LLMs.

## U

### Uncertainty
Measure of the uncertainty of a prediction.

### Underrepresentation
Data situation in which important groups are underrepresented.

## V

### Validation
Evaluation of model performance on data separate from training during development.

### Vendor Management
Process for evaluating, selecting, and continuously controlling external AI providers; assesses security, compliance, lock-in risk, roadmap.

### Vector Database
Database for efficient similarity search on embeddings.

### Vendor Lock-in
Dependency on a single provider that makes switching or migration to alternatives difficult.

### Controller (Verantwortlicher)
GDPR term: natural or legal person who determines the purposes and means of processing personal data.

### Accountability
Clearly assigned person or role responsible for an AI system.

### Record of Processing Activities
GDPR-mandatory documentation of all data processing operations.

## W

### Probability
Mathematical measure of the plausibility of an event.

### Knowledge Assistant
AI system that helps employees access enterprise knowledge.

## Z

### Zero-Shot Prompting
Prompting without examples.
