const { decodeFrequenciesToBinary, extractDataFromPacket } = require('../src/decoder');

test('decodeFrequenciesToBinary converts frequencies to binary', () => {
    expect(decodeFrequenciesToBinary([18000, 19000])).toBe('01');
});

test('extractDataFromPacket extracts data from framed binary', () => {
    expect(extractDataFromPacket('101010100100000110101010')).toBe('01000001');
});