let item = document.querySelectorAll('.item')

item.forEach(item => {
   item.addEventListener('.click', () => {
    item.classList.add('opacity')
   })
});

window.addEventListener('keydown', (e) => {
    item.forEach((item) => {
        if (e.key == item.textContent) {
            item.classList.toggle('opacity')
        }
    })
})