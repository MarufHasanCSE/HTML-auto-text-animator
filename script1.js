const containerElem = document.querySelector(".container");


const careers = ["Student", "Web Developer", "Coder", "Teaching Assistant"];

let careerIndex = 0;
let charIndex = 0;

function updateText() { 
      charIndex++;
      containerElem.innerHTML = `<h1> I am a ${careers[careerIndex].slice(0,charIndex)}</h1>`;
  
   if(charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex = 0;

   }
    setTimeout(updateText,300);
}

updateText();