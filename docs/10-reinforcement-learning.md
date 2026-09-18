---
id: chapter-10
title: "10 · Reinforcement Learning"
sidebar_position: 10
description: Markov decision processes, rewards, exploration and policy evaluation.
---

# Reinforcement Learning

Reinforcement learning (RL) optimizes behavior through interaction. An agent observes a state, takes an action, receives a reward and learns a policy that maximizes expected return.

## MDP model

An MDP contains states, actions, transition dynamics, reward and a discount factor. In robotics the true state is often hidden, actions are continuous and unsafe exploration is expensive.

The objective is the expected discounted return:

```text
J(policy) = expected sum of discount^t × reward_t
```

## Reward design is specification design

A policy exploits the reward you write, not the intent you meant. Separate task success from shaping terms and log each component. Always test adversarial behaviors such as freezing, oscillating, colliding quickly or exploiting simulator artifacts.

## Practical workflow

1. Define observation and action bounds.
2. Create a scripted or classical baseline.
3. Train in parallel randomized environments.
4. Evaluate on unseen seeds and parameter ranges.
5. Add safety constraints outside the learned policy.

## Lab: reach a target

Train a two-joint arm to reach random goals. Compare sparse reward (success only) with shaped reward (distance reduction plus control penalty). Plot success rate and action energy on unseen targets.

```python
reward = -distance - 0.01 * action.square().sum()
reward += 10.0 if distance < 0.03 else 0.0
```

<details>
<summary>Knowledge check</summary>

**Why is training return not enough?** It can hide reward exploitation and says little about unseen conditions, constraint violations or deployment latency.

</details>

## Engineering takeaway

Evaluate distributions, not highlight episodes. Keep a non-learning safety layer between the policy and dangerous actuator commands.
