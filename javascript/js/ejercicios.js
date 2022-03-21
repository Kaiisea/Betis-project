/*
//Conseguir dias del mes actual por función
function diasMesActual() {
	var fecha = new Date();
	return new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
}

//Conseguir dias del mes actual en consola
var fecha = new Date();
console.log ("Días del mes actual = " + new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate())

//Preguntar mes y responde días de ese mes
let diasMesElegido = prompt("What month do you want to look up, Jacinto?");
if (diasMesElegido == "January") {
  alert("31");
} else if (diasMesElegido == "February") {
  alert("28");
} else if (diasMesElegido == "March") {
  alert("31");
} else if (diasMesElegido == "April") {
  alert("30");
} else if (diasMesElegido == "May") {
  alert("31");
} else if (diasMesElegido == "June") {
  alert("30");
} else if (diasMesElegido == "July") {
  alert("31");
} else if (diasMesElegido == "August") {
  alert("31");
} else if (diasMesElegido == "September") {
  alert("30");
} else if (diasMesElegido == "October") {
  alert("31");
} else if (diasMesElegido == "November") {
  alert("30");
} else if (diasMesElegido == "December") {
  alert("31");
} else {
  alert("That's not a real month!");
}

//Valoración temperatura
let temperatura = prompt("How many degrees are outside, little butterfly?");
if (temperatura < 15) {
  alert("Are you not freezed? Warming up the house for god's sake");
} else if (temperatura >= 15 && temperatura <= 25) {
  alert("Enjoy the weather sweetie <3");
} else if (temperatura > 25) {
  alert("Maybe you are too much hot, I will cool you down a bit baby ;)");
}

//Semaforo
var isGreen = true;
if (isGreen == true) {
  console.log("Run Forrest Run, you can cross the road!");
} else if (isGreen == false) {
  console.log("No no little butterfly, you must await a little more");
}

//Convertidor de temperaturas
let celsius = 0;

switch (celsius) {
  case (celsius = -273.15):
    console.log((farenheit = celsius * 1.8 + 32));
    break;
  case (celsius = 0):
    console.log((farenheit = celsius * 1.8 + 32));
    break;
  case (celsius = 37):
    console.log((farenheit = celsius * 1.8 + 32));
    break;
  case (celsius = 100):
    console.log((farenheit = celsius * 1.8 + 32));
    break;
  default:
    console.log("Out of range");
}

//Logeito
let email = prompt("Introduce tu email");
let password = prompt("Introduce tu contraseña");
if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
    alert("Welcome Mr. Tolkien");
} else {
    alert("Wrong password or username, try again");
  }
//Convertidor monetario `
let euros = 1.0;
var dolaresAmericanos = euros * 1.1;
var yenJapones = euros * 131.71;
var libraEsterlina = euros * 0.84;
var francoSuizo = euros * 1.03;
switch (euros) {
  case euros:
    console.log(
        euros + ` euros equivalen a ` + dolaresAmericanos + ` dolares americanos,`
    );
  case euros:
    console.log(
      yenJapones + ` yenes japoneses`
    );
case euros:
    console.log(
      libraEsterlina + ` libras esterlinas y`
    );
case euros:
    console.log(
      francoSuizo + ` francos suizos.`
    );
}

//Calculadora de bolsillo
let x = prompt("Introduce un numerito");
let y = prompt("Introduce otro");
let calculo = prompt("¿Que calculo quieres hacer? (no introduzca tildes)");
if (calculo == "suma") {
  console.log(parseFloat(x) + parseFloat(y));
} else if (calculo == "resta") {
  console.log(parseFloat(x) - parseFloat(y));
} else if (calculo == "multiplicacion") {
  console.log(parseFloat(x) * parseFloat(y));
} else if (calculo == "division") {
  console.log(parseFloat(x) / parseFloat(y));
}else {
    console.log("chiki, tu no ta enterao de na en las clases de mate de primaria");
}
*/
//Comprobador de DNI
let identificacion = prompt("¿Se va a registrar con el DNI o con el NIE?");
if (identificacion == "DNI") {
  var DNI = prompt("Introduzca su DNI");
} else if (identificacion == "NIE") {
  var NIE = prompt("Introduzca su NIE");
} else {
  alert("Ha introducido una respuesta incorrecta");
}
if (
  DNI.charCodeAt(0) >= 48 &&
  DNI.charCodeAt(0) <= 57 &&
  DNI.charCodeAt(1) >= 48 &&
  DNI.charCodeAt(1) <= 57 &&
  DNI.charCodeAt(2) >= 48 &&
  DNI.charCodeAt(2) <= 57 &&
  DNI.charCodeAt(3) >= 48 &&
  DNI.charCodeAt(3) <= 57 &&
  DNI.charCodeAt(4) >= 48 &&
  DNI.charCodeAt(4) <= 57 &&
  DNI.charCodeAt(5) >= 48 &&
  DNI.charCodeAt(5) <= 57 &&
  DNI.charCodeAt(6) >= 48 &&
  DNI.charCodeAt(6) <= 57 &&
  DNI.charCodeAt(7) >= 48 &&
  DNI.charCodeAt(7) <= 57 &&
  DNI.charCodeAt(8) >= 65 &&
  DNI.charCodeAt(8) <= 90
) {
  alert("You logged correctly");
} else {
  alert("Wrong DNI number");
}
if (
  NIE.charCodeAt(0) == 88 &&
  NIE.charCodeAt(0) == 84 &&
  NIE.charCodeAt(1) >= 48 &&
  NIE.charCodeAt(1) <= 57 &&
  NIE.charCodeAt(2) >= 48 &&
  NIE.charCodeAt(2) <= 57 &&
  NIE.charCodeAt(3) >= 48 &&
  NIE.charCodeAt(3) <= 57 &&
  NIE.charCodeAt(4) >= 48 &&
  NIE.charCodeAt(4) <= 57 &&
  NIE.charCodeAt(5) >= 48 &&
  NIE.charCodeAt(5) <= 57 &&
  NIE.charCodeAt(6) >= 48 &&
  NIE.charCodeAt(6) <= 57 &&
  NIE.charCodeAt(7) >= 48 &&
  NIE.charCodeAt(7) <= 57 &&
  NIE.charCodeAt(8) >= 65 &&
  NIE.charCodeAt(8) <= 90
) {
  alert("You logged correctly");
} else {
  alert("Wrong DNI number");
}
