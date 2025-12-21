const nextBtn = document.querySelector('.sn-carousel--arrow.next');
const prevBtn = document.querySelector('.sn-carousel--arrow.prev');
const items = document.querySelectorAll('.sn-carousel--item');
const totalItems = items.length;
let currentIndex = 0;

nextBtn.addEventListener('click', () => {

    const prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;


    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });


    items[prevIndex].classList.add('prev');
    items[currentIndex].classList.add('active');
    items[nextIndex].classList.add('next');
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;
    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });


    items[currentIndex].classList.add('active');
    items[prevIndex].classList.add('prev');
    items[nextIndex].classList.add('next');
});


