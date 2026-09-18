---
id: chapter-06
title: "06 · TF & Kinematics"
sidebar_position: 6
description: Coordinate frames, transforms, forward kinematics and inverse problems.
---

# TF & Kinematics

Robotics becomes manageable when every quantity states **where** and **when** it is valid. TF maintains a time-aware tree of coordinate frames so sensors, planners and controllers share one spatial language.

## Rigid transforms

A transform combines rotation `R` and translation `p`:

```text
T = [ R  p ]      x_A = T_A_B × x_B
    [ 0  1 ]
```

Order matters. Rotating then translating is not generally the same as translating then rotating.

## Forward and inverse kinematics

- **Forward kinematics:** joint values → end-effector pose
- **Inverse kinematics:** desired pose → one or more joint solutions

Inverse kinematics may have no solution, many solutions or a numerically unstable solution near a singularity. Solvers therefore need joint limits, seed states and timeout behavior.

## TF rules

1. Keep one connected tree; do not publish competing parents.
2. Publish fixed relationships as static transforms.
3. Timestamp dynamic transforms with measurement time.
4. Use clear conventions such as `map → odom → base_link → sensor`.

## Lab: debug a frame mismatch

Publish a mock camera detection in `camera_optical_frame`. Transform it into `base_link`, visualize both in RViz and intentionally introduce a 90° rotation error. Use `tf2_echo` and the frame graph to find the mistake.

```bash
ros2 run tf2_ros tf2_echo base_link camera_optical_frame
```

<details>
<summary>Knowledge check</summary>

**Why is `map → odom → base_link` split useful?** `odom` stays locally smooth while `map` can correct global drift without creating discontinuous wheel-control commands.

</details>

## Engineering takeaway

Treat frame names, orientation conventions and timestamps as API contracts. Most “bad perception” bugs are geometry or timing bugs first.
