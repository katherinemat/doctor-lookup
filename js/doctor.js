var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctor = function(medicalIssue, searchLimit) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' +  medicalIssue + '&location=47.6074%2C-122.3357%2C1&user_location=47.6074%2C-122.313&skip=0&limit=' + searchLimit + '&user_key=' + apiKey)
  .then(function(response) {
    for(var i = 0; i < response.data.length; i++) {
      $('#results').append('<p>' + response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + ', ' + response.data[i].profile.title + '</p><ul id="doctor' + i + '"></ul>');
      for(var j = 0; j < response.data[i].practices.length; j++) {
        if (response.data[i].practices[j].visit_address.street2 !== undefined) {
          $('#doctor' + i).append('<li>' + response.data[i].practices[j].visit_address.street + ', ' + response.data[i].practices[j].visit_address.street2 + ', ' + response.data[i].practices[j].visit_address.city + ', ' + response.data[i].practices[j].visit_address.state + ', ' + response.data[i].practices[j].visit_address.zip + '<br>phone: ' + response.data[i].practices[j].phones[0].number + ', type: ' + response.data[i].practices[j].phones[0].type + '</li>')
        } else {
          $('#doctor' + i).append('<li>' + response.data[i].practices[j].visit_address.street + ', ' + response.data[i].practices[j].visit_address.city + ', ' + response.data[i].practices[j].visit_address.state + ', ' + response.data[i].practices[j].visit_address.zip + '<br>phone: ' + response.data[i].practices[j].phones[0].number + ', type: ' + response.data[i].practices[j].phones[0].type + '</li>')

        }

      }
    }
  })
  .fail(function(error) {
    $('#results').append('<p>There are no doctors found that match your search</p>');
  });
};

exports.doctorModule = Doctor;
