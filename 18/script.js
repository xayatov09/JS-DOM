let input = document.querySelector('input')
let lists = document.querySelectorAll('.list-group-item a')
let listsMain = document.querySelectorAll('.list-group-item')

input.addEventListener('input', (e) => {
    let search = lotinga(input.value.toLowerCase())
    console.log(search);

    lists.forEach((list, index) => {
        let city = lotinga(list.textContent.toLowerCase())
        console.log(city);

        if (!city.includes(search)) {
            listsMain[index].classList.add('show')
        } else {
            listsMain[index].classList.remove('show')

        }
    })
})