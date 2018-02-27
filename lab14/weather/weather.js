$(document).ready(function(){
	var wx_data = [
	  {
	    day: "fri",    
	    hi: 82,    
	    lo: 55  
		},  
	    {    
	    day: "sat",    
	    hi: 75,    
	    lo: 52  
		},  
	    {    
	    day: "sun",    
	    hi: 69,    
	    lo: 52  
		},  
		{    
		day: "mon",    
		hi: 69,    
		lo: 48  
		},  
		{    
		day: "tue",    
		hi: 68,    
		lo: 51  
		}
	];

	var his = [82, 75, 69, 69, 68];
	var los = [55, 52, 52, 48, 51];

	function getAvg(total, num){
		return total + num;
	}

	hiAvg = his.reduce(getAvg)/5;
	loAvg = los.reduce(getAvg)/5;
	document.getElementById('demo').innerHTML = "<h3> avg hi is " + hiAvg + "<br>avg lo is " + loAvg + "</h3>";
	document.getElementById('hislos').innerHTML = "<h3> his for this week are " + his.toString() + " <br> los for this week are " 
		+ los.toString() + "</h3>";

	var avgs = [];
	for(var i = 0; i < 5; i++){
		avgs[i] = (his[i]+los[i])/2;
		if(i === 0){
			document.getElementById('fri').innerHTML = "<h3> fri avg: " + avgs[i] + "</h3>";
		}
		else if(i === 1){
			document.getElementById('sat').innerHTML = "<h3> sat avg: " + avgs[i] + "</h3>";
		}
		else if(i === 2){
			document.getElementById('sun').innerHTML = "<h3> sun avg: " + avgs[i] + "</h3>";
		}
		else if(i === 3){
			document.getElementById('mon').innerHTML = "<h3> mon avg: " + avgs[i] + "</h3>";
		}
		else {
			document.getElementById('tue').innerHTML = "<h3> tue avg: " + avgs[i] + "</h3>";
		}

	}




 });