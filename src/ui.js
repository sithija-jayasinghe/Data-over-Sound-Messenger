// UI Module
// Handles user interface interactions.

function showTransmittingStatus() {
    console.log('🟢 Transmitting...');
}

function showListeningStatus() {
    console.log('📡 Listening...');
}

function updateSpectrumVisualization(data) {
    console.log('📈 Spectrum Data:', data);
}

function updatePacketStatus(status) {
    console.log('📦 Packet Status:', status);
}

module.exports = { showTransmittingStatus, showListeningStatus, updateSpectrumVisualization, updatePacketStatus };