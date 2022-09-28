function removeMember(id) {

    var idToRemove = id.slice(-1);
    DeletePreviewMember(idToRemove);

    console.log("Id to remove is", idToRemove); 
    $("#memberContent"+idToRemove).remove();

// find and reorder every name and index of the members 
    $('.members-panel').find('.memberDetails').each(function (e, i, index) {
    // console.log('removal index', ($(this).index()+1));
        
    $(this).attr('id', 'memberContent' + ($(this).index() + 1));
        
    $(this).find('.memberCount').text('Member ' + ($(this).index() + 1));
    $(this).find('.famDelete').attr('id', 'deleteMember' + ($(this).index() + 1));
        

    // re-arranging name and id of inputs begins here
        
    $(this).find('.famService').attr('name', 'm-bookService' + ($(this).index() + 1));
    $(this).find('.famService').attr('id','m-bookService'+ ($(this).index()+1));
    
    $(this).find('.famFirstName').attr('name', 'm-firstname' + ($(this).index() + 1));
    $(this).find('.famFirstName').attr('id','m-firstname'+ ($(this).index()+1));
    
    $(this).find('.famLastName').attr('name', 'm-lastname' + ($(this).index() + 1));
    $(this).find('.famLastName').attr('id', 'm-lastname' + ($(this).index() + 1));
    
    $(this).find('.famDob').attr('name', 'm-dob' + ($(this).index() + 1));
    $(this).find('.famDob').attr('id', 'm-dob' + ($(this).index() + 1));
    
    $(this).find('.famGender').attr('name', 'm-gender' + ($(this).index() + 1));
    $(this).find('.famGender').attr('id', 'm-gender' + ($(this).index() + 1));
    
    // re-arranging name and id of inputs ends here
        // remove error message whenever the member limit is not 4 after deletion
        if ($(".members-panel").children().length <= 4) {
            $(".membersExceededError").empty();
        }
        
});

}

function DeletePreviewMember(idToRemove) {
    // alert(pid);
    $("#previewContents"+idToRemove).remove();

    $('.previewMemberPanel').find('.previewDetails').each(function (e, i, index) {
    
        $(this).attr('id', 'previewContents' + ($(this).index() + 1));

        $(this).find('.card-header-member').attr('href', '#famMember' + ($(this).index() + 1));
        $(this).find('.card-title-member').text('Member ' + ($(this).index() + 1));
        $(this).find('.card-body-member').attr('id', 'famMember' + ($(this).index() + 1));
        
        // re-order the indexes of input after deletion begins here
       
        $(this).find('.c-Fname').attr('name', 'm-confirm-FirstName' + ($(this).index() + 1));
        $(this).find('.c-Fname').attr('id', 'm-confirm-FirstName' + ($(this).index() + 1));

        $(this).find('.c-Lname').attr('name', 'm-confirm-LastName' + ($(this).index() + 1));
        $(this).find('.c-Lname').attr('id', 'm-confirm-LastName' + ($(this).index() + 1));

        $(this).find('.c-Dob').attr('name', 'm-confirm-dob' + ($(this).index() + 1));
        $(this).find('.c-Dob').attr('id', 'm-confirm-dob' + ($(this).index() + 1));

        $(this).find('.c-Gender ').attr('name', 'm-confirm-gender' + ($(this).index() + 1));
        $(this).find('.c-Gender ').attr('id', 'm-confirm-gender' + ($(this).index() + 1));

        $(this).find('.c-Service').attr('name', 'm-confirm-service' + ($(this).index() + 1));
        $(this).find('.c-Service').attr('id', 'm-confirm-service' + ($(this).index() + 1));

        // re-order the indexes of input after deletion ends here

    });
    
} 
