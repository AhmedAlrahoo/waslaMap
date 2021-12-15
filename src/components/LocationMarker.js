import React from "react";
import { motion } from "framer-motion";

function LocationMarker({ markerRevealAnimation, priceAnimation, price }) {
  // function handlePrice(days, price) {
  //   switch (days) {
  //     case "2":
  //       return Intl.NumberFormat("en-US").format( Math.ceil((((price-10000) * 0.5 )+10000)/5000)*5000); // to get price based on days

  //     case "3":
  //       return Intl.NumberFormat("en-US").format(Math.ceil((((price-10000) * 0.6 )+10000)/5000)*5000 );
  //     case "5":
  //       return Intl.NumberFormat("en-US").format( price );
  //     default:
  //       return Intl.NumberFormat("en-US").format(price);
  //   }
  // }
  // function handleLabel(days, price){
  //   if(price && days){
  //     return handlePrice(days,price)
  //   }
  //   else if(price && !days){
  //     return "اختر عدد الايام"

  //   }
  //   else if(!price && days){
  //     return "حدد المنطقة"
  //   }
  //   else {
  //     console.log(price,   days);
  //     return "حدد المنطقة"}
  // }
  const handlePrice = (price)=>{
if(price){
 return Intl.NumberFormat("en-US").format(price)
}
else return "حدد المنطقة"
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={markerRevealAnimation}>
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
              {handlePrice(price)}
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
