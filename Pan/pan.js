//STARTER VARIABLES
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 500;
var timeout;

//pop up 
const moveImg = new Image();
moveImg.src = './assets/move.png'


//animation
let gameFrame = 0;
const backgroundLayer1 = new Image();
backgroundLayer1.src = './assets/Transformation/transoorm1.png';
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
        frames: ['url(./assets/Transformation/transform10.png)','url(./assets/Transformation/transform11.png)','url(./assets/Transformation/transform12.png)','url(./assets/Transformation/transform13.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform15.png)','url(./assets/Transformation/transform16.png)','url(./assets/Transformation/transform17.png)'],
        // frames: ['url(./assets/4.png)','url(./assets/5.png)','url(./assets/6.png)'],
    },
  //   {
  //     name:'third',
  //     frames: ['url(./assets/Transformation/transform13.png)','url(./assets/Transformation/transform14.png)','url(./assets/Transformation/transform15.png)','url(./assets/Transformation/transform16.png)','url(./assets/Transformation/transform17.png)','url(./assets/Transformation/transform18.png)'],
  //     // frames: ['url(./assets/4.png)','url(./assets/5.png)','url(./assets/6.png)'],
  // }

];

//EVENT LISTENERS
canvas.addEventListener("mousemove", (e) => {
  canvas.style.setProperty('--x', -e.offsetX + "px");
  clearTimeout(timeout);
  timeout = setTimeout(function(){popUp(e.offsetX, e.offsetY)}, 250);
});

canvas.addEventListener("click", (e) => {
  // ctx.beginPath();
  setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},100);
  canvas.style.setProperty('--height', 515 + "px");
  setTimeout(() => {canvas.style.setProperty('--height', 0 + "px")},1150);
})

//FUNCTIONS
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const task = async () => {
  for (const state of transformationStates) {
    // console.log(state.frames)
    for (const frame of state.frames) {
      canvas.style.setProperty('--background', `${frame}`)
      await sleep(200);
    }
    setTimeout(() => {ctx.clearRect(0,0,canvas.width,canvas.height)},100);
    canvas.style.setProperty('--height', 515 + "px");
    setTimeout(() => {canvas.style.setProperty('--height', 0 + "px")},800);
    await sleep(250);

    // transformationStates.forEach((state) => {
  //   await sleep(2000);
  //   state.frames.forEach((frame) => {
  //     canvas.style.setProperty('--background', `${frame}`)
  //     await sleep(2000);
  // });
  }
  ctx.clearRect(0,0,canvas.width,canvas.height)
  moveImg.src = ''
  await sleep(500);
  canvas.style.setProperty('--background', 'url(./assets/finalMove.png')
  await sleep(1100);
  window.location.href = '../Running/running.html';
}

window.addEventListener('load', (event) => {
  task();
});



function popUp(x,y){
  ctx.drawImage(moveImg, x, y, 100, 100);
}

// e.offsetX is the mouse coordinate for my mouse
//(name of property , new value)



// function 
// go through the frames of my animation 
//I set the current frame to my background image
//when i get to last frame change animation state 


//SEQUENCE NOTES

// async function sequence(){
//   console.log(transformationStates)
//   await sleep(2000);
//   console.log('test')

  
  // transformationStates.forEach((state) => {
  //   await sleep(2000);
  //   state.frames.forEach((frame) => {
  //     canvas.style.setProperty('--background', `${frame}`)
  //     await sleep(2000);
  // });
  
  
    // transformationStates[i].frames.forEach((frame) => {
    //   console.log(frame)
    //   // setTimeout(() => {canvas.style.setProperty('--background', `${frame}`)},1150);
    //  canvas.style.setProperty('--background', `${frame}`)
    //  await sleep(2000);

    // });
  // })
// }; 

// sequence();

// async function demo() {
//   console.log('Taking a break...');
//   await sleep(2000);
//   console.log('Two seconds later, showing sleep in a loop...');

//   // Sleep in loop
//   for (let i = 0; i < 5; i++) {
//     if (i === 3)
//       await sleep(2000);
//     console.log(i);
//   }
// }

// demo();