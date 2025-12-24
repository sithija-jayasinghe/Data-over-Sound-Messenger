# Requirements Specification

## Functional Requirements
- **Send text offline**: The system must enable offline text transmission.
- **Encode to binary**: Convert text data into binary format.
- **Map binary to ultrasonic tones**: Represent binary data as ultrasonic frequencies.
- **Decode via FFT**: Use Fast Fourier Transform to decode received signals.
- **Error detection**: Implement checksum validation.
- **Packet framing**: Ensure data integrity with start and end markers.
- **UI feedback**: Provide real-time status updates.

## Non-Functional Requirements
- **Latency target**: Ensure minimal delay in encoding and decoding.
- **Reliability**: Achieve high accuracy in data transmission.
- **Portability**: Support cross-platform functionality.
- **UX requirements**: Design an intuitive and accessible user interface.

## Constraints
- **Microphones**: Requires devices with functional microphones.
- **Speaker frequency range**: Limited to 18–20 kHz for ultrasonic transmission.

## Assumptions
- **Quiet environment**: Assumes minimal background noise for optimal performance.