import React, { useState } from "react";
import LocationPointForm from "./LocationPointForm";
import Global from "../../context/Context";
import { useContext } from "react";
import getLocationsArray from "../../store/locationsarray";
import FareComponent from "./FareComponent";
import { Typography } from "@mui/material";



const LocationSelectComp = () => {
  const CityName = useContext(Global);
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
const locations=getLocationsArray(CityName)
  return (
    <>
    <div className="locationcompa">
    <Typography variant="h5" component="h5" sx={{padding:3}} >
   From Station
</Typography>
</div>
<div>
      <LocationPointForm keys={locations} onSelect={handleFromSelect} />

      <Typography variant="h5" component="h5" sx={{padding:3}} >
   TO Station
</Typography>
</div>
 
      <LocationPointForm keys={locations} onSelect={handleToSelect} />
      <FareComponent fromloc={fromLocation}
                    toloc={toLocation}
                    ></FareComponent>

   
                    
    </>
  );
};


export default LocationSelectComp;
