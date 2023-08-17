/*
    Why should we care about promises?
    Promises were not always part of JavaScript.
    Callbacks worked together with asynchronous functions to produce desired results in the past.
    A callback is any function that is a parameter of an async function, which the async function invokes to complete its operation.

    To call an async function, you had to pass a callback as an argument like this:
    function callback(result) {
        // Use the result from the Async operation
    }
    randomAsyncOperation((response) => callback(response));

    Assume you had an asynchronous function that fetched data somewhere on the internet. This function should accept two callbacks, successCallback and failureCallback.
    The successCallback would run if the operation was successful and the program found the appropriate resource. But the failureCallback would run if the operation was unsuccessful and could not find the resource.

            function SuccessCallback(result) {
                console.log("Resource found", result);
            }

            function failureCallback(error) {
                console.error("Ooops. Something went wrong", error);
            }
    To run the async function, you had to pass the two callback functions as arguments:
            fetchResource(url, successCallback, failureCallback)
    Here, url is a variable that represents the location of the resource.
    This code will run smoothly for now. You've taken care of both possible scenarios the function could run into. 
    You have a callback for a successful operation and a callback for a failed operation.

    Now assume you want to perform many other fetch operations, but each operation must be successful for the next one to run. 
    This is useful if the data you need must come in a certain order and cannot be scattered.

fetchResource(
    url,
    function (result) {
      // Do something with the result
      fetchResource(
        newUrl,
        function (result) {
          // Do something with the new result
          fetchResource(
            anotherUrl,
            function (result) {
              // Do something with the new result
            },
            failureCallback
          );
        },
        failureCallback
      );
    },
    failureCallback
  );

  In this case, your success callbacks would have their own success callbacks, which is important because you need to use the results if they come in.
  From the example, you may notice a complication developing. You would have to keep nesting your success callbacks while repeating the failureCallback every time you call the async function.
  These nested callbacks led to the ‘Callback Pyramid of Doom’ or callback hell, which can quickly become a nightmare. Could there be a more efficient way of handling situations like this?
  JavaScript introduced Promises as part of ES6 (ES2015) to solve this problem. It simplified working with callbacks and made for better syntax as you'll see shortly. 
  Promises are now the foundation for most modern asynchronous operations developers use in JavaScript today.
*/

/*
    What is a Promise?
    A promise is an assurance or guarantee that something will happen in the future. 
    A person can promise another person a specific outcome or result. 
    Promises are not limited to individuals, governments and organizations can also make promises. You have probably made a promise before.

    In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, 
    it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. 
    The possible outcomes here are similar to that of promises in real life.

    JavaScript promises can be in one of three possible states. These states indicate the progress of the promise. They are:

        pending: This is the default state of a defined promise
        fulfilled:  This is the state of a successful promise
        rejected: This is the state of a failed promise

    A promise goes from pending to fulfilled, or from pending to rejected—‘fulfilled’ and ‘rejected’ indicate the end of a promise.

    How to Create a Promise in JavaScript?
    To create a promise, you need to create an instance object using the Promise constructor function. 
    The Promise constructor function takes in one parameter. 
    That parameter is a function that defines when to resolve the new promise, and optionally when to reject it.
*/
/*
    const promise = new Promise((resolve, reject) => {
    // Condition to resolve or reject the promise
    });

    For example, assume you want a promise to resolve after a timeout of two seconds. 
    You can achieve this by writing it into the parameter of the constructor function.
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 2000);
    });
  
    In promises, resolve is a function with an optional parameter representing the resolved value. 
    Also, reject is a function with an optional parameter representing the reason why the promise failed.
    In the example above, the resolved value of the promise is the string 'Done!'.

    const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
        resolve("Promise is fulfilled!");
    } else {
        reject("Promise failed!");
    }
    });
  
  */

/*
    How to Attach a callback to a Promise
    To create a callback for a promise, you need to use the .then() method.
    This method takes in two callback functions. The first function runs if the promise is resolved, while the second function runs if the promise is rejected.

*/

const promise = new Promise((resolve,reject)=>{
    const num = Math.random()
    if(num >= 0.5){
        resolve('Promise is fulfilled')
    }else{
        reject("Promise failed!")
    }
})
function handleResolve(value){
    console.log(value)
}
function handleReject(reason){
    console.log(reason)
}
promise.then(handleResolve,handleReject)

/*
    It is possible to create an immediately resolved promise,  and then attach a callback
    with the .then() method. We can also create an immediately rejected promise in the same way too.

    Promise.resolve("successful").then((result)=>console.log(resolve))
    // Successfull
    Promise.reject("Not successful").then((result) => console.log(result));
    // Error: Uncaught (in promise)

    The error in the rejected promise is because you need to define a separate callback to handle a rejected promise.
    Promise.reject("Not Successful").then(
        () => {
            // empty callback if promise is fulfilled
        },
        (reason) => console.error(reason)
    )

    Promise make it incredibly easy to chain asynchronous instructions. When we handle a promise with .then() method,
    the operation always returns another promise. By employing this approach we can eliminate callback hell.

    fetchResource(
    url,
    function (result) {
      // Do something with the result
      fetchResource(
        newUrl,
        function (result) {
          // Do something with the new result
          fetchResource(
            anotherUrl,
            function (result) {
              // Do something with the new result
            },
            failureCallback
          );
        },
        failureCallback
      );
    },
    failureCallback
  );

  However, because .then() returns another promise, this is how to write the same instructions above with promises.

  fetchResource(url)
  .then(handleResult, failureCallback)
  .then(handleNewResult, failureCallback)
  .then(handleAnotherResult, failureCallback)

  How to handle Errors in a Promise?
  To handle errors in a Promises, use the .catch() method. if anything goes wrong with any of our promises, this method
  can catch the reason for that error.

  Promise.reject(new Error()).catch((reason) => console.log(reason))

  For instance, refactoring the chain of promises following the fetchResource() function from the example of the previous section.
  This is how we stop error callback repetition in our code.

  fetchResource(url)
  .then(handleResult)
  .then(handleNewResult)
  .then(handleAnotherResult)
  .catch(failureCallback)

  The .catch() method addresses any errors in a promise without requiring the nesting of error callback functions.

  To chain an asynchronous operation to a promise regardless of it the promise is resolved or not, use the .finally() method.

  The .then() method is how you handle the results of a promise writing individual conditions for both resolved and rejected.
  .catch() runs only when there is an error.
  Using .finally() helps prevent possible code repetition in .then() and .catch(). It is for operations we must run whether there
  is an error or not.

  The finally() method has a few cases in real-worl applications. It is important if we want to perform cleanup operations for the activities
  the promise initiated. 



*/