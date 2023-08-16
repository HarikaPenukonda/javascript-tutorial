function makeUpperCase(value){
    console.log(value.toUpperCase())
}

//makeUpperCase('harika')

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}

function handleName(name, cb){
    const fullName = `${name} smith`
    cb(fullName)
    // some more logic
    // cb(fullName)
    // cb(fullName)
    // cb(fullName)
    // cb(fullName)
}

// handleName('john',makeUpperCase)
// handleName('john',reverseString)

// handleName('susan',function(value){
//     console.log(value)
// })

handleName('susan', value => console.log(value))


/*
    In JavaScript there are higher order methods and functions that accept a function as an argument. 
    These functions used as arguments for other functions are called callback functions. 

    A callback is a function passed as an argument of another function.
    This means that the parent function is usually built to use any kind of function. 
    
    But the callback function, on the other hand, is meant to be used in a specific case 
    (or a restricted number of cases) in which the parent function is used.

    Note - 1. handleName('john',makeUpperCase()) - error
    If we are doing so then we invoke it right away, makeUpperCase() is looking for the value
    what we want is a function body and inside that function body we invoke the function.
     cb(fullName)

    2. we can pass function directly, handleName('john',makeUpperCase)
    handleName('susan',function(value){
        console.log(value)
    })

    handleName('susan',function(value){
    console.log(value)
    })

    handleName('susan', value => console.log(value)) - arrow functions

    // we can use callback functions in array methods, setTimeout, event listerner etc


*/