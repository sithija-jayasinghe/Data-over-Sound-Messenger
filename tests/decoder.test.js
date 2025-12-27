const { applyFFT } = require('../src/decoder');

describe('Decoder Module - applyFFT', () => {
    test('should return detected frequencies from audio data', () => {
        const inputAudioData = new Float32Array([0.1, 0.2, 0.3, 0.4]); // Example audio data
        const expectedFrequencies = [18000, 19000]; // Example detected frequencies
        expect(applyFFT(inputAudioData)).toEqual(expectedFrequencies);
    });

    test('should handle empty audio data', () => {
        const inputAudioData = new Float32Array([]);
        const expectedFrequencies = []; // No frequencies detected
        expect(applyFFT(inputAudioData)).toEqual(expectedFrequencies);
    });
});