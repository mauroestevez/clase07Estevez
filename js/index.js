
// Definimos una variable con el nombre del usuario

let entrada = prompt("Ingrese su nombre por favor... (debe ser parte del grupo familiar)");

// Creamos un array con los miembros de la familia

const familia = ["karina", "mauro", "franco", "pablo", "choco"];

// Armamos un while para comprobar que el nombre del usuario coincida con alguna persona de la familia

while(familia.includes(entrada) == false){
    console.log("No eres un integrante de la familia");
    entrada = prompt("Ingrese su nombre por favor... (debe ser parte del grupo familiar)");
}

console.log("Bienvenid@ " + entrada + " !!");


// Asignamos las dos variables principales interactuando con el usuario

let monto = parseInt(prompt("Ingrese el monto de la operación"));
let cantidadCuotas = parseInt(prompt("Ingrese cantidad de cuotas (3, 9 o 12)"));

// Armamos un While para dar solo 3 opciones de cantidad de cuotas

while((cantidadCuotas != 3) && (cantidadCuotas != 9) && (cantidadCuotas != 12)){
    console.log("Cantidad de cuotas no disponible");
    cantidadCuotas = parseInt(prompt("Ingrese cantidad de cuotas (3, 9 o 12)"));
}

// Mostramos cuantas cuotas se han seleccionado

console.log("Usted ha seleccionado " + cantidadCuotas + " cuotas");

// Designamos una funcion para dividir

function montoCuota (num1, num2) {
    return num1 / num2;
}

// Ejecutamos la funcion dentro de una variable

let resultado = montoCuota(monto, cantidadCuotas);

// Mostramos el resultado de la variable

console.log(" Usted debera pagar " + cantidadCuotas + " cuotas de " + resultado + " pesos");

console.log("Muchas gracias por usar nuestros servicios");

// Asignamos una variable con la puntuacion del usuario

let opinion = parseInt(prompt("Puntue el funcionamiento de la herramienta del 1 al 10"));

// Usamos un IF para responder una u otra cosa segun el puntaje

if(opinion == 10){
    console.log("Muchas gracias !!!!!");
}
else{
    console.log("Seguiremos trabajando, gracias por puntuar");
}













