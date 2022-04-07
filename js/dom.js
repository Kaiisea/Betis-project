// let nav = document.querySelector("nav");
// console.log(nav);
// let active = document.querySelector(".active");
// console.log(active);
// let paragraph = document.querySelector("#first")
// console.log(first);

// let headersAndParagraphs = document.querySelectorAll("h1,p");
// console.log(headersAndParagraphs[1].innerText);

//accesing nodes wo text
// console.log(nav.children[0].children[0].children[0]);
// console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling)
//accesing with text
// console.log(headersAndParagraphs[0].firstChild);
// console.log(headersAndParagraphs[0].firstChild.nodeValue);
// console.log(nav.nodeName);

let box1 = document.querySelector("section").firstElementChild;
let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;
/*
box1.classList.add("dark");
// box1.classList.remove("dark");
box2.classList.add("dissapear")*/
// box2.classList.toggle("light");
// console.log(box3.classList.contains("light"));

// let number =
//   document.querySelector("section").lastElementChild.previousElementSibling.dataset.boxnumber;
// console.log(number);

// document.body.innerHTML = "<h1>Waw!</h1>"
// console.log(document.querySelector("section").outerHTML)
// document.querySelector("section").outerHTML= "<h1>Waw!</h1>"
// document.body.insertAdjacentHTML("afterbegin", "<nav>Navigation</nav>");
// document
//   .querySelector("nav")
//   .insertAdjacentHTML("beforebegin", "<h1>Main header</h1>");
// document.querySelector("nav").insertAdjacentHTML("beforeend", '<a href="http://google.com">Go Google<a>');
// document.querySelector("nav").insertAdjacentHTML("afterend", "<p>This is a paragraph</p>");
// console.log(document.querySelector("nav").textContent);
// document.querySelector("nav").textContent = "Stronger together";
// let header = document.createElement("h1");
// header.append("Hello World!")
// header.prepend("¡");
// document.body.append(header);
// document.querySelector("h1").firstChild.before("¡¡");
// let paragraph = document.createElement("p");
// paragraph.textContent = "Writting a paragraph";
// // document.body,append(paragraph);
// document.querySelector("h1").after(paragraph);
// document.querySelector("h1").replaceWith(paragraph);
// paragraph.remove();

let paragraph = document.querySelector("p");
paragraph.style.textAlign = "center";
paragraph.style.textTransform = "capitalize";
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.padding = "1em";
paragraph.setAttribute("class", "margin");
paragraph.setAttribute("title", "this is a paragraph!");
console.log(paragraph.setAttribute("class"));
console.log(paragraph.style.cssText);