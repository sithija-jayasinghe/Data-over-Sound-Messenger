// Checksum Module
// Ensures data integrity by validating checksums.

function calculateChecksum(data) {
    return data.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % 256;
}

function validateChecksum(data, checksum) {
    return calculateChecksum(data) === checksum;
}

module.exports = { calculateChecksum, validateChecksum };