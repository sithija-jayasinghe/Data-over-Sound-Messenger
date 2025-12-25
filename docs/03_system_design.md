# System Design

## Overview
The Data-over-Sound Messenger system is designed to transmit text data using ultrasonic sound waves. The system leverages the Fast Fourier Transform (FFT) for encoding and decoding data, ensuring reliable communication using standard hardware such as speakers and microphones.

## What is FFT?
FFT, or Fast Fourier Transform, is a mathematical algorithm used to analyze the frequency components of a signal. It converts a time-domain signal (like sound) into its frequency-domain representation, allowing us to identify the dominant frequencies present in the signal. This is crucial for detecting the ultrasonic tones used in this system.

### Why FFT?
FFT is used because:
- It efficiently analyzes audio signals to detect specific frequencies.
- It is computationally fast, making it suitable for real-time applications.
- It provides the precision needed to distinguish between closely spaced ultrasonic frequencies (e.g., 18 kHz and 19 kHz).

## Block Diagram
Below is the high-level block diagram of the system:

```
+----------------+       +----------------+       +----------------+
| Text Input     | --->  | Encoder        | --->  | Audio Output   |
+----------------+       +----------------+       +----------------+
                                                  |
                                                  v
+----------------+       +----------------+       +----------------+
| Audio Input    | --->  | Decoder        | --->  | Text Output    |
+----------------+       +----------------+       +----------------+
```

## Data Flow
1. **Encoding**:
   - Text input is converted to binary.
   - Binary data is mapped to ultrasonic frequencies.
   - Audio signals are generated and transmitted.

2. **Decoding**:
   - Audio signals are captured via a microphone.
   - FFT is applied to detect dominant frequencies.
   - Binary data is reconstructed and converted back to text.

## Alternative Designs Considered
1. **Amplitude Modulation**:
   - Rejected due to higher susceptibility to noise.

2. **Frequency Modulation**:
   - Chosen for its robustness and simplicity in implementation.

3. **Time-Division Multiplexing**:
   - Rejected as it adds unnecessary complexity for a single-user system.

## Key Components
1. **Encoder**:
   - Converts text to binary.
   - Maps binary to ultrasonic tones.

2. **Decoder**:
   - Detects ultrasonic tones using FFT.
   - Reconstructs binary data and converts it to text.

3. **Checksum**:
   - Ensures data integrity by detecting errors.

4. **UI**:
   - Provides real-time feedback to the user.

5. **Audio I/O**:
   - Handles audio signal generation and capture.

## Error Handling
- **Noise Filtering**: Apply smoothing algorithms to reduce the impact of background noise.
- **Checksum Validation**: Discard packets with invalid checksums.
- **Timeouts**: Handle cases where no signal is detected within a specified time.

## State Machines
The system uses state machines to manage the encoding and decoding processes. For example:

### Encoding State Machine
1. Idle
2. Text Input Received
3. Encoding
4. Transmitting

### Decoding State Machine
1. Idle
2. Listening
3. Decoding
4. Text Output

## Conclusion
This design ensures a robust and efficient system for transmitting text data over sound. The use of FFT and ultrasonic frequencies provides a reliable method for offline communication.