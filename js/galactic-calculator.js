import moment from 'moment';

export class GalacticCalculator{
  constructor(){

  }

  // accepts amount of time in years (integer) and returns conversion to seconds
  yearsToSeconds(integer){
    const output = moment.duration(integer, 'years').asSeconds();
    console.log(output)
    return output;
  }
}
