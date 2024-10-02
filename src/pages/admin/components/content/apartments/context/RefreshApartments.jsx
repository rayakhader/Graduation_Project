import { createContext, useContext, useState } from "react";

const RefreshApartments = createContext()

export const useRefreshApartments =()=>useContext(RefreshApartments)
export const RefreshApartmentsProvider= ({children})=>{
    const [refresh,setRefresh]=useState('')
    return(
        <RefreshApartments.Provider value={{ refresh,setRefresh }}>
            {children}
        </RefreshApartments.Provider>
    )

}