import React from "react";
import { motion } from "framer-motion";

function LocationMarker({
  markerRevealAnimation,
  priceAnimation,
  days,
  price,
  distance,
  destination
}) {
  
  function handlePriceDistance(days,distance, destination){
    let offset = 50000;
    if(distance > 10000){
      offset -= 5000
    }
    if(destination === "الجامعة"){
      let price = ((offset + (1500 * (distance/1000))) - (Math.round((offset + (1500 * (distance/1000)))/5000)*5000)) > 1000 ? (Math.ceil((offset + (1500 * (distance/1000)))/5000)*5000) : (Math.round((offset + (1500 * (distance/1000)))/5000)*5000);
      return parseInt(days) === 5 ? Intl.NumberFormat("en-US").format(price) : Intl.NumberFormat("en-US").format(price - 5000 - (30000 - ((parseInt(days)-1)*10000)))
    }
    else {
      let price = (((offset - 5000) + (1500 * (distance/1000))) - (Math.round(((offset - 5000) + (1500 * (distance/1000)))/5000)*5000)) > 1000 ? (Math.ceil(((offset - 5000) + (1500 * (distance/1000)))/5000)*5000) : (Math.round(((offset - 5000) + (1500 * (distance/1000)))/5000)*5000);
      return parseInt(days) === 5 ? Intl.NumberFormat("en-US").format(price) : Intl.NumberFormat("en-US").format(price - 5000 - (30000 - ((parseInt(days)-1)*10000)))}

    
    
  }

  // zones pricing system
  // function handlePrice(days, price) {
  //   switch (days) {
  //     case "1":
  //       switch (price) {
  //         case 65000:
  //           return Intl.NumberFormat("en-US").format(30000);
  //         case 70000:
  //           return Intl.NumberFormat("en-US").format(35000);
  //         default:
  //           return Intl.NumberFormat("en-US").format(25000);
  //       }
  //     case "2":
  //       switch (price) {
  //         case 55000:
  //           return Intl.NumberFormat("en-US").format(30000);
  //         case 60000:
  //           return Intl.NumberFormat("en-US").format(35000);
  //         case 65000:
  //           return Intl.NumberFormat("en-US").format(40000);
  //         case 70000:
  //           return Intl.NumberFormat("en-US").format(45000);
  //           default: return 0
  //       }
  //     case "3":
  //       switch (price) {
  //         case 55000:
  //           return Intl.NumberFormat("en-US").format(40000);
  //         case 60000:
  //           return Intl.NumberFormat("en-US").format(45000);
  //         case 65000:
  //           return Intl.NumberFormat("en-US").format(50000);
  //         case 70000:
  //           return Intl.NumberFormat("en-US").format(55000);
  //           default: return 0
  //       }

  //     case "4":
  //       switch (price) {
  //         case 55000:
  //           return Intl.NumberFormat("en-US").format(50000);
  //         case 60000:
  //           return Intl.NumberFormat("en-US").format(55000);
  //         case 65000:
  //           return Intl.NumberFormat("en-US").format(60000);
  //         case 70000:
  //           return Intl.NumberFormat("en-US").format(65000);
  //           default: return 0
  //       }

  //     case "5":
  //       switch (price) {
  //         default:
  //           return Intl.NumberFormat("en-US").format(price);
  //       }
  //     default:
  //       return Intl.NumberFormat("en-US").format(price);
  //   }
  // }

  function handleLabelDistance(days,distance,destination){

    if (days && destination) {
      return handlePriceDistance(days, distance, destination);
    } else if (destination && !days) {
      return "اختر عدد الايام";
    } else if (!destination && days) {
      return "حدد الوجهة";
    }else if (!destination && !days) {
      return "اختر عدد الايام";
    } 
    else {
      return "المنطقة غير مشمولة";
    }

  }
  return (
    <motion.div initial={{ opacity: 1 }} animate={markerRevealAnimation}>
      <div
        style={{ transform: "translate(-50%, -90%)" }}
        className="absolute flex flex-col justify-items-center items-center"
      >
        <motion.div animate={priceAnimation}>
          <div className="flex-1 rounded-lg bg-primary w-auto mx-auto px-2 py-1">
            <h3
              dir="rtl"
              className="whitespace-nowrap text-center text-xl text-white"
            >
              {handleLabelDistance(days, distance, destination)}
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
