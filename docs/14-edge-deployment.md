---
id: chapter-14
title: "14 · Edge Deployment"
sidebar_position: 14
description: Real-time inference, model optimization, power and resilient operation.
---

# Edge Deployment

Edge deployment turns a research model into a process that starts reliably, meets deadlines and survives imperfect networks, heat and power. Deployment is a systems problem, not a file-conversion step.

## Deployment budgets

Specify limits before optimization:

| Resource | Metric |
| --- | --- |
| Compute | p95 inference latency and utilization |
| Memory | peak RAM/VRAM and fragmentation |
| Energy | average and peak power |
| Thermal | sustained clock and throttling |
| Network | offline behavior and bandwidth |

Quantization, pruning and smaller inputs trade accuracy for speed. Evaluate the optimized model on deployment data, not only a generic validation set.

## Resilient process design

- health endpoint and watchdog
- bounded queues with stale-data rejection
- structured logs with model and calibration versions
- safe state on timeout or crash
- signed artifacts and rollback

## Lab: package an inference service

Containerize a small perception model. Add `/health`, a startup self-test and a maximum input size. Simulate a disconnected network and confirm the robot retains a safe local mode.

```yaml
restart: unless-stopped
deploy:
  resources:
    limits:
      memory: 2G
```

<details>
<summary>Knowledge check</summary>

**Why report p95 latency?** Average latency hides slow frames that can violate control deadlines and cause unsafe behavior.

</details>

## Engineering takeaway

Ship models with observability, rollback and a defined degraded mode. A robot should fail predictably when compute or connectivity disappears.
