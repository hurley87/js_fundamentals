// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function(children, name, location, title) {
	console.log("you will be a " + children + " in " + name + ", and married to " + location + " with " + title + " kids");
}

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function(birthYear, currentYear) {
	var age1 = currentYear - birthYear;
	var age2 = age1 - 1;
	console.log("You are either " + age1 + " or " + age2 );
}

calculateAge(2014, 1987);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function(age, amount) {
		var MAX_AGE = 100;
		var total = Math.round((MAX_AGE - age)*amount);

		return total;
}

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

var calcCircumfrence = function(radius) {
		var circumference = 2 * Math.PI * radius;
		return "The circumference is " + circumference;
}

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var calcArea = function(radius) {
	return "the area is " + Math.PI * radius * radius;
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

var celsiusToFahrenheit = function(temp) {
	return temp*9/5 + 32;
}

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

var fahrenheitToCelsius = function(temp) {
	 return (temp-32)*5/9;
}

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

