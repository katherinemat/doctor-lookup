var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#get-doctors').click(function() {
    var medicalIssue = $("#medical-issue option:selected").text();
    currentDoctorObject.getDoctor(medicalIssue);
  });
});
