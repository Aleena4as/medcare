function openHorizontalNav(evt, HoriName) {
    var i, horiTabcontent, horiTablinks;
    horiTabcontent = document.getElementsByClassName("horiTabcontent");
    for (i = 0; i < horiTabcontent.length; i++) {
      horiTabcontent[i].style.display = "none";
    }
    horiTablinks = document.getElementsByClassName("horiTablinks");
    for (i = 0; i < horiTablinks.length; i++) {
      horiTablinks[i].className = horiTablinks[i].className.replace(" active", "");
    }
    document.getElementById(HoriName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function () {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("horidefaultOpen").click();
 });