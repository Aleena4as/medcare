$("#next").click(function () {
   var memberflag = 0;

   var pBookService = document.getElementById("p-BookService").value;
   var pfirstName = document.getElementById("p-firstName").value;
   var plastname = document.getElementById("p-lastname").value;
   var pmobilenum = document.getElementById("p-mobilenum").value;
   var pemiratesId = document.getElementById("p-emiratesId").value;
   var pdob = document.getElementById("p-dob").value;
   var pgender = document.getElementById("p-gender").value;
   var pemail = document.getElementById("p-email").value;

   checkService(pBookService);
   checkfirstName(pfirstName);
   checklastname(plastname);
   checkmobilenum(pmobilenum);
   checkemiratesId(pemiratesId);
   checkdob(pdob);
   checkgender(pgender);
   checkemail(pemail);

   // for members section validation begins here
   if ($(".hs-addmembers").is(":visible")) {
      $(".hs-addmembers")
         .find("input, select")
         .each(function () {
            // alert($(this).attr('id'));
            // alert($(this).val());
            if ($(this).val() == "" || $(this).val() == null) {
               memberflag = 1;
            }
            if (memberflag == 1) {
               document.getElementById("error14").innerText =
                  "Please fill all the details of the member's to continue";
            } else {
               document.getElementById("error14").innerText = "";
            }
         });

      // $('.hs-addmembers input[type=text]').on('blur', function(){
      //     validateField(this)
      //   });
      //   $('.hs-addmembers select').on('blur', function(){
      //     validateField(this)
      //   });
   }
   // for members section validation begins here

   // for location section validation begins here
   // check the section is display none or not
   if ($(".hs-locationDetails").is(":visible")) {
      var plocation = document.getElementById("p-location").value;
      var pvillaNo = document.getElementById("p-villaNo").value;
      var pbuildingNo = document.getElementById("p-buildingNo").value;
      var pstreetNo = document.getElementById("p-streetNo").value;
      var pselectEmirate = document.getElementById("p-SelectEmirate").value;
      checkLocation(plocation);
      checkVillaNo(pvillaNo);
      checkBuildingNo(pbuildingNo);
      checkStreetNo(pstreetNo);
      checkSelectEmirate(pselectEmirate);
   }
   // for location section validation begins here
   // date and time booking section begins here

   if ($(".hs-bookingDetails").is(":visible")) {
      var pAppointmentDate = document.getElementById("appointmentDate").value;
      var pTimeslotselected = document.querySelector('input[name="timeslotselected"]:checked').value;
      checkAppointmentDate(pAppointmentDate);
      checkTimeslotselected(pTimeslotselected);
   }
   // date and time booking section begins here
});

// on change functions begins here to remove the validation msg

// location begins here
$("#p-location").change(function () {
   var plocation = document.getElementById("p-location").value;
   checkLocation(plocation);
});
$("#p-villaNo").change(function () {
   var pvillaNo = document.getElementById("p-villaNo").value;
   checkVillaNo(pvillaNo);
});
$("#p-buildingNo").change(function () {
   var pbuildingNo = document.getElementById("p-buildingNo").value;
   checkBuildingNo(pbuildingNo);
});
$("#p-streetNo").change(function () {
   var pstreetNo = document.getElementById("p-streetNo").value;
   checkStreetNo(pstreetNo);
});
$("#p-SelectEmirate").change(function () {
   var pselectEmirate = document.getElementById("p-SelectEmirate").value;
   checkSelectEmirate(pselectEmirate);
});
// location ends here

// booking onchange begins here
$("#appointmentDate").change(function () {
   var pAppointmentDate = document.getElementById("appointmentDate").value;
   checkAppointmentDate(pAppointmentDate);
});
$("#timeslotselected").change(function () {
   var pTimeslotselected = document.querySelector('input[name="timeslotselected"]:checked').value;
   checkTimeslotselected(pTimeslotselected);
});
// booking onchange ends here

// personal details onchange begins here
$("#p-BookService").change(function () {
   var pBookService = document.getElementById("p-BookService").value;
   // alert();
   checkService(pBookService);
});
$("#p-firstName").change(function () {
   var pfirstName = document.getElementById("p-firstName").value;
   checkfirstName(pfirstName);
});
$("#p-lastname").change(function () {
   var plastname = document.getElementById("p-lastname").value;
   checklastname(plastname);
});
$("#p-mobilenum").change(function () {
   var pmobilenum = document.getElementById("p-mobilenum").value;
   checkmobilenum(pmobilenum);
});
$("#p-emiratesId").change(function () {
   var pemiratesId = document.getElementById("p-emiratesId").value;
   checkemiratesId(pemiratesId);
});
$("#p-dob").change(function () {
   var pdob = document.getElementById("p-dob").value;
   checkdob(pdob);
});
$("#p-gender").change(function () {
   var pgender = document.getElementById("p-gender").value;
   checkgender(pgender);
});
$("#p-email").change(function () {
   var pemail = document.getElementById("p-email").value;
   checkemail(pemail);
});
// personal details onchange ends here

// on change functions ends here

function checkService(pBookService) {
   if (pBookService == "" || pBookService == null) {
      document.getElementById("error1").innerText = "Please select a service";
   } else {
      document.getElementById("error1").innerText = "";
   }
}

