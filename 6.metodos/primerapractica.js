// crear una lista de objetos de 5 vehiculos que tengan informacion como marca ,modelo,año de fabricacion,precio,numero de placa
// crea funciones para cada uno de estas acciones
// actualizar el valor de una de sus caracteristicas
// agregar un nuevo vehiculo
// eliminar un vehiculo
// poder filtar los vihiculos por su año de fabricacion 
// poder filtar un solo vehiculo por su numero de placa


let vehiculos = [
    { marca: "Toyota", modelo: "corolla", año: 2025, precio: 12000, placa: "ABC-123" },
    { marca: "Hyundai", modelo: "Elantra", año: 2020, precio: 15000, placa: "XYZ-456" },
    { marca: "Chevrolet", modelo: "onix", año: 2019, precio: 11000, placa: "JKL-789" },
    { marca: "Kia", modelo: "Rio", año: 2021, precio: 16000, placa: "MNO-321" },
    { marca: "Nissan", modelo: "sentra", año: 2017, precio: 10000, placa: "PQR-654" }
];

// 1. Actualizar una característica de un vehículo (ej: precio por placa)
function actualizarVehiculo(placa, propiedad, nuevoValor) {
    let vehiculo = vehiculos.find(v => v.placa === placa);
    if (vehiculo) {
        vehiculo[propiedad] = nuevoValor;
        console.log(`Vehículo con placa ${placa} actualizado correctamente.`);
    } else {
        console.log("Vehículo no encontrado.");
    }
}

// 2. Agregar un nuevo vehículo
function agregarVehiculo(nuevoVehiculo) {
    vehiculos.push(nuevoVehiculo);
    console.log("Vehículo agregado correctamente.");
}

// 3. eliminar un vehiculo 
function eliminarVehiculo(placa) {
    vehiculos = vehiculos.filter(v => v.placa !== placa);
    console.log(`Vehículo con placa ${placa} eliminado.`);
}

// 4. Filtrar vehículos por año de fabricación

function filtrarPorAño(año) {
    return vehiculos.filter(v => v.año === año);
}

// 5. Filtrar un solo vehículo por número de placa

function buscarPorPlaca(placa) {
    return vehiculos.find(v => v.placa === placa);
}


// Actualizar precio de un vehículo
actualizarVehiculo("ABC-123", "precio", 13000);

// Agregar un nuevo vehículo
agregarVehiculo({ marca: "Mazda", modelo: "3", año: 2022, precio: 18000, placa: "DEF-777" });

// Eliminar un vehículo
eliminarVehiculo("JKL-789");

// Filtrar vehículos del año 2020
console.log("Vehículos del 2020:", filtrarPorAño(2020));

// Buscar un vehículo por placa
console.log("Vehículo con placa MNO-321:", buscarPorPlaca("MNO-321"));

