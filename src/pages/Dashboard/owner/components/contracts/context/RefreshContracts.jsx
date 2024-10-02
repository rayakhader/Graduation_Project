import { createContext, useContext, useState } from "react";

const RefreshContracts = createContext()

export const useRefreshContracts =()=>useContext(RefreshContracts)
export const ContractsRefreshProvider= ({children})=>{
    const[refreshContracts,setRefreshContracts]=useState('')
    return(
        <RefreshContracts.Provider value={{refreshContracts,setRefreshContracts}}>
            {children}
        </RefreshContracts.Provider>
    )

}