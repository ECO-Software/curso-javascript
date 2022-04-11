console.log("app.js -> Aprendiendo Variables y comentarios");
/******************************************  
*              Variables                  *
*******************************************/
let nombre = "Juan"; // Dato de tipo string
let apellido = "Perez"; // Dato de tipo string
let edad = 30; // Dato de tipo number
let fechaNacimiento = new Date(); // Dato de tipo Date
console.log(nombre, apellido, edad, fechaNacimiento);
nombre = "Leonel Messi"; // Cambio de valor
console.log(nombre); // Mostrando nuevo valor de nombre
/******************************************
 *             Constantes                 *
 ******************************************/
const PI = 3.1416; // Dato de tipo number
const DIAS_SEMANA = 7; // Dato de tipo number
const NOMBRE_APLICACION = "My APP"; // Dato de tipo string
console.log(PI, DIAS_SEMANA, NOMBRE_APLICACION);
/******************************************
*       Tipos de datos primitivos         *
*******************************************/
// Boolean
let estaEstudiando = true; // Dato de tipo boolean
// Number
let anioNacimiento = 1990; // Dato de tipo number
// String
let nombreCompleto = `${nombre} ${apellido}`; // Dato de tipo string
// Date
let hoy = new Date(); // Dato de tipo Date
// Array
let cursos = ["TypeScript", "JavaScript", "Angular"]; // Dato de tipo Array
// Object
let usuario = {estaEstudiando: true, anioNacimiento: 1990}; // Dato de tipo Object
console.log(estaEstudiando, anioNacimiento, nombreCompleto, hoy, cursos, usuario);
console.log(typeof nombre);
/******************************************
*               Comentarios               *
*******************************************/
// Comentario de una linea
/*
* Comentario de varias lineas
*/