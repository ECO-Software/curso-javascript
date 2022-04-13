/****************************
 *      1. Aritmetica       *
 ****************************/
//a
console.log(1.5 + 1.5 * 2);
//b
console.log((10 % 6) ** 2);
//c
console.log(200 + 0 / 0);

/***************************
 * 2. Programación en JS   *
 ***************************/
let a = 3;
let b = 5;
let c = 'resultado';
const YEAR = '2021';
// a ) ¿Que muestra esta línea en consola?
//console.log('resultado');
console.log('resultado');
// b ) ¿Que valor guarda c, como se puede visualizar su resultado?
// c = a + b;
c = a + b;
console.log(c);
// c ) ¿Que valor se imprime en consola?
//console.log(++c);
console.log(++c);
// d )  ¿Que valor guarda c ahora?
// c += a;
c += a;
console.log(c);
// e ) ¿Que problema tiene esta línea de código?
// resultado = b + '10';
resultado = b + '10';
console.log("No se a declarado la variable resultado y esta intentando sumar un entero con un string y los concatena");
// f ) ¿Que valor se imprime en consola?
//console.log(a + 'JS');
console.log(a + 'JS');
// g ) ¿Cuantas variables se han usado hasta ahora? Menciona cuales són
console.log("Se han usado 3 variables y estas son a, b, c");
// h ) ¿Que valor se imprime en consola?
let covid19 = 'El año de la pandemia ';
let resultado_test_dos = covid19 + YEAR;
console.log(resultado_test_dos);
// i ) ¿Que valor se imprime en consola?
//console.log('El año ' + (++YEAR) + ' seguro estaremos mejor.'); // Se produce un error por querer cambiar el valor a una constante
//Solucion:
let next_year = YEAR;
console.log('El año ' + (++next_year) + ' seguro estaremos mejor.');

/***************************
 *   3. Buenas Prácticas   *
 ***************************/
console.log('a) let');
console.log('b) totalAcumulado');
console.log('c) const MESES = 12;');
console.log('d) NUMERO_PI');
console.log('e) let num = 5;');