function TipoMotor(x) {
    x = 3;
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
TipoMotor();


// 2
function obtenerValorConImpuesto(a, b) {
    x = 3;
    switch (x) {
        case 0:
            document.write("El valor sin impuestos mas el 21% si el tipo de producto es 1");
            break;
        case 1:
            document.write("El valor sin impuestos mas el 10% si el tipo de producto es 2");
            break;
        case 2:
            document.write("El valor sin impuestos mas el 5% si el tipo de producto es 3");
            break;
    }
}