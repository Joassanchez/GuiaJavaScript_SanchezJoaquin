export function repetivas_do_while_actividad1() {
    let valor;
    let suma = 0;
    do {
        valor = parseInt(prompt('Ingrese un valor (9999 para finalizar)'));
        if (valor != 9999) {
            suma = suma + valor;
        }
    } while (valor != 9999);
    alert('Valor acumulado total:' + suma);
    if (suma > 0) {
        alert('El valor acumulado es mayor a cero');
    } else {
        if (suma == 0) {
            alert('El valor acumulado es cero');
        } else {
            alert('El valor acumulado es menor a cero');
        }
    }
}