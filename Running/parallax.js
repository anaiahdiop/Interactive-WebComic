// select the canvas and get
// its 2d context
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let backgroundSpeed = 10; 
// let backgroundFrame = 0;

//PARALLAX BACKGROUND
const backgroundLayer1 = new Image();
backgroundLayer1.src = '../ForestBackground/02_Bushes.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = '../ForestBackground/04_Forest.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = '../ForestBackground/06_Forest.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = '../ForestBackground/07_Forest.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = '../ForestBackground/08_Forest.png';
const backgroundLayer6 = new Image();
backgroundLayer6.src = '../ForestBackground/09_Forest.png';

    const showSpeed = document.getElementById('showspeed');
    showSpeed.innerHTML = backgroundSpeed;

    canvas.onmousedown = function(e){
        backgroundSpeed = 15;
        showSpeed.innerHTML = backgroundSpeed;
    }

    canvas.onmouseup = function(e){
        backgroundSpeed = 10;
        showSpeed.innerHTML = backgroundSpeed;
    }

    class Layer{
        constructor(image,speedMod){
            this.x = 0;
            this.y = 0;
            this.width = 960;
            this.height = 540;
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
        // draw(){
        //     ctx.drawImage(this.image,this.x,this.y,this.width,this.height,0,0,canvas.width,canvas.height);
        //     ctx.drawImage(this.image,this.x - this.width,this.y,this.width,this.height,0,0,canvas.width,canvas.height);
        // }
    };

    const layer1 = new Layer(backgroundLayer1, 1)
    const layer2 = new Layer(backgroundLayer2, 0.8)
    const layer3 = new Layer(backgroundLayer3, 0.6)
    const layer4 = new Layer(backgroundLayer4, 0.4)
    const layer5 = new Layer(backgroundLayer5, 0.2)
    const layer6 = new Layer(backgroundLayer6, 0.25)

    const backgrounds = [layer6,layer5,layer4,layer3,
    layer2,layer1];


    function parallax(){ 
        ctx.clearRect(0,0,canvas.width,canvas.height);
        backgrounds.forEach((background,index) =>{
            background.update();
            // background.draw();
        });
        // backgroundFrame++;
        requestAnimationFrame(parallax);
    };
    parallax();



