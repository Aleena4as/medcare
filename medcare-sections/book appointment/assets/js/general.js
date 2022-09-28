$(document).ready(function () {
   $(".skipMember").click(function () {
      $(".members-panel").empty();
      $(".previewMemberPanel").empty();
      document.getElementById("error14").innerText = "";
      $("#next").click();
   });

   // get country code from plugin begins here

   // $("#p-mobilenum").change(function () {
   //     $("#calling_code").val($("#p-mobilenum").intlTelInput("getSelectedCountryData").dialCode);
   //     console.log(`country id is`, $("#calling_code").val());
   //    });

   // get country code from plugin ends here

   $("#next").click(function () {
      var getpreviewMemberCount = $(".previewMemberPanel").children().length;
      // console.log(`getpreviewMemberCount is`, getpreviewMemberCount);
      if (getpreviewMemberCount == 0) {
         $(".familyPreviewError").empty();
         $(".familyPreviewError").append("<p>No other members are added.</p>");
      } else {
         $(".familyPreviewError").empty();
      }
   });

   // booking type selection based on radio button begins

   $('input[name="bookingOptions"]').click(function () {
      var inputValue = $(this).attr("value");
      $(".box")
         .not("." + inputValue + "-form")
         .hide();
      $("." + inputValue + "-form").show();
   });

   // booking type selection based on radio button ends
});

// checking input field accepts only numbers begins
function isNumber(evt) {
   evt = evt ? evt : window.event;
   var charCode = evt.which ? evt.which : evt.keyCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
   }
   return true;
}
// checking input field accepts only numbers ends
