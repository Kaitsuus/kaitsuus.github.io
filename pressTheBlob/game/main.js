
let frames = 0;
let score = 0;
let i = 0;
let full = 0;

//Canvas//
const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');
const canvasW = canvas.width = 600;
const canvasH = canvas.height = 600;

//Image control//
const img = new Image();
img.src = '../sprites/blobsprite2.0.png';
const img2 = new Image();
img2.src = '../sprites/blobsprite3.0.png';
const spriteW = 319.7;
const spriteH = 320;
let frame = 12;
let gameFrame = 0;
const staggerFrames = 8;

//Click controll//
let canvasElem = document.querySelector("canvas");
canvasElem.addEventListener("mousedown", function(e){getMousePosition(canvasElem, e);});
function getMousePosition(canvas, event) {
    event.preventDefault();
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    if(x > 191 && x < 401 &&  y > 379 && y < 571 ){
        console.log('hit')
        add();
    }

}

//Audio//
const audio = new Audio();
audio.src = '../sounds/push.mp3';

//Start animation//
function animate(){

    contex.clearRect(0, 0, canvasW, canvasH);
    contex.drawImage(img, frame * spriteW, 0 * spriteH, spriteW, spriteH, 140, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0){
        if (frame < 11) frame++;
        else frame = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
    if (i > 0){
        return nextFrame();
    }

};
animate();

//Gameplay animation//
function nextFrame(){
    contex.clearRect(0, 0, canvasW, canvasH);
    contex.drawImage(img, frames * spriteW, 0 * spriteH, spriteW, spriteH, 140, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0){
        if (frame < 11) frame++;
        else frame = 0;
    }
    if (score > 665) {
        contex.drawImage(img2, frames * spriteW, 0 * spriteH, spriteW, spriteH, 140, 280, spriteW, spriteH);
    }
    gameFrame++;
};

//Scores and gameplay//
function add(){
    audio.play();
    if (frames < 11){
        frames++;
    }else{
        frames = 0;
    }
    if (frames > 1 && i == 1) {
        score++;
    }
    if (frames == 0) {
        document.getElementById('cb').innerHTML ='CYCLE: ' + full;
        full++;
    }
    document.getElementById('sb').innerHTML ='SCORE: ' + score;
}
function gameOn() {
    document.getElementById('btn').style.display = "none";
    i = 1;
}

