const nextButton = document.querySelector(".button")
nextButton.style.visibility = 'hidden';
const background = document.querySelector(".pic")

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
  

//   document.body.style.setProperty("--background", "url(./assets/faceUpPic.jpg)");


