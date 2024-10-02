import { createContext, useContext, useState } from "react";

const SelectedCityIdContext = createContext()

export const useSelectedCityId =()=>useContext(SelectedCityIdContext)
export const SelectedCityIdProvider= ({children})=>{
    const [selectedCityId,setSelectedCityId]=useState('')
    const[selectedCity,setSelectedCity]=useState('')
    return(
        <SelectedCityIdContext.Provider value={{ selectedCityId,setSelectedCityId,selectedCity,setSelectedCity }}>
            {children}
        </SelectedCityIdContext.Provider>
    )

}