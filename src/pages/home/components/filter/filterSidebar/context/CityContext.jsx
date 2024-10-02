import { createContext, useContext, useState } from "react";

const CityContext = createContext()

export const useCity =()=>useContext(CityContext)
export const CityProvider= ({children})=>{
    const[visibleCity,setVisibleCity] =useState(4) 
    const [expanded, setExpanded] = useState(false);
    return(
        <CityContext.Provider value={{ visibleCity,setVisibleCity,expanded,setExpanded }}>
            {children}
        </CityContext.Provider>
    )

}