$(document).ready(function () {

$("#dateRanger")
   .dateRangePicker({
      inline: true,
      format: "DD-MM-YYYY",
      container: "#dateRangeContainer",
      alwaysOpen: false,
      singleMonth: true,
     showTopbar: false,
      
      setValue: function (s) {
         $(this).val("12-01-2020");
      },
   })
   .bind("datepicker-change", (e, data) => {
      $("#dateRangerInput").val(data.value);
   });
});