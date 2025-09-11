crear un programa que busque una lista  de frutas si exsite una pera de exister muestra la fruta caso 
contrario indicar que la fruta no exista en la lista

let frutas=['manazana','piña','pera','sandia','platano','cereza']

if(frutas.length<=0){
    console.log("al menos debes tener dos frutas en tu lista")
}else{
    let contador=0
    while(true) {
        if('pera'==frutas[contador]) {
            console.log('la pera se encontro en la posicion $ {contador}')
            break
        
        }
        contador++
    }
}

