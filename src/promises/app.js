/*
    1. .first - after 1s first red;
    2. .second - after 3s second blue; 4s
    3. .third - after 2s third greem; 6s
    IN SEQUENCE
*/

const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    addColor(1000,'.first','red')
    .then(()=> addColor(3000,'.second','blue'))
    .then(()=>addColor(2000,'.third','green'))
    .catch((err)=>console.log(err))
})

function addColor(time,selector,color){
    const element = document.querySelector(selector)
    console.log(element)
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color
                resolve()
            },time)
        }else{
            reject(`There is no such element : "${selector}"`)
        }
    })
}