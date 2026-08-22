# SevenDesign Benchmarks

This suite checks whether Component Intelligence can make product-specific source decisions before implementation.

## Run

```bash
python3 benchmarks/run-benchmarks.py
python3 benchmarks/run-benchmarks.py --json --output benchmarks/reports/latest.json
python3 benchmarks/run-benchmarks.py --case ai-saas-hero-react
```

The runner is deterministic and local. It compares the selector output with an expected decision envelope; it does not require a hosted model or a full catalog load.

## Case Contract

Each file in `cases/` contains:

- `id` and `category`
- a small product `brief`
- explicit framework evidence
- expected `archetype`
- expected foundation, behavior, and expression owners
- rejection keywords that must appear in the explanation
- context and registry budget expectations

Expected envelopes allow source fallbacks and multiple valid candidates. They do not require an exact sentence, so the benchmark measures decision quality rather than memorized wording.

## Score

The report separates hard failures from weighted dimensions:

- product and framework understanding: 15%
- component ownership and source selection: 25%
- rejected alternatives and rationale: 15%
- visual result: reported as not-run until a fixture has screenshot evidence
- responsive, accessibility, and reduced-motion behavior: 10%
- context efficiency and provenance: 10%

The benchmark is a decision benchmark. A 9.5/10 product quality score additionally requires the Visual QA loop to run against a runnable fixture.
