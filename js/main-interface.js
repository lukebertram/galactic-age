import {GalacticCalculator} from './../js/galactic-calculator.js';

$(document).ready(function(){
  $('#age-submission').submit(function(event){

    event.preventDefault();
    var dob = $('#user-age').val();
    console.log("form value: " + dob)
  });
});
