nextButton = document.querySelector(".button")
background = document.querySelector(".pic")

nextButton.addEventListener("click", function (){
    background.src = "./assets/faceUpPic.jpg"
    window.scrollTo({top: 150, behavior: 'smooth'});
    setTimeout(function(){window.location.href = '../Ancient/treeGod.html'}, 1500);
});


