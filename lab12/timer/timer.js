$(document).ready(function(){
	var counter = 0;
	setInterval(function() {
	counter = counter + 1;
	document.getElementById('timer').textContent = counter;}, 3000);
	});
