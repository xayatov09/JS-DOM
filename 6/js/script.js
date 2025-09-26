let nav = document.querySelector('.navbar')
let btns = document.querySelectorAll('.btn')

btns.forEach(element => {
    element.addEventListener('click', () => {
        nav.style.background = element.getAttribute('data-color')
    })
});