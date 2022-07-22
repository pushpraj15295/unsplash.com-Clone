import { Box, Text } from "@chakra-ui/react";
import { createContext, useEffect } from "react";

export const ImgContext = createContext();

function ImgContextProvider({ children }) {
  return <ImgContext.Provider>{children}</ImgContext.Provider>;
}

export default ImgContextProvider;

//EzVvR2dvr-RYFFKN-LL8BgG-tneKy3hCT4dts2kqu_g

// sequerty
//9n43FlEse2MkigATyuLB9Yj17diDm5apvz-yJb13NiU

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

///search/photos

//&query=${query}
