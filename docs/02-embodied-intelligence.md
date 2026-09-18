---
id: chapter-02
title: "02 · Embodied Intelligence"
sidebar_position: 2
description: Perception–action loops, morphology and active sensing.
---

# Embodied Intelligence

Embodied intelligence is the idea that cognition emerges from interaction among the controller, body and environment. The shape of a gripper, compliance of a joint and position of a camera can simplify a problem before software runs.

## Three coupled systems

- **Brain:** estimation, memory, prediction and policy
- **Body:** morphology, dynamics, sensors and actuators
- **World:** objects, people, surfaces, rules and disturbances

A good design distributes intelligence across all three. A passive funnel can align parts more reliably than a complex vision model; compliant fingers can tolerate pose error that rigid fingers cannot.

## Active perception

Perception is not only receiving images. A robot can move its camera, touch an object or change lighting to reduce uncertainty. This is active sensing: choose actions partly for the information they reveal.

If a grasp target is hidden, the robot might move sideways before committing. The immediate action makes no task progress, but it improves the belief state.

## Affordances

An affordance describes what an object or scene allows an agent to do: a handle affords pulling, a flat surface affords placement, and open floor affords navigation. Affordance models connect perception directly to possible action.

## Lab: redesign before retraining

Choose a failed pick-and-place task. Propose one change in each layer:

1. Controller: slow the final approach.
2. Body: add compliant fingertips.
3. World: add a fixture that constrains object pose.

Rank the changes by cost, reliability and maintenance. The best AI solution may be a mechanical or environmental change.

<details>
<summary>Knowledge check</summary>

**What is morphological computation?** Using the physical properties of the body to perform part of the computation needed for behavior.

</details>

## Engineering takeaway

Before adding model complexity, ask whether viewpoint, compliance, geometry or environment design can remove uncertainty.
