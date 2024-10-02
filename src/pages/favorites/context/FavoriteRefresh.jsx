import { createContext, useContext, useState } from "react";

const FavoriteRefresh = createContext()

export const useFavoriteRefresh =()=>useContext(FavoriteRefresh)
export const FavoriteRefreshProvider= ({children})=>{
    const [refresh,setRefresh]=useState('')
    return(
        <FavoriteRefresh.Provider value={{refresh,setRefresh}}>
            {children}
        </FavoriteRefresh.Provider>
    )

}