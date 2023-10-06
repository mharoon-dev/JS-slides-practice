const num = 10
const num2 = 25

if (num < num2 ) {
    console.log("hello world")
} else {
    console.log("hello everyone")
}

// not opreator (!)

let number = 6
let number2 = 8

if (number >! number2) {
    console.log("number 2 is greater then number 1 ")
} else {
    console.log("number 1 is greater then number 2 ")
}

// logical opreator 

let obj = {
    name: "haroon",
    age: 17
}
let obj2 = {
    name: "fahad",
    age: 36
}

if (obj.age >= 15 && obj.age <= 25) {
    console.log(obj)
}

if (obj2.age <= 15 || obj.age <= 40) {
    console.log(obj2)
}

