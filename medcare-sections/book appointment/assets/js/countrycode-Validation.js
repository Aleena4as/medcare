$(document).ready(function () {

var getCode = "";
var telInput = $("#p-mobilenum"),
   errorMsg = $("#error-msg"),
   validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({
   allowExtensions: true,
   formatOnDisplay: true,
   autoFormat: true,
   autoHideDialCode: true,
   autoPlaceholder: true,
   defaultCountry: "auto",
   ipinfoToken: "yolo",
   preferredCountries: ["ae", "in"],
   separateDialCode: true,
   nationalMode: false,
   numberType: "MOBILE",
   //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
   // preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
   preventInvalidNumbers: true,
   separateDialCode: true,
   initialCountry: "ae",
   geoIpLookup: function (callback) {
      $.get("http://ipinfo.io", function () {}, "jsonp").always(function (resp) {
         var countryCode = resp && resp.country ? resp.country : "";
         callback(countryCode);
      });
   },
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js",
});

var reset = function () {
   telInput.removeClass("error");
   errorMsg.addClass("hide");
   validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function () {
   
   reset();
   if ($.trim(telInput.val())) {
      if (telInput.intlTelInput("isValidNumber")) {
         validMsg.removeClass("hide");
      document.getElementById("error4").innerText = "";

         getCode = telInput.intlTelInput("getSelectedCountryData").dialCode;
         // alert(getCode);
         console.log("country code is", getCode);
         document.getElementById("p-countryCode").value = '+'+getCode;
         // console.log("added country code here",document.getElementById("p-countryCode").value);
  
      } else {
      document.getElementById("error4").innerText = "Please fill a valid number";

         telInput.addClass("error");
         errorMsg.removeClass("hide");
      }
   }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);
});