function TipoMotor(x) {
    
    switch (x) {
        case 0:
            document.write("No hay establecido un valor definido para el tipo de bomba");
            break;
        case 1:
            document.write("La bomba es una bomba de agua");
            break;
        case 2:
            document.write("La bomba es una bomba de gasolina");
            break;
        case 3:
            document.write("La bomba es una bomba de hormigon");
            break;
        case 4:
            document.write("La bomba es una bomba de pasta alimenticia");
            break;
        default:
            document.write("No existe un valor valido para tipo de bomba")

    }
}
TipoMotor(1);


// 2
function obtenerValorConImpuesto(a, b) {
    
    switch (b) {
        case 1:
            valor = ((a * 21) /100);
            valorT = (valor + b);
            alert("El valor sin impuestos mas el 21% si el tipo de producto es 1" + valorT);
            break;
        case 2:
            valor = ((a * 10) /100);
            valorT = (valor + b);
            alert("El valor sin impuestos mas el 10% si el tipo de producto es 2" + valorT);
            break;
        case 3:
            valor = ((a * 5) /100);
            valorT = (valor + b);
            alert("El valor sin impuestos mas el 5% si el tipo de producto es 3" + valorT);
            break;
    }
}
obtenerValorConImpuesto(100,3)