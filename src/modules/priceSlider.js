export function priceSlider () {
    new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
            navigation: {
        nextEl: '.price__arrow-next',
        prevEl: '.price__arrow-prev',
      },
    });
}