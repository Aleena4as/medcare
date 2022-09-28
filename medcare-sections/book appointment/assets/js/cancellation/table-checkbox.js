$(document).ready(function () {
   $(function () {
      //Assign Click event to Button.
      $("#can-proceed").click(function () {
         var serviceToCancel = [];
         var datetoCancel = [];

         $("#cancelApp-Table input[type=checkbox]:checked")
            .closest("tr")
            .find("input")
            .each(function () {
               if ($(this).attr("class") == "datetoCancel") datetoCancel.push($(this).val());
               if ($(this).attr("class") == "serviceToCancel") serviceToCancel.push($(this).val());
            });
         // console.log("Cancellation Date is", datetoCancel);
         // console.log("cancellation service  is", serviceToCancel);

         // return false;
      });
   });
});
