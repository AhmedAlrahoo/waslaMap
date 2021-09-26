import Coords from "../coords/Coords";

function RegionsPrices(map, maps, setPrice, setLatLong, latLong) {
  var L_Zone_50 = new maps.Polygon({
    paths: Coords["left-region 50"],
  });

  var L_Zone_60 = new maps.Polygon({
    paths: Coords["left-region 60"],
  });
  var L_Zone_65 = new maps.Polygon({
    paths: Coords["left-region 65"],
  });
  var L_Zone_70 = new maps.Polygon({
    paths: Coords["left-region 70"],
  });
  var L_Zone_70_2 = new maps.Polygon({
    paths: Coords["left-region 70-2"],
  });
  var R_Zone_60 = new maps.Polygon({
    paths: Coords["right-region 60"],
  });
  var R_Zone_65 = new maps.Polygon({
    paths: Coords["right-region 65"],
  });
  var R_Zone_70 = new maps.Polygon({
    paths: Coords["right-region 70-1"],
  });
  var R_Zone_70_2 = new maps.Polygon({
    paths: Coords["right-region 70-2"],
  });
  var R_Zone_80 = new maps.Polygon({
    paths: Coords["right-region 80"],
  });

   if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      L_Zone_50
    )
  ) {
    setPrice(50000);
  } 
  else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      L_Zone_60
    )
  ) 
  
  {
    setPrice(60000);
  }
  else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      L_Zone_70_2
    )
  ) 
  
  {
    setPrice(70000);
  }
   else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      L_Zone_65
    )
  ) {
    setPrice(65000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      L_Zone_70
    )
  ) {
    setPrice(70000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      R_Zone_60
    )
  ) {
    setPrice(60000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      R_Zone_65
    )
  ) {
    setPrice(65000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      R_Zone_70
    )
  ) {
    setPrice(70000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      R_Zone_70_2
    )
  ) {
    setPrice(70000);
  } else if (
    maps.geometry.poly.containsLocation(
      { lat: () => latLong.lat, lng: () => latLong.lng },
      R_Zone_80
    )
  ) {
    setPrice(80000);
  } else setPrice(0);

  maps.event.addListener(map, "click", (e) => {
    setLatLong({ lat: e.latLng.lat(), lng: e.latLng.lng() });

    if (maps.geometry.poly.containsLocation(e.latLng, L_Zone_50)) {
      setPrice(50000);
    } else if (maps.geometry.poly.containsLocation(e.latLng, L_Zone_60)) {
      setPrice(60000);
    }
     else if (maps.geometry.poly.containsLocation(e.latLng, L_Zone_65)) {
      setPrice(65000);
    } 
    else if (maps.geometry.poly.containsLocation(e.latLng, L_Zone_70)) {
      setPrice(70000);
    }
    else if (maps.geometry.poly.containsLocation(e.latLng, L_Zone_70_2)) {
      setPrice(70000);
    }
     else if (maps.geometry.poly.containsLocation(e.latLng, R_Zone_60)) {
      setPrice(60000);
    } else if (maps.geometry.poly.containsLocation(e.latLng, R_Zone_65)) {
      setPrice(65000);
    } else if (maps.geometry.poly.containsLocation(e.latLng, R_Zone_70)) {
      setPrice(70000);
    } else if (maps.geometry.poly.containsLocation(e.latLng, R_Zone_70_2)) {
      setPrice(70000);
    } else if (maps.geometry.poly.containsLocation(e.latLng, R_Zone_80)) {
      setPrice(80000);
    } else setPrice(0);
  });
}

export default RegionsPrices;
