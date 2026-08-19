# Exercise 06: Evaluate a RAG Prototype

[← back to exercises overview](index.md)

**Phase:** 4
**Duration:** 45 minutes
**Prerequisite:** [RAG and Internal Knowledge Assistants](../technik/12-rag.md)
**Format:** Group work

## Task

A RAG prototype for travel policies was tested. The approval thresholds are: retrieval hit rate at least 85 %, subject-matter correct answers at least 80 %, correct source attribution 100 %, safe refusal at least 90 % and no permission violation.

The results:

- For 20 answerable questions the right passage was found 16 times.
- 14 answers were correct in subject matter.
- 18 answers showed a source; in 16 cases it supported the statement.
- Of 10 unanswerable questions 8 were safely refused.
- In 8 role tests content from blocked documents appeared twice.
- Three answers used a superseded policy version.

Calculate the metrics, make a go/no-go decision and prioritise four measures.

## Hints

- Evaluate retrieval, generation and permission separately.
- A good average rate does not heal a data leak.
- Specify a re-test for each measure.

## Solution

| Quality dimension | Result | Threshold | Assessment |
|-------------------|--------|-----------|------------|
| Retrieval hit rate | 16/20 = 80 % | ≥ 85 % | not passed |
| Subject-matter correctness | 14/20 = 70 % | ≥ 80 % | not passed |
| Source shown | 18/20 = 90 % | 100 % | not passed |
| Source supports answer | 16/20 = 80 % | 100 % | not passed |
| Safe refusal | 8/10 = 80 % | ≥ 90 % | not passed |
| Permission violation | 2/8 = 25 % | 0 % | critical error |
| Outdated answer | 3 cases | 0 approved | not passed |

The decision is unambiguously **no-go**. In particular the two permission violations are a knockout error; the system must not continue to be piloted with confidential documents.

Prioritised measures:

1. **Enforce access filter before retrieval.** Role and document permissions are checked server-side. Then re-run all eight role tests plus new negative roles without leak.
2. **Clean up validity in the index.** Set version and validity date as mandatory metadata, remove superseded documents and re-test the three affected questions.
3. **Improve retrieval.** Analyse failed cases for segmentation, metadata and search terms; test hybrid search or re-ranking. Target is at least 17 correct passages for the same 20 questions.
4. **Tighten answer binding and refusal.** Allow only supported statements and refuse when the passage is missing. Re-run all 20 answer cases and 10 negative cases.

Only when the unchanged, versioned test set meets all thresholds and additional role tests show no leaks may a new pilot decision be made. A mere prompt change without regression test is not enough.

## Reflection

For RAG, search, answer faithfulness, currency and permissions each need their own quality targets. Project managers protect the go-live by not offsetting critical security criteria against good averages.
