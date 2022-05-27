import React,{useState, useEffect} from 'react'
import GoogleMapReact from "google-map-react";
import {useAnimation } from "framer-motion";
import RegionsPrices from "./RegionsPrices";
import LocationMarker from './LocationMarker';
import {motion} from "framer-motion"
import ScrollDownArrow from './scrollDown/ScrollDownArrow';
function MapPage({submitionDone, latLong, setLatLong, submittedLatLng, setSubmittedLatLng, showLocSubmit, showDone, setShowDone}) {
    const priceAnimation = useAnimation();
    const mapRevealAnimation = useAnimation();
    const markerRevealAnimation = useAnimation();
    const [reRenderKey, setReRenderKey] = useState(0);
    const [price, setPrice] = useState();
    const createMapOptions = () => {
        return {
          zoomControl: false,
          fullscreenControl: false,
          gestureHandling: "greedy",
        };
      };
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
      useEffect(async() => {
        Locator();
        await mapRevealAnimation.start({
            opacity: [0, 0.5, 1],
            transition: { duration: 1 },
          });
          markerRevealAnimation.start({
            opacity: [0, 0.5, 1],
          });
      }, [markerRevealAnimation])
      const handleSubmitButton = () => {
        setSubmittedLatLng(latLong);
        setShowDone(!showDone);
        document
          .getElementById("scrollAid4")
          .scrollIntoView({ behavior: "smooth" });
      }
      const handlePriceAnimation = () => {
        priceAnimation.start({
          scale: [null, 1.1, 1],
        });
      }
      const handleLocationClick = () => {
        markerRevealAnimation.start({
          opacity: [null, 0.5, 1],
          transition: { duration: 0.5 },
        });
      }
      const handleLocateMe = async () => {
        await Locator();
        setReRenderKey(reRenderKey + 1);
        await mapRevealAnimation.start({
          opacity: [0, 0.5, 1],
          transition: { duration: 1 },
        });
        markerRevealAnimation.start({
          opacity: [0, 0.5, 1],
        });
      }
    return (
        <>
        {submitionDone ? (
            ""
          ) : (
            <div className="map text-center relative snapper">
              <div>
                <div className="map framed mx-auto mt-56 relative" id="scrollAid">
                  <GoogleMapReact
                    key={reRenderKey}
                    bootstrapURLKeys={{
                      key: "AIzaSyD1gxbKg2bwRVCo_7Z-SLnmea8CGcoQCKk",
                      libraries: ["geometry"],
                    }}
                    zoom={14}
                    onChange={handlePriceAnimation}
                    onClick={handleLocationClick}
                    center={{ lat: latLong.lat, lng: latLong.lng }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) =>
                      RegionsPrices(
                        map,
                        maps,
                        setPrice,
                        setLatLong,
                        latLong,
                        Locator,
                        priceAnimation
                      )
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
                </div>
                <div className="text-center">
                  {submittedLatLng ? (
                    <div
                    >
                      <span>تم تحديد عنوانك بنجاح</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    style={{ "pointerEvents": "none" }}
                    className="w-screen mx-auto my-5"
                  >
                    <motion.button whileTap={{ scale: 1.05 }}>
                      <button
                        id="locate_me"
                        onClick={handleLocateMe}
                        style={{ border: "none", "pointerEvents": "auto" }}
                        className="rounded-lg p-3 text-white active:bg-darker bg-secondary text-xl mx-1"
                      >
                        عنواني الحالي
                      </button>
                    </motion.button>
                    {showLocSubmit && !submitionDone ? (
                      <motion.button whileTap={{ scale: 1.05 }}>
                        <button
                          id="SubmitLocation"
                          onClick={handleSubmitButton}
                          style={{ border: "none", "pointerEvents": "auto" }}
                          className="rounded-lg p-3 text-white active:bg-darker bg-primary text-xl mx-1"
                        >
                          تثبيت العنوان
                        </button>
                      </motion.button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
    
              <div className="absolute -bottom-3.5 w-full text-center">
                <ScrollDownArrow scrollRef="#scrollAid2" />
              </div>
            </div>
          )}
    </>
    )
}

export default MapPage
