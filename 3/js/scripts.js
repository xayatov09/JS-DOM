let text = document.querySelector('.text')

function RandomNumber(min = 0, max = 255){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function RandomColor(){
    return `rgb(${RandomNumber()}, ${RandomNumber()}, ${RandomNumber()})`
}

function ChangeEvent(event) {
    text.textContent = event
    text.style.color = RandomColor()
    text.style.background = RandomColor ()
    text.style.fontSize = `${RandomNumber(13, 28)}px`
    text.style.width = `${RandomNumber(100, 500)}px`
}

text.addEventListener('click', () => ChangeEvent('CLICK'))