let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let dots = document.querySelectorAll('.dote')


setInterval(() => {
    let date = new Date()
    hour.innerHTML = addZero (date.getHours())
    min.innerHTML = addZero (date.getMinutes())
    sec.innerHTML = addZero(date.getSeconds())
}, 10);


function addZero (num){
    return num < 10 ? '0' + num : num
}

setInterval(() => {
    dots.forEach(dot => {
        dot.classList.toggle
    })
}, 500);