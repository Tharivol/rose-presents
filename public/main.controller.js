angular.module("rose", ["ngRoute"])
	.controller("roseController", Rosefunction)
	.config(infoRoute);

	infoRoute.$inject = ['$routeProvider']

function infoRoute($routeProvider) {

    // console.log('Router loaded')

    // using the routeProvider...
    $routeProvider
    // chain on a route which will define the html template to insert in the ng-view when that route is hit
    .when('/picksong',{
        templateUrl: '/templates/picksong.html'
    })
    .when('/servicepackage', {
        templateUrl: '/templates/servicepackage.html'
    })
    // you can also add a controller using the 'controller as' syntax which will govern that html template
    .when('/whattowear', {
        templateUrl: '/templates/whattowear.html'
        
    })
    .when('/whoisrose', {
        templateUrl: '/templates/whoisrose.html'
    })
    // and like an 'if' statement, this is our 'else' - where to go if a bogus route is entered.
    .otherwise( { redirectTo:'/'} )
}


	function Rosefunction()	{
		var rCtl= this;

		rCtl.greeting = "this is working"

		rCtl.showmap = true;

		rCtl.gmap= function()	{
			googlemapthing()
			var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center); 
			// rCtl.showmap= !rCtl.showmap
		}

	};



// **********This is the modal for the map***********
 
// Get the modal

var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if(modal){

	googlemapthing = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// // When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}
// **********This is the modal for the map***********
// 





