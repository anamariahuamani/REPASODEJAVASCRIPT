// estructura de una condicion
//1.palabra reservada
//2.la condicion o expresion a evaluar (que debera ser siempre un tipo de dato booleano)
//3.el cuerpo, que contendra el codigo a ejecutar en caso la condicion sea verdadera

//4.palabra reservada else
//5. cuerpo, que contendra el codigo a ejecuta en caso la condicion se falso

if (true) {
    let suma=24+45
    let divi=45/3
    console.log(suma,divi)
}else{ 
    console.log("me ejecuto por que soy falso")

}
console.log(divi)

// crear un programa que evalue si un numero es mayor al otro si este numero par
let firtsnumber=25
let secondnunber=30
if (firtsnumber>secondnunber){
    if (firtsnumber%2 == 0){
        consolo.log ("el numero es mayor y par") ´el numero es mayor y par´
    }else{
        console.log ("el numero es mayor pero es impar")
    
}
tarea 
// crear un programa que me muestre el numero en texto
let numero = 5; // puedes cambiar este número o pedirlo al usuario

let texto = "";

switch(numero){
    case 0:
        texto = "cero";
        break;
    case 1:
        texto = "uno";
        break;
    case 2:
        texto = "dos";
        break;
    case 3:
        texto = "tres";
        break;
    case 4:
        texto = "cuatro";
        break;
    case 5:
        texto = "cinco";
        break;
    case 6:
        texto = "seis";
        break;
    case 7:
        texto = "siete";
        break;
    case 8:
        texto = "ocho";
        break;
    case 9:
        texto = "nueve";
        break;
    case 10:
        texto = "diez";
        break;
    default:
        texto = "Número fuera de rango";
        break;
}
// Pedimos al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número del 0 al 10:"));

// Creamos
    