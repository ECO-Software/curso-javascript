/**************************************
 *       Funciones flecha             *
 **************************************/

// Funcion asignada a una variable
let nombre = function (parametro){
    // codigo a ejecutar
}

// // Funciones flecha
// // Es una funcion que se puede asignar a una variable
// // Se debe declarar antes de ser llamada
let funcion_flecha = (parametro) => {
    console.log(parametro);
}

funcion_flecha('Hola'); // Imprime el parametro

let suma = (a, b) => {
    return a + b;
}

let resultado_suma = suma(4, 3); // Esta funcion espera dos argumentos y devuelve un valor

funcion_flecha(suma(5, 8)); // Imprime el resultado de la suma

funcion_flecha(suma(resultado_suma, 10)); // Imprime el resultado de la suma

// Las funciones flechas pueden asignarse en un espacio de memoria permanente de la siguiente manera
const my_nombre = (parametro) => {
    // codigo a ejecutar
    return parametro;
} 

funcion_flecha(my_nombre('Andrés Sevillano')); // Imprime el parametro

/**************************************
 *       Optimizar la función         *
 **************************************/

// // Una sola linea de código
const resta = (a, b) => a - b; // Esta funcion espera dos argumentos y devuelve un valor
let x = resta(5, 15); // Esta funcion espera dos argumentos y devuelve un valor
console.log(x); // Imprime el resultado de la resta

const mensaje = (nombre) => `Hola ${nombre}`; // Esta funcion espera un argumento y devuelve un valor
let mensaje_final = mensaje('Andrés');  // Esta funcion espera un argumento y devuelve un valor
console.log(mensaje_final); // Imprime el mensaje

const object = (nombre, apellido) => ({nombre: `${nombre}`, apellido: `${apellido}`}); // Esta funcion espera un argumento y devuelve un valor
let object_final = object('Andrés', 'Sevillano');  // Esta funcion espera un argumento y devuelve un valor
console.log(object_final); // Imprime el mensaje
                                       






