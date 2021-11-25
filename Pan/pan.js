var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 360;
const moveImg = new Image();
moveImg.src = './assets/move.png'


var timeout;

canvas.addEventListener("mousemove", (e) => {
  canvas.style.setProperty('--x', -e.offsetX + "px");
  clearTimeout(timeout);
  // timeout = setTimeout(function(){alert('MOVE!')}, 1000);
  timeout = setTimeout(function(){popUp(e.offsetX, e.offsetY)}, 350);
});

canvas.addEventListener("click", (e) => {
  // ctx.beginPath();
  setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},100);
  canvas.style.setProperty('--height', 370 + "px");
  setTimeout(() => {canvas.style.setProperty('--height', 0 + "px")},1150);
})

function popUp(x,y){
  ctx.drawImage(moveImg, x, y, 100, 100);
  // ctx.rect(x,y,100,100)
  // ctx.fillStyle = 'white';
  //   ctx.fill();

    // setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},2000);
  
}



// e.offsetX is the mouse coordinate for my mouse
//(name of property , new value)

