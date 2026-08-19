# RAG and Internal Knowledge Assistants

[← back to topic list](../themenliste.md)

## Learning Objective

Be able to explain how an internal knowledge assistant using Retrieval-Augmented Generation works and what organisational and technical prerequisites are required for reliable answers.

## What is Retrieval-Augmented Generation?

A [RAG system](../glossar.md#rag-retrieval-augmented-generation) connects a language model with a searchable knowledge base. Before each answer, the system searches for relevant internal content and feeds the matching passages together with the question to the model. The answer is thereby **grounded** in concrete sources ([grounding](../glossar.md#grounding)).

An LLM does not automatically know enterprise knowledge:

- Internal policies, contracts and project documents were usually not part of training.
- Training knowledge has a cut-off date and is not updated with every document change.
- Model weights are not a document archive and do not deliver a reliable source reference.
- Access permissions from SharePoint, DMS or intranet are not automatically inherited.

RAG therefore augments the model with current, controlled knowledge. It does not make answers automatically true, but more verifiable.

## Basic Flow of a Knowledge Assistant

1. Ingest documents from approved sources.
2. Clean, structure and split content into sections.
3. Index sections as embeddings and store with metadata.
4. Search for sections matching the user's question.
5. Check access permissions and re-rank the hits if necessary.
6. Generate the answer only from approved hits and show sources.

## Preparing and Segmenting Documents

Raw documents are rarely suitable for search directly. PDFs may contain headers, tables or scanned pages; presentations spread a statement across multiple slides. Preparation typically includes:

- Extract text, using OCR for scans if necessary
- Remove navigation, recurring footers and duplicates
- Preserve headings, tables and lists where possible
- Capture language, document type, owner, validity and confidentiality as metadata
- Split content into meaningful segments or "chunks"

Chunks must be large enough for the technical context and small enough for precise retrieval. A rigid split by character count can tear statements apart. Subject-matter boundaries such as headings, paragraphs or individual process steps are better; a small overlap preserves transitions.

## Embeddings and Semantic Search

An [embedding](../glossar.md#embedding) translates a text section into a numerical vector that represents its meaning. Similar content lies closer together in this vector space. This lets the search connect "file travel expenses" with a section about "expense process", even though the same words do not occur.

Semantic search does not always replace classic keyword search. Product numbers, paragraphs or exact names are often better found lexically. In practice a **hybrid search** combines both methods and then re-ranks the hits.

## Vector Databases

A [vector database](../glossar.md#vektor-datenbank) stores embeddings and efficiently searches for similar vectors. Each vector also has:

- the associated text section or a reference to it,
- document ID, title and section,
- version and validity date,
- origin and link to the original,
- permission and tenant information.

The vector database is not necessarily the leading document system. The DMS or intranet remains the authoritative source; the index is a derived, renewable search structure.

## Retrieval and Answer Generation

In **retrieval**, the question is converted into a search query. The system first fetches several candidates, filters them by metadata and permissions, and selects the best-fitting passages. A re-ranker can improve this selection.

Only then does generation begin. A good system prompt obliges the model to

- use only the provided sources,
- make contradictions visible,
- clearly name missing information,
- not invent any source or reference.

"I do not have sufficient sources for this" is a correct result and often more valuable than a plausible guess.

## Source Attributions and Traceability

Every technical statement should be traceable back to concrete references. A useful source display contains at least the document title, section, version or date, and a link to the original. Users must be able to open the relevant passage, not just see the file name.

For audit and error analysis, the system should additionally log which document versions and segments were used for the answer. Source attributions, however, only prove the origin. They do not guarantee that an outdated or erroneous source document is correct.

## Document-Level Permissions

The search may only consider content that the requesting person is allowed to read. Permissions must therefore take effect **before or during retrieval**, not only after answer generation.

Important rules:

- Inherit access lists from the source system into the index and keep them in sync.
- Check user identity and group memberships for every request.
- Treat caches, search logs and source previews as tenant- and rights-separated as well.
- Remove revoked approvals from the index promptly.

Hiding sources afterwards is not enough: the model may already have incorporated confidential content into the answer.

## Knowledge Refresh

A RAG system needs a governed update process. Changes can be processed event-driven or in scheduled runs. New, modified and deleted documents must all be taken into account.

Operations include freshness targets, e.g. "changes must be findable within two hours", and checks for failed imports. Versions must not silently compete; superseded guidelines should be marked invalid or removed from the active index.

## RAG or Fine-Tuning?

| Approach | Advantages | Disadvantages | Suitable for |
|----------|-----------|---------------|--------------|
| RAG | Knowledge quickly updatable; sources visible; document permissions applicable | Retrieval may pick wrong passages; additional search infrastructure | Facts from changing internal documents |
| [Fine-tuning](../glossar.md#fine-tuning) | Behaviour, style and output format can become more stable | Knowledge hard to update; sources missing; training and tests expensive | Recurring behaviour or domain-specific formats |
| Combination | Domain knowledge via RAG, desired behaviour via fine-tuning | Higher complexity and more operational effort | Mature applications with clearly documented need |

Rule of thumb: **Look up knowledge → RAG; adjust behaviour → fine-tuning.** A fine-tune is no good replacement for a current knowledge base.

## Common Errors and Counter-Measures

| Error pattern | Possible cause | Counter-measure |
|---------------|----------------|-----------------|
| Wrong documents found | Poor segmentation, missing metadata, search too broad | Test search cases, use hybrid search and re-ranking |
| Answer contradicts source | Prompt ignores context or sources contradict each other | Tighten source binding, surface contradictions, evaluate answer faithfulness |
| Outdated documents appear | Import or deletion process faulty | Monitor freshness, filter by validity, rebuild index |
| Missing access check | Rights checked only at the surface | Enforce ACL filters in retrieval and test with roles |
| No reliable answer | Relevant passage is missing or not found | Measure knowledge-base coverage and retrieval recall |

## Evaluating Quality Regularly

A gold set of real questions should contain expected answers, allowed sources and roles. Separately measure at least: was the right passage found? is the answer backed by that passage? do refusal and permissions work? This way you can tell whether an error comes from retrieval, document quality or generation.

!!! tip "Practical relevance"
    Start with a small, clearly bounded set of documents. Check real questions, sources and permissions regularly before adding further areas. A small, cleanly evaluated index is more valuable than an uncontrolled full import.

## Glossary Cross-References

- [RAG (Retrieval-Augmented Generation)](../glossar.md#rag-retrieval-augmented-generation)
- [Embedding](../glossar.md#embedding)
- [Vector Database](../glossar.md#vektor-datenbank)
- [Grounding](../glossar.md#grounding)
- [Similarity Search](../glossar.md#hnlichkeitssuche)
