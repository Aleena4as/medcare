$(document).ready(function () {
   $(".cancellationDetails section").each(function (e) {
      if (e != 0) $(this).hide();
   });

   var cancount = $(".cancellationDetails").children().length;
   console.log("no. of sections are", cancount);
   var canaddNext = 1;
   var cannextStepValid = true;

   $("#can-next").click(function () {
      // check step forms are valid or not
      // validateFormSteps();
      cannextStepValid = true;
      // check for 1st section
      var inputError = document.getElementsByClassName("can-ip-error");
      for (var i = 0; i < inputError.length; i++) {
         if (inputError[i].innerText) {
            cannextStepValid = false;
         }
      }

      // check for 2st section

      console.log("cannextStepValid is ", cannextStepValid);

      console.log("cannextStepValid after excecution is ", cannextStepValid);

      if (cannextStepValid == true) {
         // proceeds to next step if there is no error messages begins here

         // hide the radio selection option on clicking next button
         $(".getOptionsforBooking").hide();

         // scroll to the top of the page whenever next button is clicked
         $(window).scrollTop(400);

         canaddNext++;
         console.log(`adder value is`, canaddNext);
         if (canaddNext <= cancount) {
            if ($(".cancellationDetails section:visible").next().length != 0)
               $(".cancellationDetails section:visible").next().show().prev().hide();
            else {
               $(".cancellationDetails section:visible").hide();
               $(".cancellationDetails section:first").show();
            }
         }
         if (canaddNext == cancount) {
            $("#can-proceed").show();
            $("#can-next").hide();
         }

         // remove previous when div is first element begins
         if (canaddNext == 1) {
            $("#can-prev").hide();
            $(".getOptionsforBooking").show();
         } else {
            $("#can-prev").show();
         }
         // remove previous when div is first element begins

         // proceeds to next step if there is no error messages ends here
      }
      return false;
   });

   $("#can-prev").click(function () {
      // scroll to the top of the page whenever next button is clicked
      $(window).scrollTop(400);

      canaddNext--;
      console.log(`decremented value is`, canaddNext);

      // remove previous when div is first element begins
      if (canaddNext == 1) {
         $("#can-prev").hide();
         $(".getOptionsforBooking").show();
      } else {
         $("#can-prev").show();
      }
      // remove previous when div is first element begins

      if ($(".cancellationDetails section:visible").prev().length == 0) {
         $(".cancellationDetails section:first").show();
      } else if ($(".cancellationDetails section:visible").prev().length != 0) {
         $(".cancellationDetails section:visible").prev().show().next().hide();
      } else {
         $(".cancellationDetails section:visible").hide();
         $(".cancellationDetails section:last").show();
      }

      if (canaddNext - 1 != cancount) {
         $("#can-proceed").hide();
         $("#can-next").show();
      }
      return false;
   });
});

 // clicking enter after 4th otp value is clicked begins here
 $('.cancellation-form input[name="candigit-4"]').keypress(function (e) {
   var code = e.keyCode || e.which;
   if (code === 13)
      document.getElementById("can-next").click();
   // $("form").submit(); 
});
 // clicking enter after 4th otp value is clicked ends here

// function validateFormSteps() {
//    var inputError = document.getElementsByClassName("can-ip-error");
//    for (var i = 0; i < inputError.length; i++) {
//       if (inputError[i].innerText) {
//          // alert("stoped next excecution");
//          cannextStepValid = false;
//       }
//    }
//    console.log("cannextStepValid is ", cannextStepValid);
// }
