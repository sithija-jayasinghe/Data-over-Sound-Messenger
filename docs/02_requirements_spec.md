# Requirements Specification

## Functional Requirements
- **Send text offline**: The system must enable offline text transmission using sound waves.
- **Encode to binary**: Convert UTF-8 text data into binary format for transmission.
- **Map binary to ultrasonic tones**: Map binary bits to ultrasonic frequencies (0 → 18 kHz, 1 → 19 kHz).
- **Packet framing**: Add start and end markers to each packet for clear boundaries.
- **Checksum for error detection**: Append a checksum to each packet for error detection.
- **Decode via FFT**: Use Fast Fourier Transform (FFT) to analyze incoming audio and detect dominant frequencies.
- **Bit reconstruction**: Reconstruct the original binary data from detected frequencies.
- **Checksum validation**: Validate received data using the checksum.
- **UI feedback**: Provide real-time feedback (transmitting, listening, spectrum visualization, packet status).

## Non-Functional Requirements
- **Latency target**: End-to-end latency for a short message should be under 2 seconds.
- **Reliability**: Achieve at least 95% accuracy in typical indoor environments.
- **Portability**: Must work on modern browsers and common hardware (laptops, smartphones).
- **UX requirements**: UI must be clean, modern, and accessible to non-experts.

## Constraints
- **Microphones**: Requires access to a working microphone.
- **Speaker frequency range**: Transmission limited to 18–20 kHz (ultrasonic, near upper human hearing limit).
- **Browser permissions**: Requires user permission for microphone access.

## Assumptions
- **Quiet enough environment**: Assumes background noise is low enough not to mask ultrasonic signals.
- **Hardware support**: Assumes device speakers and microphones can reproduce and detect 18–20 kHz frequencies.

## Out-of-Scope
- High-speed or high-bandwidth data transfer
- Long-range communication beyond typical room size
- Support for non-ultrasonic frequencies

## Glossary
- **FFT**: Fast Fourier Transform, a method to analyze frequency components of a signal.
- **Ultrasonic**: Sound frequencies above the upper limit of human hearing (>20 kHz, but 18–20 kHz used here for hardware compatibility).
- **Packet**: A unit of data with framing and error detection for transmission.
- **Checksum**: A value used to detect errors in transmitted data.