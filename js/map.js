var mymap = L.map('mapid').setView([43.648555, -79.369935], 10);

// load a tile layer
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);

$('.place').on('click', function(){
    // parse lat and lng from the divs data attribute
    var latlng = $(this).data().point.split(',');
    var lat = latlng[0];
    var lng = latlng[1];
    var zoom = 17;

    mymap.setView([lat, lng], zoom);
})