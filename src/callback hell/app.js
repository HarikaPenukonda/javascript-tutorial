// Callback hell

// after 1s first red
// after 3s second blue
// after 2s third green
// In SEQUENCE!

const first = document.querySelector('.first')
const second =  document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn')

// btn.addEventListener('click',()=>{
//     //console.log('Hello World')
//     setTimeout(()=>{
//         first.style.color = 'red'
//     },1000)
//     setTimeout(()=>{
//         second.style.color = 'blue'
//     },3000)
//     setTimeout(()=>{
//         third.style.color = 'green'
//     },2000)
// })

/*
    1. first heading
    2. third heading and then only
    3. second heading
*/

btn.addEventListener('click',()=>{
    //console.log('Hello World')
    setTimeout(()=>{
        first.style.color = 'red'
        setTimeout(()=>{
            second.style.color = 'blue'
            setTimeout(()=>{
                third.style.color = 'green'
            },2000)
        },3000)
    },5000)
})

/*
    1. after 1s first red 
    2. after 3s second blue 
    3. after 2s third green

    In this case if the 1000 changes to 5000 
    1. after 5 secs first red
    2. after 3s second blue 
    3. after 2s third green

    this makes our code complex, we can use promises and async-await to make it simple.

*/ 

/*
    what if the requirement change ? and all the actions needs to run in the sequence 
    Right now our sequence
    1. first heading
    2. third heading and then only
    3. second heading

    change of requirements 
    1. after 1s first red 
    2. after 3s second blue - 4s
    3. after 2s third green - 6s
    
    we can just change the values

    btn.addEventListener('click',()=>{
    //console.log('Hello World')
    setTimeout(()=>{
        first.style.color = 'red'
    },1000)
    setTimeout(()=>{
        second.style.color = 'blue'
    },4000)
    setTimeout(()=>{
        third.style.color = 'green'
    },6000)
})
    But we are always depend on the first value, hardcoding is not an option

    
*/

