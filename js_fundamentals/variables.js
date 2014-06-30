// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var X = 5;
var Y = "hurley";
var Z = "canada";
var N = "ceo";

alert("You will be a" + X + " in " + Y + ", and married to " + Z + " with "+ N + " kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = new Date().getFullYear();
var yourBirthYear = prompt("Your Birth year");
var age1 = currentYear - yourBirthYear;
var age2 = age1 - 1;

alert("They are either " + age1 + " or " + age2 );


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 26;
var maxAge = 100;
var perDayAmount = 2;
var totalSnacks = (maxAge - myAge)*2;
alert("You will need " + totalSnacks + " to last you until the ripe old age of " + maxAge)


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
var PI = Math.PI
var circumference = 2*PI*5;
alert("The circumference is " + circumference);
var area = 2 * PI * radius * radius;

alert("The area is " + area);



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var cel = 27;
var f = cel*9/5 + 32;
alert(cel +"C is " +f"F");
var fer = 0;
c = (fer-32)*5/9;
alert(fer +"F is " +cel"C");


