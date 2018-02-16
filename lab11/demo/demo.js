$(document).ready(function(){
	var userName = prompt("Your username is?");
	var pwd;

	if(userName != null){
		pwd = prompt("Enter password.");
		if(pwd != null){
			console.log("Your username is: " + userName);
			console.log("Your password is: " + pwd);
			document.getElementById("username").textContent = "Your username is: " + userName;
			document.getElementById("password").textContent = "Your password is: " + pwd;
		}
		else{
			console.log("Improper input. Refresh to retry.");
				}
			}
});