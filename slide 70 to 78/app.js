// global scope (every thing in "{}" it is global scope )

function globalExample() {
    console.log("hello! I make globaly")
}
globalExample()


//local scope 

let myName = "haroon" // local scope


// practice 

let name = 'kamil'
name = 'haroon'

function calc() {
    console.log(name);
    name = "samad"
}
calc()

if (true) {
    console.log(name);
    name = "sami ahmad"
}

console.log(`my name is ${name} and i am a student of SMIT.`)

// function is completly globla 
// (var let const any variable does not acceesed out of the function if it is decleared in a function) 

function forPractice() {
    let user = "haroon"
}
// console.log(user) //  not defined

// var is local scope 
// (you can access everywhere you want (Anywhere though but not in a function) )

function varExample() {
    var varVARiable = 'it is var variable '
}
// console.log(varVARiable); // not defined 


// let and const are global scope
// if you decleared in a function so, it is accessable just in a "{}"

function letConstExample() {
    let letVariable = "haroon"
    console.log(letVariable); // haroon
}

letConstExample()

let letVariable = "kamil"
console.log(letVariable) // kamil
 