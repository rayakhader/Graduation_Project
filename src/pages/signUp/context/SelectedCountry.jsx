import { createContext, useContext, useState } from "react";

const SelectedCountry = createContext()

export const useSelectedCountry =()=>useContext(SelectedCountry)
export const SelectedCountryProvider= ({children})=>{
    const countryData = [
        { name: "Palestine", code: "+970", flag: "ps" },
        { name: "Palestine", code: "+972", flag: "ps" },
      ];
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
    return(
        <SelectedCountry.Provider value={{ selectedCountry,setSelectedCountry }}>
            {children}
        </SelectedCountry.Provider>
    )

}