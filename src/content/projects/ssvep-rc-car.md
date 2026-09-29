---
title: SSVEP brain-controlled RC car
year: "2024–25"
tracks: [EEG, Hardware]
team: [Sanjith (project lead), Marissa (project lead)]
summary: A remote-control car driven hands-free with EEG. Drivers look at flickering targets, and steady-state visual evoked potentials (SSVEP) become driving commands.
---

Our EEG Axon project. When you look at a light flickering at a fixed rate, your visual cortex produces a signal at that same frequency, called a steady-state visual evoked potential (SSVEP). Give each command its own flicker rate, and you can tell which one someone is looking at from their EEG alone.

## What the team did

**Fall 2024.** The team kicked off in Week 4, built the RC car, tested the camera module and mobile app, and uploaded code to the car's Arduino controller. Members trained on the DSI-7 EEG headset, then started collecting data and connecting the car's video stream to the control GUI.

**Winter 2025.** The team fixed connectivity between the car and the mobile app, and got EEG streaming from the headset into Python with Lab Streaming Layer (LSL). Next steps were storing and processing EEG data, pulling out frequency components, and controlling the car over Wi-Fi through an ESP32.

## Background

- SSVEP (steady-state visual evoked potentials)
- Fourier transforms, used to find which flicker frequency is in the signal
