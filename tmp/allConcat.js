var Doctor = require('./../js/doctor.js').doctorModule;
var Doctors = require('./../js/doctors.js').doctorsModule;

var displayDoctors = function(firstName, lastName, title, addresses) {
  $('#results').append('<p>' + firstName + ' ' + lastName + ', ' + title + '</p><ul id="' + firstName + lastName + '"></ul>');
  for (var i = 0; i < addresses.length; i++) {
    $('#' + firstName + lastName).append('<li>' + addresses[i] + '</li>');
  }
};

$(document).ready(function() {
  var currentDoctorObject = new Doctors();
  $('#get-doctors').click(function() {
    var medicalIssue = $("#medical-issue").val();
    $('#medical-issue').val("");

    var searchLimit = $('#search-limit').val();
    $('#search-limit').val("");

    var searchRadius = $('#search-radius').val();
    $('#search-radius').val("");

    currentDoctorObject.getDoctors(medicalIssue, searchLimit, searchRadius, displayDoctors);
  });
});
