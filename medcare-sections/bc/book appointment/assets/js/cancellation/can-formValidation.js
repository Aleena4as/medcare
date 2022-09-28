$("#can-proceed").click(function () {
    var canStatus = false;
    // event.preventDefault();
    let checkboxes = document.querySelectorAll('.cancellationDetails input[type=checkbox]:checked');
    if (checkboxes.length == 0) {
        document.getElementById("error-can2").innerText = "Please select an appointment to cancel";
        canStatus = false;
        return false;
    }
    else {
        document.getElementById("error-can2").innerText = "";
        canStatus = true;
        return true;
    }
    
});

