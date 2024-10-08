export function condicionales_simples_actividad1() {
    let nota1;
    let nota2;
    let nota3;
    nota1 = parseInt(prompt('Ingrese primer nota'));
    nota2 = parseInt(prompt('Ingrese segunda nota'));
    nota3 = parseInt(prompt('Ingrese tercer nota'));
    let suma;
    suma = nota1 + nota2 + nota3;
    let promedio;
    promedio = suma / 3;
    if (promedio >= 7) {
        console.log('Promocionado');
    }
    else {
        console.log('desaprobado');
    }
}

export function condicionales_simples_actividad2() {
    let clave1;
    let clave2;
    clave1 = prompt('Ingrese una clave:');
    clave2 = prompt('Repita el ingreso de la clave:');
    if (clave1 == clave2) {
        console.log('Ingresó las dos claves iguales');
    }
    else {
        console.log('Las claves no coinciden');
    }
}