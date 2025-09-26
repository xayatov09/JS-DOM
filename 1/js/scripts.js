let text = document.querySelector('.text')

text.addEventListener('click', ()=> {
    console.log(text);
    text.textContent = " CLICKED"
    text.style.color = "blue"
})