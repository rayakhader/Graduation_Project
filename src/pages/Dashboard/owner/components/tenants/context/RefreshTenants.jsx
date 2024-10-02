import { createContext, useContext, useState } from "react";

const RefreshTenants = createContext()

export const useRefreshTenants =()=>useContext(RefreshTenants)
export const RefreshTenantsProvider= ({children})=>{
    const[refresh,setRefresh]=useState('')
    return(
        <RefreshTenants.Provider value={{refresh,setRefresh}}>
            {children}
        </RefreshTenants.Provider>
    )

}