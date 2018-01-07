import moment from 'moment';

export class GalacticCalculator{
  constructor(dateOfBirth){
    this.planets = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
    this.dateOfBirth = dateOfBirth;
    this.ageSeconds = this.secBetween(this.dateOfBirth);

    // this.ageMercury = planetAge(this.planets[0]);
    // this.ageVenus = planetAge(this.planets[1]);
    // this.ageMars = planetAge(this.planets[2]);
    // this.ageJupiter = planetAge(this.planets[3]);
    this.planets.forEach((planet)=> {
      this["age"+planet] = this.planetAge(planet);
    });
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

  planetAge(planet, dateOfBirth){
    const birthDate = dateOfBirth || this.dateOfBirth;
    const earthAgeSec = Math.abs(moment(birthDate).diff(moment(), 'seconds'));
    let planetAge;
    switch (planet) {
      case 'Mercury':
        planetAge = moment.duration(earthAgeSec, 'seconds').asYears() / 0.24;
        break;

      case 'Venus':
        planetAge = moment.duration(earthAgeSec, 'seconds').asYears() / 0.62;
        break;

      case 'Mars':
        planetAge = moment.duration(earthAgeSec, 'seconds').asYears() / 1.88;
        break;

      case 'Jupiter':
        planetAge = moment.duration(earthAgeSec, 'seconds').asYears() / 11.86;
        break;

      default:
        planetAge = -1;
        break;
    }

    return planetAge;
  };

  //returns the markup to render data
  render(){
    let output = `<h1>Galactic Data Dump!</h1>`;
    output += this.renderDataBox('Age in Seconds: ', this.ageSeconds);
    this.planets.forEach((planet)=>{
      output += this.renderDataBox(`Age in ${planet} Years: `, this['age'+planet]);
    });
    return output;
  }

  renderDataBox(label, data){
    return `
      <div class="data-box">
        <div class="label">${label}</div>
        <div class="data">${data}</div>
      </div>
      `;
  }
}
