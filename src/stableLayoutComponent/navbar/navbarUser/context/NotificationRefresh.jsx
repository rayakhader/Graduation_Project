import { createContext, useContext, useState} from "react";

const NotificationRefresh = createContext()

export const useNotificationRefresh =()=>useContext(NotificationRefresh)
export const NotificationRefreshProvider= ({children})=>{
    const [refresh, setRefresh] = useState(null);
    return(
        <NotificationRefresh.Provider value={{refresh,setRefresh }}>
            {children}
        </NotificationRefresh.Provider>
    )
}