import { Box, Text } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";

export const ImgContext = createContext();



function ImgContextProvider({ children }) {

  const [fdata,setFdata] = useState([])

  // let query = "cars"

  function fetchdata(query){
     
    fetch(`https://api.unsplash.com/search/photos/?client_id=EzVvR2dvr-RYFFKN-LL8BgG-tneKy3hCT4dts2kqu_g&query=${query}`)
    .then(r => r.json())
    .then( data => setFdata(data.results))

  }

   useEffect(()=>{
    fetchdata()
   
   },[])
  
   console.log(fdata)

  return(<ImgContext.Provider value={{fetchdata,fdata}} >{children}</ImgContext.Provider>)
}

export default ImgContextProvider;

//EzVvR2dvr-RYFFKN-LL8BgG-tneKy3hCT4dts2kqu_g


//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

///search/photos

//&query=${query}
