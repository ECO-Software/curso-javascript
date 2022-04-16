/**************************************
 *               Arrays               *
 **************************************/

// Paso por valor y paso por referencia
// Paso por valor
// Posicion en memoria diferente
let fruta = "naranja";
let color = fruta;
color = "rojo";
console.log(fruta);
console.log(color);
// Paso por referencia
let array = ["naranja", "manzana", "pera", "uva"];
let array_copia = array;
array_copia.pop()
console.log(array);
console.log(array_copia);


// Array metodo every()
[20, 33, 21, 31].every(valor => valor >= 18);
console.log([20, 33, 21, 31].every(valor => valor >= 18));
let edades = [20, 33, 21, 31];
let mayor_edad = edades.every(edad => edad >= 18);
console.log(mayor_edad);
let edades_2 = [20, 33, 21, 31];
let mayor_edad_2 = (edad) => edad >= 18;
console.log(edades_2.every(mayor_edad_2));