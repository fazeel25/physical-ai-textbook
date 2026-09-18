---
id: chapter-09
title: "09 · Digital Twins & Synthetic Data"
sidebar_position: 9
description: Living models, scenario generation and sim-to-real validation.
---

# Digital Twins & Synthetic Data

A digital twin is a maintained digital representation of a physical system connected through data, calibration and version history. It is more than a 3D model: it predicts behavior well enough to support a decision.

## Levels of fidelity

| Level | Useful for |
| --- | --- |
| Geometry | reachability, layout and collision checks |
| Kinematics | motion planning and workspace analysis |
| Dynamics | control, payload and energy studies |
| Sensor | perception and localization evaluation |
| Operational | throughput, maintenance and fleet decisions |

Choose fidelity by decision. A layout study may not need motor-temperature physics; a controller test does.

## Synthetic data pipeline

Define a scenario distribution, render sensor observations and perfect labels, train a model, then validate against a held-out real dataset. The real set is essential: synthetic accuracy cannot prove real-world performance.

Track provenance for every sample: asset version, scene seed, renderer settings, label generator and split membership.

## Lab: coverage dashboard

Generate 500 detection scenes. Bin them by distance, occlusion, lighting and object pose. Plot model accuracy per bin instead of one average. Add real examples to the same dashboard and identify coverage gaps.

```text
coverage gap = deployment frequency × failure rate × consequence
```

<details>
<summary>Knowledge check</summary>

**When is a digital twin “good enough”?** When its error is bounded for the decision it supports, not when every physical detail is reproduced.

</details>

## Engineering takeaway

Treat assets, parameters and datasets as versioned software. A twin drifts out of usefulness when the physical system changes without recalibration.
