
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
