function Util () {}

Util.formatDate = function(value){
	var date = new Date(value); 
	var month = date.getMonth();
	var day = date.getDate();
	var year = date.getFullYear();
	return day+'/'+month+'/'+year;
};