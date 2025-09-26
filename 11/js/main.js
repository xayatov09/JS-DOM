const carts = document.querySelectorAll('.cart-item');
let counts = Array(carts.length).fill(0);
const totalPrice = document.querySelector('.total b');
const buyBtn = document.querySelector('.total .btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const narxBlocks = document.querySelectorAll('.modal .narx');
const summ = document.querySelector('.modal .summ span'); 
const buyAllBtn = document.querySelector('.modal .buyyy .btn');

function update() {
    let total = 0;
    carts.forEach((cart, i) => {
        const price = +cart.dataset.price; 
        total += price * counts[i]; 
        const num = cart.querySelector('.num');
        if (num) num.textContent = counts[i];
        const minus = cart.querySelector('.minus');
        if (minus) minus.classList.toggle('opacity', counts[i] === 0);
    });
    totalPrice.textContent = total;
}

carts.forEach((cart, i) => {
    const minus = cart.querySelector('.minus');
    const plus = cart.querySelector('.plus');
    minus.addEventListener('click', () => {
        if (counts[i] > 0) {
            counts[i]--;
            update();
        }
    });
    plus.addEventListener('click', () => {
        counts[i]++;
        update();
    });
});

buyBtn.addEventListener('click', () => {
    let jami = 0;
    carts.forEach((cart, i) => {
        const title = cart.querySelector('.cart-title').textContent;
        const price = +cart.dataset.price;
        if (counts[i] > 0) {
            narxBlocks[i].style.display = 'flex';
            narxBlocks[i].querySelector('p').textContent = `${title} x ${counts[i]}`;
            narxBlocks[i].querySelector('span').textContent = price * counts[i];
            jami += price * counts[i];
        } else {
            narxBlocks[i].style.display = 'none';
        }
    });
    summ.textContent = jami; 
    modal.classList.add('active'); 
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

buyAllBtn.addEventListener('click', () => {
    counts.fill(0);
    update();
    modal.classList.remove('active');
});
update();
