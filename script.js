const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 400,
    preventClicks: true,
    noSwiping: true,
    freeMode: false,
    navigation: {
        nextEl: ".next",
        prevEl: ".prevent"
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween:25,
        },
        950: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 320,
        }
    }
})


// const swiper = new Swiper(".swiper", {
//     effect: "covervlow",
//     grabCursor: true,
//     centerdSlides: true,
//     initialSlide: 2,
//     speed: 600,
//     preventClicks: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 80,
//         depth: 350,
//         modifier: 1,
//         slideShadows:true,
//     },
//     on: {
//         click(event) {
//             swiper.slideTo(this.clickedIndex)
//         },
//     },
//     pagination: {
//         el: ".swiper-pagination"
//     }
// })