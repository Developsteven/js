
function suma() {
    var valor1 = document.getElementById("text1").value
    var valor2 = document.getElementById("text2").value
    var suma = Number(valor1) + Number(valor2);
    console.log(suma);
    document.getElementById("suma").innerHTML = "La suma de los valor " + valor1 + " y " + valor2 + " es: " + suma
}

function resta() {
    var valor3 = document.getElementById("text3").value
    var valor4 = document.getElementById("text4").value
    var resta = Number(valor3) - Number(valor4);
    console.log(resta);
    document.getElementById("resta").innerHTML = "La resta de los valor " + valor3 + " y " + valor4 + " es: " + resta
}

function multiplicacion() {
    var valor5 = document.getElementById("text5").value
    var valor6 = document.getElementById("text6").value
    var multiplicacion = Number(valor5) * Number(valor6);
    console.log(multiplicacion);
    document.getElementById("multiplicacion").innerHTML = "La multiplicacion de los valor " + valor5 + " y " + valor6 + " es: " + multiplicacion
}


function division() {
    var valor7 = document.getElementById("text7").value
    var valor8 = document.getElementById("text8").value
    var division = Number(valor7) / Number(valor8);
    console.log(division);
    document.getElementById("division").innerHTML = "La division de los valor " + valor7 + " y " + valor8 + " es: " + division
}

function objeto() {
    var nombre = document.getElementById("nombre").value 
    var apellido = document.getElementById("apellido").value
    var direccion = document.getElementById("direccion").value
    var objeto = {
        nombre : document.getElementById(nombre),
        apellido : document.getElementById(apellido),
        direccion : document.getElementById(direccion)
    } 
    // objeto.nombre=nombre
    // objeto.apellido=apellido
    // objeto.direccion=direccion
    
    console.log(objeto);
}

