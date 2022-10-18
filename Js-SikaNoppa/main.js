
let score1 = 0;
let score2 = 0;
let x = 2;
let maxScore = 0;
let player1Wins = 0;
let player2Wins = 0;
let tuplat = 0;
let pelaaja1Nimi = ''
let pelaaja2Nimi = ''

// Canvas //

const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');
const canvasW = canvas.width = 400;
const canvasH = canvas.height = 600;


// Pelaajien määrä //

let pelaaja1 = document.getElementById('yksiPelaaja').addEventListener('click',function (){
    pelaaja1 = true;
    pelaaja1Nimi = document.getElementById('pelaajaYksi').value
    if(pelaaja1Nimi !== 'Nimi?'){
        document.getElementById('kaksiPelaaja').style.visibility='hidden';
        document.getElementById('yksiPelaaja').style.visibility='hidden';
        document.getElementById('pelaajaYksi').style.visibility='hidden';
        document.getElementById('pelaajaKaksi').style.visibility='hidden';
        console.log(pelaaja1)
        document.getElementById('pOs').innerHTML = pelaaja1Nimi + ' SCORE: 0';
    }
})
let pelaaja2 = document.getElementById('kaksiPelaaja').addEventListener('click',function (){
    pelaaja2 = true;
    pelaaja2Nimi = document.getElementById('pelaajaKaksi').value
    pelaaja1Nimi = document.getElementById('pelaajaYksi').value
    if(pelaaja1Nimi !== 'Nimi?' && pelaaja2Nimi !== 'Nimi?'){
        document.getElementById('yksiPelaaja').style.visibility='hidden';
        document.getElementById('kaksiPelaaja').style.visibility='hidden';
        document.getElementById('pelaajaKaksi').style.visibility='hidden';
        document.getElementById('pelaajaYksi').style.visibility='hidden';
        document.getElementById('pTs').innerHTML = pelaaja2Nimi + ' SCORE: 0';
        document.getElementById('pOs').innerHTML = pelaaja1Nimi + ' SCORE: 0';
        console.log(pelaaja2)
    }
})

// Noppien määrä //
let noppa1 = document.getElementById('yksiNoppa').addEventListener('click',function (){
    noppa1 = true;
    document.getElementById('kaksiNoppa').style.visibility='hidden';
    document.getElementById('yksiNoppa').style.visibility='hidden';
    document.getElementById('noppa2').style.visibility='hidden';
    console.log(noppa1)
})
let noppa2 = document.getElementById('kaksiNoppa').addEventListener('click',function (){
    noppa2 = true;
    document.getElementById('yksiNoppa').style.visibility='hidden';
    document.getElementById('kaksiNoppa').style.visibility='hidden';
    console.log(noppa2)
})

// Mihin asti pelataan //

let mx = document.getElementById('value').addEventListener('click',function (){
    maxScore = document.getElementById('maxNumero').value;
    if (maxScore > 0){
    document.getElementById('value').style.visibility='hidden';
    document.getElementById('maxNumero').style.visibility='hidden';
    document.getElementById('tahanAsti').innerHTML='Mihin asti pelataan: ' + maxScore;
    console.log(maxScore)
    }
})


// Nopat // 
let nopat = new Array();
nopat[0] = new Image();
nopat[0].src = './img/d1.gif'
nopat[1] = new Image();
nopat[1].src = './img/d2.gif'
nopat[2] = new Image();
nopat[2].src = './img/d3.gif'
nopat[3] = new Image();
nopat[3].src = './img/d4.gif'
nopat[4] = new Image();
nopat[4].src = './img/d5.gif'
nopat[5] = new Image();
nopat[5].src = './img/d6.gif'

let nopat2 = new Array();
nopat2[0] = new Image();
nopat2[0].src = './img/d1.gif'
nopat2[1] = new Image();
nopat2[1].src = './img/d2.gif'
nopat2[2] = new Image();
nopat2[2].src = './img/d3.gif'
nopat2[3] = new Image();
nopat2[3].src = './img/d4.gif'
nopat2[4] = new Image();
nopat2[4].src = './img/d5.gif'
nopat2[5] = new Image();
nopat2[5].src = './img/d6.gif'
let tulos = 0;

