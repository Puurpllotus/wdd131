const calculateWindChill = (temp, speed) => 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

const tempValue = parseFloat(document.getElementById('temperature').textContent);
const speedValue = parseFloat(document.getElementById('wind-speed').textContent);

const tempF = (tempValue * 9/5) + 32;
const speedMph = speedValue / 1.609;

if (tempF <= 50 && speedMph > 3.0) {
    const windChill = calculateWindChill(tempF, speedMph);
    document.getElementById('wind-chill').textContent = `${Math.round(windChill)}°F`;
}

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;