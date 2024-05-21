//Autor: Erik Alves Vilar
//Description: Frame effect with parallax animated with Kyo KOF
//Date: 04-15-2024

const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
const CANVAS_WIDTH = canvas1.width = 120;
const CANVAS_HEIGHT = canvas1.height = 140;

const playerImage = new Image();
playerImage.src = '/static/images/kyo_assets/kyo.png';

/*variable for position*/
const spriteWidth = 145;
const spriteHeight = spriteWidth;
let playerState = "run"
//
let gameFrame = 0;

/*Trick for define velocity of franes*/
let staggerFrames = 7;
/*Same values*/
/*sx or line = x in axle*/
/*sy or line = y in axle*/

const spriteAnimation = []
const animationstates = [
    {
        //index 0
        name: 'static',
        frames: 5,
    },
    {
        //index 1
        name: "jump",
        frames: 4
    },
    {
        //index 2
        name: "run",
        frames: 5
    },
    {
        //index 3
        name: "punch",
        frames: 4
    }
];


animationstates.forEach((state, index) => {
    let frames = {
        loc: [],

    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        /*Here have an order to execute frames baseline in index*/ 
        let positionY = index * spriteWidth;
        frames.loc.push({ x: positionX, y: positionY })
    }
    spriteAnimation[state.name] = frames;
});
console.log(spriteAnimation)

let animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    /*This is a trick for move animation position by position getting rest of position like 0.1, 0.2 etc..*/
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y
    //ctx.drawImage(Image,sx,sy,sw,sh,dx,dy,dw,dh );
    ctx.drawImage(playerImage, frameX, frameY, spriteHeight, spriteWidth, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
    /*Execute animation*/

    gameFrame++;
    /*Calc jump frame 1* frameCurrent*/

}
animate();

window.addEventListener("keydown", (e) => {
    let k = e.keyCode;
    setTimeout(() => {
        if (k == 37 || k == 65) {
     
            playerState  = "run";
        } else if (k == 38 || k == 87) {
           
           playerState = "jump"
        } else if (k == 39 || k == 68) {
            
            playerState = "punch"
        } else if (k == 40 || k == 83) {
            playerState = "static"
        }else if(k == 80){
          gamePause();
         
        }else if(k == 82){
     
           
        }
    }, 1);

});