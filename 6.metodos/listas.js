let lista=[]
lista [0]="manzana"
lista[1]="pera"
console.log(lista.length)
console.log(lista)

//.crear una lista vacia y agregar de manera automatica los numeros pares que existen entre 0y 20
// Crear lista automáticamente con los pares entre 0 y 20
let numerosPares=[]
for(let i=1;i<=20;i++){
    if(i%2==0){
        numerosPares[numerosPares.length]=i
    }
}
let numPar=[]
let contador=0
for(let i=1;i<=20;i++){
    if(i%2==0){
        numPar[contador]=i
        contador++

    }
}
let texto=["hola","como",",","estas"]
delete texto[2]
texto 

const mifuncion=a=>{}
let numeros=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n+1)})

let number=[1,2,3,4,5,6]
let nuewnumber=number .map(n=>{return n+1})
console.log(nuewnumber)

let vocales=['a','i','o','u']
 let buscaE=vocales.includes('a')
// retorna false
let buscarA=vocales.includes('a')
 // retorne true

 let fruits=['pera','higo','tomate']
 let estapera=fruits.includes('pera')
 console.log(estapera)
 

 let listnumber=[10,11,3,20,5]
 // obtener en una lista los numero mayores de 10 
 let mayorDiez=listnumber.filter(n=>{return n>10})
 console .log(mayorDiez)

 // de una lista numero de 1 a 10 usando filter eliminar  el numero 1
 let unoALDiez=[1,2,3,4,5,6,7,8,9,10]
 let listaSinUno=unoALDiez.filter(n=>{return n!=1})
 console.log(listaSinUno)

 