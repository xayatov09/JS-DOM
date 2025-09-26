let display = document.querySelector('.num h4')
let numbers = document.querySelectorAll('.num1')
let clear = document.querySelector('.clear')
let Acc = document.querySelector('.Acc')
let foiz = document.querySelector('.fioz')
let icons = document.querySelectorAll('.icon')
let ravno = document.querySelector('.ravno')

let num1 = 0
let num2 = 0
let amal = ''

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (+display.textContent === 0) {
            display.textContent = +number.textContent
        } else {
            display.textContent = display.textContent + number.textContent
        }
    })
})

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        num1 = display.textContent
        amal = icon.textContent
        display.textContent = 0
    })
})

ravno.addEventListener('click', () => {
    num2 = display.textContent
    console.log(num1);
    console.log(amal);
    console.log(num2);


    switch (amal) {
        case "+": display.textContent = +num1 + +num2; break;
        case "-": display.textContent = +num1 - +num2; break;
        case "*": display.textContent = +num1 * +num2; break;
        case "/": display.textContent = +num1 / +num2; break;

        default:
            break;
    }
})

foiz.addEventListener('click', () => {
    display.textContent *= 0.01
})

Acc.addEventListener('click', () => {
    display.textContent = +display.textContent * -1
})

clear.addEventListener('click', () => {
    display.textContent = 0
})

window.addEventListener('keydown', (e) => {
    if (e.key >= 0) {
        if (+display.textContent === 0) {
            display.textContent = display.textContent + +e.key
        } else {
            display.textContent = display.textContent + e.key
        }
    }
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        num1 = display.textContent
        amal = e.key
        display.textContent = 0
    }
    if (e.key == 'Enter') {
        num2 = display.textContent
        switch (amal) {
            case "+": display.textContent = +num1 + +num2; break;
            case "-": display.textContent = +num1 - +num2; break;
            case "*": display.textContent = +num1 * +num2; break;
            case "/": display.textContent = +num1 / +num2; break;
        }
    }
    if (e.key == "Escape") {
        clear.addEventListener('click', () => {
})
    }

})