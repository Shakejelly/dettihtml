
const buttons = document.querySelectorAll('.clickable button');

const textDisplay = document.getElementById('textDisplay');

const aboutMeContainer = document.querySelector('.about_me_container');

const cvContainer = document.querySelector('.CV_container');

const portfolioContainer = document.querySelector('.Portfolio_container');

const contactMeContainer = document.querySelector('.Contact_Me_Container')



document.addEventListener('DOMContentLoaded', function() {
   
    aboutMeContainer.style.display = 'none';
    cvContainer.style.display = 'none';
    portfolioContainer.style.display = 'none';
    contactMeContainer.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        textDisplay.textContent = '';

        aboutMeContainer.style.display = 'none';
        cvContainer.style.display = 'none';
        portfolioContainer.style.display = 'none';
        contactMeContainer.style.display = 'none';

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

function toggleBackgroundColor() {
  
    const body = document.body;
    
    const computedStyle = window.getComputedStyle(body);
    const currentColor = computedStyle.backgroundColor;

    if (currentColor === 'rgb(204, 204, 204)') { 
        body.style.backgroundColor = "#ec9898"; 
    } else {
        body.style.backgroundColor = "#ccc"; 
    }
}
const modal = document.getElementById('myModal');

const secretImage = document.getElementById('secretImage');

secretImage.addEventListener('click', openModal);

document.querySelector('.close').addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}