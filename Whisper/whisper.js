let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
const nextButton = document.querySelector(".button")
const wrap = document.querySelector(".wrap");
nextButton.style.visibility = 'hidden';
const background = document.querySelector(".pic");

const faceDown = new Image();
faceDown.src = "./assets/faceDownPic.jpg"

const faceUp = new Image();
faceUp.src = "./assets/faceUpPic.jpg"


window.addEventListener('load', (event) => {
    nextButton.style.visibility = 'visible';
    background.src = faceDown.src;
      
      nextButton.addEventListener("click", function (){
          background.src = faceUp.src
          window.scrollTo({top: 150, behavior: 'smooth'});
          setTimeout(function(){window.location.href = '../Ancient/treeGod.html'}, 1500);
      });

  });

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  innerCursor.style.left = `${mouseX}px`;
  innerCursor.style.top = `${mouseY}px`;
  outerCursor.style.left = `${mouseX}px`;
  outerCursor.style.top = `${mouseY}px`;

  wrap.addEventListener('mouseover', ()=> {
    innerCursor.classList.add("grow");
    outerCursor.classList.add("grow");
    // outerCursor.style.borderColor = "white";

})
  wrap.addEventListener('mouseleave', ()=> {
    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("grow");
    // outerCursor.style.borderColor = "white";
})

});

//   document.body.style.setProperty("--background", "url(./assets/faceUpPic.jpg)");


