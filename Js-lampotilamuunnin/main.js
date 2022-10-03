function muunna() {
    let syote = document.querySelector('.section1 input[type="number"]').value;
    if(syote == ""){
        document.getElementById("tulostus").innerHTML =('Tyhjä syöte!')

    } else {
    muunnokset();
    }
    tyhjennaKentta();
}


function muunnokset() {
    let syote = document.querySelector('.section1 input[type="number"]').value;
    syote = parseFloat(syote);

    if (document.getElementById("muunnos").value == "c2f") {
        document.getElementById("tulostus").innerHTML=(syote*1.8)+32 + ' ℉';
        if (syote <= -459.67){
            document.getElementById("tulostus").innerHTML=(syote*1.8)+32 + ' ℉' + "<br />" + 'Lämpötila on pienempi, kuin absoluuttinen nollapiste (459.67 ℉)';
        }
    }
    else if (document.getElementById("muunnos").value == "c2k") {
        document.getElementById("tulostus").innerHTML=syote+273.15 + ' K';
        if (syote <= -0){
            document.getElementById("tulostus").innerHTML=syote+273.15 + ' K' + "<br />" + 'Lämpötila on pienempi, kuin absoluuttinen nollapiste (0 K)';
        }
        
    }
    else if (document.getElementById("muunnos").value == "k2f") {
        document.getElementById("tulostus").innerHTML=((syote-273.15)*1.8)+32 + ' ℉';
        if (syote <= -459.67){
            document.getElementById("tulostus").innerHTML=(syote*1.8)+32 + ' ℉' + "<br />" + 'Lämpötila on pienempi, kuin absoluuttinen nollapiste (459.67 ℉)';
        }
    }
    else if (document.getElementById("muunnos").value == "k2c") {
        document.getElementById("tulostus").innerHTML=syote-273.15 + ' ℃';
        if (syote <= -273.15){
            document.getElementById("tulostus").innerHTML=syote-273.15 + ' ℃' + "<br />" + 'Lämpötila on pienempi, kuin absoluuttinen nollapiste (273.15 ℃)';
        }
    }
    else if (document.getElementById("muunnos").value == "f2c") {
        document.getElementById("tulostus").innerHTML=(syote-32)/1.8 + ' ℃';
        if (syote <= -273.15){
            document.getElementById("tulostus").innerHTML=syote-273.15 + ' ℃' + "<br />" + 'Lämpötila on pienempi, kuin absoluuttinen nollapiste (273.15 ℃)';
        }
    }
    else if (document.getElementById("muunnos").value == "f2k") {
        document.getElementById("tulostus").innerHTML=((syote-32)/1.8)+273.15 + ' K';
        if (syote <= -0){
            document.getElementById("tulostus").innerHTML=((syote-32)/1.8)+273.15 + ' K' + "<br />" + 'Lämpötila on pienempi, kuin absoluuttinen nollapiste (0 K)';
        }
    }

}
function tyhjennaKentta() {
    document.getElementById("lampotila").value = '';
    }
