import { createContext, useContext, useState } from "react";

const ViewContext = createContext()

export const useView =()=>useContext(ViewContext)
export const ViewProvider= ({children})=>{
    const [view, setView] = useState('grid');
    return(
        <ViewContext.Provider value={{view,setView}}>
            {children}
        </ViewContext.Provider>
    )

}