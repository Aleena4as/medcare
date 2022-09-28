$(document).ready(function () {
   var submitAllow = true;

   function validateDateCheck(patientDateCheck) {
      if (patientDateCheck == "") {
         document.getElementById("d-checkerror1").innerText = "Please select a date";
      } else {
         document.getElementById("d-checkerror1").innerText = "";
      }
   }
   function validateSlotCheck(patientSlotCheck) {
      if (patientSlotCheck == "") {
         document.getElementById("d-checkerror2").innerText = "Please select a slot to book";
      } else {
         document.getElementById("d-checkerror2").innerText = "";
      }
   }

   function validateCheckInput() {
      var patientDateCheck = document.getElementById("patientDateCheck").value;
      var patientSlotCheck = document.getElementById("patientSlotCheck").value;

      validateDateCheck(patientDateCheck);
      validateSlotCheck(patientSlotCheck);
   }

   function postfetchAvailability() {
      //make api resquest to sent and get back message of availability
   }
   $("#patientDateCheck").on("change", validateDateCheck);
   $("#patientSlotCheck").on("input", validateSlotCheck);

   $("#retrieveNewAppointment").click(function (e) {
      e.preventDefault();
      var isAvailable = true;
      validateCheckInput();
      var checkError = document.getElementsByClassName("check-error");
      for (var i = 0; i < checkError.length; i++) {
         if (checkError[i].innerText) {
            isAvailable = false;
         }
      }
      //   console.log("status of form", allowSubmit);

      if (isAvailable) {
         postfetchAvailability();
         document.getElementById("retrieveNewAppointment").style.display = "none";
         document.getElementById("gotoCheck").style.display = "block";
         document.getElementById("proceedToAppointment").style.display = "block";
      }
   });

   // clicking button proceed begins
   $("#proceedToAppointment").click(function (e) {
      //   document.getElementById("checkAvailability").style.display = "none"; // hide the first form and open second one
   });
   $("#gotoCheck").click(function (e) {
      document.getElementById("gotoCheck").style.display = "none";
      document.getElementById("proceedToAppointment").style.display = "none";
      document.getElementById("retrieveNewAppointment").style.display = "block";
   });
});
