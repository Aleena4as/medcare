$(document).ready(function () {




    $(".rescheduleDetails section").each(function (e) {
       if (e != 0) $(this).hide();
    });
 
    var rescount = $(".rescheduleDetails").children().length;
    console.log("no. of sections are", rescount);
    var resaddNext = 1;
    var resnextStepValid = true;
 
    $("#res-next").click(function () {
       // check step forms are valid or not
       // validateFormSteps();
       resnextStepValid = true;
       // check for 1st section
       var inputError = document.getElementsByClassName("res-ip-error");
       for (var i = 0; i < inputError.length; i++) {
          if (inputError[i].innerText) {
             resnextStepValid = false;
          }
       }
 
       // check for 2st section
 
 
       console.log("resnextStepValid is ", resnextStepValid);
 
 
 
       console.log("resnextStepValid after excecution is ", resnextStepValid);
 
       if (resnextStepValid == true) {
          // proceeds to next step if there is no error messages begins here
 
          // hide the radio selection option on clicking next button
          $(".getOptionsforBooking").hide();
 
          // scroll to the top of the page whenever next button is clicked
          $(window).scrollTop(400);
 
          resaddNext++;
          console.log(`adder value is`, resaddNext);
          if (resaddNext <= rescount) {
             if ($(".rescheduleDetails section:visible").next().length != 0)
                $(".rescheduleDetails section:visible").next().show().prev().hide();
             else {
                $(".rescheduleDetails section:visible").hide();
                $(".rescheduleDetails section:first").show();
             }
          }
          if (resaddNext == rescount) {
             $("#res-proceed").show();
             $("#res-next").hide();
          }
 
          // remove previous when div is first element begins
          if (resaddNext == 1) {
              $("#res-prev").hide();
         $(".getOptionsforBooking").show();
              
          } else {
             $("#res-prev").show();
          }
          // remove previous when div is first element begins
 
          // proceeds to next step if there is no error messages ends here
       }
       return false;
    });
 
    $("#res-prev").click(function () {
       // scroll to the top of the page whenever next button is clicked
       $(window).scrollTop(400);
 
       resaddNext--;
       console.log(`decremented value is`, resaddNext);
 
       // remove previous when div is first element begins
       if (resaddNext == 1) {
           $("#res-prev").hide();
         $(".getOptionsforBooking").show();
       } else {
          $("#res-prev").show();
       }
       // remove previous when div is first element begins
 
       if ($(".rescheduleDetails section:visible").prev().length == 0) {
          $(".rescheduleDetails section:first").show();
       } else if ($(".rescheduleDetails section:visible").prev().length != 0) {
          $(".rescheduleDetails section:visible").prev().show().next().hide();
       } else {
          $(".rescheduleDetails section:visible").hide();
          $(".rescheduleDetails section:last").show();
       }
 
       if (resaddNext - 1 != rescount) {
          $("#res-proceed").hide();
          $("#res-next").show();
       }
       return false;
    });
 });
 

 // clicking enter after 4th otp value is clicked begins here
$('.rescheduling-form input[name="resdigit-4"]').keypress(function (e) {
   var code = e.keyCode || e.which;
   if (code === 13)
      document.getElementById("res-next").click();
   // $("form").submit(); 
});
 // clicking enter after 4th otp value is clicked ends here


 // function validateFormSteps() {
 //    var inputError = document.getElementsByClassName("ip-error");
 //    for (var i = 0; i < inputError.length; i++) {
 //       if (inputError[i].innerText) {
 //          // alert("stoped next excecution");
 //          resnextStepValid = false;
 //       }
 //    }
 //    console.log("resnextStepValid is ", resnextStepValid);
 // }
 