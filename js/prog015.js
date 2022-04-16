/**************************************
 *               Arrays               *
 **************************************/

// 1. Create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 2. Create an array of strings
let strings = ["Juan", "Pedro", "Ana", "María", "José", "Luisa", "Juan", "Pedro", "Ana", "María", "José", "Luisa"];
// 3. Create an array of booleans
let booleans = [true, false, true, false, true, false, true, false, true, false, true, false];
// 4. Create an array of objects
let objects = [numbers, strings, booleans];
// 5. Create an array of arrays
let arrays = [numbers, strings, booleans, objects];

let array_mixto = [1, "Juan", true, 15];
console.log(array_mixto);
console.log(array_mixto[2]);
console.log(array_mixto.length);

// Modificar arrays

// Metodo push()
let array_dias_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
array_dias_semana.push("Sábado");
array_dias_semana.push("Domingo");
console.log(array_dias_semana);

// Metodo pop()
array_dias_semana.pop();
console.log(array_dias_semana);

// Metodo shift()
array_dias_semana.shift();
console.log(array_dias_semana);

// Metodo unshift()
array_dias_semana.unshift("Lunes");
console.log(array_dias_semana);

// Metodo splice()
array_dias_semana.splice(1, 1, "No disponible");
console.log(array_dias_semana);

// Metodo concat()
let frutas = ["Manzana", "Pera", "Naranja", "Uva"];
let vegetales = ["Zanahoria", "Lechuga", "Papa", "Calabaza"];
let array_completo = frutas.concat(vegetales); 
console.log(array_completo);

// Accediendo a elementos del array
let array = [1, 2, "Mi amigo", 4, 5, 6, 7, 8, 9, 10];
let mi_array = ["Andres", 0.5, array, true];
console.log(mi_array[2][2]);
console.log(mi_array[3]);
console.log(mi_array[0][2]);
console.log(mi_array[2][2][4]);

// Metodos includes()
const nombres = ["Juan", 
                "Pedro", 
                "Ana", 
                "María", 
                "José", 
                "Luisa", 
                "Juan", 
                "Pedro", 
                "Ana", 
                "María", 
                "José", 
                "Luisa"];
console.log(nombres.includes("Juan"));
if(nombres.includes("Juan")){
    console.log("El nombre está en el array");
}else{
    console.log("El nombre no está en el array");
}

if(nombres.includes("Juan", 8)){
    console.log("El nombre está en el array");
}else{
    console.log("El nombre no está en el array");
}

// Metodos reverse() y join()
let array_reverse = nombres.reverse();
console.log(array_reverse);
let array_join = nombres.join(" - ");
console.log(array_join);

// Metodo sort()
let nombres_empleados = ["Juan", "Pedro", "Ana", "María", "José", "Luisa", "Juan", "Pedro", "Ana", "María", "José", "Luisa"];
let nombres_ordenados = nombres_empleados.sort();
console.log(nombres_ordenados);

let numeros_desordenados = [1, 5, 3, 2, 4, 6, 7, 8, 9, 10];
let numeros_ordenados = numeros_desordenados.sort();
console.log(numeros_ordenados); // No funciona correctamente con numeros



