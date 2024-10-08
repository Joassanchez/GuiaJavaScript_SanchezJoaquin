export function funciones_parametros_actividad1() {
    //Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
    function mostrarMenor(x1, x2, x3) {
        if (x1 < x2 && x1 < x3) {
            console.log('El menor de los tres valores es :' + x1);
        } else {
            if (x2 < x3) {
                console.log('El menor de los tres valores es :' + x2);
            } else {
                console.log('El menor de los tres valores es :' + x3);
            }
        }
    }

    let valor1 = parseInt(prompt('Ingrese primer valor:'));
    let valor2 = parseInt(prompt('Ingrese segundo valor:'));
    let valor3 = parseInt(prompt('Ingrese tercer valor:'));
    console.log('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
    mostrarMenor(valor1, valor2, valor3);
}


export function funciones_parametros_actividad2() {
    //Confeccionar una función a la cual le envíe tres enteros y 
        //los muestre ordenados de menor a mayor.

        function mostrarOrdenados(x1, x2, x3) {
            if (x1 < x2 && x1 < x3) {
                console.log(x1 + ' ');
                if (x2 < x3) {
                    console.log(x2 + ' ' + x3);
                } else {
                    console.log(x3 + ' ' + x2);
                }
            } else {
                if (x2 < x3) {
                    console.log(x2 + ' ');
                    if (x1 < x3) {
                        console.log(x1 + ' ' + x3);
                    } else {
                        console.log(x3 + ' ' + x1);
                    }
                } else {
                    console.log(x3 + ' ');
                    if (x1 < x2) {
                        console.log(x1 + ' ' + x2);
                    } else {
                        console.log(x2 + ' ' + x1);
                    }
                }
            }
        }


        let valor1 = parseInt(prompt('Ingrese primer valor:'));
        let valor2 = parseInt(prompt('Ingrese segundo valor:'));
        let valor3 = parseInt(prompt('Ingrese tercer valor:'));
        console.log('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
        console.log('Los valores ordenados de menor a mayor son: ');
        mostrarOrdenados(valor1, valor2, valor3);
}