// arrays 

let names = ['haroon','kamil','jamal','sami' ]
console.log(names);
console.log(names.length + " ==> length of names")
// console.log(names[length - 1])

let names2 = ['shezad','samad']
console.log(names2);
console.log(names2.length + " ==> length of names2")

// concat
let concatNames = names.concat(names2)
console.log(concatNames);
console.log(concatNames.length + ' ==> length of concatNames');

// 4 basic methods of arrays

// shift
concatNames.shift() // haroon is removed
console.log(concatNames + ' ==> after shift');

// unShift
concatNames.unshift("haroon") // haroon is added
console.log(concatNames + ' ==> after unShitf');

// pop
concatNames.pop() // samad is removed
console.log(concatNames + ' ==> after pop');

// push
concatNames.push("samad") // haroon is added
console.log(concatNames + ' ==> after push');


// 2 methods of array (slice,splice)

// slice
let sliceNames = concatNames.slice(0 , 3)
console.log(sliceNames + ' ==> slice names ');

// splice
concatNames.splice(0 , 1 , "ali") //  haroon replaced with ali
console.log(concatNames + ' ==> after splice');


// arrays and (for) loop

let newArray = []

for (i = 0 ; i < concatNames.length ; i++ ) {
    console.log(i);
    console.log(concatNames[i]);
    newArray.unshift(concatNames[i])
}

console.log(newArray);

let numberArray = [20,50,70,90]

function calcNumberArray(value) {
    let total = 0
    for (i = 0 ; i < value.length ; i++ ) {
        total += value[i]
    }
    return total
}

console.log(calcNumberArray(numberArray) + ' ==> total');