const { encodeTextToBinary, mapBinaryToTones, addPacketFraming } = require('../src/encoder');

test('encodeTextToBinary converts text to binary', () => {
    expect(encodeTextToBinary('A')).toBe('01000001');
});

test('mapBinaryToTones maps binary to ultrasonic tones', () => {
    expect(mapBinaryToTones('01')).toEqual([18000, 19000]);
});

test('addPacketFraming adds start and end markers', () => {
    expect(addPacketFraming([18000, 19000])).toEqual([17000, 18000, 19000, 17000]);
});