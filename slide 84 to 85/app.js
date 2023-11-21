// higherorder function and call back function

function morning() {
    console.log('good morning kamil');
    return ('good morning kamil')
}

//       higherorder    callback
function greet(name, callBackFunction) {
    callBackFunction()
    const myName =  'haroon'
               // kamil                 haroon    
    console.log(`${name} , my name is ${myName}`); 
}

greet('kamil', morning())