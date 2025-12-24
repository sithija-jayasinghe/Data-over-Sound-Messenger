// Encoder Module
// Converts text to binary, maps binary to ultrasonic tones, and adds packet framing.

function encodeTextToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
}

function mapBinaryToTones(binary) {
    const tones = [];
    for (const bit of binary) {
        tones.push(bit === '0' ? 18000 : 19000); // 0 → 18 kHz, 1 → 19 kHz
    }
    return tones;
}

function addPacketFraming(tones) {
    const startMarker = [17000]; // Start marker tone
    const endMarker = [17000];   // End marker tone
    return [...startMarker, ...tones, ...endMarker];
}

module.exports = { encodeTextToBinary, mapBinaryToTones, addPacketFraming };