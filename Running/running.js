// select the canvas and get
// its 2d context
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let backgroundSpeed = 10; 
canvas.width = 600;
canvas.height = 600;
// let backgroundFrame = 0;

// SPRITE ANIMATION
// var sprite = new Image();
// sprite.src = spriteSheetURL;
// const spriteWidth = 575;
// const spriteHeight = 523;
// let spriteState = 'idle'
var runSpriteSheetUrl = './assets/firstRun.png'
var runSprite = new Image();
runSprite.src = runSpriteSheetUrl;

// stagger frames = how many times it iterates before it moves to next image ->higher # the slower it is
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

const runAnimationStates = [
    {
        name:'run',
        frames:6,
    }
];

canvas.addEventListener("mousedown", function() {
    backgroundSpeed = 15;
    showSpeed.innerHTML = backgroundSpeed;
    spriteLayer.spriteState = 'run';
    spriteLayer.staggerFrames = 8
})


canvas.addEventListener("mouseup", function() {
    setTimeout(function(){window.location.href = '../Trip/trip.html'}, 100);
    // backgroundSpeed = 10;
    // showSpeed.innerHTML = backgroundSpeed;
    // spriteLayer.staggerFrames = 10
   
})


//PARALLAX BACKGROUND
// const backgroundLayer1 = new Image();
// backgroundLayer1.src = './ForestBackground/02_Bushes.png';
// const backgroundLayer2 = new Image();
// backgroundLayer2.src = './ForestBackground/04_Forest.png';
// const backgroundLayer3 = new Image();
// backgroundLayer3.src = './ForestBackground/06_Forest.png';
// const backgroundLayer4 = new Image();
// backgroundLayer4.src = './ForestBackground/07_Forest.png';
// const backgroundLayer5 = new Image();
// backgroundLayer5.src = './ForestBackground/08_Forest.png';
// const backgroundLayer6 = new Image();
// backgroundLayer6.src = './ForestBackground/09_Forest.png';

const backgroundLayer1 = new Image();
backgroundLayer1.src = './Parallax/layer1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = './Parallax/layer2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = './Parallax/layer3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = './Parallax/layer4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = './Parallax/layer5.png';


const showSpeed = document.getElementById('showspeed');
showSpeed.innerHTML = backgroundSpeed;

    class Layer{
        constructor(image,speedMod){
            this.x = 0;
            this.y = 0;
            this.width = 840;
            this.height = 600;
            this.image = image;
            this.speedMod = speedMod
            this.speed = backgroundSpeed + this.speedMod; 
        }
        update(){
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height,0,0,canvas.width,canvas.height);
            ctx.drawImage(this.image,this.x - this.width,this.y,this.width,this.height,0,0,canvas.width,canvas.height);

            this.speed = backgroundSpeed * this.speedMod;
            // this.x = backgroundFrame * this.speed % this.width;

            if(this.x >= this.width){
                this.x = 0;
            }
            this.x = this.x + this.speed;
        
        }
      
    };

    class Sprite extends Layer{
        constructor(image,speedMod,width,height,spriteStates, spriteState, staggerFrames){
            super(image,speedMod)
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
            
            ctx.drawImage(this.image, frameX, frameY, this.width, this.height,200,325,this.width,this.height);
            // ctx.drawImage(this.image, frameX, frameY, this.width, this.height,0,0,canvas.width,canvas.height);
            gameFrame++
            //requestAnimationFrame(this.update); //this function tells browser "im going to run an animation" then give the animation "animate"
        }
    };

    const layer1 = new Layer(backgroundLayer1, .9)
    const layer2 = new Layer(backgroundLayer2, 0.7)
    const layer3 = new Layer(backgroundLayer3, 0.6)
    const layer4 = new Layer(backgroundLayer4, 0.5)
    const layer5 = new Layer(backgroundLayer5, 0.3)
    // const layer6 = new Layer(backgroundLayer6, 0.25)
    // const spriteLayer = new Sprite(sprite, 0, 575, 523, animationStates, "idle", 5)
    const spriteLayer = new Sprite(runSprite, 0, 200, 200, runAnimationStates, "run", 10)


    // Both
    const layers = [layer5,layer4,layer3,
    layer2,spriteLayer,layer1];

    // const layers = [layer6,layer5,layer4,layer3,
    //     layer2,layer1];

    // const layers = [spriteLayer];


    function parallax(){ 
        ctx.clearRect(0,0,canvas.width,canvas.height);
        layers.forEach((layer) =>{

                layer.update();

        });
        requestAnimationFrame(parallax);
    };

    parallax();




