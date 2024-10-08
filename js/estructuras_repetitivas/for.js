export function repetivas_for_actividad1() {
    let conta1 = 0;
    for (let f = 1; f <= 3; f++) {
        let base = parseInt(prompt('Ingrese la base:'));
        let altura = parseInt(prompt('Ingrese la altura:'));
        let superficie = base * altura / 2;
        if (superficie > 12) {
            conta1++;
        }
        alert('Triángulo nro: ' + f );
        alert('Base: ' + base );
        alert('Altura: ' + altura);
        alert('Superficie: ' + superficie);
    }
    alert('Cantidad de triángulos con superficie mayor a 12:' + conta1);
}