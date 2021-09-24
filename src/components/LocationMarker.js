import React from "react";
import { motion } from "framer-motion";

function LocationMarker({
  markerRevealAnimation,
  priceAnimation,
  price,
  days,
}) {
  function handlePrice(days, price) {
    switch (days) {
      case "2":
        return Intl.NumberFormat("en-US").format(price / 2);

      case "3":
        return Intl.NumberFormat("en-US").format(price * 0.6);

      default:
        return Intl.NumberFormat("en-US").format(price);
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={markerRevealAnimation}>
      <div
        style={{ position: "absolute", transform: "translate(-50%, -50%)" }}
        className="flex flex-col justify-items-center items-center"
      >
        <motion.div animate={priceAnimation}>
          <div className="flex-1 rounded-lg bg-primary w-24 mx-auto">
            <h3 dir="rtl" className="text-center text-lg text-white">
              {price ? handlePrice(days, price) : "حدد المنطقة"}
            </h3>
          </div>
        </motion.div>
        <img
          className="m-2"
          style={{ width: "40px" }}
          src="wasla.svg"
          alt="Marker"
        />
      </div>
    </motion.div>
  );
}

export default LocationMarker;
