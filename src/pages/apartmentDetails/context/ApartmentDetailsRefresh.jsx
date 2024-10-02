import { createContext, useContext, useState } from "react";

const ApartmentDetailsRefresh = createContext()

export const useApartmentDetailsRefresh =()=>useContext(ApartmentDetailsRefresh)
export const ApartmentDetailsRefreshProvider= ({children})=>{
    const [refresh,setRefresh]=useState('')
    return(
        <ApartmentDetailsRefresh.Provider value={{refresh,setRefresh}}>
            {children}
        </ApartmentDetailsRefresh.Provider>
    )

}