var typeValue = "";
var inputValue = "";
var appntUrl = "";

$(".nav-item").on("click", function () {
   $(".listSearch").empty();
});

$("#searchLocation").on("input", function () {
   type = "location";
   inputValue = document.getElementById("searchLocation").value;
   createURL(type, inputValue);
});
$("#searchSpeciality").on("input", function () {
   type = "speciality";
   inputValue = document.getElementById("searchSpeciality").value;
   createURL(type, inputValue);
});
$("#searchDoctor").on("input", function () {
   type = "doctor";
   inputValue = document.getElementById("searchDoctor").value;
   createURL(type, inputValue);
});

const createURL = (type, inputValue) => {
   var appntUrl =
      "https://bluelogiccdnstaging.com/homeinsurance.php?" + "type=" + type + "&" + "name=" + inputValue;
   fetchData(appntUrl);
};

const fetchData = (appntUrl) => {
   axios(appntUrl, {
      method: "GET",
   }).then((response) => {
      let data = response.data;
      let dataLength = data.length;
      if (response.status === 200) {
         // console.log("All datas", response.data);
         $(".listSearch").empty();
         data.forEach(function (data) {
            $(".listSearch").append(
               '<a href="' + data.url + '"><button class="btn">' + data.name + "</button></a>"
            );
         });
      }

      if (dataLength === 0 || dataLength == null || dataLength == undefined) {
         $(".listSearch").empty();
            $(".listSearch").append('<p class="invalidDataMsg"> No Data Found</p>');
      }
   });
   // .catch((error) => {
   //    if (error.response.status === 401) {
   //       // window.location.href = "/login";
   //       // console.log("Successfully Logged Out");
   //    }
   //    console.log(error.response.status);
   // });
};
