---
id: chapter-07
title: "07 · Gazebo Simulation"
sidebar_position: 7
description: Physics-based robot experiments, worlds, sensors and repeatable tests.
---

# Gazebo Simulation

Gazebo lets a ROS 2 system interact with gravity, contact, sensors and actuators before hardware is available. Its value is not photorealism; it is controlled, repeatable experimentation.

## Build a trustworthy world

Start with the simplest world that exercises the behavior. Lock down:

- physics step size and real-time factor
- friction and restitution
- sensor rate, field of view and noise
- actuator limits and controller rate
- random seed and initial pose

A simulator is a model, not truth. Record every assumption that can affect transfer.

## Contact stability

Unrealistic mass ratios, thin collision geometry and large time steps often create jitter. Diagnose dynamics in this order: units, inertial values, collision shapes, joint limits, controller gains, then physics solver settings.

## Lab: regression world

Create a small warehouse world containing a ramp, narrow doorway, movable box and dynamic pedestrian obstacle. Run a navigation mission ten times with fixed seeds.

Measure:

1. mission success rate
2. time to goal
3. minimum obstacle distance
4. recovery count
5. peak control effort

Store the launch command and parameters with the results so a future code change can be compared fairly.

```bash
ros2 launch my_robot_sim warehouse.launch.py seed:=42 headless:=true
```

<details>
<summary>Knowledge check</summary>

**What makes a simulation experiment reproducible?** Pinned models, explicit parameters, controlled seeds, versioned worlds and recorded metrics.

</details>

## Engineering takeaway

Use simulation as automated evidence. A beautiful world without metrics is a demo; a minimal world that catches regressions is infrastructure.
