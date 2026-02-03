const containerElem = document.querySelector(".container");

const careers = ["Student", "Web Developer", "Animator", "Coder", "Teaching Assistant", "Fresh Graduate"];


let careerIndex = 0;
let charIndex = 0;

function updateText() { 
      charIndex++;
      containerElem.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1) === "A" ? "an" : "a"} ${careers[careerIndex].slice(0,charIndex)}</h1>`;
  
   if(charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex = 0;

   }
   if(careerIndex  === careers.length){
        careerIndex = 0;
   }
    setTimeout(updateText, 200);
}

updateText();