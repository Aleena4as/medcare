(function($){
    'use strict'

$(document).ready(function(){
    initBg();

    var previousActiveTabIndex = 0;

    $(".tab-switcher").on('click keypress', function (event) {
        // event.which === 13 means the "Enter" key is pressed

        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {

            var tabClicked = $(this).data("tab-index");

            if(tabClicked != previousActiveTabIndex) {
                $('.tab-switcher').removeClass('active');
                $(this).addClass('active');
                $("#allTabsContainer .package-container").each(function () {
                    if($(this).data("tab-index") == tabClicked) {
                        $(".package-container").hide().removeClass('show');
                        $(this).show().addClass('show');
                        previousActiveTabIndex = $(this).data("tab-index");
                        return;
                    }
                });
            }
        }
    });
});

$(window).on('resize',function(){
    initBg();
});

function initBg() {
    $('.banner-bg').each(function() {
        var background = $(this).data('background');
        $(this).css('background-image', 'url("' + background + '")');
    });
}

})(jQuery);