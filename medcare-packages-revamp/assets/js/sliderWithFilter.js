$(function () {

    $(".sliderWithFilter").slick({
        slidesToShow: 3.2,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
        // centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        infinite: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.2,
                }
            }
        ]

    });

    $(".sliderFilterBookmarks li").on('click', function () {
        var filter = $(this).data('filter');
        $(".slider").slick('slickUnfilter');

        if (filter == 'packageType1') {
            $(".slider").slick('slickFilter', '.packageType1');
        }
        else if (filter == 'packageType2') {
            $(".slider").slick('slickFilter', '.packageType2');
        }
        else if (filter == 'packageType3') {
            $(".slider").slick('slickFilter', '.packageType3');
        }
        else if (filter == 'all') {

            $(".slider").slick('slickUnfilter');
        }



    })
    $(".sliderFilterBookmarks li").on('click', function () {
        $('.packageType').each(function (i, obj) {
            $(this).removeClass("activePackage");
        });
        $(this).addClass("activePackage");
    });

});
