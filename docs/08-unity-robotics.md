---
id: chapter-08
title: "08 · Unity for Robotics"
sidebar_position: 8
description: Interactive environments, human studies and visual realism.
---

# Unity for Robotics

Unity is useful when interaction design, visual variation or human participation matters. It can complement a physics simulator by producing diverse scenes, intuitive interfaces and controlled human-robot studies.

## When to choose Unity

- photorealistic or stylized scene generation
- VR/AR teleoperation and demonstrations
- human navigation or collaboration studies
- procedural object and lighting variation
- high-quality synthetic camera data

Keep the robot's authoritative state in one system. When bridging Unity and ROS 2, define coordinate conventions, units, clock ownership and message rates explicitly.

## Sim-to-real visual gap

Randomizing texture alone is not enough. Vary camera exposure, lighting direction, object geometry, clutter, sensor artifacts and motion. Preserve physically meaningful correlations; unrealistic randomization can teach shortcuts that never occur in reality.

## Lab: perception stress test

Build one tabletop scene and create a parameter sweep across:

1. five lighting intensities
2. three camera angles
3. four backgrounds
4. two clutter levels

Export images and ground-truth object poses. Evaluate the same detector across the matrix and identify where confidence falls fastest.

<details>
<summary>Knowledge check</summary>

**Why must coordinate conventions be documented at the bridge?** Unity and robotics stacks may use different handedness, axes and units; silent conversion mistakes create mirrored or scaled behavior.

</details>

## Engineering takeaway

Use visual fidelity to answer a specific question. More realistic rendering only helps when it models variation that matters to the deployed sensor and task.
