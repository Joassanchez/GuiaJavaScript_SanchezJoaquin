export function funciones_actividad1() {
    function mostrarRango() {
        let inicio = parseInt(prompt("Ingrese valor inicial"))
        let fin = parseInt(prompt("Ingrese valor final"))
        for (let f = inicio; f <= fin; f++) {
            console.log(f)
        }
    }

    mostrarRango();
}


