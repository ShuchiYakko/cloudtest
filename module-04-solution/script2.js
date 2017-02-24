(function (window) {
	
		var byeSpeaker={};
		
		var greeting = "Good Bye";

		byeSpeaker.sayGoodBye=function (names) {

			console.log(greeting+" "+names+"!");
		}

		window.byeSpeaker=byeSpeaker;

})(window);


