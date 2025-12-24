const { calculateChecksum, validateChecksum } = require('../src/checksum');

test('calculateChecksum computes checksum of data', () => {
    expect(calculateChecksum('A')).toBe(65);
});

test('validateChecksum verifies checksum correctness', () => {
    expect(validateChecksum('A', 65)).toBe(true);
});