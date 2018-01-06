import moment from 'moment';

export class GalacticCalculator{
  constructor(skin){
    this.skin = skin || 'hot pink';
  };

  // accepts amount of time in years (integer) and returns converted to seconds
  yearsToSeconds(integer){
    const output = moment.duration(integer, 'years').asSeconds();
    console.log(output)
    return output;
  };

  // accept two dates (as properly formatted strings) and calculate the number of seconds between them
  // or
  // accept a single date and return the time between that date and now in seconds
  secBetween(dateA, dateB){
    const momentA = moment(dateA);
    const momentB = moment(dateB) || moment();
    return Math.abs(momentA.diff(momentB, 'seconds'));
  };

  planetAge(birthDate, planet){
    const dob = moment(birthDate);
    const now = moment();

    switch (planet) {
      case 'Mercury':

        break;
      case 'Venus':

        break;
      case 'Mars':

        break;
      case 'Jupiter':

        break;
      default:
      return
    };
  };
}
