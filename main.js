alert("Bienvenido");

const contraseña = 12345;
let contraseñaUsuario; 

do {
    contraseñaUsuario = prompt("ingrese su contraseña para controlar su pago mensual")
} while (contraseñaUsuario != contraseña);


let sueldoGuiones = a => a * 500;

let cantidadDeGuiones= prompt("ingrese cantidad de guiones corregidos:");

let guionesTotal = sueldoGuiones(cantidadDeGuiones);



let sueldoTemas = b => b * 400;

let cantidadDeTemas= prompt("ingrese cantidad de temas propuestos:");

let temasTotal = sueldoTemas(cantidadDeTemas);


function sumaTotales (a,b) {
    let resultado = a + b;
    return resultado;
}

let sueldoTotal = sumaTotales(guionesTotal, temasTotal);


if (sueldoTotal > 80000) {
    alert("el pago total de este mes es de " + sueldoTotal + " y se abonará tanto con efectivo como con transferencia");
}  else if (sueldoTotal <= 80000 && sueldoTotal > 40000) {
    alert("el pago total de este mes es de " + sueldoTotal + " y se abonará con transferencia");}
    else {
    alert("el pago total de este mes es de " + sueldoTotal + " y se abonará en efectivo")
}; 
