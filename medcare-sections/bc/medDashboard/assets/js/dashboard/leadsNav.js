function switchLeads(evt, leadsName) {
    var i, leadsTabcontent, leadsTablinks;
    leadsTabcontent = document.getElementsByClassName("leadsTabcontent");
    for (i = 0; i < leadsTabcontent.length; i++) {
      leadsTabcontent[i].style.display = "none";
    }
    leadsTablinks = document.getElementsByClassName("leadsTablinks");
    for (i = 0; i < leadsTablinks.length; i++) {
      leadsTablinks[i].className = leadsTablinks[i].className.replace(" active", "");
    }
    document.getElementById(leadsName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function () {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("leadsdefaultOpen").click();
 });