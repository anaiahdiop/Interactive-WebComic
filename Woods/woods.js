let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
const day = document.getElementById("day");
const night= document.getElementById("night");
const button = document.querySelector(".button")
button.style.visibility = 'hidden';

const dayPic = new Image();
dayPic.src = "./assets/day.png";

const nightPic = new Image();
nightPic.src = "./assets/night.png";

window.addEventListener('load', (event) => {
    button.style.visibility = 'visible';
    day.src = dayPic.src;
    night.src = nightPic.src;
  
  });

  document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
  
    innerCursor.style.left = `${mouseX}px`;
    innerCursor.style.top = `${mouseY}px`;
    outerCursor.style.left = `${mouseX}px`;
    outerCursor.style.top = `${mouseY}px`;
  
  });
