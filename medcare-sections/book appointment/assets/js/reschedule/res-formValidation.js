$(document).ready(function () {

var resStatus = true;
var resSubmit = true;

$("#res-proceed").click(function () {
   resStatus = true;
   event.preventDefault();
   checkResAppointmentDate();
   checkResTimeslotselected();

   if (resStatus) {
      document.getElementById("rescheduling-form").submit();
   }
});

// reschedule booking onchange begins here

$("#res-appointmentDate").change(function () {
   checkResAppointmentDate();
});
$("#res-timeslotselected").change(function () {
   checkResTimeslotselected();
});
// reschedule booking onchange enss here

function checkResAppointmentDate() {
   var ResAppointmentDate = document.getElementById("res-appointmentDate").value;
   if (ResAppointmentDate == "" || ResAppointmentDate == null) {
      document.getElementById("error-res2").innerText = "Please select a date ";
      resStatus = false;
   } else {
      document.getElementById("error-res2").innerText = "";
   }
}
function checkResTimeslotselected() {
   var ResTimeslotselected = document.querySelector('input[name="res-timeslotselected"]:checked').value;
   if (ResTimeslotselected == "" || ResTimeslotselected == null) {
      document.getElementById("error-res3").innerText = "Please select a time slot";
      resStatus = false;
   } else {
      document.getElementById("error-res3").innerText = "";
   }
}

function rescheckemiratesId(respemiratesId) {
   // const emiratesIDregex = '/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/';
   if (respemiratesId == "" || respemiratesId == null) {
      document.getElementById("error-res1b").innerText = "Please fill the field";
   } else {
      document.getElementById("error-res1b").innerText = "";
   }
   if (
      respemiratesId.match(/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/) ||
      respemiratesId.match(/^784[0-9]{4}[0-9]{7}[0-9]{1}$/)
   ) {
      document.getElementById("error-res1b").innerText = "";
   } else {
      document.getElementById("error-res1b").innerText = "Please fill a valid emirates Id";
   }
}
function rescheckmobilenum(respmobilenum) {
   if (respmobilenum == "" || respmobilenum == null) {
      document.getElementById("error-res1a").innerText = "Please fill a valid number";
   } else {
      document.getElementById("error-res1a").innerText = "";
   }
}

$("#res-next").click(function () {
   if ($(".hs-OTPresVerification").is(":visible")) {
      var respemiratesId = document.getElementById("resotp-emiratesId").value;
      rescheckemiratesId(respemiratesId);
      var respmobilenum = document.getElementById("resotp-mobilenum").value;
      rescheckmobilenum(respmobilenum);
   }
});
$("#resotp-emiratesId").change(function () {
   var respemiratesId = document.getElementById("resotp-emiratesId").value;
   rescheckemiratesId(respemiratesId);
});
$("#resotp-mobilenum").change(function () {
   var respmobilenum = document.getElementById("resotp-mobilenum").value;
   rescheckmobilenum(respmobilenum);
});
$("#resotp-emiratesId").blur(function () {
   var respemiratesId = document.getElementById("resotp-emiratesId").value;
   rescheckemiratesId(respemiratesId);
});
$("#resotp-mobilenum").blur(function () {
   var respmobilenum = document.getElementById("resotp-mobilenum").value;
   rescheckmobilenum(respmobilenum);
});
});
