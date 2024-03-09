// Get all buttons
const buttons = document.querySelectorAll('.clickable button');

// Get the text display element
const textDisplay = document.getElementById('textDisplay');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Clear previous content
        textDisplay.innerHTML = '';

        // Create and add text node
        const text = document.createTextNode(`Description of ${button.textContent}`);
        textDisplay.appendChild(text);
    });
});