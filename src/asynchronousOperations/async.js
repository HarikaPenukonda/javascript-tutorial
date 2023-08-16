/*
    JavaScript Major Features
    1. Single-threaded
    2. Non-blocking
    3. asynchronous

    Single-Threaded 
        When a programming language is referred to as single-threaded, it means the language can execute only one instruction at a time. This differs from multi-threaded programming languages that run multiple instructions at once.

    Non-Blocking
        When a programming language is said to be non-blocking, it means that the language does not wait for a specific previous instruction to finish executing before it moves to the next one. This ensures that no instruction blocks or obstructs the execution of subsequent instructions.

    What Does "Asynchronous" Mean?
        JavaScript is also asynchronous (async), which means that it can handle a large number of tasks at a time. This is a feature of multi-threaded programming languages, but JavaScript achieves it with a single thread.

    How can a language that is supposed to execute only one task at a time (Single-threaded) be able to handle a large number of tasks (asynchronous) simultaneously?

    In Multi-threaded programming, a program can be split into separate threads, with each executing independently of the others.

    How the JavaScript Engine Works?
        For a browser to interpret JavaScript code, it needs to have a `JavaScript engine`. This JavaScript engine is a software component of a modern web browser that accepts JavaScript code, analyzes it, and transforms it into instructions the device will understand. 
        The JavaScript runtime is the environment that contains all the resources necessary for the execution of a JavaScript program. It includes the JavaScript Engine but also includes other things 
        Different browsers today use different JavaScript engines. For example, the Chrome Browser uses the V8 Engine from Google, Firefox uses one called Spidermonkey, and Opera Browser previously used the Carakan engine, before switching to V8.
        These engines have individual differences, but their jobs still remain the same. They process JavaScript Code.

    How the Call Stack Works?
        The call stack is a component of a JavaScript Engine that keeps track of all the functions the program executes. It is a Stack data structure that operates with two key operations.

        These operations are:

            Push: This operation adds or pushes a new function onto the top of the stack. The stack can only add new entries to the top.
            Pop: This operation removes or pops a new function off of the top of the stack. The Stack can only remove new entries from the top.

        Last In First Out (LIFO) is a term that summarizes how the call stack works. The last operation that went in is the first operation that will leave the stack.

    After the JavaScript Engine receives JavaScript code, it parses the code and places the first function it encounters on the call stack. If, while executing that function, the JavaScript engine notices that it calls other functions, then those functions are stacked on top of the call stack. 
    This is very important for functions nested in other functions as well as recursive functions.
    The call stack makes it possible to track the current and future running functions essential for the execution of a program. For the stack to pop off a function, the engine must have finished interpreting and running that function. If not, it remains there.
    A peek at the JavaScript call stack during the execution of a program shows the current state of the program.

    summary - whenever the JavaScript engine receives code, it parses it and uses a call stack to monitor the execution of these instructions.


    Asynchronous Operations and Web APIs
    even though JavaScript is single-threaded, it is also asynchronous. In asynchronous programming, a language can execute multiple tasks simultaneously. whenever JavaScript encounters asynchronous instructions like requests to third-party sites, or timer-based actions, it seeks assistance.
    To achieve this, JavaScript uses the browser’s provided Web Application Programming Interfaces (Web APIs).

    One very important reason for writing asynchronous code is to prevent a scenario where a particular running function ends up blocking the rest of the code. If this happens, it can cause undesirable user experiences and make our software inefficient.

    The `Web APIs` are a set of functions provided by the browser that the JavaScript engine can utilize. They include examples such as Document Object Model (DOM) manipulation methods, fetch, setInterval, setTimeout, promises, async-await functions, and more.

    Callback - A callback function is a function that is passed as an argument to a parent function, which the parent function needs to invoke after completing its process. In JavaScript, asynchronous operations utilize callbacks to further process the responses they receive from Web APIs.
    The example below is an asynchronous operation with a callback function.

        button.addEventListener('click', function () {
            console.log('I was clicked!')
        })
    Now whenever the user clicks on the button, it triggers the callback function to fire. But the callback cannot happen unless the parent function calls or invokes it, which is dependent on the user's action.

    callback functions with the fetch API
        fetch("<https://jsonplaceholder.typicode.com/users>")
        .then((response) => response.json())
        .then((response) => console.log(response))

    In this example, the then method of the fetch object accepts an arrow function as an argument. The execution of this function is dependent on the response received from the fetch request, making it a callback function.
    Also, in the second then method, you can see the usage of another callback. This is because the first callback returns another asynchronous function, necessitating the use of a callback.

    conclusion -  a callback function is passed in as an argument to an asynchronous function and only runs when the asynchronous operation has been completed. 

    callback queue
    The callback queue is a software mechanism that stores callback functions to be run after the Web APIs have processed asynchronous functions. 
    It uses the queue data structure which works with the First In First Out (FIFO) approach. 
    This means that the first callback added to that queue is going to be the first callback to leave.

    Event Loops
    The event loop is a loop that continuously checks if the call stack is empty. When the call stack is not empty, it allows the ongoing process to continue. But when the call stack becomes empty, the event loop fetches the task at the top of the callback queue and adds it to the call stack.
    The event loop runs continuously as long as the program is running, always performing its function until the callback queue is completely empty. This is why the JavaScript Engine executes callbacks only after everything in the call stack has been processed.

    console.log('A')
    setTimeout(() => console.log('B'), 0)
    console.log('C')

    // A
    // C
    // B
    It ends up logging A and C before B, even though the timeout was for 0 seconds. The reason for this is that the callback in setTimeout waited in the callback queue (setTimeout uses the Web API). The JavaScript Engine had to finish handling synchronous functions before handling the asynchronous ones. 
    It needed the help of the event loop to send the callback function to the call stack.








    

    */      





