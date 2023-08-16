


/*
    The main purpose of using promises is to avoid callback hell (nested callbacks)
    Solutions to callback hell
    There are four solutions to callback hell:
        Write comments
        Split functions into smaller functions
        Using Promises
        Using Async/await
*/

/*
    In JavaScript, a Promise is an object that will produce a single value some time in the future. 
    If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. 
    The possible outcomes here are similar to that of promises in real life.

    JavaScript promises can be in one of three possible states. These states indicate the progress of the promise. They are:
        pending: This is the default state of a defined promise
        fulfilled:  This is the state of a successful promise
        rejected: This is the state of a failed promise

    A promise goes from pending to fulfilled, or from pending to rejected—‘fulfilled’ and ‘rejected’ indicate the end of a promise.

    An extremely common use of promises is going to http request, and you dont get the response right away because it is a asynchronous operation
    only once the server responds we either get the data we are looking for or get an error

    In order to create a promise we need to use a constructor where we pass in the callback function with two more arguments.
    const promise = new Promise((resolve,reject)=>{
        // Condition to resolve or reject the promise
    })
*/

    const value = 2
    const promise = new Promise((resolve,reject)=>{
        const random = Math.floor(Math.random() * 3)
        console.log(random)
        if(random === value){
            resolve('you guessed correctly') 
        }else{
            reject('there was an error')
        }
        
    })
    console.log(promise) //Promise { <pending> }

    promise.then((data)=>console.log(data)).catch((err)=>console.log(err))

/*
How to Attach a Callback to a Promise
    To create a callback for a promise, you need to use the .then() method. This method takes in two callback functions. 
    The first function runs if the promise is resolved, while the second function runs if the promise is rejected.
*/

