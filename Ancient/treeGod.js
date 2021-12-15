const tree = document.getElementById("tree");
const leaves= document.getElementById("leaves");
const eyes = document.getElementById("eyes");
const button = document.querySelector(".button")
button.style.visibility = 'hidden';

const treePic = new Image();
treePic.src = "./assets/ancient-one.gif";

const leavesPic = new Image();
leavesPic.src = "./assets/ancient-one.png";

const eyesPic = new Image();
eyesPic.src = "./assets/darkEyes.gif";


window.addEventListener('load', (event) => {
    button.style.visibility = 'visible';
    tree.src = treePic.src;
    leaves.src = leavesPic.src;
    eyes.src = eyesPic.src;
  });


// var _img = document.getElementById('id1');
// var newImg = new Image;
// newImg.onload = function() {
//     _img.src = this.src;
// }
// newImg.src = 'http://whatever';