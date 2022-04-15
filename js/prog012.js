/**************************************
 *      Operadores de comparación     *
 **************************************/
// // Comparar
// Igualdad
console.log(1 == 1); // imprime el resultado
console.log(1 == "1"); // imprime el resultado
console.log(1 === 1); // imprime el resultado // Compara el tipo de dato
console.log(1 === "1"); // imprime el resultado // Compara el tipo de dato
console.log(null === undefined); // imprime el resultado // Compara el tipo de dato
console.log(null == undefined);
// Desigualdad
console.log(1 != 1); // imprime el resultado
console.log(1 != "1"); // imprime el resultado
console.log(1 !== 1); // imprime el resultado
console.log(1 !== "1"); // imprime el resultado
// Mayor que
console.log(1 > 1); // imprime el resultado
console.log(1 > "1"); // imprime el resultado
console.log(1 >= 1); // imprime el resultado
console.log(1 >= "1"); // imprime el resultado

console.log(2 > 1); // imprime el resultado
console.log(2 > "1"); // imprime el resultado
console.log(2 >= 1); // imprime el resultado
console.log(2 >= "1"); // imprime el resultado

console.log(-1 > 1); // imprime el resultado
console.log(-1 > "1"); // imprime el resultado
console.log(-1 >= 1); // imprime el resultado
console.log(-1 >= "1"); // imprime el resultado
// Menor que
console.log(1 < 1); // imprime el resultado
console.log(1 < "1"); // imprime el resultado
console.log(1 <= 1); // imprime el resultado
console.log(1 <= "1"); // imprime el resultado

console.log(-1 < 1); // imprime el resultado
console.log(-1 < "1"); // imprime el resultado
console.log(-1 <= 1); // imprime el resultado
console.log(-1 <= "1"); // imprime el resultado

console.log(2 < 1); // imprime el resultado
console.log(2 < "1"); // imprime el resultado
console.log(2 <= 1); // imprime el resultado
console.log(2 <= "1"); // imprime el resultado

// Operadores lógicos
// &&
console.log(true && true); // imprime el resultado
console.log(true && false); // imprime el resultado
console.log(false && true); // imprime el resultado
console.log(false && false); // imprime el resultado
// ||
console.log(true || true); // imprime el resultado
console.log(true || false); // imprime el resultado
console.log(false || true); // imprime el resultado
console.log(false || false); // imprime el resultado
// !
console.log(!true); // imprime el resultado
console.log(!false); // imprime el resultado

function compare_string(string_a, string_b) {
    return string_a.toUpperCase() === string_b.toUpperCase();
}

console.log(compare_string("hola", "Hola"));


