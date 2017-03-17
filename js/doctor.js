var apiKey = require('./../.env').apiKey;

Doctor = function(firstName, lastName, title) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.address = [];
};

Doctor.prototype.addAddress = function(street, street2, city, state, zip, phoneNumber, phoneType) {
  var wholeAddress;

  if (street2 === undefined) {
    wholeAddress = street + ", " + city + ", " + state + ", " + zip + "<br>phone: " + phoneNumber + ", type: " + phoneType;
  } else {
    wholeAddress = street + ", " + street2 + ", " + city + ", " + state + ", " + zip + "<br>phone: " + phoneNumber + ", type: " + phoneType;
  }

  this.address.push(wholeAddress);
}

exports.doctorModule = Doctor;
