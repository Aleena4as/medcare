var memberlimit = 0;
var allowedlimit = 4;
$(document).on("click", ".addmember-btn", function () {
  
   var getlatestMemberCount = $(".members-panel").children().length;
   console.log(`getlatestMemberCount after deletion`, getlatestMemberCount);
   memberlimit = getlatestMemberCount;
   memberlimit++;
   if (memberlimit == allowedlimit) {
      $(".membersExceededError").append(
         "<p>Note: This booking is limited to four members only</p>"
      );
      // alert("You have Limited to have " + memberlimit + "members only");
   } else {
      $(".membersExceededError").empty();
      $(".members-panel").append(
         '<div class="memberDetails" id="memberContent' +memberlimit +'">\
          <div class="row">\
              <div class="col-12">\
                  <div class="section-title">\
                      <p class="memberCount">Member ' + memberlimit +'</p>\
                      <p id="deleteMember' +
            memberlimit +
            '" class="secondlink famDelete" onclick="removeMember(this.id);">Remove</p>\
                  </div>\
              </div>\
              <div class="col-12 col-md-6">\
                  <div class="form-group">\
                      <label>First Name</label>\
                      <input type="text" class="form-control famFirstName" name="m-firstname' +
            memberlimit +
            '" id="m-firstname' +
            memberlimit +
            '" onchange="memberFirstName(this.id);">\
                  </div>\
              </div>\
              <div class="col-12 col-md-6">\
                  <div class="form-group">\
                      <label>Last Name</label>\
                      <input type="text" class="form-control famLastName" name="m-lastname' +
            memberlimit +
            '" id="m-lastname' +
            memberlimit +
            '" onchange="memberLastName(this.id);">\
                  </div>\
              </div>\
              <div class="col-12 col-md-6">\
                  <div class="form-group inputIconPlacer">\
                      <label>Date of birth</label>\
                      <input type="text" class="form-control datefixer famDob"\
                          placeholder="dd-mm-yyyy" name="m-dob' +
            memberlimit +
            '" id="m-dob' +
            memberlimit +
            '" onchange="memberDob(this.id);">\
                  </div>\
              </div>\
              <div class="col-12 col-md-3">\
                  <div class="hs-select">\
                      <div class="form-group">\
                          <label>Gender</label>\
                          <select class="form-control famGender" name="m-gender' +
            memberlimit +
            '" id="m-gender' +
            memberlimit +
            '" onchange="memberGender(this.id);">\
                            <option value="">Please Select</option>\
                            <option value="Male">Male</option>\
                            <option value="Female">Female</option>\
                          </select>\
                      </div>\
                  </div>\
              </div>\
          </div>\
      </div>'
       );
       



      // append preview section for members here begins


      $(".previewMemberPanel").append(
          '<div class="previewDetails" id="previewContents' +memberlimit +'">\
         <div class="card-header-member collapsed" data-toggle="collapse" href="#famMember' +
            memberlimit +
            '">\
    <a class="card-title-member">\
        Member ' +
            memberlimit +
            '\
    </a>\
</div>\
<div id="famMember' +
            memberlimit +
            '" class="card-body-member collapse" data-parent="#accordion">\
    <div class="row">\
        <div class="col-12 col-md-6">\
            <div class="form-group">\
                <label>First Name</label>\
                <input type="text" class="form-control c-Fname" name="m-confirm-FirstName' +
            memberlimit +
            '" id="m-confirm-FirstName' +
            memberlimit +
            '" readonly>\
            </div>\
        </div>\
        <div class="col-12 col-md-6">\
            <div class="form-group">\
                <label>Last Name</label>\
                <input type="text" class="form-control c-Lname" name="m-confirm-LastName' +
            memberlimit +
            '" id="m-confirm-LastName' +
            memberlimit +
            '" readonly>\
            </div>\
        </div>\
        <div class="col-12 col-md-6">\
            <div class="form-group">\
                <label>Date of Birth</label>\
                <input type="text" class="form-control c-Dob" name="m-confirm-dob' +
            memberlimit +
            '" id="m-confirm-dob' +
            memberlimit +
            '" readonly>\
            </div>\
        </div>\
        <div class="col-12 col-md-6">\
            <div class="form-group">\
                <label>Gender</label>\
                <input type="text" class="form-control c-Gender" name="m-confirm-gender' +
            memberlimit +
            '" id="m-confirm-gender' +
            memberlimit +
            '" readonly>\
            </div>\
        </div>\
    </div>\
    </div>\
</div>'
      );

      // append preview section for members here ends
       
       
       // re-initialize the datepicker for dynamic contents begins here
       $(".datefixer").datepicker({
        dateFormat: "d MM yy",
          duration: "medium",
          dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      });
     
      $('.changeDate').click(function () {
          $('#appointmentDate').datepicker('show');
      });
// re-initialize the datepicker for dynamic contents ends here
       
       
       
   }
});
