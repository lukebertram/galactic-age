import {GalacticCalculator} from './../js/galactic-calculator.js';

$(document).ready(function(){
  $('#age-submission').submit(function(event){
    event.preventDefault();
    $('#output-display').empty();

    const dob = $('#user-age').val();
    const calc = new GalacticCalculator(dob);

    $('#output-display').append(calc.render());
  });
});
