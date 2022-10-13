
let x = 0;
let i = 0;
//Fruit frames//
let seven = [0];
let apple = [1, 5];
let melon = [2, 6, 9];
let pear = [3, 7, 10, 12];
let cherry = [4, 8, 11, 13, 14];

//Panos & kolikot//
let bet = 1;
let bet2 = 2;
let bet3 = 3;
let coins = 50;
let j = 1;
function cycleBets(){
    if (j == 1){
        document.getElementById('betValue').innerHTML = bet;
    }
    if (j == 2){
        document.getElementById('betValue').innerHTML = bet2;
    }
    if (j == 3){
        document.getElementById('betValue').innerHTML = bet3;
    }
}

let bets = document.getElementById('bets').addEventListener('click',function (){
    if (j < 3){
        j++;
    }else{
        j = 1;
    }
    cycleBets()
});

//Random number generators//
let random = Math.floor(Math.random(16) * 250)
let random2 = Math.floor(Math.random(20) * 250)
let random3 = Math.floor(Math.random(30) * 250)
let random4 = Math.floor(Math.random(25) * 250)

//Canvas//
const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');
const canvasW = canvas.width = 600;
const canvasH = canvas.height = 600;

//Image control//
const roller1 = new Image();
roller1.src = './sprites/rulla2.png';
const startImg = new Image();
startImg.src = './sprites/onload.png';
const spriteW = 96;
const spriteH = 96;
let roller1frame = 15;
let gameFrame = 0;
let roller2frame = 15;
let gameFrame2 = 0;
let roller3frame = 15;
let gameFrame3 = 0;
let roller4frame = 15;
let gameFrame4 = 0;
const staggerFrames = 10;


//start//
let btn = document.getElementById('start').addEventListener('click',function (){
    if(j <= coins){
        i++;
        rGsOff();
        aOff();
        animate();
        coins -= j;
    }
    document.getElementById('coinsAmount').innerHTML = coins;
});

//reset//
let resetBtn = document.getElementById('reset').addEventListener('click',function (){
    if (coins < 50 || coins > 50){
        aon();
        animateOnLoad();
        coins = 50;
        document.getElementById('coinsAmount').innerHTML = coins;
    }
});

//Rulla animation//
function animate(){
    if (x < 4){
        contex.clearRect(0, 0, canvasW, canvasH);
        if (checkBox.checked == true){
            contex.drawImage(roller1, 0 * spriteW, roller1frame * spriteH, spriteW, spriteH, 100, 250, spriteW, spriteH)
            roller1frame;
            x++;
        }
        if (checkBox.checked == false){
            animateRoller1()
        }
        if (checkBox2.checked == true){
            contex.drawImage(roller1, 0 * spriteW, roller2frame * spriteH, spriteW, spriteH, 200, 250, spriteW, spriteH)
            roller2frame;
            console.log(roller2frame);
            x++;
        }
        if (checkBox2.checked == false){
            animateRoller2()
        }
        if (checkBox3.checked == true){
            contex.drawImage(roller1, 0 * spriteW, roller3frame * spriteH, spriteW, spriteH, 300, 250, spriteW, spriteH)
            roller3frame;
            x++;
        }
        if (checkBox3.checked == false){
            animateRoller3()
        }
        if (checkBox4.checked == true){
            contex.drawImage(roller1, 0 * spriteW, roller4frame * spriteH, spriteW, spriteH, 400, 250, spriteW, spriteH)
            roller4frame;
            x++;
        }
        if (checkBox4.checked == false){
            animateRoller4()
        }
        requestAnimationFrame(animate);
    }else{
        checkRollers();
        reset();
    }
};


//Lopeta animaatio//
function reset() {  
    x = 0;
    gameFrame = 0
    gameFrame2 = 0
    gameFrame3 = 0
    gameFrame4 = 0
}

 // Roller1 animaatio //
function animateRoller1(){
    contex.drawImage(roller1, 0 * spriteW, roller1frame * spriteH, spriteW, spriteH, 100, 250, spriteW, spriteH);
    if(gameFrame < random){
        if (gameFrame % staggerFrames == 0){
            if (roller1frame < 14) roller1frame++;
            else roller1frame = 0;
        }
        gameFrame++;
        if (gameFrame === random){
            cancelAnimationFrame(gameFrame);
            console.log(roller1frame);
            x++;
        }
    }
}

// Roller2 animaatio //
function animateRoller2(){
    contex.drawImage(roller1, 0 * spriteW, roller2frame * spriteH, spriteW, spriteH, 200, 250, spriteW, spriteH);
    if(gameFrame2 < random2){
        if (gameFrame2 % staggerFrames == 0){
            if (roller2frame < 14) roller2frame++;
            else roller2frame = 0;
        }
        gameFrame2++;
        if (gameFrame2 === random2){
            cancelAnimationFrame(gameFrame2);
            console.log(roller2frame);
            x++;
        }
    }
}

// Roller3 animaatio //
function animateRoller3(){
    contex.drawImage(roller1, 0 * spriteW, roller3frame * spriteH, spriteW, spriteH, 300, 250, spriteW, spriteH);
    if(gameFrame3 < random3){
        if (gameFrame3 % staggerFrames == 0){
            if (roller3frame < 14) roller3frame++;
            else roller3frame = 0;
        }
        gameFrame3++;
        if (gameFrame3 === random3){
            cancelAnimationFrame(gameFrame3);
            console.log(roller3frame);
            x++;
        }
    }
}

