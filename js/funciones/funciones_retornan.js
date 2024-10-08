export function funciones_retornan_actividad1() {
    //Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.

    function retornarMayor(x1, x2, x3) {
        if (x1 > x2 && x1 > x3) {
            return x1;
        } else {
            if (x2 > x3) {
                return x2;
            } else {
                return x3;
            }
        }
    }

    let valor1 = parseInt(prompt('Ingrese primer valor:'));
    let valor2 = parseInt(prompt('Ingrese segundo valor:'));
    let valor3 = parseInt(prompt('Ingrese tercer valor:'));
    console.log('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
    let may = retornarMayor(valor1, valor2, valor3);
    console.log('El mayor de los tres es :' + may);

}
export function funciones_retornan_actividad2() {
    //Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

    function retornarPerimetro(lado) {
        let perimetro;
        perimetro = lado * 4;
        return perimetro;
    }

    let lado = parseInt(prompt('Ingrese la medida del lado de un cuadrado:'));
    console.log('El perímetro del cuadrado es:' + retornarPerimetro(lado));
}