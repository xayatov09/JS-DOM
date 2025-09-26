let incr = document.querySelector('.increment')
let decr = document.querySelector('.decrement')
let count = document.querySelector('.count')

incr.addEventListener('click', ()=>{
    count.textContent = +count.textContent + 1
})

decr.addEventListener('click', ()=>{
    if (count.textContent == 0) return false;
    count.textContent = +count.textContent - 1
})   