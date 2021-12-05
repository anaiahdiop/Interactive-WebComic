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
canvas.width = 800;
canvas.height = 360;
var timeout;

//pop up 
const moveImg = new Image();
moveImg.src = './assets/move.png'


//animation
let gameFrame = 0;
const spriteAnimations = [];
const animationStates = [
    {
        name:'idle',
        frames:7,
    },
    {
        name:'jump',
        frames:7,
    },
    {
        name:'fall',
        frames:7,
    },
    {
        name:'run',
        frames:9,
    },

];

var SpriteSheetUrl = './assets/shadow_dog.png'
var sprite = new Image();
sprite.src = SpriteSheetUrl;
const spriteLayer = new Sprite(sprite, 0, 300, 228, animationStates, "run", 10)
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
function popUp(x,y){
  ctx.drawImage(moveImg, x, y, 100, 100);
}

function sequence(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
        spriteLayer.update();
        requestAnimationFrame(sequence);
};

// sequence();




// e.offsetX is the mouse coordinate for my mouse
//(name of property , new value)



// function 
// go through the frames of my animation 
//I set the current frame to my background image
//when i get to last frame change animation state 
