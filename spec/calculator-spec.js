import {GalacticCalculator} from './../js/galactic-calculator.js';
import moment from 'moment';

describe('GalacticCalculator', function() {

  //instantiate a calculator to use in tests
  let spaceCalc = new GalacticCalculator();

  it('should successfully import and use moment.js functions', function(){
      console.log(moment.now());
      expect(moment.now());
  });

  it('should convert an age in years to an age in seconds', function() {
    // 10 years * 365 days * 24 hours * 60 minutes * 60 seconds
    const tenYears = ((10 * 365)+2) * 24 * 60 * 60;
    console.log(`Here comes a test statement:`);
    console.log(moment.duration(10, 'years').asSeconds() + "seconds - from Moment.js");
    console.log( (((10 * 365)+2) * 24 * 60) + "seconds");
    expect(moment.duration(10, 'years').asSeconds()).toEqual(tenYears);
    expect(spaceCalc.yearsToSeconds(10)).toEqual(tenYears);
  });

});
