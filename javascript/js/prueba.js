/*
//Bucles
let count = 0;
while(count < 10){
  console.log(count);
  count++;
}
console.log("diselo tata")

//March calendar
let monthDays = new Date(2022, 3, 0).getDate();
console.log(monthDays);
let day = 1;
let firstDay = new Date("March 1, 2022").getDay();
console.log(firstDay);
while (day <= monthDays) {
  switch (day) {
    case 1:
      console.log(`day ${day}, Tuesday`);
      break;
    case 2:
      console.log(`day ${day}, Wednesday`);
      break;
    case 3:
      console.log(`day ${day}, Thursday`);
      break;
    case 4:
      console.log(`day ${day}, Friday`);
      break;
    case 5:
      console.log(`day ${day}, Saturday`);
      break;
    case 6:
      console.log(`day ${day}, Sunday`);
      break;
    case 7:
      console.log(`day ${day}, Monday`);
      break;
    default:
        console.log(day);
        break;
  }
  console.log(day);
  day++;
}

// counting 2 by 2
let number = 0;

while(number <= 10){
    console.log(number);
    number += 2;
}

//For loop
let end = 10;
for(let start = 0;start < end;start++){
    console.log(start);
}

//For
let start, end;
for (start = 0, end = 1000; start < end; start++, end--) {
  console.log(start, "-", end);
}
console.log("Ya se paro el bucle bebe");
console.log(start, "-", end);

//tabla multiplicar
let userValue = prompt("Enter your value: ");
for (let num = 1; num <= 10; num++) {
    console.log(`${userValue} x ${num} = ${userValue * num}`);
}

//sintaxis objetos
let star = {
  name: "Polaris",
  constellation: "Ursa Minor",
  type: "Sobule/Cepheid",
  spectralClass: "F7",
  mag: 2.0,
};
let persona = {
  name: "Johny",
  surname: "Berry",
  age: "28",
  adress: {
    roadType: "calle",
    roadName: "Tupri Mojuan",
    roadNumber: 123,
    zipCode: 29006,
    city: "Fuengirola"},
  telephoneNumber: "652 52 52 25",
};

let login = {
  id: "0afbc357de69f",
  state: {
    logged: false,
    onLine: false,
  },
  userName: "Cilleke01",
  password: "jajalosporros",
  email: "cillekito@gmail.com",
  loginAt: "2022/03/28 18:30:00",
};
let emailLogged = prompt("Please, enter your email:");
let passLogged = prompt("Please, enter your password:");
let loginTime = new Date();
let year = loginTime.getFullYear;
let month = loginTime.getMonth;
let day = loginTime.getDay;
let hour = loginTime.getHours;
if (emailLogged == login.email && passLogged == login.password) {
  login.state.logged = true;
  login.state.onLine = true;
  let completeYear = (`${year}`)
  if (month < 10) {
    completeDate += **
  }
  login.loginAt = `${year}/${month}/${day} ${hour}`;
  alert(`You logged correctly, Mr.${login.userName}`);
} else {
  alert(`Your loggin data are not correct`);
}

let hero = {
  character: "Iron Man",
  name: "Tony Stark",
  powers: ["love the bellaqueo", "have a cool armor", "do parkour at night"],
  info: {
    yearCreated: 1963,
    powerOrigin: "From this suit",
    Weapons: ["repulsor rays", "uni-beam projector", "lasers"],
    didYouKnow:
      "Tony Stark created and built one of Spider-Man's upgraded suits known as the Iron Spider Suit",
  },
};
let hero2 = new Object();
hero2.character = "Hulk";
hero2.name = "Bruce Banner";
hero.powers = [
  "strength",
  "speed",
  "stamina",
  "durability",
  "regeneration",
  "night invulnerability",
  "breathing underwater",
];

let shoppingCart = {
  0: {
  product_id: 0,
  name: "cebolla",
  price: 0.5,
  quantity: "2 kilos",
},
1: {
  product_id: 1,
  name: "pimiento",
  price: 0.73,
  quantity: "1 kilo y medio",
},
2: {
  product_id: 2,
  name: "champinones",
  price: 0.37,
  quantity: "1/2 kilo",
},
3: {
  product_id: 4,
  name: "calabacin",
  price: 1,
  quantity: "4 kilos",
}};
for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
  let id= shoppingCart[i].product_id;
  let name = shoppingCart[i].name;
  console.log("id: ", id, " name: ", name);
}

let original = [1, 2, 3];
let originalIncreased = [0, ...original, 4];
let copy = [...original];
let hexvalues = [..."0123456789ABCDEF"];
let colors = ["red", "blue", "green"];
alert(colors[0]);
colors[2] = "black";
colors[3] = "brown";
alert(colors.length);
colors[colors.length] = "black";
colors[colors.length] = "white";
let checking = ["foo", "bar", "baz", "qux"];
console.log(Array.from(checking.keys()));
console.log(Array.from(checking.values()));
console.log(Array.from(checking.entries()));

let moreNumbers = [0, 1, 5, 10, 15];
function compare (value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
moreNumbers.sort(compare);

var numbers = [4, 2, 5, 1, 3, 7, 7, 9, -1];
let counter = 0;
numbers.sort(function (a, b) {
  counter++;
  console.log("a:", a);
  console.log("b:", b);
  console.log(a - b);
  return a - b;
});
console.log(numbers);
console.log(counter);
*/
let numbers = [3, 9, 8, 1, 4]
for (let index = 0; index < numbers.length - 2; index++) {
for (let j = 0; aux = 0; j < numbers.length - 1; j++){
  if (numbers[j] > numbers[j + 1]) {
    aux = numbers[j];
    numbers 
  }
}
}
