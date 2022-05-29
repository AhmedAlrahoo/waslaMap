import Coords from "../coords/Coords";

function RegionsPrices(
  selector,
  map,
  maps,
  destination,
  setDistance,
  setPrice,
  setLatLong,
  latLong
) {
  var directionsService = new maps.DirectionsService();
  var directionsRenderer = new maps.DirectionsRenderer();
  var distanceService = new maps.DistanceMatrixService();
  directionsRenderer.setMap(map);

  function closestGate(latLng) {
    distanceService.getDistanceMatrix(
      {
        origins: [latLng],
        destinations: [
          { lat: 36.378297, lng: 43.138933 },
          { lat: 36.388654, lng: 43.146835 },
        ],
        travelMode: "DRIVING",
      },
      callback
    );

    function callback(response, status) {
      if (status === "OK") {
        setDistance(
          Math.min(
            response.rows[0].elements[0].distance.value,
            response.rows[0].elements[1].distance.value
          )
        );
      }
    }
  }

  function findDistance(latLng, destLatLng) {
    var request = {
      origin: latLng,
      destination: destLatLng,
      travelMode: maps.TravelMode["DRIVING"],
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        //directionsRenderer.setDirections(response); //Show Route
        setDistance(response.routes[0].legs[0].distance.value);
      }
    });
  }

  function calcRoute(latLng) {
    let destLatLng;
    switch (destination) {
      case "الجامعة":
        closestGate(latLng);
        break;
      case "المحطة":
        destLatLng = { lat: 36.340599, lng: 43.155182 };
        findDistance(latLng, destLatLng);
        break;
      case "القادة للبنين":
        destLatLng = { lat: 36.372985, lng: 43.144644 };
        findDistance(latLng, destLatLng);
        break;
      case "القادة للبنات":
        destLatLng = { lat: 36.385766, lng: 43.182335 };
        findDistance(latLng, destLatLng);
        break;
      case "دار الموهوبين":
          destLatLng = { lat: 36.367328, lng: 43.186207 };
          findDistance(latLng, destLatLng);
        break;
      default:
        setDistance(0);
        break;
    }
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
    calcRoute({ lat: e.latLng.lat(), lng: e.latLng.lng() });

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
