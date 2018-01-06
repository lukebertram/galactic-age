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

  // accept two date strings and calculate the number of seconds between them
  secBetween(dateA, dateB){
    const momentA = moment(dateA);
    const momentB = moment(dateB);
    return Math.abs(momentA.diff(momentB, 'seconds'));
  };
}
