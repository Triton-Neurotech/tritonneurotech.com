---
title: sEMG-controlled soft exosuit
year: "2026–27"
status: active
kind: build
tracks: [EMG, Hardware]
summary: A low-cost, fabric-based glove that helps move the fingers and wrist for rehabilitation, triggered by muscle signals from the forearm.
---

## The idea

A soft exosuit that assists finger and wrist movement using pneumatic or cable-driven actuators instead of rigid motors. Surface EMG (sEMG) electrodes on the forearm detect when the wearer is trying to move, and trigger assisted movement: grasping, extending, and flexing or extending the wrist.

Beyond rehab, the same system could be pitched as a way to help people learn new movements. See [Human Operator](https://humanoperator.org/) for that idea.

Everything is built from low-cost parts: silicone and fabric actuators, small air pumps or micro-servos with tendons, an Arduino-class microcontroller and consumer sEMG sensors.

## Example task

A glove that helps extend the fingers of a simulated stroke-affected hand, triggered by sEMG from the forearm extensors. The team compares unassisted movement, timed assistance and sEMG-triggered assistance.

## How we'll measure it

- sEMG classification accuracy (intent detected versus no intent)
- Range of motion with and without assistance
- Delay between the muscle signal and the actuator moving
- Comfort and wearability feedback from volunteers
- Cost per unit

## References

- [Soft robotic hand exoskeleton with enhanced PneuNet-type pneumatic actuators for rehabilitation and movement assistance](https://onlinelibrary.wiley.com/doi/10.1155/2024/5815358)
- [Scientists develop soft robotic exosuit to aid wrist movement](https://knowridge.com/2025/03/scientists-develop-soft-robotic-exosuit-to-aid-wrist-movement/)
