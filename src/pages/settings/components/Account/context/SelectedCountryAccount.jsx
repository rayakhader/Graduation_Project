import { createContext, useContext, useState} from "react";

const SelectedCountryAccount = createContext()

export const useSelectedCountry =()=>useContext(SelectedCountryAccount)
export const SelectedCountryAccountProvider= ({children})=>{
    const countryData = [
        { name: "Palestine", code: "+970", flag: "ps" },
        { name: "Palestine", code: "+972", flag: "ps" },
      ];
    const [selectedCountry,setSelectedCountry]=useState(countryData[0])
    return(
        <SelectedCountryAccount.Provider value={{ selectedCountry,setSelectedCountry}}>
            {children}
        </SelectedCountryAccount.Provider>
    )
}