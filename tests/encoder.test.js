const { textToBinary } = require('../src/encoder');

describe('Encoder Module - textToBinary', () => {
    test('should convert text to binary representation', () => {
        const input = 'ABC';
        const expectedOutput = [
            '01000001', // A
            '01000010', // B
            '01000011'  // C
        ];
        expect(textToBinary(input)).toEqual(expectedOutput);
    });

    test('should handle empty string input', () => {
        const input = '';
        const expectedOutput = [];
        expect(textToBinary(input)).toEqual(expectedOutput);
    });

    test('should handle special characters', () => {
        const input = '!@#';
        const expectedOutput = [
            '00100001', // !
            '01000000', // @
            '00100011'  // #
        ];
        expect(textToBinary(input)).toEqual(expectedOutput);
    });
});