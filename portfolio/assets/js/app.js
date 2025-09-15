// Get the <span> with id="year" in the footer
const yearSpan = document.getElementById('year');

// Replace its content with the current year
yearSpan.textContent = new Date().getFullYear();

// (Later we can add menu toggles or animations here)
