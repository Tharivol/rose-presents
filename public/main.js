var map;

	var markers =[];

	function initMap()	{
		map = new google.maps.Map(document.getElementById('map'), {center: {lat: 40.000, lng: -105.200}, zoom: 9});
		

	var locations = [
	 // {title: 'park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}}, 
	 // {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
	{title: 'NW Corner', location: {lat: 40.290, lng: -105.430}},
	{title: 'NE corner', location: {lat: 40.290, lng: -105.036}},
	{title: 'SE Corner', location: {lat: 39.740, lng: -105.036}},
	{title: 'SW Corner', location: {lat: 39.740, lng: -105.430}},
	
	];
	var area=[
	{lat: 40.290, lng: -105.430},
	{lat: 40.290, lng: -105.036},
	{lat: 39.740, lng: -105.036},
	{lat: 39.740, lng: -105.430},
	{lat: 40.290, lng: -105.430}
	];

	var mapshade= new google.maps.Polygon({
		path: area,
		geodesic: true,
		strokeColor: "#FF7659",
		strokeOpacity: 1.0,
		strokeWeight: 2,
		fillColor: "#FF7659",
		fillOpacity: 0.25
	})

	mapshade.setMap(map)

	var largeInfowindow = new google.maps.InfoWindow();

	var bounds = new google.maps.LatLngBounds();
	// The following group uses the location array to create an array of markers on init.

	for (var i = 0; i < locations.length; i++)	{
	// get the position from the location array.
		var position = locations[i].location;
		var title = locations[i].title;
	// create a marker per location, and put into the markers array
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});
		// Push the marker to our array of markers.
		markers.push(marker);
		

		//Extend the boundaries of the map for each marker
		// bounds.extend(marker.position);
		// Took out bounds andmap.fitBounds and it started working again 
		//Create an onlick event to open an infowindow at each marker.
		

		marker.addListener('click', function()	{
			populateInfoWindow(this, largeInfowindow);
		});
	}
		// map.fitBounds(bounds);
		// Took out bounds andmap.fitBounds and it started working again 
}
		function populateInfoWindow(marker, infowindow)	{
			//check to make sure the infowindow is not already opened on this marker'
			if(infowindow.marker != marker)	{
				infowindow.marker = marker;
				infowindow.setContent('<div>' + marker.title + ',/div>');
				infowindow.open(map, marker);
				//make sure the marker property is cleared if window is closed
				infowindow.addListener('closeclick', function()	{
					infowindow.setMarker(null);
				});
			}
		}
















