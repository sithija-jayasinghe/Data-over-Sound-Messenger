# Test Plan

## Testing Strategy

### Unit Tests
- Test individual modules (e.g., encoder, decoder, checksum).

### Integration Tests
- Verify end-to-end functionality of the system.

### Manual Testing
- Simulate real-world scenarios with varying noise levels.

### Negative Testing
- Test edge cases like empty messages, long messages, and partial packets.

### Noise Simulation
- Introduce background noise to evaluate system robustness.

## Test Cases

### Empty Message
- **Input**: ""
- **Expected Output**: No transmission.

### Long Message
- **Input**: 1000-character string.
- **Expected Output**: Successful transmission and decoding.

### Background Noise
- **Scenario**: Play music during transmission.
- **Expected Output**: Accurate decoding with minimal errors.

### Partial Packet
- **Scenario**: Interrupt transmission mid-way.
- **Expected Output**: Discard incomplete packet.

### Mic Unavailable
- **Scenario**: Disable microphone access.
- **Expected Output**: Display error message.