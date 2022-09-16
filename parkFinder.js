//Making icon to mark parks 
var treeMarker = L.icon({
    iconUrl: "treeMarker.png",
    shaodowUrl: "treeMarker.png", 
    iconSize:     [20, 40], // size of the icon
    shadowSize:   [20, 40], // size of the shadow
    iconAnchor:   [0,0], // point of the icon which will correspond to marker's location
    shadowAnchor: [0,0],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
}); 

// adding hyperlinks

var tacomaLink = "https://www.cityoftacoma.org" 

 
 //create cities 
 var tacoma = L.marker([47.245081, -122.437649]).bindPopup(`<h2>This is Tacoma, WA!</h2><a href=${tacomaLink} <h2>City of Tacoma</h2></a>`);
 var universityPlace = L.marker([47.236613, -122.551975]).bindPopup("This is University Place, WA! https://www.cityofup.com/");
 var lakewood = L.marker([47.171566, -122.518501]).bindPopup("This is Lakewood, WA! https://cityoflakewood.us/");
 var dupont = L.marker([47.098752, -122.638493]).bindPopup("This is DuPont, WA! https://www.dupontwa.gov/");
 var steilacoom = L.marker([47.170194, -122.59665]).bindPopup("This is Steilacoom, WA! https://townofsteilacoom.org/");
 
 //Creating a LayerGroup class for cities 
 
 var cities = L.layerGroup([tacoma, universityPlace, lakewood, dupont, steilacoom]);

//create parks in Tacoma 

var mckinelyPark = L.marker([47.235012, -122.421899], {icon: treeMarker}).bindPopup("This is Mckinely Park");
var wrightPark = L.marker([47.259686, -122.449064], {icon: treeMarker}).bindPopup("This is Wright Park");
var rosaFranklinPark = L.marker([47.24722, -122.4805], {icon: treeMarker}).bindPopup("This is Senator Rosa Franklin Park");
var pointDefinancePark = L.marker([47.309958, -122.53232], {icon: treeMarker}).bindPopup("This is Point Defiance Park. Park amenities include: Expansive Trail system, public gardens, off-leash dog park, Point Definace Aquarium and Zoo, Fort Nisqually Living History Museum and so much more. https://www.metroparkstacoma.org/place/point-defiance-park/ ");

var chamberBayPark = L.marker([47.205094, -122.570171], {icon: treeMarker}).bindPopup("This is Chambers Creek Regional Park. This 930-acre site includes over two miles of saltwater shoreline, two and a half miles of urban creek and canyon, and breathtaking mountain and Puget Sound views. Enjoy a walk on the beach and public trails, play golf or dine at Chambers Bay, relax at Central or North Meadow or see the award-winning Environmental Services Building. https://www.piercecountywa.gov/1317/Chambers-Creek-Regional-Park");
var ftStielacoomPark = L.marker([47.172904, -122.560644], {icon: treeMarker}).bindPopup("This is Fort Stielacoom Park. Park amenities include: Expansive Trail System, sports fields, permanent orienteering course, drone/rc area, off-leash dog park, picnic areas, and year round bathrooms. \n https://cityoflakewood.us/fort-steilacoom-park/");
var dupontPWpark = L.marker([47.09905, -122.648985], {icon: treeMarker}).bindPopup("This is Depont Powder Works Park");
var wapatoPark = L.marker([47.195572, -122.454064], {icon: treeMarker}).bindPopup("This is Wapato Park");
var swanCreekPark = L.marker([47.211574, -122.396536], {icon: treeMarker}).bindPopup("This is Swan Creek Park. Swan Creek Park features a salmon-bearing stream, wooded canyon, upland forest, paved and natural trails, community garden, dog park, picnic shelters, and mountain bike trails. https://www.metroparkstacoma.org/place/swan-creek-park/");
var southEnd = L.marker([47.200936, -122.489791], {icon: treeMarker}).bindPopup("This is South End Recreation Area");



var parks = L.layerGroup([mckinelyPark, wrightPark, rosaFranklinPark, pointDefinancePark, chamberBayPark, ftStielacoomPark, dupontPWpark, wapatoPark, swanCreekPark, southEnd]); 
 //Creating a tile layer usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer.
 
 var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '© OpenStreetMap'
 });
 

// creates a map and sets its view to chosen georgraphical coordinates in decimal degrees, zoom level, and layers 
map = L.map('map', {
    center: [47.2528, -122.444],
    zoom: 10,
    layers: [osm, cities, parks]
}); 


// create objects that contain base layers and one will contain overlays
var baseMaps = {
    "OpenStreetMap": osm,
  
};


var overlayMaps = {
    "Cities": cities,
    "Parks": parks
};

// create layer control to map
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

// //Dealing with Events 

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);




