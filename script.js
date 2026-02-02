const elem1 = document.querySelector('.container h1');
const text1 = 'I am a Student';
let index1 = 0;
let displayedText = '';
let isAnimating = false;

function autoText1() {
    if (index1 < text1.length) {
        displayedText += text1.charAt(index1);
        elem1.textContent = displayedText;
        index1++;
        setTimeout(autoText1, 100);
    } else {
        isAnimating = false;
    }
}

elem1.addEventListener('click', function() {
    if (!isAnimating) {
        isAnimating = true;
        index1 = 0;
        displayedText = '';
        elem1.textContent = '';
        autoText1();
    }
});

window.addEventListener('load', function() {
    autoText1();
});    