// Roller4 animaatio //
function animateRoller4(){
    contex.drawImage(roller1, 0 * spriteW, roller4frame * spriteH, spriteW, spriteH, 400, 250, spriteW, spriteH);
    if(gameFrame4 < random4){
        if (gameFrame4 % staggerFrames == 0){
            if (roller4frame < 14) roller4frame++;
            else roller4frame = 0;
        }
        gameFrame4++;
        if (gameFrame4 === random4){
            cancelAnimationFrame(gameFrame4);
            console.log(roller4frame);
            x++;
        }
    }
}

// Tulosten tarkastus //
function checkRollers(){
    console.log('checking..')
    if(pear.includes(roller1frame) && pear.includes(roller2frame) && pear.includes(roller3frame) && pear.includes(roller4frame)){
        console.log('päärynä')
        coins += 4*j;
        rGson()
        resetGameState()
        document.getElementById('coinsAmount').innerHTML = coins;
    }
    if(cherry.includes(roller1frame) && cherry.includes(roller2frame) && cherry.includes(roller3frame) && cherry.includes(roller4frame)){
        console.log('kirsikka')
        coins += 3*j
        rGson()
        resetGameState()
        document.getElementById('coinsAmount').innerHTML = coins;
    }
    if(melon.includes(roller1frame) && melon.includes(roller2frame) && melon.includes(roller3frame) && melon.includes(roller4frame)){
        console.log('meloni')
        coins += 5*j;
        rGson()
        resetGameState()
        document.getElementById('coinsAmount').innerHTML = coins;
    }
    if(apple.includes(roller1frame) && apple.includes(roller2frame) && apple.includes(roller3frame) && apple.includes(roller4frame)){
        console.log('omena')
        coins += 6*j
        rGson()
        resetGameState()
        document.getElementById('coinsAmount').innerHTML = coins;
    }
    if(seven.includes(roller1frame) && seven.includes(roller2frame) && seven.includes(roller3frame) && seven.includes(roller4frame)){
        console.log('seitseman')
        coins += 10*j
        rGson()
        resetGameState()
        document.getElementById('coinsAmount').innerHTML = coins;
    }
    if(i > 1){
        if(checkBox.checked == false && checkBox2.checked == false && checkBox3.checked == false && checkBox3.checked == false){
            i = 0;
        }else{
        rGson()
        resetGameState()
        }
    }
}

// Lukitse 1 //
let checkBox = document.getElementById('lukittu');
function lukitse() {
    if (checkBox.checked == true){
        document.getElementById('lukittuImg').style.visibility ='visible';
    } else {
        document.getElementById('lukittuImg').style.visibility ='hidden';
    }
}

// Lukitse 2 //
let checkBox2 = document.getElementById('lukittu2');
function lukitse2() {
    if (checkBox2.checked == true){
        document.getElementById('lukittu2Img').style.visibility ='visible';
    } else {
        document.getElementById('lukittu2Img').style.visibility ='hidden';
    }
}

// Lukitse 3 //
let checkBox3 = document.getElementById('lukittu3');
function lukitse3() {
    if (checkBox3.checked == true){
      document.getElementById('lukittu3Img').style.visibility ='visible';
    } else {
        document.getElementById('lukittu3Img').style.visibility ='hidden';
    }
}

// Lukitse 4 //
let checkBox4 = document.getElementById('lukittu4');
function lukitse4() {
    if (checkBox4.checked == true){
        document.getElementById('lukittu4Img').style.visibility ='visible';
    } else {
        document.getElementById('lukittu4Img').style.visibility ='hidden';
    }
}




// On load //
let aOn = true;
function animateOnLoad(){
    if (aOn){
        if (x < 4){
            contex.clearRect(0, 0, canvasW, canvasH);
            animateRoller1()
            animateRoller2()
            animateRoller3()
            animateRoller4()
            startBar()
            requestAnimationFrame(animateOnLoad)
        }
        if (x == 4){
            reset();
        }
    }
}
animateOnLoad()

function aOff(){
    aOn = false;
}
function aon(){
    aOn = true;
}
function startBar(){
    contex.drawImage(startImg, 0 * 361, 0 * 68, 361, 68, 120, 260, 361, 68);
}

// pelin nollaus //
let rGsOn = true;

function rGsOff(){
    rGsOn = false;
}
function rGson(){
    rGsOn = true;
}
function resetGameState(){
    if (rGsOn){
        i = 0;
        aOff()
        document.getElementById('lukittu').checked = false;
        document.getElementById('lukittuImg').style.visibility ='hidden';
        document.getElementById('lukittu2').checked = false;
        document.getElementById('lukittu2Img').style.visibility ='hidden';
        document.getElementById('lukittu3').checked = false;
        document.getElementById('lukittu3Img').style.visibility ='hidden';
        document.getElementById('lukittu4').checked = false;
        document.getElementById('lukittu4Img').style.visibility ='hidden';
        contex.clearRect(0, 0, canvasW, canvasH);
        contex.drawImage(roller1, 0 * spriteW, roller1frame * spriteH, spriteW, spriteH, 100, 250, spriteW, spriteH);
        roller1frame;
        contex.drawImage(roller1, 0 * spriteW, roller2frame * spriteH, spriteW, spriteH, 200, 250, spriteW, spriteH);
        roller2frame;
        contex.drawImage(roller1, 0 * spriteW, roller3frame * spriteH, spriteW, spriteH, 300, 250, spriteW, spriteH);
        roller3frame;
        contex.drawImage(roller1, 0 * spriteW, roller4frame * spriteH, spriteW, spriteH, 400, 250, spriteW, spriteH);
        roller4frame;
        requestAnimationFrame(resetGameState)
    }
}

