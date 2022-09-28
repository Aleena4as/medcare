// JQuery UI Datepicker Config

$(document).ready ( function(){
   $(".datefixer").datepicker({
      dateFormat: "d MM yy",
      duration: "medium",
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   });

   $(".changeDate").click(function () {
      $("#appointmentDate").datepicker("show");
   });
});
