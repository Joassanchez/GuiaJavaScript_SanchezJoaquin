export function poo_array_actividad1() {
    function cargar(vec) {
        for (let f = 0; f < vec.length; f++) {
            let valor = prompt('Ingrese componente:');
            vec[f] = parseInt(valor);
        }
    }

    function sumar(vec) {
        let suma = 0;
        for (let f = 0; f < vec.length; f++) {
            suma = suma + vec[f];
        }
        console.log('Valor acumulado de las componentes:' + suma);
    }

    function sumarMayor36(vec) {
        let suma = 0;
        for (let f = 0; f < vec.length; f++) {
            if (vec[f] > 36) {
                suma = suma + vec[f];
            }
        }
        console.log('Valor acumulado de las componentes mayores a 36:' + suma );
    }

    function cantidadMayores50(vec) {
        let cant = 0;
        for (let f = 0; f < vec.length; f++) {
            if (vec[f] > 50) {
                cant = cant + 1;
            }
        }
        console.log('Cantidad de componentes mayores a 50:' + cant );
    }

    let vec = new Array(8);
    cargar(vec);
    sumar(vec);
    sumarMayor36(vec);
    cantidadMayores50(vec);
}

export function poo_array_actividad2() {
    function cargarVectores(vec1, vec2) {

        for (let f = 0; f < vec1.length; f++) {
            let valor = prompt('Ingrese componente del primer vector:', '');
            vec1[f] = parseInt(valor);
        }
        for (let f = 0; f < vec2.length; f++) {
            let valor = prompt('Ingrese componente del segundo vector:', '');
            vec2[f] = parseInt(valor);
        }
    }

    function sumarVectores(vec1, vec2, vecsuma) {
        for (let f = 0; f < vecsuma.length; f++) {
            vecsuma[f] = vec1[f] + vec2[f];
        }
    }

    function imprimirVector(vecsuma) {
        for (let f = 0; f < vecsuma.length; f++) {
            console.log(vecsuma[f] + ' ');
        }
    }

    let vec1 = new Array(5);
    let vec2 = new Array(5);
    let vecsuma = new Array(5);
    cargarVectores(vec1, vec2);
    sumarVectores(vec1, vec2, vecsuma);
    imprimirVector(vecsuma);
}