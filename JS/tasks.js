function check(){
	alert("JavaScript is active");	
}

var userid = 0;
var users = [];

function user(name,age,city) = {
	this.name = name;
	this.age = age;
	this.city = city;
	
	document.write(userid,this.name,this.age,this.city);
	userid++;
}
function autouser() = {
	this.name = prompt("Név: ");
	this.age = prompt("Életkor: ");
	this.city = prompt("Város: ");
	
	document.write(userid,this.name,this.age,this.city);
	userid++;
}

// users[userid] = new user("Zoli",28,"Debrecen");

// users[userid] = autouser();