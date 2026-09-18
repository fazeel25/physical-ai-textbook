---
id: chapter-13
title: "13 · Isaac Sim & Isaac ROS"
sidebar_position: 13
description: GPU-accelerated simulation, perception and robotics pipelines.
---

# Isaac Sim & Isaac ROS

NVIDIA Isaac tools target GPU-accelerated simulation and perception. Isaac Sim supports USD-based scenes, synthetic data and parallel environments; Isaac ROS provides accelerated ROS 2 components for cameras, visual odometry, depth and inference.

## Design for acceleration

Acceleration helps only when the pipeline avoids unnecessary copies and synchronization. Track image encoding, memory location, tensor shape and timestamp across each component.

Use NITROS-compatible message transport where appropriate, but keep a portable baseline. An optimized pipeline should produce the same coordinate frames and semantics as the reference implementation.

## Simulation workflow

1. Import a robot and verify scale, joints and collision geometry.
2. Add calibrated cameras or lidar.
3. Bridge clock, joint state, TF and sensor topics to ROS 2.
4. Generate ground-truth labels and domain-randomized scenes.
5. Profile real-time factor and GPU memory before scaling.

## Lab: accelerated perception budget

Build a camera-to-detection pipeline. Measure capture, resize, inference and post-processing separately. Compare CPU and GPU versions using identical inputs.

Report median, p95 and worst-case latency—not only frames per second. Confirm output timestamps and frame IDs remain correct after optimization.

<details>
<summary>Knowledge check</summary>

**Why can a faster model still make the robot slower?** Conversion, memory transfer, batching or synchronization overhead can dominate end-to-end latency.

</details>

## Engineering takeaway

Profile the full data path. Optimize the bottleneck that affects control-loop deadlines, not the component with the most impressive benchmark.
