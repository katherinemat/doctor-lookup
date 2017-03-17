var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctor = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=47.6074%2C-122.3357%2C10&user_location=47.6074%2C-122.313&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response) {
    for(var i = 0; i < response.data.length; i++) {
      $('#results').append('<p>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + ', ' + response.data[i].profile.title + '</p><ul id="doctor' + i + '"></ul>');
      for(var j = 0; j < response.data[i].practices.length; j++) {
        if (response.data[i].practices[j].visit_address.street2 !== undefined) {
          console.log(response.data[i].practices[j]);
          $('#doctor' + i).append('<li>' + response.data[i].practices[j].visit_address.street + ', ' + response.data[i].practices[j].visit_address.street2 + ', ' + response.data[i].practices[j].visit_address.city + ', ' + response.data[i].practices[j].visit_address.state + ', ' + response.data[i].practices[j].visit_address.zip + '</li>')
        } else {
          $('#doctor' + i).append('<li>' + response.data[i].practices[j].visit_address.street + ', ' + response.data[i].practices[j].visit_address.city + ', ' + response.data[i].practices[j].visit_address.state + ', ' + response.data[i].practices[j].visit_address.zip + '</li>')

        }

      }
    }
  })
  .fail(function(error) {
    console.log(fail);
  });
};

exports.doctorModule = Doctor;
