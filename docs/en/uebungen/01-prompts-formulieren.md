# Exercise 01: Formulate a Reliable Project Status Prompt

[← back to exercises overview](index.md)

**Phase:** 1
**Duration:** 20 minutes
**Prerequisite:** [Prompt Engineering](../grundlagen/03-prompt-engineering.md)
**Format:** Individual work

## Task

You receive these notes on the "Knowledge Assistant" project:

- Pilot start was 3 May; planned was 29 April.
- 38 of 50 test questions are answered correctly in terms of subject matter.
- The interface to the document management system is still missing.
- The budget is 62 % used, the schedule 55 %.
- Data protection is reviewing the data processing agreement until Friday.

Formulate a prompt that generates a status report for the steering committee from these notes. The prompt must include role, goal, context, task, constraints, output format and how to handle missing information.

## Hints

- Separate facts from evaluations.
- Specify the length and structure of the answer.
- The model must not add anything that is not in the notes.

## Solution

A complete prompt can look like this:

```text
You are a project controller for an AI project. Create an objective
status report for the steering committee on the "Knowledge Assistant"
project exclusively from the following notes.

Notes:
- Pilot start: 3 May; planned: 29 April
- 38 of 50 test questions correct
- Interface to document management missing
- Budget consumption: 62 %; schedule consumption: 55 %
- Data protection reviews the DPA until Friday

Provide exactly four sections:
1. Overall status in at most two sentences
2. Key figures as a table with value and assessment
3. Risks and open items as a list
4. Next decisions of the steering committee

Mark every assessment as an evaluation. Do not invent any cause,
deadline, responsible person or target figure. If necessary
information is missing, write "not specified". Ask at most two
follow-up questions after the report.
```

The prompt contains all required building blocks:

- **Role:** project controller
- **Goal and audience:** objective report for the steering committee
- **Context:** project name and all available notes
- **Task:** create status report
- **Constraints:** only supplied facts, no invented details
- **Output format:** four defined sections with table and lists
- **Uncertainty:** "not specified" and at most two follow-up questions

A verifiable output may for example calculate the 38/50 ratio as 76 %. But it must not claim that 76 % meets the quality target because no target was named. Likewise "four days later than planned" is permissible, an alleged cause for the delay is not.

## Reflection

A good business prompt does not only specify the desired answer but also limits and how to deal with knowledge gaps. For specialists and executives this makes it visible which statements are reliable and where information is missing before a decision.
