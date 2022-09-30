const array = Array();

function listaa(){
   let syote = document.querySelector('.section input[type="text"]').value;
   if(syote.length < 1) {
      alert('Tyhjä syöte!');
      return;
  }
  if(array.length > 9){
   alert('Liikaa kavereita');
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
function tyhjennaKentta() {
   document.getElementById("kaveri").value = '';
}
