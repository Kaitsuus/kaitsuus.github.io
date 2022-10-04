function btn(){
req();
cb();
radio();

}

function req(){
    document.getElementById('id').required = true;
    document.getElementById('salasana').required = true;
    document.getElementById('nimi').required = true;
    document.getElementById('osoite').required = true;
    document.getElementById('postinro').required = true;
    document.getElementById('email').required = true;
    document.getElementById('maa').required = true;
}
function cb(){
    document.getElementById('kieli').required = true;
    if(document.getElementById('kieli2').checked){
        document.getElementById('kieli').required = false;
    }
}
function radio(){
    document.getElementById('mies').required = true;
    if(document.getElementById('nainen').checked){
        document.getElementById('mies').required = false;
    }
}