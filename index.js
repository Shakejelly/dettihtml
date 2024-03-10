// Get all buttons
const buttons = document.querySelectorAll('.clickable button');

// Get the text display element
const textDisplay = document.getElementById('textDisplay');

const aboutMeContainer = document.querySelector('.about-me-container');

const cvContainer = document.querySelector('.CV-container');

const portfolioContainer = document.querySelector('.Portfolio-container');

const contactMeContainer = document.querySelector('.Contact-Me-Container')



document.addEventListener('DOMContentLoaded', function() {
    // Hide all containers when the page loads
    aboutMeContainer.style.display = 'none';
    cvContainer.style.display = 'none';
    portfolioContainer.style.display = 'none';
    contactMeContainer.style.display = 'none';
});
// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Clear previous content
        textDisplay.textContent = '';

        // Hide all containers initially
        aboutMeContainer.style.display = 'none';
        cvContainer.style.display = 'none';
        portfolioContainer.style.display = 'none';
        contactMeContainer.style.display = 'none';

        // Determine which button is clicked and show the corresponding container
        if (button.classList.contains('clickable_item1')) {
            aboutMeContainer.style.display = 'block';
            
        } else if (button.classList.contains('clickable_item2')) {
            cvContainer.style.display = 'block';
            
        } else if (button.classList.contains('clickable_item3')) {
            portfolioContainer.style.display = 'block';
            
        } else if (button.classList.contains('clickable_item4')) {
            contactMeContainer.style.display = 'block';
           
        }
    });
});