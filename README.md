# Galactic Calculator

#### A web app to calculate a user's age based on the solar years of non-Earth planets, January 5th, 2018

#### By **Luke Bertram**

## Description

Aside from an exercise in project architecture and dev-environment setup, this app imports and utilizes Moment.js to help calculate the user's age on planets with shorter or longer years than earth.

## Setup/Installation Requirements

For greatest ease of use, simply visit [this website](http://lukebertram.github.io/galactic-age) in your web browser of choice. However, if you're feeling frisky, you can also use the following steps to clone the project from [GitHub](http://github.com) and run it locally on your own computer:

 * Visit the github page for [this project](http://github.com/lukebertram/galactic-age)
 * Click the "Clone or Download" button and copy the address found there. Alternatively, just copy this address to your clipboard: https://github.com/lukebertram/galactic-age.git
 * Access your system's command line interface (_ie Terminal, for MacOS Users_) and navigate to your home directory by entering the following magical spell into your command line (note: do not enter the '$' character):
 >`$cd ~`

 * Next, cast the following, more advanced spell:  
 >`$git clone https://github.com/lukebertram/galactic-age.git`

 * If you don't already have npm installed on your machine, visit the [npm website](https://docs.npmjs.com/getting-started/installing-node) for instructions on how to get it.

 * Move into the project directory with `$cd galactic-age`

 * Install npm dependencies with `$npm install`

 * Install bower dependencies with `$bower install`

 * Build the project with `$gulp build`

 * Finally, open the project in your system's default web browser with the following final incantation:
 >`$open galactic-age/index.html`


### Specified Behaviors
The requested behaviors of this project are listed below. Each behavior was written as a Jasmine unit test before being implemented in actual JavaScript code in the class description files.

1. Age in years => Age in seconds

2. Date1, Date2 => Difference in seconds (Age in seconds)

3. Age in Earth years => age in Mercury years (0.24 Earth years)

4. Age in Earth years => age in Venus years (0.62 Earth years)

5. Age in Earth years => age in Mars years (1.88 Earth years)

6. Age in Earth years => age in Jupiter years (11.86 Earth years)

7. Date of Birth, Country of origin, Salary => Life expectancy?

8. Life expectancy, planet => Life expectancy in specified planet years

9. If a user has already surpassed their expected life span, return a message stating this as well as the amount of time by which they have surpassed their life expectancy? (this spec just seems like a mean way of reminding the elderly that they should be dead on other worlds as well as this one)


## Known Bugs


## Support and Contact Details

Flag me down in class, or send me a tweetbook on facestagram if you have any troubles.


## Technologies Used

Moment.js was used extensively in calculating and converting dates and ages/durations.

Dev environment built with npm, gulp, jasmine, karma, babel and more. For a complete list of modules used in this project, check the package.json and bower.json manifest files.

### License

MIT License

Copyright (c) 2018 **Luke Bertram**
