const texts = [
    { elem: document.getElementById('line1'), text: 'I am a Student', speed: 80 },
    { elem: document.getElementById('line2'), text: 'Learning Web Development', speed: 60 },
    { elem: document.getElementById('line3'), text: 'Building awesome projects!', speed: 70 }
];

const cursor = document.querySelector('.cursor');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');

let isAnimating = false;
let animationIndices = [0, 0, 0];
let displayedTexts = ['', '', ''];

function animateTexts() {
    if (isAnimating) return;
    
    isAnimating = true;
    playBtn.disabled = true;
    cursor.style.display = 'block';
    
    function animateLine(lineIndex) {
        if (animationIndices[lineIndex] < texts[lineIndex].text.length) {
            displayedTexts[lineIndex] += texts[lineIndex].text.charAt(animationIndices[lineIndex]);
            texts[lineIndex].elem.textContent = displayedTexts[lineIndex];
            animationIndices[lineIndex]++;
            
            setTimeout(() => animateLine(lineIndex), texts[lineIndex].speed);
        } else if (lineIndex < texts.length - 1) {
            setTimeout(() => animateLine(lineIndex + 1), 500);
        } else {
            cursor.style.display = 'none';
            isAnimating = false;
            playBtn.disabled = false;
        }
    }
    
    animateLine(0);
}

function resetAnimation() {
    isAnimating = false;
    animationIndices = [0, 0, 0];
    displayedTexts = ['', '', ''];
    texts.forEach(item => item.elem.textContent = '');
    cursor.style.display = 'none';
    playBtn.disabled = false;
}

playBtn.addEventListener('click', animateTexts);
resetBtn.addEventListener('click', resetAnimation);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        animateTexts();
    }
});

window.addEventListener('load', function() {
    animateTexts();
});