const elem1 = document.querySelector('.container h1');
const text1 = 'I am a Student';
let index1 = 0;

function autoText1() {
    if (index1 < text1.length) {
      
        elem1.innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(autoText1, 200);
    }
}

autoText1();    