/*
1 . crear un programa, haciendo uso de una funcion un contador de vocales funcion
vocales.
la funcion debera recibir un texto y la vocal a buscar y retorna la cantidad de veces que se encuentra dicha vocal
hacer uso de los meotodos para string
*/
function countVocales(texto,vocal){
    let newtext=texto.toLowercase()
    let newVocals=vocal.toLowercase()
    let cantidadVocales=0
    for (let i=0;i<newTexto.length;i++){
        if (newtext[i]==newVocals){
            // cantidadVocales =cantidadVocales*
            cantidadVocales+=1
            //contidadVocales++
        }
   
 }
 return cantidadVocales
}
 
let miTexto="mi mama me ama yo amo a mi mama"
let searchVocals="o"
console.log(countVocales(miTexto,searchVocals))  2

let otroTexto="hola como estas"
let vo="o"

// expresiones regulares (regex)
const contarVocales=(txt,v)=>{
    return txt, toLowercase().split(v.toLowercase()).length-1
}
console.log(contarVocales)(otroTexto)  
/**   
 * 2. crear un programa que haciendo uso de una funcion pueda escribir una lista de amigos y que retorne otra lista pero con los nombres en mayuscula
*/
function textoMayuscula(lista){
    let nuevaLista=[]
    for(let i=0;i<lista.length;i++){
        nuevaLista[i]=lista[i].toUpperCase()
    }
    return nuevaLista
}

let amigos=["José", "Dara", "Ruth"]
console.log(textoMayuscula(amigos))
