const sayHello = require("../app");

test("Greetings from Jest", ()=>{
    expect(sayHello()).toBe("Hello World!!!");
})