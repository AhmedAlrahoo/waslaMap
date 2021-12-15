import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import RegionsPrices from "./RegionsPrices";
import { motion, useAnimation } from "framer-motion";
import RegistrationForm from "./RegistrationForm";
import ScrollDownArrow from "./scrollDown/ScrollDownArrow";
import WaslaLogo from "./WaslaLogo";

function App() {
  const scrollRef = useRef();
  const priceAnimation = useAnimation();
  const mapRevealAnimation = useAnimation();
  const markerRevealAnimation = useAnimation();
  const [reRenderKey, setReRenderKey] = useState(0);
  const [latLong, setLatLong] = useState({});
  const [price, setPrice] = useState();
  const [submittedLatLng, setSubmittedLatLng] = useState();
  const [showDone, setShowDone] = useState();
  const [submitionDone, setSubmitionDone] = useState(false);
  const [showLocSubmit, setShowLocSubmit] = useState(false);

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
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let str = navigator.userAgent;
        let instagram = str.indexOf("Instagram");
        let facebook = str.indexOf("FB");

        if (/android/i.test(userAgent) && (instagram != -1 || facebook != -1) ) {
            document.write("<a target=\"_blank\" href=\"https://wasla.info/Reg\" download id=\"open-browser-url\">Please wait. Proceed to Browser</a>");
            window.stop();
            let input = document.getElementById('open-browser-url');
                input.click();

        }
    Locator();
    await mapRevealAnimation.start({
      opacity: [0, 0.5, 1],
      transition: { duration: 1 },
    });
    markerRevealAnimation.start({
      opacity: [0, 0.5, 1],
    });
  }, []);
  const createMapOptions = () => {
    return {
      zoomControl: false,
      fullscreenControl: false,
      gestureHandling: "greedy",
    };
  };
  return (
    <div ref={scrollRef} id="scrollAid3">
      <section className="h-screen py-6 main relative snapper">
        <div className="w-full text-center absolute top-12">
          <motion.div
            transition={{
              y: {
                duration: 3.5,
                yoyo: Infinity,
                ease: "easeInOut",
              },
            }}
            animate={{
              y: [0, 15, 0],
            }}
            className="w-2/4  mx-auto mb-6"
          >
            <WaslaLogo></WaslaLogo>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.5, 1] }}
            className="w-full flex flex-col mx-auto text-center"
          >
            <div className="p-3">
              <h1 className="text-8xl text-primary font-medium">وصلة</h1>
            </div>
            <div>
              <h2 className="text-secondary text-lg mb-2">
                بكل مكان راحة وامان
              </h2>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-3.5 w-full text-center">
          <ScrollDownArrow scrollRef="#scrollAid" />
        </div>
      </section>

      {submitionDone ? (
        ""
      ) : (
        <div className="map text-center relative snapper">
          <motion.div initial={{ opacity: 0 }} animate={mapRevealAnimation}>
            <div className="map framed mx-auto mt-56 relative" id="scrollAid">
              <GoogleMapReact
                key={reRenderKey}
                bootstrapURLKeys={{
                  key: "AIzaSyD1gxbKg2bwRVCo_7Z-SLnmea8CGcoQCKk",
                  libraries: ["geometry"],
                }}
                zoom={14}
                onChange={() => {
                  priceAnimation.start({
                    scale: [null, 1.1, 1],
                  });
                }}
                onClick={() => {
                  markerRevealAnimation.start({
                    opacity: [null, 0.5, 1],
                    transition: { duration: 0.5 },
                  });
                }}
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
                  price={price}
                  setLatLong={setLatLong}
                  lat={latLong.lat}
                  lng={latLong.lng}
                />
              </GoogleMapReact>
            </div>
            <div className="text-center">
              {submittedLatLng ? (
                <motion.div
                  key={showDone}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5 }}
                >
                  <span>تم تحديد عنوانك بنجاح</span>
                </motion.div>
              ) : (
                ""
              )}
              <div
                style={{ "pointer-events": "none" }}
                className="w-screen mx-auto my-5"
              >
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
                    style={{ border: "none", "pointer-events": "auto" }}
                    className="rounded-lg p-3 text-white active:bg-darker bg-secondary text-xl mx-1"
                  >
                    عنواني الحالي
                  </button>
                </motion.button>
                {showLocSubmit && !submitionDone ? (
                  <motion.button whileTap={{ scale: 1.05 }}>
                    <button
                      id="SubmitLocation"
                      onClick={() => {
                        setSubmittedLatLng(latLong);
                        setShowDone(!showDone);
                        document
                          .getElementById("scrollAid4")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{ border: "none", "pointer-events": "auto" }}
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
          </motion.div>

          <div className="absolute -bottom-3.5 w-full text-center">
            <ScrollDownArrow scrollRef="#scrollAid2" />
          </div>
        </div>
      )}
      <div className="p-4 snapper" id="scrollAid2">
        {!submitionDone ? (
          <RegistrationForm
            setSubmitionDone={setSubmitionDone}
            submittedLatLng={submittedLatLng}
            setSubmittedLatLng={setSubmittedLatLng}
            showLocSubmit={showLocSubmit}
            setShowLocSubmit={setShowLocSubmit}
          />
        ) : (
          <div className="p-4 text-center">
            تم التسجيل بنجاح سيتم التواصل معك من قبل الفريق بأقرب وقت
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
