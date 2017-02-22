var names = ["shuchi","yakko","computer","joey"];

var temp = function (names) {
	for (var i = 0; i < names.length; i++) {
	
	if(names[i].startsWith('j')) {
		console.log ("Hello " +  names[i]) ;	
	}	else{
	
	    console.log("goodbye " + names[i]) ;
	}
  } 
}
