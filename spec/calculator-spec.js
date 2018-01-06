import {GalacticCalculator} from './../js/galactic-calculator.js';
import moment from 'moment';

describe('GalacticCalculator', function() {

  //instantiate a calculator to use in tests
  const spaceCalc = new GalacticCalculator();

  // it('should successfully import and use moment.js functions', function(){
  //     expect(moment.now());
  // });

  it('should convert an age in years to an age in seconds', function() {
    // 10 years * 365 days (+2 for leapyears?)* 24 hours * 60 minutes * 60 seconds
    const tenYears = ((10 * 365)+2) * 24 * 60 * 60;
    expect(moment.duration(10, 'years').asSeconds()).toEqual(tenYears);
    expect(spaceCalc.yearsToSeconds(10)).toEqual(tenYears);
  });

  it('should accept 2 dates and return the diff between them in seconds', function(){
    const dateA = moment("1985-10-26 01:21");
    const dateB = moment("1985-10-26 01:22");
    const diff = Math.abs(dateA.diff(dateB, 'seconds'));
    expect(diff).toEqual(60);
    //now write the test using the calculator object
  });

  it('should')

});
