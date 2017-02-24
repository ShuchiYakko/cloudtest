(function (window) {
	
	var helloSpeaker={}
	
	var greeting="Hello ";

	helloSpeaker.sayHello=function (names) {

	console.log(greeting+names+"!");

	}
	window.helloSpeaker=helloSpeaker;

})(window);


