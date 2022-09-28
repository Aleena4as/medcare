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
