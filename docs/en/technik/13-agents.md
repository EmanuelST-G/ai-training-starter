# Agents and Agentic Processes

[← back to topic list](../themenliste.md)

## Learning Objective

Design a simple agent process as a flow diagram, deliberately specifying tools, memory, approvals and stop conditions.

## Chatbot, Workflow, or Agent?

Not every application that uses a language model is an agent. The deciding factor is who determines the next step and whether the system is allowed to act outside of producing an answer.

| Form | Flow | Decision about next step | Example |
|------|------|--------------------------|---------|
| Chatbot | Question → answer | User enters the next question | FAQ chat |
| Workflow | Defined steps and rules | Application or process logic | Check invoice → post it |
| Agent | Goal → plan → tool call → observation → next step | Model decides within set boundaries | Research with follow-up questions and sources |

An agent is therefore not a synonym for "good AI". It is an orchestration of model, tools, context and control logic.

## Tools and Function Calling

Via [function calling](../glossar.md#function-calling) a model can request a structured [tool call](../glossar.md#tool-aufruf). The application executes the function and sends the result back. The model thereby gets no direct database rights and cannot autonomously execute arbitrary commands.

A tool should have a clear purpose, typed inputs and an understandable result. At minimum, the following must be clarified for each tool:

- When may the agent use it?
- Which identity and permissions apply?
- Is the action read-only or does it modify data?
- How are errors, timeouts and retries handled?
- Which inputs must be approved before any external effect?

Typical capabilities are:

- Search information or read records,
- Call an API and take over structured results,
- Create a document or draft,
- Trigger an action such as an order, change or message.

For writing or irreversible tools, small explicit interfaces are safer than a general "Execute arbitrary code".

## The Agent Loop

A controlled agent process can look like this:

```text
Receive goal
    │
    ▼
Check context ──► Create plan
    │                  │
    │                  ▼
    │              Select tool
    │                  │
    │                  ▼
    ◄──────── Check result
    │                  │
    ├── Goal reached? ── Yes ──► Answer / result
    │
    └── No ──► Re-plan or stop
```

The application must technically enforce the maximum number of loops, allowed tools and time per step. A prompt with "work until done" is not a sufficient limitation.

## Single-Agent and Multi-Agent Systems

A **single agent** performs the task with one model and one toolset. That is usually easier to understand, test and operate. A **multi-agent system** splits the task into roles, e.g. research, subject-matter review and summary.

Multi-agent systems can work in parallel and use different contexts. But they bring additional handovers, costs, error sources and questions of responsibility. Roles, input formats and acceptance criteria must therefore be clearly defined. Delegation only makes sense when the subtasks are truly independent or require different expertise.

## Memory and Context

The context contains information for the current step: user goal, tool results so far, rules and relevant documents. A too-large context makes prioritisation harder and increases cost.

[Memory](../glossar.md#memory) stores information across multiple steps or sessions. Purpose, lifetime and deletion rules must be clear. An agent should not save every conversation as permanent memory without review. Particularly sensitive data, credentials and incidental model assumptions do not belong in persistent memory.

Practical separation:

- **Short-term context:** current request and work not yet completed
- **Working memory:** intermediate results, observations and open items for this run
- **Long-term storage:** deliberately selected, verified information across runs

## Planning and Re-Plan

In the [plan](../glossar.md#plan) a goal is broken down into verifiable steps. Each step should have an expected outcome so the agent can recognise whether it may continue. A good plan is a hypothesis, not a guarantee.

A [re-plan](../glossar.md#re-plan) is needed when a tool is unavailable, data is contradictory or an intermediate result changes the goal. The agent may not simply forget the original constraint. Changes to the goal, permissions or budget require new approval.

## Levels of Autonomy

| Level | Behaviour | Suitable for | Required control |
|-------|-----------|--------------|------------------|
| Assistance | Agent proposes steps and drafts | Research, draft texts | Human reviews everything before use |
| Approved | Agent works ahead, actions confirmed | Ticket or order preparation | Approval before any external effect |
| Restricted | Agent may execute defined, reversible actions | Status updates, internal queries | Roles, rules, logs and spot checks |
| Fully autonomous | Agent acts within a defined frame | Tightly bounded, well-measurable processes | Kill switch, budget, monitoring and escalation |

Autonomy is a process decision, not a pure model property. It should rise or fall with the damage potential of the action.

## Approval Steps

Approvals should be tied to concrete risks. A person confirms for example recipient, amount, records and proposed change instead of seeing only an incomprehensible "continue agent" button. The approval must happen before the tool call and be traceable in the audit log.

Useful constraints:

- Allow read tools by default, block write tools by default.
- Technically restrict allowed targets, amount limits and data scopes.
- Make actions idempotent so a timeout does not cause a double booking.
- For high risks require a second person or a four-eyes principle.

## Error Handling and Stopping

Agents need normal error paths. On a tool error the agent should try a limited number of retries, classify the problem and then either choose a safe alternative or stop. Retries without new information obscure errors and drive up cost.

Stop conditions include:

- Time, token or cost budget exceeded
- maximum number of tool calls reached
- permission missing or data source unreachable
- result contradicts a domain rule
- required user approval remains absent
- signs of prompt injection or unexpected tool input

A stop with understandable reasoning is a quality feature, not a failure.

## Agentic Workflows or Classic Automation?

Classic automation is better when rules are fully known, inputs are stable and decisions are deterministic. An agent is more worthwhile for unstructured information, changing subtasks and necessary linguistic interaction.

Not every process needs an agent:

- A fixed data transfer usually needs a pipeline.
- An approval with three clear rules needs a workflow.
- A chatbot with answers from a vetted FAQ does not necessarily need planning.
- An agent is no replacement for missing process ownership or poor master data.

## Practical Task: Sketch a Process

!!! tip "Practical task"
    Pick a small procedure, e.g. "answer support ticket with knowledge article". Then draw at least goal, context, tools, decision points and stop.

A possible result:

```text
Read ticket
   │
   ├── Knowledge search ──► matching articles found?
   │                              │
   │                              ├── No ──► escalate to subject-matter team
   │                              │
   │                              └── Yes ──► draft answer
   │                                          │
   │                                          ▼
   │                                      Human approves?
   │                                          │
   │                              No ──────────┴────────── Yes
   │                              revise                   send
```

Also mark in the sketch which data may be read, which tool has an external effect, and when the agent safely stops.

## Glossary Cross-References

- [Agents](../glossar.md#agents)
- [Function Calling](../glossar.md#function-calling)
- [Tool Call](../glossar.md#tool-aufruf)
- [Memory](../glossar.md#memory)
- [Plan](../glossar.md#plan)
- [Re-Plan](../glossar.md#re-plan)
- [Human-in-the-Loop](../glossar.md#human-in-the-loop)
- [Branching](../glossar.md#branching)
