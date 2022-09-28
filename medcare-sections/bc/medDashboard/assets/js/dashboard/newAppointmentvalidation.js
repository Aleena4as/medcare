$(document).ready(function () {
   var submitAllow = true;

   function validateName(patientName) {
      if (patientName == "") {
         document.getElementById("d-error1").innerText = "Please enter patient's name";
      } else {
         document.getElementById("d-error1").innerText = "";
      }
   }
   function validateEmiratesID(patientEmiratesId) {
      if (patientEmiratesId == "") {
         document.getElementById("d-error2").innerText = "Please enter patient's emirates ID";
      } else {
         document.getElementById("d-error2").innerText = "";
      }
      if (patientEmiratesId.match(/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/)) {
         document.getElementById("d-error2").innerText = "";
      } else {
         document.getElementById("d-error2").innerText = "Please enter a valid emirates Id";
      }
   }
   function validateEmail(patientEmail) {
      if (patientEmail == "") {
         document.getElementById("d-error3").innerText = "Please enter patient's email";
      } else {
         document.getElementById("d-error3").innerText = "";
      }
      if (
         patientEmail.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         )
      ) {
         document.getElementById("d-error3").innerText = "";
      } else {
         document.getElementById("d-error3").innerText = "Please enter a valid email";
      }
   }
   function validateMobileNum(patientMobilenum) {
      if (patientMobilenum == "") {
         document.getElementById("d-error4").innerText = "Please enter patient's mobile number";
      } else {
         document.getElementById("d-error4").innerText = "";
      }
   }
   function validateLocation(patientlocation) {
      if (patientlocation == "") {
         document.getElementById("d-error5").innerText = "Please enter patient's location";
      } else {
         document.getElementById("d-error5").innerText = "";
      }
   }
   function validateVilla(patientvillaNo) {
      if (patientvillaNo == "") {
         document.getElementById("d-error6").innerText = "Please enter patient's villa no.";
      } else {
         document.getElementById("d-error6").innerText = "";
      }
   }
   function validateBuilding(patientbuildingNo) {
      if (patientbuildingNo == "") {
         document.getElementById("d-error7").innerText = "Please enter patient's building no.";
      } else {
         document.getElementById("d-error7").innerText = "";
      }
   }
   function validateStreet(patientstreetNo) {
      if (patientstreetNo == "") {
         document.getElementById("d-error8").innerText = "Please enter patient's street no.";
      } else {
         document.getElementById("d-error8").innerText = "";
      }
   }

   function validateSelectEmirate(patientSelectEmirate) {
      if (patientSelectEmirate == "") {
         document.getElementById("d-error9").innerText = "Please select patient's emirate";
      } else {
         document.getElementById("d-error9").innerText = "";
      }
   }
   function validateService(patientBookService) {
      if (patientBookService == "") {
         document.getElementById("d-error10").innerText = "Please select a service";
      } else {
         document.getElementById("d-error10").innerText = "";
      }
   }
   function validateBookingDate(patientnewBookingDate) {
      if (patientnewBookingDate == "") {
         document.getElementById("d-error11").innerText = "Please select a date";
      } else {
         document.getElementById("d-error11").innerText = "";
      }
   }

   function validateSlot(patientTimeslot) {
      if (patientTimeslot == "") {
         document.getElementById("d-error12").innerText = "Please select a slot.";
      } else {
         document.getElementById("d-error12").innerText = "";
      }
   }

   function validateAppointmentInput() {
      var patientName = document.getElementById("patient-Name").value;
      var patientEmiratesId = document.getElementById("patient-EmiratesId").value;
      var patientEmail = document.getElementById("patient-Email").value;
      var patientMobilenum = document.getElementById("patient-Mobilenum").value;
      var patientlocation = document.getElementById("patient-location").value;
      var patientvillaNo = document.getElementById("patient-villaNo").value;
      var patientbuildingNo = document.getElementById("patient-buildingNo").value;
      var patientstreetNo = document.getElementById("patient-streetNo").value;
      var patientSelectEmirate = document.getElementById("patient-SelectEmirate").value;
      var patientBookService = document.getElementById("patient-BookService").value;
      var patientnewBookingDate = document.getElementById("patient-newBookingDate").value;
      var patientTimeslot = document.getElementById("patient-Timeslot").value;
      //   console.log("patientName", patientName);

      validateName(patientName);
      validateEmiratesID(patientEmiratesId);
      validateEmail(patientEmail);
      validateMobileNum(patientMobilenum);
      validateLocation(patientlocation);
      validateVilla(patientvillaNo);
      validateBuilding(patientbuildingNo);
      validateStreet(patientstreetNo);
      validateSelectEmirate(patientSelectEmirate);
      validateService(patientBookService);
      validateBookingDate(patientnewBookingDate);
      validateSlot(patientTimeslot);
   }
   $("#patient-Name").on("input", validateName);
   $("#patient-EmiratesId").on("input", validateEmiratesID);
   $("#patient-Email").on("input", validateEmail);
   $("#patient-Mobilenum").on("input", validateMobileNum);
   $("#patient-location").on("input", validateLocation);
   $("#patient-villaNo").on("input", validateVilla);
   $("#patient-buildingNo").on("input", validateBuilding);
   $("#patient-streetNo").on("input", validateStreet);
   $("#patient-SelectEmirate").on("input", validateSelectEmirate);
   $("#patient-BookService").on("input", validateService);
   $("#patient-newBookingDate").on("input", validateBookingDate);
   $("#patient-Timeslot").on("input", validateSlot);

   $("#saveNewAppointment").click(function (e) {
      e.preventDefault();
      var allowSubmit = true;
      validateAppointmentInput();
      var inputError = document.getElementsByClassName("patient-error");
      for (var i = 0; i < inputError.length; i++) {
         if (inputError[i].innerText) {
            allowSubmit = false;
         }
      }
      //   console.log("status of form", allowSubmit);

      if (allowSubmit) {
         $("#addnewBookingForm").submit();
      }
   });
});
