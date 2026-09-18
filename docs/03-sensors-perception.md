---
id: chapter-03
title: "03 · Sensors & Perception"
sidebar_position: 3
description: Cameras, depth, lidar, IMUs and probabilistic state estimation.
---

# Sensors & Perception

Robots never observe the world directly. They receive measurements shaped by calibration, noise, occlusion, lighting and sampling rate. Perception converts those signals into task-relevant state with uncertainty attached.

## Sensor trade-offs

| Sensor | Strength | Common failure |
| --- | --- | --- |
| RGB camera | Rich appearance | Lighting and scale ambiguity |
| Depth camera | Dense local geometry | Reflective or outdoor surfaces |
| Lidar | Accurate range | Sparse semantics and cost |
| IMU | Fast motion signal | Bias drift |
| Encoders | Joint/wheel motion | Slip and backlash |
| Force/torque | Contact state | Noise and overload |

## Calibration and fusion

Intrinsic calibration describes a sensor's internal geometry. Extrinsic calibration describes its pose relative to another frame. A fusion pipeline is only as trustworthy as these transforms and timestamps.

For a scalar estimate, a Kalman-style update balances prior and measurement uncertainty:

```text
K = P_prior / (P_prior + R)
x = x_prior + K × (measurement - x_prior)
```

Lower measurement noise $R$ gives the sensor more influence; lower prior uncertainty $P^-$ gives the model more influence.

## Lab: measure drift

Record 60 seconds of stationary IMU data. Plot acceleration and angular velocity. Estimate mean bias and standard deviation, then integrate angular velocity to observe how a small bias becomes large orientation drift.

```python
bias = gyro.mean(axis=0)
corrected = gyro - bias
```

<details>
<summary>Knowledge check</summary>

**Why is timestamp alignment critical?** Measurements from different times describe different physical states; fusing them as simultaneous creates systematic error.

</details>

## Engineering takeaway

Log raw measurements, calibration versions and timestamps. A perception result without uncertainty and provenance is hard to debug or trust.
