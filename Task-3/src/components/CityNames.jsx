import React, { useState } from "react";
import Global from "./Context";
import './Naresh.css'
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
    <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    </head>
    <body>
    <div className="s1">
      <h1>Metro charges</h1>
      <label htmlFor="dropdown">Select a City: </label>
      <select  value={selectedCity} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">-- Select City --</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Banglore">Banglore</option>
      </select>
      </div>
    
      

     
    <Global.Provider value={selectedCity}> 
    <Locationcomp></Locationcomp> 
    </Global.Provider>
    
    </body>
    </>
  );
};

export default CityNames;
//