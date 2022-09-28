// JQuery UI Datepicker Config

$(document).ready(function () {

   // set available dates here and set a color for that ends here
   // var availableDates = ["19-5-2021", "14-5-2021", "15-5-2021"];

   // function available(date) {
   //    dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
   //    if ($.inArray(dmy, availableDates) != -1) {
   //       return [true, "", "Available"];
   //    }
   //    else {
   //       return [false, "", "unAvailable"];
   //    }
   // }
   // set available dates here and set a color for that ends here

   $(".datefixer").datepicker({
      dateFormat: "d MM yy",
      duration: "medium",
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      minDate: "0",
      maxDate: new Date(new Date().setMonth(new Date().getMonth() + 2))
      // firstDay: 1,
      // beforeShowDay: available,
   });
   $(".datefixerDoB").datepicker({
      dateFormat: "d MM yy",
      duration: "medium",
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      changeYear: true,
      yearRange: "1920:2021",
      maxDate: new Date(),
   });

   $(".changeDate").click(function () {
      $("#appointmentDate").datepicker("show");
   });
});


