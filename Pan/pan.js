//CLASSES
class Sprite{
  constructor(image,speedMod,width,height,spriteStates, spriteState, staggerFrames){
      this.image = image;
      this.speedMod = speedMod
      this.width = width;
      this.height = height;
      this.spriteAnimations = [];
      this.staggerFrames = staggerFrames;
      this.spriteStates = spriteStates;
      this.spriteState = spriteState;

  }

  findCoordinates(){ // this is for regular sprite sheets
      this.spriteStates.forEach((state,index)=>{
          let frames = {
              loc: []
          }
          for(let j = 0; j < state.frames; j++ ){
              let positionX = j * this.width;
              let positionY = index * this.height
              frames.loc.push({x: positionX, y: positionY})
          }
          this.spriteAnimations[state.name] = frames;
      })
  }
  
  update(){ //animate
      this.findCoordinates()
      let position = Math.floor(gameFrame/this.staggerFrames) % this.spriteAnimations[this.spriteState].loc.length;
      let frameX = this.width* position;
      let frameY = this.spriteAnimations[this.spriteState].loc[position].y;
      
      ctx.drawImage(this.image, frameX, frameY, this.width, this.height,200,200,this.width,this.height);
      // ctx.drawImage(this.image, frameX, frameY, this.width, this.height,0,0,canvas.width,canvas.height);
      gameFrame++
      requestAnimationFrame(this.update);
  }
};


//VARIABLES
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
backgroundLayer1.src = './assets/1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './assets/2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './assets/3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './assets/4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './assets/5.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = './assets/6.png';

const spriteAnimations = [];
const transformationStates = [
    {
        name:'first',
        frames: ['url(./assets/1.png)','url(./assets/2.png)','url(./assets/3.png)'],
    },
    {
        name:'second',
        frames: ['url(./assets/4.png)','url(./assets/5.png)','url(./assets/6.png)'],
    },
   

];

var SpriteSheetUrl = './assets/shadow_dog.png'
var sprite = new Image();
sprite.src = SpriteSheetUrl;
const spriteLayer = new Sprite(sprite, 0, 300, 228, transformationStates, "run", 10)
console.log(spriteLayer.findCoordinates())

// const spriteLayer = new Sprite(sprite, 0, 575, 523, animationStates, "run", 10)




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
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sequence(){
  console.log(transformationStates)
  // console.log(transformationStates.length)
  
  transformationStates.forEach((state) => {
    state.frames.forEach((frame) => {
      canvas.style.setProperty('--background', `${frame}`)
      await sleep(2000);
  });
  
  
    // transformationStates[i].frames.forEach((frame) => {
    //   console.log(frame)
    //   // setTimeout(() => {canvas.style.setProperty('--background', `${frame}`)},1150);
    //  canvas.style.setProperty('--background', `${frame}`)
    //  await sleep(2000);

    // });
  })
};

sequence();

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

function popUp(x,y){
  ctx.drawImage(moveImg, x, y, 100, 100);
}

// e.offsetX is the mouse coordinate for my mouse
//(name of property , new value)



// function 
// go through the frames of my animation 
//I set the current frame to my background image
//when i get to last frame change animation state 

