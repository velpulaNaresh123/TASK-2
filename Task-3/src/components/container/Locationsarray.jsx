import Locationcomp from "./locationcomp";
import Global from "../Context";
import { useContext } from "react";
const Locationsarray=()=>{
    const CityName = useContext(Global);
   
        if (CityName === "Hyderabad") {
          return ["Ameerpet", "Punjagutta", "Irrumangil", "Lakidikapool", "Assembly"];
        } else if (CityName === "Chennai") {
          return ["aaa", "bbb", "ccc", "ddd", "eee"];
        } else if (CityName === "Banglore") {
          return ["qqq", "www", "eee", "rrr", "ttt"];
        } else {
          return [];
        }
      
      //console.log(locations)

    return(
        <>
        
        </>
    )

}
export default Locationsarray;