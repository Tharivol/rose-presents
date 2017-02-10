angular.module("rose", [])
	.controller("roseController", Rosefunction)

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
// **********This is the modal for the map***********
// 