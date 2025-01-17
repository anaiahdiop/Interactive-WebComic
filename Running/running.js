const canvas = document.querySelector('canvas');
const staticPanel = document.querySelector('.pic');
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
let mouseText = document.querySelector('.mouse-text');
const ctx = canvas.getContext('2d');
let backgroundSpeed = 9; 
canvas.width = 600;
canvas.height = 600;

//IMAGES
const indicatorImg = new Image()
indicatorImg.src = './assets/indicator.png'
const staticImage = new Image()
staticImage.src = './assets/backaway.png'
const runSpriteSheetUrl = './assets/runSheet.png'
const runSprite = new Image();
runSprite.src = runSpriteSheetUrl;
const text1 = new Image();
text1.src = './assets/1.png'
const text2 = new Image()
text2.src = './assets/2.png'
const text3 = new Image();
text3.src = './assets/3.png'
const text4 = new Image();
text4.src = './assets/4.png'
const blank = new Image();
blank.src = ' ';
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

let gameFrame = 0;
const runAnimationStates = [
    {
        name:'run',
        frames:6,
    },
    {
        name:'faster',
        frames:6,
    }
];

//EVENT LISTENERS
window.addEventListener('load', (event) => {
    staticPanel.src = staticImage.src;
    parallax();
    
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
        mouseText.style.visibility = "visible";
        outerCursor.style.borderColor = "black";

    })
    canvas.addEventListener('mouseleave', ()=> {
        innerCursor.classList.remove("grow");
        mouseText.style.visibility = "hidden";
        outerCursor.style.borderColor = "white";
    })

  });

  
canvas.addEventListener("mousedown", async () => {
    backgroundSpeed = 12;
    spriteLayer.staggerFrames = 12 
    spriteLayer.spriteState = "faster";
    outerCursor.style.borderColor = "white";
    innerCursor.classList.add("held");
    outerCursor.classList.add("held");
    mouseText.classList.add("held");
    mouseText.innerHTML = "Hold!";
    setTimeout(function(){dialogue.image = blank;}, 2000);
    setTimeout(function(){dialogue.image = text2;}, 3500);
    setTimeout(function(){dialogue.image = blank;}, 6500);
    setTimeout(function(){dialogue.image = text3;}, 8500);
    setTimeout(function(){dialogue.image = blank;}, 11500);
    setTimeout(function(){dialogue.image = text4;}, 13000);
    //text array changes to multiple
})


canvas.addEventListener("mouseup", function() {
    backgroundSpeed = 9;
    spriteLayer.staggerFrames = 13
    setTimeout(function(){window.location.href = '../Trip/trip.html'}, 100);
    innerCursor.classList.remove("held");
    outerCursor.classList.remove("held");
    mouseText.classList.remove("held");
})
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


    class Layer{
        constructor(image,speedMod,x,y){
            this.x = x;
            this.y = y;
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
            // console.log(spriteAnimations)
        }
        
        update(){ //animate
            if(!this) return; //stops findCoordinates: if theres no object dont make a call
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

    const texts = [text1,text2,text3]
    const layer1 = new Layer(backgroundLayer1, .9,0,0)
    const layer2 = new Layer(backgroundLayer2, 0.7,0,0)
    const layer3 = new Layer(backgroundLayer3, 0.6,0,0)
    const layer4 = new Layer(backgroundLayer4, 0.5,0,0)
    const layer5 = new Layer(backgroundLayer5, 0.3,0,0)
    const spriteLayer = new Sprite(runSprite, 0, 200, 200, runAnimationStates, 'run', 13)
    const dialogue = new Layer(text1, 0, 305, -45)
    const indicator = new Layer(indicatorImg,0,0,0)

    const layers = [layer5,layer4,layer3,
    layer2,spriteLayer,layer1,dialogue,indicator];

    function parallax(){ 
        ctx.clearRect(0,0,canvas.width,canvas.height);
        layers.forEach((layer) =>{
                layer.update();
        });
        requestAnimationFrame(parallax);
    };
  
