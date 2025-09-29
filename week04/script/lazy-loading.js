const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

c// Temporarily display the current date and time for local testing
document.getElementById('last-modified').textContent = `Current Time: ${new Date().toLocaleString()}`;
