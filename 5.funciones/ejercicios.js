// crear una funcion que reciba por parametro una lista y un elemento fue encontradoo no
// función flecha que recibe una lista y un elemento


// función flecha que recibe una lista y un elemento
const buscarElemento = (lista, elemento) => 
    lista.includes(elemento) ? " Elemento encontrado" : " Elemento no encontrado";

// Ejemplo de uso
let numeros = [5, 10, 15, 20, 25];

console.log(buscarElemento(numeros, 15)); //  Elemento encontrado
console.log(buscarElemento(numeros, 99)); //  Elemento no encontrado


