import React, { useState } from "react";
import Global from "./Context";
//import MetroCharges from "./MetroCharges";
import Locationcomp from "./container/locationcomp";
const CityNames = () => {
  const [selectedCity, setSelectedCity] = useState('');
  //const [cities, setCities] = useState([]);

  // Handler function to update the selected city
  const handleSelect = (selectedValue) => {
    setSelectedCity(selectedValue);
   // renderContent(selectedValue);
  };


  return (
    <>
    
     
       <h2>Metro charges</h2>
      <label htmlFor="dropdown">Select a City: </label>
      <select id="dropdown" value={selectedCity} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">-- Select City --</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Banglore">Banglore</option>
      </select>
    
     

     
    <Global.Provider value={selectedCity}> 
    <Locationcomp></Locationcomp> 
    </Global.Provider>
    </>
  );
};

export default CityNames;
//