import { createContext, useContext, useState } from "react";

const OwnerApartmentRefresh = createContext()

export const useOwnerApartmentRefresh =()=>useContext(OwnerApartmentRefresh)
export const OwnerApartmentRefreshProvider= ({children})=>{
    const [refresh,setRefresh]=useState()
    return(
        <OwnerApartmentRefresh.Provider value={{refresh,setRefresh}}>
            {children}
        </OwnerApartmentRefresh.Provider>
    )

}