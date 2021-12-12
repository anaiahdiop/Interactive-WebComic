const nextButton = document.querySelector(".button")
const background = document.querySelector(".pic")
const mouseCursor = document.querySelector("#mouse-scroll")

window.addEventListener('load', (event) => {

    window.addEventListener("mousemove", (e) => {
        mouseCursor.style.top = e.pageY + "px"
        mouseCursor.style.left = e.pageX + "px"
      });
      
      nextButton.addEventListener("click", function (){
          background.src = "./assets/faceUpPic.jpg"
          window.scrollTo({top: 150, behavior: 'smooth'});
          setTimeout(function(){window.location.href = '../Ancient/treeGod.html'}, 1500);
      });

  });
  



