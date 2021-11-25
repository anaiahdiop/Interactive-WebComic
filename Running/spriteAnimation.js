var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var spriteSheetURL = '../assets/shadow_dog.png';
canvas.width = 600;
canvas.height = 600;
// converts a row and column of the spritesheet
// to coordinates in an image

var image = new Image();
image.src = spriteSheetURL;
const spriteWidth = 575;
const spriteHeight = 523;
let spriteState = 'idle'

let gameFrame = 0;
const staggerFrames = 5; //higher the number the slower it is
const spriteAnimations = [];
const animationStates = [  //different cycles sprite might have 
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

animationStates.forEach((state,index)=>{
    let frames = {
        loc: []
    }
    for(let j = 0; j < state.frames; j++ ){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames;

})

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[spriteState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[spriteState].loc[position].y;
    
    ctx.drawImage(image, frameX, frameY, spriteWidth, spriteHeight,0,0,spriteWidth,spriteHeight);

    gameFrame++
    requestAnimationFrame(animate); //this function tells browser "im going to run an animation" then give the animation "animate"
}  
animate()

canvas.addEventListener("mousedown", function() {
    spriteState = 'run';
})


canvas.addEventListener("mouseup", function() {
    spriteState = 'fall';
    setTimeout(()=> {spriteState = 'idle'}, 500)
})
