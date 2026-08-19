# Exercise 02: Detect Hallucinations Systematically

[← back to exercises overview](index.md)

**Phase:** 1
**Duration:** 20 minutes
**Prerequisite:** [Generative AI and LLMs](../grundlagen/02-llms.md)
**Format:** Partner work

## Task

For the fictional project "Nordlicht" only the following is documented:

- Pilot approval: 12 June by the business unit
- 60 test cases, 48 of them correct in subject matter
- Operation in an EU cloud region
- No data protection approval yet
- Planned pilot with 25 internal users

An AI assistant writes: "Nordlicht was approved on 12 June by business unit and data protection. Accuracy is 85 %. The system runs fully GDPR-compliant on German servers. 25 customers already use it in production, and according to the ISO 27001 audit there were no security deficiencies."

Mark each claim as **documented**, **calculable**, **contradictory** or **undocumented**. Then formulate a corrected answer and a verification plan for the open statements.

## Hints

- A precise number can still be wrong.
- "EU region" is not the same as "German servers".
- Separate missing evidence from a proven contradiction.

## Solution

| Claim | Classification | Reasoning |
|-------|----------------|-----------|
| Approval on 12 June by the business unit | documented | Date and role are in the facts. |
| Approval by data protection | contradictory | According to the facts it does not yet exist. |
| Accuracy 85 % | contradictory | 48 of 60 equals 80 %, not 85 %. |
| Fully GDPR-compliant | undocumented | Hosting alone does not prove GDPR compliance. |
| German servers | undocumented | Only an EU cloud region is documented. |
| 25 customers use the system in production | contradictory | Planned are 25 internal pilot users; production is not documented. |
| ISO 27001 audit without deficiencies | undocumented | An audit was not mentioned in the facts. |

A factually corrected answer reads:

> The business unit approved the pilot on 12 June. In 60 test cases 48 answers were correct; that equals 80 %. The pilot is planned for 25 internal users in an EU cloud region. Data protection approval is still pending. No information is available on production operation, server country or ISO 27001 audit.

The verification plan assigns each open statement to a primary source:

1. Check data protection approval in the approval protocol and with the responsible data protection role.
2. Reconcile cloud region and concrete storage location in the contract, administration configuration and sub-processor list.
3. Recalculate the test rate from the versioned test report.
4. Clarify user status via the pilot plan and access log.
5. Only accept a claimed audit with audit report, scope and date.

The exercise is passed when no undocumented statement is carried into the corrected answer and the calculated rate is 80 %.

## Reflection

Hallucinations are not recognised by the tone but by comparing each statement with a reliable source. Project managers therefore need a chain of evidence and must not treat technical details such as hosting region or certificate as blanket compliance proof.
