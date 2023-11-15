import React, { useState } from "react";
import SelectComp from "./SelectComp";
import { useEffect } from "react";
import  Global  from "../Context";
import { useContext } from "react";
const Locationcomp=()=>{
  const CityName=useContext(Global)
  const [cities,setCities]=useState([])
    // Function to update the cities array based on the selected city
  //console.log(CityName)
  useEffect(() => {
    // Function to update the cities array based on the selected city
    switch (CityName) {
      case 'Hyderabad':
        setCities(['Ameerpet', 'punjagutta', 'IrrumMangil', 'khairathabad']);
        break;
      case 'Chennai':
        setCities(['aaaa', 'bbbb', 'cccc', 'dddd']);
        break;
      case 'Bangalore':
        setCities(['zzzz', 'yyyy', 'xxxx', 'nnnn']);
        break;
      default:
        setCities([]);
        break;
    }
  }, [CityName]);
  // console.log(fromCity)
  // console.log(toCity)
   // console.log(cities)
  
  //renderContent()
  // useEffect(() => {
  //   renderContent(CityName);
  // }, [CityName]);
 
return(
    <>
    <h2>From</h2>
    <SelectComp
        keys={cities}
       
      />
    <h2>TO</h2>
    <SelectComp
        keys={cities}
    
      />
    </>
)

}
export default Locationcomp;









