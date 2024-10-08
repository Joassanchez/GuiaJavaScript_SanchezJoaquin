export function estructura_switch() {
    let palabra;
    palabra = prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato) para traducirlas al ingles');
    switch (palabra) {
        case 'casa':
            alert('house');
            break;
        case 'mesa':
            alert('table');
            break;
        case 'perro':
            alert('dog');
            break;
        case 'gato':
            alert('cat');
            break;
        default:
            alert('Solo puedo traducir (casa, mesa, perro, gato)');
            break;
    }
}