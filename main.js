alert("Bienvenido");

const contraseña = 12345;
let contraseñaUsuario; 

do {
    contraseñaUsuario = prompt("ingrese su contraseña para controlar su pago mensual")
} while (contraseñaUsuario != contraseña);


function sueldoGuiones (a) {
    let resultado = a * 500;
    return resultado
}

let cantidadDeGuiones= prompt("ingrese cantidad de guiones corregidos:");


let guionesTotal = sueldoGuiones(cantidadDeGuiones);



function sueldoTemas (b) {
    let resultado = b * 400;
    return resultado
}

let cantidadDeTemas= prompt("ingrese cantidad de temas propuestos:");


let temasTotal = sueldoTemas(cantidadDeTemas);

console.log("el total por los guiones corregidos es: ")
console.log (guionesTotal)
console.log("el total por los temas propuestos es: ")
console.log (temasTotal)


function sumaTotales (a,b) {
    let resultado = a + b;
    return resultado;
}

let sueldoTotal = sumaTotales(guionesTotal, temasTotal);

console.log("el pago total de este mes es de: ")
console.log(sueldoTotal)


if (sueldoTotal > 80000) {
    alert("el pago total de este mes es de " + sueldoTotal + " y se abonará con transferencia");
}  else if (sueldoTotal <= 80000 && sueldoTotal > 40000) {
    alert("el pago total de este mes es de " + sueldoTotal + " y se abonará en efectivo y con transferencia");}
    else {
    alert("el pago total de este mes es de " + sueldoTotal + " y se abonará en efectivo")
}; 
