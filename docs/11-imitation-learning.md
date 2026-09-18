---
id: chapter-11
title: "11 · Imitation Learning"
sidebar_position: 11
description: Behavioral cloning, dataset shift and learning from demonstrations.
---

# Imitation Learning

Imitation learning turns demonstrations into a policy. It is attractive in robotics because humans can often show a task more easily than engineers can write its reward.

## Behavioral cloning

Given observation-action pairs, train a policy to predict the demonstrator's action:

```text
best parameters = parameters that minimize prediction loss
                  across all demonstrated observation-action pairs
```

The central problem is distribution shift. A small prediction error moves the robot into states absent from the demonstration set, where errors compound.

## Better data, not only more data

Capture corrections and recovery behavior, not just perfect trajectories. Annotate task phase, failures, operator identity, hardware version and latency. Balance common cases with safety-critical edge cases.

Interactive methods such as DAgger collect expert labels on states visited by the learned policy, reducing the gap between training and deployment distributions.

## Lab: diagnose demonstrations

Record or use an existing pick-and-place dataset. Build a report with:

- trajectory length and success
- gripper open/close timing
- object pose coverage
- recovery examples
- train/test separation by scene, not random frames

Train a simple policy and compare open-loop playback with closed-loop correction.

<details>
<summary>Knowledge check</summary>

**Why should adjacent video frames not be split randomly across train and test?** They are nearly identical, causing leakage and an unrealistically high evaluation score.

</details>

## Engineering takeaway

Demonstrations encode behavior and bias. Dataset design, coverage and labeling discipline are part of the robot specification.
