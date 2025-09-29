// Defines a constant variable named "calculateWindChill" and assigns it an arrow function.
// This function accepts two arguments: "temp" (temperature) and "speed" (wind speed).
// It implements the official formula to calculate the wind chill factor on a single line.
const calculateWindChill = (temp, speed) => 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

// Finds the HTML element that has the id "temperature" and gets the text content from inside it (e.g., "5").
// parseFloat() then converts that text string into a number so we can do math with it.
const tempValue = parseFloat(document.getElementById('temperature').textContent);

// Does the same as the line above, but for the HTML element with the id "wind-speed".
const speedValue = parseFloat(document.getElementById('wind-speed').textContent);

// The wind chill formula requires Fahrenheit, so this line converts the Celsius value from the HTML into Fahrenheit.
const tempF = (tempValue * 9/5) + 32;

// The wind chill formula requires miles per hour (MPH), so this line converts the km/h value from the HTML into MPH.
const speedMph = speedValue / 1.609;

// This is a conditional check. The code inside the curly braces { } will only run if BOTH conditions are true.
// Condition 1: The temperature in Fahrenheit must be less than or equal to 50.
// Condition 2: The wind speed in MPH must be greater than 3.0.
if (tempF <= 50 && speedMph > 3.0) {
    // If the conditions are met, this line calls our function with the converted temperature and speed values.
    const windChill = calculateWindChill(tempF, speedMph);
    
    // This finds the HTML element with the id "wind-chill" and updates its content.
    // Math.round() rounds the result to the nearest whole number.
    // The `${...}°F` format creates a string that includes the rounded number followed by the Fahrenheit symbol.
    document.getElementById('wind-chill').textContent = `${Math.round(windChill)}°F`;
}

// Finds the HTML element with the id "current-year".
// new Date().getFullYear() gets the current four-digit year from the user's computer.
// It then sets the content of the HTML element to the current year.
document.getElementById('current-year').textContent = new Date().getFullYear();

// Finds the HTML element with the id "last-modified".
// document.lastModified is a browser property that holds the date the HTML file was last saved.
// It then sets the content of the HTML element to a formatted string showing this date.
document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;