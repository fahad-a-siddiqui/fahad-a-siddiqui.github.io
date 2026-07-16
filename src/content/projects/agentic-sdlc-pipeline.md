---
# Seeded from documented work in CLAUDE.md §5. Refine copy / add screenshots.
title: "Agent-Executable SDLC Pipeline"
summary: "A gated, seven-stage pipeline that encodes how a team ships software — from raw requirement to released ticket."
role: "Designer & pilot lead"
problem: "The path from a client requirement to a released ticket lived in people's heads — inconsistent, hard to hand off, and hard to automate reliably."
outcome: "Piloted with peer engineers; a thin orchestrator drives seven gated stages with a skill taxonomy that separates sequencing from craft."
tech: ["AI-native / Agentic Workflows", "Python", "Orchestration", "Prompt/Skill Design"]
coverLabel: "SDLC Pipeline"
aiNative: true
order: 7
draft: false
---

Shipping software involves a long chain of judgment calls — intake, analysis,
design, implementation, review, validation, release — that usually lives in
individual engineers' heads. That makes it inconsistent and nearly impossible
to automate safely.

I designed an **agent-executable SDLC pipeline**: seven gated stages
(intake → analysis → design → implementation → review → validation → release),
each with an explicit gate that must pass before the next begins. A **thin
orchestrator** sequences the stages, while a deliberate **skill taxonomy**
separates *sequencing* (what happens next) from *craft* (how each step is done)
— so the same pipeline can drive work across very different stacks.

I later extended it **upstream into discovery**, converting raw client
requirements into developer-ready, traceable tickets, and **piloted the pipeline
with peer engineers** to validate it on real work.
