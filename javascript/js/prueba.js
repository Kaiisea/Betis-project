/*
//Bucles
let count = 0;
while(count < 10){
  console.log(count);
  count++;
}
console.log("diselo tata")

//March calendar
let monthDays = new Date(202, 3, 0).getDate();
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
*/