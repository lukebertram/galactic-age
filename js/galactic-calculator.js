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
    const earthAgeSec = Math.abs(moment(birthDate).diff(moment(), 'seconds'));
    let planetAge;
    switch (planet) {
      case 'Mercury':
        planetAge = moment.duration(earthAgeSec, 'seconds').asYears() * 0.24;
        break;

      case 'Venus':
        planetAge = "venus";
        break;

      case 'Mars':
        planetAge = "mars";
        break;

      case 'Jupiter':
        planetAge = "jupiter";
        break;

      default:
        planetAge = -1;
        break;
    }

    return planetAge;
  };
}
