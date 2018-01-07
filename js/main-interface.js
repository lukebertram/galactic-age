import {GalacticCalculator} from './../js/galactic-calculator.js';

$(document).ready(function(){
  $('#age-submission').submit(function(event){
    event.preventDefault();
    $('#output-display').empty();

    const dob = $('#user-age').val();
    //render data if user-age is not blank
    if (dob){
      const calc = new GalacticCalculator(dob);
      $('#output-display').append(calc.render());
    };
  });
});
