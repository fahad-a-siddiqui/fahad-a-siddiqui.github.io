---
title: "ADERS — Accident Detection & Emergency Response"
summary: "A three-part system that detects road accidents with phone sensors and dispatches the nearest hospital — my final year project."
role: "Android & Backend Developer — Final Year Project"
problem: "When a road accident happens, the gap before help arrives costs lives. Could a phone detect a crash on its own and get the nearest ambulance moving — without anyone having to call?"
outcome: "A working end-to-end proof of concept: sensor-based crash detection triggering real-time alerts to emergency contacts and a hospital-facing ambulance portal with live routing to the scene."
tech: ["Java", "Android (Java)", "Spring Boot", "Google Maps API", "REST APIs", "Device Sensors"]
cover: "./aders/routing.jpeg"
screenshots:
  - src: "./aders/dashboard.jpeg"
    alt: "Customer app dashboard — start a journey, saved places (home, work, university) and emergency-contact options."
  - src: "./aders/save-place.jpeg"
    alt: "Saving a frequently travelled address on a Google Map with a labelled pin."
  - src: "./aders/ambulance-portal.jpeg"
    alt: "Ambulance portal — an incoming accident alert with distance, pickup and drop points, and accept or decline actions."
  - src: "./aders/routing.jpeg"
    alt: "Live route drawn on Google Maps from the responding ambulance to the accident location, past nearby hospitals."
order: 5
draft: false
---

ADERS is my **final year project** — and, looking back, where my instinct for
building **whole systems** rather than single apps started. It's a **proof of
concept** in three parts that work together: a **customer app**, a hospital-facing
**ambulance portal**, and a **backend** tying them together.

The idea: when a road accident happens, every second before help arrives
matters — so could a phone detect the crash itself and get the nearest ambulance
moving, with no one having to make a call?

## How it works

- **Customer app.** From a dashboard, a rider saves the places they travel to
  regularly (home, work, university) and starts a journey.
- **Accident detection.** Once a journey begins, the app watches the phone's
  **motion sensors** for the signature of a crash.
- **Automatic alerting.** On a detected accident, the event and location are
  pushed out immediately — to the rider's **emergency contacts** and to the
  **ambulance portal** used by hospitals.
- **Nearest-hospital dispatch.** The portal alerts nearby hospitals with the
  incoming request and draws a **live route to the accident location on Google
  Maps** — an Uber-style accept / decline dispatch flow for responders.
