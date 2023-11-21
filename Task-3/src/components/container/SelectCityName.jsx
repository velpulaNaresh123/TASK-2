import React, { useState } from "react";

import Global from "../../context/Context";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import MetroCharges from "./MetroCharges";
import LocationSelectComp from "./LocationSelectComp";
import { blue } from "@mui/material/colors";

const SelectCityName = () => {
  const [selectedCity, setSelectedCity] = useState('');
  //const [cities, setCities] = useState([]);

  // Handler function to update the selected city
  const handleSelect = (selectedValue) => {
    setSelectedCity(selectedValue);
   // renderContent(selectedValue);
  };


  return (
    <>
    
      <div className="cityname">
      <Box sx={{ minWidth: 14 }}>
      <FormControl sx={{minWidth: 400}} >
        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity}
          label="Select City"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Banglore">Banglore</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
      
    
      

     
    <Global.Provider value={selectedCity}> 
    <LocationSelectComp></LocationSelectComp> 
    </Global.Provider>
    
    
    </>
  );
};

export default SelectCityName;
