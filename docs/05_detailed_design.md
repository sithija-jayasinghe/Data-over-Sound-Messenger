# Detailed Design

## Overview
This document provides a detailed description of the modules and components of the Data-over-Sound Messenger system. Each module is designed to ensure modularity, maintainability, and clarity.

## Modules

### 1. Encoder
**Responsibilities:**
- Convert text input into binary data.
- Map binary data to ultrasonic frequencies.
- Add start and end markers for packet framing.
- Append a checksum for error detection.

**Key Functions:**
- `textToBinary(text: string): string[]`
- `binaryToTones(binary: string[]): number[]`
- `addPacketMarkers(data: number[]): number[]`
- `appendChecksum(data: number[]): number[]`

### 2. Decoder
**Responsibilities:**
- Capture audio signals and analyze frequencies using FFT.
- Detect ultrasonic tones and map them back to binary data.
- Validate the checksum to ensure data integrity.
- Reconstruct the original text from binary data.

**Key Functions:**
- `captureAudio(): Float32Array`
- `applyFFT(audio: Float32Array): number[]`
- `tonesToBinary(tones: number[]): string[]`
- `validateChecksum(data: string[]): boolean`
- `binaryToText(binary: string[]): string`

### 3. Checksum
**Responsibilities:**
- Generate a checksum for transmitted data.
- Validate the checksum for received data.

**Key Functions:**
- `generateChecksum(data: string[]): string`
- `validateChecksum(data: string[], checksum: string): boolean`

### 4. Tone Generator
**Responsibilities:**
- Generate audio signals for ultrasonic frequencies.

**Key Functions:**
- `generateTone(frequency: number, duration: number): Float32Array`
- `playTone(tone: Float32Array): void`

### 5. FFT Analyzer
**Responsibilities:**
- Analyze audio signals to detect dominant frequencies.

**Key Functions:**
- `applyFFT(audio: Float32Array): number[]`
- `detectFrequencies(fftData: number[]): number[]`

### 6. Packetizer
**Responsibilities:**
- Frame data packets with start and end markers.
- Handle packet reconstruction during decoding.

**Key Functions:**
- `addMarkers(data: string[]): string[]`
- `removeMarkers(data: string[]): string[]`

## State Machines

### Encoding State Machine
1. **Idle**: Waiting for user input.
2. **Text Input Received**: User enters text to transmit.
3. **Encoding**: Text is converted to binary and mapped to tones.
4. **Transmitting**: Audio signals are played through the speaker.

### Decoding State Machine
1. **Idle**: Waiting for audio input.
2. **Listening**: Capturing audio signals.
3. **Decoding**: Applying FFT and reconstructing binary data.
4. **Text Output**: Displaying the decoded text to the user.

## Error Handling
- **Noise Filtering**: Use smoothing algorithms to reduce background noise.
- **Checksum Validation**: Discard packets with invalid checksums.
- **Timeouts**: Handle cases where no signal is detected within a specified time.

## Noise Filtering Techniques
- **Low-Pass Filtering**: Remove frequencies outside the ultrasonic range.
- **Smoothing**: Average out short-term fluctuations in the signal.

## Conclusion
The detailed design ensures that each module is self-contained and interacts seamlessly with others. This modular approach simplifies testing, debugging, and future enhancements.