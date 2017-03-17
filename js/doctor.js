var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=47.6074%2C-122.3357%2C10&user_location=47.6074%2C-122.313&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    console.log(response);
  })
  .fail(function(error) {
    console.log(fail);
  });
};

exports.doctorModule = Doctor;
