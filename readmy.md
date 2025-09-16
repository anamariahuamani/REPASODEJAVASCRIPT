# Taller de Repaso de JavaScript
>[!WARNING] Observación:
Quokka se debe ejecutar en cada archivo.

>[!TIP] 
Quokka detecta que en nuestro proyecto tenemos node.js y lo ejecuta para poder ver la consola en vivo.
## 1. Tipos de datos
Es la manera como capturamos información, en JavaScrip se clasifica en 2 grandes grupos:
>[!TIP]
JavaScript tiene funciones predeterminadas, por ejemplo, para mostrar un mensaje por consola console.log().
Para poder verificar que tipo de dato estamos manejando en JavaScript también tenemos una función por defecto, llamada typeof typeof().
### Primitivos:
Son datos que siempre han existido.
1. Númericos:
   - Enteros Positivos
   - Enteros Negativos
   - Decimal Positivo
   - Decimal Negativo 
   - NaN (Not a Number)
2. Texto
   - Caracteres
   - Caracteres especiales
   - String
3. Booleanos
   - True  - 1
   - False - 0
### Estructurados:
1. Array (Listas)
   - Array de tipo numérico
   - Array de tipo string
   - Array de tipo mixto
- ¿Cómo está estructurado? 
  ![alt text](assets/image.png)
1. Objetos (Diccionario): 

   Son similares a las listas con la única diferencia que en vez de tener valor e índice, sus elementos trabajan con clave:valor
- ¿Cómo está estructurado? 
  ![alt text](assets/image2.png)
## 2. Variables (enlaces, binding)
Es la técnica que se usa para poder apuntar a una dirección en memoria y al valor o dato relacionado ó que se encuentre almacenado en ese momento.
Tenemos 2 pasos para crear una variable.
- Primero declarar la variable/constante.
- Segundo inicializar la variable/constante.

*Observación*
Para crear la variable, primero tenemos que crear el enlace luego darle el nombre de la variable/constante:
Para las palabras reservadas keyword- let, var.
Para las constantes tenemos la palbra reservada keyword-const
*Recomendaciones*
- let: Usar cuándo el valor tendrá que variar.
- var: Evitar usar
- const Usar cuándo el valor será el mismo siempre.
  let y`var` ambos nos permite crear variables su única diferecia es el alcance, ámbito o scope.
## 3. Operadores
Su clasificación general se divide en 3:
   1. Operadores unarios:
   Los operadores unarios son aquello que se ubican a la izquierda del valor y que dan como resultado un nuevo valor.
   2. operadores binarios:
    Los operadores binarios son aquellos que están en medio de dos valores y que retornan un único valor.
   - Operadores Aritméticos
   - Operadores de comparación 
   - Operadores lógicos
   1. Operadores ternarios:
   LOs operadores terciarios son aquellos que evalúan tres valores y que retornan un solo valor.
## 4. Controles de flujo
Nuestros programas en JavaScript contiene más de una sentencia y las sentencias son ejecutadas una a una como si fuera una historia, de arriba hacia abajo como un camino recto.
### Control de decisión(If)
JavaScript nos permite crear caminos alternativos en nuestros programasdependiendo de una decisión, a esto se le conoce como caminos o ejecución condicional, que ejecutará a una sentencia u otra teniendo en cuenta la condición, así podemos crear múltiples caminos u opciones en nuestros programas.
Si se tiene una condición verdadera se ejecutará una sentencia, si tenemos una condición false se ejecutará otra sentencia totalmente distinta.

*Observación*
La ejecución condicional rompe el flujo normal de un programa.
### Bucle(for)
Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

Sintaxis
for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

expresion-inicial
Una expresión (incluyendo las expresiones de asignación) o la declaración de variable. Típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave var. Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle for. El resultado de esta expresión es descartado.

condicion
Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta sentencia. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de for.

expresion-final
Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la condicion. Generalmente se usa para actualizar o incrementar la variable contador.

sentencia
Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia block ({ ... }) para agrupar aquellas sentecias.
### Bucles(While)  
Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalue como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

Sintaxis
while (condicion)
  sentencia

condición
Una expresión que se evalúa antes de cada caso de bucle. Si esta condición se evalúa como true, se ejecuta sentencia. Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.

sentencia
Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia block ({ ... }) para agrupar esas sentencias.

