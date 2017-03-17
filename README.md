# Doctor Lookup

#### _Lookup a doctor based on medical issue using BetterDoctors API_

#### By _**Katherine Matthews**_

## Description

_This website loads with a form where users can enter any medical issue. The medical issue is used to parse through BetterDoctors API to return a list of doctors and the doctors' contact information that might help the user with the specified medical issue. https://katherinemat.github.io/doctor-lookup/_

## Setup/Installation Requirements

* Clone repo off of github to local machine
* get an API key from https://developer.betterdoctor.com/
* create a document in the home directory called .env and in it, type the following:
exports.apiKey = "YOUR KEY GOES HERE";
* inside the terminal, while inside the project directory, run the following commands
_(requires node and bower to be installed globally on computer)_
      $ npm install
      $ bower install
      $ gulp build
      $ gulp serve
* gulp will run a local server that opens up this project's webpage

## Specifications

1. console.log results from API call
- Get results to list out in ul on homepage
- Include certain contact information with each doctor
- allow user to search by partial words; input: cold; output: all doctors that have colds associated with their practice (not going to do because API doesn't support this)
- user can specify radius of search. default is 100. can lower

## Known Bugs

Even though bower_components folder is included in the .gitignore file, the whole folder is pushed up to github. Other files and folders listed in .gitignore file act as expected. Why? I also had trouble figuring out how the location parameters worked in the BetterDoctors API. They seemed to return results that weren't in the exact area I wanted. I could not get bootstrap to link with my files.

## Technologies Used

* _Node_
* _Gulp_
* _Bower_
* _SCSS_
* _Javascript_
* _JQuery_
* _HTML_
* _CSS_

### License

*This project is licensed under the MIT license.*

Copyright (c) 2017 **_Katherine Matthews_**
