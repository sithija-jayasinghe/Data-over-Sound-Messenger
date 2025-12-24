# Detailed Design

## Modules

### Encoder
- Converts text to binary.
- Maps binary to ultrasonic tones.
- Adds start and end markers.

### Decoder
- Captures sound via microphone.
- Analyzes frequencies using FFT.
- Reconstructs binary data and validates checksum.

### Checksum
- Ensures data integrity by detecting errors in transmission.

### Tone Generator
- Generates ultrasonic tones for binary `0` and `1`.

### FFT Analyzer
- Performs frequency analysis to detect transmitted tones.

### Packetizer
- Frames data into packets with start and end markers.

## State Machines
- **Transmitter**: Idle → Encoding → Transmitting → Idle
- **Receiver**: Idle → Listening → Decoding → Idle

## Error Handling
- **Noise Filtering**: Apply smoothing to reduce background noise.
- **Checksum Validation**: Discard packets with invalid checksums.

## Noise Filtering
- Use a moving average filter to smooth frequency data.