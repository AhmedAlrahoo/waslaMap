import "../App.css";
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import RegionsPrices from "./RegionsPrices";
import { motion, useAnimation } from "framer-motion";
function Map() {
  const priceAnimation = useAnimation();
  const mapRevealAnimation = useAnimation();
  const markerRevealAnimation = useAnimation();
  const [reRenderKey, setReRenderKey] = useState(0);
  const [latLong, setLatLong] = useState({});
  const [price, setPrice] = useState();
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
      transition: { duration: 1 },
    });
    markerRevealAnimation.start({
      opacity: [0, 0.5, 1],
    });
  }, []);
  const createMapOptions = (maps) => {
    return {
      zoomControl: false,
      fullscreenControl: false,
      gestureHandling: "greedy",
    };
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={mapRevealAnimation}>
      <div className="App relative">
        <GoogleMapReact
          key={reRenderKey}
          className="h-screen relative"
          bootstrapURLKeys={{
            key: "AIzaSyD1gxbKg2bwRVCo_7Z-SLnmea8CGcoQCKk",
            libraries: ["geometry"],
          }}
          zoom={14}
          onChange={() =>
           { priceAnimation.start({
              scale: [null, 1.1, 1],
            })
          }
          }
          onClick={()=>{
            markerRevealAnimation.start({
              opacity:[null,0.5,1],
              transition:{duration:0.5}
            })
          }}
          center={{ lat: latLong.lat, lng: latLong.lng }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            RegionsPrices(map, maps, setPrice, setLatLong, latLong, Locator, priceAnimation)
          }
          options={createMapOptions}
        >

            <LocationMarker
              markerRevealAnimation={markerRevealAnimation}
              priceAnimation={priceAnimation}
              days={5}
              price={price}
              setLatLong={setLatLong}
              lat={latLong.lat}
              lng={latLong.lng}
            />
          
        </GoogleMapReact>
        <div style={{"pointer-events": "none" }} className="w-screen mx-auto my-5 fixed bottom-4">
          <motion.button whileTap={{ scale: 1.05 }}>
            <button
              id="locate_me"
              onClick={async () => {
                await Locator();
                setReRenderKey(reRenderKey + 1);
                await mapRevealAnimation.start({
                  opacity: [0, 0.5, 1],
                  transition: { duration: 1 },
                });
                markerRevealAnimation.start({
                  opacity: [0, 0.5, 1],
                });
              }}
              style={{"border": "none", "pointer-events": "auto"}}
              className="rounded-lg p-3 text-white active:bg-darker bg-primary text-xl"
            >
              منطقتي
            </button>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Map;
