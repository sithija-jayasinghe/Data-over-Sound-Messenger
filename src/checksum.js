// Checksum Module

/**
 * Generates a checksum for the given binary data.
 * @param {string[]} binaryData - An array of binary strings.
 * @returns {string} - The checksum as a binary string.
 */
function generateChecksum(binaryData) {
    if (binaryData.length === 0) {
        return '00000000'; // Checksum for empty data
    }

    const sum = binaryData.reduce((acc, binary) => {
        return acc + parseInt(binary, 2);
    }, 0);

    const checksum = (~sum + 1) & 0xFF; // Two's complement, 8-bit
    return checksum.toString(2).padStart(8, '0'); // Return checksum as 8-bit binary
}

/**
 * Validates the checksum for the given binary data.
 * @param {string[]} binaryData - An array of binary strings.
 * @param {string} checksum - The checksum to validate.
 * @returns {boolean} - True if the checksum is valid, false otherwise.
 */
function validateChecksum(binaryData, checksum) {
    const calculatedChecksum = generateChecksum(binaryData);
    return calculatedChecksum === checksum;
}

module.exports = { generateChecksum, validateChecksum };