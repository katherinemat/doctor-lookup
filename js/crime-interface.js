//ask about file routes. is single period a traverse?
var Crime = require('./../js/crime.js').crimeModule;

$(document).ready(function() {
  var currentCrimeObject = new Crime();
  $('#get-crimes').click(function() {
    var type = $("#crime option:selected").text();
    var district = $('#district option:selected').text();
    var firstDate = $("#first-date").val();
    var secondDate = $("#second-date").val();
    console.log(firstDate);
    console.log(secondDate);
    currentCrimeObject.getCrime(firstDate, secondDate, type, district);
  });
});
