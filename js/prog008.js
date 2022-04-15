/**************************************
 *             String index           *
 **************************************/
// String es un tipo de objeto
let cadena = 'Hola mundo';
console.log(typeof cadena); // Imprime el tipo de objeto
console.log(cadena.length); // Imprime el tamaño del objeto
/***************************************
 *               Hola mundo            *
 *               0123456789            *
 ***************************************/
console.log(cadena[0]); // Imprime el primer caracter
console.log(cadena[1]); // Imprime el segundo caracter
console.log(cadena[2]); // Imprime el tercer caracter
console.log(cadena[3]); // Imprime el cuarto caracter
console.log(cadena[4]); // Imprime el quinto caracter
console.log(cadena[5]); // Imprime el sexto caracter
console.log(cadena[6]); // Imprime el septimo caracter
console.log(cadena[7]); // Imprime el octavo caracter
console.log(cadena[8]); // Imprime el noveno caracter
console.log(cadena[9]); // Imprime el decimo caracter    
console.log(cadena[20]); // Imprime el caracter que no existe
console.log(cadena[cadena.length-1]); // Imprime el ultimo caracter
//metodo charAt para obtener el caracter en la posicion indicada
console.log(cadena.charAt(0)); // Imprime el caracter en la posicion 0
console.log(cadena.charAt(3)); // Imprime el caracter en la posicion -1
console.log(cadena.charAt(cadena.length - 1)); // Imprime el caracter en la ultima posicion

// Instanciando un objeto string
let cadena2 = new String('Mi texto');
console.log(typeof cadena2); // Imprime el tipo de objeto
console.log(cadena2.length); // Imprime el tamaño del objeto
console.log(cadena2); // Imprime el objeto
// Metodos que reciben parametros
//metodo charAt para obtener el caracter en la posicion indicada
console.log(cadena2.charAt(0)); // Imprime el caracter en la posicion 0
console.log(cadena2.charAt(1)); // Imprime el caracter en la posicion -1
// Metodos que no reciben parametros
// metodo toLowerCase para convertir el objeto en minusculas
console.log(cadena2.toLowerCase()); // Imprime el objeto en minusculas
// metodo toUpperCase para convertir el objeto en mayusculas
console.log(cadena2.toUpperCase()); // Imprime el objeto en mayusculas
console.log(cadena2); // Imprime el objeto

// Las cadenas no son mutables
// Para poder operar ha y que guardarlos en otra variable
let cadena3 = cadena.toLowerCase();
console.log(cadena3); // Imprime el objeto en minusculas
// Metodo trim para eliminar los espacios en blanco al inicio y al final
let cadena4 = "   Mi texto   ";
console.log("Cadena sin trim: " + cadena4); // Imprime el objeto
console.log("Cadena con trim: " + cadena4.trim());
//  Utilización de varios metodos
console.log("Cadena con trim: " + cadena4.trim().toUpperCase());
 // Imprime el objeto sin los espacios en blanco
// Metodo split para separar la cadena en un array
let cadena5 = 'Hola, mundo';
console.log(cadena5); // Imprime el objeto
console.log(cadena5.split(',')); // Imprime un array con los elementos separados por comas

// Metodo index of 
/***************************************
 *               Hola mundo            *
 *               0123456789            *
 ***************************************/
let cadena6 = 'Hola mundo';
console.log(cadena6.indexOf('Hola')); // Imprime la posicion del primer elemento
console.log(cadena6.indexOf('mundo')); // Imprime la posicion del primer elemento
console.log(cadena6.indexOf('Mundo')); // Imprime -1 porque no existe el elemento
console.log(cadena6.indexOf('Mundo')); // Imprime -1 porque no existe el elemento a partir de la posicion 5
console.log(cadena6.indexOf('la')); 
cadena6 += " compliquemos el asunto.";
console.log(cadena6.indexOf('el'));
console.log(cadena6.indexOf('o', 10));


// Metodo slice
let cadena7 = 'Hola mundo';
console.log(cadena7.slice(0, 3)); // Imprime el primer elemento hasta el tercero
console.log(cadena7.slice(3, 6)); // Imprime el tercero hasta el sexto
console.log(cadena7.slice(6, 11)); // Imprime el sexto hasta el decimo
console.log(cadena7.slice(5, -2)); // Imprime el sexto hasta el penultimo
console.log(cadena7.slice(11, 16)); // Imprime el decimo hasta el decimo

let text_dinero = "$ 525.25";
console.log(text_dinero.slice(1, text_dinero.length)); // Imprime el primer elemento hasta el ultimo
let dinero = Number(text_dinero.slice(1, text_dinero.length));
console.log(dinero);


// Metodo replace
let cadena8 = 'Hola mundo';
console.log(cadena8.replace('Hola', 'Adios')); // Imprime el objeto con el primer elemento reemplazado
console.log(cadena8.replace('Hola', 'Adios').replace('mundo', 'amigos'));
let mensaje = "El perro fue a morder a otro perro.";
console.log(mensaje.replace('perro', 'gato'));

// Caracteres de escape
/*
    \'
    \"
    \\
    \n
    \r
    \t
*/
let cadena9 = '\"Hola mundo\"';
console.log(cadena9);
cadena9 = '\'Hola mundo\'';
console.log(cadena9);
cadena9 = 'c:\\Hola mundo';
console.log(cadena9);
cadena9 = 'Hey,\tHola mundo';
console.log(cadena9);
cadena9 = 'Hey,\rHola mundo';
console.log(cadena9);
cadena9 = 'Hey,\nHola mundo';
console.log(cadena9);







