

$(document).ready(function () {
    bestsellerSlider();
});

function bestsellerSlider() {
    $(".bestsellerSlider").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevNext: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        speed: 300,
        // prevArrow: "<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
        // nextArrow: "<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
        customPaging: function (slider, i) {
            /* ADDING CUSTOM PAGING
              Example
              return  return '<li>Something you want to insert</li>';
      */
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
}