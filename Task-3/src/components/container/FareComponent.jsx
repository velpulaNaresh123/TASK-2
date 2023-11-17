import { useContext, useState,useEffect } from "react";
//import Global from "./Context";
//import FromComp from "./FromComp";
//import ToComp from "./ToComp";
import Locationsarray from "./Locationsarray";
const FareComponent=(props)=>{
    const{fromloc,toloc}=props;
    const stations=Locationsarray()
   
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
      
      <p>Total Amount:{amount}</p>
    
    </>
);

};
export default FareComponent;