
function canValidateOTP() {
	var getDigit1 = document.getElementById("candigit-1").value;
	var getDigit2 = document.getElementById("candigit-2").value;
	var getDigit3 = document.getElementById("candigit-3").value;
	var getDigit4 = document.getElementById("candigit-4").value;
	var getFullOTPinput = getDigit1 + getDigit2 + getDigit3 + getDigit4;
	console.log("entered OTP is", getFullOTPinput);
	if (getFullOTPinput != 1234) {
		document.getElementById("error-can1").innerText = "Entered OTP is not valid";
	}
	else {
		document.getElementById("error-can1").innerText = "";
		document.getElementById("success-can1").innerText = "Entered OTP is valid";
	}
	if (getDigit1 == "" || getDigit2 == "" || getDigit3 == "" || getDigit4 == "") {
		document.getElementById("error-can1").innerText = "Please Enter OTP to continue";
	 }
}
$("#candigit-4").on('input', canValidateOTP);


$("#can-next").click(function () {
	if ($(".hs-OTPDetails").is(":visible")) {
		canValidateOTP();
	}
 });