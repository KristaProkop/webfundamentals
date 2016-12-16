var HOUR = 8;
var MINUTE = 30;
var PERIOD = "AM";

if (PERIOD == "AM")
	var DAYTIME = " in the morning"
else 
	var DAYTIME = " in the evening"

if (MINUTE < 30)
	console.log("It's just after " + HOUR + DAYTIME)
else if (MINUTE > 30)
	console.log("It's almost " + (HOUR+1) + DAYTIME)
else console.log("It's half past " + HOUR + DAYTIME)