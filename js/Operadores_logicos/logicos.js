export function operadores_logicos_actividad1() {
    let num1, num2, num3;
        num1 = parseInt(prompt('Ingrese primer valor'));
        num2 = parseInt(prompt('Ingrese segundo valor'));
        num3 = parseInt(prompt('Ingrese tercer valor'));
        num3 = parseInt(num3);
        if (num1 < 10 || num2 < 10 || num3 < 10) {
            alert('Alguno de los números es menor a diez');
        }
}