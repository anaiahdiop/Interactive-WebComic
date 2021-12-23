let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
const intro = document.getElementById("intro");
const car= document.getElementById("car");
const button = document.querySelector(".button")
button.style.visibility = 'hidden';

const carPic = new Image();
carPic.src = "./assets/car.jpeg";

const introPic = new Image();
introPic.src = "";

window.addEventListener('load', (event) => {
    button.style.visibility = 'visible';
    // intro.src = introPic.src;
    car.src = carPic.src;
  });

  document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
  
    innerCursor.style.left = `${mouseX}px`;
    innerCursor.style.top = `${mouseY}px`;
    outerCursor.style.left = `${mouseX}px`;
    outerCursor.style.top = `${mouseY}px`;
  
  });
