import { createContext, useContext, useState } from "react";

const FollowingRefresh = createContext()

export const useFollowingRefresh =()=>useContext(FollowingRefresh)
export const FollowingRefreshProvider= ({children})=>{
    const[refresh,setRefresh]=useState('')
    return(
        <FollowingRefresh.Provider value={{refresh,setRefresh}}>
            {children}
        </FollowingRefresh.Provider>
    )

}