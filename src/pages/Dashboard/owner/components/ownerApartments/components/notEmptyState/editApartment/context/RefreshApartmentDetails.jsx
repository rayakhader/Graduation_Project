import { createContext, useContext, useState } from "react";

const RefreshApartmentDetails = createContext()

export const useRefreshApartmentDetails =()=>useContext(RefreshApartmentDetails)
export const RefreshApartmentDetailsProvider= ({children})=>{
    const [refresh,setRefresh]=useState('')
    return(
        <RefreshApartmentDetails.Provider value={{refresh,setRefresh}}>
            {children}
        </RefreshApartmentDetails.Provider>
    )

}