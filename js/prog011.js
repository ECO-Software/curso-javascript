/********************
 *      Casting     *
 ********************/

//ParseInt
let num = "12";
let num2 = "12.5";
let num3 = "Yo nací en 1992"; // Si no empieza en numero dejara un numero indeterminado
let num4 = "1992 yo nací"; // Si comienza en numero lograra hacer el casting

let mi_entero = parseInt(num);
let mi_float = parseFloat(num2);

console.log(typeof mi_entero);
console.log(typeof mi_float);

console.log(mi_entero);
console.log(mi_float);

// recortar para convertir
let num5 = "$ 12.5";
let precio = parseFloat(num5.slice(1));
console.log(precio);
console.log(typeof precio);

// convertir sin parseInt y parseFloat
console.log(typeof Number(num));
console.log(typeof Number(num2));
console.log(typeof + (num2));

