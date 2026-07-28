window.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".story", {
        slidesPerView: 1,
        spaceBetween: 10,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 7,
            spaceBetween: 3,
        },
        768: {
            slidesPerView: 7,
            spaceBetween: 3,
        },
        1024: {
            slidesPerView: 12,
            spaceBetween: 35,
        },
    },
    });
        var swiper = new Swiper(".main-swiper", {
        slidesPerView: 1,
        loop:true,
        // spaceBetween: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        // breakpoints: {
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     768: {
        //         slidesPerView: 4,
        //         spaceBetween: 40,
        //     },
        //     1024: {
        //         slidesPerView: 10,
        //         spaceBetween: 10,
        //     },
        // },
    });
        var swiper = new Swiper(".amazing-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 5,
        },
    },
    });
        var swiper = new Swiper(".swiper-category", {
        slidesPerView: 1,
        spaceBetween: 10,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 90,
        },
    },
    });
        var swiper = new Swiper(".swiper-brands", {
        slidesPerView: 1,
        spaceBetween: 10,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 90,
        },
    },
    });
        var swiper = new Swiper(".swiper-porfroosh", {
        slidesPerView: 1,
        spaceBetween: 10,
        //  pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //  },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
    });
    
})