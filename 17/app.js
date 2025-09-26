let one = document.querySelector('.one')
let two = document.querySelector('.two')
let pass = document.querySelector('.password input')
let text = document.querySelector('.text input')
let check = document.querySelector('.check input')
let button = document.querySelector('.button')
let count = 0
two.addEventListener('click', () => {
    pass.type = 'text'
    two.style.display = 'none'
    one.style.display = 'block'
})
one.addEventListener('click', () => {
    pass.type = 'password'
    one.style.display = 'none'
    two.style.display = 'block'
})
button.addEventListener('mouseenter', (e) => {
    e.preventDefault()
    console.log(text.value);
    console.log(pass.value);
    console.log(check.checked);
    if (text.value == ''|| pass.value == '' || !check.checked) {
        alert("Iltimos barcha maydonlarni to'ldiring")
    } else {
        button.textContent = 'Kirish Mumkin'
        button.addEventListener('click', () => window.location.reload())
    }
})