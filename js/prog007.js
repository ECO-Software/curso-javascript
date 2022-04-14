/**************************************
 *       Funciones callback           *
 **************************************/
const saluda = (nombre, apellido) => {  // Esta funcion espera dos argumentos y devuelve un valor
    console.log(`Hola ${nombre} ${apellido}`);  
}

// function callback
function compra(nombre, apellido, callback, producto_a, producto_b) { // Esta funcion espera dos argumentos y devuelve un valor
    callback(nombre, apellido); // Imprime el mensaje
    let saldo = producto_a + producto_b; // Esta funcion espera dos argumentos y devuelve un valor
    console.log(`Estimado ${nombre}, el saldo de su compra es $ ${saldo}`); // Imprime el mensaje
}

compra('Andrés', 'Sevillano', saluda, 100, 200);

// Ejercicios

function calcular_iva(precio) {
    let iva = precio * 0.12;
    return iva;
}

function ver_total(precio, callback) {
    let total = precio + callback(precio);
    return total;
}

let precio = 100;
let total = ver_total(precio, calcular_iva);
console.log(`El total de la compra es $ ${total}`);

