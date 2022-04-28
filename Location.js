<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key="PLACE GOOGLE MAPS API KEY HERE AND REMOVE QUOTATION MARKS"&libraries=geometry"></script>

<script>
   function locationNow(pos) {
       var currentLocation = pos.coords;

       var latitude1 = currentLocation.latitude //Current Latitude
       var longitude1 = currentLocation.longitude //Current Longitude

       var location1 = new google.maps.LatLng(latitude1, longitude1); //Current Location
       var location2 = new google.maps.LatLng(50.7950 -1.0593); //Milbury School

       answer = google.maps.geometry.spherical.computeDistanceBetween(location1, location2) * 0.000621371192;

            document.getElementById("Distance").innerHTML = answer.toFixed(2) + " Miles Away";
}

     navigator.geolocation.getCurrentPosition(locationNow)//, options);

</script>


<p id="Distance"></p> //Place this in the HTML
