/*ejercicio 1 */
/*var numero = parseInt(prompt("Ingresa un numero:"));

if (isNaN(numero)) {
    console.log("El numero ingresado no es valido.");
} else {
    console.log("Los multiplos de 5 son hasta", numero, "son:");
for (var i = 1; i <= numero; i++) {
    if (i % 5 === 0) {
        console.log(i);

        }
    }
}*/
/*ejercicio 2*/
/*preguntar a mali pq utilizando let en vez de var pide 3 veces la numeracion*/
/*var numero1 = parseInt(prompt("Ingrese un numero del 1 al 50:"));
var numero2 = parseInt(prompt("Ingrese otro numero del 1 al 50:"));
if (isNaN(numero1, numero2) || numero1, numero2 < 1 || numero1, numero2 > 50) {
    console.log("El numero ingresado no el valido.");
   } else {
    console.log("Los numeros del 1 al 50:");
    for (var i = 1; i <= 50; i++) {
        if (i === numero1 || i === numero2) {
            console.log(i + "¡Loteria!");
        } else {
            console.log(i);
            }
        }
    }*/
/*ejercicio 3*/    
/*var numeros = [];

while (true) {
    var numero = parseInt(prompt("Ingrese un numero (0 para terminar):"));
    if (isNaN(numero)) {
        console.log("El numero ingresado no es valido.");
        continue;
    }
    if (numero === 0){
        break
    }
    numeros.push(numero);
}
console.log("Lista de numeros tomados");
alert(numeros);*/

/* ejercicio 4 */
/*let capturas = [];
while (true) {

let entrada = prompt("Ingrese letras o palabras(deje en blanco para terminar):");
{
  if (entrada === "") {
       break;   
}
entrada.concat(entrada)
}
capturas.push(entrada);
}
let resultado = capturas.join("-")
console.log("El resultados de la concatenacion es", resultado);
/* ejercicio 5*/

while (true) {

let dia = prompt("Ingrese un dia de la semana");

if (dia.toLowerCase() === "domingo") {
    alert("Ve a descansar");
    break;
}

else if (dia.toLowerCase() === "lunes") {
    alert("Exelente inicio de semana");
} else if(dia === "martes") {
    alert("Sigue trabajando dia 2");
} else if(dia === "miercoles") {
    alert("Viernes chiquito jaja");
} else if(dia === "jueves") {
    alert("Falta poco para el descanso");
} else if(dia === "viernes") {
    alert("Ya casi, entramos al fin de semana");
} else if(dia === "sabado") {
    alert("Unas horitas mas para el descanso")
} else {
    alert("No es un dia valido");
}
 }
