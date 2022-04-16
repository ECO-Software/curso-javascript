/**************************************
 *           Condicionales            *
 **************************************/

condicion = false;

if (condicion)
    console.log("Si se cumple la condición");

// if else
if (condicion)
    console.log("Si se cumple la condición");
else
    console.log("No se cumple la condición");

// if else if
if (condicion === true)
    console.log("Si se cumple la condición");
else if (condicion === "saludo")
    console.log("Es un saludo");
else
    console.log("No se cumple la condición");

// Ejemplos
let password = null;
password = "12345678";

if (password.length >= 8) {
    console.log("La contraseña cumple con los requisitos");
} else {
    console.log("La contraseña no cumple con los requisitos");
}

let nombre = null;
nombre = "Juan";
if(nombre.trim().length >= 3) { 
    console.log("Es un nombre válido");
} else {
    console.log("Es un nombre inválido");
}

let calificacion = null;
calificacion = 4;

if(calificacion >= 7) {
    console.log("Aprobado");
} else if(calificacion >= 5 && calificacion < 7) {
    console.log("Supletorio");
} else {
    console.log("Remedial");
}

// if anidados
let edad = null;
edad = 18;
let dinero = null;
dinero = 99;
if(edad >= 18) {
    if( dinero >= 100) {
        console.log("Puede obtener credencial de conducir");
    } else {
        console.log("No tiene dinero suficiente");
    }
} else {
    console.log("No tiene edad suficiente");
}

// Condicionales AND && OR ||  NOT !
if(edad >= 18 && dinero >= 100) {
    console.log("Puede obtener credencial de conducir");
} else {
    console.log("No tiene edad suficiente");
}

if (edad >= 18 || dinero >= 100) {
    console.log("Puede pasar");
}else {
    console.log("No puede pasar");
}

// valores true y false

//Si la variable esta vacia
variable = null;
let numero = 0;
let cadena = "";
if (variable) {
    console.log(variable);
} else {
    console.log("La variable esta vacia");
}
if(numero) {
    console.log(numero);
} else {
    console.log("El numero esta vacio");
}

if(cadena) {
    console.log(cadena);
} else {
    console.log("La cadena esta vacia");
}


// Switch - case
let dia = null;
dia = "Miercoles";
switch (dia.toLowerCase()) {
    case "lunes":
        console.log("Es lunes");
        break;
    case "martes":
        console.log("Es martes");
        break;
    case "miercoles":
        console.log("Es miercoles");
        break;
    case "jueves":
        console.log("Es jueves");
        break;
    case "viernes":
        console.log("Es viernes");
        break;
    case "sabado":
        console.log("Es sabado");
        break;
    case "domingo":
        console.log("Es domingo");
        break;
    default:
        console.log("No es un dia de la semana");
        break;
}

