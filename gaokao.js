function NewDate(str) {
	var date = new Date(Date.parse(str.replace(/-/g,   "/")));
	return date;
}

function showsecdtime() {
	var today = NewDate(initime);
	var birthDay = new Date();
	var timeold = today.getTime() - birthDay.getTime();
	var secdtimeold = timeold/1000
	var secondsold = Math.floor(secdtimeold);
	var msPerDay = 24*60*60*1000;

	var msPerYear = 365*24*60*60*1000;
	var e_Yearsold = timeold/msPerYear;
	var Yearsold = Math.floor(e_Yearsold);
	var e_daysold = (Yearsold-e_Yearsold)*-365
	var daysold = Math.floor(e_daysold);
	var e_hrsold = (daysold-e_daysold)*-24;
	var hrsold = numadd0(Math.floor(e_hrsold));
	var e_minsold = (hrsold-e_hrsold)*-60;
	var minsold = numadd0(Math.floor((hrsold-e_hrsold)*-60));
	//alert(minsold);
	var seconds = numadd0(Math.floor((minsold-e_minsold)*-60)).toString();

	var str = secdtimeFormat;

	var replacements = {
		"{y}": Yearsold,
		"{d}": daysold,
		"{h}": hrsold,
		"{i}": minsold,
		"{s}": seconds
	};
	var regex = /\{y\}|\{d\}|\{h\}|\{i\}|\{s\}/g;//new RegExp(properties(replacements).map(RegExp.escape).join("|"), "g");
	//console.log(regex);
	str = str.replace(regex, function($0) { return replacements[$0]; });



	document.getElementById("showsecdtime").innerHTML = str;
	setTimeout(showsecdtime, 1000);
}
function numadd0(num) {
	if(num < 10) {
		num = '0'+num;
	}
	return num;
}


// Array.prototype.each = function(trans) {
//
// 	for (var i=0; i<this.length; i++)
// 		this[i] = trans(this[i], i, this);
//
// 	return this;
// };
// Array.prototype.map = function(trans) {
// 	return [].concat(this).each(trans);
// };
RegExp.escape = function(str) {
	return new String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
function properties(obj) {
	var props = [];
	for (var p in obj) props.push(p);
	return props;
}