## 5. Funciones
## 6. Métodos para trabajar con datos estructurados:
Los métodos son funciones que dan funcionalidades extras a los tipos de datos, en los cuales se aplica:
- Un método es antecedido por un tipo de dato y un punto.
   *Ejemplo*
   El ejemplo más claro de un método es el length, este método nos permite o nos retorna la cantidad de caracteres de un string o la cantidad de elementos de una lista.
js
   "hola".length //4
   [2,5,4,6,7].length // 5

>[!TIP]
Los métodos en su mayoría solo se aplican a tipo de datos string, listas y objetos, en su gran parte son aplicados para listas.

### 6.1. Métodos para string - cadenas de texto
#### - length: 
Devuelve la logitud de una cadena.
js
let mensaje="hola cómo estás"
console.log(mensaje.length())
//retorna =>15

#### toLowerCase:
devuelve una cadena en minúsculas.
js
let texto="HOLA"
console.log(texto.toLowerCase())
//retorna ->"hola"


#### toUpperCase:
devuelve una cadena en mayúsculas.
js
let texto="hola"
console.log(texto.toUpperCase())
//retorna ->"HOLA"


#### concat:
Combina el texto de dós o más cadenas.
js
let nombre="Kcapa"
let saludo="Hola"
//let concatenado=saludo+nombre
let cad1="Hoy"
let cad2="es"
let cad3="jueves"
console.log(cad1.concat(cad2,cad3))
//retorna -> Hoy es jueves


#### trim:
Este método elimina los espacios que existen al inicio o final de una cadena o texto.
js
let texto="  hola"
let nuevoTexto=texto.trim()  //hola
let otroTexto="hola    "
let nuevoOtroTexto=otroTexto.trim() //hola


#### slice: 
Este método nos permite extraer partes de una cadena, especificando sus índices, donde comenzar y hasta dónde mostrar.
js
let párrafo=" Hola, soy Percy"  //Solo se quiere mostrar el nombre
let nombre=párrafo.slice(9) //Percy
let soy=párrafo.slice(5,8) 


#### split:
Este método retorna una lista basándose en un separador que se le indique.
js
let párrafo=" Solo sé que nada sé"
párrafo.split(" ") //["solo","sé"."que"."nada"."sé"]
let url="google.com/search?=gatitos"
let gatito=url.split("=") //["google.com/search?"."gatitos"]
console.log(gatito[1]) //gatitos
let listaFrutas="manzanas,naranja,pera,fresa"
listaFrutas.split(",")

### 6.1. Métodos para listas - arrays



Los datos estructurados suelen almacenarse en archivos, por ello es fundamental organizar y acceder correctamente a ellos para realizar operaciones.
### Acceder: 
Obtener la información almacenada dentro de un archivo para leer o consultar datos, puede hacerse mediante lectura secuencial o acceso directo según la estructura del archivo.
### Modificar:
Cambiar los datos existentes dentro de un archivo, habitualmente localizando primero el registro y luego actualizando alguno de sus campos.
### Crear:
Generar un archivo nuevo dónde se almacenarán datos estructurados. Esto implica definir el formato o estructura de los registros dentro del archivo.
### Insertar: 
Añadir nuevos registros al archivo, en ocasiones respetando un orden o secuencia, según el tipo de archivo.
### Eliminar:
Quitar uno o varios registros del archivo. Esto puede implicar la búsqueda previa del registro que se quiere eliminar.
### Ordenar:
Reorganizar los registros dentro del archivo basándose en un campo clave para facilitar búsquedas y análisis posteriores.


### Scope en let y var:
El scope o ámbito en programación es el contexto o región del código donde una variable, función o dato es accesible y puede ser utilizado. Define que partes del programa ven o pueden acceder a esa entidad.
Hay varios tipos principales de scope:
  
- Global: La variable está definida fuera de funciones o bloques y pueden usarse en cualquier parte del código.
- Local: La variable existe solo dentro de una función o bloque dónde fue declarada, inaccesible fuera.
- De bloque: Alcance limitado al bloque ({}) más próximo, introducido con let y const en JS.

var y let:
- var tiene scope de función: La variable existe a lo largo de toda la función que lo contiene.
- let tiene scope de bloque: La variable solo existe dentro del bloque {} donde fue declarada, lo que ayuda a evitar errores por redefiniciones o accesos inoportunos.