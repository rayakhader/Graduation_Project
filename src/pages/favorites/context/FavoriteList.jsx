import { createContext, useContext, useState } from "react";

const FavoriteList = createContext()

export const useFavorite =()=>useContext(FavoriteList)
export const FavoriteProvider= ({children})=>{
    const [favoriteList,setFavoriteList]=useState([])
    return(
        <FavoriteList.Provider value={{favoriteList,setFavoriteList}}>
            {children}
        </FavoriteList.Provider>
    )

}