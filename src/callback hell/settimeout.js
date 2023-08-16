/*
    The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed. 
    You can think of the method as a way to set a timer to run JavaScript code at a certain time.

    For example, the code below will print "Hello World" to the JavaScript console after 2 seconds have passed:
*/

setTimeout(function(){
    console.log("hello world")
},2000)

console.log("setTimeout() example...");

/*
    The code above will first print "setTimeout() example..." to the console, 
    and then print "Hello World" once two seconds have passed since the code has been executed by JavaScript.

    syntax : setTimeout(function, milliseconds, parameter1, parameter2, ...);

    The first parameter of the setTimeout() method is a JavaScript function that you want to execute. 
    You can write the function directly when passing it, or you can also refer to a named function as shown below:

    function greeting(){
        console.log("Hello World");
    }
    setTimeout(greeting);

    Next, you can pass the milliseconds parameter, which will be the amount of time JavaScript will wait before executing the code.
    One second is equal to one thousand milliseconds, so if you want to wait for 3 seconds, you need to pass 3000 as the second argument:

    function greeting(){
        console.log("Hello World");
    }
    setTimeout(greeting, 3000);

    If you omit the second parameter, then setTimeout() will immediately execute the passed function without waiting at all.
    
    Finally, you can also pass additional parameters to the setTimeout() method that you can use inside the function as follows:

    function greeting(name, role){
        console.log(`Hello, my name is ${name}`);
        console.log(`I'm a ${role}`);
    }

    setTimeout(greeting, 3000, "Nathan", "Software developer");

     "why not just pass the parameters directly to the function?"
     This is because if you pass the parameters directly like this:

     setTimeout(greeting("Nathan", "Software developer"), 3000);

    Then JavaScript will immediately execute the function without waiting, because you're passing a function call and not a function reference as the first parameter.
    This is why if you need to pass any parameters to the function, you need to pass them from the setTimeout() method.

    How to Cancel the setTimeout Method?
    You can also prevent the setTimeout() method from executing the function by using the clearTimeout() method.
    
    The clearTimeout() method requires the id returned by setTimeout() to know which setTimeout() method to cancel:
    clearTimeout(id);

    const timeoutId = setTimeout(function(){
        console.log("Hello World");
    }, 2000);
    clearTimeout(timeoutId);
    console.log(`Timeout ID ${timeoutId} has been cleared`);

*/

/*
    The JavaScript setTimeout() method is a built-in method that allows you to time the execution of a certain function . 
    You need to pass the amount of time to wait for in milliseconds , which means to wait for one second, you need to pass one thousand milliseconds.
    To cancel a setTimeout() method from running, you need to use the clearTimeout() method, passing the ID value returned when you call the setTimeout() method.
*/