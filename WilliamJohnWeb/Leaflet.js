<!DOCTYPE html>
<html>
<head>
	<title>Rail Line Location Data Map</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet/1.5.1/leaflet.css" />
	<style>
		#map {
			height: 100vh;
			width: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	</style>
</head>
<body>
	<div id="map"></div>
	<script src="https://cdn.jsdelivr.net/leaflet/1.5.1/leaflet.js"></script>
	<script>
		var map = L.map('map').setView([37.7749, -122.4194], 10); // set the initial view of the map to San Francisco, CA

		// add the tile layer to the map
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
			id: 'mapbox.streets'
		}).addTo(map);

		// load the rail line location data
		var railLineData = [
			{
				"name": "Line A",
				"coordinates": [
					[37.7749, -122.4194],
					[37.7849, -122.3994],
					[37.7949, -122.3794]
				]
			},
			{
				"name": "Line B",
				"coordinates": [
					[37.7649, -122.4294],
					[37.7749, -122.4094],
					[37.7849, -122.3894]
				]
			}
		];

		// add the rail line markers to the map
		for (var i = 0; i < railLineData.length; i++) {
			var railLine = railLineData[i];
			var marker = L.polyline(railLine.coordinates).addTo(map);
			marker.bindPopup(railLine.name);
		}

		// add an event listener to the map to capture user clicks and log the location data
		map.on('click', function(e) {
			console.log("Location data: " + e.latlng);
			alert("Location data: " + e.latlng);
		});
	</script>
</body>
</html>