---
title: "CREW — Field Companion App"
summary: "The employee-facing companion to ProCon, on Android and iOS — crews see schedules, sign safety docs and request time off."
role: "Senior Software Engineer — Kotlin Multiplatform migration lead"
problem: "CREW shipped as two separate native codebases — Android and iOS — so every feature had to be built and maintained twice."
tech: ["Kotlin Multiplatform", "Kotlin", "Swift", "Android", "iOS"]
cover: "./crew/crew-1.jpg"
screenshots:
  - src: "./crew/crew-1.jpg"
    alt: "Schedule list — today's assigned jobs with location, time and a check-in action."
  - src: "./crew/crew-3.jpg"
    alt: "Safety toolbox talks scoped to a jobsite beacon (Gang Box), signed on site before work starts."
  - src: "./crew/crew-2.jpg"
    alt: "Creating a schedule — employee, job, date, hours and a portal-to-portal option."
  - src: "./crew/crew-4.jpg"
    alt: "Requesting time off with a reason, dates and an optional note."
order: 2
draft: false
---

CREW is the employee-facing companion to [ProCon](/projects/procon), available on
both Android and iOS. Out on the jobsite, crew members use it to see their
assigned schedules and check into jobs, read and digitally sign safety toolbox
talks, and request time off — a small, focused slice of the platform for the
people in the field.

The headline work here was **leading its migration from two separate native
codebases — native Android and native iOS — to Kotlin Multiplatform**, moving the
shared business logic into one common layer so both apps stay in lockstep instead
of being built and maintained twice.
