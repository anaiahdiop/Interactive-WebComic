export default class Sprite{
    constructor(image,speedMod,width,height,spriteStates, spriteState, staggerFrames){
        // super(image,speedMod): is there any reason to have them connected
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
        
        ctx.drawImage(this.image, frameX, frameY, this.width, this.height,200,325,this.width,this.height);
        // ctx.drawImage(this.image, frameX, frameY, this.width, this.height,0,0,canvas.width,canvas.height);
        gameFrame++
        //requestAnimationFrame(this.update); //this function tells browser "im going to run an animation" then give the animation "animate"
    }
};
