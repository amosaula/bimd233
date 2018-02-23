$(document).ready(function(){
	    var radius = prompt("Please enter a radius value between 1 and 15.");
		const pi = Math.PI;   
		var area = pi * radius * radius;
		var circumference = 2 * pi * radius;
		var diameter = 2 * radius;
		var geometries = [area, circumference, diameter];
		
		console.log(geometries.toString());
		for(var i = 0; i < 3; i++){
			if(i == 0){
				document.getElementById("area").textContent = "Total area: " + geometries[i];
			}
			else if(i == 1){
				document.getElementById("circumference").textContent = " Circumference: " + geometries[i];
			}
			else{
				document.getElementById("diameter").textContent = "Diameter: " + geometries[i];
			}
		}
	return geometries;
	}
);