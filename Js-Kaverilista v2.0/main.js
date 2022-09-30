
const array = Array();

function listaa(){
   let syote = document.querySelector('.section input[type="text"]').value;
   if(syote.length < 1) {
      alert('Tyhjä syöte!');
      return;
  }
   array.push(syote)
   tulostaKaveri();
}

function tulostaKaveri()
{
   let e = "<hr/>";   
    
   for (let i=0; i<array.length; i++)
   {
     e += `${i +1}${'.'}${array[i]}<br/>`;
   }
   document.getElementById("Tulostus").innerHTML = e;
   console.log(array);
   tyhjennaKentta();
}
function poistaKaveri() {
   let indeksi = array.indexOf(document.getElementById("kaveri").value);
   console.log(array.indexOf(document.getElementById("kaveri").value));
   console.log(array);

   array.splice(indeksi,1);
   console.log(array);
   tulostaKaveri();
}
function jarjesta(){
   array.sort();
   tulostaKaveri();
}
function tyhjennaKentta() {
   document.getElementById("kaveri").value = '';
}

