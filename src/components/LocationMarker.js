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
    if(destination === "المحطة"){
      let price = ((45000 + (1500 * (distance/1000))) - (Math.round((45000 + (1500 * (distance/1000)))/5000)*5000)) > 1000 ? (Math.ceil((45000 + (1500 * (distance/1000)))/5000)*5000) : (Math.round((45000 + (1500 * (distance/1000)))/5000)*5000);
      return parseInt(days) === 5 ? Intl.NumberFormat("en-US").format(price) : Intl.NumberFormat("en-US").format(price - 5000 - (30000 - ((parseInt(days)-1)*10000)))
    }
    else if(destination === "الجامعة"){
      let price = ((50000 + (1500 * (distance/1000))) - (Math.round((50000 + (1500 * (distance/1000)))/5000)*5000)) > 1000 ? (Math.ceil((50000 + (1500 * (distance/1000)))/5000)*5000) : (Math.round((50000 + (1500 * (distance/1000)))/5000)*5000);
      return parseInt(days) === 5 ? Intl.NumberFormat("en-US").format(price) : Intl.NumberFormat("en-US").format(price - 5000 - (30000 - ((parseInt(days)-1)*10000)))
    }
    else return "المنطقة غير مشمولة"
    
    
  }
  function handlePrice(days, price) {
    switch (days) {
      case "1":
        switch (price) {
          case 65000:
            return Intl.NumberFormat("en-US").format(30000);
          case 70000:
            return Intl.NumberFormat("en-US").format(35000);
          default:
            return Intl.NumberFormat("en-US").format(25000);
        }
      case "2":
        switch (price) {
          case 55000:
            return Intl.NumberFormat("en-US").format(30000);
          case 60000:
            return Intl.NumberFormat("en-US").format(35000);
          case 65000:
            return Intl.NumberFormat("en-US").format(40000);
          case 70000:
            return Intl.NumberFormat("en-US").format(45000);
            default: return 0
        }
      case "3":
        switch (price) {
          case 55000:
            return Intl.NumberFormat("en-US").format(40000);
          case 60000:
            return Intl.NumberFormat("en-US").format(45000);
          case 65000:
            return Intl.NumberFormat("en-US").format(50000);
          case 70000:
            return Intl.NumberFormat("en-US").format(55000);
            default: return 0
        }

      case "4":
        switch (price) {
          case 55000:
            return Intl.NumberFormat("en-US").format(50000);
          case 60000:
            return Intl.NumberFormat("en-US").format(55000);
          case 65000:
            return Intl.NumberFormat("en-US").format(60000);
          case 70000:
            return Intl.NumberFormat("en-US").format(65000);
            default: return 0
        }

      case "5":
        switch (price) {
          default:
            return Intl.NumberFormat("en-US").format(price);
        }
      default:
        return Intl.NumberFormat("en-US").format(price);
    }
  }
  function handleLabel(days, price) {
    if (price && days) {
      return handlePrice(days, price);
    } else if (price && !days) {
      return "اختر عدد الايام";
    } else if (!price && days) {
      return "المنطقة غير مشمولة";
    } else {
      return "المنطقة غير مشمولة";
    }
  }
  //   const handlePrice = (price)=>{
  // if(price){
  //  return Intl.NumberFormat("en-US").format(price)
  // }
  // else return "حدد المنطقة"
  //   }
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