function checkfirstName(pfirstName) {
   if (pfirstName == "" || pfirstName == null) {
      document.getElementById("error2").innerText = "Please fill the field";
   } else {
      document.getElementById("error2").innerText = "";
   }
}
function checklastname(plastname) {
   if (plastname == "" || plastname == null) {
      document.getElementById("error3").innerText = "Please fill the field";
   } else {
      document.getElementById("error3").innerText = "";
   }
}
function checkmobilenum(pmobilenum) {
   if (pmobilenum == "" || pmobilenum == null) {
      document.getElementById("error4").innerText = "Please fill a valid number";
   } else {
      document.getElementById("error4").innerText = "";
      if ($.trim(telInput.val())) {
         if (telInput.intlTelInput("isValidNumber")) {
            document.getElementById("error4").innerText = "";

            var getCode = telInput.intlTelInput("getSelectedCountryData").dialCode;
            // alert(getCode);
            console.log("country code is", getCode);
         } else {
            document.getElementById("error4").innerText = "Please fill a valid number";
         }
      }
   }
}
function checkemiratesId(pemiratesId) {
   // const emiratesIDregex = '/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/';
   if (pemiratesId == "" || pemiratesId == null) {
      document.getElementById("error5").innerText = "Please fill the field";
   } else {
      document.getElementById("error5").innerText = "";
   }
   if (
      pemiratesId.match(/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/) ||
      pemiratesId.match(/^784[0-9]{4}[0-9]{7}[0-9]{1}$/)
   ) {
      document.getElementById("error5").innerText = "";
   } else {
      document.getElementById("error5").innerText = "Please fill a valid emirates Id";
   }
}
function checkdob(pdob) {
   if (pdob == "" || pdob == null) {
      document.getElementById("error6").innerText = "Please fill Date of Birth";
   } else {
      document.getElementById("error6").innerText = "";
   }
}
function checkgender(pgender) {
   if (pgender == "" || pgender == null) {
      document.getElementById("error7").innerText = "Please select gender";
   } else {
      document.getElementById("error7").innerText = "";
   }
}

function checkemail(pemail) {
   if (pemail == "" || pemail == null) {
      document.getElementById("error8").innerText = "Please fill a valid email";
   } else {
      document.getElementById("error8").innerText = "";
   }
   if (
      pemail.match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
   ) {
      document.getElementById("error8").innerText = "";
   } else {
      document.getElementById("error8").innerText = "Please fill a valid email";
   }
}

// location section functions begins here
function checkLocation(plocation) {
   if (plocation == "" || plocation == null) {
      document.getElementById("error9").innerText = "Please fill the field";
   } else {
      document.getElementById("error9").innerText = "";
   }
}
function checkVillaNo(pvillaNo) {
   if (pvillaNo == "" || pvillaNo == null) {
      document.getElementById("error10").innerText = "Please fill the field";
   } else {
      document.getElementById("error10").innerText = "";
   }
}
function checkBuildingNo(pbuildingNo) {
   if (pbuildingNo == "" || pbuildingNo == null) {
      document.getElementById("error11").innerText = "Please fill the field";
   } else {
      document.getElementById("error11").innerText = "";
   }
}
function checkStreetNo(pstreetNo) {
   if (pstreetNo == "" || pstreetNo == null) {
      document.getElementById("error12").innerText = "Please fill the field";
   } else {
      document.getElementById("error12").innerText = "";
   }
}

function checkSelectEmirate(pselectEmirate) {
   if (pselectEmirate == "" || pselectEmirate == null) {
      document.getElementById("error13").innerText = "Please fill the field";
   } else {
      document.getElementById("error13").innerText = "";
   }
}

// location section functions ends here

// booking section begins here
function checkAppointmentDate(pAppointmentDate) {
   if (pAppointmentDate == "" || pAppointmentDate == null) {
      document.getElementById("error16").innerText = "Please select a date ";
   } else {
      document.getElementById("error16").innerText = "";
   }
}
function checkTimeslotselected(pTimeslotselected) {
   if (pTimeslotselected == "" || pTimeslotselected == null) {
      document.getElementById("error17").innerText = "Please select a time slot";
   } else {
      document.getElementById("error17").innerText = "";
   }
}
// booking section ends here

// members validation on blur begins  here
// function validateField(field) {
//     // alert(field);
//     let value = field.value;
//     if (value == "" || value === null){
//         // $(field).siblings(".errorMsg").children(".ip-error").innerText = "must enter";
//         // alert($(field).siblings(".errorMsg").children(".ip-error"));
//         document.getElementById("error14").innerText = "Please fill the field";

//     } else {
//         document.getElementById("error14").innerText = "";

//         // $(field).siblings(".errorMsg").children(".ip-error").innerText = "";
//     }
// }
// members validation on blur ends here
$(".phone-format").keypress(function (e) {
   if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
   }
   var curchr = this.value.length;
   var curval = $(this).val();
   if (curchr == 3) {
      $(this).val(curval + "-");
   } else if (curchr == 8) {
      $(this).val(curval + "-");
   } else if (curchr == 16) {
      $(this).val(curval + "-");
   } else if (curchr == 1) {
      $(this).attr("maxlength", "18");
   }
});
