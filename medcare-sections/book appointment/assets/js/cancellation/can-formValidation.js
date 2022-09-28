$(document).ready(function () {
   $("#can-proceed").click(function () {
      var canStatus = false;
      // event.preventDefault();
      let checkboxes = document.querySelectorAll(".cancellationDetails input[type=checkbox]:checked");
      if (checkboxes.length == 0) {
         document.getElementById("error-can2").innerText = "Please select an appointment to cancel";
         canStatus = false;
         return false;
      } else {
         document.getElementById("error-can2").innerText = "";
         canStatus = true;
         return true;
      }
   });

   function cancheckemiratesId(canpemiratesId) {
      // const emiratesIDregex = '/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/';
      if (canpemiratesId == "" || canpemiratesId == null) {
         document.getElementById("error-can1b").innerText = "Please fill the field";
      } else {
         document.getElementById("error-can1b").innerText = "";
      }
      if (
         canpemiratesId.match(/^784-[0-9]{4}-[0-9]{7}-[0-9]{1}$/) ||
         canpemiratesId.match(/^784[0-9]{4}[0-9]{7}[0-9]{1}$/)
      ) {
         document.getElementById("error-can1b").innerText = "";
      } else {
         document.getElementById("error-can1b").innerText = "Please fill a valid emirates Id";
      }
   }
   function cancheckmobilenum(canpmobilenum) {
      if (canpmobilenum == "" || canpmobilenum == null) {
         document.getElementById("error-can1a").innerText = "Please fill a valid number";
      } else {
         document.getElementById("error-can1a").innerText = "";
      }
   }

   $("#can-next").click(function () {
      if ($(".hs-OTPcanVerification").is(":visible")) {
         var canpemiratesId = document.getElementById("canotp-emiratesId").value;
         cancheckemiratesId(canpemiratesId);
         var canpmobilenum = document.getElementById("canotp-mobilenum").value;
         cancheckmobilenum(canpmobilenum);
      }
   });
   $("#canotp-emiratesId").change(function () {
      var canpemiratesId = document.getElementById("canotp-emiratesId").value;
      cancheckemiratesId(canpemiratesId);
   });
   $("#canotp-mobilenum").change(function () {
      var canpmobilenum = document.getElementById("canotp-mobilenum").value;
      cancheckmobilenum(canpmobilenum);
   });
   $("#canotp-emiratesId").blur(function () {
      var canpemiratesId = document.getElementById("canotp-emiratesId").value;
      cancheckemiratesId(canpemiratesId);
   });
   $("#canotp-mobilenum").blur(function () {
      var canpmobilenum = document.getElementById("canotp-mobilenum").value;
      cancheckmobilenum(canpmobilenum);
   });
});
