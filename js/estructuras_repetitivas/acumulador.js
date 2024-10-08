export function repetivas_acumulador_actividad1() {
    let x = 0;
    let cant1 = 0;
    let cant2 = 0;
    while (x < 10) {
        let nota;
        nota = parseInt(prompt('Ingrese nota'));
        if (nota >= 7) {
            cant1 = cant1 + 1;
        } else {
            cant2 = cant2 + 1;
        }
        x = x + 1;
    }
    alert('Cantidad de alumnos con notas mayores o iguales a 7:' + cant1);
    alert('Cantidad de alumnos con notas menores a 7:' + cant2);
}
export function repetivas_acumulador_actividad2() {
    let x = 0;
    let suma = 0;
    while (x < 5) {
        let altura;
        altura = parseInt(prompt('Ingrese la altura en centímetros(Ej. 175)'));
        suma = suma + altura;
        x = x + 1;
    }
    let promedio = suma / 5;
    alert('La altura promedio de las cinco personas es:' + promedio);
}
