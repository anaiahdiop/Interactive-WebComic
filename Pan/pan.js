//STARTER VARIABLES
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
let icon = document.querySelector('.icon');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 500;
var timeout;

//pop up 
const moveImg = new Image();
// moveImg.src = ''
moveImg.src = '';

//IMAGES
const indicator = new Image()
indicator.src = './assets/indicator.png'
const backgroundLayer1 = new Image();
backgroundLayer1.src = './assets/Transformation/transform1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './assets/Transformation/transform2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './assets/Transformation/transform3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './assets/Transformation/transform4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './assets/Transformation/transform5.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = './assets/Transformation/transform6.png';
const backgroundLayer7 = new Image();
backgroundLayer7.src = './assets/Transformation/transform7.png';
const backgroundLayer8 = new Image();
backgroundLayer8.src = './assets/Transformation/transform8.png';
const backgroundLayer9 = new Image();
backgroundLayer9.src = './assets/Transformation/transform9.png';
const backgroundLayer10 = new Image();
backgroundLayer10.src = './assets/Transformation/transform10.png';
const backgroundLayer11 = new Image();
backgroundLayer11.src = './assets/Transformation/transform11.png';
const backgroundLayer12 = new Image();
backgroundLayer12.src = './assets/Transformation/transform12.png';
const backgroundLayer13 = new Image();
backgroundLayer13.src = './assets/Transformation/transform13.png';
const backgroundLayer14 = new Image();
backgroundLayer14.src = './assets/Transformation/transform14.png';
const backgroundLayer15 = new Image();
backgroundLayer15.src = './assets/Transformation/transform15.png';
const backgroundLayer16 = new Image();
backgroundLayer16.src = './assets/Transformation/transform16.png';
const backgroundLayer17 = new Image();
backgroundLayer17.src = './assets/Transformation/transform17.png';
const backgroundLayer18 = new Image();
backgroundLayer18.src = './assets/Transformation/transform18.png';

const transformationStates = [
    {
        name:'first',
        frames: ['url(./assets/Transformation/transform1.png)','url(./assets/Transformation/transform2.png)','url(./assets/Transformation/transform3.png)','url(./assets/Transformation/transform4.png)','url(./assets/Transformation/transform5.png)','url(./assets/Transformation/transform6.png)','url(./assets/Transformation/transform7.png)','url(./assets/Transformation/transform8.png)','url(./assets/Transformation/transform9.png)',],
        // frames: [backgroundLayer1,backgroundLayer2,backgroundLayer3,backgroundLayer4,backgroundLayer5,backgroundLayer6,backgroundLayer7,backgroundLayer8,backgroundLayer9],
    },
    {
        name:'second',
        frames: ['url(./assets/Transformation/transform10.png)','url(./assets/Transformation/transform11.png)','url(./assets/Transformation/transform12.png)','url(./assets/Transformation/transform13.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform15.png)','url(./assets/Transformation/transform16.png)','url(./assets/Transformation/transform17.png)'],
        // frames: [backgroundLayer10,backgroundLayer11,backgroundLayer12,backgroundLayer13,backgroundLayer14,backgroundLayer14,backgroundLayer15,backgroundLayer16,backgroundLayer17],
    },
];

//EVENT LISTENERS
window.addEventListener('load', (event) => {
  sequence();
  ctx.drawImage(indicator, 0, 0, 75, 75)
});

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  innerCursor.style.left = `${mouseX}px`;
  innerCursor.style.top = `${mouseY}px`;
  outerCursor.style.left = `${mouseX}px`;
  outerCursor.style.top = `${mouseY}px`;

  canvas.addEventListener('mouseover', ()=> {
      innerCursor.classList.add("grow");
      icon.style.visibility = "visible";
      outerCursor.style.borderColor = "black";

  })
  canvas.addEventListener('mouseleave', ()=> {
      innerCursor.classList.remove("grow");
      icon.style.visibility = "hidden";
      outerCursor.style.borderColor = "white";
  })

});

canvas.addEventListener("mousemove", (e) => {
  canvas.style.setProperty('--x', -e.offsetX + "px");
  canvas.style.setProperty('--y', -e.offsetY + "px");
  clearTimeout(timeout);
  timeout = setTimeout(function(){popUp(e.offsetX, e.offsetY)}, 150);
});

//FUNCTIONS
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const sequence = async () => {
  await sleep(1500);
  for (const state of transformationStates) {
    for (const frame of state.frames) {
      ctx.drawImage(indicator, 0, 0, 75, 75)
      canvas.style.setProperty('--background', `${frame}`)
      await sleep(400);
    }
    setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},100);
    canvas.style.setProperty('--height', 515 + "px");
    setTimeout(() => {canvas.style.setProperty('--height', 0 + "px")},500);
    ctx.drawImage(indicator, 0, 0, 75, 75)
    popUps = [];
    moveImg.src = './assets/move.png';
    await sleep(150);
  }
  popUps = [];
  await sleep(1500);
  moveImg.src = ''
  ctx.clearRect(0,0,canvas.width,canvas.height);
  canvas.style.setProperty('--background', 'url(./assets/finalMove.png');
  await sleep(1100);
  window.location.href = '../Running/running.html';
}

function distance(x1,y1,x2,y2){
  let a = x1 - x2; 
  let b = y1 - y2;
  let c = Math.sqrt( a*a + b*b );
  return c;
} 

let popUps = [];

function popUp(x,y){
  var pop = {
   x: x,
   y: y,
   r: 50, 
   img: moveImg
  }

  let overlap = false;
  if(popUps.length === 0){
    popUps.push(pop);
  }
  for(let i=0; i<popUps.length;i++){
      let d = distance(pop.x,pop.y,popUps[i].x,popUps[i].y)
      if(d < pop.r + popUps[i].r){
        overlap = true;
        break;
      //   //they are overlapping
      }
      if(!overlap){
        popUps.push(pop);
      }
  }
  // popUps.push(pop)
  ctx.drawImage(popUps[popUps.length - 1].img, popUps[popUps.length - 1].x, popUps[popUps.length - 1].y, 100, 100);

}

