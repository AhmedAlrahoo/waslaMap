import Coords from "../coords/Coords";

function RegionsPrices(map, maps,destination,setDistance, setPrice, setLatLong, latLong) {

  // switch (destination) {
  //   case "الجامعة": 
  //   setDistance(maps.geometry.spherical.computeDistanceBetween(latLong, {lat:36.3816953, lng:43.1430527}))
  //   break;
  //   case "المحطة":
  //   setDistance(maps.geometry.spherical.computeDistanceBetween(latLong, {lat:36.340599, lng:43.155182}))
  //   break;
  //   default: console.log("default");;
  // }

    var directionsService =  new maps.DirectionsService();
    var directionsRenderer =  new maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
  
  
  function calcRoute(latLng) {
    let destLatLng;
    if(destination === "الجامعة"){
      destLatLng = {lat:36.3816953, lng:43.1430527}
    }
    else if(destination === "المحطة"){
      destLatLng = {lat:36.340599, lng:43.155182}
    }
    else return ;
    var request = {
        origin: latLng,
        destination: destLatLng,
        travelMode: maps.TravelMode["DRIVING"],
    };
    directionsService.route(request, function(response, status) {
      if (status === 'OK') {
        console.log(response.routes[0].legs[0].distance.text);
        setDistance(response.routes[0].legs[0].distance.value);
      }
    });
  }
  calcRoute(latLong);
  var L_Zone_1 = new maps.Polygon({
    paths: Coords["left-region_1"],
  });

  var L_Zone_2_1 = new maps.Polygon({
    paths: Coords["left-region_2_1"],
  });
  var L_Zone_2_2 = new maps.Polygon({
    paths: Coords["left-region_2_2"],
  });
  var L_Zone_3 = new maps.Polygon({
    paths: Coords["left-region_3"],
  });
  var L_Zone_4 = new maps.Polygon({
    paths: Coords["left-region_4"],
  });

  if (
    maps.geometry.poly.containsLocation(
      { lat: latLong.lat, lng: latLong.lng },
      L_Zone_1
    )
  ) {
    setPrice(55000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: latLong.lat, lng: latLong.lng },
      L_Zone_2_1
    )
  ) {
    setPrice(60000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: latLong.lat, lng: latLong.lng },
      L_Zone_2_2
    )
  ) {
    setPrice(60000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: latLong.lat, lng: latLong.lng },
      L_Zone_3
    )
  ) {
    setPrice(65000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: latLong.lat, lng: latLong.lng },
      L_Zone_4
    )
  ) {
    setPrice(70000);
  } else setPrice(0);

  maps.event.addListener(map, "click", (e) => {
    setLatLong({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  //   switch (destination) {
  //   case "الجامعة": 
  //   setDistance(maps.geometry.spherical.computeDistanceBetween({ lat: e.latLng.lat(), lng: e.latLng.lng() }, {lat:36.3816953, lng:43.1430527}))
  //   break;
  //   case "المحطة":
  //   setDistance(maps.geometry.spherical.computeDistanceBetween({ lat: e.latLng.lat(), lng: e.latLng.lng() }, {lat:36.340599, lng:43.155182}))
  //   break;
  //   default: ;
  // }

    calcRoute({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    if (
      maps.geometry.poly.containsLocation(
        { lat: e.latLng.lat(), lng: e.latLng.lng() },
        L_Zone_1
      )
    ) {
      setPrice(55000);
    } else if (
      maps.geometry.poly.containsLocation(
        { lat: e.latLng.lat(), lng: e.latLng.lng() },
        L_Zone_2_1
      )
    ) {
      setPrice(60000);
    } else if (
      maps.geometry.poly.containsLocation(
        { lat: e.latLng.lat(), lng: e.latLng.lng() },
        L_Zone_2_2
      )
    ) {
      setPrice(60000);
    } else if (
      maps.geometry.poly.containsLocation(
        { lat: e.latLng.lat(), lng: e.latLng.lng() },
        L_Zone_3
      )
    ) {
      setPrice(65000);
    } else if (
      maps.geometry.poly.containsLocation(
        { lat: e.latLng.lat(), lng: e.latLng.lng() },
        L_Zone_4
      )
    ) {
      setPrice(70000);
    } else setPrice(0);
  });
}

export default RegionsPrices;
