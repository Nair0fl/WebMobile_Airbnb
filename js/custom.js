function regular_map() {
  var var_location = new google.maps.LatLng(40.725118, -73.997699);

  var var_mapoptions = {
    center: var_location,
    zoom: 14
  };

  var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);

  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title: "New York"
  });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

function changemap() {
  $('input[type=radio][name=options]').change(function() {
    if (this.value == 'res') {
      $("#map").attr("class", "col-md-5 col-sm-8 col-xs-4 d-md-block d-sm-none")
      $("#resultats").attr("class", "col-md-5 col-sm-8 col-xs-4 d-xs-none d-sm-block")
    } else if (this.value == 'map') {
      $("#resultats").attr("class", "col-md-5 col-sm-8 col-xs-4 d-md-block d-sm-none")
      $("#map").attr("class", "col-md-5 col-sm-8 col-xs-4 d-xs-none d-sm-block")
    }
  });
}
