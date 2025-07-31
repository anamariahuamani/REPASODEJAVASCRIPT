# Taller de repaso de javascript
> [WARNING] Observacion: Quokka se debe ejecutar en cada archivo

> [!TIP] Quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver la consola en vivo

## 1. tipos de datos
es la manera de como podemos captar la informacion tenemos dos clasificaciones en dos grandes grupos
### Primitivos
Son datos que siempre existiran 
1. numericos
   -enteros positivos
   -entero negativo
   -decimal positivo
   -decimal negativo
2. texto
   -caracteres 
   -caracteres especiales (tiene 16 bits)
   -string
3. booleanos
   -true -1
   -false 0
4. 
    
### Estructuras
## 2. Variables (enlaces,binding)
## 3. Operadores

su clasificacion  general se devide en tres 
1. operadores unarios los operadores unarios son aquellos que estan  ubicados a la izquierda del valor que retornan un nuevo valor
2. Operadores binarios
   los operdores vinarios son aquellos que estan en medio de dos valores y que retornan
   un unico valor
S   los operadores  tercearios son aqullos que que evaluan tres valores y que retornan un solo valor
   - operadores aritmitico
   - operadores de comparacion 
   - operadores logicos
   - 

### controles de flujo
nuestros programs en javascript contienen mas de una sentencia y las sentencias son 
ejecutada una a una como si fuera una historia, de arriba hacia abajo como un camino recto.
## 1 control de desicion (if-else)
javascript nos permite craer caminos alternativos en nuestrios programas, dependiendo
de una desicion a esto se le conoce como camino o ejecucion condicional, que ejecuta un 
sentencia u otra teniendo en cuenta la condicion asi podemos crear multiples camoinos u opciones 
en nuestros programas.
si tenemos una condiconal verdadero se ejecutran una sentencia si tenemos condicion false se ejecutan
otra sentencia totalmemte distintos 
***observacion**
## 4. Funciones

## TAREA

 ### 5 METODOS PARA TRABAJAR CON DATOS ESTRUCTURADOS

 ### acceder
Permite obtener un valor de un array u objeto.
javascript
let numeros = [10, 20, 30];
let persona = { nombre: "Ana", edad: 25 };

console.log(numeros[1]);      // 20
console.log(persona.nombre);  // "maria"


### modificar
Permite cambiar el valor de un elemento existente.
javascript
numeros[0] = 100;         // [100, 20, 30]
persona.edad = 16;        // { nombre: "maria", edad: 16 }


### insertar
Agrega nuevos elementos o propiedades.
javascript
numeros.push(40);         // [100, 20, 30, 40]
persona.ciudad = "Lima";  // { nombre: "maria", edad: 16, ciudad: "puquio" }


### eliminar
Quita elementos o propiedades.
javascript
numeros.pop();            // [100, 20, 30]
delete persona.edad;      // { nombre: "maria", ciudad: "puquio" }


### ordenar
Organiza los elementos de un array.
javascript
numeros.sort();           // [20, 30, 100]


### averiguar que es scope de "let"y "var" en javascript

En JavaScript, let y var se utilizan para declarar variables, pero difieren en su alcance (scope). var tiene alcance de función, mientras que let tiene alcance de bloque. Esto significa que las variables declaradas con var son accesibles dentro de toda la función en la que se definen, incluso si están dentro de un bloque (como un if o un for). Las variables declaradas con let, por otro lado, solo son accesibles dentro del bloque específico donde se declaran. 
Alcance de var:
Las variables declaradas con var son globales si se declaran fuera de cualquier función, o locales a la función si se declaran dentro de una.
El alcance de var es funcional. Si se declara una variable var dentro de un bucle if o for, todavía puede ser accedida fuera de ese bucle dentro de la misma función. 
Alcance de let:
Las variables declaradas con let tienen alcance de bloque.
El alcance de let está limitado a las llaves { } que definen el bloque.
Si se declara una variable let dentro de un bucle if o for, solo se puede acceder a ella dentro de ese bloque específico.
Esto ayuda a prevenir errores y a crear código más limpio y predecible. 
Ejemplos:
JavaScript

function ejemploVar() {
  var nombre = "Juan";
  if (true) {
    var nombre = "Pedro"; // Redeclara la variable, cambia el valor en toda la función
    console.log(nombre); // Imprime "Pedro"
  }
  console.log(nombre); // Imprime "Pedro"
}

function ejemploLet() {
  let nombre = "Juan";
  if (true) {
    let nombre = "Pedro"; // Crea una nueva variable con el mismo nombre, solo dentro del bloque if
    console.log(nombre); // Imprime "Pedro"
  }
  console.log(nombre); // Imprime "Juan"
}

ejemploVar();
ejemploLet(

   ✅ TALLER DE REPASO DE JAVASCRIPT

4. CONTROLES DE FLUJO

La ejecución condicional nos permite crear múltiples caminos u opciones en nuestro programa.
Si tenemos una condición verdadera se ejecutará una sentencia; si tenemos una condición falsa, se ejecutará otra sentencia totalmente distinta.


---

⚠️ Observación

La ejecución condicional rompe el flujo normal de un programa.


---

🔄 Bucles

bucles (for): tarea → hacer ejemplos que muestren cómo funciona el bucle for.

bucles (while): tarea con ejemplos que muestren cómo funciona el bucle while.



---

💡 Tip

Sentencias:
Es una línea de código que hace una acción. Se diferencian al terminar con un punto y coma ;.
La sentencia está conformada por valores, operadores, expresiones, palabras clave y comentarios
   Bucles en JavaScript
 
 #### tarea
✅ Bucle for

Tarea con ejemplo:

// Ejemplo: Imprimir los números del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i);
}

📌 Explicación:

let i = 1 → Inicia la variable i en 1.

i <= 5 → El bucle se repite mientras i sea menor o igual a 5.

i++ → Incrementa i de 1 en 1 en cada iteración.

Dentro del bucle se imprime el valor actual de i.



---

🔄 Bucle while

Tarea con ejemplo:

// Ejemplo: Imprimir los números del 1 al 5
let j = 1;
while (j <= 5) {
  console.log("Número: " + j);
  j++;
}

📌 Explicación:

Declara la variable j e inicia con 1.

El bucle se repite mientras j sea menor o igual a 5.

Dentro del bucle se imprime el valor de j y luego se incrementa.
