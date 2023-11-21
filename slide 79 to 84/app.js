// // vaiable looks up

// const globalNumber = 5

// function add(num1, num2) {
//     const globalNumber = 10
//     const result = num1 + num2 + globalNumber 
//     return result
// }

// console.log(add(5 , 5) + ' ==> answer') // expected answer is 20



/////////////////////////////////////////////////////////////////////
// const globalNumber = 5

// function add(num1, num2) {
    //     const globalNumber = 10
    //     const result = num1 + num2 + globalNumber 
    //     function multiply() {
        //         const multiplyResult = result * globalNumber
        //         console.log(multiplyResult) // 200
        //     }
        //     multiply()
        //     return result
        // }
        // console.log(add(5,5));


/////////////////////////////////////////////////////////////////////

const globalNumber = 5

function add(num1, num2) {
    const globalNumber = 10
    const result = num1 + num2 + globalNumber 
    function multiply() {
        const globalNumber = 50
        const multiplyResult = result * globalNumber
        console.log(multiplyResult) // 1000
    }
    multiply()
    return result
}
console.log(add(5,5));