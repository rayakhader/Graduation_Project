import { createContext, useContext, useState } from "react";

const RefreshPayments = createContext()

export const useRefreshPayments =()=>useContext(RefreshPayments)
export const PaymentsRefreshProvider= ({children})=>{
    const[refreshPayments,setRefreshPayments]=useState('')
    return(
        <RefreshPayments.Provider value={{refreshPayments,setRefreshPayments}}>
            {children}
        </RefreshPayments.Provider>
    )

}