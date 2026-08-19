# Exercise 07: Sketch a Controlled Agent Process

[← back to exercises overview](index.md)

**Phase:** 4
**Duration:** 45 minutes
**Prerequisite:** [Agents and Agentic Processes](../technik/13-agents.md)
**Format:** Individual work

## Task

An agent should read internal support tickets, search in approved knowledge articles and create an answer draft. Only a human may send the message. Available tools are `ticket_read`, `knowledge_search`, `draft_save` and `send_reply`.

Sketch goal, steps, decisions, tool rights, approval and stop conditions. Also decide whether `send_reply` should be part of the agent's toolset at all.

## Hints

- Distinguish read, write and external effect.
- Limit retries, time and search scope.
- Treat ticket text and knowledge articles as untrusted data.

## Solution

A controlled flow looks like this:

```text
Receive ticket ID
  → ticket_read (only assigned queue)
  → Check input for secrets and prompt injection
     → suspicious: mark and escalate to security / subject-matter team
     → clean: knowledge_search (only approved articles)
        → no reliable source: question draft or escalation
        → source available: generate answer draft with reference
           → check subject-matter rules
              → not passed: stop and inform subject-matter team
              → passed: draft_save
                 → human reviews and edits
                    → rejected: store feedback, do not send
                    → approved: separate sending system sends
```

The tool rights are limited as follows:

| Tool | Right and limit |
|------|-----------------|
| `ticket_read` | Only tickets of the service queue, no foreign tenants. |
| `knowledge_search` | Read-only, ACL-filtered, at most five hits per search. |
| `draft_save` | Only draft status, no change to the original ticket. |
| `send_reply` | Not in the agent toolset; called only by an approved workflow. |

`send_reply` should be removed. This way neither a mis-planning nor an indirect prompt injection can bypass the human approval. The approval dialog shows recipient, full text and sources.

Technical stop conditions are a maximum of three search runs, at most two minutes runtime, cost limit per ticket, missing permission, contradictory sources, detected injection and any non-validatable tool input. After a tool error exactly one retry is allowed; afterwards the system escalates with an error code.

In the audit log stand ticket ID, agent and prompt version, source IDs, tool calls, stop reason and human decision, but no unnecessary personal full texts.

## Reflection

Agent safety comes from process and tool limits, not from asking the model to be careful. Project managers decide on the autonomy level and must explicitly commission external effect, approval and safe stop.
