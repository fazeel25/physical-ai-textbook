---
id: chapter-16
title: "16 · Human-Robot Interaction"
sidebar_position: 16
description: Legibility, shared control, trust calibration and inclusive design.
---

# Human-Robot Interaction

Human-robot interaction (HRI) studies how people understand, influence and work with autonomous machines. Safe physical behavior is necessary, but people must also predict what the robot will do next.

## Legible behavior

A robot can signal intent through motion, lights, sound, displays and spatial positioning. These cues should be consistent and tested across cultures, languages, hearing and vision abilities.

Trust should be calibrated, not maximized. Over-trust causes misuse; under-trust prevents useful adoption. Communicate capability boundaries and uncertainty without overwhelming the operator.

## Shared autonomy

Shared control blends human goals with autonomous stabilization or planning. The system should expose:

- who currently has authority
- what action is being executed
- how to pause or override it
- what information caused a recommendation
- whether the robot understood the request

## Lab: intent communication study

Create three navigation behaviors for a robot approaching a shared doorway: no cue, light cue and trajectory-plus-light cue. Ask participants to predict whether the robot will yield or pass.

Measure prediction accuracy, response time, perceived safety and qualitative confusion. Do not collect personally identifying data without consent and a clear retention policy.

<details>
<summary>Knowledge check</summary>

**Why is maximum trust a poor goal?** People should rely on the robot only within demonstrated capability and remain attentive where uncertainty or consequences are high.

</details>

## Engineering takeaway

Make intent visible and recovery obvious. Evaluate understanding with representative users, not only the engineers who designed the interface.
