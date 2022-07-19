var valHTML = document.getElementById("value");
var gainHTML = document.getElementById("gain");
var resHTML = document.getElementById("res");

function change () {
    var val = parseFloat(valHTML.value);
    var gain = parseFloat(gainHTML.value);
    var res = val + (val/100*gain);
    resHTML.innerText = res;
}