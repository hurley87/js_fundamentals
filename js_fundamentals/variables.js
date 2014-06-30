// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var person = {};

person.name = prompt("What's your name?");
person.partner = prompt("What's your partner's name?");
person.children = parseInt(prompt("How many children you got?"), 0);
person.job = prompt("Where you work?");

alert(person);

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var
now = new Date(),
year = now.getYear(),
birthYear = parseInt(prompt('What year were you born?'), 0);
possibleAges = [year - birthYear, year - birthYear - 1];
console.log('You re either ' + possibleAges[0] + ' or ' + possibleAges[1]);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var
age = 16,
maxAge = 85,
perDay = 4,
required = (maxAge - age) * 365 * perDay;
alert('You will need ' + required + ' to last until the ripe old age of ' + maxAge);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var
theRadius = parseFloat(prompt('What is the radius of your awesome circle?'));
alert('The circumference is ' + (2 * Math.PI * theRadius));
alert('The area is ' + (Math.PI * Math.pow(theRadius, 2)));



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function convertTemperature(degrees, params) {
  if (params.from === 'f' && params.to === 'c') {
    return (degrees - 32) * 5.0 / 9;
  } else if (params.from === 'c' && params.to === 'f') {
    return degrees * 9 / 5.0 + 32;
  }
}

function cToF(degrees) {
  return convertTemperature(degrees, { from: 'c', to: 'f'});
}

function fToC(degrees) {
  return convertTemperature(degrees, { from: 'f', to: 'c'});
}

var
inCelsius = parseFloat(prompt('How hot is it (in celsius)?'));
alert('NOPE. It is actually ' + cToF(inCelsius));
inFahrenheit = parseFloat(prompt('How hot is it (in fahrenheit)?'));
alert('NOPE. It is actually ' + fToC(inFahrenheit));

