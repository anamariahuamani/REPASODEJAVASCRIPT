// operador unarios
// operador de negacion
// operador esta es la izquierda del valor y como resultdo y obtenemos otro valor
let negacion=!false
// expresion es un valor complejo que sera solucionado y nos producira
o retorna un nuevo visual

console.log(negacion)false
// operadores binarios
// son los que  evaluan dos valores y nos dan como resultadoun nuevo valor
let suma=34+20
let resta=4-2
let producto=4*5
let divicion=3/3
let potencia=3**2
let residuo=10%3

##### TAREA
//operadores de comparacion
funciones que comparan dos valores y devuelven un resultado booleano (verdadero o falso) basado en la relación entre ellos.
let mayor = 5 > 3;           // true
let menor = 5 < 3;           // false
let igual = 5 == "5";        // true (compara solo el valor)
let estrictamenteIgual = 5 === "5"; // false (compara valor y tipo)
let diferente = 5 != 3;      // true
let mayorOIgual = 5 >= 5;    // true
let menorOIgual = 3 <= 2;    // false

console.log("5 > 3:", mayor);
console.log("5 < 3:", menor);
console.log('5 == "5":', igual);
console.log('5 === "5":', estrictamenteIgual);
console.log("5 != 3:", diferente);
console.log("5 >= 5:", mayorOIgual);
console.log("3 <= 2:", menorOIgual);

// Operadores lógicos
expresiones que combinan valores booleanos (verdadero o falso) para producir un 
resultado también booleano. Se utilizan para tomar decisiones basadas en múltiples
 condiciones y son fundamentales en la programación y la lógica.
 Los operadores lógicos más comunes son AND, OR y NOT.

let and = true && false;     // false
let or = true || false;      // true
let not = !true;             // false

console.log("true && false:", and);
console.log("true || false:", or);
console.log("!true:", not);

// Operadores ternarios
es un operador que toma tres operandos. Es una forma concisa de expresar}
 una sentencia condicional, generalmente un if-else, en una sola línea. Se utiliza 
 comúnmente para asignar valores a una variable basados en una condición o para devolver
 un valor dependiendo de si la condición es verdadera o falsa. 

let edad = 18;
let acceso = (edad >= 18) ? "Permitido" : "Denegado";

console.log("Acceso:", acceso);