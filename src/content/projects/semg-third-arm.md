---
title: sEMG-based third arm
year: "2026–27"
status: active
kind: build
tracks: [EMG, ML, Hardware]
summary: Reconstructing the full 3D pose of the hand from forearm EMG, then using it to control an extra robotic limb, not just a prosthetic.
---

## The idea

This project builds on the EMG-to-hand-pose work from last year's ASL, prosthetics and piano teams. The question: using MindRove EMG sensors placed away from the wrist, can we reconstruct a continuous 3D hand pose, rather than only classifying a small set of gestures?

The team will then use that control for a third limb: an extra robotic arm worn alongside your own two, rather than only a replacement prosthetic. For background, see this [research paper on supernumerary robotic limbs](https://dl.acm.org/doi/10.1145/3544548.3581184).

## What the team will do

- Collect synchronized EMG and hand-pose data
- Train models that reconstruct individual joint angles from EMG
- Test how well they hold up across recording sessions and electrode placements

Later this year or in 2027–28, this can grow into real-time control of a fully dynamic prosthetic hand.

## How we'll measure it

- Dropped or crushed objects
- Grip-force error
- Task completion time
- Performance without visual feedback
- Discrete versus proportional EMG control
