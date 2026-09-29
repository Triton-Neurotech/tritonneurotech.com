---
title: EMG piano
year: "2025–26"
kind: build
tracks: [EMG, Hardware, ML]
summary: Play piano by moving your fingers in the air. EMG electrodes on each forearm detect individual finger movements, and each one plays a different key.
---

The piano team was one of three 2025–26 teams, with ASL and prosthetics, working on decoding hand movement from EMG. Their work feeds into this year's [sEMG-based third arm](/projects/semg-third-arm/).

## The idea

Three to four EMG electrodes on each arm, each placed to pick up a different finger movement. The system classifies which finger moved and triggers the matching key on a virtual piano.

## What the project involves

- An electrode layout that reliably separates individual finger movements
- A signal-processing and classification pipeline for the EMG channels
- The link from each detected movement to a key on an online piano

## Hardware

Sticky EMG electrodes and cables, read by an OpenBCI Cyton board or the club's existing EMG setup.
