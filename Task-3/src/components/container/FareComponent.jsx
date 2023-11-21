import { useContext, useState,useEffect } from "react";
//import Global from "./Context";
//import FromComp from "./FromComp";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
//import ToComp from "./ToComp";
import Global from "../../context/Context";
import getLocationsArray from "../../store/locationsarray";
const FareComponent=(props)=>{
  const cityName=useContext(Global)
    const{fromloc,toloc}=props;
    const stations=getLocationsArray(cityName)
   
   // const[charge,setCharge]=useState("")
    
    // console.log(fromloc)
    // console.log(toloc)
   // console.log(loc)
     const calculateCharge = () => {
   
    
    
     var starting;
    var ending;
    for(let i=0;i<stations.length;i++) 
    {
      let location=stations[i];
      if(location==fromloc){
          starting=i;
      }
      else if(location==toloc){
          ending=i;
      }
    }
    let tickets=starting-ending;
    if(tickets>0)
    {
      return(tickets*25)
    }
    else if(tickets<0){
      return(Math.abs(tickets)*25)
    } 
    else{
      return 0;
    }     
  };
  const amount=calculateCharge() 
    

return(
    <>
         <Box  >
      <Card variant="outlined" sx={{width:220, padding:3}} >Total Amount:{amount}</Card>
    </Box>
     
    
    </>
);

};
export default FareComponent;