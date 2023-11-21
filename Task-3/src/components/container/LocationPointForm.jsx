import React, { useState } from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
 

const LocationPointForm = (props) => {
  const { keys, onSelect } = props;
  const [locval, setLocval] = useState("");

  const setValues = (event) => {
    const newValue = event.target.value;
    setLocval(newValue);
    onSelect(newValue); 
  };

  return (
    <>
   
      
      
      <div className="selectcomp">
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width: 220, padding:3}}>
        <InputLabel id="demo-simple-select-label">Select Station</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locval}
          label="Select Station"
          onChange={(e) => setValues(e)}>
            
          {
            keys.map((element, index) => (
            <MenuItem key={index} value={element}>
              {element}
              </MenuItem>
            
          ))}
          
        </Select>
      </FormControl>
    </Box>
    </div>
    
    </>
  );
};

export default LocationPointForm;
