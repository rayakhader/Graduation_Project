import { createContext, useContext, useState } from "react";

const RefreshApartments = createContext()

export const useRefreshApartments =()=>useContext(RefreshApartments)
export const RefreshApartmentsListProvider= ({children})=>{
    const [refreshAddDiscount,setRefreshAddDiscount]=useState()
    const[refreshDeleteDiscount,setRefreshDeleteDiscount]=useState()
    return(
        <RefreshApartments.Provider value={{refreshAddDiscount,setRefreshAddDiscount,refreshDeleteDiscount,setRefreshDeleteDiscount}}>
            {children}
        </RefreshApartments.Provider>
    )

}