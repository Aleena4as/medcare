$(document).ready(function () {
   $(".emiratesId-format").keypress(function (e) {
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
});

// checking input field accepts only numbers begins
function isNumber(evt) {
   evt = evt ? evt : window.event;
   var charCode = evt.which ? evt.which : evt.keyCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
   }
   return true;
}
// checking input field accepts only numbers ends

$(document).ready(function () {
   // clicking the month button again to open the month view in full height calender
   $("#openEvents").on("click", function (event) {
      $(".fc-month-button ").click();
   });
});
