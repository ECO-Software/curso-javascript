/**************************************
 *              Funciones             *
 **************************************/

//Como se declara una función
// function nombre_funcion(parametro1, parametro2) {
//     codigo a ejecutar
//     return valor_retorno;
// }

function sumar(a, b) { // Esta funcion recibe dos parametros
    return a + b; // Devuelve la suma de los dos parametros recibidos
}

// //Como se llama una función
// nombre_funcion(parametro1, parametro2);
let numero_a = 5;
let numero_b = 6;
let resultado_suma = sumar(numero_a, numero_b); // Esta funcion espera dos argumentos y devuelve un valor
console.log(resultado_suma);

// Este tipo de funciones pueden ser declaradas donde sea en el código
// y pueden ser llamadas en cualquier parte del código
// No necesariamente deben devolver algun valor
function saludar() {
    console.log('Hola'); // Esta funcion no devuelve ningun valor
}
// Ejecutamos la función
saludar();  // Esta funcion no devuelve ningun valor

//Funciones asignadas en variables
let sumar_dos = function (a, b) { // Esta funcion recibe dos parametros
    return a + b;  // Devuelve la suma de los dos parametros recibidos
};
// Ejecutamos la función
let resultado_suma_dos = sumar_dos(numero_a, numero_b); // Esta funcion espera dos argumentos y devuelve un valor
console.log(resultado_suma_dos); // Imprime el resultado de la suma
// Este tipo de función puede ser llamada en cualquier parte del código
// y puede devolver algun valor
// Pero no puede ser llamada antes de ser declarada
