import {GalacticCalculator} from './../js/galactic-calculator.js';
import moment from 'moment';

describe('GalacticCalculator', function() {

  //instantiate a calculator to use in tests
  const spaceCalc = new GalacticCalculator("1985-10-26");

  it('should have a default birth date of "1985-10-26"', function(){
      expect(spaceCalc.dateOfBirth).toEqual("1985-10-26");
  });

  it('should convert an age in years to an age in seconds', function() {
    // 10 years * 365 days (+2 for leapyears?)* 24 hours * 60 minutes * 60 seconds
    const tenYears = ((10 * 365)+2) * 24 * 60 * 60;
    expect(moment.duration(10, 'years').asSeconds()).toEqual(tenYears);
    expect(spaceCalc.yearsToSeconds(10)).toEqual(tenYears);
  });

  it('should accept 2 dates and return the diff between them in seconds', function(){
    const dateA = "1985-10-25";
    const dateB = "1985-10-26";
    const daySec = 60 * 60 * 24; //number of seconds in 24hrs
    // const diff = Math.abs(dateA.diff(dateB, 'seconds'));
    const diff = spaceCalc.secBetween(dateA, dateB);
    expect(diff).toEqual(daySec);
    //now write the test using the calculator object
  });

  it('should accept 1 date and return the diff between it and now in seconds', function(){
    const dateA = "1984-02-10";
    const diffNow = Math.abs(moment(dateA).diff(moment(), 'seconds'));
    expect(spaceCalc.secBetween(dateA)).toBeCloseTo(diffNow, -1);
  });

  it('should match numbers that differ only in ones decimal place', function(){
    expect(10).toBeCloseTo(25, -2);
    expect(10).not.toBeCloseTo(25, -1);
  });

  it('should convert a duration in earth years to a duration in Mercury years', function() {
    const birthDate = "1985-10-26";
    const planet = 'Mercury';
    const age = Math.abs(moment(birthDate).diff(moment(), 'seconds'));
    const ageInYears = moment.duration(age, 'seconds').asYears();
    // console.log("Age: "+ age);
    // console.log("age through moment: " +
    //             moment.duration(age, 'seconds').asYears());
    const mercAge = moment.duration(Math.floor(age * 0.24), 'seconds').asYears();
    expect(mercAge).toBeCloseTo(ageInYears * 0.24, 5);
    // console.log("Mercury age in years (conv. as seconds): " + mercAge);
    // console.log("Mercury age in years (conv. as years): " + ageInYears * 0.24);
    // console.log("calculated age in years: " + spaceCalc.planetAge());
    expect(spaceCalc.planetAge(planet)).toBeCloseTo(mercAge);
  });

  it('should convert a duration in earth years to a duration in Venus years', function() {

    const birthDate = '1985-10-26';
    const planet = 'Venus';
    const age = Math.abs(moment(birthDate).diff(moment(), 'seconds'));
    const venusAge = moment.duration(Math.floor(age * 0.62), 'seconds').asYears();
    expect(spaceCalc.planetAge(planet)).toBeCloseTo(venusAge);
  });

  it('should convert a duration in earth years to a duration in Mars years', function() {
    const birthDate = '1985-10-26';
    const planet = 'Mars';
    const age = Math.abs(moment(birthDate).diff(moment(), 'seconds'));
    const marsAge = moment.duration(Math.floor(age * 1.88), 'seconds').asYears();
    expect(spaceCalc.planetAge(planet)).toBeCloseTo(marsAge);
  });

  it('should convert a duration in earth years to a duration in Jupiter years', function() {
    const birthDate = '1985-10-26';
    const planet = 'Jupiter';
    const age = Math.abs(moment(birthDate).diff(moment(), 'seconds'));
    const jupiterAge = moment.duration(Math.floor(age * 11.86), 'seconds').asYears();
    expect(spaceCalc.planetAge(planet)).toBeCloseTo(jupiterAge);
  });

  it('should return life expectancy (duration in years) based on date of birth', function() {
    expect();
  });

  it('should return life expectancy in years of the selected planet', function() {
    expect();
  });

});
