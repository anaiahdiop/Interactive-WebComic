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
        // frames: ['url(./assets/1.png)','url(./assets/2.png)','url(./assets/3.png)'],
    },
    {
        name:'second',
        frames: ['url(./assets/Transformation/transform10.png)','url(./assets/Transformation/transform11.png)','url(./assets/Transformation/transform12.png)','url(./assets/Transformation/transform13.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform15.png)','url(./assets/Transformation/transform16.png)','url(./assets/Transformation/transform17.png)'],
        // frames: ['url(./assets/4.png)','url(./assets/5.png)','url(./assets/6.png)'],
    },
  //   {
  //     name:'third',
  //     frames: ['url(./assets/Transformation/transform13.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform15.png)','url(./assets/Transformation/transform16.png)','url(./assets/Transformation/transform17.png)','url(./assets/Transformation/transform18.png)'],
  //     // frames: ['url(./assets/4.png)','url(./assets/5.png)','url(./assets/6.png)'],
  // }

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
  // mouseCursor.style.top = e.pageY + "px"
  // mouseCursor.style.left = e.pageX + "px"
  canvas.style.setProperty('--x', -e.offsetX + "px");
  canvas.style.setProperty('--y', -e.offsetY + "px");
  clearTimeout(timeout);
  timeout = setTimeout(function(){popUp(e.offsetX, e.offsetY)}, 150);
});

// canvas.addEventListener("click", (e) => {
//   // ctx.beginPath();
//   setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},100);
//   canvas.style.setProperty('--height', 515 + "px");
//   setTimeout(() => {canvas.style.setProperty('--height', 0 + "px")},1150);
// })

//FUNCTIONS
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const sequence = async () => {
  for (const state of transformationStates) {
    // console.log(state.frames)
    for (const frame of state.frames) {
      canvas.style.setProperty('--background', `${frame}`)
      await sleep(400);
      // await sleep(5000);
    }
    setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},100);
    canvas.style.setProperty('--height', 515 + "px");
    setTimeout(() => {canvas.style.setProperty('--height', 0 + "px")},500);
    popUps = [];
    moveImg.src = './assets/move.png';
    await sleep(250);

    // transformationStates.forEach((state) => {
  //   await sleep(2000);
  //   state.frames.forEach((frame) => {
  //     canvas.style.setProperty('--background', `${frame}`)
  //     await sleep(2000);
  // });
  }
  popUps = [];
  await sleep(1500);
  moveImg.src = ''
  ctx.clearRect(0,0,canvas.width,canvas.height);
  canvas.style.setProperty('--background', 'url(./assets/finalMove.png')
  await sleep(1100);
  window.location.href = '../Running/running.html';
}

function distance(x1,y1,x2,y2){
  let a = x1 - x2; 
  let b = y1 - y2;
  let c = Math.sqrt( a*a + b*b );
  return c;
} 

console.log(distance(5,6,7,1))
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
  console.log("this is pop " + pop.x,pop.y);
  for(let i=0; i<popUps.length;i++){
      console.log(popUps[i].x,popUps[i].y);
      let d = distance(pop.x,pop.y,popUps[i].x,popUps[i].y)
      // console.log(`this is the distance ${d}  this is the addition  ${pop.r + popUps[i].r}`)
      if(d < pop.r + popUps[i].r){
        overlap = true;
        break;
      //   //they are overlapping
      }
      if(!overlap){
        popUps.push(pop);
      }
  }
  console.log(popUps)
  // popUps.push(pop)
  ctx.drawImage(popUps[popUps.length - 1].img, popUps[popUps.length - 1].x, popUps[popUps.length - 1].y, 100, 100);

}

