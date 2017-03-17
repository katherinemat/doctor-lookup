var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#get-doctors').click(function() {
    var medicalIssue = $("#medical-issue").val();
    currentDoctorObject.getDoctor(medicalIssue);
  });
});
