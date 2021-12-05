var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let backgroundSpeed = 10; 
canvas.width = 600;
canvas.height = 600;

var runSpriteSheetUrl = './assets/firstRun.png'
var runSprite = new Image();
runSprite.src = runSpriteSheetUrl;

let gameFrame = 0;
const spriteAnimations = [];
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
    backgroundSpeed = 10;
    setTimeout(function(){window.location.href = '../Trip/trip.html'}, 100);
    
    // showSpeed.innerHTML = backgroundSpeed;
    // spriteLayer.staggerFrames = 10
   
})

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

    class Sprite{
        constructor(image,speedMod,width,height,spriteStates, spriteState, staggerFrames){
            // super(image,speedMod): is there any reason to have them connected
            this.image = image;
            this.speedMod = speedMod
            this.width = width;
            this.height = height;
            this.spriteAnimations = [];
            this.staggerFrames = staggerFrames; // stagger frames = how many times it iterates before it moves to next image ->higher # the slower it is
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
            requestAnimationFrame(this.update); //this function tells browser "im going to run an animation" then give the animation "animate"
        }
    };

    const layer1 = new Layer(backgroundLayer1, .9)
    const layer2 = new Layer(backgroundLayer2, 0.7)
    const layer3 = new Layer(backgroundLayer3, 0.6)
    const layer4 = new Layer(backgroundLayer4, 0.5)
    const layer5 = new Layer(backgroundLayer5, 0.3)
    const spriteLayer = new Sprite(runSprite, 0, 200, 200, runAnimationStates, "run", 10)

    const layers = [layer5,layer4,layer3,
    layer2,spriteLayer,layer1];


    function parallax(){ 
        ctx.clearRect(0,0,canvas.width,canvas.height);
        layers.forEach((layer) =>{

                layer.update();

        });
        requestAnimationFrame(parallax);
    };

    parallax();




