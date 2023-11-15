import React, { useState } from "react"
import MetroCharges from "./FareComponent";
import FareComponent from "./FareComponent";
const SelectComp=(props)=>{
   const[locval,setLocval]=useState([]);
   const{keys}=props;
  // console.log(key1);
   const setvalues=(event)=>{
    setLocval(event)
   }
    return(
        <>
         <select id="selectfrom" value={locval} onChange={(e)=>{setvalues(e.target.value)}}>
            <option value=''>--- Select Station ---</option>
            {
                keys.map((element,index)=>{
                    return(
                        <>
                        <option value={element}>{element}</option>
                        </>
                    )
                })
            }
           </select>
           <FareComponent loc={locval}></FareComponent>
          
        </>
    )
}
export default SelectComp;
// <MetroCharges loc={locval}></MetroCharges>