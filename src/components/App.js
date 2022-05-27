import "../App.css";
import React, { useState, useRef } from "react";

import LandingPage from "./LandingPage";
import MapPage from "./MapPage";
import RegistrationPage from "./RegistrationPage";

function App() {
  const scrollRef = useRef();

  const [latLong, setLatLong] = useState({});

  const [submittedLatLng, setSubmittedLatLng] = useState();
  const [showDone, setShowDone] = useState();
  const [submitionDone, setSubmitionDone] = useState(false);
  const [showLocSubmit, setShowLocSubmit] = useState(false);


  return (
    <div ref={scrollRef} id="scrollAid3">
      <LandingPage />
      <MapPage
        showDone={showDone}
        setShowDone={setShowDone}
        submitionDone={submitionDone}
        latLong={latLong}
        setLatLong={setLatLong}
        submittedLatLng={submittedLatLng}
        setSubmittedLatLng={setSubmittedLatLng}
        showLocSubmit={showLocSubmit}
      />
      <RegistrationPage
        submitionDone={submitionDone}
        setSubmitionDone={setSubmitionDone}
        submittedLatLng={submittedLatLng}
        setSubmittedLatLng={setSubmittedLatLng}
        showLocSubmit={showLocSubmit}
        setShowLocSubmit={setShowLocSubmit}
      />
    </div>
  );
}

export default App;
