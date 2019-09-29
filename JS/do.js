function menu(num) {
	var n = num;
	var x = document.getElementById("menu"+n);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		} else { 
		x.className = x.className.replace(" w3-show", "");
	}
}
function button(num) {
	var n = num;
	var x = document.getElementById("btn"+n);
	if (x.className.indexOf("w3-red") == -1) {
		x.className += " w3-red";
		} else { 
		x.className = x.className.replace(" w3-red", "");
	}
}
function buttonReact(n1,n2) {
	var n = n1;
	var x = document.getElementById("btn"+n1);
	var y = document.getElementById("menu"+n2);
	
	if (x.className.indexOf("w3-red") == -1) {
		x.className += " w3-red";
		} else { 
		x.className = x.className.replace(" w3-red", "");
	}
	
	if (n1<=3 && y.className.indexOf("w3-show") == -1)
	{
		y.className += " w3-show";
		} else { 
		y.className = y.className.replace(" w3-show", "");
	}
}
function buttonSmartReact(n1,n2) {
	var x = document.getElementById("btn"+n1);
	var y = document.getElementById("menu"+n2);
	
	if (x.className.indexOf("w3-red") == -1) {
		x.className += " w3-red";
		} else { 
		x.className = x.className.replace(" w3-red", "");
	}
	
	if (n1<=3 && y.className.indexOf("w3-show") == -1)
	{
		menu(n2);
		} else { 
		y.className = y.className.replace(" w3-show", "");
	}
}
function progress(per) {
	var x = document.getElementById("progress");
	var from = x.style.width, to = per+"%";
	if (x.style.width == from) {
		x.style.width = x.style.width = to;
		} else if (x.style.width == to) {
		x.style.width = x.style.width = from;
	}
}
function reset(num) {
	progress(0);
	var x;
	
	for (var i=1;i<=num;i++){
		x = document.getElementById("btn"+i);
		if (x.className.indexOf("w3-red") == -1) {
		} else x.className = x.className.replace(" w3-red", "");
	}
	//delay(500);
	menu(1);
	menu(2);
}
