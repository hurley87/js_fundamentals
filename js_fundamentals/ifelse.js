// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
var greaterNum = function(n1, n2) {
	var greatest = 0;
	if(n1 > n2) {
		greatest = n1;
	} else if (n1 =< n2) {
		greatest =  n2;
	} else {
		alert("The numbers are equal.").
	}
	alert("The greater number of " + n1 + " and " + n2 + " is " + greatest);
}

greaterNum(5,6);
greaterNum(6,7);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
var helloWorld = function(code) {
	var retort = "";
	switch(code) {
		case "es":
			retort = "Olla";
		break;
		case "de":
			retort = "heckya";
		break;
		default:
			retort = "hello";
	}
	return retort;
}

helloWorld("en");
helloWorld("de");
helloWorld("es");



// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(num) {
	var grade = "";
	switch (num) {
		case 1:
			grade = "A";
		break;
		case 2:
			grade = "B";
		break;
		case 3:
			grade = "C";
		break;
		case 4:
			grade = "D";
		break;
		case 5:
			grade = "F";
		break;
		default: 
			grade = "A";
	}

	return grade;
}

assignGrade(3);
assignGrade(1);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var pluralize = function(noun, num) {
	if(num != 1) {
		noun = noun + "s";
	} else if (noun == "goose") {
		noun = "geese";
	}

	console.log(num + " " + noun);
}

