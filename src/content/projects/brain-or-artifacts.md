---
title: Brain signals or artifacts?
year: "2026–27"
status: active
kind: research
tracks: [EEG, EMG, ML]
summary: Checking whether low-cost EEG systems are really decoding the brain, or picking up eye movements, facial muscles and head motion instead.
---

## The question

When a cheap EEG system classifies motor imagery well, is it reading brain activity, or is it picking up artifacts like eye movements, facial muscle activity and head motion?

## The plan

- Record EEG alongside EOG (eye movements), facial EMG and head motion
- Compare EEG-only, artifact-only and combined models
- Repeat the evaluation across recording sessions

## Example

1. Run a motor imagery classifier.
2. Test whether facial EMG alone can predict the class.
3. Remove frontal electrodes and contaminated trials.
4. Check whether the claimed EEG performance still holds.

## What it produces

- Artifact-only baselines
- Channel and frequency ablations
- Same-session versus cross-session results
- A validation checklist for future club projects

Background: [a review of EEG artifacts and how to handle them](https://pmc.ncbi.nlm.nih.gov/articles/PMC8433804/).

## Possible alternative: how far can low-cost EEG and EMG go?

This project may be swapped for a related question: what's roughly the best performance we can get on a given task with our own EEG and EMG hardware?

- Compare three common BCI paradigms (SSVEP, P300 and motor imagery) using 1, 2, 4 and 8 channels
- Limit per-person calibration to 0, 1, 5 and 10 minutes
- Compare classical methods against small neural networks

That version would use public BCI datasets, such as those available through the MOABB benchmark.
