---
id: chapter-01
title: "01 · Physical AI"
sidebar_position: 1
description: Why intelligence changes when it has a body and real-world consequences.
---

# Physical AI

Physical AI joins computation with a body that must sense, decide and act in a changing world. Unlike a web model, a robot cannot pause gravity, undo a collision or assume that its input is complete.

## The physical contract

A useful robot is constrained by four budgets:

| Budget | Question |
| --- | --- |
| Time | Can the loop finish before the world changes? |
| Energy | Can the task finish on available power? |
| Uncertainty | How wrong can sensing and dynamics be? |
| Risk | What happens when the system is wrong? |

An agent observes state $o_t$, updates an internal belief $b_t$, selects action $a_t$, and receives the next observation. The important detail is that the action changes the future data distribution.

## Architecture: sense → model → plan → act

1. Sensors produce noisy measurements.
2. State estimation combines measurements over time.
3. Planning chooses a feasible trajectory.
4. Control converts that trajectory into actuator commands.
5. Monitoring checks whether reality still matches the plan.

Modern systems may learn several blocks, but the interfaces and safety limits still need to be explicit.

## Lab: latency budget

Create a spreadsheet for a delivery robot moving at 1 m/s. Add camera capture, inference, planning, network and actuator latency. Compute how far the robot travels before a new command takes effect.

```text
stopping margin = speed × total latency + braking distance
```

Change inference latency from 20 ms to 200 ms. The exercise reveals why model accuracy alone is not a deployment metric.

<details>
<summary>Knowledge check</summary>

**Why is embodiment more than attaching a model to a robot?** Because the body, sensors, timing, energy and environment shape both the information available and the consequences of every decision.

</details>

## Engineering takeaway

Define success as measurable behavior under stated physical conditions. Begin with a narrow task, a bounded environment and a recovery state.
