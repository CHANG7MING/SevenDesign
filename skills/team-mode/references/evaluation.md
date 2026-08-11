# Evaluate Team Mode

Read this reference only when the user asks to assess Team Mode's routing, Agent profiles, models, reasoning effort, cost, or practical value.

## Establish The Trial

1. Record the root task ID, repository or artifact baseline, acceptance checks, and installed role-to-model mapping.
2. Verify actual child runtime metadata from local traces: `agent_role`, `model`, `effort`, and effective sandbox. Configuration files alone do not prove runtime selection or isolation.
3. Treat a custom profile's TOML effort as authoritative unless the runtime trace proves an override. Passing `reasoning_effort` to `spawn_agent` does not by itself establish an A/B trial; use isolated CLI sessions or separately configured profiles when comparing effort levels.
4. Choose the smallest useful delegation. Keep a comparable slice in the main thread when the goal includes comparing delegation with direct work.
5. Give different Agents independent slices or one stable writer boundary. Do not create duplicate work solely to produce a benchmark.

## Measure What Happened

Use `python3 scripts/usage_by_model.py --task-id current --by-agent --by-session --json` after the relevant children have finished. Use its per-session time, terminal status, depth, and effective sandbox as trace evidence; continue to judge artifact quality and rework manually. Record:

- artifact correctness and requirement coverage;
- source completeness: whether a `fork_turns="none"` brief named every artifact needed for factual claims, and whether missing context caused placeholders, follow-up, or rework;
- dispatch completeness: whether `Outcome`, `Benefit`, `Sources`, `Scope`, `Checks`, `Stop when`, and `Return` were present before spawning;
- main-thread context avoided;
- briefing, waiting, inspection, and rework cost;
- time to a usable return, including interrupted sessions or sessions that consumed usage without a final report;
- wall-clock effect from useful parallelism;
- uncached input, cached input, output, reasoning output, and estimated Standard credits by session;
- permission or runtime differences from the configured profiles.
- transient failures, nested fan-out, partial shared artifacts, retries, and duplicated review.

Do not treat total input tokens as direct cost without separating cached input. Do not infer causality from daily or all-history aggregates. A child's opinion that its spawn was useful is not primary evidence; judge the returned artifact, the inspection needed, and task-scoped usage.

Likewise, a child recommending another Reviewer does not establish review value. If the main thread cannot provide a complete Reviewer packet with one concrete unresolved risk, exact evidence, passed checks, excluded revalidation, and a bounded stop condition, count the extra Reviewer as avoidable routing rather than mandatory assurance.

Treat `terminal_status=completed` only as evidence that the local trace contains `task_complete`; it does not prove correctness or a useful final report. Inspect interrupted or incomplete sessions before retrying, and record any usage that produced no usable return.

Compare `effective_sandbox` with the configured profile. When a parent live override produces `danger-full-access` for an Explorer or Reviewer, their read-only boundary is instructional rather than OS-enforced; do not count that route as security isolation.

Attribute missing facts before blaming the model. When a child correctly reports that required evidence was not present in a `fork_turns="none"` brief, count the omission as briefing cost; do not treat invented completion as the preferred behavior.

When a child fails, inspect the shared target before counting the attempt as lost or retrying. Record recoverable artifacts separately from the missing final report. Count child-created descendants as part of the initiating route, and flag any fan-out that the parent did not explicitly authorize.

## Interpret The Roles

- Keep `Explorer` on a lower-cost model when it reliably returns compact evidence and prevents noisy discovery from entering the main context. Remove it from short tasks whose sources the main thread must inspect anyway.
- Use `Executor` for both small and substantial bounded work when the main thread has fixed unresolved decisions and deterministic checks exist. Measure whether Luna High enables useful multi-file execution with little rework; do not assume Max is more reliable without completed-return evidence.
- Prefer improving decomposition and launching independent Executor slices in parallel before moving bounded implementation back into the main thread.
- Use one `Reviewer` for a concrete unresolved risk. After substantial code changes, evaluate the three-lens Simplify review as one coordinated route: code quality, performance, and reuse.

Evaluate an Executor inside the real controlled workflow, including the candidate, main-thread inspection, and bounded repair. Strong main-thread acceptance can close observable implementation gaps cheaply. It cannot reliably compensate for a plausible but product-weaker architecture that passes shallow checks, so keep novel architecture, weak or visual oracles, export/compiler behavior, and high-consequence rollback or security judgment in the main thread.

Prefer changing routing thresholds or brief quality before upgrading every role's model or reasoning effort. Change a profile only when repeated task-scoped evidence shows a role cannot meet its boundary.

## Report The Result

For each spawn, record role, runtime model and effort, purpose, outcome quality, rework, task-scoped usage, and keep/change verdict. Separate confirmed findings from one-off impressions and note that local logs omit unavailable or ephemeral sessions.
