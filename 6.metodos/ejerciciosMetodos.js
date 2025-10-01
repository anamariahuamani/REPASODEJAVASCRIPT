
// agrega edad y sexto 
// actualizar el apellido 
// eliminar sexo

let datosAlumno={
  nombre: "antonio",
  apellido: "pampahuapa"
};

// 1. Agregar edad y sexo
datosAlumno.edad = 20;       // edad
datosAlumno.sexo = "masculino"; // sexo

// 2. Actualizar el apellido
datosAlumno.apellido = "Quispe";

// 3. Eliminar la propiedad sexo
delete datosAlumno.sexo;

// Mostrar el objeto final
console.log(datosAlumno);

let alumnos=[ 
  {"nombre":"ruth","edad":19,"CUI":273333939} ,
  {"nombre":"flor","edad":18,"CUI":264848474} ,
  {"nombre":"ashy","edad":19,"CUI":237844777} 

]
 // deseo muestra una lista solo de los mnores a 19
 let listaMenores=alumnos.filter(al=>al.edad<19)
 console.log(listaMenores) 

// actualizar la lista de objetos y agregar el genero femenino a todas
let listaActualizada=alumnos.map(el=>{
  el.genero="femenino"
  return el
})
console.log(listaActualizada)
// de mi lista deseo mostrar ala persona que tenga como CUI 273333939
let buscaCui=alumnos.find(el=>{
  return el.CUI == 2733339393
})
