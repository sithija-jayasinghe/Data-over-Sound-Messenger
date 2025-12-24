# System Design

## Overview
The Data-over-Sound Messenger system uses ultrasonic sound waves to transmit text data. The system consists of encoding, transmission, and decoding components.

## What is FFT?
Fast Fourier Transform (FFT) is a mathematical algorithm that converts a signal from its time domain into its frequency domain. This allows us to analyze the frequency components of a sound wave, which is essential for decoding ultrasonic signals.

## Block Diagram
```
[Text Input] → [Encoder] → [Ultrasonic Signal] → [Microphone] → [Decoder] → [Text Output]
```

## Data Flow
1. **Encoding**: Convert text to binary, map binary to ultrasonic tones, and add packet framing.
2. **Transmission**: Play ultrasonic tones through the speaker.
3. **Decoding**: Capture sound via microphone, analyze frequencies using FFT, and reconstruct the original text.

## Alternative Designs Considered
- **Amplitude Modulation**: Rejected due to higher noise sensitivity.
- **Frequency Modulation**: Chosen for its robustness in noisy environments.