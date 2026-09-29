---
title: Do brain-like learning rules make brain-like vision models?
year: "2026–27"
status: active
kind: research
tracks: [EEG, ML]
summary: Training vision networks with backprop and with biologically plausible learning rules, then comparing each one to human EEG responses to the same images.
---

## The question

Do local, biologically plausible learning rules explain the visual cortex better than standard backpropagation?

## The plan

1. Train the same convolutional neural network on the same image classification task three ways: standard backpropagation, feedback alignment and predictive coding.
2. Extract each trained model's layer activations.
3. Compare those activation patterns with real human EEG responses to the same images.

## Example

- Classify natural images from the THINGS image set.
- Build a representational dissimilarity matrix (RDM) for each model layer.
- Correlate each one against EEG-derived RDMs from the THINGS-EEG2 dataset, at each timepoint.
- Find which learning rule best predicts the time course of the brain's visual response.

## What it produces

- Classification accuracy for each learning rule
- A brain-similarity (RSA) score for each rule at each timepoint
- A comparison of compute and training cost
- A test of whether "biologically plausible" rules are actually more brain-like, not just less accurate

Dataset: [THINGS-EEG2](https://pmc.ncbi.nlm.nih.gov/articles/PMC9771828).
