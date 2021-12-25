let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
const solo1 = document.getElementById("solo1");
const solo2= document.getElementById("solo2");
const solo3= document.getElementById("solo3");
const button = document.querySelector(".button")
button.style.visibility = 'hidden';

const solo1Pic = new Image();
// solo1Pic.src = "./assets/solo1.png";
solo1Pic.src = "./assets/1.jpeg";

const solo2Pic = new Image();
// solo2Pic.src = "./assets/solo2.png";
solo2Pic.src = "./assets/2.jpeg";

const solo3Pic = new Image();
// solo3Pic.src = "./assets/solo3.png";
solo3Pic.src = "./assets/3.jpeg";


window.addEventListener('load', (event) => {
    button.style.visibility = 'visible';
    solo1.src = solo1Pic.src;
    solo2.src = solo2Pic.src;
    solo3.src = solo3Pic.src;
  });

  document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
  
    innerCursor.style.left = `${mouseX}px`;
    innerCursor.style.top = `${mouseY}px`;
    outerCursor.style.left = `${mouseX}px`;
    outerCursor.style.top = `${mouseY}px`;
  
  });