// peli //
function heita(){
    if (score1 < maxScore || score2 < maxScore){
        if (noppa2 === true){
            if (pelaaja1 === true || pelaaja2 === true){
                document.getElementById('voittaja').innerHTML=''
                document.getElementById('voittaja').style.visibility = 'hidden';
                let random=Math.round(Math.random()*5)
                document.getElementById('noppa').src = nopat[random].src;
                console.log(nopat[random])
                let random2=Math.round(Math.random()*5)
                document.getElementById('noppa2').src = nopat2[random2].src;
                console.log(nopat2[random2])
                let yht = (random + 1) + (random2 + 1)
                let yht2 = ((random + 1) + (random2 + 1)) * 2
                console.log(yht)
                if (random == 0 || random2 == 0){
                    tulos = 0;
                    tuplat = 0;
                    return lisaaPisteet();
                }
                if (random === random2){
                    tulos += yht2;
                    tuplat++;
                }
                if(random == 0 && random2 == 0){
                    tulos += 25;
                }
                if(random != random2){
                    tulos += yht;
                    tuplat = 0;
                }
                if(tuplat == 3){
                    tulos = 0;
                    tuplat = 0;
                    return lisaaPisteet();
                }
            }
        }
        if (noppa1 === true){
            if (pelaaja1 === true || pelaaja2 === true){
                let random=Math.round(Math.random()*5)
                document.getElementById('noppa').src = nopat[random].src;
                console.log(nopat[random])
                let yht = (random + 1);
                if (random == 0){
                    tulos = 0;
                    return lisaaPisteet();
                }else{
                    tulos += yht;
                }
            }
        }
    }
    if (score1 >= maxScore){
        tulos = 0;
        return uusiPeli()
    }
    if (score2 >= maxScore){
        tulos = 0;
        return uusiPeli()
    }

}


function lisaaPisteet(){
    if(noppa1 === true || noppa2 === true){
        if (pelaaja2 === true){
            if (x % 2 == 0){
            document.getElementById('pOs').innerHTML = pelaaja1Nimi + ' SCORE: ' + (score1 + tulos);
            score1 = score1 + tulos;
            x++
            document.getElementById('vuoro').innerHTML = 'Pelaaja ' + pelaaja2Nimi + ' vuoro'
            tulos = 0;
            }else{
            document.getElementById('pTs').innerHTML = pelaaja2Nimi + ' SCORE: ' + (score2 + tulos);
            score2 = score2 + tulos;
            x++
            document.getElementById('vuoro').innerHTML = 'Pelaaja ' + pelaaja1Nimi + ' vuoro'
            tulos = 0;
            }
        }
        if (pelaaja1 === true){
            document.getElementById('pOs').innerHTML = pelaaja1Nimi + ' SCORE: ' + (score1 + tulos);
            score1 = score1 + tulos;
            tulos = 0;
        }
        if (score1 >= maxScore){
            document.getElementById('voittaja').innerHTML='PELAAJA ' + pelaaja1Nimi + ' VOITTI!'
            player1Wins++;
            document.getElementById('voittaja').style.visibility = 'visible';
            document.getElementById('pOne').innerHTML = 'Voitot: ' + (player1Wins);
        }
        if (score2 >= maxScore){
            document.getElementById('voittaja').style.visibility = 'visible';
            document.getElementById('voittaja').innerHTML='PELAAJA ' + pelaaja2Nimi + ' VOITTI!'
            player2Wins++;
            document.getElementById('pTwo').innerHTML = 'Voitot: ' + (player2Wins);
        }
    }
}

function uusiPeli(){
    score1 = 0;
    score2 = 0;
    tulos = 0;
    x = 2;
    document.getElementById('voittaja').innerHTML=''
    document.getElementById('voittaja').style.visibility = 'hidden';
    document.getElementById('pOs').innerHTML = pelaaja1Nimi + ' SCORE: 0';
    document.getElementById('pTs').innerHTML = pelaaja2Nimi + ' SCORE: 0';
    document.getElementById('vuoro').innerHTML = 'Pelaaja ' + pelaaja1Nimi + ' vuoro'

}
function tyhjennaPelaajaYksi() {
    document.getElementById("pelaajaYksi").value = '';
}
function tyhjennaPelaajaKaksi() {
    document.getElementById("pelaajaKaksi").value = '';
}


