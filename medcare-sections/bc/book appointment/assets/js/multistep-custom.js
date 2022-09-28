$(document).ready(function () {

// get all inputs in the form 
   $(':input').keypress(function (e) {
      var code = e.keyCode || e.which;
      if (code === 13)
         document.getElementById("next").click();
      // $("form").submit(); /*add this, if you want to submit form by pressing `Enter`*/
   });

 



   $(".formDetails section").each(function (e) {
      if (e != 0) $(this).hide();
   });

   var count = $(".formDetails").children().length;
   console.log("no. of sections are", count);
   var addNext = 1;
   var nextStepValid = true;

   $("#next").click(function () {
      // check step forms are valid or not
      // validateFormSteps();
      nextStepValid = true;
      // check for 1st section
      var inputError = document.getElementsByClassName("ip-error");
      for (var i = 0; i < inputError.length; i++) {
         if (inputError[i].innerText) {
            nextStepValid = false;
         }
      }

      // check for 2st section


      console.log("nextStepValid is ", nextStepValid);



      console.log("nextStepValid after excecution is ", nextStepValid);

      if (nextStepValid == true) {
         // proceeds to next step if there is no error messages begins here

         // hide the radio selection option on clicking next button
         $(".getOptionsforBooking").hide();

         // scroll to the top of the page whenever next button is clicked
         $(window).scrollTop(400);

         addNext++;
         console.log(`adder value is`, addNext);
         if (addNext <= count) {
            if ($(".formDetails section:visible").next().length != 0)
               $(".formDetails section:visible").next().show().prev().hide();
            else {
               $(".formDetails section:visible").hide();
               $(".formDetails section:first").show();
            }
         }
         if (addNext == count) {
            $("#proceed").show();
            $("#next").hide();
         }

         // remove previous when div is first element begins
         if (addNext == 1) {
            $("#prev").parent().hide();
            $(".getOptionsforBooking").show();

         } else {
            $("#prev").show();
         }
         // remove previous when div is first element begins

         // proceeds to next step if there is no error messages ends here
      }
      return false;
   });

   $("#prev").click(function () {
      // scroll to the top of the page whenever next button is clicked
      $(window).scrollTop(400);

      addNext--;
      console.log(`decremented value is`, addNext);

      // remove previous when div is first element begins
      if (addNext == 1) {
         $("#prev").hide();
         $(".getOptionsforBooking").show();
      } else {
         $("#prev").show();
      }
      // remove previous when div is first element begins

      if ($(".formDetails section:visible").prev().length == 0) {
         $(".formDetails section:first").show();
      } else if ($(".formDetails section:visible").prev().length != 0) {
         $(".formDetails section:visible").prev().show().next().hide();
      } else {
         $(".formDetails section:visible").hide();
         $(".formDetails section:last").show();
      }

      if (addNext - 1 != count) {
         $("#proceed").hide();
         $("#next").show();
      }
      return false;
   });
});






// function validateFormSteps() {
//    var inputError = document.getElementsByClassName("ip-error");
//    for (var i = 0; i < inputError.length; i++) {
//       if (inputError[i].innerText) {
//          // alert("stoped next excecution");
//          nextStepValid = false;
//       }
//    }
//    console.log("nextStepValid is ", nextStepValid);
// }
