var apiKey = require('./../.env').apiKey;
var Doctors = require('./../js/doctors.js').doctorsModule;

Doctors = function(){
};

Doctors.prototype.getDoctors = function(medicalIssue, searchLimit, searchRadius, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=47.6074%2C-122.3357%2C' + searchRadius + '&user_location=47.6074%2C-122.313&skip=0&limit=' + searchLimit + '&user_key=' + apiKey)
  .then(function(response) {
    for(var i = 0; i < response.data.length; i++) {
      //create new Doctor
      var doctor = new Doctor(response.data[i].profile.first_name, response.data[i].profile.last_name, response.data[i].profile.title);

      for(var j = 0; j < response.data[i].practices.length; j++) {
          if(doctor.address.indexOf(response.data[i].practices[j].phones[0].number) === -1) {
            doctor.addAddress(response.data[i].practices[j].visit_address.street, response.data[i].practices[j].visit_address.street2, response.data[i].practices[j].visit_address.city, response.data[i].practices[j].visit_address.state, response.data[i].practices[j].visit_address.zip, response.data[i].practices[j].phones[0].number, response.data[i].practices[j].phones[0].type);
          }
      }
      displayFunction(doctor.firstName, doctor.lastName, doctor.title, doctor.address);
    }
  })
  .fail(function(error) {
    $('#results').append('<p>There are no doctors found that match your search</p>');
  });
};

exports.doctorsModule = Doctors;
