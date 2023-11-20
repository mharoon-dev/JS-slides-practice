// primitive data types (by value)
// string,number,symbol,boolean,undefined,Null

let number = 1
let number2 = number
number2 = 5 
console.log(number + ' ==> number')     // 1
console.log(number2 + ' ==> number2')   // 5

let str = "haroon"
let str2 = str
str2 = "kamil"
console.log(str + ' ==> string')     // haroon
console.log(str2 + ' ==> string2')   // kamil

let boolean1 = true
let boolean2 = boolean1
boolean2 = false
console.log(boolean1 + ' ==> boolean 1') // true
console.log(boolean2 + ' ==> boolean 2') // false

let value = undefined
let value2 = value
value2 = null
console.log(value + ' ==> value 1') // undefined
console.log(value2 + ' ==> value 2') // Null



// non-primitive data type (by refrence)
// arrays,object, functions,


let person = {
    name:'haroon'
}
let person2 = person
person2.name = "kamil"
console.log(person['name'] + ' ==> person 1') // kamil (because it is by refrence) 
console.log(person2['name'] + ' ==> person 2') // kamil (because it is by refrence)


// ternary opreator

let val = 0 < 1
val ? console.log("true ==> ternary opreator") : console.log("false ==> ternary opreator");

let val2 = 2 < 1
val2 ? console.log("true ==> ternary opreator") : console.log("false ==> ternary opreator");
