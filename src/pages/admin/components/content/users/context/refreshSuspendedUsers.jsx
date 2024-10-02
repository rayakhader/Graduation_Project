import { createContext, useContext, useState } from "react";

const RefreshSuspendedUsers = createContext()

export const useSuspendedUsers =()=>useContext(RefreshSuspendedUsers)
export const SuspendedUsersRefreshProvider= ({children})=>{
    const [refresh,setRefresh]=useState('')
    return(
        <RefreshSuspendedUsers.Provider value={{refresh,setRefresh}}>
            {children}
        </RefreshSuspendedUsers.Provider>
    )

}