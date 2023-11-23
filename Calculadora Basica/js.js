

function sumas (){
    var valores1 = parseFloat(document.getElementById("valores1").value);
    var valores2 = parseFloat(document.getElementById("valores2").value);
    var resultado = valores1 + valores2;
    document.getElementById("resultado").value = resultado;
}

function restas (){
    var valores1 = parseFloat(document.getElementById("valores1").value);
    var valores2 = parseFloat(document.getElementById("valores2").value);
    var resultado = valores1 - valores2;
    document.getElementById("resultado").value = resultado;
}

function multiplicacion (){
    var valores1 = parseFloat(document.getElementById("valores1").value);
    var valores2 = parseFloat(document.getElementById("valores2").value);
    var resultado = valores1 * valores2;
    document.getElementById("resultado").value = resultado;
}

function divisiones (){
    var valores1 = parseFloat(document.getElementById("valores1").value);
    var valores2 = parseFloat(document.getElementById("valores2").value);
    var resultado = valores1 / valores2;
    document.getElementById("resultado").value = resultado;
}

function eliminando_numeros (){
    document.getElementById("valores1").value = "";
    document.getElementById("valores2").value = "";
    document.getElementById("resultado").value = "";
}

