$(document).ready(function(){

	var state = 0;
	var done = false;
	
	

	while(done === false || input !== "exit" || input !== "quit"){
	var input = prompt("Enter command.");
	switch(state){
		case 0:
			document.getElementById('idle').innerHTML = "idle";
			console.log('idle');
			break;
		case 1:
			document.getElementById('s1').innerHTML = "s1";
			console.log('s1');
			break;
		case 2:
			document.getElementById('s2').innerHTML = "s2";
			console.log('s2');
			break;
		case 3:
			document.getElementById('s3').innerHTML = "s3";
			console.log('s3');
			break;
		case 4:
			document.getElementById('s4').innerHTML = "s4";
			console.log('s4');
			done = true;
			return done;
			break;
		default:
			document.getElementById('s1').innerHTML = "exiting program";
			console.log('exit');
			done = true;
			return done;
			break;
	}
	state++;
}

});

