document.addEventListener('DOMContentLoaded', function() {
    const aurora = document.querySelector('.aurora');

    function createAuroraLayer(color1, color2) {
        const layer = document.createElement('div');
        layer.className = 'layer';
        layer.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        layer.style.animationDuration = `${Math.random() * 10 + 10}s`;
        layer.style.animationDelay = `${Math.random() * 10}s`;
        aurora.appendChild(layer);
    }

    // Create multiple aurora layers with different colors
    createAuroraLayer('rgba(0, 255, 255, 0.3)', 'rgba(0, 255, 0, 0.3)');
    createAuroraLayer('rgba(255, 0, 255, 0.3)', 'rgba(255, 165, 0, 0.3)');
    createAuroraLayer('rgba(0, 191, 255, 0.3)', 'rgba(255, 20, 147, 0.3)');
    createAuroraLayer('rgba(50, 205, 50, 0.3)', 'rgba(255, 69, 0, 0.3)');
});
