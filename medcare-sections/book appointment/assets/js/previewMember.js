// preview member Service begins here
function memberService(id) {
    var serviceOrder = id.slice(-1);
//    console.log("service id is", serviceOrder);

   var getService = document.getElementById(id).value;
    $("#m-confirm-service"+serviceOrder).val(getService);
//    console.log("service selected is", $("#m-confirm-service"+serviceOrder).val());
}
// preview member Service ends here

// preview member first name begins here

function memberFirstName(id) {
    var firstOrder = id.slice(-1);
   var getfirstName = document.getElementById(id).value;
     $("#m-confirm-FirstName"+firstOrder).val(getfirstName);
}

// preview member first name ends here
// preview member last name begins here

function memberLastName(id) {
    var lastOrder = id.slice(-1);
   var getLastName = document.getElementById(id).value;
    $("#m-confirm-LastName"+lastOrder).val(getLastName);

}
// preview member last name ends here
// preview member DOB name begins here

function memberDob(id) {
    var dobOrder = id.slice(-1);
   var getDob = document.getElementById(id).value;
    $("#m-confirm-dob"+dobOrder).val(getDob);
}
// preview member DOB name ends here
// preview member gender ends here

function memberGender(id) {
   // alert(document.getElementById(id).value);
    var genderOrder = id.slice(-1);
   console.log("gender m is", genderOrder);
   var getGender = document.getElementById(id).value;
   $("#m-confirm-gender"+genderOrder).val(getGender);
   console.log("gender m is", getGender);
}
// preview member gender name ends here
