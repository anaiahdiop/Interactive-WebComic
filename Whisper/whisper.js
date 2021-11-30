nextButton = document.querySelector(".button")

nextButton.addEventListener("click", function (){
    window.scrollTo({top: 200, behavior: 'smooth'});
    setTimeout(function(){window.location.href = '../Ancient/treeGod.html'}, 1500);
});


