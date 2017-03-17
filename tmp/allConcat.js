var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#get-doctors').click(function() {
    var medicalIssue = $("#medical-issue").val();
    $('#medical-issue').val("");

    var searchLimit = $('#search-limit').val();
    $('#search-limit').val("");
    
    currentDoctorObject.getDoctor(medicalIssue, searchLimit);
  });
});
