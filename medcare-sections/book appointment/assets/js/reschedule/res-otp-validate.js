$(document).ready(function () {
   function resValidateOTP() {
      var getDigit1 = document.getElementById("resdigit-1").value;
      var getDigit2 = document.getElementById("resdigit-2").value;
      var getDigit3 = document.getElementById("resdigit-3").value;
      var getDigit4 = document.getElementById("resdigit-4").value;
      var getFullOTPinput = getDigit1 + getDigit2 + getDigit3 + getDigit4;
      console.log("entered OTP is", getFullOTPinput);
      if (getFullOTPinput != 1234) {
         document.getElementById("error-res1").innerText = "Entered OTP is not valid";
      } else {
         document.getElementById("error-res1").innerText = "";
         document.getElementById("success-res1").innerText = "Entered OTP is valid";
      }
      if (getDigit1 == "" || getDigit2 == "" || getDigit3 == "" || getDigit4 == "") {
         document.getElementById("error-res1").innerText = "Please Enter OTP to continue";
      }
   }
   $("#resdigit-4").on("input", resValidateOTP);

   $("#res-next").click(function () {
      if ($(".hs-OTPDetails").is(":visible")) {
         resValidateOTP();
      }
   });
});
