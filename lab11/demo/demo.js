
	var userName = prompt("Your username is?");
	var pwd;

	if(userName != null){
		pwd = prompt("Enter password.");
		if(pwd != null){
			console.log("Your username is: " + userName);
			console.log("Your password is: " + pwd);
			document.getElementById("username").textContent = "Hello!";
		}
		else{
			console.log("Improper input. Refresh to retry.");
		}
	}


/** var elUser = document.getElementById("user");
		elUser.textContent = 'Your username is: ' + userName;

		var elPassword = document.getElementById("password");
		elPassword.textContent = 'Your password is: ' + pwd; **/