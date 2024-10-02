import { createContext, useContext, useState } from "react";

const DiscountRefresh = createContext()

export const useDiscountRefresh =()=>useContext(DiscountRefresh)
export const DiscountRefreshProvider= ({children})=>{
    const[refresh,setRefresh]=useState('')
    return(
        <DiscountRefresh.Provider value={{refresh,setRefresh}}>
            {children}
        </DiscountRefresh.Provider>
    )

}