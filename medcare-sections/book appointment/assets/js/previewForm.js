function updateFullName() {
    $("#p-confirm-name").val($("#p-firstName").val()+ ' ' + $("input[name='p-lastname']").val());
    // console.log($("#p-confirm-name").val());
}
$("#p-firstName, #p-lastname").on('input', updateFullName);

function updateparentMobile() {
   console.log(getCode);
    $("#p-confirm-mobile").val($("#p-countryCode").val()+$("#p-mobilenum").val());
    // console.log($("#p-confirm-mobile").val());
}
$("#p-mobilenum").on('input', updateparentMobile);
$("#next").on('click', updateparentMobile);


function updateparentEmail() {
    $("#p-confirm-email").val($("#p-email").val());
    // console.log($("#p-confirm-email").val());
}
$("#p-email").on('input', updateparentEmail);

function updateAddress() {
    $("#p-confirm-address").val($("#p-villaNo").val()+ ', ' + $("#p-buildingNo").val()+ ', ' + $("#p-streetNo").val()+ ', ' + $("#p-SelectEmirate").val());
    // console.log($("#p-confirm-address").val());
}
$("#p-villaNo, #p-buildingNo, #p-streetNo, #p-SelectEmirate").on('input', updateAddress);

function updateparentService() {
    $("#p-confirm-service").val($("#p-BookService").val());
    // console.log($("#p-confirm-service").val());
}
$("#p-BookService").on('input', updateparentService); 

function updateparentAppointment() {
    $("#p-confirm-timeSlot").val($("#appointmentDate").val());
    // console.log($("#p-confirm-timeSlot").val());
}
$("#appointmentDate").on('change', updateparentAppointment);


$('input[name=timeslotselected]').on('change', function () {
    $("#p-confirm-timeSlot").val($("#appointmentDate").val() + ', ' + $(this).filter(':checked').val());
    // alert($(this).filter(':checked').val());
});