
// Creates a map with a default lat/long
var mymap = L.map('mapid').setView([ 41.3858148, 2.1692236], 15);
// API call
   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
       maxZoom: 18,
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
           '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
           'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       id: 'mapbox/streets-v11',
       tileSize: 512,
       zoomOffset: -1
   }).addTo(mymap);

// Create  a marker 
var marker = L.marker();
// On the event we set, define and add to the map
function onMapClick(e) {
    marker
        .setLatLng(e.latlng)
        .bindPopup("You clicked at " + e.latlng.toString())
        .addTo(mymap);
}
// Event waiting for a click
mymap.on('click', onMapClick);