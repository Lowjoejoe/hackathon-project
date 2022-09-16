var map = L.map('map').setView([47.2528, -122.444], 13);   // creates a map and sets its view to chosen georgraphical coordinates in decimal degrees and zoom level

//Creating a tile layer usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer.

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '© OpenStreetMap'
}).addTo(map);

// adding markers to your map 
var marker = L.marker([47.235, -122.4]).addTo(map);

//Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:
var circle = L.circle([47.25, -122.44], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Adding a polygon 
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// ADDING a popup using the bindPopup method attaches popup to specified HTML 
circle.bindPopup("current search area");

// adding popups as layers when you need something more than attaching a popup to an object):
var popup = L.popup()
    .setLatLng([47.23, -122.45])
    .setContent("I am a standalone popup.")
    .openOn(map); // use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.

//Dealing with Events 

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


//SETTING ZOOMs 
// Other ways of setting the zoom are:

// setView(center, zoom), which also sets the map center
// flyTo(center, zoom), like setView but with a smooth animation
// zoomIn() / zoomIn(delta), zooms in delta zoom levels, 1 by default
// zoomOut() / zoomOut(delta), zooms out delta zoom levels, 1 by default
// setZoomAround(fixedPoint, zoom), sets the zoom level while keeping a point fixed (what scrollwheel zooming does)
// fitBounds(bounds), automatically calculates the zoom to fit a rectangular area on the map

// LAYERS CONTROL 

//two types of layers: (1) base layers that are mutually exclusive (only one can be visible on your map at a time), e.g. tile layers, and (2) overlays, which are all the other stuff you put over the base layers. 


