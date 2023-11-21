
const getLocationsArray=(CityName)=>{
    
   
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
}
export default getLocationsArray;