# Taller de repaso de JavasCript
> [WARNINGS] Observasion: Quokka se debe ejecutar en cada archivo 
> [!Tip] Quokka detecta que en nuestro proyecto tenemos nodesjs y lo ejecuta para poder ver la consola en vivo 
 ## 1. Tipos de datos
 > Es la manera como capturamos la informacion 
 > En Javascript se clasifican en dos grandes grupos:
 > [!tip]
  Javascrip tinene funciones predeterminados por ejemplo para mostrar un mensaje por consola *console.log(), para poder verificar que tipo de dato estamos mostrando en Javascript tambien tenemos una funcion llamada typeof **typeof()*  
 ### Primitivos 
 Son datos que siempre existiran 
 1. *Numericos* 
    - enteros positivos 
    - enteros negativos 
    - decimal positivo 
    - decimal negativo 
    - Nan (not a number)
 2. *Texto*
    - caracteres 
    - caracteres especiales 
    - string
 3. *Booleanos*
    - Solo pueden ser true o false
 4. 
 ### Estructurados 
 1. Array (lista)
   - array de tipo numerico
   - array de tipo string
   - array de tipo mixto
 - como esta estructura un array en javascript 
   ![alt text](./assets/image.png)
 1. objetos (diccionario)  
   - son similares alas listas con la unica diferencia que en vez de tener valor e indice sus elemntos trabajan con clave y valor.
 - como esta estructuradio un objeto en javascript
   ![alt text](./assets/image01.png)   
 ## 2. Variables (Enlaces, Binding)
 Las *variables* en JavaScript se utilizan para almacenar datos que pueden cambiar durante la ejecución del programa. El término "enlace" o "binding" se refiere a la asociación de un nombre con un valor.
 [!Note]
 tenemos dos pasos para crear una variable/constante
 1. primero declarar la variable/constante
 2. segundo inicializar la variable/constante
 *Obcervacion* para crear una variable primero tenemos que crear el enlace luego darle el nombre de la variable/contante: para las variables tenemos las palabras recervadas keyword, let, var.
 para las constantes tenemos las palabras recervada
 keyword - const
*Recomendaciones* 
- Usa let para variables cuyo valor puede cambiar.
- Usa const para valores constantes.
- Evita var en código moderno.
 let,var ambos 
 ## 3. Operadores
 su clasificasion general se divide en tres 
 1. *operadores unarios*
    los operadores unarios son aquellos que tiene el operador a la izquierda del valor y que retornan un nuevo valor 
    - operador de negacion 
 2. *operadores binarios* 
    los operadores binarios son aquellos que estan medio de dos valores que retornan un unico valor 
    - operadores aritmeticos
    - operadores comparacion 
    - operadores logicos 
 3. *operadores ternario*
    los operadores ternario son aquellos que evaluan tre valores y que retornan un solo valor 
    - operador condicional 
 ## 4. Contoroles de flujo 
 nuestros progrmas en javascript contienen mas de una sentencia y las centencias son ejecutadas una a una como si fuera una histroria, de arriba hacia abajo como un camino recto 
 ### 1. control de decision (if-else)
 ##### falta llenar
 ### 2. bucles (for)
 El *bucle for* se utiliza para repetir un bloque de código un número determinado de veces. Es ideal cuando sabes cuántas veces quieres que se repita la acción.

 *Estructura básica:*
javascript
for (inicialización; condición; incremento) {
  // Código a ejecutar en cada iteración
}


*Ejemplo:*
javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración número: " + i);
}

Resumen:  
El bucle for inicia una variable, verifica una condición en cada vuelta y la incrementa o modifica al final de cada iteración. El ciclo se repite mientras la condición sea verdadera.
 ### 3. bocles (while)
 ### 3. Bucles (while)

El *bucle while* se utiliza para repetir un bloque de código mientras una condición sea verdadera. Es útil cuando no sabes cuántas veces se repetirá la acción, solo que debe continuar mientras la condición se cumpla.

*Estructura básica:*
javascript
while (condición) {
  // Código a ejecutar en cada iteración
}


*Ejemplo:*
javascript
let contador = 0;
while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}

Resumen:  
El bucle while evalúa la condición antes de cada iteración. Si la condición es verdadera, ejecuta el bloque de código; si es falsa,

 ## 5. Funciones 
 ### 1. Función por declaración
Se define usando la palabra clave function y un nombre.  
Puede ser llamada antes o después de su declaración.
javascript
function saludar() {
  return "Hola";
}
console.log(saludar());


### 2. Función por expresión
Se asigna una función anónima a una variable.  
Solo puede ser llamada después de su definición.
javascript
const sumar = function(a, b) {
  return a + b;
};
console.log(sumar(2, 3));


### 3. Función flecha (arrow function)
Sintaxis más corta y moderna, introducida en ES6.  
No tiene su propio this.
javascript
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 4));

 ## 6. Metodos para trabajar con datos estructurados
 los metodos son funciones que dan funcionalidad extras a los tipos de datos en los cuales se aplica, un metodo es anteseciado por un tipo de dato y un punto 
 *ejemplo*
 el ejemplo mas claro de un metodo es el lenth - este metodo nos permite o nos retorna la cantidad de caractere un string o la cantidad de eelemntos  de una lista.
   js
   "hola".length //4
  [2,5,4,6,7].length //5
  
  > [!TIP] los metodos en su mayoria solo se aplican a tipo de datos string ,listas y objetos, en su gran parte son aplicados para listas
  ### 6.1. metododos para string - cadenas de texto
  ### length 
  devuelve la longitud de una cadena 
  js
  let mensaje="hola como estan"
  console.log(mensaje.lenght)
  //retorna -> 15
   
  ### toLowerCase
  devuelve una cadena en minusculas 
  js
  let texto="hola"
  consolo log(texto.toUpperCase())
  // retorna -> holka
   
  ### toUpperCase 
  devuelve una cadena en mayuscula 
  js
  let texto="HOLA"
  consolo log(texto.toUpperCase())
  // retorna -> HOLA
   
  #### concat
  El método *concat* se utiliza para unir dos o más cadenas de texto (strings) o listas (arrays) y devuelve una nueva sin modificar las originales.
  javascript
  let saludo = "Hola";
  let nombre = "Willian";
  let mensaje = saludo.concat(" ", nombre, "!");
  console.log(mensaje); // "Hola Willian!"
  
  ### 6.2. Metodo para listas - Arrays
 Son acciones o funciones que nos permiten:
 ### acceder
  Permite obtener un valor de un array u objeto.
  javascript
  let numeros = [10, 20, 30];
  let persona = { nombre: "Ana", edad: 25 };

  console.log(numeros[1]);      // 20
  console.log(persona.nombre);  // "Ana"
  

 ### modificar
  Permite cambiar el valor de un elemento existente.
  javascript
  numeros[0] = 100;         // [100, 20, 30]
  persona.edad = 26;        // { nombre: "Ana", edad: 26 }
  

 ### insertar
  Agrega nuevos elementos o propiedades.
  javascript
  numeros.push(40);         // [100, 20, 30, 40]
  persona.ciudad = "Lima";  // {…
   ### eliminar
  Quita elementos o propiedades.
  javascript
  numeros.pop();            // [100, 20, 30]
  delete persona.edad;      // { nombre: "Ana", ciudad: "Lima" }
  

 | 1e2n y 3### ordenar
  Organiza los elementos de un array.
  javascript
  numeros.sort();           // [20, 30, 100]
  
  ## 7. Dom