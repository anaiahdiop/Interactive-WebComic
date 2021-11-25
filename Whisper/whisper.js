nextButton = document.querySelector(".next")

nextButton.addEventListener("click", function (){
    window.scrollTo({top: 10, behavior: 'smooth'});
    setTimeout(function(){window.location.href = '../Ancient/treeGod.html'}, 1500);
});


