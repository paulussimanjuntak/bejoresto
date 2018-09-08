  //map
function initMap() {
  var myLatLng = {lat: -8.8025837, lng: 115.2104061};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}

