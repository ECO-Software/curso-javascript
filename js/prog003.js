let titulo;
titulo = "Operaciones Aritmeticas";
console.log(titulo);
/*
    Operadores aritmeticos
*/
let num1 = 10; // numero entero
let num2 = 5; // numero entero
let num3 = 2.5; // numero decimal
let resultado; // variable para almacenar el resultado
resultado = num1 + num2; // suma
console.log(resultado); // imprime el resultado
resultado = num1 - num2; // resta
console.log(resultado); // imprime el resultado
resultado = num1 * num2; // multiplicacion
console.log(resultado); // imprime el resultado
resultado = num1 / num2; // division
console.log(resultado); // imprime el resultado
resultado = num1 % num2; // modulo
console.log(resultado); // imprime el resultado
resultado = num1 ** num2; // exponencial
console.log(resultado); // imprime el resultado
/*
    Orden de precedencia
*/
resultado = num1 + num2 * num3; // suma, multiplicacion
console.log(resultado); // imprime el resultado
resultado = (num1 + num2) * num3; // suma, multiplicacion
console.log(resultado); // imprime el resultado
resultado = num1 + (num2 * num3); // suma, multiplicacion
console.log(resultado); // imprime el resultado
resultado = num1 + num2 - num3; // suma, resta
console.log(resultado); // imprime el resultado
resultado = num1 + num2 / num3; // suma, division
console.log(resultado); // imprime el resultado
resultado = num1 + num2 * num3 / num2; // suma, multiplicacion, division
console.log(resultado); // imprime el resultado
resultado = num1 + num2 * num3 % num2; // suma, multiplicacion, modulo
console.log(resultado); // imprime el resultado
resultado = num1 + num2 * num3 ** num2; // suma, multiplicacion, exponencial
console.log(resultado); // imprime el resultado
/*
    incremento y decremento
*/
let incremento = 0;
incremento++; // incremento
console.log(incremento); // imprime el resultado
incremento--; // decremento
/*
    Acumuladores
*/
incremento = 100;
console.log(incremento); // imprime el resultado
incremento += 5; // incremento
console.log(incremento); // imprime el resultado
incremento -= 5; // decremento
console.log(incremento); // imprime el resultado
incremento *= 5; // multiplicacion
console.log(incremento); // imprime el resultado
incremento /= 5; // division
console.log(incremento); // imprime el resultado
incremento %= 5; // modulo
console.log(incremento); // imprime el resultado
incremento = 10;
incremento **= 5; // exponencial
console.log(incremento); // imprime el resultado
