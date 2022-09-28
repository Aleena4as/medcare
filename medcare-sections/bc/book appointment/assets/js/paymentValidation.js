 // new booking form submission form begins here
$("#proceed").click(function () {
    event.preventDefault();
    var payMode = $('input[name="paymentchoice"]').filter(':checked').val();
    // console.log(`paymemt mode is`, payMode);
    if (payMode === "paybycash") {
      document.getElementById("newBooking-form").submit();
    }
    
});
 
$('input[name="paymentchoice"]').keypress(function (e) {
  var code = e.keyCode || e.which;
  if (code === 13)
     document.getElementById("proceed").click();
  // $("form").submit(); /*add this, if you want to submit form by pressing `Enter`*/
});
 
 // new booking form submission form ends here
 