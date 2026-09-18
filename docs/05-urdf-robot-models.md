---
id: chapter-05
title: "05 · URDF & Robot Models"
sidebar_position: 5
description: Links, joints, collision geometry, inertia and reusable Xacro.
---

# URDF & Robot Models

A robot description is an executable contract between mechanical design, simulation, planning and visualization. URDF represents a robot as links connected by joints.

## Visual is not physical

Each link can contain:

- **Visual geometry** for rendering
- **Collision geometry** for contact and planning
- **Inertial properties** for dynamics

High-resolution visual meshes are often poor collision meshes. Use simple convex geometry for stable, fast simulation and planning.

## Joint example

```xml
<joint name="shoulder_joint" type="revolute">
  <parent link="base_link"/>
  <child link="upper_arm"/>
  <origin xyz="0 0 0.42" rpy="0 0 0"/>
  <axis xyz="0 1 0"/>
  <limit lower="-1.57" upper="1.57" effort="45" velocity="1.2"/>
</joint>
```

Xacro adds variables, macros and conditionals so repeated structures and simulation-specific plugins stay maintainable.

## Inertia sanity check

Inertial values must be positive and physically plausible. Extremely small mass, incorrect units or an inertia tensor inconsistent with geometry can make a simulator explode.

## Lab: model a two-link arm

1. Create base, upper-arm and forearm links.
2. Add two revolute joints with safe limits.
3. Use simple box/cylinder collision geometry.
4. Visualize in RViz and move joints with `joint_state_publisher_gui`.
5. Confirm there are no disconnected links or invalid transforms.

<details>
<summary>Knowledge check</summary>

**Why separate visual and collision geometry?** Rendering rewards detail; collision and physics reward simple, stable geometry.

</details>

## Engineering takeaway

Version the model with the hardware. A small origin or unit change can invalidate calibration, motion plans and datasets.
