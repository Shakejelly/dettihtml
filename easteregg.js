

function changeHeaderBackground() {
    var header = document.querySelector('.header');
    if (header) {
        if (header.style.backgroundColor === 'purple') {
            header.style.backgroundColor = '';
            header.style.backgroundImage = ''; 
        } else {
            header.style.backgroundColor = 'purple';
            header.style.backgroundImage = 'none'; 
        }
    }
}
    
    let secretCode = "1337";
    let input = "";
    
    document.addEventListener('keydown', function(event) {
        input += event.key;
        if (input.length > secretCode.length) {
            input = input.substring(input.length - secretCode.length);
        }
        if (input === secretCode) {
            window.location.href = "#easterEggModal";
            input = "";
        }
    });
    