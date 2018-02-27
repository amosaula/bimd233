function Flight( airline, number, origin, destination, dep_time, arrival_time, arrival_gate){
	this.airline = airline;
	this.number = number;
	this.origin = origin;
	this.destination = destination;
	this.dep_time = dep_time;
	this.arrival_time = arrival_time;
	this.arrival_gate = arrival_gate;
}
	flight.getDuration = function(){
		return this.arrival_time - this.dep_time;
	}

var flight1 = new 
