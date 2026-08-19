# Exercise 13: Prepare a Data Protection Impact Assessment

[← back to exercises overview](index.md)

**Phase:** 3
**Duration:** 60 minutes
**Prerequisite:** [Privacy, Law and EU AI Act](../verantwortung/16-datenschutz.md)
**Format:** Individual work

## Task

The fictional Nordstern GmbH wants to summarise job applications via a US SaaS service and sort them with a suitability score. CVs, references and interview notes are transferred. Only the top 20 % are seen by HR; data remains stored for 24 months. Applicants receive no AI notice and cannot contest the ranking.

Prepare a DPIA: describe purpose and data flow, check necessity, assess at least five risks for those affected and name measures plus residual risk. For this research Art. 35 GDPR and the current mandatory list of the responsible data protection authority; document primary source and retrieval date. Make a project decision.

## Hints

- A DPIA assesses consequences for people, not only IT risks.
- Pseudonymised applications remain personal data.
- Data protection officer, legal department and works council must review the assessment.

## Solution

A DPIA is presumably required here: there is systematic evaluation, significant effect on professional chances, extensive employment data and possibly particularly sensitive information in free documents. In addition, candidate selection is a particularly regulation-sensitive AI use case. The final classification is confirmed by the data protection officer and legal department based on the current authority lists.

**Purpose and data flow:** applicant → recruiting portal → SaaS provider and sub-processors → extraction and score → sorted list → HR decision. Logs, support accesses, backups, training use, hosting region and deletion are recorded as separate processing steps.

**Necessity and proportionality:** A score with automatic hiding is not necessary for a summary. Less intrusive means are pure assistance without ranking, display of all applications, short retention period and mandatory human review. Legal basis, information obligation, data subject rights, DPA, third-country transfer and co-determination are clarified before pilot start.

| Risk for those affected | P/I | Measure | Residual risk |
|--------------------------|-----|---------|---------------|
| Discriminatory ranking | high/high | representative test set, group metrics, no automatic sorting out | medium |
| Wrong extraction leads to exclusion | medium/high | show original document, four-eyes check, correction path | low to medium |
| Impermissible third-country access | medium/high | DPA, transfer check, EU hosting, encryption, review sub-processors | depends on contract |
| Purpose-creep model training | medium/high | contractual training ban and technical deactivation | low when proven |
| Storage too long | high/medium | justified deletion concept, automatic deletion and backup deadline | low |
| Missing transparency and contestation | high/high | understandable AI notice, human contact point, correction and objection | low to medium |
| Excessive data collection | high/medium | define required fields, filter sensitive free texts | medium |

**Decision:** the presented process is **no-go**. The pilot may only be reassessed when no automatic sorting out happens, all applications remain humanly accessible, transparency and contestation exist, contracts and transfer are clarified and the DPIA shows no unacceptable high residual risk. If a high risk remains despite measures, the responsible supervisory authority must be involved before processing according to the designated procedure.

The research appendix names per source title, authority, version, URL, retrieval date and the criteria applied to the case. Secondary articles may explain but do not replace legal text and current mandatory list.

For the completeness check, statements from the data protection officer and affected business roles, planned consultations, approving person and next review date are also filed in the DPIA dossier.

The measures each receive an implementation proof. Without test protocol for human review, deletion, data subject request and group fairness the residual risk remains unassessed and the gate stays closed.

## Reflection

A DPIA is not a form at the end of the project but can fundamentally change the process design. Project managers must assess risks from the perspective of applicants and enable a real stop when residual risk is unacceptable.
