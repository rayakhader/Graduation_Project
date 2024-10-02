import { createContext, useContext, useState } from "react";

const RefreshAdminSettings = createContext()

export const useAdminSettings =()=>useContext(RefreshAdminSettings)
export const AdminSettingsRefreshProvider= ({children})=>{
    const [refresh,setRefresh]=useState('')
    return(
        <RefreshAdminSettings.Provider value={{refresh,setRefresh}}>
            {children}
        </RefreshAdminSettings.Provider>
    )

}