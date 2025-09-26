let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let gree = document.querySelector('.green')

let i = 0
setInterval(() => {
    if (i < 30) {
        red.style.background = 'red'
        yellow.style.background = ' #cfcfcfd7'
        red.textContent = 30 - i
        yellow.textContent = ''
    }else if (i < 35) {
        yellow.style.background = 'yellow'
        red.style.background = ` #cfcfcfd7`
        yellow.textContent = 30 - i
        red.textContent = ''
    }else if (i < 65) {
        green.style.background = 'green'
        yellow.style.background = ' #cfcfcfd7'
        green.textContent = 65 - i
        yellow.textContent = ''
    }else{
        yellow.style.background = 'yellow'
        green.style.background  = ' #cfcfcfd7'
        yellow.textContent = 70 - i
        green.textContent = ''
        if (i == 69) i = 0 
    }

    i++
}, 1000)