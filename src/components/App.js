import "../App.css";
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import RegionsPrices from "./RegionsPrices";
import { motion, useAnimation } from "framer-motion";
import SelectDays from "./SelectDays";
function App() {
  const priceAnimation = useAnimation();
  const mapRevealAnimation = useAnimation();
  const markerRevealAnimation = useAnimation();
  const [reRenderKey, setReRenderKey] = useState(0);
  const [latLong, setLatLong] = useState({});
  const [price, setPrice] = useState();
  const [days, setDays] = useState(0)
  const Locator = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLatLong({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      function (error) {
        setLatLong({
          lat: 36.349211,
          lng: 43.153873,
        });
      }
    );
  };
  useEffect(async () => {
    Locator();
    await mapRevealAnimation.start({
      opacity: [0, 0.5, 1],
      transition: { duration: 2 },
    });
    markerRevealAnimation.start({
      opacity: [0, 0.5, 1],
    });
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={mapRevealAnimation}>
      <div className="App relative">
        <GoogleMapReact
          key={reRenderKey}
          className="relative"
          bootstrapURLKeys={{
            key: "AIzaSyD1gxbKg2bwRVCo_7Z-SLnmea8CGcoQCKk",
            libraries: ["geometry"],
          }}
          zoom={14}
          center={{ lat: latLong.lat, lng: latLong.lng }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            RegionsPrices(map, maps, setPrice, setLatLong, latLong, Locator)
          }
        >
          <LocationMarker
            markerRevealAnimation={markerRevealAnimation}
            priceAnimation={priceAnimation}
            days={days}
            price={price}
            lat={latLong.lat}
            lng={latLong.lng}
          />
        </GoogleMapReact>
        <div className="w-screen mx-auto my-5 absolute bottom-0 ">
          <motion.button whileTap={{ scale: 1.05 }}>
            <button
              id="locate_me"
              onClick={async () => {
                await Locator();
                setReRenderKey(reRenderKey + 1);
                await mapRevealAnimation.start({
                  opacity: [0, 0.5, 1],
                  transition: { duration: 2 },
                });
                markerRevealAnimation.start({
                  opacity: [0, 0.5, 1],
                });
              }}
              className="rounded-lg p-3 text-white active:bg-darker bg-primary "
            >
              Locate Me
            </button>
          </motion.button>
        </div>
        <div className="w-screen mx-auto my-5 absolute top-0">
          <SelectDays days={days} setDays={setDays}></SelectDays>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
