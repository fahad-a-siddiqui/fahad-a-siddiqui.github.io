---
# Seeded from documented work in CLAUDE.md §5. Refine copy / add screenshots.
title: "NAV → SQL Migration Workflow"
summary: "A repeatable strangler-fig workflow that migrated ~200 ERP endpoints off Dynamics NAV."
role: "Author & lead engineer"
problem: "Migrating a large Microsoft Dynamics NAV surface to SQL endpoint-by-endpoint was slow, risky, and inconsistent across engineers."
outcome: "Cut per-endpoint migration time ~83% (≈3h → ≈30m) across ~200 endpoints — roughly 500 engineer-hours saved."
tech: ["MS Dynamics 365 / NAV", "MSSQL", "Node.js", "AL", "Feature Flags"]
coverLabel: "NAV → SQL"
aiNative: true
order: 6
draft: false
---

The ERP ran on Microsoft Dynamics NAV, and moving its surface onto SQL one
endpoint at a time was slow and error-prone — every engineer solved it
differently, and regressions were easy to miss.

I authored a repeatable migration workflow built on the **strangler-fig**
pattern: NAV baselines were locked, dual-service resolvers ran the old and new
implementations side by side behind feature flags, and an automated comparison
step flagged any regression between them before a cutover. Once an endpoint's
new path matched the baseline, the flag flipped and the NAV path was retired.

Encoding the process — rather than leaving it to individual judgment — cut
per-endpoint migration time by about **83%** (≈3 hours down to ≈30 minutes)
across roughly **200 endpoints**, saving on the order of **500 engineer-hours**
while making each migration safer and auditable.
