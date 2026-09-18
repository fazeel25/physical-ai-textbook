---
id: chapter-18
title: "18 · Capstone: Autonomous Mobile Manipulator"
sidebar_position: 18
description: Integrate navigation, perception, language, manipulation and safety.
---

# Capstone: Autonomous Mobile Manipulator

Build a robot that receives a natural-language request, navigates to a work area, identifies an object, moves it to a target and reports the outcome. The goal is not a perfect demo; it is a measurable, recoverable system.

## Mission

> “Bring the blue container from shelf B to the inspection table.”

The robot must clarify ambiguous requests, reject unreachable or unsafe tasks and stop when a person enters the manipulation zone.

## Reference architecture

| Layer | Responsibility |
| --- | --- |
| Mission manager | task state, timeout, retry and reporting |
| Language grounding | object, source and destination constraints |
| Navigation | localization, global/local planning and recovery |
| Perception | object detection, pose and uncertainty |
| Manipulation | grasp selection, IK, planning and force limits |
| Safety supervisor | independent stop and operating envelope |

Use actions for navigation and manipulation, topics for observations, services for short queries, and explicit timestamps/frame IDs everywhere.

## Milestones

1. **Digital model:** URDF, TF tree and validated limits.
2. **Simulation:** repeatable navigation and pick/place worlds.
3. **Classical baseline:** scripted task without learned components.
4. **Intelligence:** grounded language or learned perception behind a stable interface.
5. **Fault handling:** stale data, blocked path, missed grasp and human entry.
6. **Deployment:** bounded hardware trial with logs and emergency stop.

## Acceptance tests

- at least 90% success across 30 seeded simulation trials
- no collision or safety-zone violation
- p95 mission latency reported by task phase
- correct clarification on ambiguous instructions
- recovery or safe stop for every injected fault
- model, code, world, calibration and dataset versions included in logs

## Final report

Document the architecture, assumptions, hazard analysis, evaluation matrix, failures and next experiment. Include representative successes **and** failures. Record a demo only after the evidence package is complete.

<details>
<summary>Knowledge check</summary>

**What makes this a systems capstone?** Success depends on stable contracts and monitored transitions across language, perception, geometry, planning, control and safety—not one model.

</details>

## Where to go next

Revisit the weakest metric, design one controlled experiment and improve one interface at a time. That loop—model, simulate, measure, transfer, reflect—is the core practice of Physical AI.
