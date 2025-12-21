const nextBtn = document.querySelector('.sn-carousel--arrow.next');
const prevBtn = document.querySelector('.sn-carousel--arrow.prev');
const totalSlides = document.querySelectorAll('.sn-carousel--item').length;
let activeSlide = 0;


const items = document.querySelectorAll('.sn-carousel--item');
const totalItems = items.length;
let currentIndex = 0; // Start at the first slide

nextBtn.addEventListener('click', () => {

    const prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;


    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });


    items[prevIndex].classList.add('prev');
    // on currnt slide first add class name right and after 500ms then add class name active
    items[currentIndex].classList.add('active');
    // setTimeout(() => {
    //     items[currentIndex].classList.add('active');
    //     items[currentIndex].classList.remove('right');
    // }, 2000);

    items[nextIndex].classList.add('next');
});

prevBtn.addEventListener('click', () => {
    // 1. Calculate indices for moving backwards
    // To go back: the new current is (currentIndex - 1)
    // We add totalItems before modulo to handle negative results
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;

    // The slide before the new active one
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;

    // The slide after the new active one
    const nextIndex = (currentIndex + 1) % totalItems;

    // 2. Reset all classes for a clean state
    items.forEach(item => {
        item.classList.remove('active', 'prev', 'next');
    });

    // 3. Assign classes to the items based on the new indices
    items[currentIndex].classList.add('active');
    items[prevIndex].classList.add('prev');
    items[nextIndex].classList.add('next');
});
// prevBtn.addEventListener('click', () => {
//     currentSlide--;
//     if (currentSlide < 1) {
//         currentSlide = totalSlides;
//     }
//     document.querySelector('.sn-carousel--list').style.transform = `translateX(${(currentSlide - 1) * -100}%)`;
// });

