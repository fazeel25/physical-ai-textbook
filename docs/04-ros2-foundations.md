---
id: chapter-04
title: "04 · ROS 2 Foundations"
sidebar_position: 4
description: Nodes, topics, services, actions and quality of service.
---

# ROS 2 Foundations

ROS 2 is a communication and tooling framework for distributed robot software. It helps independent processes exchange typed messages while remaining replaceable and observable.

## Choose the right interface

| Primitive | Use when |
| --- | --- |
| Topic | Data streams continuously; late replies are not needed |
| Service | A short request needs one response |
| Action | A long task needs feedback, cancellation and a result |
| Parameter | Runtime configuration changes infrequently |

Quality of Service (QoS) policies control reliability, history, durability and deadlines. A camera stream may prefer best-effort delivery; a safety command should use reliable delivery.

## Minimal publisher

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class Status(Node):
    def __init__(self):
        super().__init__('status_node')
        self.pub = self.create_publisher(String, '/robot/status', 10)
        self.timer = self.create_timer(1.0, self.tick)

    def tick(self):
        self.pub.publish(String(data='ready'))

rclpy.init()
rclpy.spin(Status())
```

## Lab: observable component

Create a publisher, subscriber and launch file. Add parameters for rate and message text. Use `ros2 topic hz`, `ros2 topic echo` and `rqt_graph` to verify behavior and connections.

Write one failure test: stop the publisher and confirm that the subscriber detects stale data rather than reusing it forever.

<details>
<summary>Knowledge check</summary>

**Why use an action instead of a service for navigation?** Navigation takes time, benefits from progress feedback and must support cancellation.

</details>

## Engineering takeaway

Design message contracts before nodes. Include timestamps, frame IDs, units and validity so downstream components can reject stale or ambiguous data.
