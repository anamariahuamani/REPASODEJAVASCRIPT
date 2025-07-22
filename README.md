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
3. operadores tercearios
   los operadores  tercearios son aqullos que que evaluan tres valores y que retornan un solo valor
   - operadores aritmitico
   - operadores de comparacion 
   - operadores logicos
   - 

### controles de flujo
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
ejemploLet();