# Exercise 10: Create an AI Risk Register

[← back to exercises overview](index.md)

**Phase:** 5
**Duration:** 45 minutes
**Prerequisite:** [AI Governance](../verantwortung/19-governance.md)
**Format:** Group work

## Task

A customer service agent reads emails, searches order data, creates answers and may, after human approval, trigger credits up to €100. Assess at least seven risks on a scale of 1 to 5 for probability (P) and impact (I). The score is P × I.

The register must contain cause, consequence, preventive measure, early indicator, responsible role and response. Mark risks with score ≥ 15 as red, ≥ 8 as yellow, below as green. Finally formulate an approval decision.

## Hints

- Capture technical, legal, subject-matter and organisational risks.
- "Monitoring" alone is not a preventive measure.
- Critical individual risks can be a knockout criterion regardless of score.

## Solution

A robust sample register is:

| Risk | Cause | Impact | P | I | Score | Measure and early indicator | Owner and response |
|------|-------|--------|---|---|-------|------------------------------|--------------------|
| Indirect prompt injection from email | Malicious or compromised sender email contains hidden instructions for the model | Model performs unintended tool calls, credits or data leak possible | 4 | 5 | 20 red | Treat content as data, limit tool rights; indicator: detected role changes | CISO; stop run, secure case, test rules |
| Unauthorised credit | Agent exceeds approval limit or bypasses four-eyes check | Financial damage and reputation loss from unauthorised refunds | 3 | 5 | 15 red | Validate amount and customer ID server-side, four-eyes approval; indicator: cluster just below €100 | Process Owner; block and check credit |
| Wrong service answer | Hallucinated facts or wrong source attributions from the model | Customers receive incorrect information, complaints and correction effort rise | 4 | 3 | 12 yellow | Source obligation and gold set; indicator: rising correction rate | Subject-matter team; withdraw answer, add to test set |
| Disclosure of other customers' order data | Missing or faulty tenant separation in data access | Data protection and confidentiality breach, GDPR notification obligation | 2 | 5 | 10 yellow | Tenant and identity check before retrieval; indicator: rejected cross-account queries | Data protection; stop access and assess incident |
| Duplicate tool call on timeout | Missing idempotency in tool calls on network or API timeouts | Duplicate bookings, orders or credits, customer complaints | 3 | 4 | 12 yellow | Idempotency key and status check; indicator: same request ID multiple times | IT operations; block or reverse booking |
| Model or prompt drift | Model updates, prompt changes or data shift without sufficient regression | Answer quality declines slowly, acceptance and trust drop | 3 | 3 | 9 yellow | Versioning and regression test; indicator: quality value falls below threshold | AI Product Owner; roll back to approved version |
| Incomplete audit log | Missing mandatory fields or insufficient persistence of tool and approval events | Accountability obligations not met, incident analysis and audit fail | 2 | 4 | 8 yellow | Mandatory fields and tamper-proof storage; indicator: missing tool ID | IT operations; block external effect, fix logs |
| Declining acceptance in service team | Lack of training, missing feedback channels or poor UX in agent cockpit | Low usage, workarounds outside the system, project ROI drops | 3 | 2 | 6 green | Training and feedback channel; indicator: active usage below 50 % | Change Lead; interviews and process adjustment |

Before pilot start the two red risks must be reduced to at most yellow. Additionally data access without permission and credit without effective human approval count as knockout errors even if their estimated probability drops.

The approval therefore reads **conditionally not approved**. A limited shadow mode without sending and credit is permissible as soon as test data is released. For the real pilot injection regression tests, role checks, idempotency test and documented approval must succeed.

The register is checked weekly during the pilot, monthly during operations and on an ad-hoc basis after changes or incidents. Each reassessment receives date, evidence and deciding role.

For each yellow residual risk the owner also documents:

- who accepts or further reduces it by which deadline,
- which metric proves the effectiveness of the measure,
- which threshold automatically sends the agent back to shadow mode.

## Reflection

A risk register is a steering instrument when it contains concrete owners, indicators and responses. Project managers use the score for prioritisation but keep hard security and data protection limits as non-negotiable approval criteria.
