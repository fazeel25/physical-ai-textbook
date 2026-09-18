---
id: chapter-17
title: "17 · Safety & Evaluation"
sidebar_position: 17
description: Hazards, layered controls, scenario coverage and evidence.
---

# Safety & Evaluation

Safety is the disciplined reduction of risk across design, implementation, operation and maintenance. It cannot be added after the policy is trained.

## From hazard to control

For each hazard document severity, exposure, controllability and the evidence supporting mitigations. Prefer controls in this order:

1. eliminate the hazard by design
2. reduce energy, speed or reachable space
3. add engineered guards and interlocks
4. add monitored software limits
5. provide procedures, training and warnings

Do not rely on a learned model as the only safety control.

## Evaluation matrix

Evaluate task success together with:

- collision and near-miss rate
- minimum human distance
- force, speed and stopping distance
- timeout and intervention rate
- performance by lighting, object, user and location subgroup
- recovery from sensor, compute and network faults

## Lab: safety case fragment

Choose one capstone hazard, such as unexpected human entry during manipulation. Write:

- **Claim:** the robot enters a safe stop before contact.
- **Argument:** independent detection and motion limits bound risk.
- **Evidence:** stopping-distance test across speed, payload and sensor-latency ranges.

Run fault injection in simulation, then repeat bounded tests on hardware with an emergency stop and observer.

<details>
<summary>Knowledge check</summary>

**Why is “zero failures in 100 runs” incomplete?** It does not state scenario coverage, failure severity, statistical confidence or behavior outside the tested distribution.

</details>

## Engineering takeaway

Build an evidence trail: requirements, hazards, mitigations, tests, results, residual risk and operational limits. Safety is a maintained system property.
