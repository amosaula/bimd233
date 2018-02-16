$(document).ready(function(){
	var carName = prompt("What kind of car do you have?");
	var date = prompt("What year is your car?");
	var miles = prompt("How many miles have you driven?");
	var deduction = miles * .57;

	console.log("You have a " + date + " " + carName + " .");
	console.log("You qualify for $" + deduction + " in deductions.");
	document.getElementById("carName").textContent = "You have a " + date + " " + carName + ".";
	document.getElementById("deduction").textContent = "You qualify for $" + deduction + " in deductions.";
});