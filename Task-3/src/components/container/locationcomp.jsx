import React, { useState } from "react";
import SelectComp from "./SelectComp";
import Global from "../Context";
import { useContext } from "react";
import FareComponent from "./FareComponent";

const Locationcomp = () => {
  const CityName = useContext(Global);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const getCities = (name) => {
    if (name === "Hyderabad") {
      return ["Ameerpet", "Punjagutta", "Irrumangil", "Lakidikapool", "Assembly"];
    } else if (name === "Chennai") {
      return ["aaa", "bbb", "ccc", "ddd", "eee"];
    } else if (name === "Banglore") {
      return ["qqq", "www", "eee", "rrr", "ttt"];
    } else {
      return [];
    }
  };

  const locations = getCities(CityName);

  const handleFromSelect = (value) => {
    setFromLocation(value);
  };

  const handleToSelect = (value) => {
    setToLocation(value);
  };
//console.log(fromLocation)
//console.log(toLocation)
  return (
    <>
    
      <h2>From</h2>
      <SelectComp keys={locations} onSelect={handleFromSelect} />

      <h2>TO</h2>
      <SelectComp keys={locations} onSelect={handleToSelect} />
      <FareComponent fromloc={fromLocation}
                    toloc={toLocation}
                    stations={locations}></FareComponent>
                    
    </>
  );
};

export default Locationcomp;
