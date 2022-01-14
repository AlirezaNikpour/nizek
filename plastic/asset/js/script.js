
$(document).ready(function() {
    const swiper = new Swiper('.nizek-slider', {
        calculateHeight:true,
        speed:1000,
        spaceBetween: 30,
        effect: 'fade',
        direction: "vertical",
        loop: false,
        mousewheel: {
            invert: false,
        },
        keyboard: {
            enabled: true,
        },
        autoHeight: true,
        pagination: {
            el: '.nizek-slider__pagination',
            clickable: true,
            type: "progressbar",
        },

    });



    swiper.on('slideChangeTransitionStart', function () {
        $(".nizek-slider__item > a > .nizek-slider__img > .nizek-slider__mask" ).css("clip-path", "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)");
        setTimeout( function(){
            $(".swiper-slide-active > a > .nizek-slider__img > .nizek-slider__mask" ).css("clip-path", "polygon(0 0, 100% 0, 100% 0, 0 0)");
        },500);
        let rotateDegree = $(".swiper-slide-active").data("rotation");
        let dataX= $(".swiper-slide-active").data("x");
        let dataY= $(".swiper-slide-active").data("y");
        $(".home-shape > div > div > div svg").css(
            "transform", "rotate( " + rotateDegree + "deg) translate(" + dataX + "% , " + dataY + "%)"
        );
    });
    swiper.on('slideChangeTransitionEnd', function () {
        let shapeColor= $(".swiper-slide-active").data("color");
        setTimeout( function(){
        $(".home-shape > div > div > div > svg > g > g").css(
            "fill", shapeColor
        );
        },1500);
    });
    swiper.on('setTransition', function () {
        setTimeout( function(){
            $(".swiper-slide-active > a > .nizek-slider__img > .nizek-slider__mask" ).css("clip-path", "polygon(0 100%, 100% 100%, 100% 0, 0 0)");
        },1500);
    });
});

