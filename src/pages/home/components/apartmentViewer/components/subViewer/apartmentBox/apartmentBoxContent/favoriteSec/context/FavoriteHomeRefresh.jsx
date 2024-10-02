import { createContext, useContext, useState } from "react";

const FavoriteHomeRefresh = createContext()

export const useFavoriteHomeRefresh =()=>useContext(FavoriteHomeRefresh)
export const FavoriteHomeRefreshProvider= ({children})=>{
    const [refresh, setRefresh] = useState(false);
    return(
        <FavoriteHomeRefresh.Provider value={{refresh,setRefresh}}>
            {children}
        </FavoriteHomeRefresh.Provider>
    )

}