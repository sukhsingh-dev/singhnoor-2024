const nextBtn = document.querySelector('.sn-carousel--arrow.next');
const prevBtn = document.querySelector('.sn-carousel--arrow.prev');
let currentSlide = 1;
const totalSlides = document.querySelectorAll('.sn-carousel--item').length;

// infinite circular carousel with nextBtn and prevBtn
nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    document.querySelector('.sn-carousel--list').style.transform = `translateX(${(currentSlide - 1) * -100}%)`;
});
prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    document.querySelector('.sn-carousel--list').style.transform = `translateX(${(currentSlide - 1) * -100}%)`;
});

