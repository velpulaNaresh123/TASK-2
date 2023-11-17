import React, { useState } from "react";
import SelectComp from "./SelectComp";
import Locationsarray from "./Locationsarray";
import FareComponent from "./FareComponent";

const Locationcomp = () => {
  
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

 

  const handleFromSelect = (value) => {
    setFromLocation(value);
  };

  const handleToSelect = (value) => {
    setToLocation(value);
  };
//console.log(fromLocation)
//console.log(toLocation)
const locations=Locationsarray()
  return (
    <>
    
      <h2>From</h2>
      <SelectComp keys={locations} onSelect={handleFromSelect} />

      <h2>TO</h2>
      <SelectComp keys={locations} onSelect={handleToSelect} />
      <FareComponent fromloc={fromLocation}
                    toloc={toLocation}
                    ></FareComponent>
                    
    </>
  );
};

export default Locationcomp;
