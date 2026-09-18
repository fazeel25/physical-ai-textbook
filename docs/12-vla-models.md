---
id: chapter-12
title: "12 · Vision-Language-Action Models"
sidebar_position: 12
description: Grounding language and vision into robot actions.
---

# Vision-Language-Action Models

Vision-Language-Action (VLA) models connect visual observations and natural-language instructions to robot actions. They promise broader task generalization, but they do not remove the need for geometry, control or safety.

## A layered system

Use foundation models where ambiguity is high and verified controllers where precision is required:

1. **Language layer:** interpret intent and constraints.
2. **Perception layer:** ground named objects and regions.
3. **Skill layer:** select a known navigation or manipulation skill.
4. **Control layer:** execute trajectories with limits.
5. **Monitor:** confirm preconditions, progress and outcome.

This architecture lets a model say “place the red cup on the tray” while a motion planner remains responsible for collision-free execution.

## Action representations

Models may output discrete skill tokens, end-effector deltas, joint targets or trajectories. Higher-level actions are easier to constrain; low-level actions offer flexibility but require more data and stronger safety controls.

## Lab: grounded instruction benchmark

Create 30 tabletop instructions spanning color, spatial relation, sequence and refusal. For each case record object grounding, selected skill, execution success and whether the monitor detected failure.

Include ambiguous commands such as “put it there.” A good system should ask for clarification rather than guess.

<details>
<summary>Knowledge check</summary>

**Why not send language-model output directly to motors?** Generated actions can be infeasible, unsafe or inconsistent with current geometry and actuator limits.

</details>

## Engineering takeaway

Treat a VLA model as one component in a constrained autonomy stack. Measure grounding, planning and execution separately so failures remain diagnosable.
