$(".digit-group")
   .find("input")
   .each(function () {
      $(this).attr("maxlength", 1);
      $(this).on("keyup", function (e) {
         var parent = $($(this).parent());

         if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find("input#" + $(this).data("previous"));

            if (prev.length) {
               $(prev).select();
            }
         } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 96 && e.keyCode <= 105) ||
            e.keyCode === 39
         ) {
            var next = parent.find("input#" + $(this).data("next"));

            if (next.length) {
               $(next).select();
            } else {
               if (parent.data("autosubmit")) {
                  parent.submit();
               }
            }
         }
      });
   });

function validateOTP() {
   var getDigit1 = document.getElementById("digit-1").value;
   var getDigit2 = document.getElementById("digit-2").value;
   var getDigit3 = document.getElementById("digit-3").value;
   var getDigit4 = document.getElementById("digit-4").value;
   var getFullOTPinput = getDigit1 + getDigit2 + getDigit3 + getDigit4;
   console.log("entered OTP is", getFullOTPinput);
   console.log("entered OTP is", getDigit1);

   if (getFullOTPinput != 1234) {
      document.getElementById("error15").innerText = "Entered OTP is not valid";
   } else {
      document.getElementById("error15").innerText = "";
      document.getElementById("success15").innerText = "Entered OTP is valid";
   }
   if (getDigit1 == "" || getDigit2 == "" || getDigit3 == "" || getDigit4 == "") {
      document.getElementById("error15").innerText = "Please Enter OTP to continue";
   }
}
$("#digit-4").on("input", validateOTP);

$("#next").click(function () {
   if ($(".hs-OTPDetails").is(":visible")) {
      validateOTP();
   }
});
