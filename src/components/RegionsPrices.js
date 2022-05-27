import Coords from "../coords/Coords";

function RegionsPrices(map, maps, setPrice, setLatLong, latLong) {
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
