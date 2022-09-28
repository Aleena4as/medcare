// slider
function sliderInit() {
   $slick_slider = $(".hp-testimonialSlider");
   settings_slider = {
      prevNext: true,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      speed: 300,
      // more settings
   };
   slick_on_mobile($slick_slider, settings_slider);

   // slick on mobile
   function slick_on_mobile(slider, settings) {
      $(window).on("load resize", function () {
         if ($(window).width() > 767) {
            if (slider.hasClass("slick-initialized")) {
               slider.slick("unslick");
            }
            return;
         }
         if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
         }
      });
   }
}
$(document).ready(function () {
   sliderInit();

});
