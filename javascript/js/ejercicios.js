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
} else if (temperatura <= 25) {
  alert("Enjoy the weather sweetie <3");
} else if (temperatura > 25) {
  alert("Maybe you are too much hot, I will cool you down a bit baby ;)");
}else {alert("Only numbers are acepted");}

//Semaforo
var isGreen = true;
if (isGreen == true) {
  console.log("Run Forrest Run, you can cross the road!");
} else if (isGreen == false) {
  console.log("No no little butterfly, you must await a little more");
}

//Convertidor de temperaturas
let celsius = 37;
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
let x = parseFloat(prompt("Introduce un numerito"));
let y = parseFloat(prompt("Introduce otro"));
let calculo = prompt("¿Que calculo quieres hacer? (suma, resta, multiplicacion o division)");
if (calculo == "suma") {
  console.log(x + y);
} else if (calculo == "resta") {
  console.log(x - y);
} else if (calculo == "multiplicacion") {
  console.log(x * y);
} else if (calculo == "division") {
  console.log(x / y);
}else {
    console.log("chiki, tu no ta enterao de na en las clases de mate de primaria");
}

//Comprobador de DNI
let identificacion = prompt("¿Se va a registrar con el DNI o con el NIE?").toUpperCase;
switch (identificacion) {
  case "DNI":
    var DNI = prompt("Introduzca su DNI");
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
      alert("Your DNI number is incorrect");
    }
    break;
  case "NIE":
    var NIE = prompt("Introduzca su NIE");
    if (
      (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
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
        NIE.charCodeAt(8) <= 90)
    ) {
      alert("You logged correctly");
    }else {
      alert("Your NIE number is incorrect");
    }
    break;
  default:
    alert("Incorrect option");
}

//Tirele unos dados
var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;
console.log("Player 1 gets a " + x + " and Player 2 gets a " + y);
if (x > y) {
  console.log("Player 1 wins!");
} else if (x < y) {
  console.log("Player 2 wins!");
} else if ((x = y)) {
  console.log(
    "Oh-oh, we have a draw between two distinguished gentleman, this cannot remain in this situation, please try again"
  );
}

//lector de palabras inverso
let palindrome, numero, numero1, numero2;
for (
  palindrome = "palindrome", numero = 1, numero1 = 9, numero2 = 10;
  numero < 11;
  numero++, numero1--, numero2--
) {
  console.log(numero + ". " + palindrome.substring(numero1, numero2));
}

//no lemon, no melon
let lemon, numero, numero1, numero2;
for (
  lemon = "no lemon, no melon", numero = 1, numero1 = 17, numero2 = 18;
  numero < 19;
  numero++, numero1--, numero2--
) {
  console.log(lemon.substring(numero1, numero2));
}

//cuadrado de asteriscos
let a, number;
for (a = "****", number = 1; number < 2; ) {
  number++, console.log(a);
  for (a = "****", number = 1; number < 2; ) {
    number++, console.log(a);
    for (a = "****", number = 1; number < 2; ) {
      number++, console.log(a);
      for (a = "****", number = 1; number < 2; ) {
        number++, console.log(a);
      }
    }
  }
}

//Temperatura media
var t1, t2, t3, t4, t5, t6, t7, temperature;
t1= 14.8,t2= 14.6,t3= 14.7,t4= 14.3,t5= 14.5,t6= 14,t7= 14, temperature=(t1+t2+t3+t4+t5+t6+t7)/7
console.log(`La temperatura media de la anterior semana fue de ${Math.floor(temperature)} ºC`)

//Adivine el numero
var x, y, number;

for (x = Math.floor(Math.random() * 11), number = 0; x != y; ) {
  switch (true) {
    case true && number == 0:
      number++;
      y = prompt(
        "Las tornas han cambiado, Akinator ha elegido un número y ahora serás tu quien tenga que adivinar en cuál ha pensado en unicamente tres intentos. ¿Tienes alguna ligera idea?"
      );
      break;
    case true && number == 1:
      number++;
      y = prompt(
        "Uy, estuvo cerca, bueno, para que mentirte, en realidad no. Pero miralo por el lado bueno, tienes una segunda oportunidad ¿Cuál sera tu elección ahora?"
      );
      break;
    case true && number == 2:
      number++;
      y = prompt(
        "A Akinator le estas empezando a dar penita, por eso te da una ultima oportunidad, pero ninguna más ¿Entendido? Pues dale ¿Cuál es tu ultima elección?"
      );
      break;
    case true && number == 3:
      number++;
      y = x;
      break;
    default:
      console.log("No sé que has hecho pero la has liao, reinicia la página");
  }
}
if (number == 1) {
  console.log(
    `Sii, Akinator había pensado en el número ${x}, ¡lo sacaste a la primera! ¡Eres más adivine que el propio Akinator!`
  );
} else if (number == 2) {
  console.log(
    `Efectivamente, Akinator había pensado en el número ${x}, ¡lo sacaste a la segunda! ¡Akinator te envidia un poquito, pero no mucho!`
  );
} else if (number == 3) {
  console.log(
    `Sii, Akinator había pensado en el número ${x}, ¡lo sacaste en el último intento! ¡Te falta un poquito de entrenamiento más para ser igual de fantastibuloso que el gran Akinator!`
  );
} else if (number == 4){
  console.log(
    `Lo siento pequeño aprendiz, pero has perdido la oportunidad de asemejarte al gran Akinator. El número que este había pensado era el ${x}`
  );
}
*/
//Randomizando contraseñas
let longitud = 8,
  respuesta = "",
  minusculas = false,
  mayusculas = false,
  numeros = false,
  simbolos = false;
longitud = parseInt(
  prompt(
    "¿Cuanto quiere que ocupe su contraseña?",
    "Mínimo de 8 carácteres y un máximo de 16)"
  )
);
respuesta = prompt(
  "¿Quiere usar minusculas en su contraseña? (Si / No)"
).toLowerCase();
if (respuesta == "si") {
  minusculas = true;
}
respuesta = prompt(
  "¿Quiere usar mayusculas en su contraseña? (Si / No)"
).toLowerCase();
if (respuesta == "si") {
  mayusculas = true;
}
respuesta = prompt(
  "¿Quiere usar numeros en su contraseña? (Si / No)"
).toLowerCase();
if (respuesta == "si") {
  numeros = true;
}
respuesta = prompt(
  "¿Quiere usar simbolos en su contraseña? (Si / No)"
).toLowerCase();
if (respuesta == "si") {
  simbolos = true;
}
//Añadir char
let contrasena= "", posicion, char = "", n1, n2;
if (minusculas == true) {
  char += `abcdefghijklmnñopqrstuvwxyz`;
}
if (mayusculas == true) {
  char += `ABCDEFGHIJKLMNÑOPQRSTUVWXYZ`;
}
if (numeros == true) {
  char += `1234567890`;
}
if (simbolos == true) {
  char += `,;.:-*_+-/?¿¡!"#`;
}
if (
  minusculas == false &&
  mayusculas == false &&
  numeros == false &&
  simbolos == false
) {
  char = `abcdefghijklmnñopqrstuvwxyz`;
}
for (posicion= 0, n1= 0, n2= 1; posicion > longitud; posicion++){  
contrasena.substring(n1, n2) = Math.floor(Math.random()*char.length); 
n1++; 
n2++;}
alert(contrasena)
