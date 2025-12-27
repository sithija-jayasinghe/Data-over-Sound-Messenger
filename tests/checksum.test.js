const { generateChecksum, validateChecksum } = require('../src/checksum');

describe('Checksum Module', () => {
    describe('generateChecksum', () => {
        test('should generate correct checksum for binary data', () => {
            const binaryData = ['01000001', '01000010', '01000011']; // A, B, C
            const expectedChecksum = '00111010'; // Updated checksum based on two's complement logic
            expect(generateChecksum(binaryData)).toBe(expectedChecksum);
        });

        test('should handle empty binary data', () => {
            const binaryData = [];
            const expectedChecksum = '00000000'; // Checksum for empty data
            expect(generateChecksum(binaryData)).toBe(expectedChecksum);
        });
    });

    describe('validateChecksum', () => {
        test('should return true for valid checksum', () => {
            const binaryData = ['01000001', '01000010', '01000011']; // A, B, C
            const checksum = '00111010'; // Updated checksum based on two's complement logic
            expect(validateChecksum(binaryData, checksum)).toBe(true);
        });

        test('should return false for invalid checksum', () => {
            const binaryData = ['01000001', '01000010', '01000011']; // A, B, C
            const checksum = '00000000'; // Invalid checksum
            expect(validateChecksum(binaryData, checksum)).toBe(false);
        });
    });
});