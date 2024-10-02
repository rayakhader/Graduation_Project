import { createContext, useContext, useState } from "react";

const SelectedTenant = createContext()

export const useSelectedTenant =()=>useContext(SelectedTenant)
export const SelectedTenantProvider= ({children})=>{
    const [selectedTenant,setSelectedTenant]=useState({})
    return(
        <SelectedTenant.Provider value={{selectedTenant,setSelectedTenant
        }}>
            {children}
        </SelectedTenant.Provider>
    )

}